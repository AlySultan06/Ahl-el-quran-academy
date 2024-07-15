import { createTheme } from "@mui/material";



const theme = createTheme({

  direction:"rtl",

palette:{

text:{
    primary:'#cba557',
    secondary:{
      blue:'#374151',
      white:"white"
    }
},

background:{
    primary:'white',
    secondary:'#F5F7F8'
}

},



typography: {
    fontFamily: "cairo",
  h1: {
      fontWeight: 800,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      }
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.3rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      }}
  
      ,h3:{
        fontWeight: 700,
        fontSize: '1.8rem',
        '@media (max-width:600px)': {
          fontSize: '1.6rem',
      }
  
    },
    body1: {
      fontWeight: 500,
      fontSize: '1.2rem',// 16px for detail page
       lineHeight:"1.9",
      '@media (max-width:600px)': {
        fontSize: '1rem',
      }
    },
    body2: {
      fontWeight: 500,
      lineHeight:"1.9",
      fontSize: '0.9rem', // 14px for homepage items
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      }
    },
  }  











})

export default theme;