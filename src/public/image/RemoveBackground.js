import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActionStatus } from "../features/removeBackground";
import loadImage from "blueimp-load-image";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import html2canvas from "html2canvas";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import { Resizable } from "re-resizable";
import { ResizableBox } from "react-resizable";

import ImgOne from "../assets/bgOne.jpg";
import ImgTwo from "../assets/bgTwo.jpg";
import ImgThree from "../assets/bgThree.jpg";
import ImgFour from "../assets/bgFour.jpg";
// import ImgTw from "../assets/bgTw.jpg";
import ImgSix from "../assets/bgSix.jpg";
import ImagePickerComp from "./ImagePickerComp";
import { useEffect } from "react";
import Draggable from "react-draggable";

export default function RemoveBackground() {
  const status = useSelector((state) => state.status.bgRemoved);
  const dispatch = useDispatch();

  let blob = null;

  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState("bgEight");
  const [ImageEdit, setEdit] = useState(false);

  useEffect(() => {
    setSelectedImage("bgEight");
  }, []);

  const imgUpload = (e) => {
    const img = e.target.files[0];
    var input = document.getElementById("upload");
    var infoArea = document.getElementById("upload-label");
    var fileName = input.files[0].name;
    infoArea.textContent = "File name: " + fileName;

    setImage(img);
  };

  const uploadImage = async () => {
    dispatch(setActionStatus(false));

    const resizedImage = await loadImage(image, {
      // resize before sending to Remove.bg for performance
      maxWidth: 1500,
      maxHeight: 1500,
      canvas: true,
    });

    resizedImage.image.toBlob(async function (inputBlob) {
      const formData = new FormData();
      formData.append("image_file", inputBlob);
      formData.append("add_shadow", true);
      formData.append("size", "auto");

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": "tZbLuXH6qjgwFJdawQkCr9VU",
        },
        body: formData,
      });

      if (response.status === 200) {
        dispatch(setActionStatus(true));
      } else {
        dispatch(setActionStatus(false));
      }

      const outputBlob = await response.blob();

      blob = URL.createObjectURL(outputBlob);

      const image = document.getElementById("imageResult");
      const down = document.getElementById("down");

      // console.log("image", image);

      if (image != null) {
        image.src = blob;
        document.querySelector("#image").src = image.src;
      }

      if (down != null) {
        down.href = blob;
        down.download = "save.png";
      }

      if (image == null && down == null) {
        alert("Image donsen't have any background.");
      }
    });
    // setSelectedImage("bgEight");
  };

  const ImagePicker = (imgURL) => {
    console.log("imgURL", imgURL);
    setSelectedImage(
      imgURL && imgURL?.toString().split("/media/")[1].split(".")[0]
    );
  };
  console.log("imgURL", selectedImage);
  const exportRef = useRef();
  const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png", 5.0);
    downloadImage(image, imageFileName);
  };
  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };

  return (
    <div className="row py-4">
      <div className="col-lg-6 mx-auto text-center">
        <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
          <input
            id="upload"
            type="file"
            onChange={imgUpload}
            className="form-control border-0"
          />
          <label
            id="upload-label"
            for="upload"
            className="font-weight-light text-muted"
          >
            Choose file
          </label>

          <div className="input-group-append">
            <label for="upload" className="btn btn-light m-0 rounded-pill px-4">
              {" "}
              <i className="fa fa-cloud-upload mr-2 text-muted"></i>
              <small className="text-uppercase font-weight-bold text-muted">
                Choose file
              </small>
            </label>
          </div>
        </div>
        <button
          className="btn btn-outline-light remove-button"
          onClick={uploadImage}
        >
          Remove Background
        </button>
        <div>
          <div className="row py-4">
            <div className="col-lg-6 mx-auto text-center">
              <div className="image-area mt-4 justify-content-center">
                {status === false ? (
                  <div class="lds-roller mb-3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <img
                    id="imageResult"
                    src="#"
                    alt=""
                    className="img-fluid rounded shadow-sm mx-auto d-block"
                  />
                )}{" "}
              </div>
              {status ? (
                <a id="down">
                  <button className="btn btn-light down-button">
                    {" "}
                    <i className="fas fa-download" /> Download
                  </button>
                </a>
              ) : null}
            </div>
          </div>
          <h5 className="" color="white" style={{ color: "white" }}>
            Choose Background
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginLeft: 75,
              // width:1000
            }}
          >
            <ImagePickerComp ImageHandle={(imgURL) => ImagePicker(imgURL)} />
          </div>

          <h5 className="" color="white" style={{ color: "white", margin: 20 }}>
            Selected Image and Background
          </h5>

          <div
            style={{ position: "relative", width: "fit-content", right: 80 }}
            ref={exportRef}
          >
            {/* {console.log("selectedImage",selectedImage)} */}
            <img
              // id="imageResult1"
              src={`image/${
                selectedImage === null ? "bgEight" : selectedImage
              }.jpg`}
              alt=""
              style={{ top: 0, left: 0 }}
              // className="img-fluid rounded shadow-sm mx-auto d-block"
              height={500}
              width={800}
            />

            <Draggable>
              <Resizable
                lockAspectRatio={true}
                style={{ position: "absolute", top: 0, left: 30 }}
              >
                <img id="image" height={400} width={600}></img>
              </Resizable>
            </Draggable>
          </div>
        </div>
        <div style={{ marginBottom: 50 }}>
          <button
            className="btn btn-light"
            style={{ marginTop: 30 }}
            onClick={() => exportComponentAsJPEG(exportRef)}
          >
            Export As JPEG
          </button>

          <button
            className="btn btn-light"
            style={{ marginTop: 30, marginLeft: 40 }}
            onClick={() => exportComponentAsPNG(exportRef)}
          >
            Export As PNG
          </button>
        </div>
      </div>
    </div>
  );
}
