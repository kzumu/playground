export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
})

export const resetTask = () => ({
    type: 'RESET_TASK',
})

export const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task
    }
})