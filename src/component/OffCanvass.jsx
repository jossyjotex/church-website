import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";


const OffCanvass = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button> */}
      <div onClick={handleShow} className="me-2">
        <IoMdMenu size={30} />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props} className="w-50">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <ul className="d-flex flex-column ps-5 gap-4 list-unstyled">
          <li>
            {" "}
            <Link className="text-decoration-none" to="/">
              {" "}
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="text-decoration-none" to="/live-stream"> Live Stream</Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="text-decoration-none" to="/give"> Give</Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="text-decoration-none" to="/the-church"> The Church</Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="text-decoration-none" to="/Resources"> Resources</Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="text-decoration-none" to="/Contact-us"> Contact Us</Link>{" "}
          </li>
        </ul>
      </Offcanvas>
    </>
  );
};

export default OffCanvass;
