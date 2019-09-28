export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
} 

export const removeUser = (id) => {
    return {
        type: 'REMOVE_USER',
        payload: id
    }
} 

export const editUser = (id,name) => {
    return {
        type: 'EDIT_USER',
        payload: {id, name}
    }
} 