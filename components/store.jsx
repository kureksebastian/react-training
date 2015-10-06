import React from 'react';
import ProductsList from './productsList';
import CartInfo from './cartInfo';

let mockedProducts = [
    {id: 1, name: 'asus laptop', price: 2000},
    {id: 2, name: 'macbook', price: 7200},
    {id: 3, name: 'samsung tv', price: 1500},
    {id: 4, name: 'das keyboard', price: 800},
    {id: 5, name: 'earphones', price: 50}
];

let Store = React.createClass({

    getInitialState () {
        return {
            cart: []
        };
    },

    _addProductToCartHandler (productId) {
        const productToAdd = mockedProducts.find(product => {
            return product.id === productId;
        });

        if (!productToAdd) {
            alert('no such product');
            return;
        }

        this.setState(({cart}) => {
            const newCart = cart;
            newCart.push(productToAdd);

            return {
                cart: newCart
            };
        });
    },

    render () {
        return (
            <div className="Store col-xs-12">
                <h1>Welcome !</h1>

                <CartInfo cart={this.state.cart} />

                <ProductsList
                    addProductToCartHandler={this._addProductToCartHandler}
                    products={mockedProducts}
                />

            </div>
        );
    }

});

export default Store;
