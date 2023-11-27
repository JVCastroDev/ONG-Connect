/* eslint-disable react/prop-types */
import logo from "../assets/logo.svg";
import close from "../assets/close-icon.svg";

const Window = (props) => {
  return (
    <section className="p-4 window radius">
      <img className="float-end" src={close} />
      <header className="d-flex flex-column justify-content-center align-items-center">
        <img src={logo} />
        <p className="text-center fs-2 text-white mt-3">{props.title}</p>
      </header>
      <span className="d-flex flex-column justify-content-center align-items-center">
        <input
          className="bg-light border-0 p-2 w-100 mt-4 radius-small shadow"
          type="text"
          placeholder="Nome Completo"
        />
        <button className="bg-light border-0 rounded-pill p-2 w-25 mt-5 fw-medium shadow" type="submit">
          CONSULTAR
        </button>
      </span>
    </section>
  );
};

export default Window;
