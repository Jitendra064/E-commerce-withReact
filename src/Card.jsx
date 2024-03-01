import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card h-100">
            <img src={props.cardImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.cardTitle}</h5>
              <p className="card-text span2">{props.cardDescription}</p>
              <div className="badge bg-danger text-wrap  span6">
                Limited time deal
              </div>
              <p className=" pt-2">
                ₹<span className="span4">{props.cardPrice}</span>
                <span className="text-muted">
                  M.R.P : ₹<span className="span5">{props.cardMrp}</span>
                </span>
                (<span>{props.cardDiscount}</span>% Off)
                <br />
                <span className="text-muted span3">
                  No cost EMI avilable on select cards
                </span>
                <br />
                <div className="pt-3">
                  <span className="text-warning ">
                    ✔<span className="text-primary">prime</span>
                  </span>
                </div>
                Free delevery{" "}
                <span className="span1">{props.cardDelevery}</span>
                <br />
                Or fastest delevery
                <span className="span1">{props.cardFastestDelevery}</span>
                <br />
                <span>Services Setup at delivery</span>
              </p>

              <button className="btn btn-primary">Order now</button>
              <button className="btn btn-danger mx-3">Add to curt</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
