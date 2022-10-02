import { commands } from '../utils/commands';
import { ReactComponent as IconSmoke } from '../icons/smoke.svg'
import { ReactComponent as IconHe } from '../icons/he.svg'
import { ReactComponent as IconMolly } from '../icons/molly.svg'
import { ReactComponent as IconFlashbang } from '../icons/flashbang.svg'
import { ReactComponent as IconKnife } from '../icons/knife.svg'
import { ReactComponent as IconSecondary } from '../icons/secondary.svg'
import { ReactComponent as IconPrimary } from '../icons/primary.svg'
import { ReactComponent as IconC4 } from '../icons/c4.svg'
import { ReactComponent as IconCycleNades } from '../icons/cycle-nades.svg'
import { ReactComponent as IconDecoy } from '../icons/decoy.svg'
import { ReactComponent as IconMediShot } from '../icons/medi-shot.svg'
import { ReactComponent as IconBuymenu } from '../icons/buymenu.svg'
import { ReactComponent as IconCancel } from '../icons/cancel.svg'
import { ReactComponent as IconArrowUp } from '../icons/arrow-up.svg'
import { ReactComponent as IconArrowDown } from '../icons/arrow-down.svg'
import { ReactComponent as IconArrowLeft } from '../icons/arrow-left.svg'
import { ReactComponent as IconArrowRight } from '../icons/arrow-right.svg'

const ICONS_COMMAND = {
  smoke: <IconSmoke />,
  he: <IconHe />,
  molly: <IconMolly />,
  flashbang: <IconFlashbang />,
  knife: <IconKnife />,
  secondary: <IconSecondary />,
  primary: <IconPrimary />,
  c4: <IconC4 />,
  cycleNades: <IconCycleNades />,
  decoy: <IconDecoy />,
  mediShot: <IconMediShot />,
  buymenu: <IconBuymenu />,
  cancel: <IconCancel />,
  arrowUp: <IconArrowUp />,
  arrowDown: <IconArrowDown />,
  arrowLeft: <IconArrowLeft />,
  arrowRight: <IconArrowRight />,
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
