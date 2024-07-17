/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from "@mui/material/Link";


export default function Courses() {


const courses = [{

title:"دورة الصغار",
price:"300",
description:"للأطفال تحت 13 سنة",
features:[
    "حلقة أسبوعية",
    "تحفيظ شامل للأيات",
    "تعليم أحكام التجويد و النورانية",
    "تفسير مفصل للأيات",
    "اختبارات شهرية",
]



}

, {
    title:"دورة الشباب",
price:"330",
description:"للشباب قوق 13 سنة",
features:[
    "حلقة أسبوعية",
    "تحفيظ شامل للأيات",
    "تعليم أحكام التجويد و النورانية",
    "تفسير مفصل للأيات",
    "اختبارات شهرية",
]
}

]








  return (
    <Box sx={{ py:"75px"}} id="courses">
    <Container maxWidth="xl">
      <Stack direction="column">
      <Typography
      data-aos="fade-down"
              variant="h2"
              color="text.secondary.blue"
              sx={{
                borderBottom: "5px solid",
                width: "fit-content",
                pb: "15px",
                borderColor: "text.primary",
                m:"auto",
                mb: "50px"
              }}
            >
              الدورات
            </Typography>


              <Grid container justifyContent="space-evenly">

              {courses.map((course) => {

                return(
                <Grid item key={course.title} xs={10} sm={5} md={4} data-aos="fade-down">
                    <Card elevation="10" sx={{p:"25px",borderRadius:"7px",mb:"60px"}}>
                       <Box sx={{p:"20px",borderBottom:"1px solid"}}>
                        <Typography variant="h3" color="text.secondary.blue">{course.title}</Typography>

                        {/* price box */}
                        <Box sx={{display:"flex",alignItems:"center",}}>
                        <Typography sx={{fontSize:"40px",mr:"5px"}}  color="text.secondary.blue">{course.price}</Typography>
                        <Typography variant="body2">جنية/شهر</Typography>
                        </Box>

                         {/* description */}
                        <Typography variant="body1"  color="text.secondary.blue">{course.description}</Typography>
                       </Box>

                       <CardContent>
                        {course.features.map((feature) => {
                            return(
                            <Box sx={{display:"flex",alignItems:"center",gap:"10px",my:"10px"}} key={feature}>
                            <CheckCircleIcon sx={{color:"text.primary",fontSize:"20px"}}/>
                            <Typography variant="body2" color="text.secondary.blue">{feature}</Typography>
                            </Box>
                            )
                        })}
                       </CardContent>
                       <CardActions>
                       <Button
              component={Link}
               href="https://wa.me/+201125362605"
              target="_blank"
              variant="contained"
              sx={{
                bgcolor: "text.primary",
                border: "1px solid",
                borderColor: "text.primary",
                color: "white",
                textTransform: "capitalize",
                py: "7px",
                px: "15px",
                borderRadius: "8px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "text.primary",
                },
              }}
              fullWidth
            >
              احجز الدورة
            </Button>
                       </CardActions>
                        
                    </Card> 
                </Grid>
                )

 
 
})}



</Grid>

















      </Stack>








      </Container>
    </Box> 
  )
}
