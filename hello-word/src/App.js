

// import "./Home-work/Sesion02/style.css";
// import "./App.css";
// import img1 from "./Home-work/Sesion02/Images/1.jpg";
// import img2 from "./Home-work/Sesion02/Images/2.jpg";
// import img3 from "./Home-work/Sesion02/Images/3.jpg";
// import ps1 from "./Home-work/Sesion02/Images/Person/1.PNG";
// import ps2 from "./Home-work/Sesion02/Images/Person/2.PNG";
// import ps3 from "./Home-work/Sesion02/Images/Person/3.PNG";
// import ps4 from "./Home-work/Sesion02/Images/Person/4.PNG";

// import ChartBar1 from "./Home-work/Sesion02/ChartBar1";
// import SocialBlock from "./Home-work/Sesion02/SocialBlock";
// import ChartColumn from "./Home-work/Sesion02/ChartColumnFunction/ChartColumn";
// import Profile from "./Home-work/Sesion02/Profile";
// import Person from "./Home-work/Sesion02/PersonFunction/Person";

// function Ui01() {
//   return (
//     <div className="Ui01">
//       <img className="img-Ui01" src={img1} alt="Ui01" />
//       <h4>Clothing & Apparel</h4>
//       <ul>
//         <li>Accessories</li>
//         <li>Bags</li>
//         <li>Kid's Fashion</li>
//         <li>Mens </li>
//       </ul>
//     </div>
//   );
// }
// function Ui02() {
//   return (
//     <div className="card" style={{ margin: "10px", width: "400px" }}>
//       <img className="card-img" src={img2} alt="Ui02" />
//       <div className="card-body">
//         <p>Young shop</p>
//         <hr />
//         <p className="text-primary">Samsung UHD TV 24inch</p>
//         <p>
//           {" "}
//           <span className="fa fa-star checked"></span>
//           <span className="fa fa-star checked"></span>
//           <span className="fa fa-star checked"></span>
//           <span className="fa fa-star checked"></span>
//           <span className="fa fa-star"></span> <span>02</span>
//         </p>
//         <h5>$599</h5>
//       </div>
//     </div>
//   );
// }
// function Ui03() {
//   return (
//     <div className="card" style={{ margin: "10px", width: "500px" }}>
//       <div className="card-body">
//         <img className="card-img" src={img3} alt="Ui03" />
//         <p className="text-muted">Technology</p>
//         <h2>Harman Kadon Onyx Studio Mini, Reviews & Experiences</h2>
//         <span className="text-muted">Feb 21, 2021 by</span>{" "}
//         <span> drfurion</span>
//       </div>
//     </div>
//   );
// }

// const chartBar = [
//   {
//     text: "BANDWIDTH",
//     color1: "red",
//     colors: "Crimson",
//     percentage: 20,
//   },
//   {
//     text: "STORAGE",
//     color1: "blue",
//     colors: "DodgerBlue",
//     percentage: 50,
//   },
//   {
//     text: "USER",
//     color1: "green",
//     colors: "LimeGreen",
//     percentage: 70,
//   },
//   {
//     text: "VISITOR",
//     color1: "yellow",
//     colors: "Khaki",
//     percentage: 30,
//   },
//   {
//     text: "EMAIL",
//     color1: "purple",
//     colors: "DarkViolet",
//     percentage: 45,
//   },
//   {
//     text: "BASIC",
//     color1: "pink",
//     colors: "HotPink",
//     percentage: 80,
//   },
//   {
//     text: "OTHER",
//     color1: "SlateBlue",
//     colors: "MediumSlateBlue",
//     percentage: 37,
//   },
// ];

