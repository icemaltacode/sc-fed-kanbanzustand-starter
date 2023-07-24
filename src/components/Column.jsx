import Task from './Task';
import './Column.css';

export default function Column({ state }) {
    return <div className="column">
        <p>{state}</p>
        <Task title="Hello" />
    </div>
}