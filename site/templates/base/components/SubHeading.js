import React from 'react';
import styled from "styled-components";


const Title = styled.h2`
    display: flex;
    align-items: center;
    height: 25px;
    font-size: 20px;
    
    color: #22ff22;
    
    @media (max-width: 768px) {
        height: 25px;
        font-size: 20px;
    }
`;

const SubHeading = (props) => {
    return (
        <Title>
            {props.title}
        </Title>
    );
};

export default SubHeading;


{/*<Title style={{color: `${props.color}`}}>*/}