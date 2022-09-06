import { DATA_SUCCESS } from "../actions/dataAction";

const initialState = {
  contnet: "1",
  // content: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_SUCCESS:
      return {
        content: action.payload,
        // content: [...state.content, action.payload]
      };
    default:
      return { ...state };
  }
};

export default dataReducer;
