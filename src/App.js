import { useState } from 'react';
import Keyboard from './components/Keyboard';
import Mouse from './components/Mouse';
import Inputs from './components/Inputs';
import sixtyPercent from "./keyboards/sixty-percent.json";
import stock from "./configs/stock";
import './App.css';

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
  const [pastedText, setPastedText] = useState(stock);

  const binds = parseConfig(pastedText);

  return (
    <div className="wrapper">
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
        <div className="devices">
          <div><Keyboard keys={sixtyPercent} binds={binds} /></div>
          <div><Mouse binds={binds} /></div>
        </div>
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
