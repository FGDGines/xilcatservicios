import { StateCreator } from "zustand";

type TModal = {
    state: boolean,
    type: string,
    id?: number
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