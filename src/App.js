function App() {
    return (
        <div className="App">
            <div className="wrapper">
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
                                src="/img/header-user.svg"
                                alt="icon: user"
                            />
                        </li>
                    </ul>
                </header>
                <main>
                    <div className="content">
                        <h1 className="content-title">Все кроссовки</h1>
                        <div className="sneakers">
                            <div className="card">
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
                                            width={11}
                                            height={11}
                                            src="img/card-plus.svg"
                                            alt="icon: plus"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="card">
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
                                            width={11}
                                            height={11}
                                            src="img/card-plus.svg"
                                            alt="icon: plus"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="card">
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
                                            width={11}
                                            height={11}
                                            src="img/card-plus.svg"
                                            alt="icon: plus"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="card">
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
                                            width={11}
                                            height={11}
                                            src="img/card-plus.svg"
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
