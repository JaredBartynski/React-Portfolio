import React from "react";

function Contact() {
  return (
    <>
      <section class="container">
        <section class="card" style={{ width: "18rem" }}>
          <section class="card-body">
            <h5 class="card-title">Contact</h5>
            <form>
              <section class="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                />
              </section>
              <section class="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                />
              </section>
              <section class="form-group">
                <label for="formGroupExampleInput2">Message</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Message"
                />
              </section>
            </form>
            <input class="btn btn-primary" type="submit" value="Submit" />
          </section>
        </section>
      </section>
      ;
    </>
  );
}

export default Contact;
