
import React from 'react'
import Counter from '../Count/index'
import mySignal from '../myObject'

class counterList extends React.Component {
   
     

    constructor(props) {
        super(props);
        this.state = {counters: 0,}
    }
    

    inputChange = e => {
        console.log(e)
        this.setState(
           {counters: parseInt(e.target.value) > 0 ?  parseInt(e.target.value) : 0 }
        )
    }
  
    render() {
      
        return (
            <div>
                <input type="number" name="" id="" value={this.state.counters}  onChange={this.inputChange} />
                {new Array(this.state.counters).fill(1).map((value,index) => (
                    <Counter key = {index}/>
                ))}
            </div>
        )
    }
}

export default counterList
