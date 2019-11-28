import React from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';

function MenuList({menuItems, addedToCart}) {
   
    return (
        <ul className="menu__list">
            {
                menuItems.map(menuItem => {
                    return <MenuListItem 
                        key={menuItem.id} 
                        menuItem={menuItem} 
                        onAddToCart={ () => addedToCart(menuItem.id)}/>
                })
            }
        </ul>
    )
    
};

export default MenuList;