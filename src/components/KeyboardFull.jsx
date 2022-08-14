import Key from './Key';
import '../styles/KeyboardFull.css';

function KeyboardFull({ binds }) {
  return (
    <div className="kb">
      <div className="kb-main">
        <div className="kb-main-top">
          <Key label="Esc" bind={binds['escape']} />
          <div>
            <Key label="F1" bind={binds['f1']} />
            <Key label="F2" bind={binds['f2']} />
            <Key label="F3" bind={binds['f3']} />
            <Key label="F4" bind={binds['f4']} />
          </div>
          <div>
            <Key label="F5" bind={binds['f5']} />
            <Key label="F6" bind={binds['f6']} />
            <Key label="F7" bind={binds['f7']} />
            <Key label="F8" bind={binds['f8']} />
          </div>
          <div>
            <Key label="F9" bind={binds['f9']} />
            <Key label="F10" bind={binds['f10']} />
            <Key label="F11" bind={binds['f11']} />
            <Key label="F12" bind={binds['f12']} />
          </div>
        </div>
        <div>
          <Key label="`" bind={binds['`']} />
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
      <div className="kb-middle">
        <div className="kb-controls">
          <Key label={<span>Print<br/>Screen</span>} bind={binds['_no_bind']} />
          <Key label={<span>Scroll<br/>Lock</span>} bind={binds['scrolllock']} />
          <Key label={<span>Pause<br/>Break</span>} bind={binds['pause']} />
          <Key label={<span>Insert</span>} bind={binds['ins']} />
          <Key label={<span>Home</span>} bind={binds['home']} />
          <Key label={<span>Page<br/>Up</span>} bind={binds['pgup']} />
          <Key label={<span>Delete</span>} bind={binds['del']} />
          <Key label={<span>End</span>} bind={binds['end']} />
          <Key label={<span>Page<br/>Down</span>} bind={binds['pgdn']} />
        </div>
        <div className="kb-arrows">
          <Key label="↑" bind={binds['uparrow']} style={{ gridArea: "up" }} />
          <Key label="←" bind={binds['leftarrow']} style={{ gridArea: "left" }} />
          <Key label="→" bind={binds['rightarrow']} style={{ gridArea: "right" }} />
          <Key label="↓" bind={binds['downarrow']} style={{ gridArea: "down" }} />
        </div>
      </div>
      <div className="kb-numpad">
        <div>
          <Key label={<span>Num<br/>Lock</span>} bind={binds['numlock']} />
          <Key label="/" bind={binds['kp_slash']} />
          <Key label="*" bind={binds['kp_multipy']} />
          <Key label="-" bind={binds['kp_minus']} />
          <Key label="7" bind={binds['kp_home']} />
          <Key label="8" bind={binds['kp_uparrow']} />
          <Key label="9" bind={binds['kp_uparrow']} />
          <Key label="4" bind={binds['kp_leftarrow']} />
          <Key label="5" bind={binds['kp_5']} />
          <Key label="6" bind={binds['kp_rightarrow']} />
          <Key label="1" bind={binds['kp_end']} />
          <Key label="2" bind={binds['kp_downarrow']} />
          <Key label="3" bind={binds['kp_pgdn']} />
          <Key label="0" bind={binds['kp_ins']} style={{ width: "auto", gridArea: "5 / 1 / 6 / 3"}} />
          <Key label="." bind={binds['kp_del']} />
          <Key label="+" bind={binds['kp_plus']} style={{ height: "auto", gridArea: "2 / 4 / 4 / 5"}} />
          <Key label={<span>Enter</span>} bind={binds['kp_enter']} style={{ height: "auto", gridArea: "4 / 4 / 6 / 5"}} />
        </div>
      </div>
    </div>
  );
}

export default KeyboardFull
