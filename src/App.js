import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let logo = {img:require('./image/Leap.png')}
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
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in thechallenging steps from learning about your podcast on the web. ",
    read: "READ MORE"
    };
  let aar = [];
  for (let i = 0; i < 6; i++) {
    aar.push(cards);
  }

  return (
    <main className="container-xxl">
      <header className="d-flex m-auto justify-content-between my-4">
        <div>
          <img src={logo.img} alt=""/>
        </div>
        <ul className="d-flex gap-5">
          {nav.map((a) => {
            return <li className="list-unstyled text-secondary">{a}</li>;
          })}
        </ul>
      </header>
      <section>
        <div>
          <div>
            <img src="" alt="sas" />
            <h1>jsjs</h1>
          </div>
          <div>
            <img src="" alt="sas" />
            <h1>jsjs</h1>
          </div>
          <div>
            <img src="" alt="sas" />
            <h1>jsjs</h1>
          </div>
        </div>
        <div>
          {aar.map((e) => {
            return (
              <div>
                {e.date}
                {e.titleCard}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
