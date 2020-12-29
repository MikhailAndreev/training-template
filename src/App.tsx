import React from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route, Redirect } from 'react-router-dom';
// import ReactNotification from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';

import Header from './components/Header';
import Footer from './components/Footer';

// Screens
import NotFoundScreen from './screens/NotFoundScreen';
import MainScreen from './screens/MainScreen';

const App: React.FC = observer(() => {
    return (
        <>
            <Header />

            <main>
                <Switch>
                    <Route exact path="/" component={MainScreen} />

                    <Route path="/not-found" component={NotFoundScreen} />
                    <Route path="*">
                        <Redirect to="/not-found" />
                    </Route>
                </Switch>
            </main>

            <Footer />

            {/* <ReactNotification /> */}
        </>
    );
});

export default App;
