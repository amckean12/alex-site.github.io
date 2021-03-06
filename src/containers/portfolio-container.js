import React, { Component } from 'react'
//Components
import ProjectComponent from '../components/portfolio-project'

//Styling
import '../portfolio.css'

class PortfolioContainer extends Component {
  handleClick = (event) => {
    if (event.currentTarget.id.includes("live demo")){
      if (event.currentTarget.id === "live demo Piatto"){
        window.open("https://piatto-client.herokuapp.com/")
      } else if (event.currentTarget.id === "live demo My Portfolio Site"){
        alert("Hi, welcome to my site!")
      }
    }
  }

   render(){
     return(
       <div className="Portfolio-Container">
        <ProjectComponent
          title="Piatto"
          about="A dynamic cookbook that allows users to build menus, based on searching for recipes by tags."
          techUsed="Javascript | Ruby | React | Redux | Rails | Knock | HTML | CSS | PostgreSQL | Heroku | Git"
          keyfeatures={["JWT authentication for API access", "Nested Form Submission using ActiveRecord", "User Persistance with Redux-Persist", "Asynchronous web requests with Redux-Thunk"]}
          link = "https://github.com/amckean12/piatto-react"
          handleClick = {this.handleClick}
          />
        <ProjectComponent
          title="My Portfolio Site"
          about="This current site. I use this for my blog as well as displaying projects I've worked on."
          techUsed="Javascript | React | Redux | HTML | CSS | Heroku | Git"
          keyfeatures={["Minimal Design", "React-Scroll used for Navigation", "Responsive navigation links"]}
          link = "https://github.com/amckean12/alex-site.github.io"
          handleClick = {this.handleClick}
          />
       </div>
     )
   }
}

export default PortfolioContainer
