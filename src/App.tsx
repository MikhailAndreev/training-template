import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Header from './components/Header';
import Footer from './components/Footer';

import { routes } from './routes/routes';
import Routes from './routes/components/Routes';
import Loader from './components/UI/Loader';

const App: React.FC = observer(() => {
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    // Demo: waiting get user data
    setTimeout(() => {
      setProfileLoading(false);
    }, 400);
  }, []);

  if (profileLoading) {
    return <Loader minHeight="100vh" />;
  }

  return (
    <>
      <Header />

      <Routes routes={routes} />

      <Footer />
      <ReactNotification />
    </>
  );
});

export default App;
