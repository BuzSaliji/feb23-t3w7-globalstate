/*
let instructions = {
    type: 'login',
    username: 'somecoolusername',
    password: 'somecoolpassword'
}

*/




export const userReducer = (previousState, instructions) => {
    let newState = {...previousState};

    switch(instructions.type){
        case "login":
            newState = "pretend a fetch request finished and returned a JWT";
            return newState;
        case "logout":
            //newState = '';
            return '';
        default:
            return newState,
    }

    return newState;
}

