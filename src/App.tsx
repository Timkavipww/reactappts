import "./index.css"
import UsersPage from "./components/Pages/UsersPage";
import TodosPage from "./components/Pages/TodosPage";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import UserItemPage from "./components/Pages/UserItemPage";
import TodoItemPage from "./components/Pages/TodosItemPage";
const App  = () => {

  return (
    <BrowserRouter>
    <nav className="border-b-8 bg-slate-400 flex flex-row ">
    <Link style={{padding: "4px"}} to="/">Главный</Link>
    <Link style={{padding: "4px"}} to="/users">Пользователи</Link>
    <Link style={{padding: "4px"}} to="/todos">Список дел</Link>
    </nav>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/users" element={<UsersPage/>}/>
    <Route path="/user/:id" element={<UserItemPage/>}/>
    <Route path="/todos" element={<TodosPage/>}/>
    <Route path="/todo/:id" element={<TodoItemPage/>}/>
    <Route path="*" element={<div>NotFound</div>}/>
</Routes>
    </BrowserRouter>
  );
};

export default App;
