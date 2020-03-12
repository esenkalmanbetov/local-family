import React from "react";
import ImageUploader from "react-images-upload";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    const newPictures = pictureFiles.map(picture =>
      URL.createObjectURL(picture)
    );
    let Pictures = [...this.state.Pictures];
    Pictures = Pictures.concat(newPictures);

    this.setState({ Pictures });
    this.props.onUpload(Pictures);
  }

  render() {
    return (
      <div>
        <h3>Gallery</h3>
        {this.state.Pictures.map((picture, idx) => {
          return (
            <div key={idx}>
              <img src={picture} alt="surot" />
            </div>
          );
        })}
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
        />
      </div>
    );
  }
}

export default ImageUpload;
