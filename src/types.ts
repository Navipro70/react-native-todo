export interface ITodo {
	title: string;
	timestamp: string;
	completed: boolean;
}

export type TAddTodo = (todo: ITodo) => void
export type TMarkAndDelete = (timestamp: string) => void
