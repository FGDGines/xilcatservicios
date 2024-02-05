import { Moment } from "moment"

export type TJournal = {
    title: string
    description: string
    start: Moment
    end: Moment
    id?: number
    auth: number
}