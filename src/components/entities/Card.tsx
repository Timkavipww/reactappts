import { FC } from "react";
import { useState } from 'react';
import { CardVariant } from "../enums/CardVariant";
import { CardProps } from "../Props/CardProps";


const Card: FC<CardProps> =
({ width,
    height,
    variant,
    children,
}) => {
const [state, setState] = useState(0);
const styles = {
    width,
    height,
    border: variant === CardVariant.outlined ? "1px solid black" : "none",
    backgroundColor: variant === CardVariant.primary ? "lightblue" : "transparent",
    };

const handleClick = () => {
    const newState = state + 1; // Увеличиваем состояние на 1
    setState(newState); // Обновляем состояние
    };

return <div style={styles} onClick={handleClick} className="w-96">
        <p>Current state: {state}</p>
    {children}
    </div>;
};

export default Card;
