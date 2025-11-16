import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import BlogCard from "./Card";

export default function FeaturedPosts() {
  const posts = [
    {
      title: "Mastering React in 2025",
      desc: "A complete roadmap to becoming a modern React developer.",
      image:
        "https://images.unsplash.com/photo-1526378722484-d44c48c20538?q=80&w=1200",
    },
    {
      title: "Why AI Will Change Everything",
      desc: "The rise of AI tools and how they are reshaping industries.",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200",
    },
    {
      title: "UI/UX Trends That Dominated 2025",
      desc: "These design principles shaped the future of digital products.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: 4,
          color: "primary.main"
        }}
      >
        Featured Posts
      </Typography>

      <Grid container spacing={4}>
        {posts.map((post, index) => (
          // <Grid
          //   key={index}
          //   size={{ xs: 12, sm: 6, md: 4 }} // ✅ NEW MUI GRID V2
          // >
          //   <Card
          //     sx={{
          //       height: "100%",
          //       borderRadius: 3,
          //       overflow: "hidden",
          //       boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          //       transition: "0.3s",
          //       "&:hover": {
          //         transform: "translateY(-6px)",
          //         boxShadow: "0 6px 30px rgba(0,0,0,0.15)",
          //       },
          //     }}
          //   >
          //     <CardMedia
          //       component="img"
          //       height="200"
          //       image={post.image}
          //       alt={post.title}
          //     />

          //     <CardContent>
          //       <Typography variant="h6" sx={{ fontWeight: 600 }}>
          //         {post.title}
          //       </Typography>

          //       <Typography sx={{ mt: 1, color: "text.secondary" }}>
          //         {post.desc}
          //       </Typography>
          //     </CardContent>
          //   </Card>
          // </Grid>
          <BlogCard key={index} />
        ))}
      </Grid>
    </Box>
  );
}
