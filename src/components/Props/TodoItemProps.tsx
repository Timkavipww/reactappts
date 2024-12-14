import { ITodo } from '../../types/types';

export interface TodoItemProps {
    todo: ITodo;
    onClick: (todo: ITodo) => void;
} 