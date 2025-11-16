import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import { Link } from "react-router-dom";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
}));

export default function SignInCard() {
  const items = [
    {
      icon: (
        <SettingsSuggestRoundedIcon
          sx={{ color: "primary.main", fontSize: 40 }}
        />
      ),
      title: "Adaptable performance",
      description:
        "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
    },
    {
      icon: (
        <ConstructionRoundedIcon sx={{ color: "primary.main", fontSize: 40 }} />
      ),
      title: "Built to last",
      description:
        "Experience unmatched durability that goes above and beyond with lasting investment.",
    },
    {
      icon: (
        <ThumbUpAltRoundedIcon sx={{ color: "primary.main", fontSize: 40 }} />
      ),
      title: "Great user experience",
      description:
        "Integrate our product into your routine with an intuitive and easy-to-use interface.",
    },
    {
      icon: (
        <AutoFixHighRoundedIcon sx={{ color: "primary.main", fontSize: 40 }} />
      ),
      title: "Innovative functionality",
      description:
        "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        gap: { xs: 6, sm: 8 },
      }}
    >
      {/* Features Grid */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        flexWrap="wrap"
        justifyContent="center"
        spacing={{ xs: 4, sm: 4, md: 6 }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 200px",
              maxWidth: 250,
              textAlign: "center",
            }}
          >
            {item.icon}
            <Typography
              variant="h6"
              sx={{ mt: 1, mb: 1, fontWeight: "medium" }}
            >
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Sign-in Card */}
      <Card variant="outlined" sx={{ mt: { xs: 4, sm: 6 } }}>
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: "100%",
            fontSize: { xs: "2rem", sm: "2.2rem" },
            mb: 2,
            textAlign: "center",
          }}
        >
          Sign in
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
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
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
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 1 }}>
            Sign in
          </Button>
          <Typography sx={{ textAlign: "center", mt: 1 }}>
            Don&apos;t have an account?{" "}
            <Link to={'/'} className="link" variant="body2">
              Sign up
            </Link>
          </Typography>
        </Box>
        {/* <Divider sx={{ my: 3 }}>or</Divider> */}
      </Card>
    </Box>
  );
}
