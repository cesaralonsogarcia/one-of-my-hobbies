import React from "react";

export default function Contact() {
  return (
    <div className="card m-3 p-3">
        <h3 className="card-title">Contact</h3>
      <form>
      <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter full name"
          />
        </div>
        <div class="form-group py-3">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            I'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="comments">Comments</label>
          <textarea
            type="text"
            class="form-control"
            id="name"
            placeholder=""
          />
        </div>
        <button type="submit" class="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </div>
  );
}
