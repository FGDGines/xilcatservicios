import { Moment } from "moment";
import { StateCreator } from "zustand";


export type TAccountEvent = {
    start: Moment,
    end: Moment,
    title: string,
    amount: string
    id?: number 
}

export type TJournalEvent = Omit<TAccountEvent, 'amount'> & { description: string }

type TEvents = {
    // state: boolean,
    account: TAccountEvent[] ,
    journal: TJournalEvent[]
    // id?: number
}

export type EventState = {
    event: TEvents,
    addAccountEvent: (event: TAccountEvent) => void
    addJournalEvent: (event: TJournalEvent) => void
    clearAccounts: () => void
    clearJournal: () => void
    deleteJournalById: (id: number) => void
    deleteAccountById: (id: number) => void
    deleteJournalByParams: (title: string, description: string) => void
}

export const eventSlice: StateCreator<EventState>  = ((set,) => ({
    event: { account: [], journal: []},
    addAccountEvent: (event) => set((state) => ({ event:  ({ ...state.event, account: state.event.account.concat(event) }) })),
    addJournalEvent: (event) => set((state) => ({ event:  ({ ...state.event, journal: state.event.journal.concat(event) }) })),
    clearAccounts: () => set((state) => ({ event: { account: [], journal: state.event.journal }})),
    clearJournal: () => set((state) => ({ event: { account: state.event.account, journal: [] }})),
    deleteAccountById: (id) => set((state) => {
        const accounts = state.event.account
        const filteredAccounts = accounts.filter(item => item.id !== id)

        return ({ event: { account: filteredAccounts, journal: state.event.journal}})
    }),
    deleteJournalById: (id) => set((state) => {
        const journals = state.event.journal
        const filteredJournal = journals.filter(item => item.id !== id)

        return ({ event: { account: state.event.account, journal: filteredJournal}})
    }),
    deleteJournalByParams(title, description) {
        set((state) => {
            const journals = state.event.journal
            const filteredJournal = journals.filter(item => item.title !== title && item.description !== description)

            return ({ event: { account: state.event.account, journal: filteredJournal}})
        })
    },
}))