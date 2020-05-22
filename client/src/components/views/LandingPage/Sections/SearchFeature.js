import React from 'react'
import { Input } from 'antd' 

const { Search } = Input;

function SearchFeature() {
    return (
        <div>
            <Search 
                value
                onChangeplaceholder= "Search by typing..."
            />
        </div>
    )
}

export default SearchFeature
