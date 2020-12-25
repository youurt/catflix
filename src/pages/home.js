import React from 'react';
import FooterContainer from '../containers/footer';
import JumbotronContainer from '../containers/jumbotron';
import FaqsContainer from '../containers/faqs';
import HeaderContainer from '../containers/header';
import { OptForm, Feature } from '../components';

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email adress" />
            <OptForm.Button>Try it now!</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              memebership!
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
