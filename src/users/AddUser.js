import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    email1: new Date().toLocaleString(), // Initialize with current time
  });

  const { name, username, email, email1 } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add your attendance details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Roll No
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your roll no"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Course
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Course Name"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/* Display current time */}
            <div className="mb-3">
              <label htmlFor="Time" className="form-label">
                Time
              </label>
              <input
                type="text"
                className="form-control"
                value={email1}
                readOnly
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Done
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;