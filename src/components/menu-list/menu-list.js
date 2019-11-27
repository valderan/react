import React from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';

function MenuList({menuItems}) {
   
    return (
        <ul className="menu__list">
            {
                menuItems.map(menuItem => {
                    return <MenuListItem key={menuItem.id} menuItem={menuItem} />
                })
            }
        </ul>
    )
    
};

export default MenuList;