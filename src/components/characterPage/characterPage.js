import React from 'react';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import './characterPage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';


export default class CharacterPage extends React.Component {

    gotService = new gotService();
    state = {
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    onItemSelected = (id) => {
        this.setState({selectedChar: id})

    }

    render() {
        
        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }

        const itemList = (
                    <ItemList 
                        onItemSelected={this.onItemSelected}
                        getData={this.gotService.getAllCharacters}
                        renderItem={ ({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetails = (
            <ItemDetails 
                itemId = {this.state.selectedChar}
                getItem = { this.gotService.getCharacter }
                selectMessage="Please select a character">
                
                    <Field field='gender' label='Gender' />
                    <Field field='born' label='Born' />
                    <Field field='died' label='Died' />
                    <Field field='culture' label='Culture' />

            </ItemDetails>
        )

        return(
           
           <RowBlock left={itemList} right={itemDetails} />
           
        )
    }
}