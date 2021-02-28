const INTITIAL_STATE = {
    transaction: [
        { id: 1, title: 'lunch', price: -150 },
    ],
    user: [],
    admin: [],
    company: []
}


export default (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case "USERDATA":
            return ({
                ...state,
                user: action.data
            })
        case "ADMIN":
            return ({
                ...state,
                admin: action.data
            })
        case "COMPANY":
            return ({
                ...state,
                company: action.data
            })
        case "USEROUT":
            return ({
                ...state,
                user: [],
                company: [],
                admin: []
            })
    }
    return state;
}