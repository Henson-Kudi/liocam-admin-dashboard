import {useState} from 'react'
import app from './firebase'
import uuid from 'react-uuid'
import {baseURL} from './axios'
import { toast } from 'react-toastify'

export default function (route, folder){
    const [updatePlan, setUpdatePlan] = useState(false)
    const [active, setActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState('Drag and drop images here (max : 5)')
    const [files, setFiles] = useState([])
    const [urls, setUrls] = useState([])

    const [plan, setPlan] = useState({id : uuid()});

    const activeClass = ()=> setActive('true')
    const badFilesClass = ()=> setActive('bad')
    const inactiveClass = ()=> setActive('false')
    const preventDefaults = (e)=> e.preventDefault()

    const checkFilesType = (dataFiles)=> {
        // setFiles([])

        if ((files.length + dataFiles.length) > 5) {
            setErrorMessage('Note more than 5 images please.')
            setFiles([])
            return badFilesClass()
        }
        const imagePattern = /image-*/
        
        for (const file of dataFiles) {
            
            if (!file.type.match(imagePattern)) {
                alert('Bad files chosen. Please select only images')
                break
            }
            inactiveClass()
            setFiles(prev => (
                [ ...prev, file ]
            ))
        }
    }


    const dragenter = (e) => {
        preventDefaults(e)
        const dataTransfer = e.dataTransfer;
        const files = [...dataTransfer.items]
        const imagePattern = /image-*/

        if (files.length > 5) {
            setErrorMessage('Note more than 5 images please.')
            return badFilesClass()
        }

        for (const file of files) {
            if (!file.type.match(imagePattern)) {
                setErrorMessage('Bad file types chosen. Please add only images')
                badFilesClass()
                break
            }
            activeClass()
            setErrorMessage('Drop images to upload')
        }
        
    }

    const handleChange = (e)=>{
        const {name, value} = e.target
        setPlan(prev => (
            {
                ...prev,
                [name] : value
            }
        ));
    };

    const dragleave = (e) => {
        preventDefaults(e)
        inactiveClass()
        setErrorMessage('Drag and drop images here (max : 5)')
    }

    const drop = (e) => {
        preventDefaults(e)
        inactiveClass()
        const dataTransfer = e.dataTransfer;
        const files = [...dataTransfer.files]
        checkFilesType(files)
        
    }

    const handleFileChange = (e) => {
        preventDefaults(e)
        inactiveClass()
        const dataFiles = [...e.target.files]

        checkFilesType(dataFiles)

    }

    const postImage = async function(file){
        const filename = uuid();
        const storageRef = app.storage().ref(folder)
        const fileRef = storageRef.child(filename)
        await fileRef.put(file)
        const url = await fileRef.getDownloadURL()
        setUrls(prev => ([...prev, url]))
        return url
    }


    const handleSubmit = async(e) => {
        e.preventDefault()
        if (files.length === 0) {
            return alert('Please add image(s)')
        }

        try {
            const imgUrls = await Promise.all(files.map(file => (
                postImage(file)
            )))

            await baseURL.post(`/${route}`, {
                ...plan,
                images: imgUrls,
            }).then(res => {
                toast.success(res.data.message)
            })
            console.log(plan);
        } catch (error) {
            toast.error('Failed to add item. Please try again.')
            console.log(error);
        }finally {
            e.target.reset()
            setPlan({id : uuid()})
            setFiles([])
            setUrls([])
        }

    }

    const filter = (filename)=>{
        setFiles(files.filter(item => item.name !== filename))
    }

    const showUpdate = (data)=>{
        setPlan(data)
        setUpdatePlan(true)
    }


    return {
        plan, active, errorMessage, dragenter, dragleave, drop, handleFileChange, handleChange, handleSubmit, filter, updatePlan, showUpdate, setPlan, files, setFiles, urls, setUrls,
    }
}