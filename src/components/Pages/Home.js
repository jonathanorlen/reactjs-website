import React, { Component } from 'react';
import Header from '../Common/Header';
import Services from '../Common/Services';
import Portofolio from '../Common/Portofolio';
import Timeline from '../Common/Timeline';
import Teams from '../Common/Teams';
import Contact from '../Pages/Contact';

class Home extends Component {
     render() {
          return (
               <>
                    <Header
                         title='Welcome toour sz'
                         subtitle="this is"
                         buttonText="Tell me more"
                         link="service"
                         showButton={true}
                         image="assets/img/header-b.jpg"
                    />
                    <Services />
                    <Portofolio />
                    <Timeline />
                    <Teams />
                    <Contact />
               </>
          )
     }
}

export default Home;