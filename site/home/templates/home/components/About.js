import React, {Component} from 'react';
import styled from 'styled-components'

import Heading from '../../../../templates/base/components/Heading'

import avi from '../../../../static/images/avi.jpg';

const WindowHeight = `${window.innerHeight}px`;

const Section = styled.div`
    background: #212121;
    padding: 50px 50px;
    
    @media (min-width: 900px) {
        height: ${WindowHeight};
    }
        
    @media (max-width: 768px) {
    }
    @media (max-width: 500px) {
        padding: 10px 40px;
    }
`;

const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 20%;
    margin-bottom: 45px;
    
    // background: blue;
    
    @media (min-width: 768px) {
        // height: 200px;
        // padding: 0 150px;
        justify-content: space-around;
        justify-content: center;
    }
    
    @media (max-width: 768px) {
        justify-content: space-around;
        justify-content: center;
    }  
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-size: contain;
    background-position: center;
        
    // margin-right: 5px;
    
    @media (min-width: 768px) {
        width: 150px;
        height: 150px;
        margin-right: 15px;
    }
    
    @media (max-width: 768px) {
        width: 125px;
        height: 125px;
        margin-right: 10px;
    }
    
    @media (max-width: 500px) {
        width: 100px;
        height: 100px;
        margin-right: 5px;
    }
`;

const Bio = styled.div`
    color: #2e7d32;
    padding: 10px 10px;
        
    @media (min-width: 768px) {
        font-size: 17px;
        width: 450px;
        margin-left: 20px;
    }
    
    @media (max-width: 768px) {
        font-size: 15px;
        width: 320px;
        margin-left: 10px;
    }
    
    @media (max-width: 500px) {
        font-size: 13px;
        width: 220px;
    }
   
`;

const SubHeading = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    font-size: 25px;
    margin-bottom: 35px;
    
    color: #22ff22;  
    
    @media (max-width: 768px) {
        height: 25px;
        font-size: 20px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    margin-top: 10px;
    
    @media (min-width: 768px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-content: space-around;
    }
    
    margin-bottom: 75px;
`;

const Div = styled.div`
    align-self: center;
    
    @media (min-width: 768px) {
        width: 400px;
        padding: 0 25px;
    }
    
    @media (max-width: 900px) {
        width: 300px;
    }
    
    @media (max-width: 768px) {
        width: 400px;
        height 250px;
        padding: 15px 10px;
        margin: 10px 0;
        
        &:last-child {
            margin-top: 0;
        }
    }
    
    @media (max-width: 500px) {
        width: 100%;
        height 40%;
        
        padding: 5px 0;
        margin-bottom: 15px;
    }      
`;

const IconWrapper = styled.div`
    width: 50px;
    color: #F0F0F0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    margin: 10px 20px;

    &:hover {
        color: #22ff22 !important;
    }

    @media (max-width: 500px) {
        margin: 5px 15px;
    }
`;

const StacksBody = styled.div`
    display: flex;
    flex-flow: row wrap;
    background: #2e7d32;
    border-radius: 5px;
    justify-content: space-evenly;
    align-items: center;
    
    height: 235px;
    color: #2e7d32 !important;
        
    @media (max-width: 500px) {
        padding: 5px 0;
        margin: 0 5px;
    }
    
    @media (max-width: 500px) {
        padding: 5px 0;
        margin: 0 5px;
    }
    
    &:hover {
        background: none;
        border: 2px solid #22ff22;
        // color: #2e7d32 !important;
        
        ${IconWrapper} {
            color: #2e7d32;
        }
    }
`;

const StacksFooter = styled.div`
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
    color: #22ff22;
`;

const Icon = styled.i`
    font-size: 2.5rem;
    margin-bottom: 5px;
    
    @media (max-width: 500px) {
        font-size: 2.2rem;
    }
`;

class About extends Component {
    state = {
        percentage: 45,
        heading: {
            title: 'About me',
            color: '#22ff22'
        }
    };

    render() {
        return (
            <Section>
            {/*<Section style={{height: `${window.innerHeight}px`}}>*/}
                <Heading title={this.state.heading.title}
                         color={this.state.heading.color} />
                <TopWrapper>
                    <Img src={avi}/>
                    <Bio>
                        I am experienced in leveraging agile frameworks to provide a robust synopsis for
                        scalable web applications, utilizing up to date technology stacks and ensuring optimum performance.
                    </Bio>
                </TopWrapper>

                <SubHeading>
                    Programming Languages &amp; Tools
                </SubHeading>

                <Wrapper>


                    <Div>
                        <StacksBody>
                            <IconWrapper>
                                <Icon className="fab fa-python"></Icon>
                                <span>PYTHON</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="devicon-django-plain"></Icon>
                                <span>DJANGO</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="fab fa-aws"></Icon>
                                {/*<Icon className="devicon-amazonwebservices-original"></Icon>*/}
                                <span>AWS S3 & EC2</span>
                            </IconWrapper>
                            <IconWrapper>
                                {/*<Icon className="fas fa-database"></Icon>*/}
                                <Icon className="devicon-docker-plain"></Icon>
                                <span>Docker</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="fas fa-database"></Icon>
                                <span>SQLite 3</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="devicon-postgresql-plain"></Icon>
                                <span>POSTGRESQL</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="devicon-nginx-original"></Icon>
                                <span>NGINX</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="fab fa-git"></Icon>
                                <span>GIT</span>
                            </IconWrapper>
                        </StacksBody>
                        <StacksFooter className='font_roboto'>
                            Backend Stacks
                        </StacksFooter>
                    </Div>

                    <Div>
                        <StacksBody>
                            <IconWrapper>
                                <Icon className="fab fa-html5"></Icon>
                                <span>HTML 5</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="fab fa-css3-alt"></Icon>
                                <span>CSS 3</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="devicon-bootstrap-plain"></Icon>
                                <span>BOOTSTRAP</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="fab fa-js-square"></Icon>
                                <span>ES5 & ES6</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="fab fa-react"></Icon>
                                <span>REACT</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="fab fa-npm"></Icon>
                                <span>NPM</span>
                            </IconWrapper>
                            <IconWrapper>
                                <Icon className="devicon-webpack-plain"></Icon>
                                <span>WEBPACK</span>
                            </IconWrapper>
                            <IconWrapper>
                                {/*<Icon className="fab fa-git"></Icon>*/}
                                <Icon className="devicon-git-plain"></Icon>
                                <span>GIT</span>
                            </IconWrapper>
                        </StacksBody>
                        <StacksFooter className='font_roboto'>
                            Frontend Stacks
                        </StacksFooter>
                    </Div>
                </Wrapper>
            </Section>
        );
    }
}

About.propTypes = {};

export default About;
