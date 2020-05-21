import React , { useState }from 'react';
import { Collapse, Radio } from 'antd';
const { Panel } = Collapse;

const price =[
    {
        '_id':0,
        'name': "Any",
        'array': []
    },
    {
        '_id': 1,
        'name': "$0 to $9",
        'array': [0, 9]
    },
    {
        '_id': 3,
        'name': "$10 to 25",
        'array': [0, 25]
    },
    {
        '_id': 4,
        'name': "$26 to $50",
        'array': [26, 50]
    },
    {
        '_id': 5,
        'name': "$51 to $100",
        'array': [51, 100]
    },
    {
        '_id': 6,
        'name': "$101 to $500",
        'array': [101, 500]
    },
]



function RadioBox(props) {

    const [Value, setValue] = useState('0')

    const renderRadioBox = () => (
        price.map((value)=> (
            <Radio key={value._id} value={`${value.array}`}>{value.name}</Radio>
    
        ))
    )
    
    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }


    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header='Price' key='1'>
                    <Radio.Group onChange={handleChange} value={Value}>
                        {renderRadioBox()}
                    </Radio.Group>
                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox
