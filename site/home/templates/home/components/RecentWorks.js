import React, {Component} from 'react';
import styled from "styled-components";
import Heading from "../../../../templates/base/components/Heading";

import client1 from '../../../../static/images/client1over3.jpg';
import client2 from '../../../../static/images/clientAgbanaTolu.jpg';
import ContactMe from "./ContactMe";


const Section = styled.div`
    background: #F0F0F0;
    padding: 10px 50px;
`;

const Intro = styled.div`
    display: flex;
    justify-content: center;
    height: 45px;
    color: #2e7d32;
    margin: 25px 0;
    font-size: 14px;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
    
    @media (max-width: 500px) {
        // padding: 10px 20px;
    }
`;

const Content = styled.span`
    
`;

const Link = styled.a`
    color: #2e7d32;
    height: 18px;
    font-style: italic;
    font-weight: bolder;
    text-decoration: none;
    padding-left: 10px;
    
    &:hover {
        font-size: 18px;
        margin-left: 10px;
        border-left: 2px solid #2e7d32;
    }
`;

const Div = styled.div`
    display: flex;    
    margin-bottom: 50px;

    @media (min-width: 780px) {
        flex-flow: row wrap;
        justify-content: space-around;
    }
    
    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`;

const MockUp = styled.div`
    margin-bottom: 45px;
`;

const Overlay = styled.div`
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: #2e7d32;
    overflow: hidden;
    width: 100%;
    height:0;
    transition: .5s ease;
    opacity: 0.2;
    
`;

const InnerWrapper = styled.div` 
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    height:0;
    transition: .5s ease;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;

    &:hover {
        ${Overlay}, ${InnerWrapper} {
            bottom: 0;
            height: 100%;
        }
    }
`;

const Img = styled.img`    
    display: block;
    height: 350px;
    width: 500px;    
          
    @media (max-width: 1200px) {
        height: 320px;
        width: 450px;
    }

    @media (max-width: 1050px) {
        height: 300px;
        width: 400px;
    }
    
    @media (max-width: 950px) {
        height: 275px;
        width: 350px;
    }
    
    @media (max-width: 850px) {
        height: 100%;
        width: 100%;
    }
`;

const Details = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-decoration: none;
    background: #2e7d32;
    height: 110px;
    width: 220px;
    
    color: #F0F0F0
`;

const Title = styled.div`
    font-size: 20px;
    font-family: roboto;
    
`;

const Description = styled.div`     
    font-size: 12px;    
    margin-top: 20px;
       
`;


class RecentWorks extends Component {
    state = {
        heading: {
            title: 'Recent Works',
            color: '#2e7d32'
        },
        projects: {
            oneOverThree: {
                title: '1OVER3',
                description: 'Multi-tenant E-Commerce Platform',
                mockUp: `${client1}`,
                url: 'https://www.1over3.store/'
            },
            agbanaTolu: {
                title: 'Agbana Tolu',
                description: 'Personal Portfolio Website',
                mockUp: `${client2}`,
                url: 'https://agbanatolu.herokuapp.com/'
            }
        }
    };

    render() {
        const projects = this.state.projects;

        const renderProjects = () => {
            const mockups = [];
            // const

            for (let project in projects){
                mockups.push({
                    id: project,
                    details: projects[project]
                })
            }

            return mockups.map((project, i)=>{
                return (
                    <MockUp key={i}>
                        <Wrapper>
                            <Img src={`${project.details.mockUp}`}/>
                            <Overlay/>
                            <InnerWrapper>
                                <Details href={`${project.details.url}`} target="_blank">
                                    <Title>
                                        {project.details.title}
                                    </Title>
                                    <Description>
                                        {project.details.description}
                                    </Description>
                                </Details>
                            </InnerWrapper>

                        </Wrapper>
                    </MockUp>
                )
            })

        };



        return (
            <Section>
                <Heading title={this.state.heading.title} color={this.state.heading.color}/>
                <Intro>
                    <Content>Here are a few of my recent Web projects. Want to see more?</Content>
                    <Link href='#'>Contact me.</Link>
                </Intro>

                <Div>
                    {renderProjects()}
                </Div>

            </Section>
        );
    }
}

export default RecentWorks;
