import React, {Component} from 'react';
import styled from 'styled-components'
import Heading from '../../../../templates/base/components/Heading';
import {scroller} from "react-scroll/modules/index";


const Section = styled.div`
    background: #212121;
    padding: 50px 50px;
    
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;

`;

const Intro = styled.div`
    display: flex;
    justify-content: center;
    color: #2e7d32;
    margin: 25px 0;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    margin: 0 0 45px 0;
         
    @media (min-width: 648px) {
        flex-flow: row wrap;
        justify-content: space-evenly;       
    }
        
    @media (max-width: 647px) {
        flex-direction: column;
        align-items: center;
        
        margin: 10px 0 45px 0;
    }
`;

const Chevron = styled.span`
    display: none;
`;

const Service = styled.div`
    position: relative;
    height: 350px;
    width: 280px;

    border: 2px solid #2e7d32;
    color: #2e7d32;
    
    margin: 20px 0;
    
    &:last-child {
        background: blue;
    }
 
    @media (max-width: 500px) {
        height: 350px;
        width: 280px;

        &:hover {
            left: 40px;
        }
    } 

    &:hover {
        background: #212121;
        border: 2px solid #22ff22;
        color: #22ff22;  
        
        ${Chevron} {
            display: inline-block;
            font-size: 0.8rem;
            color: #22ff22;
            margin-right: 15px;
        }
    }
`;

const InnerWrapper = styled.div`
    padding: 45px 25px 25px 35px;
    display: flex;
    flex-direction: column;
`;

const Icon = styled.i`
    font-size: 3rem;
    margin-bottom: 25px;
`;

const ServiceType = styled.div`
    height: 50px;
    color: #22ff22;
    font-size: 20px;    
    font-family: roboto;
    font-weight: 600;
    margin-bottom: 30px;
`;

const Description = styled.div`
    font-size: 14px;
    width: 180px;
    height: 80px;
`;

const ContactMe = styled.a`   
    font-size: 18px;
    text-decoration: none;
    color: #22ff22;
    margin: 15px 0 0 0;
    
    font-family: roboto;
`;

class Services extends Component {
    state = {
        heading: {
            title: 'Service Offers',
            color: '#22ff22'
        },
        services: {
            WebsiteDesign: {
                type: 'Website Design',
                icon: 'lnr lnr-screen',
                description: 'Do you need help or inspiration designing the layout of your website?'
            },

            WebsiteDevelopment: {
                type: 'Website Development',
                icon: 'lnr lnr-laptop-phone',
                description: 'Need a portfolio site or a landing page for your business?'
            },
            WebAppDevelopment: {
                type: 'Web Application Development',
                icon: 'lnr lnr-code',
                description: 'Want to start a personal blog, eCommerce site or a website to fit your business needs? '
            },
            OptimizationMaintenance: {
                type: 'Optimization and Maintenance',
                icon: 'lnr lnr-layers',
                description: 'Already own a website but you want to make modifications and upgrades?'
            }
        }
    };

    render() {
        const services = this.state.services;

        const scrollToElement = (element) => {
                scroller.scrollTo(element, {
                    duration: 1500,
                    delay: 100,
                    smooth: true
                });
            };

        const renderServices = () =>{
            const servicesArray = [];

            for(let service in services){
                servicesArray.push({
                    id: service,
                    serve: services[service]
                })
            }

            return servicesArray.map((service, i) => {
                return(
                    <Service key={i}>
                        <InnerWrapper>
                            <Icon>
                                <span className={service.serve.icon}> </span>
                            </Icon>

                            <ServiceType>
                                {service.serve.type}
                            </ServiceType>

                            <Description>
                                {service.serve.description}
                            </Description>

                            <ContactMe button onClick={()=> scrollToElement('ContactMe')}>
                                {/*<Chevron className="lnr lnr-chevron-right"></Chevron>*/}
                                {/*<Chevron className="lnr lnr-chevron-right"></Chevron>*/}
                                {/*<Chevron className="lnr lnr-chevron-right"></Chevron>*/}

                                <Chevron>
                                    <span className="lnr lnr-chevron-right"></span>
                                    <span className="lnr lnr-chevron-right"></span>
                                    <span className="lnr lnr-chevron-right"></span>
                                </Chevron>

                                Contact me
                            </ContactMe>
                        </InnerWrapper>
                    </Service>
                )
            })
        };

        return (
            <Section>
                <Heading title={this.state.heading.title} color={this.state.heading.color}/>

                <Div>
                    <Intro>
                        I freelance in my free time. Lets work on your next project together.
                    </Intro>

                    <Wrapper>
                        {renderServices()}

                        {/*Hacky Way of fixing Flexbox last Row Alignment*/}
                        <Service style={{height: 0, border: 0}}/>
                        <Service style={{height: 0, border: 0}}/>
                    </Wrapper>
                </Div>

            </Section>
        );
    }
}

export default Services;
