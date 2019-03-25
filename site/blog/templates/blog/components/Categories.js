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
    flex-direction: column;
    
`;

const Category = styled.div`
    display: flex;
    flex-flow: row no-wrap;
    align-items: center;
    height: 40px;
    
    // color: #22ff22;
    color: #2e7d32;
    font-size: 20px;
    margin-bottom: 10px;
    
    &:hover, &:focus {       
        background: #2e7d32;
        color: #F0F0F0;
    }
    
`;

const CategoryName = styled.div`
    padding: 5px 10px;
    flex-grow: 1;
    
`;

const CategoryCount = styled.div`
    width: 30px
    margin-right: 15px;
`;



class Categories extends Component {
    render() {
        const title = 'Categories';
        return (
            <Div>
                <SubHeading title={title}/>
                <Wrapper>
                    <Category>
                        <CategoryName>Web Development</CategoryName>
                        <CategoryCount>(6)</CategoryCount>
                    </Category>
                    <Category>
                        <CategoryName>Travel</CategoryName>
                        <CategoryCount>(12)</CategoryCount>
                    </Category>
                    <Category>
                        <CategoryName>Cloud Services</CategoryName>
                        <CategoryCount>(4)</CategoryCount>
                    </Category>
                    <Category>
                        <CategoryName>Dev Ops</CategoryName>
                        <CategoryCount>(8)</CategoryCount>
                    </Category>
                    <Category>
                        <CategoryName>Micro Services</CategoryName>
                        <CategoryCount>(3)</CategoryCount>
                    </Category>
                </Wrapper>

            </Div>
        );
    }
}

export default Categories;
