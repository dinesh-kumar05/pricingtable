import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


function App() {

var cardDetails=[
  {
    planName: "free",
    price: "$0",
    features:[
      {
        name:"Single User"
      },
      {
        name:"5GB Storage"
      },
      {
        name:"Unlimited Public Projects"
      },
      {
        name:"Community Access"
      },
      {
        name:"Unlimited Private Projects"
      },
      {
        name:"Dedicated Phone Support"
      },
      {
        name:"Free Subdomain"
      },
      {
        name:"Monthly Status Reports"
      }
    ]
  },
  {
    planName: "Plus",
    price: "$9",
    features:[
      {
        name:"5 Users"
      },
      {
        name:"50GB Storage"
      },
      {
        name:"Unlimited Public Projects"
      },
      {
        name:"Community Access"
      },
      {
        name:"Unlimited Private Projects"
      },
      {
        name:"Dedicated Phone Support"
      },
      {
        name:"Free Subdomain"
      },
      {
        name:"Monthly Status Reports"
      }
    ]
    
  },
  {
    planName: "Pro",
    price: "$49",
    features:[
      {
        name:"Unlimited Users"
      },
      {
        name:"150GB Storage"
      },
      {
        name:"Unlimited Public Projects"
      },
      {
        name:"Community Access"
      },
      {
        name:"Unlimited Private Projects"
      },
      {
        name:"Dedicated Phone Support"
      },
      {
        name:"Unlimited Free Subdomain"
      },
      {
        name:"Monthly Status Reports"
      }
    ]
  }
]
  return (
    <div className="pricing py-5">
      <div className="container">
       <div class="row">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {
            cardDetails.map((cardDetails)=>{
            return<Card cardDetails={cardDetails}></Card>
            })
          }
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
