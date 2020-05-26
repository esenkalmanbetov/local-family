import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { Carousel } from "react-bootstrap";

import "./Home.scss";

import Families from "../Components/Families";
import Tours from "../Components/Tours";

import Kg1 from "../assets/img/countries/kg1.jpg";
import Kz1 from "../assets/img/countries/kz1.jpg";
import Tj4 from "../assets/img/countries/Tj4.jpg";

class Home extends React.Component {
  get families() {
    return this.props.stores.familyStore.families();
  }

  get tours() {
    return this.props.stores.tourStore.tours();
  }

  componentDidMount() {
    this.loadAllFamilies();
    this.loadAllTours();
  }

  loadAllFamilies = () => {
    this.props.stores.familyStore.loadAllFamilies();
  };

  loadAllTours = () => {
    this.props.stores.tourStore.loadAllTours();
  };

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 main-slider"
              src={Kg1}
              alt="First slide"
            />
            <Carousel.Caption className="content">
              <Link to="/kg">
                <h1>Kyrgyzstan</h1>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 main-slider"
              src={Kz1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <Link to="/kz">
                <h1>Kazakstan</h1>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 main-slider"
              src={Tj4}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Tajikstan</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Families nextUrl="all-families" families={this.families} />

        <Tours nextUrl="join-to-tours" tours={this.tours} />
      </div>
    );
  }
}

export default inject("stores")(observer(Home));
