"use client"
import React from "react";
import "./App.css";
import { Building2, Users, Calendar, CheckCircle2, Shield } from "lucide-react";
import { useRouter } from "next/navigation"

const Index = () => {
  const router = useRouter()
  return (
    <div className="bg-background bg-[black] px-5">
      {/* Hero Section */}
      <section className="p-5 pt-16">
        <p ></p>
        <h1 className="herotitle mt-5" style={{marginTop:"80px"}}>Connect Industries with <br />Individuals & Institutions</h1>
        <p> Connecting students and industries through a seamless online booking experience.
       <br />Simplify planning, manage schedules, and make learning <br />outside the classroom easy. </p>
        <div className="hero-buttons mt-3">
          <button className="primary" onClick={() => router.push("/visits")}>Find Industrial Visits</button>
          {/* <button className="outline">List Your Industry</button> */}
        </div>
      </section>

      {/* Two-Sided Value Prop */}
<section className="two-sided bg-secondary px-5">
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-2   gap-6">
      <div className="card">
        <div className="card-content">
          <Users className="icon" />
          <h2 className="card-title">For Individuals</h2>
          <p className="card-sub">Discover and book educational industrial visits with ease</p>

          <ul className="feature-list">
            <li className="feature-item">
              <CheckCircle2 className="feature-icon" />
              <span>Browse hundreds of industry facilities</span>
            </li>
            <li className="feature-item">
              <CheckCircle2 className="feature-icon" />
              <span>Real-time availability and instant booking</span>
            </li>
            <li className="feature-item">
              <CheckCircle2 className="feature-icon" />
              <span>Detailed facility information and requirements</span>
            </li>
            <li className="feature-item">
              <CheckCircle2 className="feature-icon" />
              <span>Manage group bookings effortlessly</span>
            </li>
          </ul>

          <div className="mt-6">
            <a href="/explore" className="full-width-button">Explore Visits</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <Building2 className="icon" />
          <h2 className="card-title">For Industries</h2>
          <p className="card-sub">Showcase your facility and streamline visit management</p>

          <ul className="feature-list">
            <li className="feature-item">
              <CheckCircle2 className="feature-icon" />
              <span>Automated booking and scheduling system</span>
            </li>
            <li className="feature-item">
              <CheckCircle2 className="feature-icon" />
              <span>Reach thousands of students and individuals</span>
            </li>
            <li className="feature-item">
              <CheckCircle2 className="feature-icon" />
              <span>Professional visit coordination tools</span>
            </li>
            <li className="feature-item">
              <CheckCircle2 className="feature-icon" />
              <span>Safety compliance and documentation</span>
            </li>
          </ul>

          <div className="mt-6">
            <a href="/list-facility" className="full-width-button outline">List Your Industry</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section id="features" className="py-20 p-5">
        <div>
          <div className="text-center mb-16">
            <h2>Powerful Features for Everyone</h2>
            <p>Everything you need to discover or manage industrial visits</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div>
                <Calendar className="icon" />
                <h3>Smart Scheduling</h3>
                <p>
                  Automated booking system with real-time availability, conflict
                  detection, and instant confirmations.
                </p>
              </div>
            </div>

            <div>
              <div>
                <Users className="icon" />
                <h3>Easy Discovery</h3>
                <p>
                  Browse industries by location, sector, and availability. Filter
                  to find the perfect visit for your group.
                </p>
              </div>
            </div>

            <div>
              <div>
                <Shield className="icon" />
                <h3>Safe & Secure</h3>
                <p>
                  Complete safety compliance, verified facilities, and secure
                  payment processing for peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="p-5">
        <h2>How It Works</h2>
        <p className="mb-10">Three simple steps to connect and visit</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div>
            <div className="step-circle">1</div>
            <h3>Browse & Discover</h3>
            <p>Students and institutions explore available industrial facilities.</p>
          </div>
          <div>
            <div className="step-circle">2</div>
            <h3>Book Instantly</h3>
            <p>Submit booking requests. Industries confirm visits in real-time.</p>
          </div>
          <div>
            <div className="step-circle">3</div>
            <h3>Visit & Learn</h3>
            <p>Receive confirmations, safety briefings, and visit details.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="p-5">
        <h2>Why Thousands Trust TourTech</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        {/* <div className="grid-container"> */}
          {[
            { title: "Save Time & Effort", text: "Book visits in minutes, not days" },
            { title: "Verified Facilities", text: "All industries are verified and rated" },
            { title: "Real-time Availability", text: "See open slots instantly" },
            { title: "Automated Management", text: "Industries reduce admin work by 80%" },
            { title: "Safety First", text: "Complete compliance documentation" },
            { title: "Seamless Communication", text: "Instant notifications and updates" },
          ].map(({ title, text }) => (
            <div className="benefit" key={title}>
              <CheckCircle2 className="text-primary" />
              <div className="text-start mb-0">
                <h4 style={{fontWeight:700}}>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary">
        <h2>Ready to Get Started?</h2>
        <p>
          Whether you're looking for industrial visits or want to showcase your
          facility, <br />join TourTech today.
        </p>
        <div className="hero-buttons mt-7">
          <button className="primary">Find Visits</button>
          <button className="outline">List Your Industry</button>
        </div>
      </section>
    </div>
  );
};

export default Index;