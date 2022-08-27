// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn,
// } from "mdb-react-ui-kit";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import classes from "./Footer.module.css";

const MDBFooter = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBFooter);
  },
  { ssr: false }
);

const MDBContainer = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBContainer);
  },
  { ssr: false }
);

const MDBCol = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBCol);
  },
  { ssr: false }
);

const MDBRow = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBRow);
  },
  { ssr: false }
);

const MDBIcon = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBIcon);
  },
  { ssr: false }
);

const MDBBtn = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBBtn);
  },
  { ssr: false }
);

const Footer = () => {
  return (
    <MDBFooter className="bg-transparent text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Unreleased | All right reserved | Terms Of Service | Privacy |
        <a className="text-white" href="#">
          {` Unreleased.com`}
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
