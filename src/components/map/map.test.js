import React from "react";
import { shallow, mount } from "enzyme";
import Map from "./index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { store } from "./index";

describe("Map component", () => {
  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <Map />
      </Provider>
    );
  it("should render properly", () => {
    const wrapper = getWrapper();
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
