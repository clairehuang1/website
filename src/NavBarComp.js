import React from 'react'
import { Element, Link } from 'rc-scroll-anim'

class NavBarComp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color:'',
      text:'',
      to:''
    };
    this.onHover = this.onHover.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }
  componentDidMount(){
    this.setState({
      color: this.props.color,
      to: this.props.to
    })
  }
  onHover(){
    this.setState({
      text:this.props.text
    })
  }
  onLeave(){
    setTimeout(function() {this.setState({text:''})}.bind(this), 1250)

  }
  render(){

    var circle = {
      height: '30px',
      width: '30px',
      borderRadius: '50%',
      background: this.state.color,
      margin:'30px'
    }
    var str = this.state.to;
    return (
      <div className="navwrapper">
        <Link to={str}>

          <div style = {circle} onMouseOut= {this.onLeave} onMouseEnter = {this.onHover}/>
          <div className="navbartitle">{this.state.text}</div>

        </Link>
        <br/>


        </div>


    )
  }
}
export default NavBarComp;
