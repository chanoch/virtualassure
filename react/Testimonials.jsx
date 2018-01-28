import React from 'react';

export default class Testimonials extends React.Component {
    render() {

      return (
            <div className="block" id="successful-stories">
                <div className="container">
                    <h2>Success Stories</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="story">
                                <div className="image">
                                    <a target="_blank" href="https://www.linkedin.com/in/markansonia/" title="Mark Ansonia's Linked In Page (Opens in new window)">
                                        <img src="assets/img/markansonia.jpg" alt="Mark Ansonia - an old colleague"></img>
                                    </a>
                                </div>
                                <blockquote>
                                    <p>I worked with Jenita for a number of years. Jenita consistently managed to bring together a large team of people to deliver operationally critical information resulting in clear reporting against KPIs.</p>
                                    <p> Jenita was the person to go to to resolve problems. If you need someone you can trust to "just get on with it" and see it through, then I can highly recommend Jen. In fact, I use the documents she produced in my role in Switzerland!</p>
                                    <footer><a target="_blank" href="https://www.linkedin.com/in/markansonia/" title="Mark's Linked In Page (Opens in new window)">Mark Ansonia</a></footer>
                                </blockquote>    
                            </div> 
                        </div>
                           
                        <div className="col-md-6">
                            <div className="story">
                                <div className="image">
                                    <a target="_blank" href="https://www.linkedin.com/in/nicholas-kirk-1773738/" title="Nick Kirk's Linked In Page (Opens in new window)">
                                        <img src="assets/img/nickkirk.jpg" alt="Nick Kirk - an old colleague"></img>
                                    </a>
                                </div>
                                <blockquote>
                                    <p>Having worked with Jenita for several years in the supply chain and purchasing function as a supply chain planner, I always found Jenita to be concise and logical in her approach to her work and a real asset to the department.</p>
                                    <p>Jenita's creative and innovative approach delivered huge improvements to several product ranges and promotions resulting in greatly improved SLA's with suppliers and internal customers alike.</p>
                                    <footer><a target="_blank" href="https://www.linkedin.com/in/nicholas-kirk-1773738/" title="Nick's Linked In Pages (Opens in new window)">Nick Kirk</a></footer>
                                </blockquote>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>
                
                <div className="bg"></div>
            </div>
      );
    }
  }