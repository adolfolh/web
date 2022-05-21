import React from "react";
import PopUp from "./pop-up.js"; 
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SocialCard extends React.Component {
  state = {
   seen: false
   };
  togglePop = () => {
   this.setState({
    seen: !this.state.seen
   });
  };

  componentDidMount() {
    this.state.seen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
  }
  componentDidUpdate() {
    this.state.seen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
  }
render() {
  return (
    <div className="bottom-0">
        <div className="hidden">
        {this.state.seen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"}
        </div>
        <div onClick={this.togglePop}>
            <button>
                <div className={'text-left navbutton'}>
                <div className="icon text-center"><FontAwesomeIcon icon={faShareFromSquare} /></div>
                <p className="overflow-hidden whitespace-nowrap">Share</p>
                </div>
            </button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
   </div>
  );
 }
}