import React from "react";

const imgIcon = "http://localhost:3845/assets/a2e749208737a8cd456907f6aa07192b4f1d0645.svg";

function ArrowRight({ size = "48" }) {
  if (size === "24") {
    return (
      <div className="relative size-full" data-name="Size=24" data-node-id="2518:2302">
        <div className="absolute inset-[20.833%]" data-name="Icon" data-node-id="2518:2308">
          <div className="absolute inset-[-8.929%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" }}>
            <img alt="" className="block max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default ArrowRight;