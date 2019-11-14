import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

//import GotService from '../../services/gotService';


export default class App extends React.Component {

    state = {
        visibleRandomCharBlock: true
    }

    toggle = () => {
        this.setState({visibleRandomCharBlock: !this.state.visibleRandomCharBlock})
    } 

    render() {
        
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
