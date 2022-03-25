// import html_logo from "../Images/html_logo.png"
// import css_logo from "../Images/CSS_logo.svg"
// import js_logo from "../Images/JavaScript_Logo.png"
// import react_logo from "../Images/React_logo.jpg"
// import redux_logo from "../Images/Redux_logo.png"
// import materialUi_logo from "../Images/materialUi_logo.png"
// import styledCom_logo from "../Images/styledCom_logo.png"
// import MongoDB_logo from "../Images/MongoDB_logo.gif"
// import express_logo from "../Images/express_logo.png"
// import mongoose_logo from "../Images/mongoose_logo.png"
// import github_logo from "../Images/github.png"
// import nodejs_logo from "../Images/nodejs.png"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiPostman,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

const iconSize = {
  width: "70px",
  height: "70px",
};

const imgData = [

  {
    icon:<SiHtml5 style={iconSize} />,
    text:"Html5"
  },
  {
    icon:<SiCss3 style={iconSize} />,
    text:"Css3"
  },
  {
    icon:<SiJavascript style={iconSize} />,
    text:"Javascript"
  },
  {
    icon:<SiRedux style={iconSize} />,
    text:"Redux"
  },
  {
    icon:<SiStyledcomponents style={iconSize} />,
    text:"Styledcomponents"
  },
  {
    icon:<SiMongodb style={iconSize} />,
    text:"Mongodb"
  },
  {
    icon:<SiExpress style={iconSize} />,
    text:"Express"
  },
  {
    icon:<SiReact style={iconSize} />,
    text:"React"
  },
  {
    icon:<SiGithub style={iconSize} />,
    text:"Github"
  },
  {
    icon:<SiPostman style={iconSize} />,
    text:"Postman"
  },
  {
    icon:<SiHeroku style={iconSize} />,
    text:"Heroku"
  },
  {
    icon:<SiNetlify style={iconSize} />,
    text:"Netlify"
  }
  
  
];




export { imgData };
