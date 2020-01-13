export const getElementByTestId = (component, testId) => {
  return component.find(`[test-id='${testId}']`);
};
