import React from "react";
import styles from "./Card.module.css";

function Card({ onFavorite, imageUrl, title, price, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div onClick={onFavorite} className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="icon: heart" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <h5>{title}</h5>
            <div className={styles.bottom}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <b>{price} грн.</b>
                </div>

                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"}
                    alt="icon: plus"
                />
            </div>
        </div>
    );
}

export default Card;
