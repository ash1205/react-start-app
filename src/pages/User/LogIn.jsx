import React from "react";

export default function LogIn() {
  return (
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-6">
        <label for="validationCustomUsername" class="form-label">
          Username
        </label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">
            @
          </span>
          <input
            type="text"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
