import { Box, Typography, Paper } from "@mui/material";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const features = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Adaptable Performance",
    description:
      "Our product adjusts effortlessly to your needs, boosting efficiency and simplifying tasks.",
    span: "auto", // normal span
  },
  {
    icon: <ConstructionRoundedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Built to Last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
    span: "auto",
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Great User Experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
    span: "auto",
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Innovative Functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
    span: "auto",
  },
];

export default function Features() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 5, textAlign: "center" }}
      >
        Features
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr", // mobile → 1 column
            sm: "repeat(2, 1fr)", // tablet → 2 columns
            md: "repeat(4, 1fr)", // desktop → 4 columns
          },
        }}
      >
        {features.map((feature, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              borderRadius: 3,
              height: "100%",
              gridColumn: feature.span, 
            }}
          >
            {feature.icon}
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
              {feature.title}
            </Typography>
            <Typography sx={{ mt: 1, color: "text.secondary" }}>
              {feature.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
