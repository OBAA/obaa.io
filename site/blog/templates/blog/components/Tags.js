import React, {Component} from 'react';
import styled from 'styled-components'

import SubHeading from '../../../../templates/base/components/SubHeading';


const Div = styled.section`
    background: #212121;
    padding: 20px 30px;
`;

const Wrapper = styled.div`
    border-top: 2px solid #22ff22;
    padding: 20px 5px;
    
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    
    
`;

const Tag = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: #2e7d32;
    border-radius: 3px;
    margin: 0 2px 10px 2px;
    padding: 5px 10px;
    
    text-decoration: none;
    
    height: 20px;
    font-size: 15px;
    
    color: #F0F0F0;
    
    
    &:hover, &:focus {
        background: #22ff22;
        color: white;
    }
    
`;


class Tags extends Component {
    render() {
        const title = 'Tags';
        return (
            <Div>
                <SubHeading title={title}/>
                <Wrapper>
                    <Tag href='#'>Python</Tag>
                    <Tag href='#'>Django</Tag>
                    <Tag href='#'>Digital Ocean</Tag>
                    <Tag href='#'>React</Tag>
                    <Tag href='#'>Git</Tag>
                    <Tag href='#'>Nginx</Tag>
                    <Tag href='#'>Javascript</Tag>
                    <Tag href='#'>Docker</Tag>
                </Wrapper>
            </Div>
        );
    }
}

export default Tags;
