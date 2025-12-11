"use client"
import { useEffect, useRef, useState } from "react";

// Performance modes
type PerformanceMode = 'high' | 'balanced' | 'low';

interface ShaderBackgroundProps {
  children: React.ReactNode;
  performanceMode?: PerformanceMode;
}

export default function ShaderBackground({
  children,
  performanceMode = 'balanced'
}: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Performance settings
    const settings = {
      high: { triangles: 12, scale: 1.0, precision: 'highp', collisions: true },
      balanced: { triangles: 8, scale: 0.75, precision: 'mediump', collisions: false },
      low: { triangles: 6, scale: 0.5, precision: 'mediump', collisions: false }
    };

    const config = settings[performanceMode];

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader with optimizations
    const fragmentShaderSource = `
      precision ${config.precision} float;
      uniform vec2 resolution;
      uniform float time;

      #define PI 3.14159265359
      #define TAU 6.28318530718

      // Optimized rotation (pre-calculated in loop)
      mat2 rotate2D(float angle) {
        float c = cos(angle);
        float s = sin(angle);
        return mat2(c, -s, s, c);
      }

      // Simplified triangle SDF
      float triangleSDF(vec2 p, float size) {
        const float k = 1.732050808; // sqrt(3) pre-calculated
        p.x = abs(p.x) - size;
        p.y = p.y + size / k;
        if(p.x + k * p.y > 0.0) p = vec2(p.x - k * p.y, -k * p.x - p.y) * 0.5;
        p.x -= clamp(p.x, -2.0 * size, 0.0);
        return -length(p) * sign(p.y);
      }

      // Kaleidoscope effect (optimized)
      vec2 kaleidoscope(vec2 uv, float segments) {
        float angle = atan(uv.y, uv.x);
        float radius = length(uv);
        float segmentAngle = TAU / segments;
        angle = mod(angle, segmentAngle);
        angle = abs(angle - segmentAngle * 0.5);
        return vec2(cos(angle), sin(angle)) * radius;
      }

      // Simplified triangle rendering
      vec3 getTriangle(vec2 uv, float index, float t) {
        // Pre-calculate motion
        float phase = index * 2.1;
        vec2 center = vec2(
          sin(t * 0.7 + phase) * 0.8,
          cos(t * 0.5 + phase + 1.0) * 0.8
        );

        vec2 p = uv - center;

        // Rotation (cached sin/cos)
        float rotation = t * 0.3 + index * 2.094; // TAU/3 pre-calculated
        p = rotate2D(rotation) * p;

        // Static size (removed pulsing for performance)
        float size = 0.15 + index * 0.01;

        float dist = triangleSDF(p, size);
        float triangle = smoothstep(0.02, 0.0, dist);

        // Simplified color (less mixing)
        vec3 color = mix(
          vec3(0.255, 0.0, 0.549),
          vec3(0.208, 0.686, 0.949),
          fract(index * 0.618)
        );

        // Reduced glow
        float glow = exp(-dist * 2.0) * 0.2;

        return (color * triangle) + (color * glow);
      }

      ${config.collisions ? `
      // Collision effect (only in high mode)
      float getCollisionEffect(vec2 uv, float i1, float i2, float t) {
        vec2 c1 = vec2(sin(t * 0.7 + i1 * 2.1) * 0.8, cos(t * 0.5 + i1 * 3.7) * 0.8);
        vec2 c2 = vec2(sin(t * 0.7 + i2 * 2.1) * 0.8, cos(t * 0.5 + i2 * 3.7) * 0.8);
        float dist = distance(c1, c2);
        if(dist < 0.4) {
          vec2 mid = (c1 + c2) * 0.5;
          float impactDist = distance(uv, mid);
          return exp(-impactDist * 8.0) * (sin(t * 20.0) * 0.5 + 0.5) * 0.5;
        }
        return 0.0;
      }
      ` : ''}

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / min(resolution.x, resolution.y);

        // Kaleidoscope
        vec2 kaleido = kaleidoscope(uv, 8.0);
        vec2 mixedUV = mix(uv, kaleido, 0.7);

        // Simple background
        vec3 finalColor = vec3(0.05, 0.02, 0.1);
        finalColor += vec3(0.1, 0.05, 0.15) * (1.0 - length(uv) * 0.5);

        // Pre-calculate time
        float t = time * 0.5;

        // Draw triangles (count based on performance mode)
        ${Array.from({ length: config.triangles }, (_, i) =>
          `finalColor += getTriangle(mixedUV, ${i}.0, t);`
        ).join('\n        ')}

        ${config.collisions ? `
        // Collision effects (high mode only)
        float collisionGlow = 0.0;
        collisionGlow += getCollisionEffect(mixedUV, 0.0, 1.0, t);
        collisionGlow += getCollisionEffect(mixedUV, 1.0, 2.0, t);
        collisionGlow += getCollisionEffect(mixedUV, 2.0, 3.0, t);
        finalColor += vec3(1.0, 0.8, 0.3) * collisionGlow;
        ` : ''}

        // Vignette
        finalColor *= 1.0 - length(uv) * 0.4;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Compile shader
    function compileShader(source: string, type: number): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positions = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      1, 1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "resolution");
    const timeLocation = gl.getUniformLocation(program, "time");

    // Resize with scale factor for performance
    function resizeCanvas() {
      if (!canvas) return;
      const dpr = config.scale; // Reduced resolution
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Visibility detection - pause when hidden
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Animation loop with conditional rendering
    let startTime = Date.now();
    let lastFrame = startTime;
    const targetFPS = performanceMode === 'low' ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    function render() {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }

      const now = Date.now();
      const elapsed = now - lastFrame;

      // Throttle framerate for low mode
      if (elapsed >= frameInterval) {
        const currentTime = (now - startTime) / 1000;

        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        gl.uniform1f(timeLocation, currentTime);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        lastFrame = now - (elapsed % frameInterval);
      }

      animationRef.current = requestAnimationFrame(render);
    }

    render();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, [performanceMode, isVisible]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
          // Image rendering for scaled canvas
          imageRendering: performanceMode === 'low' ? 'auto' : 'high-quality',
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </>
  );
}
