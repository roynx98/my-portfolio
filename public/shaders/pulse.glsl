precision mediump float;

uniform vec2 resolution;
uniform float time;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  uv -= 0.5;
  uv.y *= (resolution.y / resolution.x);

  vec3 color = vec3(0);

  float d = length(uv);
  float r = 0.07;

  float fc = smoothstep(r, r - 0.01, d);
  color = mix(color, vec3(fc), 0.8);

  float t = fract(time / 2.0);

  if (t >= 0.4) {
    float tn = (t - 0.4) / 0.6;
    float nr = r + tn * 0.2;
    float sc = smoothstep(nr, nr - 0.01, d);
    color = mix(color, vec3(sc), 0.8 - tn);
  }

  vec3 rc = color * vec3(1, 0, 0);
  gl_FragColor = vec4(rc, 1);
}