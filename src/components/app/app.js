import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';
import gotService from '../../services/gotService';
import DefaultPage from '../defaultPage';


export default class App extends React.Component {

    gotService = new gotService();   // for test

    state = {
        visibleRandomCharBlock: true,
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    toggle = () => {
        this.setState({visibleRandomCharBlock: !this.state.visibleRandomCharBlock})
    } 

   
    render() {
        
        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }

        const { visibleRandomCharBlock } = this.state
        const rcBtnName = visibleRandomCharBlock ? 'Скрыть блок' : 'Показать блок';
        
        const itemList = {
            getData: this.gotService.getAllCharacters,
            renderItem: ({name, gender}) => `${name} (${gender})`
        }

        const itemDetails = {
            getItem: this.gotService.getCharacter,
            selectMessage: "Please select a character",
            fields: [
                {field: 'gender' , label: 'Gender'},
                {field: 'born' , label: 'Born'},
                {field: 'died' , label: 'Died'},
                {field: 'culture' , label: 'Culture'}
            ]
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
                                {visibleRandomCharBlock ? <RandomChar/> : ''}
                        </Col>
                    </Row>
                    { 
                        // <CharacterPage /> 
                    } 

                    <DefaultPage  items={itemList} item={itemDetails}/>
                </Container>
            </>
        );
    }
};
