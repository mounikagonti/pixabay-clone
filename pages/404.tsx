import React from "react";

const NotFound = () => {
  return (
    <div className="notFound_wrapper">
      <h1 className="err_status">404</h1>
      <h1 className="not_found">Not Found</h1>
      <p className="text">
        The resource requested could not be found on this server
      </p>
    </div>
  );
};

export default NotFound;
