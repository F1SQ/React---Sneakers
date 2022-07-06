import React from "react";

function Drawer({ onClose, items = [] }) {
    return (
        <div className="drawer-overlay">
            <div className="drawer">
                <h2>
                    Корзина
                    <img
                        onClick={onClose}
                        className="remove-btn"
                        src="/img/btn-remove.svg"
                        alt="close"
                    />
                </h2>
                <div className="items">
                    {items.map((obj) => (
                        <div className="cart-item">
                            <div
                                style={{
                                    backgroundImage: `url(${obj.imageUrl})`,
                                }}
                                className="cart-item__image"></div>

                            <div className="cart-item__info">
                                <p>{obj.title}</p>
                                <b>{obj.price} грн.</b>
                            </div>
                            <img
                                className="remove-btn"
                                src="/img/btn-remove.svg"
                                alt="close"
                            />
                        </div>
                    ))}
                </div>

                <div className="drawer-info">
                    <ul className="drawer-info__block">
                        <li>
                            <span>Итого</span>
                            <div></div>
                            <b>21 220 грн.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1070 грн.</b>
                        </li>
                    </ul>
                    <button className="green-button">
                        Оформить заказ
                        <img src="/img/arrow.svg" alt="icon: arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
