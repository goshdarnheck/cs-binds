import '../styles/Info.css';

function Info() {
  return (
    <div className="info">
      <h2>Where Is Your CS:GO Config File</h2>
      <p>The newer location is: <code>C:\Program Files (x86)\Steam\userdata\[YOUR_STEAM_ID]\730\local\cfg</code></p>
      <p>The old location is: <code>C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\cfg</code></p>
      <h2>Other Files</h2>
      <p>If you have an autoexec file you can also use this tool to view the key binds set in it.</p>
      <p>Config files from other source games like TF2 should work as well.</p>
      <h2>Credit</h2>
      <p>Created by <a href="https://twitter.com/goshdarnheck" target="_blank" rel="noreferrer">@goshdarnheck</a>, if you have any issues or questions tweet at me or open an issue on the <a href="https://github.com/goshdarnheck/cs-binds/issues" target="_blank" rel="noreferrer">Github repository</a>.</p>
    </div>
  );
}

export default Info
