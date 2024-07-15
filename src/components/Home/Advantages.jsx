/* eslint-disable no-unused-vars */
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

import React from "react";

export default function Advantages() {
  const advantages = [
    {
      title: "اختبارات و شهادات",
      description: "اختبارات تقيس مستوي الطالب و شهادات للطلاب المتفوقين",
      icon: (
        <WorkspacePremiumIcon
          sx={{ color: "text.primary", fontSize: "45px", ml: "10px" }}
        />
      ),
    },
    {
      title: "حصص تفاعلية",
      description:
        "حصص تفاعلية بين الطالب و المعلم باستخدام طرق التعليم الحديثة",
      icon: (
        <SchoolIcon
          sx={{ color: "text.primary", fontSize: "45px", ml: "10px" }}
        />
      ),
    },
    {
      title: "دعم مستمر",
      description:
        "دعم مستمر للطالب للتأكد من إتقانه للتلاو و التجويد مع المتاباعة مع ولي الأمر",
      icon: (
        <SupportAgentIcon
          sx={{ color: "text.primary", fontSize: "45px", ml: "10px" }}
        />
      ),
    },
    {
      title: "أسعار معقولة",
      description:
        "أسعار في متناول اليد لضمان رضاء العميل" ,
      icon: (
        <PriceCheckIcon
          sx={{ color: "text.primary", fontSize: "45px", ml: "10px" }}
        />
      ),
    }
  ];

  return (
    <Box sx={{ py: "80px" }}>
      <Container maxWidth="xl">
        <Stack direction={{xs:"column",md:"row"}} justifyContent="space-between" alignItems={{xs:"normal",md:"center"}}>
          <Typography
            variant="h2"
            color="text.secondary.blue"
            data-aos="fade-left"
            sx={{
              borderBottom: "5px solid",
              fontSize:{xs:"32px !important",md:"50px !important"},
              width: "fit-content",
              
              pb: "15px",
              borderColor: "text.primary",
              mb:{xs:"70px",md:"0"}
          
            }}
          >
            المزايا
          </Typography>

          <Grid container  sx={{justifyContent:"flex-end"}} spacing={5}>
            {advantages.map((item, index) => {
              return (
                <Grid
                  item
                  key={item.title}
                  data-aos="fade-up"
                  xs={12}
                  md={5}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                  <Box sx={{flex:"1"}}>
                    <Typography
                      variant="h3"
                      color="text.primary"
                      sx={{ mb: "10px" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary.blue">
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
