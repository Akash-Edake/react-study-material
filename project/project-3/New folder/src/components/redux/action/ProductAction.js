import { ActionType } from "../containts/ActionType";

export const SetProduct = (products) => {
  return {
    type: ActionType.SET_PRODUCT,
    payload: products,
  };
};

export const SELECTED_PRODUCT = (product) => {
    return {
      type: ActionType.SELECTED_PRODUCT,
      payload: product,
    };
  };