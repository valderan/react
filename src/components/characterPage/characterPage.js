import React from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import './characterPage';


export default class CharacterPage extends React.Component {

    state = {
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    onCharSelected = (id) => {
        this.setState({selectedChar: id})
    }

    render() {
        
        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }

        return(
           
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
           
        )
    }
}