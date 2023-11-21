import state from './redux/state';
import { RenderEntireTree } from './render';

RenderEntireTree(state)

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <BrowserRouter>
//         <App state={state} sidebarFriends={sidebarFriends()} addPost={addPost}/>
//     </BrowserRouter>
// );

