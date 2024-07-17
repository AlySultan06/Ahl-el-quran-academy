/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";

export default function Landing() {
  return (
    <Box sx={{ py: {xs:"175px",md:"175px"} }}>
      <Container maxWidth="xl">
        <Stack justifyContent="space-around" alignItems="center" direction={{xs:"column",md:"row"}}>
          <Box>
          <Typography variant="h1" color="white" sx={{ mb: "40px",textAlign:{xs:"center",md:"left"} }}>
            أهلا بكم في أكادمية <span style={{color:"#cba557"}}>أهل القرأن</span>
          </Typography>
          <List sx={{ listStyle: "disc", color: "white",display:"flex",flexDirection:"column",alignItems:"center" }}>
          <ListItem className="li" sx={{fontSize:"20px",textAlign:"right"}}>تحفيظ و تفسير شامل للأيات</ListItem>
          <ListItem className="li"  sx={{fontSize:"20px",textAlign:"right"}} >تعليم جميع أحكام التجويد و النورانية</ListItem>
            <ListItem  className="li" sx={{fontSize:"20px",textAlign:"right"}}>إختبارات شهرية تقيس مستوي الطالب</ListItem>
            <ListItem className="li" sx={{fontSize:"20px",textAlign:"right"}}>دورات مصممة لجميع المستويات</ListItem>
          </List>
          </Box>

          <Box sx={{width:"400px",animation:"landing infinite",display:{xs:"none",md:"block"}}}>
            <img src="../../imgs/landing-logo.png" style={{animation:"landing infinite forwards 4s"}}/>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
