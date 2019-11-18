import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';

import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';
import DefaultPage from '../defaultPage';
import RandomItem from '../randomItem';


export default class CharacterPage extends React.Component {

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
            getData: this.gotService.getAllCharacters,
            renderItem: ({name, gender}) => `${name} (${gender})`
        }
  
        const charFields = [
            {field: 'gender' , label: 'Gender'},
            {field: 'born' , label: 'Born'},
            {field: 'died' , label: 'Died'},
            {field: 'culture' , label: 'Culture'}
        ]

        const itemDetails = {
            getItem: this.gotService.getCharacter,
            selectMessage: "<-- Выберите, пожалуйста, персонажа из списка",
            itemType: 'Character',
            fields: charFields
        }

        return (
            <> 
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button onClick={this.toggle} color="primary">{rcBtnName}</Button>{' '}
                                {visibleRandomBlock ? <RandomItem itemDetails={itemDetails} /> : ''}
                        </Col>
                    </Row>
                    <DefaultPage  items={itemList} item={itemDetails} selectedItem={selectedItem}/>
                </Container>
            </>
        );
    }
};
