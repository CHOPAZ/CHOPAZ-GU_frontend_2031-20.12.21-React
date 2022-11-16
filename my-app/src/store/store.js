import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from './profile/slices'
import { chatsReducer } from './chats/slices'

export const store = configureStore({
  reducer:{
    toggle: profileReducer,
    chats: chatsReducer
  }
})