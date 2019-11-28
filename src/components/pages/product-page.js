import React from 'react';
import {connect} from 'react-redux';
import {addedToCart} from '../../actions';
import Error from '../error';
import MenuListItem from '../menu-list-item';

import './product-page.scss'

class ProductPage extends React.Component {
    
    render() {
        const { productId, menuItems, addedToCart } = this.props;
        const menuItem = menuItems.filter( elem => elem.id === +productId);
        
        if (menuItem.length === 0) return <Error />
       
        return (    
            <div>  
                <ul>
                    <MenuListItem 
                        key={menuItem[0].id} 
                        menuItem={menuItem[0]} 
                        onAddToCart={ () => addedToCart(menuItem[0].id)}/>
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
    }
}
const mapDispatchToProps = {
    addedToCart
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)