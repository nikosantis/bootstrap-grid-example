export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-8">
                    <p>LOGO</p>
                    <h1>¡Bienvenidos a la Súper App!</h1>
                    <h2>Inicia sesión con tu cuenta</h2>
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            aria-label="First name"
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            aria-label="Last name"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .page {
            display: flex;
            min-height: 100vh;
            width: 100%;
            justify-content: center;
            align-items: center;
          }
          main {
            display: flex;
          }
          .container {
            border: 1px solid blue;
          }
          .row {
            border: 1px solid violet;
          }
          .col-lg-4,
          .col-md-8,
          .col-12 {
            border: 1px solid red;
          }
        `}
      </style>
    </div>
  );
}
