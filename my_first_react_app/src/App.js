
import './App.css';
function App() {
  return (
    <div>
      <h1>Welcome to Emovils Fashion Brand</h1>

      <p>
        At Emovils, we specialize in bespoke streetwear and
         ready-to-wear fashion that blends modern culture with timeless
        craftsmanship. Whether you're looking to stand out or stay comfortably classy, we've got something for you.
      </p>

      <br />

      <div>
        <h3>Why Choose Emovils?</h3>
        <ul>
          <li>Tailor-made streetwear for the bold</li>
          <li>Elegant ready-to-wear pieces</li>
          <li>Affordable luxury for all</li>
        </ul>
      </div>

      <div>
        <h3>Our Bestselling Categories</h3>
        <ol>
          <li>Streetwear Sets</li>
          <li>Corporate Ready-to-Wear</li>
          <li>Urban Accessories</li>
        </ol>
      </div>

      <div>
        <h3>Size Chart</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Size</th>
              <th>Chest (in)</th>
              <th>Waist (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small</td>
              <td>36</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>40</td>
              <td>34</td>
            </tr>
            <tr>
              <td>Large</td>
              <td>44</td>
              <td>38</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />

      <fieldset>
        <legend>Sign Up for Our Style Newsletter</legend>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
          <br /><br />

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Enter your email" />
          <br /><br />

          <label htmlFor="feedback">Style Preference:</label>
          <textarea id="feedback" name="feedback" rows="4" cols="30" placeholder="Tell us your style..."></textarea>
          <br /><br />

          <label>Gender:</label>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
          <input type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other">Other</label>
          <br /><br />

          <label htmlFor="newsletter">Subscribe to:</label><br />
          <input type="checkbox" id="street" name="subscribe" value="Streetwear" />
          <label htmlFor="street">Streetwear</label><br />
          <input type="checkbox" id="ready" name="subscribe" value="Ready-to-wear" />
          <label htmlFor="ready">Ready-to-wear</label><br />
          <input type="checkbox" id="offers" name="subscribe" value="Offers" />
          <label htmlFor="offers">Promos & Offers</label><br /><br />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" min="10" max="100" />
          <br /><br />

          <label htmlFor="style">Favorite Style:</label>
          <select id="style" name="style">
            <option value="urban">Urban</option>
            <option value="minimal">Minimalist</option>
            <option value="vintage">Vintage</option>
            <option value="high-fashion">High Fashion</option>
          </select>
          <br /><br />

          <label htmlFor="date">Preferred Shopping Date:</label>
          <input type="date" id="date" name="date" />
          <br /><br />

          <input type="submit" value="Subscribe Now" />
        </form>
      </fieldset>

      <br /><br />

      <footer>
        <p>&copy; 2025 Emovils Fashion. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App;
         
 