import { FC } from "react";
import { TodoItemProps } from "../Props/TodoItemProps";


const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed}/>
            Задача = {todo.id}
            {todo.title}
        </div>
    );
};

export default TodoItem;