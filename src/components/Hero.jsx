import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import backgroundImage from "../assets/1754023642099.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        overflow: "hidden",

        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: { xs: "90%", sm: "70%" },
          mx: "auto",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Our{" "}
          <Typography
            component="span"
            sx={{ fontSize: "inherit", fontWeight: 700, color: "primary.main" }}
          >
            latest products
          </Typography>
        </Typography>

        <Typography
          sx={{
            fontSize: "clamp(1rem, 1.1vw, 1.25rem)",
            opacity: 0.9,
            maxWidth: 700,
            mx: "auto",
          }}
        >
          Explore our cutting-edge dashboard, delivering high-quality solutions
          tailored to your needs. Elevate your experience with top-tier features
          and services.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: 2,
          }}
          onClick={() => navigate("/signin")}
        >
          Get Started
        </Button>
      </Stack>
    </Container>
  );
}
