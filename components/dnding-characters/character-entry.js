import { PropTypes } from 'prop-types'

export function CharacterEntry ({ name, xpPerLevel, xp }) {
  return (
    <div className="character">
        <div className="character-name">{name}</div>
        <div className="legend">
        <div className="left"></div>
        {(() => {
          const aResult = []
          for (let i = 0; i < xpPerLevel[xpPerLevel.length - 1] + 1; i++) {
            aResult.push(<div key={`legend-${i}`} className="middle">{xpPerLevel.includes(i) ? xpPerLevel.indexOf(i) + 1 : ''}</div>)
          }

          return aResult
        })()}
        <div className="right"></div>
        </div>
        <div className="bar">
          <div className="left"></div>
          {(() => {
            const aResult = []
            for (let i = 0; i < xpPerLevel[xpPerLevel.length - 1]; i++) {
              aResult.push(<div key={`bar-${i}`} className={`middle${i < xp ? '-filled' : ''}${xpPerLevel.includes(i + 1) ? ' level-tick' : ''}`}></div>)
            }

            return aResult
          })()}
          <div className="right"></div>
        </div>
      </div>
  )
}

CharacterEntry.propTypes = {
  name: PropTypes.any,
  xpPerLevel: PropTypes.any,
  xp: PropTypes.any
}
