/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Zoom from '@mui/material/Zoom';

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

const Contact = () => {
  const [loading, setLoading] = useState("normal");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    name: "",
    tel: "",
    message: "",
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("يرجي إدخال الإسم"),
    tel: Yup.string()
      .matches(/^\d{10,15}$/, "يرجى إدخال رقم هاتف صحيح بين 10 و 15 رقمًا")
      .required("يرجى إدخال رقم الهاتف"),

    message: Yup.string().min(10).required("يرجي إدخال الرسالة"),
  });

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "background.secondary",
        backgroundImage: "url(../imgs/decor.png)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "cover",
        py: "75px",
      }}
    >
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
          >
            تواصل معنا
          </Typography>
        </Box>

        <FormContent
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          loading={loading}
          setLoading={setLoading}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <Box sx={{backgroundColor:"white",position:"relative",borderRadius:"10px",outline:"none",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:{xs:"30px",md:"40px"}}}>
          <CloseIcon
                  sx={{
                    fontSize: "40px",
                    position:"absolute",
                    top:"5px",
                    left:"7px",
                    color:"text.secondary.blue",
                    cursor:"pointer",
                    transition:"0.3s",
                    '&:hover':{
                      color:"text.primary"
                    }
                  }}
                  onClick={() => setIsModalOpen(false)}
                />
            <CheckCircleIcon sx={{fontSize:"110px",color:"text.primary",mb:"25px"}}/>
           <Typography variant="h3" color="text.secondary.blue" sx={{mb:"15px"}}>تم إرسال الرسالة بنجاح</Typography> 
           <Typography variant="body1" color="text.secondary.blue">سنتواصل معك في أقرب وقت</Typography> 
          </Box>
         
        </Modal>
      </Container>
    </Box>
  );
};

function FormContent(props) {
  if (props.loading === "normal" || props.loading === true) {
    return (
      <Formik
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
                  sx={{
                    color: "text.secondary",
                    mb: "15px",

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor:"white",
                      "&.Mui-focused fieldset": {
                        borderColor: "text.primary", // Default border color
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "text.primary", // Label color when focused
                    },
                  }}
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
                  InputLabelProps={{ sx: { opacity: 0.7 } }}
                  fullWidth
                  error={touched.tel && !!errors.tel}
                  helperText={touched.tel && errors.tel}
                  sx={{
                    color: "text.secondary",
                    mb: "15px",
                    textAlign: "right",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor:"white",
                      //fieldset styles
                      "&.Mui-focused fieldset": {
                        borderColor: "text.primary", // Default border color
                      },

                      "& .MuiOutlinedInput-input": {
                        textAlign: "left",
                      },
                    },

                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "text.primary", // Label color when focused
                    },
                  }}
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
                  sx={{
                    color: "text.secondary",
                    mb: "15px",

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor:"white",
                      "&.Mui-focused fieldset": {
                        borderColor: "text.primary", // Default border color
                      },
                    },

                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "text.primary", // Label color when focused
                    },
                  }}
                />
              )}
            </Field>

            <Button
              type="submit"
              variant="contained"
              disabled={props.loading === true ? true : false}
              sx={{
                bgcolor: "text.primary",
                border: "1px solid",
                borderColor: "text.primary",
                color: "white",
                textTransform: "capitalize",
                py: "7px",
                px: "15px",
                borderRadius: "10px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "white",
                  color: "text.primary",
                },
                "&.Mui-disabled": {
                  backgroundColor: "text.primary",
                  color: "white",
                  opacity: "0.7",
                },
              }}
              fullWidth
            >
              إرسال
            </Button>
          </Form>
        )}
      </Formik>
    );
  }

 

  if (props.loading === false) {
    props.setIsModalOpen(true);
    props.setLoading("normal");
  }
}
export default Contact;
