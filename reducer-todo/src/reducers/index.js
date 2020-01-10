import { ADD_TODO, CHANGE_TODO_TASK, TOGGLE_TODO } from "./types";

export const initialState = {
    task: '',
    todos: [
    {
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
]
};

export function todoReducer (state, action){
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                task: '',
                todos: [
                ...state.todos,
                {
                    task: action.payload,
                    completed: false,
                    id: Date.now()
                }
                ]
            };
            case TOGGLE_TODO:
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        if (todo.id === action.payload){
                            return{
                                ...todo,
                                completed: !todo.completed
                            };
                        }
                        return todo;
                    })
                }
            case CHANGE_TODO_TASK:
                return {
                    ...state,
                    task: action.payload
                };
        default:    
            return state;
    }
};


