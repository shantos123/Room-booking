import React from 'react'

const App = () => {
  return (
    <div className="m-5">
      <h1>New Form</h1>
      <form className="col g-3 needs-validation m-3" >
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">NAME :-</label>
          <input type="text" className="form-control p-3" id="validationCustom01" placeholder='Name' required />
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">Mobil No. :-</label>
          <input type="Number" className="form-control p-3" id="validationCustom02" placeholder='Phone No.' required />
        </div>
        <div className="col-md-4">
          <label for="validationCustomUsername" className="form-label">Email</label>
          <div className="input-group has-validation">
            <input type="Email" className="form-control p-3" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
          </div>
        </div>
        <div className="form-check m-3">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check m-3">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
        <div className="col-md-1 m-3 ">
          <label for="validationCustom04" className="form-label ">Age </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value="">0-10</option>
            <option>10-20</option>
            <option>20-30</option>
            <option>30-40</option>
            <option>40-50</option>
          </select>
        </div>
        <div className="col-12 m-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label className="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12 m-4">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  )
}

export default App;