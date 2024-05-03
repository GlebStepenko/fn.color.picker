import {constDefaultColors} from './library.const';

export function getRandomPaletteColor(): string{
  const index = Math.floor(Math.random() * constDefaultColors.length)
  return constDefaultColors[index]
}
