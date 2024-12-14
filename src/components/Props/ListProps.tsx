export interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}