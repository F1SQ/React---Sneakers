function Header() {
    return (
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
    );
}

export default Header;
