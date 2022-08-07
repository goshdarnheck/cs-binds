function Mouse({ binds }) {
  console.log(binds)
  return (
    <div className="mouse">
      <div className="mouse-body">
        <div
          className={`mouse-key mouse-key-1 ${binds['mouse1'] ? 'bound' : ''}`}
          title={`${binds['mouse1'] ? binds['mouse1'] : ''}`}
        >
          <span>1</span>
        </div>
        <div
          className={`mouse-key mouse-key-2 ${binds['mouse2'] ? 'bound' : ''}`}
          title={`${binds['mouse2'] ? binds['mouse2'] : ''}`}
        >
          <span>2</span>
        </div>
        <div
          className={`mouse-key mouse-key-up ${binds['mwheelup'] ? 'bound' : ''}`}
          title={`${binds['mwheelup'] ? binds['mwheelup'] : ''}`}
        >
          <span>up</span>
        </div>
        <div
          className={`mouse-key mouse-key-down ${binds['mwheeldown'] ? 'bound' : ''}`}
          title={`${binds['mwheeldown'] ? binds['mwheeldown'] : ''}`}
        >
          <span>down</span>
        </div>
        <div
          className={`mouse-key mouse-key-3 ${binds['mouse3'] ? 'bound' : ''}`}
          title={`${binds['mouse3'] ? binds['mouse3'] : ''}`}
        >
          <span>3</span>
        </div>
        <div
          className={`mouse-key mouse-key-4 ${binds['mouse4'] ? 'bound' : ''}`}
          title={`${binds['mouse4'] ? binds['mouse4'] : ''}`}
        >
          <span>4</span>
        </div>
        <div
          className={`mouse-key mouse-key-5 ${binds['mouse5'] ? 'bound' : ''}`}
          title={`${binds['mouse5'] ? binds['mouse5'] : ''}`}
        >
          <span>5</span>
        </div>
      </div>
    </div>
  );
}

export default Mouse
