import React,{useState} from 'react'

var initial_text = "";
export default function Textform() {
    
    const [myStyle,setStyle] = useState({
        color: 'black',
        backgroundColor:'grey',
    });
    const [btnText,setBtnText] = useState("Enable Dark Mode");

    const handleOnClickup =()=>{
        console.log("uppercase was clicked");
        initial_text = text;
        let a= text.toUpperCase();
        setText(a);
    }
    const handleOnClicklow =()=>{
        // console.log("uppercase was clicked");
        let a= text.toLowerCase();
        setText(a);
    }
    const handleOnClickClear =()=>{
        // console.log("uppercase was clicked");
        setText('');
    }
    const handleOnClickBack =()=>{
        // console.log("uppercase was clicked");
        setText(initial_text);
    }
    const handleOnClicktheme =()=>{
        // console.log("uppercase was clicked");
        if(myStyle.color==='black'){
            setStyle({
                color: 'white',
                backgroundColor:'black',
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setStyle({
                color: 'black',
                backgroundColor:'grey',
            })
            setBtnText("Enable Dark Mode");
        }
        
    }
    const handleOnChange =(event)=>{
        console.log("onChange Function");
        setText(event.target.value);
    }

    const [text,setText] = useState('Enter Text Here -:');
    // setText("Update text from here");

    return (
        <div className='container' style={myStyle}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea - </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter the text' value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-secondary my-4 mx-2" onClick={handleOnClickup}>UpperCase</button>
                <button className="btn btn-secondary my-4 mx-2" onClick={handleOnClicklow}>Lowercase</button>
                <button className="btn btn-secondary my-4 mx-2" onClick={handleOnClickClear}>Clear</button>
                <button className="btn btn-secondary my-4 mx-2" onClick={handleOnClickBack}>Get your text back</button>
                <button className="btn btn-primary" onClick={handleOnClicktheme}>{btnText}</button>
            </div>
        </div>
    )
}
