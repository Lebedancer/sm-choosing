export const getDashboardPlatformComponent = () => {
    const isMobile = true;

    return isMobile ? import('./Dashboard.web/lazy') : import('./Dashboard.mobile/lazy')
}