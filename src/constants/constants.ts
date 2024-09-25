import logo from "/logo.png";
import trash from "/trash.png";
import greenCheck from "/greenCheck.png";
import redCross from "/redCross.png";
import redCross2 from "/redCross.png";
// import redCross3 from "/redCross.png";

// export type TImgKey = "logo" | "trash" | "greenCheck" | "redCross" | "redCross2";

export const images /* : Record<TImgKey, string> */ = {
  logo,
  trash,
  greenCheck,
  redCross,
  redCross2,
  // redCross3
};

export type TImgSmartKeys = keyof typeof images;

export const images2: Record<TImgSmartKeys, string> = {
  logo,
  trash,
  greenCheck,
  redCross,
  redCross2,
};

export const images3: Record<TImgSmartKeys, string> = {
  logo,
  trash,
  greenCheck,
  redCross,
  redCross2,
};

export const APP_NAME = "Tensai Todo App"; // string
