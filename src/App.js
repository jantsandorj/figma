import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "./image/bg.png";
import Ellipse from "./image/Ellipse 1.png";
import twitter from "./image/twitter.png";
import footer from "./image/Derel Artwork Logo.png";
function App() {
  let logo = { img: require("./image/Leap.png") };
  let logoRight = { img: require("./image/Logo.png") };
  let nav = [
    "Portfolio",
    "Blog",
    "CV",
    "Store",
    "Freelance",
    "About me",
    "Contact",
  ];
  let minorMenu = [
    "All",
    "UI Design",
    "UX Design",
    "Product Design",
    "Aricles",
    "Tutorials",
    "News",
  ];

  let cards = {
    date: "Nov 23 2020",
    titleCard: "This way is wrong about UI Design",
    anchor:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    read: "READ MORE",
  };
  let aar = [];
  for (let i = 0; i < 6; i++) {
    aar.push(cards);
  }

  return (
    <main className="container-xxl">
      <header className="d-flex justify-content-between">
        <div className="mx-3">
          <img src={logo.img} alt="" />
          <img src={logoRight.img} alt="" />
        </div>
        <ul className="d-flex gap-5">
          {nav.map((a) => {
            return <li className="list-unstyled text-secondary fs-6">{a}</li>;
          })}
        </ul>
      </header>
      <section>
        <div className="Section1 d-flex">
          <div className="rightSide">
            <h2 className="Blog">Blog Posts</h2>
            <h2 className="think">I think so, this is it.</h2>
            <p className="para">
              Design begins after I begin to think about how to present an
              experience most successfully, whether a button I put in can solve
              a problem. The only point in design is not ui design, if the user
              does not have a good experience at the end of the product, the
              design will be considered unsuccessful in my opinion.
            </p>
            <div className="socialSide d-flex">
              <div className="d-flex border-secondary twit">
                <img src={twitter} alt="sas" />
                <h1>TWITTER</h1>
              </div>
              <div className="d-flex border-secondary linked">
                <img className="linkedin" src={bg} alt="sas" />
                <h1>LINKEDIN</h1>
              </div>
              <div className="d-flex border-secondary med">
                <img src={Ellipse} alt="sas" />
                <h1>MEDIUM</h1>
              </div>
            </div>
          </div>
          <div className="leftSide">
            <img className="leftImg"
              src={require("./image/Group 296.png")}
              alt=""/>
          </div>
        </div>
        <div className="menu">
          <ul className="list-unstyled d-flex gap-3">
            {minorMenu.map((e) => {
              return <li className="menuList">{e}</li>;
            })}
          </ul>
        </div>
        <div className="d-flex flex-wrap row gap-3">
          {aar.map((e) => {
            return (
              <div className="card p-0 m-auto">
                <img className="card-img-top"
                  src={require("./image/Rectangle 124.png")}
                  alt=""
                />
                <div className="card-body">
                  <p className="date">{e.date}</p>
                  <p className="card-title">{e.titleCard}</p>
                  <p className="desc">{e.anchor}</p>
                  <a className="read">{e.read}</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <footer>

        <img className="footerLogo" src={footer} alt=""/>
      </footer>
    </main>
  );
}

export default App;
