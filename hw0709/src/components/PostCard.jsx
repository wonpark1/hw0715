import React from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

const EXTRA_INFO = {
  1: {
    author: "alex",
    avatar: "https://i.pravatar.cc/40?img=5",
    likes: 261,
    comments: 43,
  },
  2: {
    author: "react_starter",
    avatar: "https://i.pravatar.cc/40?img=15",
    likes: 58,
    comments: 31,
  },
  3: {
    author: "hint_master",
    avatar: "https://i.pravatar.cc/40?img=32",
    likes: 142,
    comments: 43,
  },
};

const Card = styled.article`
  background: #fff;
  border: 1px solid #e3e0e0;

  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 0 0.5rem;
  max-width: 400px;

  transition: box-shadow 0.2s ease, transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.25rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 0.5rem;
`;

const Content = styled.p`
  font-size: 0.88rem;
  color: #555;
  margin: 0 0 0.75rem;
  line-height: 1.4;
`;

const DateText = styled.div`
  font-size: 0.75rem;
  color: #999;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #666;
`;

const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const Avatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover;
`;

const LikeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
`;
const Divider = styled.div`
  height: 1px;
  background: #eee;
  margin: 0.75rem 0 0.5rem;
`;
const Spacer = styled.div`
  flex: 1;
`;
function PostCard({ post }) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const extra = EXTRA_INFO[post.postID] ?? {
    author: "unknown",
    avatar: "https://i.pravatar.cc/40",
    likes: 0,
  };

  return (
    <Card>
      <Thumbnail src={post.thumbnail} alt={post.title} />

      <Body>
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
        <Spacer />
        <DateText>
          {formattedDate} · {extra.comments}개의 댓글
        </DateText>
        <Divider />

        <Footer>
          <AuthorGroup>
            <Avatar src={extra.avatar} alt={extra.author} />
            <span>by {extra.author}</span>
          </AuthorGroup>

          <LikeGroup>
            <FiHeart />
            {extra.likes}
          </LikeGroup>
        </Footer>
      </Body>
    </Card>
  );
}

export default PostCard;
