function Drawer() {
    return (
        <div style={{ display: "none" }} className="drawer-overlay">
            <div className="drawer">
                <h2>
                    Корзина
                    <img
                        className="remove-btn"
                        src="/img/btn-remove.svg"
                        alt="remove"
                    />
                </h2>
                <div className="items">
                    <div className="cart-item">
                        <div
                            style={{
                                backgroundImage: "url(/img/sneakers/1.jpg",
                            }}
                            className="cart-item__image"></div>

                        <div className="cart-item__info">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 грн.</b>
                        </div>
                        <img
                            className="remove-btn"
                            src="/img/btn-remove.svg"
                            alt="remove"
                        />
                    </div>
                    <div className="cart-item">
                        <div
                            style={{
                                backgroundImage: "url(/img/sneakers/1.jpg",
                            }}
                            className="cart-item__image"></div>

                        <div className="cart-item__info">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 грн.</b>
                        </div>
                        <img
                            className="remove-btn"
                            src="/img/btn-remove.svg"
                            alt="remove"
                        />
                    </div>
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
                        Оформить заказ{" "}
                        <img src="/img/arrow.svg" alt="icon: arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
