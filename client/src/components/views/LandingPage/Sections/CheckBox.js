import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd'

const { Panel } = Collapse 
const categories = [
    {
        "_id":1,
        "name": "Maki"
    },
    {
        "_id":2,
        "name": "Futo Maki"
    },
    {
        "_id":3,
        "name": "Inside Out"
    },
    {
        "_id":4,
        "name": "Specialty Roll"
    },
    {
        "_id":5,
        "name": "Nigiri"
    },
    {
        "_id":6,
        "name": "Sashimi"
    },
    {
        "_id":7,
        "name": "Party Platter"
    },
    {
        "_id":8,
        "name": "Omakase Set"
    },
    {
        "_id":9,
        "name": "Chef on Site"
    }
]

function CheckBox(props) {

    const [Checked, setChecked] = useState([])
    
    
    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if(currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }

    const renderCheckboxLists = () => categories.map((value,index)=>(
        
        <React.Fragment key={index}>
        <Checkbox
            onChange={()=>handleToggle(value._id)}
            type='checkbox'
            checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
    </React.Fragment>
    ))

    return (
        <div>
                <Collapse defaultActiveKey={['0']}>
                    <Panel header key="1">
                            {renderCheckboxLists()}
                    </Panel>
                </Collapse>
        </div>
    )
}

export default CheckBox;
