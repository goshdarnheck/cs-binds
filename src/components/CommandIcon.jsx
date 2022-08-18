import { commands } from '../utils/commands';
import { ReactComponent as IconSmoke } from '../icons/smoke.svg'
import { ReactComponent as IconHe } from '../icons/he.svg'

const ICONS_COMMAND = {
  smoke: <IconSmoke />,
  he: <IconHe />
};

function CommandIcon({ bind }) {
  if (!commands[bind] || !commands[bind].icon) {
    return null;
  }

  return (
    <div className="command-icon">
      {ICONS_COMMAND[commands[bind].icon]}
    </div>
  );
}

export default CommandIcon
