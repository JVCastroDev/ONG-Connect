import logoBlue from "../assets/logo-blue.svg";

function Login() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center outer-wrapper ">
        <section className="position-absolute top-50 start-50 translate-middle bg-white d-flex flex-column justify-content-evenly align-items-center container shadow-lg wrapper radius">
          <header className="d-flex flex-column justify-content-center align-items-center">
            <img src={logoBlue} />
            <p className="fw-semibold fs-3">LOG IN</p>
          </header>

          <form>
            <div className="mb-2">
              <span className="position-absolute mt-2 mx-2">
              <i className="bi bi-person icon-login"></i>
              </span>
              <input
                type="email"
                className="form-control border-0 border-bottom ps-4"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-2">
              <span className="position-absolute mt-2 mx-2">
              <i className="bi bi-lock icon-login"></i>
              </span>
              <input
                type="password"
                className="form-control border-0 border-bottom ps-4"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />

              <label
                className="form-check-label ms-2 mt-1 checkbox"
                htmlFor="exampleCheck1"
              >
                Lembre-se de mim
              </label>
            </div>
            <span className="d-flex justify-content-center align-items-center mt-5">
              <button
                type="submit"
                className="login-btn border-0 rounded-pill text-white p-2 w-75"
              >
                ENTRAR
              </button>
            </span>
          </form>
        </section>
      </div>
    </>
  );
}
export default Login;
