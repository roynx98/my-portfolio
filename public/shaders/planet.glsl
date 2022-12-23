precision mediump float;

uniform vec2 resolution;
uniform float time;

float randomNoise(vec2 p) {
  return fract(6791.*sin(47.*p.x+p.y*9973.));
}

float smoothNoise(vec2 p) {
  vec2 c = vec2(p.x, p.y);
  vec2 t = vec2(p.x, p.y+1.);
  vec2 b = vec2(p.x, p.y-1.);
  vec2 l = vec2(p.x - 1.0, p.y);
  vec2 r = vec2(p.x + 1.0, p.y);
  
  float sum = 0.0;
  sum += (randomNoise(c) / 2.0);
  sum += (randomNoise(t) / 8.0);
  sum += (randomNoise(r) / 8.0);
  sum += (randomNoise(l) / 8.0);
  sum += (randomNoise(b) / 8.0);
  
  return sum;
}

float interpolatedNoise(vec2 p) {
  float q11 = smoothNoise(vec2(floor(p.x), floor(p.y)));
  float q12 = smoothNoise(vec2(floor(p.x), ceil(p.y)));
  float q21 = smoothNoise(vec2(ceil(p.x), floor(p.y)));
  float q22 = smoothNoise(vec2(ceil(p.x), ceil(p.y)));
  
  vec2 s = smoothstep(0., 1., fract(p));

  float r1 = mix(q11, q21, s.x);
  float r2 = mix(q12, q22, s.x);
  
  return mix (r1, r2, s.y);
}

vec3 getColor(float r, float g, float b) {
  return vec3(r / 255.0, g / 255.0, b / 255.0);
}

vec4 sphere(vec2 uv) {
  vec4 color = vec4(0.0, 1.0, 0.0, 1);
  float r = 0.4;
  float d = length(uv);
  float z = sqrt(r*r - uv.x*uv.x - uv.y*uv.y);
  vec3 normal = normalize(vec3(uv.x, uv.y, z));
  vec3 light = normalize(vec3(0.4, 0.3, 1.0));
  
  float tiles = 4.0;
  vec2 cuv = uv * tiles;
  cuv.x += time / 0.6;
  float noiseMask = interpolatedNoise(cuv);
  color.rgb = mix(color.rgb, vec3(1, 0.0, 1.0), noiseMask);

  color.rgb *= max(0.0, dot(normal, light));

  color.a = smoothstep(r, r - 0.01, d);
  return color;
}

vec4 planet(vec2 uv) {
  vec4 col = vec4(1, 1, 1, 1);

  vec4 sphere = sphere(uv);
  col = mix(col, sphere, sphere.a);

  return col;
}

void main(void) {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  float ar = resolution.y / resolution.x;
  uv -= 0.5;
  uv.y *= ar;

  gl_FragColor = planet(uv);
}