import React from "react";
import { Grid, TextField, Button } from "@mui/material";

function ContactForm() {
  return (
  
    <div id="Contact" class="container col-sm-12 col-md-6" style={{paddingTop:"20px"}}>
        <h2 style={{textAlign:'center',padding:'20px 0px',color:'darkgray'}} className='hr-lines2'>Contact Us</h2>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
         
        </div>
        <div class="form-group">
            <input
              type="number"
              class="form-control"
              id="inputAddress2"
              placeholder="Phone Number"
            />
          </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="btn-div">
        <button type="submit" class="btn btn-primary" style={{background:"#4caf50",border:'none',padding:'10px 20px',borderRadius:'4px'}}>
          Sign in
        </button>
        </div>
       
      </form>
    </div>
  );
}

export default ContactForm;
