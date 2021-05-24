import React from "react";
import { compose } from "redux";
import { connect, connectAdvanced } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";
const ProjectDetails = (props) => {
  const id = props.match.params.id;
  const { project, auth } = props;
  if (auth.isEmpty == true) {
    return <Redirect to="/signin" />;
  }
  if (project) {
    return (
      <div className="container section prohect-details">
        <div className="card z-content">
          <span className="caer-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>
            Post by {project.authorFirstName} {project.authorLastName}
          </div>
          <div>{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    );
  } else {
    return <div className="container center">loding....</div>;
  }
};
const mapStateToProps = (state, onprops) => {
  const id = onprops.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(ProjectDetails);
