import {spy} from "mobx";

const reportsPool = [];

export function initMobxSpy() {
    spy(function (spyReport) {
        if (spyReport.type) {
            reportsPool.push(spyReport)
            console.log(spyReport.type + ': rawSpyData: ', spyReport);
        }
    });
}

export function sendEvent(event: any) {
    console.log(event + ': rawSpyData: ' );
}