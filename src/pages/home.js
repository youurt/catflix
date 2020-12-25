import React from 'react';
import FooterContainer from '../containers/footer';
import JumbotronContainer from '../containers/jumbotron';
import FaqsContainer from '../containers/faqs';
import HeaderContainer from '../containers/header';

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
};

export default Home;
