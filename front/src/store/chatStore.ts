import { StateCreator } from "zustand";



export type ChatState = {
    isChatOpen: boolean,
    hasChatLoaded: boolean
    handleChatOpen: () => void,
    handleChatClose: () => void
    setChatLoaded: () => void
}

export const chatSlice: StateCreator<ChatState>  = ((set) => ({
    hasChatLoaded: false,
    isChatOpen: false,
    handleChatOpen: () => set({ isChatOpen: true }),
    handleChatClose: () => set({ isChatOpen: false }),
    setChatLoaded: () => set({ hasChatLoaded: true })
}))