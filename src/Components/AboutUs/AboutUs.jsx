import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="aboutusmain">
        <Navbar />
        <div className="aboutusdetails">
          <div className="contentbox4">
            <h1>ABOUT US</h1>
            <p>
              Welcome to Farhanitrate.site – your trusted partner in Android
              game <development className="br"></development>
              We are a professional game development studio dedicated to
              creating custom, high-quality Android games that captivate users
              and generate results. With over 12 years of experience, our team
              has launched dozens of successful projects across the globe,
              helping entrepreneurs, indie developers, and businesses bring
              their game ideas to life.
            </p>
            <p>
              <span>🎯 What We Do</span> <br />
              At Farhanitrate.site, we turn your creative vision into a fully
              playable and polished Android game — ready for the Google Play
              Store. Whether you're starting from scratch or need help with a
              partially developed concept, we’ve got you covered. <br />
              Our core services include:
              <ul>
                <li>🎮 Custom 2D/3D Game Development</li>
                <li>🧠 Game Design & Level Creation</li>
                <li>💸 In-App Purchase & Ad Monetization</li>
                <li>🔁 Multiplayer Integration (Photon, Firebase, etc.)</li>
                <li>📲 Play Store Publishing & Launch Support</li>
              </ul>
            </p>
            <p>
              <span>🚀 Why Choose Farhanitrate.site?</span> <br /> ✅ Years of
              Experience: Proven expertise in Unity, Firebase, and Android
              development. <br /> ✅ Client-Centric Approach: We collaborate
              closely with you from day one. <br /> ✅ All-in-One Solutions:
              From initial idea to full deployment, we handle every step. <br />{" "}
              ✅ Timely Delivery: Committed to delivering your game on schedule.{" "}
              <br /> ✅ You Own It All: Full rights to source code, assets, and
              game IP belong to you.
            </p>
            <p>
              <span>👥 Who We Work With</span> <br /> We proudly partner with:
              <ul>
                <li>Startups with innovative game concepts</li>
                <li>Established studios outsourcing expert game developers</li>
                <li>Educational institutions building learning-based games</li>
                <li>Marketing agencies looking to launch branded mini-games</li>
              </ul>
            </p>
            <p>
              <span>📈 Our Mission</span> <br />
              To empower dreamers, creators, and entrepreneurs by making
              professional game development simple, accessible, and
              results-driven — no matter your budget, experience level, or
              project scale.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
