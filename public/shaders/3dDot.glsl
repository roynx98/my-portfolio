precision mediump float;

uniform vec2 resolution;
uniform float time;

float distanceFromRayToDot(vec3 origin, vec3 ray, vec3 myDot) {
  vec3 originToDot = myDot - origin;

  float area = length(cross(ray, originToDot));
  float width = length(ray);

  float height = area / width;

  return height;
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  uv -= 0.5;
  uv.y *= (resolution.y / resolution.x);

  vec3 rayOrigin = vec3(0.0, 0.0, -2.0);
  vec3 rayToScreen = vec3(uv.x, uv.y, 0) - rayOrigin;

  float z = 1.0;
  vec3 dotPos = vec3(sin(time) * .5, 0.0, cos(time) + 1.0);

  float d = distanceFromRayToDot(rayOrigin, rayToScreen, dotPos);
  float r = 0.1;

  gl_FragColor = vec4(vec3(smoothstep(r - 0.01, r, d)), 1.0);
}