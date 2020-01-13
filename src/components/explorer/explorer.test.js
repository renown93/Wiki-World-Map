import React from "react";
import { mount } from "enzyme";
import Explorer from "./index";
import { Provider } from "react-redux";
import { rootReducer } from "../../index";
import { createStore } from "redux";
import { getElementByTestId } from "../../utils/testUtils";
describe("Map component", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Provider store={createStore(rootReducer)}>
        <Explorer />
      </Provider>
    );
  });

  it("it should render without errors", () => {
    const wrapper = getElementByTestId(component, "explorer-container");
    expect(wrapper.length).toBe(1);
  });
});
