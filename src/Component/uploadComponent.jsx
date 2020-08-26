import React, { Fragment, Component } from 'react';
import { storage } from '../Firebase/index';
class UploadVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(e) {
    if (e.target.files[0]) {
      let image = e.target.files;
      // console.log(image);
      this.setState({ image });
    }
  }

  handleUpload() {
    let { image } = this.state;
    let uploadTask = storage.ref(`/image/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      () => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('image')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          })
          .catch();
      }
    );
  }

  render() {
    const style = {
      padding: '0px 500px',
      height: '200vh',
      display: 'flex',
      flexDirection: 'column',
      alignItem: 'center',
      justifyContent: 'center',
    };
    return (
      <div style={style}>
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>upload</button>
        <img
          src={
            this.state.image ||
            'https://pixabay.com/vectors/avatar-icon-placeholder-1577909/'
          }
          alt="image_alt"
        />
      </div>
    );
  }
}

export default UploadVideo;
