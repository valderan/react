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
                {label: 'Going to learnb React', important: true, id: 'a96e41ab-4648-4a59-adee-5c5f891a94b1'},
                {label: 'That`s so ggod', important: false, id: '260773d8-d811-4ac1-b50b-f5404c3525fd'},
                {label: 'I need a break...', important: false, id: '2c940d3e-bcaf-4d2d-9703-ca6742c8901c'},
                {label: ' ', important: false, id: 'werfd2q'},
                {label: '', important: false, id: 'werd2edfq'},
                {},
                1111,   // для теста
                2222    // для теста
            ], 
            deleteStatus: false,
            deleteId: ''
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
        console.log('newItem: ', newItem);
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    render() {

        const { deleteStatus, deleteId } = this.state;
        
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.delete}/>
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