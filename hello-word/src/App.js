// import logo from './logo.svg';
import "./App.css";
import img1 from "./Home-work/Sesion01/Images/1.jpg";
import img2 from "./Home-work/Sesion01/Images/2.jpg";
import img3 from "./Home-work/Sesion01/Images/3.jpg";

import ChartBar1 from "./Home-work/Sesion01/ChartBar1";
import SocialBlock from "./Home-work/Sesion01/SocialBlock";
import ChartColumn from "./Home-work/Sesion01/ChartColumn";

function Ui01() {
  return (
    <div className="Ui01">
      <img className="img-Ui01" src={img1} alt="Ui01" />
      <h4>Clothing & Apparel</h4>
      <ul>
        <li>Accessories</li>
        <li>Bags</li>
        <li>Kid's Fashion</li>
        <li>Mens </li>
      </ul>
    </div>
  );
}
function Ui02() {
  return (
    <div className="card" style={{ margin: "10px", width: "400px" }}>
      <img className="card-img" src={img2} alt="Ui02" />
      <div className="card-body">
        <p>Young shop</p>
        <hr />
        <p className="text-primary">Samsung UHD TV 24inch</p>
        <p>
          {" "}
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span> <span>02</span>
        </p>
        <h5>$599</h5>
      </div>
    </div>
  );
}
function Ui03() {
  return (
    <div className="card" style={{ margin: "10px", width: "500px" }}>
      <div className="card-body">
        <img className="card-img" src={img3} alt="Ui03" />
        <p className="text-muted">Technology</p>
        <h2>Harman Kadon Onyx Studio Mini, Reviews & Experiences</h2>
        <span className="text-muted">Feb 21, 2021 by</span>{" "}
        <span> drfurion</span>
      </div>
    </div>
  );
}

const chartBar = [
  {
    text: "BANDWIDTH",
    color1: "red",
    colors: "Crimson",
    percentage: 20,
  },
  {
    text: "STORAGE",
    color1: "blue",
    colors: "DodgerBlue",
    percentage: 50,
  },
  {
    text: "USER",
    color1: "green",
    colors: "LimeGreen",
    percentage: 70,
  },
  {
    text: "VISITOR",
    color1: "yellow",
    colors: "Khaki",
    percentage: 30,
  },
  {
    text: "EMAIL",
    color1: "purple",
    colors: "DarkViolet",
    percentage: 45,
  },
  {
    text: "BASIC",
    color1: "pink",
    colors: "HotPink",
    percentage: 80,
  },
  {
    text: "OTHER",
    color1: "SlateBlue",
    colors: "MediumSlateBlue",
    percentage: 37,
  },
];

const social = [
  {
    text: "Facebook",
    color: "blue",
    iconName: "fa-brands fa-facebook-f",
    total: 500000,
    unit: "like",
  },
  {
    text: "Twitter",
    color: "DeepSkyBlue",
    iconName: "fa-brands fa-twitter",
    total: 40000,
    unit: "Tweets",
  },
  {
    text: "Google +",
    color: "SandyBrown",
    iconName: "fa-brands fa-google-plus-g",
    total: 460000,
    unit: "Plus",
  },
  {
    text: "Pinterest",
    color: "Brown",
    iconName: "fa-brands fa-pinterest-p",
    total: 34000,
    unit: "Pins",
  },
];

const chartColumn = [
  {
    text: "TODAY'S VISITORS",
    total: 24599,
  },
  {
    text: "YESTERDAY'S VISITORS",
    total: 15699,
  },
  {
    text: "TOTAL DOWLOADS",
    total: 124599,
  },
  {
    text: "CURRENT INCOME",
    total: "$54599",
  },
];

function App() {
  return (
    <>
      {/* <Ui01 />
      <Ui02 />
      <Ui03 /> */}
      {/* {chartBar.map((chart, index) => (
        <ChartBar1
          key={index}
          text={chart.text}
          color1={chart.color1}
          colors={chart.colors}
          percentage={chart.percentage}
        />
      ))} */}
      {/* {social.map((social,index) =>(
  <SocialBlock
   key={index}
   text={social.text}
   color={social.color}
   iconName={social.iconName}
   total={social.total}
   unit={social.unit}
  
  />
))} */}
      <div className="col card-deck">
        {chartColumn.map((col, index) => (
          <ChartColumn key={index} text={col.text} total={col.total} />
        ))}
      </div>
    </>
  );
}
export default App;
