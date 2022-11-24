import React,{useState,useRef }from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const App =()=>{

  // const [state,setState] = useState(0);
  const textOne = useRef()

  const getText =()=>{
    console.log("helllo");
    console.log( textOne.current);
    textOne.current.style.color = "green"
  }

  return(
    <>
    <h1 ref={textOne}> Hello</h1>
    
    
    <button onClick={()=> getText()}> Submit</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
