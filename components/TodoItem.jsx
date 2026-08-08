import { memo } from 'react';
export default memo(function TodoItem({ todo, toggle, remove }) { return <li className={todo.done ? 'done' : ''}><button className="check" onClick={() => toggle(todo.id)} aria-label="Concluir">{todo.done ? '✓' : '○'}</button><span>{todo.text}</span><button className="delete" onClick={() => remove(todo.id)} aria-label="Remover">×</button></li>; });
