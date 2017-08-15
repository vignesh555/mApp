import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, H1, H2, H3, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class EventVenue extends Component{
    render(){
        return(
            <Content>
                <Grid>
                        <Col style={[styles.borderRight, styles.colSpacing]}>
                            <H3>Muthurthum</H3>
                            <Text>Date: 27.08.2017</Text>
                            <Text>Timing: 9.30am to 10.30am</Text>
                        </Col>
                        <Col style={styles.colSpacing}>
                            <H3>Reception</H3>
                            <Text>Date: 26.08.2017</Text>
                            <Text>Timing: 6.30pm onwards</Text>
                        </Col>
                </Grid>
                <Grid style={styles.borderTop}>
                        <Row>
                            <H2>"SRI RAM GANESH MAHAL"</H2>
                        </Row>
                        <Row>
                            <Text>Rajendra Prasad Road, Hasthinapuram</Text>
                        </Row>
                        <Row>
                            <Text>Chennai:64</Text>
                        </Row>
                    </Grid>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    borderRight:{
        borderRightWidth: 1
    },
    containerSpacing:{
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    colSpacing:{
        padding: 10
    },
    borderTop:{
        borderTopWidth: 1,
        marginTop: 10,
        alignItems:'center'
    }
})

export default EventVenue;