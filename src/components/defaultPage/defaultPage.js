import React from 'react';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';
import './defaultPage.css';


export default class DefaultPage extends React.Component {

    state = {
        selectedItem: this.props.selectedItem ? this.props.selectedItem : 130,
        error: false,
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    onItemSelected = (id) => {
        this.setState({selectedItem: id})

    }

    render() {

        const { items, item } = this.props;

        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={items.getData}
                renderItem={items.renderItem }/>
        )

        const itemFields = [];
        item.fields.forEach( ({ field, label }, index) => {
            
            itemFields.push(<Field field={field} key={index} label={label} />)
             
        })
            
        const itemDetails = (
            <ItemDetails 
                itemId = {this.state.selectedItem}
                getItem = { item.getItem }
                selectMessage={ item.selectMessage }>
                { itemFields }
            </ItemDetails>
        )

        return(

            <RowBlock left={itemList} right={itemDetails} />
        )
    }

}