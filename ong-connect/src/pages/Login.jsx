import logoBlue from "../assets/logo-blue.svg";
import email from "../assets/email.svg";
import password from "../assets/padlock.svg";

function Login() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center outer-wrapper ">
        <section className="bg-white d-flex flex-column justify-content-center align-items-center container wrapper radius">
          <header className="d-flex flex-column justify-content-center align-items-center">
            <img src={logoBlue} />
            <p className="fw-semibold fs-3">LOG IN</p>
          </header>

          <form>
            <div className="mb-2">
              <span>
                <img src={email} />
              </span>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-2">
              <span>
                <img src={password} />
              </span>
              <input
                type="password"
                className="form-control"
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
                className="form-check-label ms-2 mt-1"
                htmlFor="exampleCheck1"
              >
                Lembre-se de mim
              </label>
            </div>
            <span className="d-flex justify-content-center align-items-center mt-4">
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
