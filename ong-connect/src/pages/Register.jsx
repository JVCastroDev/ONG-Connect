/* eslint-disable react/prop-types */
import logo from "../assets/logo.svg";
import close from "../assets/close-icon.svg";

const Register = (props) => {
  return (
    <section className="p-4 window radius">
      <img className="float-end" src={close} />
      <header className="d-flex flex-column justify-content-center align-items-center">
        <img src={logo} />
        <p className="text-center fs-2 text-white mt-3">{props.title}</p>
      </header>

      <div className="container my-4">
        <span className="d-flex justify-content-between">
          <input
            className="bg-light w-50 me-2"
            type="text"
            placeholder="Nome Completo"
          />
          <input
            className="bg-light w-25"
            type="date"
            placeholder="Data de Nascimento"
          />
          <input className="bg-light w-2 ms-2" type="text" placeholder="Sexo" />
        </span>
        <span className="d-flex justify-content-between">
          <input className="bg-light w-25" type="text" placeholder="CEP" />
          <input className="bg-light w-25" type="text" placeholder="Cidade" />
          <input className="bg-light w-25" type="text" placeholder="Estado" />
        </span>
        <span className="d-flex justify-content-between">
          <input className="bg-light w-50 me-2" type="text" placeholder="Endereço" />
          <input
            className="bg-light w-25"
            type="text"
            placeholder="Complemento"
          />
          <input className="bg-light w-25 ms-2" type="text" placeholder="Nº" />
        </span>
        <span className="d-flex justify-content-center align-items-center">
          <button
            className="bg-light border-0 rounded-pill p-2 w-25 mt-5 fw-medium shadow"
            type="submit"
          >
            REGISTRAR
          </button>
        </span>
      </div>
    </section>
  );
};

export default Register;
