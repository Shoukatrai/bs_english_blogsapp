import { Box, Grid, Typography, Link, Stack, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "grey.900",
        color: "white",
        mt: 8,
        pt: 6,
        pb: 3,
        px: { xs: 3, sm: 6 },
        borderTop: "3px solid",
        borderColor: "primary.main", // ⭐ Top line design
      }}
    >
      {/* Top Section */}
      <Grid container spacing={4}>
        {/* Brand */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            ShoukatBlog
          </Typography>
          <Typography sx={{ mt: 1, color: "grey.400" }}>
            High-quality content, tutorials, and resources for modern
            developers.
          </Typography>
        </Grid>

        {/* Links */}
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Pages
          </Typography>
          <Stack spacing={0.5}>
            <Link underline="hover" color="grey.400" href="/">
              Home
            </Link>
            <Link underline="hover" color="grey.400" href="/blogs">
              Blogs
            </Link>
            <Link underline="hover" color="grey.400" href="/categories">
              Categories
            </Link>
            <Link underline="hover" color="grey.400" href="/about">
              About
            </Link>
          </Stack>
        </Grid>

        {/* Resources */}
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Resources
          </Typography>
          <Stack spacing={0.5}>
            <Link underline="hover" color="grey.400" href="#">
              Tutorials
            </Link>
            <Link underline="hover" color="grey.400" href="#">
              Guides
            </Link>
            <Link underline="hover" color="grey.400" href="#">
              Documentation
            </Link>
          </Stack>
        </Grid>

        {/* Social */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Connect
          </Typography>
          <Stack spacing={0.5}>
            <Link underline="hover" color="grey.400" href="#">
              Facebook
            </Link>
            <Link underline="hover" color="grey.400" href="#">
              Twitter
            </Link>
            <Link underline="hover" color="grey.400" href="#">
              Instagram
            </Link>
            <Link underline="hover" color="grey.400" href="#">
              GitHub
            </Link>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "grey.700", my: 4 }} />

      {/* Bottom Credits */}
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "grey.400", fontSize: "0.9rem" }}>
          Developed by <strong>ShoukatDev</strong>
        </Typography>
        <Typography sx={{ color: "grey.500", fontSize: "0.85rem" }}>
          Contact:{" "}
          <Link
            href="https://shoukatdev.vercel.app"
            target="_blank"
            underline="hover"
            color="primary.light"
          >
            shoukatdev.vercel.app
          </Link>
        </Typography>
        <Typography sx={{ mt: 1, color: "grey.600", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} ShoukatBlog — All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
