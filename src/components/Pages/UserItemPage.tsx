import { FC, useEffect, useState } from "react";
import { IUser } from "../../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UserItemPageParams } from "../Params/UserItemPageParams";

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const params =  useParams<UserItemPageParams>();
    const history = useNavigate()
    async function fetchUser() {

      try{
          const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
          setUser(response.data);
        }  catch (e){
        alert(e);
        }
      }

      useEffect(() => {
        fetchUser();
      }, []);

    return(
        <div>
            <button onClick={() => history("/users")} className="w-50px h-50px">BACK</button>
            <h1>Страница пользоватеья {user?.name}</h1>
            <div>
                {user?.email}
                {user?.address.city}
                {user?.address.street}
            </div>
            <div>
                {user?.address.zipcode}
            </div>
        </div>
    )
}

export default UserItemPage;