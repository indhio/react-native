import React from 'react';

import Logo from './components/Logo';
import Photo from './components/Photo';

const Main = () => {
  return (
    <>
      <Logo />
      <Photo count={323} file={require('./assets/images/cat1.jpg')} />
      <Photo count={1433} file={require('./assets/images/cat2.jpg')} />
    </>
  );
};

export default Main;
