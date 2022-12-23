#define uResolution resolution

precision mediump float;

uniform vec2 uResolution;

float remap01(float s, float e, float d) {
  return clamp((d - s) / (e - s), 0.0, 1.0);
}

float remap(float s1, float e1, float s2, float e2, float d) {
  return remap01(s1, e1, d) * (e2 - s2) + s2;
}

vec2 within(vec2 uv, vec4 rect) {
  return (uv - rect.xy) / (rect.zw - rect.xy);
}

vec4 head(vec2 uv) {
  vec4 col = vec4(0.9, 0.65, 0.1, 1.0);
  float d = length(uv);

  // Make a circle
  col.a = smoothstep(0.5, 0.49, d);

  float edgeShade = remap01(.35, .5, d);
  edgeShade *= edgeShade;
  col.rgb *= (1.0 - edgeShade * 0.5);

  // Make border
  col.rgb = mix(col.rgb, vec3(0.6, 0.3, 0.1), smoothstep(0.47, 0.48, d));

  // lights
  float highlight = smoothstep(0.41, 0.40, d);
  highlight *= remap(-0.1, 0.41, 0.0, 0.75, uv.y);
  col.rgb = mix(col.rgb, vec3(1.0), highlight);

  d = length(uv - vec2(0.25, -0.2));
  float cheek = smoothstep(0.2, 0.01, d) * 0.4;
  cheek *= smoothstep(0.17, 0.16, d);
  col.rgb = mix(col.rgb, vec3(1.0, 0.1, 0.1), cheek);

  return col;
}

vec4 eye(vec2 uv) {
  uv -= 0.5;

  float d = length(uv);
  vec4 color = vec4(1.0);

  vec3 irisColor = vec3(0.3, 0.5, 1.0);
  color.rgb = mix(color.rgb, irisColor, smoothstep(0.1, 0.7, d) * 0.5);

  color *= (1.0 - smoothstep(0.45, 0.50, d) * 0.5 * clamp(-uv.y - uv.x, 0.0, 1.0));

  color.rgb = mix(color.rgb, vec3(0.0), smoothstep(0.3, 0.28, d));

  irisColor *= (1.0 + smoothstep(0.3, 0.05, d));
  color.rgb = mix(color.rgb, irisColor, smoothstep(0.28, 0.25, d));

  color.rgb = mix(color.rgb, vec3(0.0), smoothstep(0.16, 0.14, d));

  float highlight = smoothstep(0.1, 0.09, length(uv - vec2(-0.15, 0.15)));
  highlight +=  smoothstep(0.07, 0.05, length(uv + vec2(-0.08, 0.08)));
  color.rgb = mix(color.rgb, vec3(1.0), highlight);

  color.a = smoothstep(0.5, 0.48, d);

  return color;
}

vec4 mouth(vec2 uv) {
  uv -= 0.5;
  uv.y *= 1.5;
  uv.y -= uv.x * uv.x * 2.0;

  vec4 color = vec4(0.5, 0.18, 0.05, 1.0);

  float d = length(uv);
  color.a = smoothstep(0.5, 0.48, d);

  vec3 toothColor = vec3(1.0) * smoothstep(0.6, 0.35, d);
  float td = length(uv - vec2(0.0, 0.6));
  color.rgb = mix(color.rgb, toothColor, smoothstep(0.4, 0.37, td));

  td = length(uv + vec2(0.0, 0.5));
  color.rgb = mix(color.rgb, vec3(1.0, 0.5, 0.5), smoothstep(0.5, 0.2, td));

  return color;
}

vec4 smiley(vec2 uv) {
  vec4 col = vec4(0);

  uv.x = abs(uv.x);

  vec4 head = head(uv);
  col = mix(col, head, head.a);

  vec4 eye = eye(within(uv, vec4(0.03, -0.1, 0.37, 0.25)));
  col = mix(col, eye, eye.a);

  vec4 mouth = mouth(within(uv, vec4(-0.3, -0.4, 0.3, -0.1)));
  col = mix(col, mouth, mouth.a);

  return col;
}

void main(void) {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float ar = resolution.y / uResolution.x;

  uv -= 0.5;
  uv.y *= ar;

  gl_FragColor = smiley(uv);
}