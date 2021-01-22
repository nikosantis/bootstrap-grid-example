export default function Dashboard() {
  return (
    <div className="page">
      <div className="menu"></div>
      <div className="content">
        <header>
          <nav></nav>
        </header>
        <main>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="row">
                  <div className="col-lg-12 col-12 mb-5">
                    <div className="card">
                      <div className="card-body">
                        <div className="row justify-content-center">
                          <div className="col-lg-10">
                            <div className="row justify-content-between">
                              <div className="col-lg-5">
                                <h2>¿Quién envía?</h2>
                                <p>Debes completar los datos del emisor</p>
                              </div>
                              <div className="col-lg-5">
                                <div className="illustration"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12 mb-5">
                    <div className="card">
                      <div className="card-body">
                        <div className="row justify-content-center">
                          <div className="col-lg-10">
                            <div className="row justify-content-between">
                              <div className="col-lg-12">
                                <h2>Dirección de origen</h2>
                                <p>Debes seleccionarl región y comuna</p>
                              </div>
                              <div className="col-lg-5">
                                <div className="row g-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="origen"
                                      className="form-label"
                                    >
                                      Región de origen*
                                    </label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                        Open this select menu
                                      </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="row g-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="origen"
                                      className="form-label"
                                    >
                                      Comuna de origen*
                                    </label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                        Open this select menu
                                      </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12 mb-5">
                    <div className="card">
                      <div className="card-body">
                        <div className="row justify-content-center">
                          <div className="col-lg-10">
                            <div className="row justify-content-between">
                              <div className="col-lg-12">
                                <h2>Selecciona la talla de tu envío</h2>
                                <p>Debes seleccionarl región y comuna</p>
                              </div>
                              <div className="col-lg-12">
                                <div className="row justify-content-evenly">
                                  <div className="col-lg-2">
                                    <div className="card">
                                      <div className="card-body">caja</div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2">
                                    <div className="card">
                                      <div className="card-body">caja</div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2">
                                    <div className="card">
                                      <div className="card-body">caja</div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2">
                                    <div className="card">
                                      <div className="card-body">caja</div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2">
                                    <div className="card">
                                      <div className="card-body">caja</div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2">
                                    <div className="card">
                                      <div className="card-body">caja</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>
        {`
          .page {
            display: flex;
            height: 100%;
            width: 100%;
          }
          .menu {
            width: 100px;
            flex: 1;
            height: 100vh;
            background-color: #fff;
          }
          .content {
            width: calc(100vw - 100px);
            background-color: #d7d0e0;
            border-left: 1px solid #381662;
          }
          header {
            height: 64px;
            display: flex;
          }
          nav {
            background: #381662;
            flex: 1;
          }
          main {
            display: flex;
            min-height: calc(100vh - 64px);
            padding: 56px 0;
          }
          .illustration {
            width: 381px;
            height: 231px;
            background: pink;
          }
          .col-lg-12,
          .col-lg-10,
          .col-lg-5 {
            border: 1px dashed black;
          }
        `}
      </style>
    </div>
  );
}
