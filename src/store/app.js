import { atom } from "recoil";

const initialState = {
  sideNavOpen: true,
};

export const appState = atom({
  key: "appState",
  default: initialState,
});
