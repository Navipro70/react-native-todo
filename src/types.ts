interface ITodo {
    title: string,
    timestamp: string
}

type TAddTodo = (todo: ITodo) => void