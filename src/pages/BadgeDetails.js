import React from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName || "FIRST_NAME"}
              lastName={badge.lastName || "LAST_NAME"}
              twitter={badge.twitter || "twitter"}
              jobTitle={badge.jobTitle || "JOB_TITLE"}
              email={badge.email || "EMAIL"}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  to={`/badges/${badge.id}/edit`}
                  className="btn btn-primary mb-4"
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
