import React, {Component} from 'react'
import NavBarComp from './NavBarComp'

class NavBar extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="navbar">
      <NavBarComp color = {"#f6dddc"} text = {"About"} to = {"about"}></NavBarComp>
      <NavBarComp color = {"#d1c3e3"} text = {"Projects"} to = {"projects"}></NavBarComp>
      <NavBarComp color = {"#99bef0"} text = {"Resume"} to = {"resume"}></NavBarComp>
      <NavBarComp color = {"#f0eb79"} text = {"Contact"} to = {"contact"}></NavBarComp>
      </div>

    )
  }
}
export default NavBar;
