import React from 'react';
import FooterContainer from './containers/footer';
import JumbotronContainer from './containers/jumbotron';
import FaqsContainer from './containers/faqs';

const App = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default App;
