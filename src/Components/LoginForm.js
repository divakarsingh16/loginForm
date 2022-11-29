import React from "react";

const LoginForm = () => {
    const formHandeler = (event)=>{
        event.preventDefault();
        alert("Form submmited sucessfully")
    }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <img alt="logo" src="Image/logo.png" />
        </div>
        <div className="col-4 text-center mt-2 ">
          <h1 style={{ borderRadius: "2px", border: "1px solid black" ,padding:"10px"}}>
            SignUp
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <img
            height="600"
            width="1000"
            alt="imageMain"
            src="https://static.vecteezy.com/system/resources/previews/013/107/662/non_2x/school-education-learning-concept-cartoon-geography-teacher-stands-near-a-blackboard-with-a-pointer-points-a-world-map-tutor-male-character-teaching-specialist-in-geopolitics-vector.jpg"
          />
        </div>
        <div className="col-4">
          <form onSubmit={formHandeler} style={{ borderRadius: "5px", border: "1px solid black" ,padding:"20px"}}>
            <div className="form-group mb-2">
              <span id="company-name">Comapny Name</span>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group mb-2">
              <span id="company-name">Comapny Email:</span>
              <input className="form-control" type="email" />
            </div>
            <div className="form-group mb-2">
              <span id="company-name">Comapny Type:</span>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group mb-2">
              <span id="company-name">Select a plan</span>
              <select className="form-control" type="text">
                <option className="group-by">Plan A</option>
                <option className="group-by">Plan B</option>
                <option className="group-by">Plan C</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <span id="company-name"></span>
              <input className="form-control" type="file" accept="image" />
            </div>
            <button className="btn btn-primary form-control" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
