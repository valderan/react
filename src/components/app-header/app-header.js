import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to='/' className="header__link">Menu</Link>
            <Link to='/cart' className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
            </Link>
            <Link to='/cart'>
                <span className="header__price"> Total: {total.price} $</span>
            </Link>
           
        </header>
    )
};

const mapStateToProps = ({items, itemsTotal}) => {
    return {
        total: itemsTotal(items)
    }
}

export default connect(mapStateToProps)(AppHeader);