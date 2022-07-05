function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="drawer-overlay">
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
                                        backgroundImage:
                                            "url(/img/sneakers/1.jpg",
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
                                        backgroundImage:
                                            "url(/img/sneakers/1.jpg",
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
                <header className="header">
                    <div className="header-left">
                        <img
                            width={40}
                            height={40}
                            src="/img/header-logo.png"
                            alt="Logo"
                        />
                        <div>
                            <h3>REACT SNEAKERS</h3>
                            <p>Магазин лучших кроссовок</p>
                        </div>
                    </div>
                    <ul className="header-right">
                        <li>
                            <img
                                width={18}
                                height={18}
                                src="/img/header-cart.svg"
                                alt="icon: cart"
                            />
                            <span>1205 грн.</span>
                        </li>
                        <li>
                            <img
                                width={18}
                                height={18}
                                src="/img/header-favorite.svg"
                                alt="icon: user"
                            />
                        </li>
                        <li>
                            <img
                                width={18}
                                height={18}
                                src="/img/header-user.svg"
                                alt="icon: user"
                            />
                        </li>
                    </ul>
                </header>
                <main>
                    <div className="content">
                        <div className="content-header">
                            <h1 className="content-title">Все кроссовки</h1>
                            <div className="search">
                                <img src="/img/search.png" alt="icon: search" />
                                <input type="text" placeholder="Поиск..." />
                            </div>
                        </div>
                        <div className="sneakers">
                            <div className="card">
                                <div className="favorite">
                                    <img
                                        src="/img/heart-unliked.svg"
                                        alt="icon: heart"
                                    />
                                </div>
                                <img
                                    width={133}
                                    height={112}
                                    src="img/sneakers/1.jpg"
                                    alt="sneakers"
                                />
                                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                                <div className="card-bottom">
                                    <div className="card-price">
                                        <span>Цена:</span>
                                        <b>12 999 грн.</b>
                                    </div>
                                    <button>
                                        <img
                                            src="img/btn-plus.svg"
                                            alt="icon: plus"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="favorite">
                                    <img
                                        src="/img/heart-unliked.svg"
                                        alt="icon: heart"
                                    />
                                </div>
                                <img
                                    width={133}
                                    height={112}
                                    src="img/sneakers/2.jpg"
                                    alt="sneakers"
                                />
                                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                                <div className="card-bottom">
                                    <div className="card-price">
                                        <span>Цена:</span>
                                        <b>12 999 грн.</b>
                                    </div>
                                    <button>
                                        <img
                                            src="img/btn-plus.svg"
                                            alt="icon: plus"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="favorite">
                                    <img
                                        src="/img/heart-unliked.svg"
                                        alt="icon: heart"
                                    />
                                </div>
                                <img
                                    width={133}
                                    height={112}
                                    src="img/sneakers/3.jpg"
                                    alt="sneakers"
                                />
                                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                                <div className="card-bottom">
                                    <div className="card-price">
                                        <span>Цена:</span>
                                        <b>12 999 грн.</b>
                                    </div>
                                    <button>
                                        <img
                                            src="img/btn-plus.svg"
                                            alt="icon: plus"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="favorite">
                                    <img
                                        src="/img/heart-unliked.svg"
                                        alt="icon: heart"
                                    />
                                </div>
                                <img
                                    width={133}
                                    height={112}
                                    src="img/sneakers/4.jpg"
                                    alt="sneakers"
                                />
                                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                                <div className="card-bottom">
                                    <div className="card-price">
                                        <span>Цена:</span>
                                        <b>12 999 грн.</b>
                                    </div>
                                    <button>
                                        <img
                                            src="img/btn-plus.svg"
                                            alt="icon: plus"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer></footer>
            </div>
        </div>
    );
}

export default App;
