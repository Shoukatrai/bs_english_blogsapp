import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import BlogCard from "./Card";
import PostCard from "./PostCard";

const latestPosts = [
  {
    title: "Top 10 Tips for Writing Better Blogs",
    image: "https://source.unsplash.com/random/800x600?writing",
    description:
      "Improve your writing with these actionable tips and techniques.",
  },
  {
    title: "Why UI/UX Matters in Modern Apps",
    image: "https://source.unsplash.com/random/800x600?design",
    description:
      "Learn how good design improves user engagement and retention.",
  },
  {
    title: "Master React Performance Optimization",
    image: "https://source.unsplash.com/random/800x600?reactjs",
    description: "Techniques to speed up your React apps.",
  },
];

export default function LatestPosts() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}
      >
        Latest Posts
      </Typography>

      <Grid container spacing={3}>
        {latestPosts.map((post, index) => (
          // <Grid item xs={12} sm={6} md={4} key={index}>
          //   <Card
          //     sx={{
          //       borderRadius: 3,
          //       overflow: "hidden",
          //       height: "100%",
          //       display: "flex",
          //       flexDirection: "column",
          //     }}
          //   >
          //     <CardMedia
          //       component="img"
          //       height="180"
          //       image={post.image}
          //       alt={post.title}
          //     />
          //     <CardContent sx={{ flexGrow: 1 }}>
          //       <Typography variant="h6" sx={{ fontWeight: 600 }}>
          //         {post.title}
          //       </Typography>
          //       <Typography sx={{ mt: 1, color: "text.secondary" }}>
          //         {post.description}
          //       </Typography>
          //     </CardContent>
          //     <Box sx={{ p: 2 }}>
          //       <Button variant="outlined" fullWidth>
          //         Read More
          //       </Button>
          //     </Box>
          //   </Card>
          // </Grid>
          <PostCard key={index}  />
        ))}
      </Grid>
    </Box>
  );
}
