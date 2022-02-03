export const asSlowResponse = (response) => {
  return () => new Promise((resolve) => setTimeout(() => resolve(response)));
};

/**
 * If you ever need to have multiple responses in a test you can use this function.
 *
 * The `urlResponseList` is an array of objects with 2 properties:
 * [
 *  {
 *    url: string,
 *    response: any,
 *  }
 * ]
 *
 * It returns the function you should give to the `fetch.mockResponse`
 */
export const asMultipleMockedResponses = (urlResponseList) => {
  return (req) => {
    const correctElement = urlResponseList.find((element) =>
      req.url.includes(element.url)
    );

    if (!correctElement) {
      throw Error(
        `Could not find any response in array (${JSON.stringify(
          urlResponseList,
          null,
          2
        )}) for url ${req.url}`
      );
    }

    return new Promise((resolve) => resolve(correctElement.response));
  };
};
