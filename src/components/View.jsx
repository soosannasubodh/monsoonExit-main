import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Typography,
  Box,
} from '@mui/material';
import axios from 'axios';

function View() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/blogs')
      .then(response => setBlogData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', pt: 4 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          View Blogs
        </Typography>
        <Grid container spacing={4}>
          {blogData.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog._id}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.img_url}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography variant="subtitle2" color="textSecondary">
                    {blog.title}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {blog.content}
                  </Typography>
                  <Button variant="contained" sx={{ backgroundColor: '#8e24aa', mr: 1 }}>
                    DELETE
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: '#8e24aa' }}>
                    UPDATE
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default View;