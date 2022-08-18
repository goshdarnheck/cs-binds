const TYPE_MOVEMENT = 'ctype-movement';
const TYPE_SLOT = 'ctype-slot';
const TYPE_ACTION = 'ctype-action';
const TYPE_COMMS = 'ctype-comms';
const TYPE_BUY = 'ctype-buy';

const COMMAND_TYPES = {
  [TYPE_MOVEMENT]: 'Movement',
  [TYPE_SLOT]: 'Equipment',
  [TYPE_ACTION]: 'Actions',
  [TYPE_COMMS]: 'Communication',
  [TYPE_BUY]: 'Buying'
};

const commands = {
  '+moveleft': { type: TYPE_MOVEMENT },
  '+moveright': { type: TYPE_MOVEMENT },
  '+back': { type: TYPE_MOVEMENT },
  '+forward': { type: TYPE_MOVEMENT },
  'slot0': { type: TYPE_SLOT },
  'slot1': { type: TYPE_SLOT },
  'slot2': { type: TYPE_SLOT },
  'slot3': { type: TYPE_SLOT },
  'slot4': { type: TYPE_SLOT },
  'slot5': { type: TYPE_SLOT },
  'slot6': { type: TYPE_SLOT, icon: 'he' },
  'slot7': { type: TYPE_SLOT },
  'slot8': { type: TYPE_SLOT, icon: 'smoke' },
  'slot9': { type: TYPE_SLOT },
  'slot10': { type: TYPE_SLOT },
  'slot11': { type: TYPE_SLOT },
  'slot12': { type: TYPE_SLOT },
  'slot13': { type: TYPE_SLOT },
  'lastinv': { type: TYPE_SLOT },
  'invprev': { type: TYPE_SLOT },
  'invnext': { type: TYPE_SLOT },
  'buymenu': { type: TYPE_BUY },
  'buyammo1': { type: TYPE_BUY },
  'buyammo2': { type: TYPE_BUY },
  'autobuy': { type: TYPE_BUY },
  'rebuy': { type: TYPE_BUY },
  '+reload': { type: TYPE_ACTION },
  '+use': { type: TYPE_ACTION },
  'drop': { type: TYPE_ACTION },
  '+spray_menu': { type: TYPE_ACTION },
  '+voicerecord': { type: TYPE_COMMS },
  'messagemode': { type: TYPE_COMMS },
  'messagemode2': { type: TYPE_COMMS },
  'radio': { type: TYPE_COMMS },
  '+radialradio': { type: TYPE_COMMS },
  '+radialradio2': { type: TYPE_COMMS },
  '+radialradio3': { type: TYPE_COMMS },
  'player_ping': { type: TYPE_COMMS }
}

export { commands, COMMAND_TYPES };