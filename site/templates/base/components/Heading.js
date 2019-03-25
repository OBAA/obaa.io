import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
        height: 40px;
        font-size: 35px;
    }
    @media (max-width: 480px) {
        height: 35px;
        font-size: 30px;
    }
    
`;

const Heading = (props) => {
    return (
        <Title style={{color: `${props.color}`}}>
            {props.title}
        </Title>
    );
};

export default Heading;
