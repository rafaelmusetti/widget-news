import React from 'react';
import styled from 'styled-components';
import NewsList from '../news/NewsList';

const HomeContent = styled.div`
  padding: 5%;
`;

const Home = () => (
  <HomeContent className="news-item">
    <NewsList />
  </HomeContent>
);

export default Home;
