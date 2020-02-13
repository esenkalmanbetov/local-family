import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/kg">Kg</Link>
          </li>
          <li>
            <Link to="/kz">Kz</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
