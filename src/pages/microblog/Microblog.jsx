import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import posts from '../../content/microblog.json';

const Microblog = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {posts.map((post, index) => (
        <Card key={index} sx={{ mb: 2, backgroundColor: '#222' }}>
          <CardContent>
            <Typography variant="body1" paragraph sx={{ color: 'white' }}>
              {post.text}
            </Typography>
            {post.image && (
              <Box
                component="img"
                src={post.image}
                alt=""
                sx={{ width: '100%', height: 'auto', mb: 1 }}
              />
            )}
            <Typography variant="caption" sx={{ color: 'gray' }}>
              {post.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Microblog;
