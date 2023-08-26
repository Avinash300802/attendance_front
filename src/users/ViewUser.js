import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    email1: "", // Add the email1 field
    attendanceTime: "", // You might want to show this field too
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Attendance Details of a student</h2>

          <div className="card">
            <div className="card-header">
              <b>Details of student id: {user.id}</b>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name: </b>
                {user.name}
              </li>
              <li className="list-group-item">
                <b>Roll No: </b>
                {user.username}
              </li>
              <li className="list-group-item">
                <b>Course Name: </b>
                {user.email}
              </li>
              <li className="list-group-item">
                <b>Time: </b>
                {user.email1} {/* Displaying email1 as time */}
              </li>
            </ul>
          </div>
          <Link className="btn btn-dark my-2" to={"/"}>
            Back to justAttendance
          </Link>
        </div>
      </div>
    </div>
  );
}
