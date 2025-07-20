import React from 'react';
import './App.css';
function App() {
  return (
    
    <div>
      <h1> Everything Emovils</h1>
      <p>Welcome to Everything Emovils where fashion meets passion.
        <br />
      View our catalouge and connect with our 24/7 assistants to bring your imaginations to Reality
      </p>
      <h2> Our Services</h2>
      <p> We offer various services including
        <ol>
          <li> Bespoke</li>
          <li> Ready to wear</li>
          <li> Street wear</li>
          <li> Bridal</li>
        </ol>
      </p>
      <p> Book a session With us </p>
      <form>
          <fieldset>
            <legend>Book Now</legend>

            <label>
              Full Name: 
              <input type="text" name="fullname" />
            </label>
            <br /><br />

            <label>
              Email: 
              <input type="text" name="email" />
            </label>
            <br /><br />

            <label>
              Location
              <br />
              <textarea name="Virtual/ Onsite" rows="4" cols="40"></textarea>
            </label>
            <br /><br />

            <label>
              Age:
              <input type="number" name="age" />
            </label>
            <br /><br />

            <label>
              Desired Service:
              <select name="path">
                <option value="Bespoke">Bespoke</option>
                <option value="Ready to wear"> RTW</option>
                <option value="Street wear">Streetwear</option>
              </select>
            </label>
            <br /><br />

            <label>
              Appointment Date
              <input type="date" name="Appointment date" />
            </label>
            <br /><br />
            </fieldset>
               
              
            <fieldset>
            <br />

            <input type="submit" value="Submit" />
          </fieldset>
        </form>
</div> 


  );
}

export default App;
