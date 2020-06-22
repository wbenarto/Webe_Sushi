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
    const [CategoryValue, setCategoryValue] =useState(1)

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

    const onCategoryChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => { 
        console.log('update images fired from Upload product page');
        setImages(newImages);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit button clicked")

        if (!TitleValue || !DescriptionValue || !PriceValue || !CategoryValue || !Images ) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            categories: CategoryValue
        }
        console.log(variables)

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                console.log('Axios post uploadProduct Fired')
                console.log(response)
                if(response.data.success) {
                    alert('Product Successfully Uploaded!')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })
        
    }

    return (
        <div style={{ maxWidth:'700px', margin: '6rem auto'}}>
            <div style={{ textAlign:'center', marginBottom:'2rem'}}>
                <Title level={2}> Upload Product Image </Title>
            </div>
        
        <Form onSubmit={onSubmit}>

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
        <select onChange={onCategoryChange}>
            {Categories.map(type=>(
            <option key={type.key} value={type.key}>
                {type.value}
            </option>
            ))}

        </select>
        <br />
        <br />
        <Button 
            onClick={onSubmit}
        >
            Submit
        </Button>
        
        </Form>
        </div>


    )
}

export default UploadProductPage
