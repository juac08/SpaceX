import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LaunchItem = ({ launch }) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission Name:{" "}
            <span
              className={classNames({
                "text-success": launch.launch_success,
                "text-danger": !launch.launch_success,
              })}
            >
              {launch.mission_name}
            </span>
          </h4>
          <p>
            <Moment format="YYYY-MM-DD hh:mm">
              {launch.launch_date_local}
            </Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${launch.flight_number}`}>
            <button className="btn btn-secondary">Launch Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
