// src/components/PostGrid.jsx
import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const Grid = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 0;
  width: 100%;

  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(320px, 1fr));
  }
`;
function PostGrid({ posts }) {
  return (
    <Grid>
      {posts.map((post) => (
        <PostCard key={post.postID} post={post} />
      ))}
    </Grid>
  );
}

export default PostGrid;
