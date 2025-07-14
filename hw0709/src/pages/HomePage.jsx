import styled from "styled-components";
import { dummyData } from "../data/dummy_data";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import PostGrid from "../components/PostGrid";

const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
`;

function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <TabBar />
        <PostGrid posts={dummyData} />
      </Container>
    </>
  );
}

export default HomePage;
