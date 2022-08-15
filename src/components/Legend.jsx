import { COMMAND_TYPES } from '../utils/commands';
import '../styles/Legend.css';

function Legend() {
  return (
    <div className="legend">
      {Object.keys(COMMAND_TYPES).map((ctype) => {
        return (
          <div key={ctype} className={`legend-${ctype}`}>
            {COMMAND_TYPES[ctype]}
          </div>
        )
      })}
    </div>
  );
}

export default Legend
