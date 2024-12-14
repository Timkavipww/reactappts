import React, { FC, useRef, useState } from "react";

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.isDefaultPrevented();
        console.log(inputRef.current?.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.isDefaultPrevented();
        console.log("dragging");
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log("drop");
    }
    const leaveHanlder = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }
    const dragWithPreventHanlder = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }
    return (
        <div> 
            <input value={value} onChange={changeHanlder} type="text" placeholder="управляемый"/>
            <input ref={inputRef} type="text" placeholder="не управляемый"/>
            <button onClick={clickHandler}>knopka</button>
            <div onDrag={dragHandler} style={{width: 200, height: 200,background: 'red', margin: '20px'}}></div>
            <div 
                onDrop={dropHandler} 
                onDragLeave={leaveHanlder}
                onDragOver={dragWithPreventHanlder}
                style={{width: 200, height: 200,background: isDrag ? 'blue' : 'red', margin: '20px'}}></div>
        </div>
    );

};

export default EventExample;
