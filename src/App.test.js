import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import { rootReducer } from "./index";
import { createStore } from "redux";
describe("Map component", () => {
  it("it should render without errors", () => {
    const component = mount(
      <Provider store={createStore(rootReducer)}>
        <App />
      </Provider>
    );
    const wrapper = component.find(".app-conainer");
    expect(wrapper.length).toBe(1);
  });
});
