import { useState } from 'react';
import Keyboard from './components/Keyboard';
import Inputs from './components/Inputs';
import sixtyPercent from "./keyboards/sixty-percent.json";
import test from "./configs/test";
import './App.css';

function parseConfig(config) {
  const binds = {};
  const lines = config.trim().split(/\r?\n|\r|\n/g);

  lines.forEach(line => {
    const parts = line.trim().split(/\s+/);

    if (parts[0] === 'bind') {
      const code = parts[1].replace(/['"]+/g, '');
      const command = parts[2].replace(/['"]+/g, '');

      binds[code.toLowerCase()] = command;
    }
  })

  return binds;
}

function App() {
  const [pastedText, setPastedText] = useState(test);

  const binds = parseConfig(pastedText);

  return (
    <div>
      <header>
        <h1>CS:GO Keybind Visualizer</h1>
        <div id="settings">
          <label htmlFor="keyboard-type">Keyboard</label>
          <select id="keyboard-type">
            <option>60% Keyboard</option>
          </select>
        </div>
      </header>
      <main>
        <Keyboard keys={sixtyPercent} binds={binds} />
        <Inputs
          pastedText={pastedText}
          onPastedChange={ev => setPastedText(ev.target.value)}
        />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
