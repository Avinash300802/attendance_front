import React from 'react'

export default function ()

{
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark text-bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">justAttendance</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button>
      {/* add course button color*/}
      <button className='btn btn-outline-primary'>Add Attendance</button>
    </button>
  </div>
</nav>

    </div>
  )
}