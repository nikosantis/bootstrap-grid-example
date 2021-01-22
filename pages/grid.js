export default function Grid() {
  return (
    <div className="page">
      <div>
        <div className="container">
          <p>Container</p>
          <div className="row">
            <p>Row</p>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
          </div>
          <div className="row">
            <p>Row</p>
            <div className="col col-lg-6">Col-lg-6</div>
            <div className="col col-lg-3">Col-lg-3</div>
            <div className="col col-lg-3">Col-lg-3</div>
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid">
          <p>Container-fluid</p>
          <div className="row">
            <p>Row</p>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
            <div className="col col-lg-1">Col-lg-1</div>
          </div>
          <div className="row">
            <p>Row</p>
            <div className="col col-lg-6">Col-lg-6</div>
            <div className="col col-lg-3">Col-lg-3</div>
            <div className="col col-lg-3">Col-lg-3</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .page {
            display: flex;
            height: 100%;
            width: 100%;
            flex-direction: column;
          }
          .container,
          .container-fluid {
            border: 1px dashed red;
          }
          .row {
            border: 1px dashed blue;
          }
          .col {
            border: 1px dashed black;
          }
        `}
      </style>
    </div>
  );
}
