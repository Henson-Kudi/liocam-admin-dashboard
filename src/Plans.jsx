import React, {useState, useRef, useEffect} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from './useFetch'


function Plans({data, route}) {
    const deleteRef = useRef()
    const history = useHistory()
    const {pathname} = useLocation()

    const [plansFilter, setPlansFilter] = useState('')

    const {handleDelete, setDeleteItem, deleteBox, hideDeleteBox} = useFetch(pathname === '/' ? 'plans' : 'products', pathname === '/' ? 'designs' : 'products')

    const handleChange = (e) => {
        setPlansFilter(e.target.value)
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    function handleClickOutside(e){
        const {current : wrap} = deleteRef;
        if(wrap && !wrap.contains(e.target)){
            hideDeleteBox()
        }
    }


    return (
        <div>
            <section className="projects-section">
                <div className="filter-options">
                    <div className="filters">
                        <span className={pathname === '/' ? 'filter-option active' : 'filter-option not-active'} onClick={()=>{
                            setPlansFilter('')
                            history.push('/')
                        }}>Plans</span>
                        <span className={pathname !== '/' ? 'filter-option active' : 'filter-option not-active'} onClick={()=>{
                            setPlansFilter('')
                            history.push('/products')
                        }}>Products</span>
                    </div>
                    
                    <div className="options-container">
                        <Link to='/new-plan'>
                            <input type="button" value="Add New Plan" className="btn addPlan" />
                        </Link>
                        <Link to="/new-product"><input type="button" value="Add Product" className="btn addProduct" /></Link>
                    </div>
                </div>

                <div className="filterations">
                <div className="form-control">
                    <label htmlFor="filter-input">{
                        pathname === '/' ? 'Filter by Category' : 'Filter Products'
                    }</label>
                    {
                        pathname === '/' ?
                        <select type="text" name="filter" value={plansFilter} onChange={handleChange} id="filter-input" className="filter-input" >
                            <option value="" className='select-option'>Select</option>
                            <option value="bungalow">Bungalow</option>
                            <option value="duplex">Duplex</option>
                            <option value="apartment">Apartments</option>
                            <option value="other">Other Designs</option>
                        </select> :
                        <input type="text" name="product-filter" value={plansFilter} onChange={handleChange} id="filter-input" className="filter-input" />
                    }
                </div>
                </div>
            </section>

            <section className="projects-display-section">
                {
                data?.filter(item =>{
                    if(!plansFilter || plansFilter === ''){
                        return true
                    }
                    if(item.category?.toLowerCase().includes(plansFilter?.toLowerCase()) || item.title?.toLowerCase().includes(plansFilter?.toLowerCase()) || item.name?.toLowerCase().includes(plansFilter?.toLowerCase())){
                        return true
                    }
                }).map(item => (
                    <div className="project-item" key={item._id}>
                    <div className="item-image-container" onClick={()=>{
                        history.push(`/${route}/${item.id}/edit`)
                    }}>
                        <img src={item.images[0]} alt="Project Item" className="item-image" />
                    </div>
                    <div className="text-cont">
                        <p onClick={()=>{
                        history.push(`/${route}/${item.id}/edit`)
                    }}>{item.productName?.slice(0, 25) || item.name?.slice(0,25)}...</p>
                        <i className="fas fa-trash" onClick={()=>{
                            setDeleteItem(item)
                        }}></i>
                    </div>
                    </div>
                ))
                }
            </section>

            {
                deleteBox && <div className='delete-box-cont'>
                    <div className='delete-box' ref={deleteRef}>
                    <p>Are you sure you want to delete this item?</p>
                    <div className='button-cont'>
                        <button className='btn' onClick={hideDeleteBox}>No.Cancel</button>
                        <button className='btn btn-delete' onClick={handleDelete}>Yes, Delete</button>
                    </div>
                    </div>
                    
                </div>
            }
            <ToastContainer/>
        </div>
    )
}

export default Plans
