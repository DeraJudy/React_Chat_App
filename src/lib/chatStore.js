import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand';
import { db } from './firebase';

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isRecieverBlocked: false,
  changeChat: (chatId, user)=>{
    const currentUser = useUserStore.getState().currentUser

    // CHECK IF CURRENT USER IS BLOCKED
    



    // CHECK IF CURRENT USER IS BLOCKED
  }
}))