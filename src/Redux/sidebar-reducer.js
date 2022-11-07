
let initialState = {
   friends: [
      { id: 1, name: 'Dima', img: "https://www.meme-arsenal.com/memes/9e07dcca58d57018f4a2f0e7e9d3d543.jpg" },
      { id: 2, name: 'Andrey', img: "https://klike.net/uploads/posts/2021-11/1637823375_1.jpg" },
      { id: 3, name: 'Nazar', img: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg" }
   ]
}

const sidebarReducer = (state = initialState, action) => {
   return state;
}

export default sidebarReducer;