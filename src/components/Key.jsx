import { commands } from '../utils/commands';
import CommandIcon from './CommandIcon';

function Key({ label, bind, style, widthMultiplier }) {
  return (
    <div
      title={`${bind ? bind : ''}`}
      style={{
        width: widthMultiplier ? `${widthMultiplier * 3}em` : '3em',
        ...style
      }}
      className={
        `kb-key
        ${bind ? 'bound' : ''}
        ${commands[bind] ? commands[bind].type : 'ctype-other'}`}
    >
      <span className="kb-key-label">{label}</span>
      <CommandIcon bind={bind} />
    </div>
  );
}

export default Key
