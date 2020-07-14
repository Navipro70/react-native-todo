export interface ITodo {
	title: string;
	timestamp: string;
}

export type TAddTodo = (todo: ITodo) => void
