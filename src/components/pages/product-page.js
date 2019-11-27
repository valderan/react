import React from 'react';
import {connect} from 'react-redux';
import Error from '../error';
import MenuListItem from '../menu-list-item';

class ProductPage extends React.Component {
    
    render() {
       
        const { productId, menuItems } = this.props;
    
        const menuItem = menuItems.filter( elem => elem.id === +productId);
        console.log('menuItem: ', menuItem);
        if (menuItem.length === 0) return <Error />
       
        return (    
            <>  
                <ul>
                    <MenuListItem key={menuItem[0].id} menuItem={menuItem[0]} />
                </ul>
            </>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
    }
}

export default connect(mapStateToProps)(ProductPage)