import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";

// import "./styles.css";

import ImgOne from "../assets/bg1.jpeg";
import ImgTwo from "../assets/bg2.jpeg";
import ImgThree from "../assets/bg3.jpeg";
import ImgFour from "../assets/bg4.jpeg";
import ImgFive from "../assets/bg5.jpeg";
import ImgTw from "../assets/bg12.jpeg";
import ImgSix from "../assets/bg6.jpeg";

import ImgEight from "../assets/bg8.jpeg";
import ImgNine from "../assets/bg9.jpeg";
import ImgTen from "../assets/bg10.jpeg";
import ImgSeven from "../assets/bg7.jpeg";
import ImgElven from "../assets/bg11.jpeg";

import Imgthrteen from "../assets/bg13.jpeg";
import Imgfourteen from "../assets/bg14.jpeg";
import Imgfifthteen from "../assets/bg15.jpeg";
import Imgsixteen from "../assets/bg16.jpeg";
import Imgseventeen from "../assets/bg17.jpeg";
import Imgeighteen from "../assets/bg18.jpeg";
import Imgnineteen from "../assets/bg19.jpeg";
import Imgtwenty from "../assets/bg20.jpeg";

import Imgtwentyone from "../assets/bg21.jpeg";
import Imgtwentytwo from "../assets/bg22.jpeg";
import Imgtwentythree from "../assets/bg23.jpeg";
import Imgtwentyfour from "../assets/bg24.jpeg";
import Imgtwentyfive from "../assets/bg25.jpeg";
import Imgtwentysix from "../assets/bg26.jpeg";


function ImagePickerComp(props) {

  // console.log("props", props)
  const [Image, setImage] = useState(null);
  const onPick = (image) => {
    // debugger;
    // console.log("image",image)
    setImage(image.src);

    //  imageListSecond?.map((item, key) => {
    //   if (key === image.value) {
    //     props?.ImageHandle(item.name);
    //   }
    // })

    props?.ImageHandle(image.src);
  };


  React.useEffect(() => {
    console.log(props.pickShow)
    if (props.pickShow === false) { setImage(null) }


  }, [props.pickShow])



  const imageListSecond = [
    { name: "bg1", src: ImgOne },
    { name: "bg2", src: ImgTwo },
    { name: "bg3", src: ImgThree },
    { name: "bg4", src: ImgFour },
    { name: "bg5", src: ImgFive },
    { name: "bg6", src: ImgSix },
    { name: "bg7", src: ImgSeven },
    { name: "bg8", src: ImgEight },
    { name: "bg9", src: ImgNine },
    { name: "bg10", src: ImgTen },
    { name: "bg11", src: ImgElven },
    { name: "bg12", src: ImgTw },
    { name: "bg13", src: Imgthrteen },
    { name: "bg14", src: Imgfourteen },
    { name: "bg15", src: Imgfifthteen },
    { name: "bg16", src: Imgsixteen },
    { name: "bg17", src: Imgseventeen },
    { name: "bg18", src: Imgeighteen },
    { name: "bg19", src: Imgnineteen },
    { name: "bg20", src: Imgtwenty },
    { name: "bg21", src: Imgtwentyone },
    { name: "bg22", src: Imgtwentytwo },
    { name: "bg23", src: Imgtwentythree },
    { name: "bg24", src: Imgtwentyfour },
    { name: "bg25", src: Imgtwentyfive },
    { name: "bg26", src: Imgtwentysix },
  ];
  const imageList = [
    { name: "ImgOne", src: ImgOne },
    { name: "ImgTwo", src: ImgTwo },
    { name: "ImgThree", src: ImgThree },
    { name: "ImgFour", src: ImgFour },
    { name: "ImgFive", src: ImgFive },
    { name: "ImgSix", src: ImgSix },
    { name: "ImgSeven", src: ImgSeven },
    { name: "ImgEight", src: ImgEight },
    { name: "ImgNine", src: ImgNine },
    { name: "ImgTen", src: ImgTen },
    { name: "ImgElven", src: ImgElven },
    { name: "ImgTw", src: ImgTw },
    { name: "Imgthrteen", src: Imgthrteen },
    { name: "Imgfourteen", src: Imgfourteen },
    { name: "Imgfifthteen", src: Imgfifthteen },
    { name: "Imgsixteen", src: Imgsixteen },
    { name: "Imgseventeen", src: Imgseventeen },
    { name: "Imgeighteen", src: Imgeighteen },
    { name: "Imgnineteen", src: Imgnineteen },
    { name: "Imgtwenty", src: Imgtwenty },
    { name: "Imgtwentyone", src: Imgtwentyone },
    { name: "Imgtwentytwo", src: Imgtwentytwo },
    { name: "Imgtwentythree", src: Imgtwentythree },
    { name: "Imgtwentyfour", src: Imgtwentyfour },
    { name: "Imgtwentyfive", src: Imgtwentyfive },
    { name: "Imgtwentysix", src: Imgtwentysix },
  ];
  return (
    <div>
      <ImagePicker
        images={imageList.map((image, i) => {
          // console.log(props.pickShow ? i : "yes")
          return (
            { src: image?.src, value: props.pickShow ? i : null }
          )

        })}
        onPick={onPick}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}

      />
      {/* <button
          type="button"
          onClick={()=>this.props?.ImageHandle(this.state.image)}
          style={{ marginTop: 20, display: "none" }}
        >
         
        </button> */}
    </div>
  );
}

export default ImagePickerComp;
