import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from '../Pages/Home';
import Account from '../Pages/Account';
import Search from '../Pages/Search';
import Settings from '../Pages/Settings';
import Terms from '../Pages/Terms';
import Privacy from '../Pages/Privacy';
import Movies from '../Tabs/Movies';
import Shows from '../Tabs/Shows';
import Anime from '../Tabs/Anime';
import LiveTV from '../Tabs/LiveTV';
import Kids from '../Tabs/Kids';
import Sports from '../Tabs/Sports';
import MovieDetails from '../Modals/MovieDetails';
import ShowDetails from '../Modals/ShowDetails';
import ChDetails from '../Modals/ChDetails';
import SportDetails from '../Modals/SportDetails';
import AnimeDetails from '../Modals/AnimeDetails';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import '../Theme/App.scss';


const App = (props) => {

  return (
    <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} /> 
            <Route path="/movies" component={Movies} /> 
            <Route path="/shows" component={Shows} /> 
            <Route path="/kids" component={Kids} /> 
            <Route path="/sports" component={Sports} /> 
            <Route path="/anime" component={Anime} /> 
            <Route path="/livetv" component={LiveTV} /> 
            <Route path="/movie/:id" component={MovieDetails} /> 
            <Route path="/show/:id" component={ShowDetails} /> 
            <Route path="/sport/:id" component={SportDetails} /> 
            <Route path="/live/ch/:id" component={ChDetails} /> 
            <Route path="/anime/:id" component={AnimeDetails} /> 
            <Route path="/settings" component={Settings} /> 
            <Route path="/search" component={Search} /> 
            <Route path="/account" component={Account} /> 
            <Route path="/terms" component={Terms} /> 
            <Route path="/privacy" component={Privacy} /> 
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
  );
}

export default App;
