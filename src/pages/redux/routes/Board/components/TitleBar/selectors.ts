import { createSelector } from 'reselect';
import status from '../../../../../../enums/StatusEnum';

export const isLoading = createSelector(
    (state: any) => state.boardInfo,
    (state: any) => state.accessRules,
    (boardInfo, accessRules) => {
        return boardInfo.status === status.Loading || accessRules.status === status.Loading
    }
);

export const canShowShareButton = createSelector(
    (state: any) => state.accessRules,
    (accessRules) => {
        return accessRules.canShowShareButton
    }
);

