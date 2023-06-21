import { ToastMessageModel } from "models/toast-message.model";

export interface StateGlobalContext {
  isLoading: boolean;
  toastMessage: ToastMessageModel | null;
}
export interface ActionGlobalContext {
  type: string;
  data:
    | StateGlobalContext["isLoading"]
    | StateGlobalContext["toastMessage"]
    | any;
}
