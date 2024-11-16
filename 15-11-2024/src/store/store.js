import { createStore } from "redux";
import { ProductReducer } from "./reducers/ProductReducer";

export const store = createStore(ProductReducer);