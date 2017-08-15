import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Inviation from './pages/inviation';
import EventsVenue from './pages/eventsVenue';
import Maps from './pages/maps';

const PageBody = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene key="inviation" component={Inviation} title="Invite" hideNavBar={true}/>
                <Scene key="eventsVenue" component={EventsVenue} title="Events Venue" hideNavBar={true}/>
                <Scene key="maps" component={Maps} title="Maps" hideNavBar={true}/>
            </Scene>
        </Router>
    )
}

export default PageBody;