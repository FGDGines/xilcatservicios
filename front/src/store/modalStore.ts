import { StateCreator } from "zustand";

export type TEvents = 'event' 
| 'cookie' | 'addclient' | 'addProcedure' | 'closeProcedure' | 'description' | 'auth_user' | 'blog'
| 'pending'

type TModal = {
    state: boolean,
    type: TEvents | '' ,
    id?: number,
    params?: any
}

export type ModalState = {
    modal: TModal
    setModal: (data: Omit<TModal, 'state'>) => void
    closeModal: () => void
}

export const modalSlice: StateCreator<ModalState>  = ((set) => ({
    modal: { state: false, type: ''}, 
    setModal: (modal) => set({ modal: {...modal, state: true } }),
    closeModal: () => set({ modal : { state: false, type: ''}})
}))