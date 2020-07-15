import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Modal from "./components/Modal";
import Popup from "./components/Popup";

export default class App {
  constructor($target) {
    this.$target = $target;

    this.$header = new Header($target);
    this.$dashboard = new Dashboard($target);
    this.$modal = new Modal($target);
    this.$popup = new Popup($target);
  }
}