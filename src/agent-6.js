```javascript
// About Page Component

import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Page header */}
      <header>
        <h1>About Us</h1>
      </header>

      {/* Main content */}
      <main>
        {/* Company description */}
        <section className="company-description">
          <h2>Our Company</h2>
          <p>
            We are a forward-thinking technology company dedicated to creating innovative solutions 
            for businesses and individuals alike. Our mission is to simplify complex problems 
            through cutting-edge software development.
          </p>
        </section>

        {/* Team section */}
        <section className="team-section">
          <h2>Our Team</h2>
          <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - CTO</li>
            <li>Mike Johnson - Lead Developer</li>
            {/* Add more team members as needed */}
          </ul>
        </section>

        {/* Contact information */}
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>Email: info@ourcompany.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Tech Street, Silicon Valley, CA 94000</p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
```