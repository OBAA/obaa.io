import React, {Component} from 'react';
import styled from 'styled-components'
import Heading from '../../../../templates/base/components/Heading';

import webDev1 from '../../../../static/icons/webDev2.png';


const WindowHeight = `${window.innerHeight}px`;

const Section = styled.div`
    background: #212121;
    padding: 50px 50px;
    
    @media (min-width: 780px) {
        height: ${WindowHeight};
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;

`;

const Intro = styled.div`
    color: #2e7d32;
    margin: 25px 0;
    
    @media (max-width: 768px) {
    }
    
    @media (max-width: 500px) {
    } 
`;

const Wrapper = styled.div`
    display: flex;
    margin: 0 0 45px 0;

    @media (min-width: 899px) {       
        margin: 25px 0 45px 15px;
    }
    
    @media (min-width: 648px) {
        flex-flow: row wrap;        
    }
    
    // @media (max-width: 780px) {
    //     flex-flow: row wrap;
    // }
    
    @media (max-width: 647px) {
        flex-direction: column;
        align-items: center;
        
        margin: 10px 0 45px 0;
    }
    
    display: flex;
`;

const Service = styled.div`
    height: 350px;
    width: 280px;
    
    background: #2e7d32;
    color: #F0F0F0;
    position: relative;

    @media (min-width: 1136px) {
        height: 300px;
        width: 220px;
        
        margin: 35px 50px 45px 0;

        &:hover {
            top: 45px;
        }
    }
    
    @media (min-width: 899px) {
        height: 280px;
        width: 200px;
        
        margin: 0 50px 45px 0;
        
        &:hover {
            bottom: 35px;
        }
    }
    
    @media (max-width: 898px) {
        height: 300px;
        width: 220px;
                
        margin: 0 85px 45px 0;
        
        &:hover {
            left: 40px;
        }
    }

    @media (max-width: 768px) {
        height: 280px;
        width: 200px;
        
        margin: 0 65px 45px 0;
    
        &:hover {
            left: 40px;
        }
    } 
    
    @media (max-width: 648px) {
        height: 380px;
        width: 300px;
        
        margin: 0 0 45px 0;
    
        &:hover {
            left: 45px;
        }
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
    }
`;

const InnerWrapper = styled.div`
    // padding: 15px 15px;
    padding: 25px 15px;
    display: flex;
    flex-direction: column;
`;

const Icon = styled.i`
    font-size: 2.5rem;
    margin-bottom: 25px;
`;

const ServiceType = styled.div`
    height: 40px;
    font-size: 18px;
    margin-bottom: 25px;
    
    font-weight: 600;
`;

const Details = styled.div`
    font-size: 12px;
    // margin-bottom: 15px;
`;

class Services extends Component {
    state = {
        heading: {
            title: 'Service Offers',
            color: '#22ff22'
        }
    };

    render() {
        return (
            <Section>
                <Heading title={this.state.heading.title} color={this.state.heading.color}/>

                <Div>
                    <Intro>
                        I freelance in my free time. Lets work on your next project together.
                    </Intro>

                    <Wrapper>
                        <Service>
                            <InnerWrapper>

                                <Icon>
                                    <span className="lnr lnr-screen"></span>
                                </Icon>

                                <ServiceType>
                                    Website Design
                                </ServiceType>

                                <Details>
                                    Need help or inspiration designing the
                                    layout of your website? <br/> <br/>

                                    Contact me.
                                </Details>

                            </InnerWrapper>
                        </Service>

                        <Service>
                            <InnerWrapper>
                                <Icon>
                                    <span className="lnr lnr-laptop-phone"></span>
                                </Icon>
                                <ServiceType>
                                    Website Development
                                </ServiceType>
                                <Details>
                                    Need a portfolio site or a landing page
                                    for your business? <br/> <br/>

                                    Contact me.
                                </Details>

                            </InnerWrapper>
                        </Service>

                        <Service>
                            <InnerWrapper>
                                <Icon>
                                    <span className="lnr lnr-code"></span>
                                </Icon>
                                <ServiceType>
                                    Web Application Development
                                </ServiceType>

                                <Details>
                                    Want to start a personal blog, eCommerce site or
                                    a website to fit your business needs? <br/><br/>

                                    Contact me.
                                </Details>

                            </InnerWrapper>
                        </Service>

                        <Service>
                            <InnerWrapper>
                                <Icon>
                                    {/*<span className="lnr lnr-chart-bars"></span>*/}
                                    <span className="lnr lnr-layers"></span>
                                </Icon>
                                <ServiceType>
                                    Optimization and Maintenance
                                </ServiceType>
                                <Details>
                                    Already own a website but you want to make
                                    modifications and upgrades? <br/> <br/>

                                    Contact me.
                                </Details>
                            </InnerWrapper>
                        </Service>
                    </Wrapper>
                </Div>

            </Section>
        );
    }
}

export default Services;
