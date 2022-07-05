import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Drawer />
                <Header />
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
                            <Card />
                        </div>
                    </div>
                </main>
                <footer></footer>
            </div>
        </div>
    );
}

export default App;
