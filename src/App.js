import React from "react";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        // fetch("https://62c5de79a361f725129096e8.mockapi.io/items")
        fetch("https://62d55644d4406e5235588c17.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="App">
            <div className="wrapper">
                {cartOpened && (
                    <Drawer
                        items={cartItems}
                        onClose={() => setCartOpened(false)}
                    />
                )}
                <Header onClickCart={() => setCartOpened(true)} />
                <main>
                    <div className="content">
                        <div className="content-header">
                            <h1 className="content-title">
                                {searchValue
                                    ? `Поиск по запросу:  "${searchValue}"`
                                    : "Все кроссовки"}
                            </h1>
                            <div className="search">
                                <img src="/img/search.png" alt="icon: search" />
                                {searchValue && (
                                    <img
                                        onClick={() => setSearchValue("")}
                                        className="remove-btn"
                                        src="/img/btn-remove.svg"
                                        alt="clear"
                                    />
                                )}
                                <input
                                    onChange={onChangeSearchInput}
                                    type="text"
                                    placeholder="Поиск..."
                                    value={searchValue}
                                />
                            </div>
                        </div>
                        <div className="sneakers">
                            {items
                                .filter((item) =>
                                    item.title
                                        .toLowerCase()
                                        .includes(searchValue.toLowerCase())
                                )
                                .map((item, index) => (
                                    <Card
                                        key={index}
                                        title={item.title}
                                        price={item.price}
                                        imageUrl={item.imageUrl}
                                        onFavorite={() =>
                                            console.log("Добавили в закладки")
                                        }
                                        onPlus={(obj) => onAddToCart(obj)}
                                    />
                                ))}
                        </div>
                    </div>
                </main>
                <footer></footer>
            </div>
        </div>
    );
}

export default App;
