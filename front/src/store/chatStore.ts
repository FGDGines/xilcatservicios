import { StateCreator } from "zustand";



export type ChatState = {
    isChatOpen: boolean,
    handleChatOpen: () => void,
    handleChatClose: () => void
}

export const chatSlice: StateCreator<ChatState>  = ((set) => ({
    isChatOpen: false,
    handleChatOpen: () => set({ isChatOpen: true }),
    handleChatClose: () => set({ isChatOpen: false })
}))