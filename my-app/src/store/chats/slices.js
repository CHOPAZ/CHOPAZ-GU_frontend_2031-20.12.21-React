import { createSlice } from "@reduxjs/toolkit";

 export const initialState = [
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
  initialState,
  reducers: {
    addChat: (state) => {
      return [...state, initialState[0]]
    },
    deleteChat: (state) => {
      return [...state.filter((e, id) =>  id < state.length - 1)]
    }
  }
})

export const { addChat, deleteChat} = chatSlice.actions
export const chatsReducer = chatSlice.reducer