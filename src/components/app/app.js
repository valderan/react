import React, { Component } from 'react';
import uid from 'uuid/v4';
import styled from 'styled-components';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter'; 
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import Modal from '../modal';

import './app.css';


const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learnb React', important: true, like: false, id: 'a96e41ab-4648-4a59-adee-5c5f891a94b1'},
                {label: 'That`s so ggod', important: false, like: false, id: '260773d8-d811-4ac1-b50b-f5404c3525fd'},
                {label: 'I need a break...', important: false, like: false, id: '2c940d3e-bcaf-4d2d-9703-ca6742c8901c'}
            ], 
            deleteStatus: false,
            deleteId: '',
            term: '', 
            filter: 'all'
        }
    }

    // удаление записи
    deleteItem = (id, deleteStatus = true) => {
        this.setState({deleteStatus:false});
        if (deleteStatus) {
            this.setState(({ data }) => { 
                const testArr = data.filter( elem => elem.id !== id)
                return {
                    data: testArr
                }
            });
        }
    }

    // открытие диалога удаления записи
    delete = (id) => {
        this.setState({deleteStatus:true, deleteId: id})
    }

    // добавление записи
    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: uid()
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    changePreferences = (name, id) => {
        this.setState(({data}) => {
            const index = data.findIndex( elem => elem.id === id);
            
            const old = data[index];
            const newItem = {...old};
            newItem[name] = !old[name]; 
            const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];
 
            return {
                data: newArr
            }
        })

    }

    // важность поста
    onToggleImportant = (id) => {
        this.changePreferences('important', id);
    }

    // like поста 
    onToggleLiked = (id) => {
        this.changePreferences('like', id);
    } 

    // поиск
    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    } 

    // апдейт поиска 
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    // фильтр постов
    filterPost = (items, filter) => {
        // фильтр по Like
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {

        const { data, term, filter, deleteStatus, deleteId } = this.state,
            liked = data.filter(item => item.like).length,
            allPosts = data.length,
            visiblePosts = this.filterPost(this.searchPost(data, term), filter); // фильтр(поиск)

        return (
            <AppBlock>
                <AppHeader 
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.delete}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
                
                {
                    deleteStatus ? <Modal 
                                        isOpen={true} 
                                        modalTitle="Внимание!"
                                        body="Вы точно собираетесь удалить запись?"
                                        pBtnClick={() => this.deleteItem(deleteId)}
                                        sBtnClick={() => this.deleteItem(deleteId, false)}/> : ''
                }
                

            </AppBlock>
        )
    }
}