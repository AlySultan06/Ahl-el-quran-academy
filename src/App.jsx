/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import theme from "./theme.jsx";
import { useTheme } from "@mui/material";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//components

import Header from "./components/Home/Header.jsx";
import Landing from "./components/Home/Landing.jsx";
import About from "./components/Home/About.jsx";
import LearnSystem from "./components/Home/LearnSystem.jsx";
import Advantages from "./components/Home/Advantages.jsx";
import Courses from "./components/Home/Courses.jsx";
import Contact from "./components/Home/Contact.jsx";
import Footer from "./components/Home/Footer.jsx";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const theme = useTheme();
  const [loaded,setLoaded] = useState(false)



  useEffect(() => {
    setLoaded(true)
    AOS.init({
      duration:600,
      easing: "ease-out",
      once: false,
      mirror:true
     
    });
  },[])



  if(loaded){
    return(
      <>
      <Box
    sx={{
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      backgroundImage:
      "linear-gradient(90deg, rgb(219 193 100 / 46%) 57%, rgb(255 228 82 / 28%) 100%), url(../imgs/landing.jpeg)"
      ,
      backgroundSize:"cover",
      height: "100vh",
      width: "100%",
    }}
  >
    <Header />
    <Landing />
  </Box>
  <About/>
  <LearnSystem/> 
  <Advantages/>
  <Courses/>
  <Contact/>
  <Footer/>
  </>
    )
  }else{
    return(
      <Box sx={{ height:"100vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className="loader">
        </div>
      </Box>
    )
  }
  
}

export default App;
