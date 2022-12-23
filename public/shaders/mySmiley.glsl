precision mediump float;

uniform vec2 uResolution;

vec2 within(vec2 uv, vec4 rect) {
  return (uv - rect.xy) / (rect.zw - rect.xy);
}

float remap01(float a, float b, float p) {
  return clamp((p - a) / (b - a), 0.0, 1.0);
}

vec4 Head(vec2 uv) {
  vec4 color = vec4(0.9, 0.65, 0.1, 1.0);
  float d = length(uv);
  float r = 0.4;

  color.a = smoothstep(r, r - 0.01, d);

  float edgeShade = remap01(0.3, 0.4, d);
  edgeShade *= edgeShade;
  color.rgb *= (1.0 - edgeShade * 0.6);

  float lights = smoothstep(r * 0.8, r * 0.8 - 0.01, d) * 0.7;
  lights *= remap01(-0.1, r * 0.8, uv.y);
  color.rgb = mix(color.rgb, vec3(1.0), lights);

  float nd = length(uv + vec2(-0.2, 0.15));
  float cheek = smoothstep(0.13, 0.009, nd);
  cheek *= smoothstep(0.12, 0.11, nd);
  color.rgb = mix(color.rgb, vec3(1.0, 0.0, 0.0), cheek * 0.3);

  return color;
}

vec4 Eye(vec2 uv) {
  uv -= 0.5;
  float d = length(uv);
  vec4 color = vec4(1.0);

  vec3 irisColor = vec3(0.3, 0.5, 1.0);

  color.rgb = mix(color.rbg, irisColor, smoothstep(0.1, 0.7, d) * 0.5);

  color.rgb *= (1.0 - smoothstep(0.45, 0.5, d) * 0.5 * clamp(-uv.y - uv.x, 0.0, 1.0));

  color.rgb = mix(color.rgb, vec3(0), smoothstep(0.3, 0.28, d));

  irisColor *= (1.0 + smoothstep(.3, 0.06, d));
  color.rgb = mix(color.rgb, irisColor, smoothstep(0.27, 0.25, d));

  color.rgb = mix(color.rgb, vec3(0), smoothstep(0.15, 0.13, d));

  color.rgb = mix(color.rgb, vec3(1.0), smoothstep(0.10, 0.08, length(uv + vec2(0.15, -0.13))));

  color.rgb = mix(color.rgb, vec3(1.0), smoothstep(0.06, 0.04, length(uv + vec2(-0.08, 0.10))));

  color.a = smoothstep(0.5, 0.47, d);

  return color;
}

vec4 Mouth(vec2 uv) {
  uv.y -= uv.x * uv.x * 2.0;
  float d = length(uv);

  vec4 color = vec4(0.5, 0.18, 0.05, 1.0);

  float nd = length(uv - vec2(0.0, 0.5));
  vec3 tc = vec3(1.0) * smoothstep(0.7, 0.3, d);
  color.rgb = mix(color.rgb, tc, smoothstep(0.4, 0.35, nd));

  nd = length(uv + vec2(0.0, .5));
  color.rgb = mix(color.rgb, vec3(1.0, 0.5, 0.5), smoothstep(0.5, 0.2, nd));

  color.a = smoothstep(0.5, 0.483, d);

  return color;
}

vec4 Smiley(vec2 uv) {
  vec4 color = vec4(0.0);
  uv.x = abs(uv.x);

  vec4 head = Head(uv);
  color = mix(color, head, head.a);
  
  vec2 pos = vec2(0.03, -0.06);
  vec4 eye = Eye(within(uv, vec4(pos.x, pos.y, 0.26 + pos.x, 0.26 + pos.y)));
  color = mix(color, eye, eye.a);

  vec2 mouthPos = vec2(0.0, -0.2);
  vec4 mouth = Mouth(within(uv, vec4(mouthPos.x, mouthPos.y, 0.5 + mouthPos.x, 0.16 + mouthPos.y)));
  color = mix(color, mouth, mouth.a);

  return color;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  uv -= 0.5;
  uv.y *= uResolution.y / uResolution.x;

  vec4 smiley = Smiley(uv);

  gl_FragColor = vec4(smiley.rgb, 1.0);
}