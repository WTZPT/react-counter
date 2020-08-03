
import React from 'react'
import Counter from '../Count/index'

class counterList extends React.Component {
   

    render() {
        return (
            <div>
                {new Array(6).fill(1).map((value,index) => (
                    <Counter key = {index}/>
                ))}
            </div>
        )
    }
}

export default counterList
