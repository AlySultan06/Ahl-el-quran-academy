/* eslint-disable no-unused-vars */
import React from 'react'
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Footer() {
  return (
    <Box sx={{bg:"white",py:"20px"}}>
<Stack direction="column" alignItems="center">
<Typography variant="body1" color="text.primary">جميع الحقوق محفوظة لأكادمية أهل القرأن&copy;2024 </Typography>
</Stack>
    </Box>
  )
}
