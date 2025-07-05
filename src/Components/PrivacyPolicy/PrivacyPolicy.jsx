import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="privacypolicymain">
        <Navbar />
        <div className="privacypolicydetails">
          <div className="contentbox5">
            <h1>PRIVACY POLICY</h1>
            <p>
              At Farhanitrate.site, your privacy is extremely important to us.
              This Privacy Policy explains how we collect, use, and protect the
              information you provide when interacting with our website or using
              our services. <br />
              By accessing or using Farhanitrate.site, you agree to the terms
              outlined in this policy.
            </p>
            <p>
              <span>1. Information We Collect</span> <br />
              We may collect the following types of information:
              <ul>
                <li>
                  Your name, email address, phone number, and other contact
                  details
                </li>
                <li>
                  Game project information shared by you (game concepts, files,
                  feedback, etc.)
                </li>
                <li>💸 In-App Purchase & Ad Monetization</li>
                <li>
                  Business-related information if you’re hiring us as a company
                </li>
                <li>Website usage data through tools like Google Analytics</li>
              </ul>
            </p>
            <p>
              <span>2. How We Use Your Information</span> <br /> We collect and
              use your data for the following purposes:
              <ul>
                <li>To communicate regarding your inquiries or projects</li>
                <li>
                  To understand your needs and deliver customized game
                  development services
                </li>
                <li>
                  To provide estimates, project updates, and technical support
                </li>
                <li>
                  To improve our website, services, and customer experience
                </li>
                <li>
                  For internal record-keeping, legal, and accounting purposes
                </li>
              </ul>
              We do not sell, rent, or share your personal data with third
              parties for marketing purposes.
            </p>
            <p>
              <span>3. Data Security</span> <br />
              We take your data security seriously. Steps we take to protect
              your information include:
              <ul>
                <li>SSL encryption for all website interactions Secure and</li>
                <li>
                  {" "}
                  encrypted storage of client project files Limited access to
                </li>
                <li> personal and project data within our team</li>
              </ul>
            </p>
            <p>
              <span>4. Use of Third-Party Services</span> <br />
              To operate efficiently, we may use reputable third-party services:
              <ul>
                <li>
                  Google Analytics (for website analytics) Payment processors
                  (for transactions, if applicable)
                </li>
                <li> </li>
                <li>Email service providers (for communication) </li>
              </ul>
            </p>
            <p>
              <span>5. Your Rights</span> <br />
              You have the right to:
              <ul>
                <li>Request access to the personal data we hold about you</li>
                <li>Ask us to correct, update, or delete your information </li>
                <li> Withdraw your consent at any time</li>
                To make a request, please contact us at: itsfarhan259@gmail.com
              </ul>
            </p>
            <p>
              <span>6. Cookies</span> <br />
              We may use cookies to:
              <ul>
                <li>Analyze web traffic and user behavior</li>
                <li> Improve user experience on our site</li>
              </ul>
              You may disable cookies through your browser settings if you
              prefer not to allow them.
            </p>
            <p>
              <span>7. Children’s Privacy</span>
              <br />
              Our services are not directed toward children under the age of 13.
              We do not knowingly collect personal information from children.
            </p>
            <p>
              <span>8. Policy Updates</span>
              <br />
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with a revised date. Last Updated: July
              2025
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
