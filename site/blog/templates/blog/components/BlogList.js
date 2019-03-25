import React, {Component} from 'react';
import styled from "styled-components";

import BlogCard from './BlogCard'


const Section = styled.section`
    background: #212121;
    padding: 20px 30px;
            
    @media (max-width: 768px) {
    
    }
    @media (max-width: 500px) {
        
    } 
`;

const SubHeading = styled.h2`
    display: flex;
    align-items: center;

    
    color: #22ff22;
    
    @media (max-width: 768px) {
        height: 25px;
        font-size: 20px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    padding: 10px 0;
    
    @media (min-width: 780px) {
        flex-flow: row wrap;
        justify-content: space-between;
    }
    
    @media (max-width: 780px) {
        flex-direction: column;
        align-items: center;
    }
    
`;


class BlogList extends Component {
    state = {
        author: 'OBAA',
        titles: {
            title1: 'How to Find the Video Games of Your Youth',
            title2: 'Integrating your Django Project with React',
            title3: 'How I Built my Portfolio Website',
            title4: 'How to Find the Video Games of Your Youth',
            title5: 'Building a Multi-Tenant E-commerce Website with Django',
            title6: 'How to Find the Video Games of Your Youth',
        }
    };

    render() {
        const t = this.state.titles;
        const author = this.state.author;
        return (
            <Section>
                <SubHeading>
                    Latest Posts
                </SubHeading>

                <Wrapper>
                    <BlogCard author={author} title={t.title1}/>
                    <BlogCard author={author} title={t.title2}/>
                    <BlogCard author={author} title={t.title3}/>
                    <BlogCard author={author} title={t.title4}/>
                    <BlogCard author={author} title={t.title5}/>
                    <BlogCard author={author} title={t.title6}/>
                </Wrapper>

            </Section>
        );
    }
}

export default BlogList;
