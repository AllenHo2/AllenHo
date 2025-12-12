import { Warp } from '@paper-design/shaders-react';

export default function Background({children}: {children: React.ReactNode}) {
  return (
    <Warp
      width="100%"
      height="100%"
      colors={["#121212", "#7301fe", "#1858bf", "#000000", "#7301fe", "#1858bf", "#121212", "#1858bf"]}
      proportion={1.5}
      softness={0.4}
      distortion={0.25}
      swirl={0.8}
      swirlIterations={5}
      shape="edge"
      shapeScale={0.05}
      speed={1}
    >
    {children}
    </Warp>
  );
}
