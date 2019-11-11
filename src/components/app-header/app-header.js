import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover{
            color: blue;
        }
    }
    h2{
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = ({liked, allPosts}) => {
    
    let strRecords = 'запись';
    if (allPosts > 1 && allPosts < 5) {
        strRecords = 'записи'
    } else if(allPosts >= 5) {
        strRecords = 'записей'
    }

    return (
        <Header>
            <h1>Vladimir Kundryukov</h1>
            <h2>{allPosts} {strRecords}, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;