import { Moment } from "moment";
import { StateCreator } from "zustand";


type TEvent = {
    start: Moment,
    end: Moment,
    title: string
}

type TEvents = {
    // state: boolean,
    account: TEvent[] ,
    journal: TEvent[]
    // id?: number
}

export type EventState = {
    event: TEvents,
    addAccountEvent: (event: TEvent) => void
    addJournalEvent: (event: TEvent) => void
    closeEvent: () => void
}

export const eventSlice: StateCreator<EventState>  = ((set,) => ({
    event: { account: [], journal: []},
    addAccountEvent: (event) => set((state) => ({ event:  ({ ...state.event, account: state.event.account.concat(event) }) })),
    addJournalEvent: (event) => set((state) => ({ event:  ({ ...state.event, journal: state.event.journal.concat(event) }) })),
    closeEvent: () => set({ event: { account: [], journal: []}})
}))