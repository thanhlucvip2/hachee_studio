import { SET_LOADING, SET_TOAST_MESSAGE } from "./constants";
import { ActionGlobalContext, StateGlobalContext } from "./state.model";

const initialState: StateGlobalContext = {
  isLoading: true,
  toastMessage: null,
};

const globalStateReducer = (
  state: StateGlobalContext,
  action: ActionGlobalContext
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.data,
      };
    case SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.data,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initialState };
export default globalStateReducer;
