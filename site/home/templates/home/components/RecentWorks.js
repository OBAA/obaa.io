import React, {Component} from 'react';
import styled from "styled-components";
import Heading from "../../../../templates/base/components/Heading";


const Section = styled.div`
    background: #F0F0F0;
    padding: 10px 50px;
`;

const Intro = styled.div`
    color: #2e7d32;
    margin-bottom: 25px;
    font-size: 14px;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
    
    @media (max-width: 500px) {
        // padding: 10px 20px;
    }
`;

const Link = styled.a`
    color: #2e7d32;
    font-style: italic;
    font-weight: bolder;
    text-decoration: none;
    
    &:hover {
        padding-left: 10px;
    }
`;

const Div = styled.div`
    display: flex;    
    margin-bottom: 50px;

    @media (min-width: 780px) {
        flex-flow: row wrap;
        justify-content: space-around;
    }
    
    @media (max-width: 780px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Wrapper = styled.div`
    height: 350px;
    width: 500px;
    
    background: #2e7d32;
    background: #2e7d32;
    color: #F0F0F0;
    margin-bottom: 35px;
    
    @media (max-width: 1200px) {
        height: 300px;
        width: 400px;
    }
    
    @media (max-width: 950px) {
        height: 275px;
        width: 75%;
        width: 330px;
    }

    @media (max-width: 780px) {
        height: 300px;
        width: 85%;
        width: 400px;
    }
    
    @media (max-width: 500px) {
        height: 280px;
        width: 100%;
    }
    
    @media (max-width: 380px) {
        height: 235px;
        width: 100%;
    }

    &:hover {
        background: #212121;
        border: 2px solid #22ff22;
        color: #22ff22;
    }
`;


class RecentWorks extends Component {
    state = {
        heading: {
            title: 'Recent Works',
            color: '#2e7d32'
        }
    };

    render() {
        return (
            <Section>
                <Heading title={this.state.heading.title} color={this.state.heading.color}/>
                <Intro>
                    Here are a few of my recent Web projects. Want to see more?
                    <Link href='#'> Contact me.</Link>
                </Intro>

                <Div>
                    <Wrapper>
                        ...
                    </Wrapper>

                    <Wrapper>
                        ...
                    </Wrapper>
                </Div>

            </Section>
        );
    }
}

export default RecentWorks;
