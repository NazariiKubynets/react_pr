import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Hi how are you?', likesCount: '10' },
            { id: 2, message: 'It\'s my first post?', likesCount: '15' }],
         newPostText: ""
      },
      dialogsPage: {
         messages: {
            otherMessages: [
               { id: 1, message: 'Hi' },
               { id: 2, message: 'How are you?' },],
            myMessages: [
               { id: 1, message: 'Hi' },
               { id: 2, message: 'I am fine' },
               { id: 3, message: 'And you?' },],
            newMessageText: ""
         },
         dialogs: [
            { id: 1, name: 'Dima', img: "https://www.meme-arsenal.com/memes/9e07dcca58d57018f4a2f0e7e9d3d543.jpg" },
            { id: 2, name: 'Andrey', img: "https://klike.net/uploads/posts/2021-11/1637823375_1.jpg" },
            { id: 3, name: 'Nazar', img: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg" },
            { id: 4, name: 'Sveta', img: "https://hypeava.ru/uploads/posts/2020-09/1600955812_1.jpg" },
            { id: 5, name: 'Sasha', img: "https://i.pinimg.com/564x/2e/3d/6e/2e3d6e6c801ce424de1e6d519e092ee8.jpg" },
            { id: 6, name: 'Viktor', img: "https://klike.net/uploads/posts/2019-03/1551511825_12.jpg" }]
      },
      navBarPage: {
         friends: [
            { id: 1, name: 'Dima', img: "https://www.meme-arsenal.com/memes/9e07dcca58d57018f4a2f0e7e9d3d543.jpg" },
            { id: 2, name: 'Andrey', img: "https://klike.net/uploads/posts/2021-11/1637823375_1.jpg" },
            { id: 3, name: 'Nazar', img: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg" }
         ]
      }

   },
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   _callSubscriber() { },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage.messages = dialogsReducer(this._state.dialogsPage.messages, action);
      this._state.navBarPage = sidebarReducer(this._state.navBarPage, action);

      this._callSubscriber(this._state);

   }

}

export default store;
window.store = store;

