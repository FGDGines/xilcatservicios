import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

import { modalSlice, ModalState} from './modalStore';
import { eventSlice, EventState } from './eventsStore';
import { chatSlice, ChatState } from './chatStore';

export type AppStore = ModalState & EventState & ChatState

export const useAppStore = create<AppStore>() (
    devtools((...a) => ({
        ...modalSlice(...a),
        ...eventSlice(...a),
        ...chatSlice(...a),
    }))
)


