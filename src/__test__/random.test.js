/* eslint-disable no-undef */
// import "jsdom-global/register";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
// import { configure } from "enzyme";
import { ReactWrapper, mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
// import FormBox from "./parts/form-box";
// import Login from "./index";
import Learn from "components/random/random";
// import { FormBox } from "components/login/parts/form-box";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
// import { addInputs, subtractInputs } from '../src/js/actions/calculatorActions'
import { createStore } from "redux";
import Login from 'components/login/index';
import Buttons from 'components/layouts/buttons/index';
import Homepage from 'components/homepage/index';
import Button from 'components/layouts/buttons/index';
// import calculatorReducers from '../src/js/reducers/calculatorReducers'
import { render, unmountComponentAtNode } from "react-dom";
import { Stats } from "fs";
import { MemoryRouter, StaticRouter } from "react-router-dom";
import { Hooks } from "providers";
// configure({ adapter: new Adapter() });
// jest.mock('react-router-dom', () => ({
//   useLocation: jest.fn().mockReturnValue({
//     pathname: '/login',
//     search: '',
//     hash: '',
//     state: null,
//     key: '5nvxpbdafa',
//   }),
// }));

//*******************************************************************************************************
describe(">>>RANDOM", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store: any;
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    store = mockStore(initialState);
        wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <Login />
        </MemoryRouter>
      </Provider>
    );
  });

  it("check input", () => {
    // const mockCallBack = jest.fn();
    expect(wrapper.find('.input-fields__input-boxx').length).toEqual(1);
    // wrapper.find(".input-fields__input-boxx").simulate("click");
    // expect(wrapper.find(".input-fields__input-boxx").length).toEqual(1);
  });
  test("check submit input", () => {
    const usernameInput = wrapper.find(".input-fields__input-boxx");
    // usernameInput.instance().value = "correctUsername";
    usernameInput.simulate('change',{
      target: {
          id: 'testing',
        value: "anjir",
      },
    });
    usernameInput.props().value = 'anjir'
    usernameInput.update()
    wrapper.update()
    // usernameInput.simulate("change");
    expect(usernameInput.props().value).toEqual('anjir');
  });
  test("button click", () => {
    const mockCallBack = jest.fn();
        wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/login"]}>
              <Buttons onClick={mockCallBack}/>
            </MemoryRouter>
          </Provider>
        );

    wrapper.find(".buttom-comp").props().onClick()
    wrapper.find(".buttom-comp").props().onClick()
    expect(mockCallBack.mock.calls.length).toEqual(2);
  });
  test("button clicks", () => {
    const mockCallBack = jest.fn();
        wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/login"]}>
              <Button onClick={mockCallBack} />
            </MemoryRouter>
          </Provider>
        );

    wrapper.find(Button).props().onClick()
    wrapper.find(Button).props().onClick();
    console.log(wrapper.find(Button).props('value'))
    expect(mockCallBack.mock.calls.length).toEqual(2);
  });
  test("render test", () => {
    const setSubmitted = jest.fn()
    const setCriteria = jest.fn()
        wrapper = mount(
          <Provider store={store}>
            <Hooks.Provider value={{ setSubmitted, setCriteria }}>
              <MemoryRouter initialEntries={["/"]}>
                <Homepage />
              </MemoryRouter>
            </Hooks.Provider>
          </Provider>
        );
     expect(wrapper.contains(<span className="sr-only">Loading...</span>)).toBe(
       true
     );
  });
});
