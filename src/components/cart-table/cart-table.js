import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart, clearCart } from '../../actions';
import WithRestoService from '../hoc/';

const CartItems = ({ items, deleteFromCart}) => {
    return (
        <>
            {
                items.map(item => {
                    const { title, price, url, id, count } = item;
                    return (
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className='cart__count'>{count}</div>
                            <div className="cart__item-price">{price}$</div>
                            <div onClick={ () => deleteFromCart(id) } className="cart__close">&times;</div>
                        </div>
                    )
                })
            }
        </>
    )
} 


class CartTable extends React.Component {

    state = {
        upload: false,
        error: false,
        infoString: "Здесь пусто, закажи что-нибудь!"
    }
    
    onUpload = () => {
        this.setState({
            upload: true,
            infoString: 'Идет оформление заказа...'
        })
        const {items, info, RestoService, clearCart} = this.props;
        const order = {
            price: info.price,
            total: info.total,
            body: items.map( item => {
                return {
                    menuId: item.id,
                    price: item.price,
                    count: item.count,
                }
            })
        }
        RestoService.uploadOrder(order)
                .then( res => {
                    clearCart();
                    this.setState({
                        upload: true,
                        error: false,
                        infoString: 'Спасибо за Ваш заказ!'
                    })
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        upload: false,
                        error: true,
                        infoString: 'Что-то пошло не так! Попробуйте еще раз.'
                    })
                    this.setState({error: true})
                })
        
    }

    render() {

        const {items, deleteFromCart, info} = this.props;
        const { infoString, error, upload} = this.state;
        let uploadBtn, totalString = '',
            information = infoString;
        
        if(info.total > 0) {                
            uploadBtn = <button onClick={this.onUpload} className="cart__btn">Оформить заказ на сумму: {info.price} $</button>
            totalString = <div className="cart__info">кол-во позиций: {info.total}</div> 
            if (!error && !upload) {
                information = 'Ваш заказ:'
            }
        }

        return (
            <>
                <div className="cart__title">{information}</div>
               {totalString}
                <div className="cart__list">
                    <CartItems deleteFromCart={deleteFromCart} items={items} />
                </div>
                {uploadBtn}

            </>
        );
    }
};


const mapStateToProps = ({items, itemsTotal}) => {
    return {
        items,
        info: itemsTotal(items)
    }
}

const mapDispatchToProps = {
    deleteFromCart,
    clearCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));