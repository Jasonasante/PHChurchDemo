import React, { useState } from 'react'
import './InputImage.css'

const InputImage = ({ setLocalImage }) => {
    const [local, setLocal] = useState(false)
    const [urlImage, setUrlImage] = useState("")
    const [selectedImage, setSelectedImage] = useState(null)
    const [error, setError] = useState("")

    function handleChange(location) {
        setLocalImage("")
        document.querySelector(".view-image").value = ""
        if (location) {
            setLocal(true)
            setUrlImage("")
        } else {
            setSelectedImage(null)
            setLocal(false)
        }
    }

    function addErrorMessage(message) {
        setError(message)
        setTimeout(() => setError(""), 10000)
    }


    return (
        <>
            <div className="image-location">
                <div>
                    <input type="radio" id="Url" name="img-location" value="Url" onChange={() => handleChange(false)} defaultChecked />
                    <label htmlFor="Url">Add Online Image</label>
                </div>
                <div>
                    <input type="radio" id="local" name="img-location" value="local" onChange={() => handleChange(true)} />
                    <label htmlFor="local">Add Local Image</label>
                </div>
            </div>
            {local ? (
                <>
                    {selectedImage &&
                        <div className="view-image-container">
                            <img src={URL.createObjectURL(selectedImage)} alt="" onClick={() => {
                                document.querySelector(".view-image").value = ""
                                setLocalImage("")
                                setSelectedImage(null)
                            }} />
                        </div>}
                    <div className="add-image">
                        <input type="file" className='form-input view-image' onChange={(e) => {
                            const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'video/mp4', 'image/gif'];
                            const file = e.target.files[0]
                            if (file && allowedTypes.includes(file.type)) {
                                if (file.size < 20000000) {
                                    setSelectedImage(file)
                                    const fileReader = new FileReader();
                                    fileReader.onload = function (e) {
                                        setLocalImage(e.target.result);
                                    };
                                    fileReader.readAsDataURL(file);
                                } else {
                                    addErrorMessage("file too big")
                                }
                            } else {
                                addErrorMessage("Invalid type")
                            }
                            ;
                        }} />

                    </div>
                </>
            ) : (
                <>
                    {urlImage &&
                        <div className="view-image-container">
                            <img src={urlImage} alt="" onClick={() => {
                                document.querySelector(".view-image").value = ""
                                setUrlImage("")
                                setLocalImage("")
                            }} />
                        </div>}
                    <div className="add-image">
                        <input type="text" className='form-input view-image' placeholder="https://..."
                            onChange={(e) => {
                                setUrlImage(e.target.value)
                                setLocalImage(e.target.value)
                            }}
                        />
                    </div>
                </>
            )}
            <p>File Must Not Exceed 20MB</p>
            {error &&
                <p className='error-message'>{error}</p>
            }
        </>
    )
}

export default InputImage
