import React, { useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import uuid from 'react-uuid'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from './firebase'
import {baseURL} from './axios'
import './NewPlan.css'
import useDragAndDrop from './useDragAndDrop';
import useFetch from './useFetch';

function UpdatePlan() {
    const formRef = useRef(null)
    const {plan, active, errorMessage, dragenter, dragleave, drop, handleFileChange, handleChange, files, setFiles, urls, setUrls,  filter, setPlan} = useDragAndDrop('add-plan', 'designs')
    const {data} = useFetch('plans')
    const {id} = useParams()

    useEffect(() => {
        const items = data?.filter(item => item.id === id)
        setPlan(items[0])
        
    }, [data])

    const postImage = async function(file){
        const filename = uuid();
        const storageRef = app.storage().ref('designs')
        const fileRef = storageRef.child(filename)
        await fileRef.put(file)
        const url = await fileRef.getDownloadURL()
        setUrls(prev => ([...prev, url]))
        return url
    }
 
    const handleSubmit = async(e)=>{
        e.preventDefault()

        if (plan.images.length > 0) {
            await baseURL.put('plans', {
                    ...plan,
                }).then(res => {
                    toast.success(res.data.message);
                }).catch(err => {
                    toast.error('Failed to update item. Please try again later.')
                }).finally(()=>{
                    // setLoader(false)
                    setPlan({})
                    setFiles([])
                    setUrls([])
                })
        }else{
            
            if (files.length === 0) {
                return alert('Please add image(s)')
            }

            try {
                const imgUrls = await Promise.all(files.map(file => (
                    postImage(file)
                )))

                await baseURL.put('plans', {
                    ...plan,
                    images: imgUrls,
                }).then(res => {
                    toast.success(res.data.message);
                })
            } catch (error) {
                console.log(error);
                toast.error('Failed to update item. Please try again later.');
            }finally {
                setPlan({})
                setFiles([])
                setUrls([])
                // setLoader(false)
            }
        }
    }

    return (
        <div>
            <div className="new-plan-container">
                <h1>View and/or Edit Plan</h1>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="new-plan-details">
                        <div className="form-control">
                            <label htmlFor="name">Plan Name</label>
                            <input type="text" name="name" id="name" className="name" value={plan?.name} onChange={handleChange} placeholder="Enter Plan Name" required />
                        </div>

                        <div className="form-control">
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" className="category" value={plan?.category} onChange={handleChange} required >
                                <option value="">Select</option>
                                <option value="bungalow">Bungalow</option>
                                <option value="duplex">Duplex</option>
                                <option value="apartment">Apartment</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label htmlFor="basicPrice">Basic Price</label>
                            <input type="number" name="basicPrice" id="basicPrice" className="basicPrice" value={plan?.basicPrice} onChange={handleChange} placeholder="Enter Basic Price" required/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="standardPrice">Standard Price</label>
                            <input type="number" name="standardPrice" id="standardPrice" className="standardPrice" value={plan?.standardPrice} onChange={handleChange} placeholder="Enter Standard Price" required />
                        </div>

                        <div className="form-control">
                            <label htmlFor="premiumPrice">Premium Price</label>
                            <input type="number" name="premiumPrice" id="premiumPrice" className="premiumPrice" value={plan?.premiumPrice} onChange={handleChange} placeholder="Enter Premium Price" required />
                        </div>
                        <div className="form-control">
                            <label htmlFor="plotWidth">Plot Width</label>
                            <input type="text" className="plotWidth" id="plotWidth" name="plotWidth" value={plan?.plotWidth} onChange={handleChange} placeholder="Enter Plot Width in metres (m)"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="plotLength">Plot Length</label>
                            <input type="text" className="plotLength" id="plotLength" name="plotLength" value={plan?.plotLength} onChange={handleChange} placeholder="Enter Plot Length in metres (m)"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="plotArea">Plot Area</label>
                            <input type="text" className="plotArea" id="plotArea" name="plotArea" value={plan?.plotArea} onChange={handleChange} placeholder="Enter Plot Area in metres (m)"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="parking">Parking</label>
                            <select className="parking" id="parking" name="parking" value={plan?.parking} onChange={handleChange}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label htmlFor="freeSpace">Free Space</label>
                            <input type="text" className="freeSpace" id="freeSpace" name="freeSpace" value={plan?.freeSpace} onChange={handleChange} placeholder="Free Space"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="stories">Stories</label>
                            <input type="number" className="stories" id="stories" name="stories" value={plan?.stories} onChange={handleChange} placeholder="Number of Stories"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="apartments">Apartments</label>
                            <input type="number" className="apartments" id="apartments" name="apartments" value={plan?.apartments} onChange={handleChange} placeholder="Number of apartments"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="livingRooms">Living Rooms</label>
                            <input type="number" className="livingRooms" id="livingRooms" name="livingRooms" value={plan?.livingRooms} onChange={handleChange} placeholder="Number of living rooms"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="rooms">Rooms</label>
                            <input type="number" className="rooms" id="rooms" name="rooms" value={plan?.rooms} onChange={handleChange} placeholder="Number of rooms"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="toilets">Toilets</label>
                            <input type="number" className="toilets" id="toilets" name="toilets" value={plan?.toilets} onChange={handleChange} placeholder="Number of toilet rooms"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="kitchens">Kitchens</label>
                            <input type="number" className="kitchens" id="kitchens" name="kitchens" value={plan?.kitchens} onChange={handleChange} placeholder="Number of kitchens"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="balconies">Balconies</label>
                            <input type="number" className="balconies" id="balconies" name="balconies" value={plan?.balconies} onChange={handleChange} placeholder="Number of balconies"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="verandas">Verandas</label>
                            <input type="number" className="verandas" id="verandas" name="verandas" value={plan?.verandas} onChange={handleChange} placeholder="Number of verandas"/>
                        </div>
                    </div>

                    <div className="plan-description-cont">
                        <textarea rows='5' className="description" id="descriptio" name="description" value={plan?.description} onChange={handleChange} placeholder="Describe this plan here" required />
                    </div>

                    {
                        plan?.images?.length > 0 ?
                        <div>
                            <div style={{
                            display: 'flex',
                            justifyContent : 'center',
                            gap : '1rem',
                            flexWrap: 'wrap',
                        }}>
                                {
                                    plan?.images?.map((img, i) => (
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
                            <p>{files.length} Image(s) added</p>
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
                                <Link to="/products">Cancel</Link>
                            </button>
                            <button className="btn-sub btn" type='submit'>
                                Update
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <ToastContainer/>
        </div>
    )
}

export default UpdatePlan
