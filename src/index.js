import React, { Component } from 'react';
import { Header, Footer, Content, Container, View, Body } from 'native-base';
import getTheme from './styles/theme/components';
import material from './styles/theme/variables/material';

import PageHeader from './components/pageHeader';
import PageFooter from './components/pageFooter';
import PageBody from './components/pageBody';


class TheriApp extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Container>
                <PageHeader/>
                <PageBody />
                <PageFooter/>
            </Container>
        )
    }
}

export default TheriApp;