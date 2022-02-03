/**
 * In this file we can create functions to mock results given by the backend
 */

// Mock of a successful getting of strollerTypes
export const getStrollerTypesSuccessMock = (strollerTypes = []) => {
  return JSON.stringify({ success: true, result: strollerTypes });
};
