import React from "react";

export default function Alert(props) {
  const alert = props.alert;
  return (
    props.alert && (
      <div
        className="alert alert-warning alert-dismissible fade show "
        role="alert"
      >
        {alert.message}
      </div>
    )
  );
}
