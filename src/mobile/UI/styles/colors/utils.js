import {add, subtract, compose, curry} from 'ramda'
//
//const blue = {
//  a: 60,  // 0-100
//  h: 250, // 0-360 - Around 0 and 360 are reds 120 are greens, 240 are blues.
//  l: 90, // 0-100
//  s: 80 // 0-100
//
//}

export const hslaToString = (hsla) => `hsla(${hsla.h}, ${hsla.s}%, ${hsla.l}%, ${hsla.a / 100})`
export const hsla = (h, s, l ,a) => ({ h, s, l, a, string:function(){return hslaToString(this)}})
export const hsl = (h, s, l ) =>  hsla(h, s, l, 100)

const clamp = curry((min, max, value) => {
  if (value < min) return min
  if (value > max) return max
  return value
})

const clampTo100 = clamp(0, 100)

const clampHue = (value) => value % 360 // modulo(__, 360)
const absHue = (value) => {
  while(value < 360) {
    value = value + 360
  }
  return value
}

const updateColorProp = (prop) => curry((color, value) => ({...color, [prop]: value}))
const updateHue = updateColorProp('h')
const updateSaturation = updateColorProp('s')
const updateLightness = updateColorProp('l')
const updateAlpha = updateColorProp('a')

// const updateLightness = curry((color, value) => ({...color, l: value}))
// const updateSaturation = curry((color, value) => ({...color, s: value}))
// const updateHue = curry((color, value) => ({...color, h: value}))

export const updateLightnessAndClamp = (color) => compose(updateLightness(color), clampTo100)
export const updateSaturationAndClamp = (color) => compose(updateSaturation(color), clampTo100)
export const updateAlphaAndClamp = (color) => compose(updateAlpha(color), clampTo100)
export const updateHueAndClamp = (color) => compose(updateHue(color), clampHue, absHue)

export const lighten = (color, value) => compose(updateLightnessAndClamp(color), add(color.l))(value)
export const darken = (color, value) => compose(updateLightnessAndClamp(color), subtract(color.l))(value)
export const saturate = (color, value) => compose(updateSaturationAndClamp(color), add(color.l))(value)
export const desaturate = (color, value) => compose(updateSaturationAndClamp(color), subtract(color.l))(value)
export const changeHue = (color, value) => compose(updateHueAndClamp(color), add(color.h))(value)
export const opacify = (color, value) => compose(updateAlphaAndClamp(color), add(color.a))(value)
export const transparentize = (color, value) =>compose(updateAlphaAndClamp(color), subtract(color.a))(value)
