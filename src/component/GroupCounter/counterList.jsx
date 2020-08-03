
import React from 'react'
import Counter from '../Count/index'

class counterList extends React.Component {


    constructor(props) {
        super(props);
        this.state = { counters: 0, total: 0 }
    }


    increase = () => {
        this.setState({
            total: this.state.total + 1
        })
    }

    decrease = () => {
        this.setState({
            total: this.state.total - 1
        })
    }

    inputChange = e => {

        this.setState(
            { counters: parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0 }
        )
    }

    moveCounter = value => {
        this.setState({
            total: this.state.total - value
        })
    }

    render() {

        return (
            <div>
                <input type="number" name="" id="" value={this.state.counters} onChange={this.inputChange} />
                {new Array(this.state.counters).fill(1).map((value, index) => (
                    <Counter key={index} increase={this.increase} decrease={this.decrease} moveCounter={this.moveCounter} />
                ))}
                <hr />
                <span>{this.state.total}</span>
            </div>
        )
    }
}

export default counterList
