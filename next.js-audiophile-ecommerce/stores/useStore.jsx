import {create} from "zustand";

const useStore = create((set) => ({
  cart: [],
  updateCart: (product) => set({cart: product}),
  removeAllProducts: () => set({cart: []}),
  isCartActive: false,
  changeCartStatus: (bool) => set({isCartActive: bool}),
  isResponsiveMenuActive: false,
  changeResponsiveMenuStatus: (bool) => set({isResponsiveMenuActive: bool}),
  isFormCorrect: false,
  setIsFormCorrect: (bool) => set({isFormCorrect: bool}),
  isCheckoutModalActive: false,
  setIsCheckoutModalActive: (bool) => set({isCheckoutModalActive: bool}),
}));

export default useStore;
