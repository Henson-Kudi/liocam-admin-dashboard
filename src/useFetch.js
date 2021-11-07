import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import {baseURL} from './axios'
import app from './firebase'

function useFetch(url, folder) {
    // const {user} = useContext(UserContext)
    const [data, setData] = useState([])
    const [ddata, setdData] = useState({})
    const [loader, setLoader] = useState(false)
    const [deleteBox, setDeletBox] = useState(false)

    useEffect(()=>{
        let source = axios.CancelToken.source();
        let unMounted = false;
        fetchData(source, unMounted, url)

        return ()=>{
            unMounted = true;
            source.cancel('Cancelling request')
        }
    }, [url])

    const fetchData = async(source, unMounted, url)=>{
        try {
            setLoader(true)
            const res = await baseURL.get(`/${url}`)
            
            setData(await res.data)
        } catch (error) {
            if (!unMounted) {
                if (axios.isCancel(error)) {
                console.log('Request Cancelled');
            }else{
                console.log('Something went wrong');
            }
            }
        }finally{setLoader(false)}
    }

    const refetchData = async()=>{
        await baseURL.get(`/${url}`).then(async(res)=>{
            const data = await res.data
            setData(data)
        })
    }

    const setDeleteItem = (obj) =>{
        setdData(obj)
        setDeletBox(true)
    }

    const hideDeleteBox = ()=>{
        setDeleteItem({})
        setDeletBox(false)
    }

    const deleteImage = async(imgUrl)=>{
        const filename = imgUrl.split('%')[1].split('?')[0].slice(2);
        const fileReference = app.storage().ref(folder)
        await fileReference.child(filename).delete()
    }

    const handleDelete = async()=>{
        setLoader(true)
        try {
            const res = await baseURL.patch(`/${url}`, ddata)
            const data = await res.data
            toast.success(data.message)
            refetchData()

            await Promise.all(ddata.images?.map(item => {
                deleteImage(item)
            }))
        
        } catch (error) {
            toast.error('Failed to delete item. Please try again')
        }finally{
            setLoader(false)
            hideDeleteBox()
        }
        
    }




    return {
        data, loader, refetchData, handleDelete, setDeleteItem, deleteBox, hideDeleteBox
    }
}

export default useFetch
