import { commands } from '../utils/commands';

function Keyboard({ keys, binds }) {
  return (
    <div className="keyboard">
      {keys.rows.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map(key => (
            <div
              key={key.code}
              className={
                `keyboard-key
                ${binds[key.code] ? 'bound' : ''}
                ${commands[binds[key.code]] ? commands[binds[key.code]].type : 'ctype-other'}`
              }
              style={{ width: key.ratio ? `${key.ratio * 3}em` : '3em'}}
              title={`${binds[key.code] ? binds[key.code] : ''}`}
            >
              {key.label}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard
