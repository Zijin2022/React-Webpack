import React from "react";
import App from "./src/App"
import { StyledEngineProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import rootReducer from './src/redux/reducer/rootReducer'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer)

createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <App />
        </Provider>
      </StyledEngineProvider>
    </React.StrictMode>
);

// reactDom.createRoot(document.querySelector("#root")).render(
//     <React.StrictMode>
//       <StyledEngineProvider injectFirst>
//         <App />
//       </StyledEngineProvider>
//     </React.StrictMode>
// );

// reactDom.render(<App />, document.getElementById("root"));