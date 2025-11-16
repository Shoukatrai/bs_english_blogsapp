import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Author from "./Author";

const cardData = {
  img: "https://picsum.photos/800/450?random=1",
  tag: "Engineering",
  title: "Revolutionizing software development with cutting-edge tools",
  description:
    "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.",
  authors: [
    { name: "Remy Sharp", avatar: "/static/images/avatar/1.jpg" },
    { name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" },
  ],
};

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const PostCard = () => {
  // const [focusedCardIndex, setFocusedCardIndex] = useState(null);

  return (
    <Grid size={{ xs: 12, sm: 4, md: 4 }}>
      <StyledCard variant="outlined" tabIndex={0}>
        {/* <img
          src={cardData?.img}
          alt={cardData?.title}
          style={{
            width: "100%",
            aspectRatio: "16/9",
            objectFit: "cover",
            borderBottom: "1px solid #ddd",
          }}
        /> */}
        <StyledCardContent>
          <Typography variant="caption">{cardData?.tag}</Typography>
          <Typography variant="h6">{cardData?.title}</Typography>
          <StyledTypography variant="body2" color="text.secondary">
            {cardData?.description}
          </StyledTypography>
        </StyledCardContent>
        <Author authors={cardData?.authors} />
      </StyledCard>
    </Grid>
  );
};

export default PostCard;
