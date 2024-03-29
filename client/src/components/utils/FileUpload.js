import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";

function FileUpload(props) {
  const [Images, setImages] = useState([]);
  
  console.log('file upload fired')
  console.log(props)
  console.log(Images)

  const onDrop = (files) => {
      
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    console.log(Array.from(formData))
    
    Axios.post("/api/product/uploadImage", formData, config).then(
      (response => {
        console.log(response.data.image)
        console.log(Array.from(formData)[0])
        if (response.data.success) {
          
          setImages([...Images, response.data.image]);
          props.refreshFunction([...Images, response.data.image]);
        } else {
           
          alert("Failed to save the Image in Server");
        }

       
      })

    );
    //save the image we chose inside node server
    console.log(`onDrop function fired from file upload`)
    // console.log(Images)
    // console.log(files[0])
  };

  const onDelete =(image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images]
    newImages.splice(currentIndex, 1)

    setImages(newImages)
    props.refreshFunction(newImages)

  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone
        onDrop={onDrop}
        multiple={false}
        maxSize={800000}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Icon type="plus" style={{ fontSize: "3rem" }} />
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div onClick={onDelete}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:5000/${image}`}
              alt={`productImage-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
