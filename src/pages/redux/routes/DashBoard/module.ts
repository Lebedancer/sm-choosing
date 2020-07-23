import { store } from '../../store'

export const getDashboardPlatformComponent = () => {
    const { isMobile } = store.getState().platform;

    return isMobile ? import('./Dashboard.mobile/lazy') : import('./Dashboard.web/lazy')
}