const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
   otherMessages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },],
   myMessages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'I am fine' },
      { id: 3, message: 'And you?' },],
   newMessageText: "",
   dialogs: [
      { id: 1, name: 'Dima', img: "https://www.meme-arsenal.com/memes/9e07dcca58d57018f4a2f0e7e9d3d543.jpg" },
      { id: 2, name: 'Andrey', img: "https://klike.net/uploads/posts/2021-11/1637823375_1.jpg" },
      { id: 3, name: 'Nazar', img: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg" },
      { id: 4, name: 'Sveta', img: "https://hypeava.ru/uploads/posts/2020-09/1600955812_1.jpg" },
      { id: 5, name: 'Sasha', img: "https://i.pinimg.com/564x/2e/3d/6e/2e3d6e6c801ce424de1e6d519e092ee8.jpg" },
      { id: 6, name: 'Viktor', img: "https://klike.net/uploads/posts/2019-03/1551511825_12.jpg" }]
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE: {
         let newMessage = {
            id: 4,
            message: state.newMessageText
         };
         return {
            ...state,
            myMessages: [...state.myMessages, newMessage],
            newMessageText: ""
         }
      }
      case UPDATE_NEW_MESSAGE_TEXT: {
         return {
            ...state,
            newMessageText: action.newText
         }
      }
      default:
         return state
   }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;