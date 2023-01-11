import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActionStatus } from "../features/removeBackground";
import loadImage from "blueimp-load-image";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import axios from "axios";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import popicon from "../assets/popimg.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Resizable } from "re-resizable";
import { ResizableBox } from "react-resizable";
import "../App.css";
// import ImgOne from "../assets/bgOne.jpg";
// import ImgTwo from "../assets/bgTwo.jpg";
// import ImgThree from "../assets/bgThree.jpg";
// import ImgFour from "../assets/bgFour.jpg";
import InformationModal from "./InfoModal";
import ImgFive from "../assets/carimg1.png";
// import ImgSix from "../assets/bgSix.jpg";
import ImagePickerComp from "./ImagePickerComp";
import { useEffect } from "react";
import Draggable from "react-draggable";

import { textAlign } from "@mui/system";
import { Link, Navigate } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import HomePage from "../StripeSub/HomePage";

export default function RemoveBackground() {
  const status = useSelector((state) => state.status.bgRemoved);
  const userDataRedux = useSelector((state) => state.status.userLogin);
  const [ImageVisible, setImageVisible] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  let blob = null;

  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState("bg1");
  const [WatermarkVisible, setWatermarkVisible] = useState(true);
  const [ImageEdit, setEdit] = useState(false);

  const [ImageDownloadAuth, setImageDownloadAuth] = useState(false);

  const [carBgImg, setCarBgImg] = useState();

  const [open, setOpen] = React.useState(false);
  const [StripeModal, setStripeModal] = React.useState(false);
  const [InfoModal, setInfoModal] = React.useState(false);
  const [ImageBg, setImageBg] = React.useState();
  const [showPick, setshowPick] = useState(true);
  const [BorderVisible, setBorderVisible] = useState(true);
  const [isPurchase, setIsPurchase] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const stripePromise = loadStripe(
    "pk_live_51LdYReIWc2J4BeGZWZb8kFwHtv4VNZls8jLlNIqm1MDWmPUuEgBKb6o1ECDe0iUoAqQCfl7OHg0LvrpcROGwwCTo00HCSMCI1u"
  );

  const [file, setFile] = useState();
  const [Logofile, setlogoFile] = useState();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  function handleChange(e) {
    setshowPick(false);
    // console.log("e.target.files", e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  async function handleLogoChange(e) {
    // console.log("e.target.files", e.target.files);
    //console.log("t----");
    const resizedImage = await loadImage(e.target.files[0], {
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
      formData.append("type", "auto");
      formData.append("format", "auto");
      formData.append("semitransparency", true);
      formData.append("roi", "0% 0% 100% 100%");
      formData.append("type_level", "1");

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          //"X-Api-Key": "tZbLuXH6qjgwFJdawQkCr9VU",
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

      console.log("myblob", blob);

      setlogoFile(blob);
      if (blob != null) {
        setlogoFile(blob);
      }
      if (blob == null) {
        setlogoFile(URL.createObjectURL(e.target.files[0]));
        // alert("Image donsen't have any background.");
      }
    });

    // console.log("URL.createObjectURL(e.target.files[0])", URL.createObjectURL(e.target.files[0]))
  }

  useEffect(() => {
    // debugger;
    setWatermarkVisible(userDataRedux?.loggedIn?.is_user_subscribe);
    // let tokenData = userDataRedux?.loggedIn?.is_user_subscribe;
    // console.log("tokenData", tokenData)
    setSelectedImage("bg1");
  }, [userDataRedux?.loggedIn]);

  // console.log("watermark", WatermarkVisible);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const imgUpload = (e) => {
    const img = e.target.files[0];
    var input = document.getElementById("upload");
    var infoArea = document.getElementById("upload-label");
    var fileName = input.files[0].name;
    infoArea.textContent = "File name: " + fileName;

    setImage(img);
  };

  // var input = document.getElementById("logo");
  // var infoArea = document.getElementById("logo-label");
  // var fileName = input.files[0].name;
  // infoArea.textContent = "File name: " + fileName;

  const uploadImage = async () => {
    setEdit(true);
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
        // console.log(response)
        dispatch(setActionStatus(true));
      } else {
        dispatch(setActionStatus(false));
      }

      const outputBlob = await response.blob();

      blob = URL.createObjectURL(outputBlob);

      setCarBgImg(blob);

      const image = document.getElementById("imageResult");
      const down = document.getElementById("down");

      // console.log("image", image);

      if (image != null) {
        image.src = blob;
        // document.querySelector("#image").src = image.src;
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

  // console.log("BorderVisible && carBgImg !== undefined", BorderVisible && carBgImg !== undefined)

  const ImagePicker = (imgURL) => {
    // debugger;

    console.log("imgURL", imgURL.includes("base64"));

    setFile(undefined);
    setshowPick(true);

    // setSelectedImage(
    //   imgURL
    // );
    setSelectedImage(
      imgURL && imgURL.includes("base64")
        ? "bg5"
        : imgURL?.toString().split("/media/")[1].split(".")[0]
    );
  };
  // console.log("imgURL",selectedImage)
  const exportRef = useRef();
  const exportAsImage = async (el, imageFileName) => {
    setBorderVisible(false);

    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
    setBorderVisible(true);
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
  // console.log("se",selectedImage)

  const handleStop = (event, dragElement) => {
    setX(dragElement.x);
    setY(dragElement.y);
  };

  const imageDownload = async () => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    // console.log(userData);

    let userSubscribe = userDataRedux?.loggedIn?.is_user_subscribe;
    let tokenData = userDataRedux?.loggedIn?.token;

    console.log("userDataRedux", userDataRedux?.loggedIn?.token);

    if (tokenData === null || tokenData === undefined) {
      handleOpen();
    } else {
      // debugger;
      await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_URL + "api/V1/user/download",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${tokenData}`,
        },
      })
        .then((res) => {
          // setImageDownloadAuth(res?.data?.data?.is_downloaded)
          if (res?.data?.data?.is_downloaded) {
            exportAsImage(exportRef.current, "Image");
          } else {
            // setInfoModal(true);

            tokenData && setStripeModal(true);

            // alert("Buy a monthly subscription plan for download the more images.");
            // navigate("/")
          }
          //  console.log("Response",res?.data?.data)
        })
        .catch((e) => {
          console.log(e);
        });

      // if(userSubscribe)
      // {

      // }

      // console.log("res?.data?.data", ImageDownloadAuth)
    }
  };

  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL";

  const handleInfoClose = () => {
    setInfoModal(false);
  };

  const handleStripeClose = () => {
    // debugger;
    setStripeModal(false);
  };

  const handlePurchaseAPI = () => {
    // console.log("Payment Done.")
    setIsPurchase(true);
  };

  const IMG = (imgName) => {
    console.log(".jpeg`", `./../image/${imgName}.jpeg`);
    return require(`./../image/${imgName}.jpeg`);
  };

  return (
    <section className="removebg_mainblog">
      <div className="container-fluid">
        <div className="row py-4 wd-sl-main">
          <div className="col-lg-12 mx-auto text-center">
            <h1 class="title d-block text-center">
              Select image and Choose Background
              <svg
                width="82"
                height="3"
                viewBox="0 0 82 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 0H68L65 3H0L3 0Z" fill="#0D1C6D"></path>
                <path d="M70 0H75L72 3H67L70 0Z" fill="#0D1C6D"></path>
                <path d="M77 0H82L79 3H74L77 0Z" fill="#D62B56"></path>
              </svg>
            </h1>
            <div className="bgchange_remove">
              <div className="row">
                <div className="col-lg-5">
                  <div className="grpof_inputs">
                    <div className="input-group rounded-pill bg-white outer-input">
                      <input
                        id="upload"
                        type="file"
                        onChange={(e) => imgUpload(e)}
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
                        <label for="upload" className="upload-icon">
                          {" "}
                          <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                          {/* <small className="text-uppercase font-weight-bold text-muted">
                              Choose file
                            </small> */}
                        </label>
                      </div>
                      <button className="remove-button" onClick={uploadImage}>
                        Remove Background
                      </button>
                    </div>
                  </div>
                  <div className="imageupload_rightsec">
                    <div className="image-area justify-content-center">
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
                        ImageEdit && (
                          <img
                            id="imageResult"
                            src="#"
                            alt=""
                            className="img-fluid rounded shadow-sm mx-auto d-block"
                          />
                        )
                      )}
                    </div>
                    {status ? (
                      <a id="down">
                        <button className="down-button">
                          {" "}
                          <i className="fas fa-download" />
                        </button>
                      </a>
                    ) : null}
                  </div>
                  <div className="part_flexbg">
                    <ImagePickerComp
                      ImageHandle={(imgURL) => ImagePicker(imgURL)}
                      pickShow={showPick}
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div id="mobileview" className="grp-uploadstuff">
                    <div className="upload-stuff">
                      <input
                        type="file"
                        id="mylogo"
                        name="mylogo"
                        onChange={handleLogoChange}
                      ></input>
                      <label for="mylogo" class="upload-icon">
                        {" "}
                        <i
                          class="fa fa-cloud-upload mr-2 text-muted"
                          aria-hidden="true"
                        ></i>
                        Upload Logo
                      </label>
                    </div>
                    <div className="upload-stuff">
                      <input
                        type="file"
                        id="myBgAdd"
                        onChange={handleChange}
                      ></input>
                      <label for="myBgAdd" class="upload-icon">
                        {" "}
                        <i
                          class="fa fa-cloud-upload mr-2 text-muted"
                          aria-hidden="true"
                        ></i>
                        Upload Background
                      </label>
                    </div>
                  </div>

                  <div
                    className={
                      !WatermarkVisible
                        ? " bgimg_blog"
                        : "bgimg_blog bgimg_blog_remove"
                    }
                    ref={exportRef}
                    style={{ overflowY: "hidden" }}
                  >
                    {console.log(
                      "file",
                      `image/${
                        selectedImage === null ? "bg1" : selectedImage
                      }.jpeg`
                    )}

                    {file === undefined ? (
                      <img
                        className="outer-img"
                        // id="imageResult1"

                        // src={`../assets/${selectedImage === null ? "bgTw" : selectedImage}.jpeg`}
                        src={`image/${
                          selectedImage === null ? "bg1" : selectedImage
                        }.jpeg`}
                        alt=""
                      />
                    ) : (
                      // <img src={require("../assets/bgEleven.jpeg")} alt="Sunset View on Beach" />
                      <img
                        className="outer-img"
                        style={{ width: "100%", height: 600 }}
                        // id="bgImage"
                        src={file}
                        alt=""
                      />
                    )}
                    {/* <img src={file} alt="data" /> */}
                    {/* <Draggable>
                        <Resizable
                          defaultSize={{
                            width: 200,
                            height: 360
                          }}
                          style={{
                            background: `url(${imageUrl})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                          }}
                          lockAspectRatio={true}
                        >
                        </Resizable>
                      </Draggable> */}
                    {/* {console.log("carBgImg", carBgImg)} */}

                    <Draggable>
                      <Resizable
                        defaultSize={{
                          width: 410,
                          height: 350,
                        }}
                        style={{
                          backgroundImage: `url(${carBgImg})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          border:
                            BorderVisible && carBgImg !== undefined
                              ? "1px solid"
                              : "none",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                        lockAspectRatio={true}
                      ></Resizable>
                    </Draggable>

                    <Resizable
                      lockAspectRatio={true}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    >
                      <img src={Logofile} className="logo_draggable" alt="" />
                    </Resizable>

                    {/* <span className="water_mark">PicGround</span> */}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="export-btn"
                      // onClick={handleOpen}
                      onClick={imageDownload}
                      // onClick={() => exportAsImage(exportRef.current, "Image")}
                      style={{ marginTop: 23, cursor: "pointer" }}
                      onMouseEnter={() => setBorderVisible(false)}
                      onMouseLeave={() => setBorderVisible(true)}
                    >
                      Export As PNG
                    </button>

                    <div id="desktopview" className="grp-uploadstuff">
                      <div className="upload-stuff">
                        <input
                          type="file"
                          id="mylogo"
                          name="mylogo"
                          onChange={handleLogoChange}
                        ></input>
                        <label for="mylogo" class="upload-icon">
                          {" "}
                          <i
                            class="fa fa-cloud-upload mr-2 text-muted"
                            aria-hidden="true"
                          ></i>
                          Upload Logo
                        </label>
                      </div>
                      <div className="upload-stuff">
                        <input
                          type="file"
                          id="myBgAdd"
                          onChange={handleChange}
                        ></input>
                        <label for="myBgAdd" class="upload-icon">
                          {" "}
                          <i
                            class="fa fa-cloud-upload mr-2 text-muted"
                            aria-hidden="true"
                          ></i>
                          Upload Background
                        </label>
                      </div>
                    </div>
                    <Modal
                      className="modal-remove_bg"
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <a
                          href="#"
                          className="dismiss-icon"
                          onClick={handleClose}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.6584 0.164062L6.00008 4.8224L1.34175 0.164062L0.166748 1.33906L4.82508 5.9974L0.166748 10.6557L1.34175 11.8307L6.00008 7.1724L10.6584 11.8307L11.8334 10.6557L7.17508 5.9974L11.8334 1.33906L10.6584 0.164062Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          <img
                            src={popicon}
                            alt="images"
                            className="modal-image"
                          />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Please Login / Register yourself and buy the monthly
                          subscription plan to download the edited image.
                        </Typography>
                        <div className="button-grp">
                          <Link to="/login">
                            <button type="submit" className="btn-log_reg me-2">
                              Login
                            </button>
                          </Link>
                          <Link to="/register">
                            <button type="submit" className="btn-log_reg">
                              Register
                            </button>
                          </Link>
                        </div>
                      </Box>
                    </Modal>
                    <InformationModal
                      message={
                        "Buy a monthly subscription plan for download the more images."
                      }
                      routing={"/"}
                      open={InfoModal}
                      handleInfoClose={handleInfoClose}
                    />
                    <Modal
                      className="modal-remove_bg"
                      open={StripeModal}
                      onClose={handleStripeClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                        <Elements stripe={stripePromise}>
                          <HomePage
                            handleClose={handleStripeClose}
                            purchaseHandler={handlePurchaseAPI}
                          />
                        </Elements>
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
