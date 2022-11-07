import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

   let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img} key={d.id}/>);
   let messagesElementsI = props.myMessages.map(m => <Message message={m.message} key={m.id}/>);
   let messagesElements = props.otherMessages.map(m => <Message message={m.message} key={m.id}/>);

   let newMessageElement = React.createRef();

   let onAddMessage = () => { 
     props.addMessage();
   }

   let onMessageChange = () =>{
      let text = newMessageElement.current.value;
      props.updateNewMessageText(text);
   }

   return (
      <div className={c.dialogs}>
         <h2>DIALOGS</h2>
         <div className={c.dialogs__dialogs}>
            <ul className={c.dialogs__items}>
               {dialogsElements}
            </ul>
            <div className={c.dialog__messages}>
               {messagesElements}
               <div className={c.dialog__messagesI}>{messagesElementsI}</div>
               <div>
                  <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
                  <div className={c.myMessage__btn}><button onClick={onAddMessage}>Add message</button></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;
