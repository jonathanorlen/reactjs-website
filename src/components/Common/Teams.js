import React, { Component } from 'react';
import TeamMember from './TeamMember';

import img1 from '../assets/team/1.jpg';
import img2 from '../assets/team/2.jpg';
import img3 from '../assets/team/3.jpg';

const members = [
     { name: 'Kay Garland', role: 'Lead Designer', image: img1 },
     { name: 'Larry Parker', role: 'Lead Marketer', image: img2 },
     { name: 'Diana Petersen', role: 'Lead Developer', image: img3 },
]

class Teams extends Component {
     render() {
          return (
               <section class="page-section bg-light" id="team">
                    <div class="container">
                         <div class="text-center">
                              <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                              <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                         </div>
                         <div class="row">
                              {members.map((item, index) => {
                                   return <TeamMember {...item} key={index} />
                              })}
                         </div>
                         <div class="row">
                              <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                         </div>
                    </div>
               </section>
          )
     }
}

export default Teams;