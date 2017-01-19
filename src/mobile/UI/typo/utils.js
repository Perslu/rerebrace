import { hRatio, baseFont } from './constants'
import {add, subtract, compose, curry} from 'ramda'

export const calcFromFont = (base) => (ratio) => base * ratio

export const calcFromBaseFont = calcFromFont(baseFont)

export const getHeaderRatio = (h) => hRatio[h-1]

export const calcHeaderFont = compose(calcFromBaseFont, getHeaderRatio)
