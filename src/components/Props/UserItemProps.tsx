import { IUser } from "../../types/types";

export interface UserItemProps {
    user: IUser;
    onClick: (user:IUser) => void;
  }