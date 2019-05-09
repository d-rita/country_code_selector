import React from 'react';
import axios from 'axios';

const requestIp = require('request-ip');


class Ip extends React.Component {
  state = {
    ip: ''
  };

  handleClick = (e) => {
    e.preventDefault();
    const ipMiddleware = (req, res, next) => {
      const clientIp = requestIp.getClientIp(req);
      console.log(clientIp);
      this.setState({ ip: clientIp });
      next();
    };
    console.log(this.state.ip);
    axios.get(`https://ipapi.co/${this.state.ip}/country_calling_code/`)
      .then(res => console.log(res));
  }


  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Click here</button>
      </div>
    );
  }
}

export default Ip;
