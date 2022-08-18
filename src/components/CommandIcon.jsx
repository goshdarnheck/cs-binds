import { commands } from '../utils/commands';
import { ReactComponent as IconSmoke } from '../icons/smoke.svg'
import { ReactComponent as IconHe } from '../icons/he.svg'
import { ReactComponent as IconMolly } from '../icons/molly.svg'
import { ReactComponent as IconFlashbang } from '../icons/flashbang.svg'
import { ReactComponent as IconKnife } from '../icons/knife.svg'

const ICONS_COMMAND = {
  smoke: <IconSmoke />,
  he: <IconHe />,
  molly: <IconMolly />,
  flashbang: <IconFlashbang />,
  knife: <IconKnife />
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
