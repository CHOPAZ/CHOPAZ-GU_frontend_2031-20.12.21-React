import { createSlice } from "@reduxjs/toolkit";

const chatsPlace = [
  {   
    id:"Pavel",
    messages:[
        {
            author:'Pavel',
            text:'Hello',
            date: new Date().toLocaleTimeString()
        },
        {
            author:'Bot',
            text:'Hello to you too',
            date: new Date().toLocaleTimeString()
        },
    ]
  },
  {   
    id:"Olga",
    messages:[
      {
        author:'Olga',
        text:'Hello',
        date: new Date().toLocaleTimeString()
    },
    {
        author:'Bot',
        text:'Hello to you too',
        date: new Date().toLocaleTimeString()
    }
    ]
  },
]

const chatSlice = createSlice({
  name:'chats',
  chatsPlace,
  reducers: {
    addChat: (state) => {
      return [...state, chatsPlace[0]]
    },
    deleteChat: (state, id) => {
      return [...state.slice(0, id), ...state.slice(id + 1)]
    }
  }
})

export const { addChat, deleteChat} = chatSlice.actions
export const chatsReducer = chatSlice.reducer