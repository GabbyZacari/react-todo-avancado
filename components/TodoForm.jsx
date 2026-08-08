import { useState } from 'react';
import { useTodos } from '../context/TodoContext';
export default function TodoForm() { const [text, setText] = useState(''); const { add } = useTodos(); function submit(event) { event.preventDefault(); if (text.trim()) add(text.trim()); setText(''); } return <form onSubmit={submit}><input value={text} onChange={event => setText(event.target.value)} placeholder="O que precisa ser feito?" /><button>Adicionar</button></form>; }
