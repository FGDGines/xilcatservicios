import { StateCreator } from 'zustand';

type TToast = {
    state: boolean,
    type: string,
    id?: number
}

export type ToastState = {
    toast: TToast
    // setModal: (data: TModal) => void
    // closeModal: () => void
}

export const toastSlice: StateCreator<ToastState> = ((set) => ({
    toast: { state: false, type: '', id: 0}
}))