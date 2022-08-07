function Keyboard({ keys, binds }) {

  return (
    <div className="keyboard">
      {keys.rows.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map(key => (
            <div
              key={key.code}
              className={`keyboard-key ${binds[key.code] ? 'bound' : ''}`}
              style={{ width: key.width ? key.width : '2em'}}
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
