import React, { Component } from 'react'

export class NewsItem extends Component {
    
    handleOnCLick=()=>{

    }

    render() {
        let {title,description,imageUrl,newsURL} = this.props ;
        return (
            
            <div>
                <div className="card" style={{width: "18rem"}}> 
                    {/* double "curly brackets" bcoz first one is to make it a js file and second one is for to make it an object. */}
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title} ...</h5>
                            <p className="card-text">{description} ...</p>
                            <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
