import { fetchAllCharacters } from '../../lib/persistency'

export function getAllCharacters () {
  return fetchAllCharacters()
}

export function getXpPerLevel () {
  return [0, 1, 3, 6, 10, 15, 20, 25, 30, 36, 42, 48, 54, 61, 68, 75, 82, 89, 97, 105]
}
