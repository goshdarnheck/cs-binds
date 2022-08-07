function Inputs({ pastedText, onPastedChange }) {
  return (
    <div className="inputs">
      <label htmlFor="input-config">Paste your CS:GO config or autoexec here:</label>
      <textarea id="input-config" value={pastedText} onChange={onPastedChange} />
    </div>
  );
}

export default Inputs
