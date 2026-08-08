import { createContext, useCallback, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
const TodoContext = createContext(null);
export function TodoProvider({ children }) { const [todos, setTodos] = useLocalStorage('todo-react-avancado', []); const add = useCallback(text => setTodos(value => [...value, { id: crypto.randomUUID(), text, done: false }]), [setTodos]); const toggle = useCallback(id => setTodos(value => value.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)), [setTodos]); const remove = useCallback(id => setTodos(value => value.filter(todo => todo.id !== id)), [setTodos]); return <TodoContext.Provider value={{ todos, add, toggle, remove }}>{children}</TodoContext.Provider>; }
export function useTodos() { return useContext(TodoContext); }
