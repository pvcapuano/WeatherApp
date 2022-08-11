export const loadDataRequest = () => {
  return {
    type: "@temp/LOAD_DATA_REQUEST",
  };
};

export const loadDataRequest2 = () => {
  return {
    type: "@temp/LOAD_DATA_REQUEST2",
  };
};

export const loadDataRequest3 = () => {
  return {
    type: "@temp/LOAD_DATA_REQUEST3",
  };
};

export const loadDataSuccess = (data) => {
  return {
    type: "@temp/LOAD_DATA_SUCCESS",
    data,
  };
};

export const loadDataError = () => {
  return {
    type: "@temp/LOAD_DATA_ERROR",
  };
};
