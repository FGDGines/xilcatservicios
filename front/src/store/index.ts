import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

import { modalSlice, ModalState} from './modalStore';
import { toastSlice, ToastState} from './toast-store';

type AppStore = ModalState & ToastState

export const useStore = create<AppStore>() (
    devtools((...a) => ({
        ...modalSlice(...a),
        ...toastSlice(...a)
    }))
)


