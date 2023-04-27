import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StoreType} from "./redux/Redux-store";

const StoreContext = React.createContext({}as StoreType)
export let Provider = () =>{

    ReactDOM.render(
        <StoreContext.Provider value={store}>
         <App
             //store={store}
              // dispatch={store.dispatch.bind(store)}
           />
        </StoreContext.Provider>,
        document.getElementById('root')

    );
}
// rerenderEntireTree()
// store.subscribe(() => rerenderEntireTree())
// ReactDom.render(
//     <StoreContext.Provider value={store}>
//         <NextApp />
//     </StoreContext.Provider>,
//     document.getElementById('app')
// );
// });
