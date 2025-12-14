import { Water } from '@paper-design/shaders-react';

export default function Background({children}: {children: React.ReactNode}) {
  return (

    <Water
      width="100%"
      height="100%"
      colorBack="#000000"
      colorHighlight="#fff5f5"
      highlights={0.26}
      layering={1}
      edges={1}
      waves={1}
      caustic={1}
      size={1.9}
      speed={0.25}
      scale={1.72}
      fit="contain"
    >
    {children}
    </Water>
  );
}
