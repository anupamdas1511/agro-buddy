import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import {
  Avatar,
  Button,
  CssBaseline,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Palette from "../../configs/pallete";
import { AuthContext } from "../../context/auth";
import { UserContext } from "../../context/user";

const theme = createTheme();

function GenerateOtp() {
  const [otp, setOtp] = React.useState("");
  const { user } = React.useContext(UserContext);
  const { validateOtp } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await validateOtp(user.email, otp);
    console.log(user.email, otp);
    navigate("/");
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: Palette.accent }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter your OTP
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <MuiOtpInput
              value={otp}
              onChange={handleChange}
              length={6}
              display="flex"
              border="none"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: Palette.accent,
                "&:hover": { backgroundColor: Palette.accentDark },
              }}
            >
              Verify
            </Button>
          </Box>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/forgot-password")}
          >
            <Typography variant="body1" color={Palette.triadic1}>
              Send otp again
            </Typography>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default GenerateOtp;
