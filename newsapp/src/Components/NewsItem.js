import React from 'react'

const NewsItem =(props)=>{
    
        let {title,description,imageUrl,newsURL,date,source} = props ;
        return (
            
            <div>
                <div className="card" style={{width: "auto",height:"auto"}}> 
                    {/* double "curly brackets" bcoz first one is to make it a js file and second one is for to make it an object. */}
                    <img src={!imageUrl?"https://cdn.vox-cdn.com/thumbor/GvEqiko_ni9bbapc-_nR6yfKs5E=/0x196:2738x1630/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23954273/1236850413.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title} ...</h5>
                            <p className="card-text">{description} ...</p>
                            <p className="card-text" style={{margin:"30px 0px"}}> By {source} on {date}</p>
                            <a href={newsURL} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
}

export default NewsItem
