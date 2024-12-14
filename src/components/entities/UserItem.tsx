import { FC } from "react";
import { UserItemProps } from "../Props/UserItemProps";


const UserItem: FC<UserItemProps> = ({ user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{ padding: 15, border: "1px solid gray", margin: "20px" }}>
      {user.id}. {user.name} Проживает в городе {user.address.city} {user.email}{" "}
      {user.address.street} {user.address.zipcode}
    </div>
    );
};

export default UserItem;