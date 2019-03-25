import React, {Component} from 'react';
import styled from 'styled-components'

import '../../../static/css/main.css'

const Section = styled.div`
    height: 350px;
    background: #2e7d32;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
`;
    // margin-bottom: 25px;

const Title = styled.h1`
    color: #F0F0F0;
    font-size: 40px;
    font-family: Roboto;
    text-transform: capitalize;
    text-decoration: none;
`;

const LinkWrapper = styled.span`
    border: 2px solid #fff;
    border-radius: 20px;
    color: #F0F0F0;
    display: inline-block;
    justify-content: space-around;
    padding: 10px 20px;
    
    @media (max-width: 500px) {
        padding: 7px 15px;
    }
        
`;

const Link = styled.a`
    color: #F0F0F0;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 17px;
    
    @media (max-width: 500px) {
        font-size: 15px;
    }

    &:hover, &:focus {
        color: #22ff22;
    }
`;


class Banner extends Component {
    render() {
        const props = this.props;

        return (
            <Section>
                <Title>{props.title}</Title>
                <LinkWrapper>
                    <Link href='/'>home</Link>
                    <span> | </span>
                    <Link href={`/${props.title}`}>{props.title}</Link>
                </LinkWrapper>
            </Section>
        );
    }
}

export default Banner;
