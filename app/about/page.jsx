import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <section className="About-section" aria-labelledby="about-heading">
        <h1 id="about-heading">About Us </h1>

        <p className="intro-text">
          TourTech provides an end-to-end booking platform for organised industrial visits and
          educational site tours. We connect schools, universities, training centres and corporate
          groups with vetted industrial hosts so students and professionals can learn first-hand
          about manufacturing processes, R&D facilities, logistics hubs and other industrial
          operations.
        </p>

        <h2>Our Mission</h2>
        <p>
          To make industrial learning accessible, safe, and well-coordinated by offering a
          transparent booking workflow, clear safety guidance, and tailored visit programmes that
          meet academic and corporate learning objectives.
        </p>

        <h2>Our Vision</h2>
        <p>
          To be the leading bridge between education and industry — empowering learners with
          real-world exposure and helping organisations build a skilled, workplace-ready
          pipeline. We envision a future where every student and trainee can access meaningful
          industrial experiences that spark curiosity and career pathways.
        </p>

        {/* Motto removed from here and will be added at the end before footer */}

        <h2>What we do</h2>
        <ul>
          <li>Curate and verify host facilities with safety and compliance checks</li>
          <li>Offer an easy booking flow for group sizes, preferred dates and transport</li>
          <li>Provide custom educational itinerary and facilitator-matching</li>
          <li>Manage risk assessments, waivers and insurance options where required</li>
          <li>Provide on-day coordination and 24/7 support for cancellations or incidents</li>
        </ul>

        <h2>Typical Booking Workflow</h2>
        <ol>
          <li>Search facilities by industry, location and learning outcomes</li>
          <li>Request available dates and submit group details (size, ages, accessibility needs)</li>
          <li>Receive a draft itinerary and safety documentation from the host</li>
          <li>Confirm booking, pay deposit or full fee, and submit waivers where necessary</li>
          <li>Receive final logistics pack (arrival instructions, PPE requirements, contact list)</li>
        </ol>

        <h2>Safety & Compliance</h2>
        <p>
          Safety is central to every TourTech booking. Hosts are required to provide up-to-date
          safety briefings, valid insurance details, and a named on-site contact. For student
          visits we support chaperone ratios, background checks (where requested), and standard
          incident reporting procedures.
        </p>

        <h2>Who benefits</h2>
        <p>
          - Students and educators gain practical insight complementing classroom learning.
          <br /> - Companies receive structured outreach that helps them attract talent and
          showcase best practice.
          <br /> - Training providers and professional groups get tailored technical visits and
          networking opportunities.
        </p>

        <h2>Partners & Case Studies</h2>
        <p>
          We partner with manufacturers, utilities, and research parks. Recent programmes include
          multi-day industrial immersion for engineering undergraduates and logistics-site
          workshops for vocational colleges. If you want, we can add a dedicated case-studies
          panel here linking to completed visits.
        </p>

        <h2>Pricing & Packages</h2>
        <p>
          Pricing depends on group size, duration and any bespoke facilitation. We offer
          standard educational packages (half-day, full-day) and premium packages that include
          transport and accredited certificates for participants.
        </p>

        <h2>Contact & Bookings</h2>
        <p>
          For enquiries and group bookings, please contact our bookings team:
          <br />
          <strong>Email:</strong> <a href="mailto:contact@tourtech.com">contact@tourtech.com</a>
          <br /> 
          <a href="mailto:support@tourtech.com">support@tourtech.com</a>
          <br />
          <strong>Phone:</strong> +234 800 000 0000
          <br />
          <strong>Office:</strong> Babcock University, Ilishan-Remo, Ogun State, Nigeria
        </p>

        <h2>Get started</h2>
        <p>
          Ready to book an industrial visit? Sign up on our website  Click the "Book a Visit" button on the main page or
          send us an email with your preferred dates and group details. We'll reply within 48
          hours with available options and a recommended itinerary.
        </p>

        {/* Motto displayed last inside the section, just before footer */}
        <div className="motto" aria-hidden="false">
          <strong>Motto:</strong> <span className="motto-text">"See. Learn. Innovate."</span>
        </div>
      </section>

      <footer className="site-footer" role="contentinfo">
        <div className="site-footer-inner">
          <small>© 2025 TourTech — All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}

export default About;
