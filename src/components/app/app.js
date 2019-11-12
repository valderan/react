import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import GotService from '../../services/gotService';


const App = () => {

    // For test ---------------------------------------
    const got = new GotService();

    got.getAllCharacters()
        .then(res => {
            res.forEach(element => {
                console.log('AllCharacters: ', element.name);
            });
        });

    got.getCharacter(130)
        .then(res => console.log('Character:',res));

    got.getBooks() 
        .then(res => {
            res.forEach(element => {
                console.log('Book: ', element.name);
            })
        });

    got.getBook(1)
        .then(res => console.log(`Book №$1 name: ${res.name}`));

    got.getAllHouses()
        .then(res => {
            res.forEach(element => {
                console.log('House: ', element.name);
            })
        })

    got.getHouse(2)
        .then(res => console.log(`House №$2 name: ${res.name}`));

    // END For test ------------------------------------------

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
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
};

export default App;