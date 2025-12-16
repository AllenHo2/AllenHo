"use client"
import { LiquidMetal } from "@paper-design/shaders-react";

export default function Alloy(){
  return (
  <div
    style={{
      width: 300,
      height: 300,
      borderRadius: 90,
      overflow: "hidden",
    }}
  >
    <LiquidMetal
      width={300}
      height={300}
      image="https://shaders.paper.design/images/logos/diamond.svg"
      colorBack="#000000"
      colorTint="#ffffff"
      shape="diamond"
      repetition={1}
      softness={0.1}
      shiftRed={0.3}
      shiftBlue={0.3}
      distortion={0.07}
      contour={0.4}
      angle={70}
      speed={0.8}
      scale={0.6}
      fit="contain"
    />
  </div>
  )
}
