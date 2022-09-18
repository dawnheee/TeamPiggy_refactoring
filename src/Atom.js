import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userAtom = atom({
  key: "userAtom",
  default: {
    userid: "",
  },
  effects_UNSTABLE: [persistAtom],
});
