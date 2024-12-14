import { FC, useEffect, useState } from "react";
import List from "../Lists/List";
import axios from "axios";
import { ITodo} from "../../types/types";
import TodoItem from "../entities/TodoItem";
import { useNavigate } from "react-router-dom";

const TodosPage: FC = () => {
      const [todos, setTodos] = useState<ITodo[]>([]);
      const navigate = useNavigate();
      async function fetchTodos() {
        try{
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');
            setTodos(response.data);
        } catch (e){
          alert(e);
        }
      }

      useEffect(() => {
        fetchTodos();
      }, []);
        
    return(
        <div>
            <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem onClick={() => navigate(`/todo/${todo.id}`)} key={todo.id} todo={todo} />}
          />
        </div>
    )
}
export default TodosPage;