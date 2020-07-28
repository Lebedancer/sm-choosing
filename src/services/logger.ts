import {observe, IValueDidChange} from 'mobx';
import boardStore, { BoardStore } from '../stores/boardStore';
import dashboardStore, { Dashboard, DashStatus } from '../stores/dashboardStore';

export function initBoardLogger() {
	observe(boardStore, 'loading', (change) => {
		if (change.type !== 'update') {
			return
		}
		let status = change.newValue ? 'BOARD_LOAD_START' : 'BOARD_LOAD_FINISH'
		
		performance.mark(status)

		if (status === 'BOARD_LOAD_FINISH') {
			// show tracer info
			const [ startMark, finishMark ] = performance.getEntriesByType('mark');
			if (startMark && finishMark) {
				const loadTime = finishMark.startTime - startMark.startTime
				console.info(`TRACER: BOARD_LOAD: ${loadTime}`)
			}

			// clean up marks
			performance.clearMarks()
		}
	})
}

export function logger(change: IValueDidChange<string>) {
	if (change.type !== 'update') {
		return
	}
	const status = change.newValue
	performance.mark(status)

	if (status === DashStatus.FINISH) {
		// show tracer info
		const [ startMark, finishMark ] = performance.getEntriesByType('mark');
		if (startMark && finishMark) {
			const loadTime = finishMark.startTime - startMark.startTime
			console.info(`TRACER: DASHBOARD_LOAD: ${loadTime}`)
		}

		// clean up marks
		performance.clearMarks()
	}
}

export function initDashboardLogger() {
	observe<Dashboard, 'status'>(dashboardStore, 'status', logger);
}
