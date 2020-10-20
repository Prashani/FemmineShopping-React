import React from "react";
import {} from "react-bootstrap";

const NewArivels = (props) => {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://images.squarespace-cdn.com/content/v1/55e5d976e4b08d5b02395d86/1507843504868-09QIULEZKS5LGHLJQ5XX/ke17ZwdGBToddI8pDm48kIAURR2fUrQ9pur7EZ1L79AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc_8MTfmkWQhoe71s1SjP0GX4utBKZ3bQImg4L-RcY3JwZ8MPBrC0YvTARe_PrVipU/wedding-dresses-banner.jpg"
          className="card-img-top"
          alt="..."
        />
      </div>
      <div
        className="card"
        style={{ marginTop: "-70px", width: "90%", marginLeft: "57px" }}
      >
        <div className="card-body">
          <h5
            className="card-title"
            style={{ textAlign: "center", fontSize: "55px" }}
          >
            Special title treatment
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NewArivels;
