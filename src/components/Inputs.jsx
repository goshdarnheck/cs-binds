function Inputs({ pastedText, onPastedChange }) {
  return (
    <div className="inputs">
      <textarea value={pastedText} onChange={onPastedChange} />
    </div>
  );
}

export default Inputs
