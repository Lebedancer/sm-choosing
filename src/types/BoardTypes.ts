export type BoardData = {
    boardName: string
    boardId: number
}

export type UserRole = 'admin' | 'participant' | 'guest';

export type BoardAccessRules = {
    userRole: UserRole
}