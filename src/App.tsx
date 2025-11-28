
// import{Routes, Route } from "react-router-dom";
// import Loginpage from "./login-signup/component/LoginMainPage/Loginpage";
// import Signuppage from "./login-signup/Signup";
// function App() {
//   return (
//     <Routes>
//       {<Route path="/" element={<Loginpage/>}/> }
//       {<Route path="/Loginpage" element={<Loginpage/>}/> }
//       {<Route path="/Signuppage" element={<Signuppage/>}/> }

//     </Routes>
    
//   );
// }
// export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Loginpage from "./login-signup/component/LoginMainPage/Loginpage.js";
import Signuppage from "./login-signup/Signup.js";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Loginpage/>,
    errorElement: <h1>404 Not Found</h1>
  },
  {
    path: '/Signuppage',
    element: <Signuppage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={router}/> 
   </React.StrictMode>
)
