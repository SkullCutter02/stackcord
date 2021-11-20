import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";

const Whiteboard: React.FC = () => {
  const [saveableCanvas, setSaveableCanvas] = useState<CanvasDraw>(null);

  return (
    <>
      <div style={{ margin: "40px 0" }}>
        <div>
          <CanvasDraw
            ref={(canvasDraw) => setSaveableCanvas(canvasDraw)}
            brushColor={"#000"}
            brushRadius={1}
            lazyRadius={0}
            canvasHeight={400}
            style={{ width: "100%" }}
            hideGrid
          />
        </div>
        <div>
          <button
            type={"button"}
            onClick={() => {
              saveableCanvas.clear();
            }}
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm6.605-17.581l-10.677 10.68 5.658 5.659 10.676-10.682-5.657-5.657z" />
            </svg>
          </button>
          <button
            type={"button"}
            onClick={() => {
              saveableCanvas.undo();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M18.885 3.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.073.1 4.341 4.341 1.737 12.291-5.491 12.291v4.8c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z" />
            </svg>
          </button>
          {/*<button*/}
          {/*  type={"button"}*/}
          {/*  onClick={() => {*/}
          {/*    console.log(saveableCanvas.getSaveData());*/}
          {/*    alert("DataURL written to console");*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <svg*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*    width="24"*/}
          {/*    height="24"*/}
          {/*    viewBox="0 0 24 24"*/}
          {/*  >*/}
          {/*    <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />*/}
          {/*  </svg>*/}
          {/*</button>*/}
        </div>
      </div>
    </>
  );
};

export default Whiteboard;
