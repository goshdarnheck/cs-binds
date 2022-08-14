import Key from './Key';

function KeyboardSixty({ binds }) {
  return (
    <div className="kb">
      <div className="kb-main">
        <div>
          <Key label="Esc" bind={binds['escape']} />
          <Key label="1" bind={binds['1']} />
          <Key label="2" bind={binds['2']} />
          <Key label="3" bind={binds['3']} />
          <Key label="4" bind={binds['4']} />
          <Key label="5" bind={binds['5']} />
          <Key label="6" bind={binds['6']} />
          <Key label="7" bind={binds['7']} />
          <Key label="8" bind={binds['8']} />
          <Key label="9" bind={binds['9']} />
          <Key label="0" bind={binds['0']} />
          <Key label="-" bind={binds['-']} />
          <Key label="=" bind={binds['=']} />
          <Key label="←" bind={binds['backspace']} widthMultiplier={2.09} />
        </div>
        <div>
          <Key label="Tab" bind={binds['tab']} widthMultiplier={1.53} />
          <Key label="Q" bind={binds['q']} />
          <Key label="W" bind={binds['w']} />
          <Key label="E" bind={binds['e']} />
          <Key label="R" bind={binds['r']} />
          <Key label="T" bind={binds['t']} />
          <Key label="Y" bind={binds['y']} />
          <Key label="U" bind={binds['u']} />
          <Key label="I" bind={binds['i']} />
          <Key label="O" bind={binds['o']} />
          <Key label="P" bind={binds['p']} />
          <Key label="[" bind={binds['[']} />
          <Key label="]" bind={binds[']']} />
          <Key label="\" bind={binds['\\']} widthMultiplier={1.53} />
        </div>
        <div>
          <Key label="Caps Lk" bind={binds['capslock']} widthMultiplier={1.82} />
          <Key label="A" bind={binds['a']} />
          <Key label="S" bind={binds['s']} />
          <Key label="D" bind={binds['d']} />
          <Key label="F" bind={binds['f']} />
          <Key label="G" bind={binds['g']} />
          <Key label="H" bind={binds['h']} />
          <Key label="J" bind={binds['j']} />
          <Key label="K" bind={binds['k']} />
          <Key label="L" bind={binds['l']} />
          <Key label=";" bind={binds[';']} />
          <Key label="'" bind={binds['\'']} />
          <Key label="Enter" bind={binds['enter']} widthMultiplier={2.35} />
        </div>
        <div>
          <Key label="Shift" bind={binds['shift']} widthMultiplier={2.35} />
          <Key label="Z" bind={binds['z']} />
          <Key label="X" bind={binds['x']} />
          <Key label="C" bind={binds['c']} />
          <Key label="V" bind={binds['v']} />
          <Key label="B" bind={binds['b']} />
          <Key label="N" bind={binds['n']} />
          <Key label="M" bind={binds['m']} />
          <Key label="," bind={binds[',']} />
          <Key label="." bind={binds['.']} />
          <Key label="/" bind={binds['/']} />
          <Key label="Shift" bind={binds['rshift']} widthMultiplier={2.88} />
        </div>
        <div>
          <Key label="Ctrl" bind={binds['ctrl']} widthMultiplier={1.3} />
          <Key label="Win" bind={binds['win']} widthMultiplier={1.3} />
          <Key label="Alt" bind={binds['alt']} widthMultiplier={1.3} />
          <Key label="Space" bind={binds['space']} widthMultiplier={6.8} />
          <Key label="Alt" bind={binds['ralt']} widthMultiplier={1.3} />
          <Key label="☰" bind={binds['_no_bind']} widthMultiplier={1.3} />
          <Key label="Ctrl" bind={binds['rctrl']} widthMultiplier={1.3} />
          <Key label="FN" bind={binds['_no_bind']} widthMultiplier={1.3} />
        </div>
      </div>
    </div>
  );
}

export default KeyboardSixty
