import { FC, useEffect, useState } from "react";
import List from "../Lists/List";
import axios from "axios";
import { IUser } from "../../types/types";
import UserItem from "../entities/UserItem";
import { useNavigate } from "react-router-dom";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();
    async function fetchUsers() {

      try{
          const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=5');
          setUsers(response.data);
        }  catch (e){
        alert(e);
        }
      }

      useEffect(() => {
        fetchUsers();
      }, []);
    return(
        <div>
            <List
            items={users}
            renderItem={(user: IUser) => <UserItem onClick={() => navigate(`/user/${user.id}`)} key={user.id} user={user} />}
          />
        </div>
    )
}
export default UsersPage;