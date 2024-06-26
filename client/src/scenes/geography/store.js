import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import rootReducer from "./Reducer/index";

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;




// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./Reducer/index";

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middleware)
//   // compose(
//   //   applyMiddleware(...middleware),
//   //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   // )
// );
// export default store;
