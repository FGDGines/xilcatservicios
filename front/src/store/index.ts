import { create } from 'zustand';

type TModal = {
    state: boolean,
    type: string,
    id?: number
}

type ModalState = {
    modal: TModal
    setModal: (data: TModal) => void
}

export const useStore = create<ModalState>((set) => ({
    modal: { state: false, type: ''}, 
    setModal: (modal) => set({ modal })
}))