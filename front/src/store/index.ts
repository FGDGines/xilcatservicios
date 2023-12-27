import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

import { modalSlice, ModalState} from './modalStore';
import { toastSlice, ToastState} from './toast-store';
import { eventSlice, EventState } from './eventsStore'

type AppStore = ModalState & ToastState & EventState

export const useStore = create<AppStore>() (
    devtools((...a) => ({
        ...modalSlice(...a),
        ...toastSlice(...a),
        ...eventSlice(...a)
    }))
)


