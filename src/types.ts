export interface ITodo {
	title: string;
	timestamp: string;
	completed: boolean;
}

export type TAddTodo = (todo: ITodo) => void
export type TMarkAndDelete = (timestamp: string) => void
export type TSetTodo = (timestamp: string | null) => void
export type TChangeTodoText = (newTodoText: string, timestamp: string) => void
