export function push(url: string) {
    window.location.href = url;
}

export function back() {
    window.history.back();
}

export function reload() {
    window.location.reload();
}

export default { push, back, reload};