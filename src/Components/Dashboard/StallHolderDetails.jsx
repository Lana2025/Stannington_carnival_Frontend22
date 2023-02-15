import React from "react";
import Card from "react-bootstrap/Card";

const StallHolderDetails = (props) => {
  return (
    <div>
      <Card.Title className="creator-data">Stall Holder Details</Card.Title>
      <div className="data-wrap">
        <div className="data-name-wrap">
          <p className="lable text-muted">
            <span> {props.stallholder?.firstName}</span>
            <span> {props.stallholder?.lastName}</span>
          </p>
          <p className="lable text-muted">
            Email: <span> {props.stallholder?.email}</span>
          </p>
          <p className="lable text-muted">
            Mobile: <span> {props.stallholder?.mobileNumber}</span>
          </p>         
        </div>        
      </div>
    </div>
  );
};

export default StallHolderDetails;
