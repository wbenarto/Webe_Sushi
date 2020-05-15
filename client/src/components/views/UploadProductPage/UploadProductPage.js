// RFCE functional component 
import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd'
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';


const { Title } = Typography;
const { TextArea } = Input;


const Categories = [
    { key:1, value: 'Maki'},
    { key:2, value: 'Futo Maki'},
    { key:3, value: 'Inside Out'},
    { key:4, value: 'Specialty Rolls'},
    { key:5, value: 'Nigiri'},
    { key:6, value: 'Sashimi'},
    { key:7, value: 'Party Platter'},
    { key:8, value: 'Omakase Set'},
    { key:9, value: 'Chef on Site'}
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [TypeValue, setTypeValue] =useState(1)

    const [Images, setImages] = useState([])
    
    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onTypeChange = (event) => {
        setTypeValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => { 
        console.log('update images fired from Upload product page');
        setImages(newImages);
    }

    return (
        <div style={{ maxWidth:'700px', margin: '2rem auto'}}>
            <div style={{ textAlign:'center', marginBottom:'2rem'}}>
                <Title level={2}> Upload Product Image </Title>
            </div>
        
        <Form>

        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={TitleValue}
        />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue}
        />
        <br />
        <br />
        <label>Price($)</label>
        <Input
            onChange={onPriceChange}
            value={PriceValue}
            type="number"
            />
        <br/>
        <br/>
    
        <label>Categories: </label>
        <br/>
        <select onChange={onTypeChange}>
            {Categories.map(type=>(
            <option key={type.key} value={type.key}>
                {type.value}
            </option>
            ))}

        </select>
        <br />
        <br />
        <Button 
            
        >
            Submit
        </Button>
        
        </Form>
        </div>


    )
}

export default UploadProductPage
