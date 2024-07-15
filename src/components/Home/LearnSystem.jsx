/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function LearnSystem() {
  const learnSystem = [
    {
      title: "التسميع",
      aos:"fade-left",
      description:
        "تبدأ الحلقة بتسميع واجب الحلقة السابقة الذي يتكون من القراءة والتلاوة من الذكر الشريف، بما فيه من الماضي البعيد والقريب. يتم أيضًا تسميع السور التي تم حفظها، وتسميع الآيات الجديدة. بعد ذلك، يتم إرسال تقرير لولي الأمر بمدى جودة تسميع الطالب وتقدمه في تلاوة القرآن.",
    },
  
    {
      title: "التحفيظ",
      aos:"fade-right",
      description:
        "يقوم المعلم بعد ذلك بتحفيظ الأيات الجديدة للطلاب بأحكام التجويد و التأكد من إتقان الطالب للأيات من حيث التلاوة و التجويد عن طريق الترديد وراء المعلم ثم تلاوتها لوحده",
    },
    {
      title: "تفسير الأيات",
      aos:"fade-left",
      description:
        "و تكون أخر ربع ساعة من الحلقة عبارة عن تفسير مفصل للأيات و معنيها مع استنتاج الدروس المستفادة و القيم التربوية من الأيات و عمل إختبار بسيط للطالب لقياس مدي تركيزه في اللقة",
    },
    
  ];

  return (
    <Box
      sx={{
       
        backgroundColor: "background.secondary",
        backgroundImage: "url(../public/imgs/decor.png)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "cover",
        py:"75px"
      }}
    >
      <Container maxWidth="xl">
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
          نظام التعليم
        </Typography>
        <Stack justifyContent="space-between" alignItems="center">

          {learnSystem.map((item, index) => (
            <Box key={item.title} sx={{bgcolor:"white",mb:"40px",p:"15px",borderRadius:"11px",width:{xs:"100%",md:"86%"}}} data-aos={item.aos}>
                <Box sx={{display:"flex",alignItems:"center",mb:"15px"}}>
                <Typography variant="h3"
                sx={{
                   color:"white",
                    bgcolor:"text.primary" ,
                    borderRadius:"50%",
                    width:"30px",
                    height:"30px",
                    ml:"20px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                }}
                
                 >{index + 1}</Typography>


                <Typography variant="h3" color="text.primary" sx={{  }}>
                {item.title}
              </Typography>


                </Box>
              
              <Typography variant="body1" color="text.secondary.blue" sx={{ mb: "10px" }}>
                {item.description}
              </Typography>
            </Box>
          ))}

          {/* Add more learn system items here */}







        </Stack>
      </Container>
    </Box>
  );
}
