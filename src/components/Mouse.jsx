import { commands } from '../utils/commands';
import '../styles/Mouse.css';

function Mouse({ binds }) {
  return (
    <div className="mouse">
      <div className="mouse-body">
        <div
          className={
            `mouse-key
            mouse-key-1 ${binds['mouse1'] ? 'bound' : ''}
            ${commands[binds['mouse1']] ? commands[binds['mouse1']].type : 'ctype-other'}`
          }
          title={`${binds['mouse1'] ? binds['mouse1'] : ''}`}
        >
          <span>1</span>
        </div>
        <div
          className={
            `mouse-key
            mouse-key-2 ${binds['mouse2'] ? 'bound' : ''}
            ${commands[binds['mouse2']] ? commands[binds['mouse2']].type : 'ctype-other'}`
          }
          title={`${binds['mouse2'] ? binds['mouse2'] : ''}`}
        >
          <span>2</span>
        </div>
        <div
          className={
            `mouse-key
            mouse-key-up ${binds['mwheelup'] ? 'bound' : ''}
            ${commands[binds['mwheelup']] ? commands[binds['mwheelup']].type : 'ctype-other'}`
          }
          title={`${binds['mwheelup'] ? binds['mwheelup'] : ''}`}
        >
          <span>↑</span>
        </div>
        <div
          className={
            `mouse-key
            mouse-key-down ${binds['mwheeldown'] ? 'bound' : ''}
            ${commands[binds['mwheeldown']] ? commands[binds['mwheeldown']].type : 'ctype-other'}`
          }
          title={`${binds['mwheeldown'] ? binds['mwheeldown'] : ''}`}
        >
          <span>↓</span>
        </div>
        <div
          className={
            `mouse-key
            mouse-key-3 ${binds['mouse3'] ? 'bound' : ''}
            ${commands[binds['mouse3']] ? commands[binds['mouse3']].type : 'ctype-other'}`
          }
          title={`${binds['mouse3'] ? binds['mouse3'] : ''}`}
        >
          <span>3</span>
        </div>
        <div
          className={
            `mouse-key
            mouse-key-4 ${binds['mouse4'] ? 'bound' : ''}
            ${commands[binds['mouse4']] ? commands[binds['mouse4']].type : 'ctype-other'}`
          }
          title={`${binds['mouse4'] ? binds['mouse4'] : ''}`}
        >
          <span>4</span>
        </div>
        <div
          className={
            `mouse-key
            mouse-key-5 ${binds['mouse5'] ? 'bound' : ''}
            ${commands[binds['mouse5']] ? commands[binds['momouse5use1']].type : 'ctype-other'}`
          }
          title={`${binds['mouse5'] ? binds['mouse5'] : ''}`}
        >
          <span>5</span>
        </div>
      </div>
    </div>
  );
}

export default Mouse
