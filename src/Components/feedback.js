import React from "react";
import { GoX } from "react-icons/go";

export default class FeedBack extends React.Component {
  state = {
    shows: true
  };
  handelchange = () => {
    this.setState({ shows: false });
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-body">
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="header"> FeedBack </span>
          <GoX className="btn" onClick={this.props.onclose} />
        </header>
        {this.state.shows ? (
          <div>
            <form>
              <textarea className="area-text" placeholder="Feedback"></textarea>
            </form>
            <footer className="but-th" onClick={this.handelchange}>
              Submit
            </footer>
          </div>
        ) : (
          <div
            style={{
              fontSize: 65,
              textAlign: "center",
              position: "absolute",
              top: 160,
              left: 150,
              fontFamily: "cursive"
            }}
          >
            Thank You!!
          </div>
        )}
      </div>
    );
  }
}
