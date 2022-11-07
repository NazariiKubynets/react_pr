import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      myMessages: state.dialogsPage.myMessages,
      otherMessages: state.dialogsPage.otherMessages,
      newMessageText: state.dialogsPage.newMessageText
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(addMessageActionCreator());
      },
      updateNewMessageText: (text) => {
         let action = updateNewMessageTextActionCreator(text);
         dispatch(action);
      }
   }
}





const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
