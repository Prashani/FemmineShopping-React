import React from "react";
import {} from "react-bootstrap";
import "./HeadCollection.css";

const HeadCollection = (props) => {
  return (
    <div>
      <div className="">
        <div className="row  rowStyle" style={{ marginTop: "50px" }}>
          <div className="col" style={{ marginTop: "25px" }}>
            <div className="card mb-3" style={{ maxWidth: "430px" }}>
              <div className="row no-gutters">
                <div className="col-md-7">
                  <img
                    src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
                    className="card-img CardImages"
                    alt="..."
                  />
                </div>
                <div className="col-md-5">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col " style={{ marginTop: "25px" }}>
            <div className="card mb-3" style={{ maxWidth: "430px" }}>
              <div className="row no-gutters">
                <div className="col-md-7">
                  <img
                    src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
                    className="card-img CardImages"
                    alt="..."
                  />
                </div>
                <div className="col-md-5">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "25px" }}>
            <div className="card mb-3" style={{ maxWidth: "430px" }}>
              <div className="row no-gutters">
                <div className="col-md-7">
                  <img
                    src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
                    className="card-img CardImages"
                    alt="..."
                  />
                </div>
                <div className="col-md-5">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5
            className="card-title"
            style={{ textAlign: "center", fontSize: "55px" }}
          >
            Special title treatment
          </h5>
        </div>
      </div>
      <div>
        <img
          src="https://smdanishiqbal.github.io/HyperBazaar/images/women%20banner.jpg"
          alt="..."
        />
      </div>
    </div>
  );
};

export default HeadCollection;
