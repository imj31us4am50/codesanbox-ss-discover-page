import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "/navbar/navbar.js";
import TitleAndDesc from "/maincomponents/titledesc.js";
import Notifications from "/notifications/notifications.js";
import FlexItems from "/maincomponents/flexcomp.js";
import MainC from "/maincomponents/maincontent.js";
import Footer from "/footer/footer.js";

export default function App() {
  return (
    <div className="App m-0 p-0">
      <div className="notification">
        Trebuie să te înregistrezi/conectezi înainte de a accesa această
        opțiune!
      </div>
      <NavBar />
      <Notifications />
      <TitleAndDesc />
      {""}
      <FlexItems />
      <MainC />
      <Footer />
    </div>
  );
}
