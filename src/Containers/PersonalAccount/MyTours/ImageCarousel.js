import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

const ImageCarousel = ({ Pictures }) => {
  return (
    <MDBContainer style={{ padding: "0px" }}>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          {Pictures.map((picture, idx) => {
            return (
              <MDBCarouselItem itemId={idx + 1}>
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={picture}
                    alt="slides"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Light mask</h3>
                  <p>First text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            );
          })}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default ImageCarousel;
