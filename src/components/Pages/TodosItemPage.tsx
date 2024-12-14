import { FC, useEffect, useState } from "react";
import { ITodo } from "../../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { TodosItemPageParams } from "../Params/TodoItemPageParams";

const TodoItemPage: FC = () => {

    const [todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams<TodosItemPageParams>();
    const navigate = useNavigate();
    async function fetchTodo() {

      try{
          const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
          setTodo(response.data);
          (response.data);
        }  catch (e){
        alert(e);
        }
      }

      useEffect(() => {
        fetchTodo();
      }, []);

    return(
        <div>
            <button onClick={() => navigate("/todos")} className="w-50px h-50px">BACK</button>
            
            <h1>
            {todo?.id}
            {todo?.title}
            </h1>
        </div>
    )
}

export default TodoItemPage;