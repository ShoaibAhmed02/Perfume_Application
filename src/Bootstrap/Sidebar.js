import React, { useState } from "react";
import { Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Front from "./Front";
import { IoIosHome } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { GiTwirlyFlower } from "react-icons/gi";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import { Col, Form } from "react-bootstrap";
import { FaFeatherPointed } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div
            className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
            style={{ marginTop: "30px" }}
          >
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">
                <img
                  height={"200px"}
                  width={"200px"}
                  src="https://images.unsplash.com/photo-1635796342460-368cf1927238?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </span>
            </a>

            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="/home" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline text-secondary">
                    {" "}
                    <IoIosHome /> Home
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline text-secondary">
                    <RiDashboardFill /> Dashboard
                  </span>
                </a>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline text-secondary">
                        {" "}
                        <GiTwirlyFlower /> Item
                      </span>{" "}
                      1{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline text-secondary">
                        <GiTwirlyFlower /> Item
                      </span>{" "}
                      2{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <hr />

            <Dropdown show={isDropdownOpen} onClick={toggleDropdown}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="d-flex align-items-center text-white text-decoration-none"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">Profile</span>
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="dropdown-menu dropdown-menu-dark text-small shadow"
                style={{ display: isDropdownOpen ? "block" : "none" }}
              >
                <Dropdown.Item href="#/action-1">New project...</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Sign out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="col py-1">
          <div
            className="container"
            style={{
              height: "100px",
              border: "5px solid green",
              width: "100%",
              backgroundColor: "darkgray",
            }}
          >
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-12 col-md-12 d-flex mt-2">
                <div
                  style={{
                    width: "35%",
                    height: "60px",
                    fontFamily: "ui-serif",
                    backgroundColor: "darkgray",
                    borderRadius: "25px",
                    textAlign: "center",
                    marginRight: "50px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaFeatherPointed /> Redden Concrete inc
                </div>
                <Col xs="auto" style={{ width: "50%", height: "30px" }}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                </Col>
                <div
                  style={{
                    marginLeft: "20px",
                    display: "flex",
                    alignItems: "center",
                    width: "33%",
                    backgroundColor: "darkgray",
                    borderRadius: "25px",
                  }}
                >
                  <img
                    style={{ borderRadius: "initial", marginLeft: "inherit" }}
                    height={"50px"}
                    width={"45px"}
                    src="https://media.istockphoto.com/id/615279718/photo/businesswoman-portrait-on-white.jpg?s=2048x2048&w=is&k=20&c=w3fwb7e2T58CXJxddfPmEQGOlU9jKuPFTtdJAHqZc3M="
                    alt="profile"
                  />
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "20px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: "initial", fontSize: "10px" }}>
                        John Thomas
                      </div>
                      <div style={{ fontFamily: "initial", fontSize: "10px" }}>
                        Project manager
                      </div>
                    </div>
                    <span style={{ height: "50px", marginLeft: "60px" }}>
                      <IoSettings />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Front />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
