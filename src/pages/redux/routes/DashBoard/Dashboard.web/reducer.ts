const defaultState: any = {
    loading: true
}
export default function dashboard(state = defaultState, action: any) {
    switch (action.type) {
        case 'DASHBOARD_LOADING':
            debugger
            return state = {...state, loading: true};
        case 'DASHBOARD_LOADED':
            debugger
            return state = {...state,  data: {list: action.data.list}, loading: false}
        default:
            return state
    }
}
