import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter'; 
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'Going to learnb React', important: true, id: 'qewrq'},
        {label: 'That`s so ggod', important: false, id: 'qedfq'},
        {label: 'I need a break...', important: false, id: 'werfq'},
        {label: ' ', important: false, id: 'wdwerfq'},
        1111,   // для теста
        2222    // для теста
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;