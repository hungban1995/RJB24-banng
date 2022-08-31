// import logo from './logo.svg';
import "./App.css";

// const infoU = 
//   { fistName: " A",
//   lastName:"Nguyen van",
//  age: 28,
//  nickName: "anh A",
//  avatarUrl:"/images/avat.png",
//  profile:"https://www.facebook.com/"
// }
const infoUser = [
  { fistName: " A",
  lastName:"Nguyen van",
 age: 28,
 nickName: "anh A",
 avatarUrl:"/images/avat.png",
 profile:"https://www.facebook.com/"
},
{ fistName: " B",
lastName:"Nguyen Thi",
age: 28,
nickName: "chi B",
avatarUrl:"/images/avat.png",
profile:"https://www.facebook.com/"
},
{ fistName: " C",
lastName:"Nguyen van",
age: 28,
nickName: "anh C",
avatarUrl:"/images/avat.png",
profile:"https://www.facebook.com/"
}

];
const textInfor="Lorem Ipsum: Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lore"


function render(a) {
  return(
  <div className="card">
    <h4>Name: {a.lastName} {a.fistName}</h4>
    <img
          src={a.avatarUrl}
          width="100%"
          
          alt="avatar"
        ></img>
    <p>Nick name: {a.nickName} </p>
    <p>Age:{a.age}</p>
    <p>{textInfor}</p>
    <a className="btn btn-primary" href={a.profile}>More..{a.nickName} </a>
  </div>
  )
}



function App() {
  return (
    <>
   <div className="container-fluid">
    <div className="row">
    <div className="col">{infoUser.map((u)=> render(u)) }</div>

    
     <div className="col">{infoUser.map((u)=> render(u)) }</div>
    </div>
    
      </div>    
    </>
  );
}

export default App;
