import { Link } from "react-router-dom";
import aboutusimage from "../../Assets/pictures/aboutus.webp";
import homepageimage from "../../Assets/pictures/bgpic.png";
import imageurdu from "../../Assets/pictures/textreferearn.webp";
import imageurdu2 from "../../Assets/pictures/texturdu3.webp";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="homepagemain">
        <Navbar />

        {/* first section */}
        <div className="homepage">
          <div className="homepagechild">
            <div className="homepagebuttonsmain">
              <h1>Dragon Tiger Club</h1>
              <button>
                <Link to="https://DragonTigerClub.pk?from_gameid=5758208&channelCode=100000">
                  Download Teen Patti NO 1
                </Link>
              </button>
              <button>
                <Link to="https://DragonTigerClub.pk?from_gameid=5758208&channelCode=100000">
                  Dragon Tiger Club
                </Link>
              </button>
              <button>
                <Link to="https://DragonTigerClub.pk?from_gameid=5758208&channelCode=100000">
                  Download Teen Patti Blue
                </Link>
              </button>
              <button>
                <Link to="https://DragonTigerClub.pk?from_gameid=5758208&channelCode=100000">
                  Download Teen Patti Gold
                </Link>
              </button>
              <button>
                <Link to="https://DragonTigerClub.pk?from_gameid=5758208&channelCode=100000">
                  Download Teen Patti Flying Chess
                </Link>
              </button>

              <button>
                <Link to="https://DragonTigerClub.pk?from_gameid=5758208&channelCode=100000">
                  Download Teen Patti Master King
                </Link>
              </button>
              <button>
                <Link to="https://DragonTigerClub.pk?from_gameid=5758208&channelCode=100000">
                  Download Teen Patti Daimond
                </Link>
              </button>
              <button>
                <Link to="https://DragonTigerClub.pk?from_gameid=5758208&channelCode=100000">
                  Download Teen Patti ludo
                </Link>
              </button>
            </div>
            <div className="imagemain">
              <img src={homepageimage} alt="" />
            </div>
          </div>
        </div>

        {/* second section main */}
        <div className="secondsectionmain">
          <div className="content-box">
            <div className="leftcontent">
              <h1>Welcome to Farhanitrate.site</h1>
              <p>
                At Farhanitrate.site, we are passionate about crafting immersive
                and performance-driven Android gaming experiences that captivate
                users and drive long-term engagement. Specializing in card-based
                and casino-style games such as Teen Patti, Dragon Tiger, Rummy,
                and other club classics, we bring together creative
                storytelling, user-friendly design, and technical excellence to
                deliver mobile games that stand out in a crowded market.
              </p>
              <p>
                Whether you're a startup taking your first step into the world
                of mobile gaming, or an established brand seeking to scale your
                digital presence with high-quality games, we offer complete
                end-to-end development services tailored to your vision. From
                the initial ideation phase—where we help shape your concept into
                a fully-fleshed idea—to the final deployment on the Play Store,
                we ensure every stage of your game’s journey is guided by
                strategy, innovation, and expertise.
              </p>
              <p>
                What sets us apart is our ability to combine cutting-edge design
                with robust back-end functionality. Our games are lightweight,
                fast-loading, and built to scale, ensuring smooth performance
                across a wide range of Android devices. We integrate real-time
                multiplayer functionality, payment systems, reward logic, and
                interactive UI elements to create a gaming experience that is
                not only fun but also keeps users coming back.
              </p>
              <p>
                Security is a top priority at Farhanitrate.site. We implement
                secure login mechanisms, encrypted data channels, and fair-play
                algorithms to ensure that all users have a safe and trusted
                environment to enjoy their favorite games. Plus, we adhere to
                platform standards and compliance regulations, ensuring your
                games meet all Google Play and international
                guidelines—essential for long-term success and ad monetization.
              </p>
              <p>
                At the heart of our mission is your growth. Our games are
                designed not only to entertain but to convert users into loyal
                players. We help you implement in-game marketing strategies, ad
                integrations, and referral systems that enhance retention and
                boost user acquisition. Whether it's through leaderboards, bonus
                features, tournaments, or daily challenges, every feature is
                designed with engagement in mind.
              </p>
              <p>
                Need more than just development? We’ve got you covered. Our team
                also provides game publishing consultation, UI/UX design
                services, bug testing, analytics setup, and post-launch support
                to ensure your game performs optimally after release. With years
                of experience in mobile game trends and user behavior, we guide
                you with insights that help maximize both revenue and reach.
              </p>
              <p>
                As a brand, Farhanitrate.site is built on a foundation of
                innovation, quality, and client success. Our work doesn’t stop
                once the game is launched—we stick with you as your strategic
                partner, continually optimizing your game based on real-world
                performance and feedback. We're not just building games—we're
                building sustainable gaming ecosystems.{" "}
              </p>
              <p>
                So if you're ready to turn your dream into a successful mobile
                game—or looking to level up your existing
                product—Farhanitrate.site is your trusted development partner.
                Let's create something amazing together.
              </p>
            </div>
            <div className="rightimageurdu">
              <img className="urdutext1" src={imageurdu} alt="" />
              <img className="urdutext2" src={imageurdu2} alt="" />
            </div>
          </div>
        </div>

        {/* third section main */}
        <div className="aboutussectionmain">
          <div className="contentbox2">
            <h1>ABOUT US</h1>
            <p>
              Welcome to Farhanitrate.site — where creativity meets cutting-edge
              Android game development. We are a team of skilled and passionate
              developers, designers, and strategists united by one goal: to
              bring your gaming vision to life. Whether you're dreaming of
              launching the next big card game like Teen Patti, Dragon Tiger, or
              Ludo, or want to develop a full-fledged club-style game, we’ve got
              you covered from concept to launch.
            </p>
            <p>
              At Farhanitrate.site, we believe in end-to-end solutions. From
              UI/UX design, front-end development, and server-side integration,
              to game logic, animations, and testing—we handle every part of the
              development process to deliver polished games that are ready for
              the Play Store or third-party app stores. Our games are
              lightweight, secure, scalable, and optimized for performance
              across all Android devices.
            </p>
            <img src={aboutusimage} alt="" />
          </div>
        </div>

        {/* third section main */}
        <div className="ourservicessection">
          <div className="contentbox3">
            <h1>OUR SERVICES</h1>
            <p>
              At Farhanitrate.site, we offer a complete suite of professional
              Android game development services tailored to transform your ideas
              into high-performing mobile games. Whether you're an entrepreneur
              with a fresh concept or a business ready to enter the mobile
              gaming market, we provide the tools, technology, and talent to
              bring your vision to life.
            </p>
            <p>
              <span>🎮 Custom Android Game Development</span> <br /> From
              concept to code, we build fully customized Android games using
              modern frameworks and clean architecture. Our team works closely
              with you to understand your goals and craft a game that meets both
              user expectations and market demands.
            </p>
            <p>
              <span> 🐉 Teen Patti & Dragon Tiger Game Development</span> <br />{" "}
              Specializing in casino-style card games, we develop
              high-performance Teen Patti, Dragon Tiger, and Rummy games that
              feature smooth gameplay, multiplayer support, real-time updates,
              and secure wallets.
            </p>
            <p>
              <span> 🎯 Hyper-Casual & Arcade Game Development</span> <br /> We
              create lightweight, addictive games designed for mass appeal and
              quick retention. Ideal for startups looking to hit the market fast
              and build a strong user base.
            </p>
            <p>
              <span> 🛠️ Game Reskinning & Cloning</span> <br /> Need a quick
              launch? We offer fast and affordable game reskinning and
              white-label solutions that customize existing games with your
              brand, theme, and monetization tools.
            </p>
            <p>
              <span>🌐 Multiplayer & Real-Time Game Engines</span> <br /> Using
              WebSocket, Firebase, or Photon, we create real-time multiplayer
              games with smooth network handling and responsive UX—perfect for
              competitive gameplay and online tournaments.
            </p>
            <p>
              <span> 💼 Backend & Admin Panel Integration</span> <br /> We build
              and integrate robust backend systems to manage users, game logic,
              payments, leaderboards, and analytics. Admin panels provide full
              control over your game ecosystem.
            </p>
            <p>
              <span>📈 Monetization & In-App Purchases</span> <br /> Boost your
              revenue with strategically placed ads, in-app purchases, reward
              systems, and referral bonuses designed to maximize user engagement
              and ROI.
            </p>
            <p>
              <span>🧪 Testing & Optimization</span> <br /> We perform
              multi-device compatibility testing and gameplay optimization to
              ensure smooth performance across Android platforms and screen
              sizes.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
