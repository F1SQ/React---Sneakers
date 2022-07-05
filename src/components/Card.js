function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="icon: heart" />
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
                    <img src="img/btn-plus.svg" alt="icon: plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;
