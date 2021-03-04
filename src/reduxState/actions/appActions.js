export const ADD = 'ADD';
export const FETCHDATA = 'FETCHDATA';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

export const addMeal = ({dayName,}) => ({
    type: ADD,
    payload: {
        dayName,
        dayId: Math.floor(Math.random() * 2137),
    }
})