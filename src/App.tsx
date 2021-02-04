import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Header from './components/Header';
import Footer from './components/Footer';

import { routes } from './routes/routes';
import Routes from './components/Routes';
import Loader from './components/UI/Loader';

const App: FC = observer(() => {
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProfileLoading(false);
    }, 1000);
  }, []);

  if (profileLoading) {
    return <Loader minHeight="100vh" />;
  }

  return (
    <>
      <Header />

      <Routes routes={routes} />

      <Footer />

      {/* <ReactNotification /> */}
    </>
  );
});

export default App;
