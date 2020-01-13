import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import { rootReducer } from "./index";
import { createStore } from "redux";
import { getElementByTestId } from "./utils/testUtils";
describe("Map component", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Provider store={createStore(rootReducer)}>
        <App />
      </Provider>
    );
  });

  it("it should render without errors", () => {
    const wrapper = getElementByTestId(component, "app-container");
    expect(wrapper.length).toBe(1);
  });

  it("should have a map component", () => {
    const wrapper = getElementByTestId(component, "map");
    expect(wrapper.length).toBe(1);
  });

  it("should have an explorer component", () => {
    const wrapper = getElementByTestId(component, "explorer");
    expect(wrapper.length).toBe(1);
  });
});
