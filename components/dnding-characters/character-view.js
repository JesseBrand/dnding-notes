import { CharacterEntry } from './character-entry.js'
import { getAllCharacters, getXpPerLevel } from './character-manager.js'

export default function CharacterView () {
  const characters = getAllCharacters()
  const _trimToRange = (aXpPerLevel) => {
    const iMaxXp = Math.max(...characters.map(oCharacter => { return oCharacter.xp }))
    return aXpPerLevel.slice(0, aXpPerLevel.filter(iXp => iXp <= iMaxXp).length + 1)
  }
  const xpPerLevel = _trimToRange(getXpPerLevel())

  const renderCharacters = () => (
    characters.map(oCharacter => <CharacterEntry key={oCharacter.name} name={oCharacter.name} xp={oCharacter.xp} xpPerLevel={xpPerLevel}></CharacterEntry>)
  )

  return (
    <div className="character-viewer">
      <h1>Characters</h1>
      {renderCharacters()}
    </div>)
}
