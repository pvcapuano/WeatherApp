const INITIAL_STATE = {
  data: {
    temp: "",
    temp_min: "",
    temp_max: "",
  },
  isLoading: false,
  error: false,
};

export const tempReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "@temp/LOAD_DATA_REQUEST":
      return {
        data: [],
        isLoading: true,
        error: false,
      };
    case "@temp/LOAD_DATA_REQUEST2":
      return {
        data: [],
        isLoading: true,
        error: false,
      };
    case "@temp/LOAD_DATA_REQUEST3":
      return {
        data: [],
        isLoading: true,
        error: false,
      };
    case "@temp/LOAD_DATA_SUCCESS":
      return {
        data: action.data,
        isLoading: false,
        error: false,
      };
    case "@temp/LOAD_DATA_ERROR":
      return {
        data: [],
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
