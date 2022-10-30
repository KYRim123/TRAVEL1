import { Fragment } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import LayoutDefault from "./layouts/LayoutDefault";
import {publicRoutes} from "./routes"

function App() {
   
  return <Router>
     <div className="App">
        <Routes >
            {
              publicRoutes.map((route, index) =>{
                 let Layout = LayoutDefault
                 if(route.layout){
                    Layout = route.layout
                 }else if(route.layout === null) {
                    Layout = Fragment
                 } 
                 const Page = route.component || Fragment
                 
                 return <Route key={index} path = {route.path} element = {<Layout ><Page/></Layout>}></Route>
              })
            }
        </Routes>
  </div>
  </Router>
}

export default App;
