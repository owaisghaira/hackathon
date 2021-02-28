const INTITIAL_STATE = {
    jobs: [],
    profiles: [],
    company: [],
}


export default (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case 'JOBS':
            return ({
                ...state,
                jobs: action.data
            })
        case 'PROFILE':
            return ({
                ...state,
                profiles: action.data
            })
        case 'COMPANY':
            return ({
                ...state,
                company: action.data
            })
    }
    return state;
}