import React from 'react';

export default function TodoApp({ task, tasks, inputTask, addTask, resetTask }) {
    return (
        <div>
            <input type='text' onChange={(e) => inputTask(e.target.value)} />
            <input type='button' value='add' onClick={() => addTask(task)} />
            <button onClick={() => resetTask()} >Reset</button>
            <ul>
                {
                    tasks.map(function (item, i) {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}