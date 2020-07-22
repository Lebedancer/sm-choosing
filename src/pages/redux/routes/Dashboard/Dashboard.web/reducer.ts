export default function dashboard(state = {}, action: any) {
    switch (action.type) {
        case 'DASHBOARD_LOADING':
            return state = {...state, loading: true};
        case 'DASHBOARD_LOADED':
            return state = {...state,  data: {list: action.data.list}, loading: false}
        default:
            return state
    }
}
