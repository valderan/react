import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';
//import GotService from '../../services/gotService';


export default class App extends React.Component {

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
                    <CharacterPage /> 
                </Container>
            </>
        );
    }
};
