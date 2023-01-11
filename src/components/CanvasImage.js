import React, { Component, useState, createRef, useCallback } from "react";
import { render } from "react-dom";
import {
  Stage,
  Layer,
  Text,
  Image,
  Rect,
  Transformer,
  Circle,
  Line,
} from "react-konva";
import card01 from "./../assets/bgSix.jpg";
import useImage from "use-image";
import Draggable from "react-draggable";
// import "./styless.css";s
// import Button from "@mui/material/Button";

const WIDTH = 500;
const HEIGHT = 500;
const ZOOM = 1;

function Canvas(props) {
  //   constructor(props) {
  //     super(props);
  //     this.stageRef = createRef(null);
  //   }

  React.useEffect(() => {
    // document.querySelector("#image").src = image.src;
  }, []);

  const stageRef = createRef(null);

  const [state, setstate] = useState({
    stageWidth: WIDTH,
    zoom: 1,
    imgWidth: 324,
    imgHieght: 202,
  });

  //   state =;

  const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    this.downloadURI(uri, "stage.png");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // this.setState({ [name]: value });
    setstate({ [name]: value });
  };

  const { containerWidth } = props;
  const { imgWidth, imgHieght } = state;
  var scale = (containerWidth / WIDTH) * ZOOM;
  let width = imgWidth * scale;
  let height = imgHieght * scale;
  console.log({ containerWidth, width, height, scale });

  const handleSubmit = () => {
    
  };

  console.log("props.blobData",props.blobData)

  const LionImage = () => {
    const [image] = useImage(
      "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      "Anonymous"
    );

    const imageTest = document.getElementById("imageTest");
    if (imageTest != null) {
      imageTest.src = props?.blob;
      // document.querySelector("#image").src = image.src;
    }
   

    // let imageURL = window.URL.createObjectURL(props?.blobData);
    // const imageTesting = document.getElementsByName("imageTest");
    // imageTesting.src = props.blobData;

    return (
      <div>
        <img id="imageTest" height={400} width={600} name="imageTest" />
        {/* <img [src]="ImageSource" /> */}
        <Image image={image} width={width} height={height} scale={scale} />
      </div>
    );
  };

  return (
    <Draggable>
      <div style={{ width: `100%` }}>
        <Stage width={width} height={height} scale={scale} ref={stageRef}>
          <Layer>
            <LionImage />
          </Layer>
        </Stage>
        {/* <button onClick={handleSubmit}>Remove Background</button> */}
        {/* <button onClick={handleExport}>Download</button> */}
      </div>
    </Draggable>
  );
}

class CanvaImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 1,
    };
  }

  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  checkSize = () => {
    const containerWidth = this.container.offsetWidth;
    const containerHeight = this.container.offsetHeight;
    this.setState({ ...this.state, containerWidth, containerHeight });
  };

  render() {
    const pWidht = this.state.containerWidth
      ? `${this.state.containerWidth * this.props.StyleImage.zoom}px`
      : "100%";
    // console.log("props", this?.props);
    // console.log("this.container.offsetWidth",this?.container.offsetWidth)
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            // left: "10%",
            position: "absolute",
          }}
          ref={(node) => {
            this.container = node;
          }}
        >
          <div
            style={{
              overflow: "auto;",
              width: `${pWidht}`,
              position: "relative",
            }}
          >
            {/* <div>
              <button
                color="inherit"
                size="small"
                variant="outlined"
                sx={{ boxShadow: 3 }}
                style={{
                  marginTop: "20px",
                  marginRight: "10px",
                  marginBottom: "10px",
                  fontSize: "12pt",
                  color: "white",
                }}
                type="button"
                value="+"
                onClick={() =>
                  this.props.setStyleImage({
                    ...this.props.StyleImage,
                    zoom: this.props.StyleImage.zoom + 0.2,
                  })
                }
              >
                {" "}
                +{" "}
              </button>
              <button
                color="inherit"
                size="small"
                variant="outlined"
                sx={{ boxShadow: 3 }}
                style={{
                  marginTop: "20px",
                  marginRight: "10px",
                  marginBottom: "10px",
                  fontSize: "12pt",
                  color: "white",
                }}
                type="button"
                value="-"
                onClick={() =>
                  this.props.setStyleImage({
                    ...this.props.StyleImage,
                    zoom: this.props.StyleImage.zoom + 0.2,
                  })
                }
              >
                {" "}
                -{" "}
              </button>
            </div> */}
            <Canvas
              containerWidth={pWidht.replace("px", "")}
              blobData={this.props.blob}
            />
          </div>
        </div>
      </>
    );
  }
}

export default CanvaImage;
