import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class PageFooter extends Component {
    constructor(){
        super();
        this.state = {active: 'invite'};
    }
    navigateAction(type){
        if(type === "invite"){
            Actions.inviation();
            this.state.active = 'invite';
        }else if(type === "eventVenue"){
            Actions.eventsVenue();
            this.state.active = 'eventVenue';
        }else{
            Actions.maps();
            this.state.active = 'maps';
        }
    }
    render(){
        console.log( this.state.active);
        return(
         <Footer>
          <FooterTab>
            <Button active onPress={()=> {this.navigateAction('invite')}}>
              <Icon name="home" style={styles.iconStyles}/>
              <Text>Inivite</Text>
            </Button>
            <Button onPress={()=> {this.navigateAction('eventVenue')}}>
              <Icon name="newspaper-o" style={styles.iconStyles}/>
              <Text>Event Details</Text>
            </Button>
            <Button onPress={()=> {this.navigateAction('map')}}>
              <Icon name="map-marker" style={styles.iconStyles}/>
              <Text>Map</Text>
            </Button>
          </FooterTab>
        </Footer>
        )
    }
}

const styles = StyleSheet.create({
    iconStyles:{
        color:"#FFFFFF",
        fontSize:20
    }
})

export default PageFooter;


//  <Button active={(this.state.active === 'invite') ? true : ""} onPress={()=> {this.navigateAction('invite')}}>
//               <Icon name="home" style={styles.iconStyles}/>
//               <Text>Inivite</Text>
//             </Button>
//             <Button active={(this.state.active === 'eventVenue') ? true : ""} onPress={()=> {this.navigateAction('eventVenue')}}>
//               <Icon name="newspaper-o" style={styles.iconStyles}/>
//               <Text>Event Details</Text>
//             </Button>
//             <Button active={(this.state.active === 'maps') ? true : ""} onPress={()=> {this.navigateAction('map')}}>
//               <Icon name="map-marker" style={styles.iconStyles}/>
//               <Text>Map</Text>
//             </Button>