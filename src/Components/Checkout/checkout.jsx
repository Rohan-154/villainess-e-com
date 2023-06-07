import React from 'react';
import {AddressManagement} from '../Address/AddressManagement'; 
// import { CartCard } from '../CartCard/cartCard';
import './checkout.css';
// import { Footer } from '../Footer/footer';
import { useCart } from '../../Context/cart';
import { Bill } from '../Pure-Functions/bill';

const Checkout = () => {

    const { cartState } = useCart();
    const { productsInCart } = cartState;
    const billDetails = Bill(productsInCart);
    const { currentPrice, discountPrice } = billDetails;
    const finalPrice = currentPrice - discountPrice;
    return (
        <div>
            <div className="checkout">
                <div className="checkout__address">
                    <AddressManagement/>
                </div>
                <div className="checkout__cart">
                    <div className="flex-wrap-column">
                        <h3 style={{ margin: "1rem" }}> Checkout </h3>
                
                        <p> PRICE DETAILS : {productsInCart.length} item </p>
                        <div className="flex-wrap-row">
                            <p> Total MRP: </p>
                            <p>₹{currentPrice} .00</p>
                        </div>
                        <div className="flex-wrap-row">
                            <p> Special Festive Off : </p>
                            <p className="green-text">₹{discountPrice}</p>
                        </div>
                        <div className="flex-wrap-row">
                            <p> Delivery Charges : </p>
                            <p>
                                <s>₹60</s> <span className="green-text"> FREE </span>
                            </p>
                        </div>
                        <div className="flex-wrap-row">
                            <p> Total Amount : </p>
                            <p>
                                <strong>₹{finalPrice}</strong>
                            </p>
                        </div>
                        <button className="btn-login login spacer-1rem" type="submit" onClick={() => navigate('/checkout')}>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export { Checkout };
