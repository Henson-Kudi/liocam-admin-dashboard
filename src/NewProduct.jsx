import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useDragAndDrop from './useDragAndDrop';
import './NewProduct.css';

function NewProduct() {
    const formRef = useRef(null);
    const {plan:product, active, errorMessage, dragenter, dragleave, drop, handleFileChange, handleSubmit, handleChange, files, filter} = useDragAndDrop('products', 'products')

    
    return (
        <div className="new-product">
            <h1>Add New Product</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="container">
                    <div className="form-control-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" name="productName" id="productName" className="productName" onChange={handleChange} value={product.productName} required placeholder="Enter Product Name"/>
                    </div>
                    <div className="form-control-group">
                        <textarea name="description" id="description" rows="10" onChange={handleChange} placeholder="Enter Description" value={product.description} required></textarea>
                    </div>

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
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default NewProduct
