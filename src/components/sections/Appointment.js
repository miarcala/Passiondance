"use client";

import { useState } from "react";

const initFormData = {
  firstName: "",
  email: "",
  service: "",
  phone: "",
  date: "",
  time: "",
  notes: "",
};

export default function Appointment(props) {
  const [appointment, setAppointment] = useState(initFormData);

  const inputChangeHandler = (e) => {
    setAppointment((prevAppointment) => {
      return {
        ...prevAppointment,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Appointment form", appointment);
    setAppointment(initFormData);
  };
  return (
    // Appointment section start
    <section className="appointment">
      <div className="appointment-wrap">
        <figure>
          <img src="../assets/images/appointment-img.jpg" alt="" />
        </figure>
        <div className="appointment-form">
          <form onSubmit={onSubmitHandler}>
            <div className="form-field half-width">
              <input
                type="text"
                name="firstName"
                onChange={inputChangeHandler}
                value={appointment.firstName}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                onChange={inputChangeHandler}
                value={appointment.email}
                placeholder="Email address"
                required
              />
            </div>
            <div className="form-field half-width">
              <div className="select-field">
                <select
                  name="service"
                  onChange={inputChangeHandler}
                  value={appointment.service}
                >
                  <option>Select service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone"
                onChange={inputChangeHandler}
                value={appointment.phone}
                placeholder="Phone numer"
              />
            </div>
            <div className="form-field half-width">
              <input
                type="date"
                name="date"
                onChange={inputChangeHandler}
                value={appointment.date}
                placeholder="date"
              />
              <input
                type="time"
                name="time"
                onChange={inputChangeHandler}
                value={appointment.time}
                placeholder="time"
              />
            </div>
            <div className="form-field">
              <textarea
                name="notes"
                onChange={inputChangeHandler}
                value={appointment.notes}
                placeholder="Your notes"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-round">
              Make an Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
    // Appointment section end
  );
}
