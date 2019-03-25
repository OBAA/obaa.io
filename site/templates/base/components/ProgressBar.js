import React from 'react';
import styled from 'styled-components'

const ProgressBar_ = styled.div`
    position: relative;
    height: 20px;
    width: 350px;
    border-radius: 50px;
    border: 1px solid #333;
`;

    // @media (max-width: 578px) {
    //     padding: 60px 0;
    //     background: red;
    // }

const Filler_ = styled.div`
    background: #2e7d32;
    height: 100%;
    border-radius: inherit;
    transition: width .2s ease-in;
`;

const Filler = (props) => {
    return (
        <Filler_ style={{width:`${props.percentage}%`}}>
        </Filler_>
    )
};

const ProgressBar = (props) => {
    return (
        <ProgressBar_>
            <Filler percentage={props.percentage}/>
        </ProgressBar_>
    );
};

export default ProgressBar;
