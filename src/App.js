import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch("https://62c5de79a361f725129096e8.mockapi.io/items")
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
                            <h1 className="content-title">Все кроссовки</h1>
                            <div className="search">
                                <img src="/img/search.png" alt="icon: search" />
                                <input type="text" placeholder="Поиск..." />
                            </div>
                        </div>
                        <div className="sneakers">
                            {items.map((item) => (
                                <Card
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
