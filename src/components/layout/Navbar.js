import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links =
    auth.isEmpty == true ? (
      <SignedOutLinks />
    ) : (
      <SignedInLinks profile={profile} />
    );

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,

    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
