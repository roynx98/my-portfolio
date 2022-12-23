
precision mediump float;

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

float sm(float a, float b) {
  float k = -0.3;
  float i = clamp((a - b) / k + 0.5, 0.0, 1.0);
  float j = i * (i - 1.0) * k;
  return (1.0 - i) * a + b * i + j * 0.5;
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  uv -= 0.5;
  uv.y *= (resolution.y / resolution.x);
  uv.y += 0.1;

  float r = 0.25;
  vec2 nm = mouse / resolution;

  float b = 0.01 + nm.y * r;
  uv.y -= sm(sqrt(abs(uv.x) * 0.2), b);
  uv.y += b * 0.3;
  uv.x *= 0.8;

  float d = length(uv);
  float s = smoothstep(r + b, r - b, d);

  vec3 color = vec3(1.0, 0.0, 0.0) * s;

  gl_FragColor = vec4(color, 1);
}