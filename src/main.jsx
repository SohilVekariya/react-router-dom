import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { AllRoutes } from "./constants/Routes";
import User from "./components/User/User";
import Github,{githubInfoLoader} from "./components/Github/Github";
// const router = createBrowserRouter([
//   {
//     path: AllRoutes.Home,
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: AllRoutes.About,
//         element: <About />,
//       },
//       {
//         path: AllRoutes.Contact,
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path={AllRoutes.About} element={<About/>}/>
      <Route path={AllRoutes.Contact} element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route loader = {githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
