
import firstScreen from "./components/firstScreen/FirstScreen.jsx";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Navbar from "./components/navbar/Navbar";
import { NavLink } from "react-router-dom";

configure({ adapter: new Adapter() });

// describe("Landing page", () => {
//   let land;

//   beforeEach(() => {
//     land = shallow(<firstScreen />);
//   });

//   it('should render a button', () => {
//     expect(land.find("button")
//       .text()).toEqual("INGRESAR");
//   });
// });


describe("<Nav />", () => {
  let nav;

  beforeEach(() => {
    nav = shallow(<Navbar />);
  });

  it('Debería tener un Link con el texto "Home" que cambie la ruta hacia "/home"', () => {
    expect(nav.find(NavLink).at(0).prop("to")).toEqual("/home");
    expect(nav.find(NavLink).at(0).text()).toEqual("HOME");
  });

  it('Debería tener un segundo Link, con texto "CREAR JUEGO" y que cambie la ruta hacia "/createGame"', () => {
    expect(nav.find(NavLink).at(1).prop("to")).toEqual("/createGame");
    expect(nav.find(NavLink).at(1).text()).toEqual("CREAR JUEGO");
  });
});