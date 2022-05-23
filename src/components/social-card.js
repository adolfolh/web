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
        <div onClick={this.togglePop}>
            <button>
                <div className={'text-left navbutton'}>
                <div className="my-4 md:my-0 md:pb-2 icon text-center"><FontAwesomeIcon icon={faShareFromSquare} /></div>
                </div>
            </button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
   </div>
  );
 }
}