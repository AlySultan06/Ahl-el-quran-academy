/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

 import Fade from '@mui/material/Fade';







const Contact = () => {

  const [loading,setLoading] = useState("normal")

  const initialValues = {
    name: "",
    tel: "",
    message: "",
  };

  const onSubmit = () => {
    setLoading(true);
    console.log("worked")



  };

  const validationSchema = Yup.object({
    name: Yup.string().required("يرجي إدخال الإسم"),
    tel: Yup.number().min(10).max(15).positive().integer().required("يرجي إدخال رقم الهاتف"),
    message: Yup.string().min(10).required("يرجي إدختا الرسالة"),
  });
 
  return (
    <Box sx={{  backgroundColor: "background.secondary",
        backgroundImage: "url(..imgs/decor.png)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "cover",
        py:"75px"}}>
      <Container maxWidth="xl">
        <Box sx={{ mb: "90px" }}>
        <Typography
          variant="h2"
          data-aos="fade-down"
          color="text.secondary.blue"
          sx={{
            borderBottom: "5px solid",
            width: "fit-content",
            m: "auto",
            pb: "15px",
            borderColor: "text.primary",
            mb: "50px",
          }}
        >تواصل معنا
        </Typography>
        </Box>

        <FormContent initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema} loading={loading}/>
      </Container>
    </Box>
  );
}




function FormContent(props){


if(props.loading === true){
  return(
    <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
  <CircularProgress sx={{color:"white"}} size={150}/>
  </Box>)
}

if(props.loading === "normal"){
  return(<Formik
    initialValues={props.initialValues}
    onSubmit={props.onSubmit}
    validationSchema={props.validationSchema}
    >
    {({ errors, touched }) => (
      <Form
      data-aos="fade-down"
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
        
        }}
      >

        <Field name="name">
          {({ field }) => (
           <TextField
           {...field}
           placeholder="الإسم"
           InputLabelProps={{ sx: { opacity: 0.8 } }}
          
           label="الإسم"
           fullWidth
           error={touched.name && !!errors.name}
           helperText={touched.name && errors.name}
           sx={{ color: "text.secondary", mb: "15px", }}
         />
         
          )}
        </Field>
    
    
    
        
        <Field name="tel">
          {({ field }) => (

            <TextField
              {...field}
              placeholder="رقم الهاتف"
              type="tel"
              label="رقم الهاتف"
              InputLabelProps={{ sx: { opacity: 0.8 } }}
              fullWidth
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{color:"text.secondary.blue",mb:"15px"}}
              
            />
          )}
        </Field>
    
    
    
       
        <Field name="message">
          {({ field }) => (
            <TextField
              {...field}
              placeholder="الرسالة"
              label="الرسالة"
              multiline
              InputLabelProps={{ sx: { opacity: 0.8 } }}
              rows={10}
              fullWidth 
              error={touched.message && !!errors.message}
              helperText={touched.message && errors.message}
              sx={{color:"text.secondary.blue",mb:"15px"}}
             
            />
          )}
        </Field>
    
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "text.primary",
            border: "1px solid",
            borderColor: "text.primary",
            color: "whitw",
            textTransform: "capitalize",
            py: "5px",
            px: "15px",
            borderRadius: "5px",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "transparent",
              color: "text.primary",
            },
          }}
          fullWidth
        >
          Submit
        </Button>
      </Form>
    )}
    </Formik>)
}


if(props.loading === false)
return(
<Fade bool={true} in={true}>
<Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
  <CheckCircleIcon sx={{color:"white",fontSize:"200px",mb:"30px"}}/>
  <Typography sx={{color:"white",textAlign:"center"}} variant="h3">Message sent successfully</Typography>
</Box>
</Fade>
)


  
}
export default Contact;
