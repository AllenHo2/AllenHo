import { Warp } from '@paper-design/shaders-react';

export default function Background({children}: {children: React.ReactNode}) {
  return (
    <Warp
      width="100%"
      height="100%"
      colors={["#121212", "#878787", "#ffffff", "#000000", "#878787", "#ffffff", "#000000", "#878787", "#ffffff"]}
      proportion={0.5}
      softness={1}
      distortion={0.25}
      swirl={0.8}
      swirlIterations={10}
      shape="checks"
      shapeScale={0.1}
      speed={1.3}
    >
      {children}
    </Warp>
  );
}
