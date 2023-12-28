import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

import { modalSlice, ModalState} from './modalStore';
import { eventSlice, EventState } from './eventsStore'

type AppStore = ModalState & EventState

export const useStore = create<AppStore>() (
    devtools((...a) => ({
        ...modalSlice(...a),
        ...eventSlice(...a)
    }))
)


