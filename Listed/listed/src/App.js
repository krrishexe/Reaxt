import './Media/Styles/style.css';
import './Media/Styles/App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';



function App() {


  return (
    <div className="App">
      
      <Login />

      {/* <Dashboard /> */}

    </div>
  );
}

export default App;




// import './Media/Styles/style.css';
// import './Media/Styles/App.css';
// import Login from './Components/Login';
// import Dashboard from './Components/Dashboard';

// import { useEffect } from 'react';
// import { gapi } from 'gapi-script';

// const clientId ="907758410831-9lco8i44fomo0t1bda4oa47hqnin51ih.apps.googleusercontent.com"

// function App() {

//   useEffect(()=>{
//     function start(){
//       gapi.client.init({
//         clientId:clientId,
//         scope:''
//       })
//     }

//     gapi.load('client:auth2',start)
//   })

//   return (
//     <div className="App">
      
//       <Login />

//       {/* <Dashboard /> */}

//     </div>
//   );
// }

// export default App;
