import { useState, useEffect } from 'react';
import KeyboardSixty from './components/KeyboardSixty';
import KeyboardFull from './components/KeyboardFull';
import Mouse from './components/Mouse';
import Inputs from './components/Inputs';
import sixtyPercent from "./keyboards/sixty-percent.json";
import stock from "./configs/stock";
import "normalize.css/normalize.css";
import './styles/App.css';

const KEYBOARD_TYPE_FULL = 'full';
const KEYBOARD_TYPE_SIXTY = 'sixty';
const KEYBOARD_TYPES = [KEYBOARD_TYPE_FULL, KEYBOARD_TYPE_SIXTY];

function parseConfig(config) {
  const binds = {};
  const lines = config.trim().split(/\r?\n|\r|\n/g);

  lines.forEach(line => {
    const parts = line.trim().match(/[^\s"']+|"[^"]*"|'[^']*'/g);

    if (parts && parts[0] === 'bind' && parts.length > 2) {
      const code = parts[1].replace(/['"]+/g, '');
      const command = parts[2].replace(/['"]+/g, '');

      binds[code.toLowerCase()] = command;
    }
  })

  return binds;
}

function App() {
  const [keyboardType, setkeyboardType] = useState(KEYBOARD_TYPES[0]);
  const [pastedText, setPastedText] = useState(stock);
  const [binds, setBinds] = useState(stock);

  useEffect(() => {
    setBinds(parseConfig(pastedText));
  }, [pastedText])

  return (
    <div>
      <header>
        <div>
          <h1>CS:GO Keybind Visualizer</h1>
          <div className="settings">
            <label htmlFor="keyboard-type">Keyboard:</label>
            <select
              id="keyboard-type"
              value={keyboardType}
              onChange={ev => setkeyboardType(ev.target.value)}
            >
              <option value={KEYBOARD_TYPE_FULL}>Full</option>
              <option value={KEYBOARD_TYPE_SIXTY}>60%</option>
            </select>
          </div>
        </div>
      </header>
      <main>
        <div className="keyboard-wrapper">
          {keyboardType === KEYBOARD_TYPE_FULL && <KeyboardFull binds={binds} />}
          {keyboardType === KEYBOARD_TYPE_SIXTY && <KeyboardSixty keys={sixtyPercent} binds={binds} />}
        </div>
        <div className="other-wrapper">
          <div>
            <Inputs
              pastedText={pastedText}
              onPastedChange={ev => setPastedText(ev.target.value)}
            />
          </div>
          <div><Mouse binds={binds} /></div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
