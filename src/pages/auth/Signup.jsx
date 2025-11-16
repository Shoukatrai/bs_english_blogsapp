import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

// Theme-free styled card
const Card = styled(MuiCard)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "32px",
  gap: "16px",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  maxWidth: "400px",
  borderRadius: "12px",
});

export default function SignupPage() {
  const steps = [
    "Create your account",
    "Login securely",
    "Write your first blog post",
    "Read and explore other blogs",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "flex-start",
        gap: { xs: 4, md: 8 },
        m: { xs: 2, md: 6 },
        p: { xs: 3, md: 6 },
        borderRadius: "12px",
        backgroundColor: "background.paper",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 0px 10px, rgba(0, 0, 0, 0.05) 0px 0px 2px",
      }}
    >
      {/* Left side: Welcome + steps */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          gap: 3,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="text"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "primary.main",
            mb: 2,
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/home.png"
            alt="Home"
            style={{ width: 24, height: 24 }}
          />
          Home Page
        </Button>

        <Typography
          component="h1"
          variant="h3"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Welcome to BlogSphere
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Join our vibrant blogging community! Follow the simple steps below to
          get started:
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {steps.map((step, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                color: "text.secondary",
                "&::before": { content: `"✓ "`, color: "primary.main" },
              }}
            >
              {step}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Right side: Signup card */}
      <Card variant="outlined" sx={{ boxShadow: "none", border: "none" }}>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            width: "100%",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
            mb: 2,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          Create Account
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => e.preventDefault()}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              id="name"
              name="name"
              placeholder="Your Name"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="new-password"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 1 }}>
            Sign Up
          </Button>

          <Typography sx={{ textAlign: "center", mt: 2 }}>
            Already have an account?{" "}
            <Link to="/signin" className="link">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
