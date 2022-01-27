export const successData = "any data";
export const successFunction = async () => {
  return successData;
};

export const errorMessage = "error msg";
export const errorFunction = async () => {
  throw new Error(errorMessage);
};
