import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "@PERSISTED",
  storage: localStorage,
});

const initialState = {
  sideNavOpen: true,
  selectedTeam: "HOME",
};

export const appState = atom({
  key: "@APP",
  effects_UNSTABLE: [persistAtom],
  default: initialState,
});