// const proFile = [
//   {
//     text: "HTML",
//     icon: "fa-brands fa-html5",
//     colors: "Crimson",
//     percentage: 20,
//   },
//   {
//     text: "CSS",
//     icon: "fa-brands fa-css3-alt",
//     colors: "DodgerBlue",
//     percentage: 50,
//   },
//   {
//     text: "PHP",
//     icon: "fa-brands fa-php",
//     colors: "LimeGreen",
//     percentage: 70,
//   },
//   {
//     text: "Java",
//     icon: "fa-brands fa-java",
//     colors: "Khaki",
//     percentage: 30,
//   },
//   {
//     text: ".Net",
//     icon: "fa-brands fa-battle-net",
//     colors: "DarkViolet",
//     percentage: 45,
//   },
// ];

// const social = [
//   {
//     text: "Facebook",
//     color: "blue",
//     iconName: "fa-brands fa-facebook-f",
//     total: 500000,
//     unit: "like",
//   },
//   {
//     text: "Twitter",
//     color: "DeepSkyBlue",
//     iconName: "fa-brands fa-twitter",
//     total: 40000,
//     unit: "Tweets",
//   },
//   {
//     text: "Google +",
//     color: "SandyBrown",
//     iconName: "fa-brands fa-google-plus-g",
//     total: 460000,
//     unit: "Plus",
//   },
//   {
//     text: "Pinterest",
//     color: "Brown",
//     iconName: "fa-brands fa-pinterest-p",
//     total: 34000,
//     unit: "Pins",
//   },
// ];

// const chartColumn = [
//   {
//     text: "TODAY'S VISITORS",
//     total: 24599,
//   },
//   {
//     text: "YESTERDAY'S VISITORS",
//     total: 15699,
//   },
//   {
//     text: "TOTAL DOWLOADS",
//     total: 124599,
//   },
//   {
//     text: "CURRENT INCOME",
//     total: "$54599",
//   },
// ];

// const personPr = [
//   {
//     images: ps1,
//     name: "ROBORT PATTISON",
//     job: "Developing",
//     email: "robot123@gmail.com",
//     phone: "8665545541",
//     color1: "red",
//     colors: "orange",
//   },
//   {
//     images: ps2,
//     name: "JAMES SMITH",
//     job: "Designer",
//     email: "Smith123@gmail.com",
//     phone: "2316216254",
//     color1: "blue",
//     colors: "Crimson",
//   },
//   {
//     images: ps3,
//     name: "TOM HANKS",
//     job: "Ui Designer",
//     email: "peter1@gmail.com",
//     phone: "5451213645",
//     color1: "green",
//     colors: "LimeGreen",
//   },
//   {
//     images: ps4,
//     name: "SIVERTER STALING",
//     job: "Testing",
//     email: "point123@gmail.com",
//     phone: "2341691545",
//     color1: "SlateBlue",
//     colors: "yellow",
//   },
// ];

//Sesion3
import Ex1 from "./Home-work/Sesion03/State-Class/Ex1";
import Demo from "./Home-work/Sesion03/State-Class/Demo";

function App() {
  return (
    <>
      {" "}
        {/* <Ui01 />
      <Ui02 />
      <Ui03 />
      {chartBar.map((chart, index) => (
        <ChartBar1
          key={index}
          text={chart.text}
          color1={chart.color1}
          colors={chart.colors}
          percentage={chart.percentage}
        />
      ))}
     
      {proFile.map((file, index) => (
        <Profile
          key={index}
          text={file.text}
          iconName={file.icon}
          color={file.colors}
          percentage={file.percentage}
        />
      ))}
      
      {social.map((social, index) => (
        <SocialBlock
          key={index}
          text={social.text}
          color={social.color}
          iconName={social.iconName}
          total={social.total}
          unit={social.unit}
        />
      ))}
     
      <div className="col card-deck">
        {chartColumn.map((col, index) => (
          <ChartColumn key={index} text={col.text} total={col.total} />
        ))}
      </div>

      <div className="col card-deck mt-3" style={{ textAlign: "center" }}>
        {personPr.map((person, index) => (
          <Person
            key={index}
            images={person.images}
            name={person.name}
            job={person.job}
            color1={person.color1}
            email={person.email}
            colors={person.colors}
            phone={person.phone}
          />
        ))}
      </div> */}


<Ex1/>

    
    </>
  );
}

export default App;
