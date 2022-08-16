const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

export const tempReducer = (state = initialState, action) => {

  switch (action.type) {
    case "@temp/LOAD_DATA_REQUEST":
      return {
        data: [...state.data],
        isLoading: true,
        error: false,
      };
    case "@temp/LOAD_DATA_REQUEST2":
      return {
        data: [...state.data],
        isLoading: true,
        error: false,
      };
    case "@temp/LOAD_DATA_REQUEST3":
      return {
        data: [...state.data],
        isLoading: true,
        error: false,
      };
    case "@temp/LOAD_DATA_SUCCESS":
      return {
        data: [...state.data, action.data],
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
