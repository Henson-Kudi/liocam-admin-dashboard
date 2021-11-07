import React, { useState, useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import uuid from 'react-uuid'
import { toast, ToastContainer } from 'react-toastify';
import app from './firebase'
import {baseURL} from './axios'
import './NewPlan.css'
import useDragAndDrop from './useDragAndDrop';
import useFetch from './useFetch';


function UpdateProduct() {
    const formRef = useRef(null)
    const {plan : product, active, errorMessage, dragenter, dragleave, drop, handleFileChange, handleChange, files, setFiles, urls, setUrls,  filter, setPlan} = useDragAndDrop('products', 'products')

    const {data} = useFetch('products', 'products')
    const {id} = useParams()

    useEffect(() => {
        const items = data?.filter(item => item.id === id)
        setPlan(items[0])
        
    }, [data])

    const postImage = async function(file){
        const filename = uuid();
        const storageRef = app.storage().ref('products')
        const fileRef = storageRef.child(filename)
        await fileRef.put(file)
        const url = await fileRef.getDownloadURL()
        setUrls(prev => ([...prev, url]))
        return url
    }
 
    const handleSubmit = async(e)=>{
        e.preventDefault()

        if (product.images.length > 0) {
            await baseURL.put('products', {
                    ...product,
                }).then(res => {
                    toast.success(res.data.message)
                })
        }else{
            
            if (files.length === 0) {
                return alert('Please add image(s)')
            }

            try {
                const imgUrls = await Promise.all(files.map(file => (
                    postImage(file)
                )))

                await baseURL.put('products', {
                    ...product,
                    images: imgUrls,
                }).then(res => {
                    toast.success(res.data.message);
                })
            } catch (error) {
                console.log(error);
            }finally {
                setPlan({})
                setFiles([])
                setUrls([])
            }
        }
    }

    return (
        <div className="new-product">
            <h1>View and/or update Product</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="container">
                    <div className="form-control-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" name="productName" id="productName" className="productName" onChange={handleChange} value={product?.productName} required placeholder="Enter Product Name"/>
                    </div>
                    <div className="form-control-group">
                        <textarea name="description" id="description" rows="10" onChange={handleChange} placeholder="Enter Description" value={product?.description} required></textarea>
                    </div>

                    {
                        product?.images?.length > 0 ?
                        <div>
                            <div style={{
                            display: 'flex',
                            justifyContent : 'center',
                            gap : '1rem',
                            flexWrap: 'wrap',
                        }}>
                                {
                                    product?.images?.map((img, i) => (
                                        <div className="update-img-cont" key={i} style={{width: '10rem',  overflow: 'hidden', height:'10rem'}}>
                                            <img src={img} alt='uploaded image' style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit:'cover'
                                            }}/>
                                        </div>
                                    ))
                                }
                            </div>
                            <p style={{color: 'var(--main-background)', textAlign:'center', cursor: 'pointer'}} onClick={()=>{setPlan(prev => (
                                {
                                    ...prev,
                                    images : []
                                }
                            ))}}>Remove All Images</p>
                        </div> :
                        <div className={active === 'true' ? "add-image-cont active" : active === 'bad' ? "add-image-cont badfile" : "add-image-cont"}
                            onDragEnter={dragenter}
                            onDragLeave={dragleave}
                            onDrop={drop}
                            onDragOver={dragenter}
                        >
                            <p className="add-image-text">{errorMessage}</p>
                            <span>Or</span>
                            <input type="file" name="images" id="add-image" className="add-image" accept='image/jpg, image/png, image/jpeg'  multiple onChange={handleFileChange} />
                            
                            <label htmlFor="add-image" className='browse'>Browse</label>
                            <p>{files.length} Image(s) Added</p>
                        </div>
                    }

                    

                    <div className="plans-and-btns">
                        <div className="plan-files">
                            {
                                files?.map((item) => (
                                    <div className="file">
                                        <span>{item.name}</span>
                                        <i className="fas fa-times" onClick={()=>{
                                            filter(item.name)
                                        }}></i>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="button-cont">
                            <button className="btn">
                                <Link to="/">Cancel</Link>
                            </button>
                            <button className="btn-sub btn" type='submit'>
                                Update
                            </button>
                        </div>
                    </div>

                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default UpdateProduct
