import { StateCreator } from "zustand";

type TEvents = 'event' | 'cookie' | 'addclient' | ''

type TModal = {
    state: boolean,
    type: TEvents ,
    id?: number,
    params?: any
}

export type ModalState = {
    modal: TModal
    setModal: (data: TModal) => void
    closeModal: () => void
}

export const modalSlice: StateCreator<ModalState>  = ((set) => ({
    modal: { state: false, type: ''}, 
    setModal: (modal) => set({ modal }),
    closeModal: () => ({ modal : { state: false, type: ''}})
}))