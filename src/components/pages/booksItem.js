import React from 'react';
import gotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';

export default class BooksItem extends React.Component {

    gotService = new gotService();  
    state = {
        selectedItem: this.props.selectedItem ? this.props.selectedItem : 0,
        error: false
    }

    render() {
        
        const itemFields = [
            {field: 'name' , label: 'Book'},
            {field: 'numberOfpages' , label: 'Pages'},
            {field: 'publisher' , label: 'Publisher'},
            {field: 'released' , label: 'Released'}
        ]

        const fields = [];
        itemFields.forEach( ({ field, label }, index) => {
            fields.push(<Field field={field} key={index} label={label} />)
        })

        return(
                <ItemDetails 
                    itemId = {this.state.selectedItem}
                    getItem = { this.gotService.getBook }
                    selectMessage={ 'Запрошенной Вами книги не существует!' }>
                        {fields}
                </ItemDetails>
        )
    }

}