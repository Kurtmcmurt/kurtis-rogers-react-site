import { META_DATA } from "./../actionTypes";

const initialState = {
  metaData: []
};

export const getMeta = (state = initialState, action) => {
  switch (action.type) {
    case META_DATA: {
      const { type, content } = action.payload;
      return {
        ...state,
        metaData: 
          [...state.metaData,
            {
              'type': type,
              'content': content
            }
          ],
      };
    }
    default:
      return state;
  }
}
