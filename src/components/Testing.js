import { React, useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import Stickers from "./Stickers";

const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "white",
    id: "rect1"
  }
];
function Testing() {
  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  const dragUrl = useRef();
  const stageRef = useRef();
  const [images, setImages] = useState([]);

  return (
    <div>
      Try to trag and image into the stage:
      <br />
      <img
        alt="lion"
        src="https://konvajs.org/assets/lion.png"
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      <img
        alt="yoda"
        src="https://konvajs.org/assets/yoda.jpg"
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      <div
        onDrop={(e) => {
          e.preventDefault();
          // register event position
          stageRef.current.setPointersPositions(e);
          // add image
          console.log( images.concat([
            {
              ...stageRef.current.getPointerPosition(),
              src: dragUrl.current,
              id: images.length
            }
          ]))
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current,
                id: images.length
              }
            ])
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={375}
          height={window.innerHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          style={{ border: "1px solid grey" }}
          ref={stageRef}
        >
            {console.log("image",images)}
          <Layer>
            {images.map((image, i) => {
                console.log("data",image)
              return (
                <Stickers
                  key={i}
                  offsetX={image ? image.width / 2 : 0}
                  offsetY={image ? image.height / 2 : 0}
                  shapeProps={image}
                  isSelected={image.id === selectedId}
                  onSelect={() => {
                    selectShape(image.id);
                  }}
                  onChange={(newAttrs) => {
                    const imgs = images.slice();
                    imgs[i] = newAttrs;
                    setImages(imgs); //setRectangles(rects);
                  }}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default Testing;
