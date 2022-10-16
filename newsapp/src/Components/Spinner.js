import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <img src={loading} alt="" height="70px" width="70px"/>
                </div>
            </div>
        )
    }
}

export default Spinner
