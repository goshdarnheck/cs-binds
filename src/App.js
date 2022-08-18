import { useState, useEffect } from 'react';
import parseConfig from './utils/parseConfig';
import KeyboardSixty from './components/KeyboardSixty';
import KeyboardFull from './components/KeyboardFull';
import Legend from './components/Legend';
import Mouse from './components/Mouse';
import Inputs from './components/Inputs';
import Info from './components/Info';
import stock from "./configs/stock";
import "normalize.css/normalize.css";
import './styles/App.css';
import './styles/Keyboard.css';

const KEYBOARD_TYPE_FULL = 'full';
const KEYBOARD_TYPE_SIXTY = 'sixty';
const KEYBOARD_TYPES = [KEYBOARD_TYPE_FULL, KEYBOARD_TYPE_SIXTY];

function App() {
  const [keyboardType, setkeyboardType] = useState(KEYBOARD_TYPES[0]);
  const [configText, setConfigText] = useState(stock);
  const [configFileSelected, setConfigFileSelected] = useState(false);
  const [binds, setBinds] = useState(stock);

  useEffect(() => {
    setBinds(parseConfig(configText));
  }, [configText])

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
          {keyboardType === KEYBOARD_TYPE_SIXTY && <KeyboardSixty binds={binds} />}
        </div>
        <Legend />
        <div className="inputs-mouse-wrapper">
          <Inputs
            configText={configText}
            configFileSelected={configFileSelected}
            onConfigTextChange={ev => setConfigText(ev.target.value)}
            onChangeFile={ev => {
              if (ev.target.files && ev.target.files[0].name) {
                setConfigFileSelected(true);
              }
            }}
            loadFile={() => {
              const configFileInput = document.querySelector('#config-file');

              if (configFileInput.files && configFileInput.files.length > 0) {
                const file = configFileInput.files[0];
                const reader = new FileReader();
              
                reader.readAsText(file, "UTF-8");
                reader.onload = () => setConfigText(reader.result);
                reader.onerror = () => alert(reader.error);
              }
            }}
          />
          <Mouse binds={binds} />
        </div>
        <Info />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
