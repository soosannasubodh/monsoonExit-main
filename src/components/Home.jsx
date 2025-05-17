//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )


//Write your code here
import React from 'react';
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

const blogData = [
  {
    title: 'Travel the world!!!!!',
    category: 'Travel',
    image: '/p1.jpg',
  },
  {
    title: 'Art!!!!!!!!!!!!!',
    category: 'Art',
    image: '/p2.jpg',
  },
  {
    title: 'Food is Art!!!!',
    category: 'Food',
    image: '/p3.jpg',
  },
];

function Home() {
  return (
    <Box
      sx={{
        height: '100vh', // full screen height
        display: 'flex',
        alignItems: 'center', // vertical center
        justifyContent: 'center', // horizontal center
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {blogData.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography variant="subtitle2" color="textSecondary">
                    {blog.category}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#8e24aa', mr: 1 }}
                  >
                    DELETE
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#8e24aa' }}
                  >
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

export default Home;