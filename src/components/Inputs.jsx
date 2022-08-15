import '../styles/Inputs.css';

function Inputs({ configText, configFileSelected, onConfigTextChange, onChangeFile, loadFile }) {
  return (
    <div className="inputs">
      <div className="inputs-paste">
        <div className="label-wrapper">
          <label htmlFor="input-config">Paste your CS:GO config or autoexec here:</label>
        </div>
        <textarea id="input-config" value={configText} onChange={onConfigTextChange} />
      </div>
      <div className="inputs-file">
        <div className="label-wrapper">
          <label htmlFor="config-file">Or select your config file:</label>
        </div>
        <input type="file" id="config-file" onChange={onChangeFile} />
        <button disabled={!configFileSelected} onClick={loadFile}>Import Selected File</button>
      </div>
    </div>
  );
}

export default Inputs
