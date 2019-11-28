import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import MenuList from './menu-list';


class MenuListContainer extends Component {

    componentDidMount() {
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then( res => this.props.menuLoaded(res))
            .catch( err => this.props.menuError());
    }

    render() {

        const {menuItems, loading, error, addedToCart} = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <Error />
        }

        return (
            <MenuList menuItems={menuItems} addedToCart={addedToCart}/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError, 
    addedToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuListContainer));