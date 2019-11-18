import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import { withRouter } from 'react-router-dom';

import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';
import RandomItem from '../randomItem';
import ItemList from '../itemList';


 class BooksPage extends React.Component {

    gotService = new gotService();   // for test

    state = {
        visibleRandomBlock: true,
        selectedItem: 0,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    toggle = () => {
        this.setState({visibleRandomBlock: !this.state.visibleRandomBlock})
    } 

   
    render() {
        
        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }

        const { visibleRandomBlock, selectedItem } = this.state
        const rcBtnName = visibleRandomBlock ? 'Скрыть блок' : 'Показать блок';
          
        const itemList = {
            getData: this.gotService.getBooks,
            renderItem: ({id, name, publisher}) => `${id}. ${name} (${publisher})`
        }
  
        const itemFields = [
            {field: 'name' , label: 'Book'},
            {field: 'numberOfpages' , label: 'Pages'},
            {field: 'publisher' , label: 'Publisher'},
            {field: 'released' , label: 'Released'}
        ]

        const itemDetails = {
            getItem: this.gotService.getBook,
            selectMessage: "<-- Выберите, пожалуйста, книгу из списка",
            itemType: 'Book',
            fields: itemFields
        }

        return (
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button onClick={this.toggle} color="primary">{rcBtnName}</Button>{' '}
                                {visibleRandomBlock ? <RandomItem itemDetails={itemDetails} randomIndex={{min:1, max:10}}/> : ''}
                        </Col>
                    </Row>
                    <ItemList 
                        onItemSelected={ (itemId) => {
                            this.props.history.push(itemId);
                        }}
                        getData={itemList.getData}
                        renderItem={itemList.renderItem }/>
                </Container>
        );
    }
};


export default withRouter(BooksPage);