import React, { Component } from "react";
import "./RewardCard.css";

class RewardCard extends Component {
  state = {
    raise: 0,
  };

  handleChange = (val) => {
    const raise = val;
    this.setState({ raise });
  };

  render() {
    const { onRadioClick, content, id, onContinue } = this.props;
    const { raise } = this.state;
    return content.map((x) => {
      let checked = false;
      let amt = "amount-left";
      let sel = "card";
      if (x.id === id) {
        sel = sel + " selected";
        checked = true;
      }
      if (x.id === 0) {
        amt = "no-display";
      }
      return (
        <div className={x.disable ? sel + " unavailable" : sel} key={x.id}>
          <div className="card-description">
            <label htmlFor={x.id}>
              <input
                type="radio"
                name="reward"
                id={x.id}
                onClick={() => {
                  onRadioClick(x.id);
                }}
                checked={checked}
                disabled={x.disable}
              />
              <div className="flex">
                <h4>{x.heading}</h4>
                <p className="price">{x.topRight}</p>
              </div>
            </label>
            <p className="text">{x.text}</p>
            <p className={amt}>
              <span className="left">{x.left} </span>left
            </p>
          </div>
          <div className="pledge">
            <p>Enter your pledge</p>
            <div className="pledge-right">
              <label className="input-amt" htmlFor={x.id}>
                $
                <input
                  type="number"
                  name="pledge"
                  id={x.id}
                  min={x.amt}
                  defaultValue={x.amt}
                  onChange={(event) => this.handleChange(event.target.value)}
                />
              </label>
              <div
                className="btn continue"
                onClick={() => onContinue(x.heading, raise)}
              >
                Continue
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default RewardCard;
