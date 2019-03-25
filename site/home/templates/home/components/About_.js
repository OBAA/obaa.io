import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import Heading from '../../../../templates/base/components/Heading'
import ProgressBar from '../../../../templates/base/components/ProgressBar'

import avi from '../../../../static/images/avi.jpg';

    // background: #F0F0F0;
    // background: #2C2C2C;
    // background: #212121;

    // color: 2e7d32
    // color: 22ff22

const Section = styled.section`
    background: #212121;
    padding: 10px 10px;
    @media (max-width: 768px) {
    }
    @media (max-width: 500px) {
        padding: 10px 30px;
    } 
`;

// &:hover {
//     box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
//     transform: translate(0, -5px);
//   }


const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 20%;
    @media (max-width: 768px) {
        padding: 0 10px;
        justify-content: space-around;
    }  
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-size: contain;
    background-position: center;
    
    margin-right: 5px;
    
    @media (max-width: 768px) {
        width: 125px;
        height: 125px;
    }
    @media (max-width: 500px) {
        width: 100px;
        height: 100px;
        margin-right: 5px;
    }
`;

const Bio = styled.div`
    padding: 10px 10px;
    
    @media (max-width: 768px) {
        font-size: 15px;
        width: 82%;
    }
    
    @media (max-width: 500px) {
        padding: 10px 20px;
        font-size: 13px;
        width: 220px;
    }
    
    
    
    color: #2e7d32;
    // color: #22ff22;
`;

const SubHeading = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    font-size: 30px;
    
    color: #22ff22;
    
    @media (max-width: 768px) {
        height: 25px;
        font-size: 20px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    height: 65%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-content: space-around;
        padding: 0 10px;
    }
    
    @media (max-width: 500px) {
        flex-direction: column;
        
        

    }
`;

const Div = styled.div`
    width: 45%;
    height: 100%;
    
    align-self: center;
    
    @media (max-width: 768px) {
        width: 100%;
        height 50%;
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


const StacksBody = styled.div`
    display: flex;
    flex-flow: row wrap;
    background: #2e7d32;
    border-radius: 5px;
    justify-content: space-evenly;
    
    @media (max-width: 500px) {
        padding: 5px 0;
        margin: 0 5px;
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
`;

const IconWrapper = styled.div`
    width: 50px;
    color: #F0F0F0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    margin: 10px 20px;
    
    &:hover ${Icon} {
        color: #22ff22;
    }
    
    @media (max-width: 500px) {
        margin: 5px 15px;
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
            <Section style={{height: `${window.innerHeight}px`}}>


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
