import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';
import DefaultPage from '../defaultPage';
import RandomItem from '../randomItem';


export default class Houses extends React.Component {

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
            getData: this.gotService.getAllHouses,
            renderItem: ({ name, region }) => `${name} (${region})`
        }
  
        const itemFields = [
            {field: 'name' , label: 'House'},
            {field: 'region' , label: 'region'},
            {field: 'overlord' , label: 'Overlord'},
            {field: 'words' , label: 'words'}
        ]

        const itemDetails = {
            getItem: this.gotService.getHouse,
            selectMessage: "<-- Выберите, пожалуйста, дом из списка",
            itemType: 'House',
            fields: itemFields
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button onClick={this.toggle} color="primary">{rcBtnName}</Button>{' '}
                                {visibleRandomBlock ? <RandomItem itemDetails={itemDetails} randomIndex={{min:1, max:10}}/> : ''}
                        </Col>
                    </Row>
                    <DefaultPage  items={itemList} item={itemDetails} selectedItem={selectedItem}/>
                </Container>
            </>
        );
    }
};
