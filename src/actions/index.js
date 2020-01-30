import { META_DATA } from "./../actionTypes";

export const metaData = (type, content) => ({
  type: META_DATA,
  payload: {
    type,
    content
  }
});
