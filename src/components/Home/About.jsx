/* eslint-disable no-unused-vars */
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function About() {
  return (
    <Box sx={{ bgcolor: "background.primary",py:"70px" }}>
      <Container maxWidth="xl">
        <Stack alignItems="center" gap={{xs:"70px",sm:"70px",md:"0px"}} justifyContent="space-between" flexDirection={{xs:"column",sm:"column",md:"row"}}>
          <Box sx={{maxWidth:{md:"600px"},textAlign:{xs:"center",sm:"center",md:"right"}}} data-aos="fade-left">
            <Typography
              variant="h2"
              color="text.secondary.blue"
              sx={{
                borderBottom: "5px solid",
                width: "fit-content",
                pb: "15px",
                borderColor: "text.primary",
                mb: "50px",
              }}
            >
              من نحن؟
            </Typography>
            <Typography variant="body1" color="text.secondary.blue">
              مرحبًا بكم في أكاديمية أهل القرآن، المكان الذي يجمع بين تعليم
              القرآن الكريم وتفسيره بأحدث الأساليب التربوية. نحن في أكاديمية أهل
              القرآن نسعى لتقديم تعليم قرآني شامل ومتميز يناسب جميع الأعمار
              والفئات، من ,الأطفال إلى الكبار و نقد أفضل تعليم قرآني مستند إلى
              منهجية علمية حديثة، مع الحفاظ على الأصالة والتراث الإسلامي العريق.
              نهدف إلى غرس حب القرآن في نفوس طلابنا وتطوير قدراتهم في تلاوته
              وحفظه وتجويده.
            </Typography>
          </Box>

          <Box sx={{width:{md:"500px"}}}  className="aboutphoto" data-aos="fade-right">
            <img src="../../../imgs/about.jpg"/>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
