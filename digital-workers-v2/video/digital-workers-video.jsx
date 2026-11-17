(() => {
const { CompositionStage, useComposition, Easing, clamp, TweaksPanel, TweakSection, TweakToggle, useTweaks } = window;
const DS = window.TrioWorkforceSolutionsDesignSystem_6da10e || {};
const Icon = (p) => (DS.Icon ? <DS.Icon {...p} /> : null);

const C = {
  green: '#79BB43', greenLight: '#A6CE42', blue: '#0081BB', blueLight: '#00AAE5',
  orange: '#F58220', slate: '#455560', ink: '#232d35', dark: '#232d35', panel: '#2f3a43',
  darkBorder: '#38444e', darkText: '#e7ecef', darkMuted: '#97a3ab', page: '#f4f6f7',
  muted: '#6b7a84', okText: '#4e8a1f', okBg: '#eef6e3', warnText: '#b65e10', warnBg: '#fdf0e1',
  badText: '#b2343e', badBg: '#fce9ea',
};
const FONT = "'Open Sans', system-ui, sans-serif";
const HEX = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';

const prog = (T, s, d) => clamp((T - s) / d, 0, 1);
const MOTION = {
  enter: (T, s, d = 0.6) => Easing.easeOutCubic(prog(T, s, d)),
  draw: (T, s, d = 1) => Easing.easeInOutCubic(prog(T, s, d)),
  pop: (T, s, d = 0.5) => Easing.easeOutBack(prog(T, s, d)),
};
const lerp = (a, b, t) => a + (b - a) * t;
const hash = (i) => { const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };

function Mask({ T, inAt, outAt, children, style }) {
  const i = MOTION.enter(T, inAt, 0.6);
  const o = outAt == null ? 0 : MOTION.draw(T, outAt, 0.45);
  const hidden = T < inAt || (outAt != null && T > outAt + 0.5);
  return (
    <div style={{ overflow: 'hidden', paddingBottom: 32, marginBottom: -32, visibility: hidden ? 'hidden' : 'visible', ...style }}>
      <div style={{ transform: `translateY(calc(${(1 - i) * 110 - o * 110}% + ${(1 - i) * 32 - o * 32}px))` }}>{children}</div>
    </div>
  );
}

function Hex({ size, color, children, style }) {
  return (
    <div style={{ width: size, height: size * 0.866, flexShrink: 0, clipPath: HEX, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', ...style }}>{children}</div>
  );
}

function HexGrid({ T, stroke, opacity }) {
  const dx = (T * 6) % 84, dy = (T * 3) % 145.5;
  return (
    <svg width="2100" height="1300" style={{ position: 'absolute', left: -90, top: -150, opacity, transform: `translate(${dx}px, ${dy}px)` }}>
      <defs>
        <pattern id="hexgrid" width="84" height="145.5" patternUnits="userSpaceOnUse">
          <path d="M21 0 L63 0 L84 36.4 L63 72.75 L21 72.75 L0 36.4 Z M63 72.75 L84 109.1 L63 145.5 M21 72.75 L0 109.1 L21 145.5" fill="none" stroke={stroke} strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="2100" height="1300" fill="url(#hexgrid)" />
    </svg>
  );
}

/* ---------- Task board (shared by Volume + Meet) ---------- */
const TYPES = [
  { label: 'Timecard review', icon: 'shifts', c: C.blue },
  { label: 'Credential check', icon: 'tasks', c: C.green },
  { label: 'Submission screen', icon: 'submissions', c: C.orange },
  { label: 'Invoice match', icon: 'billing', c: C.blue },
  { label: 'Shift confirm', icon: 'calendar', c: C.green },
  { label: 'Bill rate check', icon: 'barChart', c: C.orange },
];
const UNITS = ['ICU • RN', 'ED • RN', 'Med-Surg • LPN', 'OR • CST', 'Tele • RN', 'L&D • RN', 'Rad • RT', 'Pharm • PharmD'];
const COLS = 8, ROWS = 6, CW = 214, CH = 96, GX = 16, GY = 16;
const BW = COLS * CW + (COLS - 1) * GX, BH = ROWS * CH + (ROWS - 1) * GY;
const SCAN = { start: 32.9, dur: 3.0 };
const CARDS = Array.from({ length: COLS * ROWS }, (_, i) => {
  const col = i % COLS, row = Math.floor(i / COLS);
  const x = col * (CW + GX), y = row * (CH + GY);
  const d = Math.hypot(x + CW / 2 - BW / 2, y + CH / 2 - BH / 2);
  return {
    i, x, y, type: TYPES[(i * 5 + row) % TYPES.length], unit: UNITS[(i * 3 + col) % UNITS.length],
    appear: 5.2 + (d / 1000) * 1.4 + hash(i) * 0.2,
    late: hash(i + 31) > 0.6 ? 8.6 + hash(i + 7) * 2.0 : null,
    done: SCAN.start + SCAN.dur * (x + CW / 2 + 40) / (BW + 80),
  };
});

function Pill({ kind, s }) {
  const m = { pending: ['Pending', C.warnBg, C.warnText], late: ['Past due', C.badBg, C.badText], done: ['Done', C.okBg, C.okText] }[kind];
  return (
    <div style={{ background: m[1], color: m[2], fontSize: 12, fontWeight: 700, padding: '3px 9px', borderRadius: 999, transform: `scale(${s})`, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>{m[0]}</div>
  );
}

function TaskCard({ T, card, light }) {
  const a = MOTION.pop(T, card.appear, 0.45);
  const isDone = T >= card.done;
  const isLate = !isDone && card.late != null && T >= card.late;
  const kind = isDone ? 'done' : isLate ? 'late' : 'pending';
  const flipAt = isDone ? card.done : isLate ? card.late : card.appear;
  const s = lerp(0.6, 1, MOTION.pop(T, flipAt, 0.35));
  const tc = isDone ? C.green : card.type.c;
  return (
    <div style={{
      position: 'absolute', left: card.x, top: card.y, width: CW, height: CH, boxSizing: 'border-box',
      background: light ? '#fff' : C.panel, border: `1px solid ${isLate ? (light ? '#f3c4c8' : '#6b3a40') : light ? '#eceef0' : C.darkBorder}`,
      borderRadius: 8, padding: '14px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      boxShadow: light ? '0 1px 2px rgba(35,45,53,.06), 0 2px 6px rgba(35,45,53,.06)' : 'none',
      opacity: clamp(a * 1.4, 0, 1), transform: `translateY(${(1 - a) * 24}px) scale(${lerp(0.85, 1, a)})`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 30, height: 30, borderRadius: 6, background: tc + '2e', color: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={isDone ? 'tasks' : card.type.icon} size={17} />
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: light ? C.ink : C.darkText, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{card.type.label}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ fontSize: 13, color: light ? C.muted : C.darkMuted, whiteSpace: 'nowrap' }}>{card.unit}</div>
        <Pill kind={kind} s={s} />
      </div>
    </div>
  );
}

function Board({ T, CUES }) {
  const light = T >= CUES.Meet;
  let s, op, ty;
  if (!light) {
    s = lerp(1.7, 1, MOTION.draw(T, CUES.Volume, 6.5)) * lerp(1, 0.92, MOTION.draw(T, CUES.Cost, 0.8));
    op = 1 - MOTION.draw(T, CUES.Cost, 0.7);
    ty = MOTION.draw(T, CUES.Cost, 0.8) * 60;
  } else {
    const a = MOTION.enter(T, CUES.Meet + 7.2, 0.7);
    const out = MOTION.draw(T, CUES.Outcome, 0.7);
    s = lerp(0.94, 1, a) * lerp(1, 0.92, out);
    op = a * (1 - out);
    ty = (1 - a) * 40 + out * 60;
  }
  if (op <= 0.001) return null;
  const tilt = light ? 0 : lerp(28, 0, MOTION.draw(T, CUES.Volume, 5.5));
  const scanP = prog(T, SCAN.start, SCAN.dur);
  const scanX = lerp(-40, BW + 40, scanP);
  const scanOn = light && T > SCAN.start - 0.3 && T < SCAN.start + SCAN.dur + 0.4;
  const scanOp = Math.min(MOTION.enter(T, SCAN.start - 0.3, 0.3), 1 - MOTION.enter(T, SCAN.start + SCAN.dur, 0.4));
  return (
    <div style={{ position: 'absolute', left: (1920 - BW) / 2, top: 352, width: BW, height: BH, opacity: op, transform: tilt > 0.01 ? `perspective(2400px) translateY(${ty}px) rotateX(${tilt}deg) scale(${s})` : `translateY(${ty}px) scale(${s})`, transformOrigin: `${BW / 2}px ${BH / 2}px` }}>
      {CARDS.map((c) => <TaskCard key={c.i} T={T} card={c} light={light} />)}
      {scanOn && (
        <React.Fragment>
          <div style={{ position: 'absolute', left: 0, top: -20, width: clamp(scanX, 0, BW), height: BH + 40, background: 'rgba(121,187,67,0.07)', opacity: scanOp }} />
          <div style={{ position: 'absolute', left: scanX - 2, top: -40, width: 4, height: BH + 80, background: C.blue, borderRadius: 2, boxShadow: '0 0 24px rgba(0,129,187,.55)', opacity: scanOp }} />
          <div style={{ position: 'absolute', left: scanX - 24, top: -142, display: 'flex', flexDirection: 'column', gap: 6, opacity: scanOp }}>
            <img src="assets/trio-mark.png" alt="" style={{ width: 52 }} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

function Counter({ T, value, color, label, sub, subColor, inAt, outAt, light }) {
  const a = MOTION.enter(T, inAt, 0.6), o = MOTION.draw(T, outAt, 0.5);
  if (a <= 0 || o >= 1) return null;
  return (
    <div style={{ position: 'absolute', right: 120, top: 140, textAlign: 'right', opacity: a * (1 - o), transform: `translateY(${(1 - a) * 20 - o * 20}px)` }}>
      <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.16em', color: light ? C.muted : C.darkMuted }}>{label}</div>
      <div style={{ fontSize: 112, fontWeight: 800, lineHeight: 1.05, color, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>{value.toLocaleString('en-US')}</div>
      <div style={{ fontSize: 22, fontWeight: 600, color: subColor, minHeight: 30 }}>{sub}</div>
    </div>
  );
}

/* ---------- Scenes ---------- */
const H1 = { fontSize: 128, fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.05, whiteSpace: 'nowrap' };

function Hook({ T, CUES }) {
  const t0 = CUES.Hook;
  const words = [
    { t: 'Every shift.', at: t0 + 0.2, icon: 'calendar', c: C.green },
    { t: 'Every timecard.', at: t0 + 1.1, icon: 'shifts', c: C.blue },
    { t: 'Every submission.', at: t0 + 2.0, icon: 'submissions', c: C.orange },
  ];
  const fin = t0 + 2.9;
  const mv = MOTION.draw(T, CUES.Volume, 0.8);
  const drift = 1;
  return (
    <React.Fragment>
      {words.map((w, k) => {
        const out = k < 2 ? words[k + 1].at : fin;
        if (T < w.at - 0.05 || T > out + 0.55) return null;
        const b = MOTION.pop(T, w.at, 0.5), bo = MOTION.draw(T, out, 0.4);
        const punch = lerp(1.14, 1, MOTION.enter(T, w.at, 0.7)) * lerp(1, 0.94, bo);
        return (
          <div key={k} style={{ position: 'absolute', left: 0, right: 0, top: 540, transform: `translateY(-50%) scale(${punch})`, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 44 }}>
            <Hex size={150} color={w.c} style={{ transform: `scale(${b * (1 - bo)}) rotate(${(1 - b) * -30}deg)` }}><Icon name={w.icon} size={64} width={2} /></Hex>
            <Mask T={T} inAt={w.at} outAt={out}><div style={{ ...H1, color: '#fff' }}>{w.t}</div></Mask>
          </div>
        );
      })}
      <div style={{
        position: 'absolute', left: lerp(960, 120, mv), top: lerp(540, 140, mv), transformOrigin: `${lerp(50, 0, mv)}% ${lerp(50, 0, mv)}%`,
        transform: `translate(${lerp(-50, 0, mv)}%, ${lerp(-50, 0, mv)}%) scale(${lerp(1.15 * drift, 0.6, mv)})`,
      }}>
        <Mask T={T} inAt={fin} outAt={CUES.Volume + 3.6}>
          <div style={{ ...H1, color: '#fff' }}>Still done <span style={{ color: C.orange }}>by hand.</span></div>
        </Mask>
      </div>
    </React.Fragment>
  );
}

function Volume({ T, CUES }) {
  const t0 = CUES.Volume;
  const n = Math.round(1284 * Easing.easeInCubic(prog(T, t0 + 0.4, 6.8)));
  const late = CARDS.filter((c) => c.late != null && T >= c.late).length;
  const hs = { fontSize: 77, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, whiteSpace: 'nowrap' };
  return (
    <React.Fragment>
      <div style={{ position: 'absolute', left: 120, top: 140 }}>
        <Mask T={T} inAt={t0 + 3.8} outAt={CUES.Cost}><div style={{ ...hs, color: '#fff' }}>And the queue</div></Mask>
        <Mask T={T} inAt={t0 + 4.0} outAt={CUES.Cost + 0.08}><div style={{ ...hs, color: C.orange }}>never stops.</div></Mask>
      </div>
      <Counter T={T} light={false} inAt={t0 + 0.4} outAt={CUES.Cost} label="OPEN TASKS" value={n}
        color={late > 0 ? '#f08a92' : '#fff'} sub={late > 0 ? `${late * 9} past due` : ''} subColor="#f08a92" />
    </React.Fragment>
  );
}

function WorkdayBar({ T, y, widths, fills, colors, labels, labelOp, light, op, extra }) {
  const X = 160, W = 1600, Hh = 92, gap = 6;
  const avail = W - gap * (widths.length - 1);
  let cx = 0;
  const segs = widths.map((w, k) => {
    const fw = w * avail;
    const seg = { x: cx, w: fw * fills[k], fw, f: fills[k], k };
    cx += fw + (fw > 0.5 ? gap : 0);
    return seg;
  });
  return (
    <div style={{ position: 'absolute', left: X, top: y, width: W, height: Hh, opacity: op }}>
      <div style={{ position: 'absolute', left: 0, top: -44, fontSize: 22, fontWeight: 600, color: light ? C.muted : C.darkMuted }}>8:00 AM</div>
      <div style={{ position: 'absolute', right: 0, top: -44, fontSize: 22, fontWeight: 600, color: light ? C.muted : C.darkMuted }}>5:00 PM</div>
      {segs.map((s) => (
        <div key={s.k} style={{ position: 'absolute', left: s.x, top: 0, width: s.fw, height: Hh }}>
          <div style={{ position: 'absolute', inset: 0, background: colors[s.k], borderRadius: 6, clipPath: `inset(0 ${(1 - s.f) * 100}% 0 0 round 6px)` }}></div>
          {labels[s.k] && (
            <div style={{ position: 'absolute', left: 0, top: Hh + 14, width: Math.max(s.fw - 14, 0), clipPath: `inset(-4px ${(1 - s.f) * 100}% -4px 0)`, opacity: labelOp[s.k], display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ width: 2, height: 18, background: light ? '#a7b1b8' : '#5e6e78' }}></div>
              <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.25, color: light ? C.slate : C.darkText, textWrap: 'pretty' }}>{labels[s.k]}</div>
            </div>
          )}
        </div>
      ))}
      {extra && extra(segs)}
    </div>
  );
}

const BUSY = ['Data entry', 'Timecard audits', 'Credential follow-up', 'Submission screening', 'Invoice reconciliation'];
const COST_W = [0.24, 0.22, 0.2, 0.18, 0.12, 0.04];
const OUT_W = [0.05, 0.05, 0.04, 0.04, 0.03, 0.79];

function Cost({ T, CUES }) {
  const t0 = CUES.Cost;
  if (T < t0 - 0.1 || T > CUES.Turn + 1) return null;
  const fills = COST_W.map((_, k) => (k < 5 ? MOTION.draw(T, t0 + 1.4 + k * 0.45, 0.6) : MOTION.pop(T, t0 + 3.9, 0.6)));
  const labelOp = COST_W.map((_, k) => MOTION.enter(T, t0 + 1.6 + k * 0.45, 0.5));
  const push = MOTION.draw(T, t0 + 6.0, 2.5);
  const out = MOTION.draw(T, CUES.Turn, 0.7);
  const greenA = MOTION.enter(T, t0 + 4.3, 0.6);
  const pulse = 0.5 + 0.5 * Math.sin((T - t0) * 5);
  const hs = { fontSize: 96, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.08, whiteSpace: 'nowrap' };
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: 1 - out, transformOrigin: '1728px 690px', transform: `scale(${lerp(1, 1.3, push) * lerp(1, 1.15, out)})` }}>
      <div style={{ position: 'absolute', left: 160, top: 210 }}>
        <Mask T={T} inAt={t0 + 0.3}><div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '0.18em', color: C.orange }}>WHERE THE DAY GOES</div></Mask>
        <div style={{ height: 18 }}></div>
        <Mask T={T} inAt={t0 + 0.5}><div style={{ ...hs, color: '#fff' }}>Skilled teams.</div></Mask>
        <Mask T={T} inAt={t0 + 0.8}><div style={{ ...hs, color: C.orange }}>Stuck in busywork.</div></Mask>
      </div>
      <WorkdayBar T={T} y={644} widths={COST_W} fills={fills} labelOp={labelOp} light={false} op={MOTION.enter(T, t0 + 1.2, 0.4)}
        colors={['#a7b1b8', '#7d8b94', '#5e6e78', '#7d8b94', '#a7b1b8', C.green]} labels={[...BUSY, null]}
        extra={(segs) => {
          const g = segs[5];
          return (
            <React.Fragment>
              <div style={{ position: 'absolute', left: g.x - 8, top: -8, width: g.w + 16, height: 108, borderRadius: 10, border: `2px solid ${C.greenLight}`, opacity: greenA * (0.35 + 0.65 * pulse) }}></div>
              <div style={{ position: 'absolute', right: 0, top: -176, textAlign: 'right', opacity: greenA, transform: `translateY(${(1 - greenA) * 16}px)` }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: C.greenLight }}>Time for patients</div>
                <div style={{ fontSize: 22, color: C.darkMuted, marginTop: 4 }}>what's left at the end of the day</div>
              </div>
            </React.Fragment>
          );
        }} />
    </div>
  );
}

function Turn({ T, CUES }) {
  const t0 = CUES.Turn, M = CUES.Meet;
  const hs = { fontSize: 120, fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.08, whiteSpace: 'nowrap', textAlign: 'center' };
  const trio = [C.green, C.blue, C.orange];
  const grow = MOTION.draw(T, M - 1.6, 0.9);
  const light = MOTION.draw(T, M - 1.3, 0.9);
  return (
    <React.Fragment>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Mask T={T} inAt={t0 + 0.4} outAt={M - 1.9}><div style={{ ...hs, color: '#fff' }}>What if the busywork</div></Mask>
        <Mask T={T} inAt={t0 + 0.6} outAt={M - 1.8}><div style={{ ...hs, color: C.blueLight }}>ran itself?</div></Mask>
      </div>
      {T > t0 + 1.0 && T < M + 0.2 && trio.map((col, k) => {
        const p = MOTION.pop(T, t0 + 1.2 + k * 0.12, 0.45);
        const isBlue = k === 1;
        const fade = isBlue ? 0 : MOTION.draw(T, M - 1.8, 0.4);
        const size = 2800;
        const s0 = 76 / size;
        const s = isBlue ? lerp(s0, 1, Easing.easeInCubic(grow)) : s0;
        const cx = lerp(960 + (k - 1) * 104, 960, isBlue ? MOTION.draw(T, M - 1.9, 0.5) : 0);
        const cy = lerp(720, 540, isBlue ? MOTION.draw(T, M - 1.9, 0.5) : 0);
        return (
          <Hex key={k} size={size} color={col} style={{ position: 'absolute', left: cx - size / 2, top: cy - size * 0.433, transform: `scale(${s * p})`, opacity: 1 - fade }} />
        );
      })}
      {T > M - 1.3 && T < CUES.Close + 1.2 && (
        <Hex size={2800} color={C.page} style={{ position: 'absolute', left: 960 - 1400, top: 540 - 1212, transform: `scale(${Easing.easeInCubic(light) * 1.02})` }} />
      )}
    </React.Fragment>
  );
}

const WORKERS = [
  { name: 'Submission Evaluator', icon: 'submissions', c: C.green, d: 'Screens every candidate in seconds. Fills open shifts faster.' },
  { name: 'Timecard Auditor', icon: 'shifts', c: C.blue, d: 'Audits every timecard. Stops billing errors before they post.' },
  { name: 'Digital Worker Framework', icon: 'tasks', c: C.orange, d: 'Deploys the next worker on the workflow you choose.' },
];

function Meet({ T, CUES }) {
  const t0 = CUES.Meet;
  if (T < t0 - 0.2 || T > CUES.Outcome + 1) return null;
  const up = MOTION.draw(T, t0 + 2.8, 0.8);
  const titleOut = MOTION.draw(T, t0 + 6.9, 0.5);
  const drift = 1;
  const scanP = prog(T, SCAN.start, SCAN.dur);
  const tail = Math.max(0, T - (SCAN.start + SCAN.dur));
  const left = Math.max(1, Math.round(50 + 1234 * (1 - scanP) - tail * 7));
  const ok = left <= 50;
  const hs = { fontSize: 77, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, whiteSpace: 'nowrap' };
  return (
    <React.Fragment>
      <div style={{ position: 'absolute', left: 0, right: 0, top: lerp(330, 90, up), display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `scale(${lerp(drift, 0.62, up)})`, transformOrigin: '50% 0', opacity: 1 - titleOut }}>
        <Mask T={T} inAt={t0 + 0.1}><div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '0.22em', color: C.blue }}>INTRODUCING</div></Mask>
        <div style={{ height: 16 }}></div>
        <Mask T={T} inAt={t0 + 0.3} style={{ marginBottom: -36 }}><div style={{ fontSize: 150, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, paddingBottom: 36, color: C.ink, whiteSpace: 'nowrap' }}>Trio <span style={{ color: C.blue }}>Digital Workers</span></div></Mask>
        <div style={{ height: 28, opacity: 1 - up }}></div>
        <div style={{ opacity: MOTION.enter(T, t0 + 1.0, 0.6) * (1 - MOTION.draw(T, t0 + 2.6, 0.4)) }}>
          <div style={{ fontSize: 38, color: C.slate, textAlign: 'center', lineHeight: 1.4 }}>AI teammates that work inside Trio VMS.<br />Around the clock.</div>
        </div>
      </div>
      {(() => {
        const fw = WORKERS[2];
        const fa = MOTION.pop(T, t0 + 3.1, 0.6), fo = MOTION.draw(T, t0 + 6.8, 0.5);
        const line = MOTION.draw(T, t0 + 3.5, 0.5);
        const dot = 0.5 + 0.5 * Math.sin((T - t0) * 6);
        const card = { boxSizing: 'border-box', background: '#fff', borderRadius: 8, border: '1px solid #eceef0', boxShadow: '0 4px 12px rgba(35,45,53,.08), 0 12px 32px rgba(35,45,53,.08)' };
        return (
          <React.Fragment>
            <div style={{ position: 'absolute', left: 170, top: 300, width: 1580, height: 190, ...card, borderTop: `6px solid ${C.orange}`, padding: '0 48px', display: 'flex', alignItems: 'center', gap: 36,
              opacity: clamp(fa * 1.5, 0, 1) * (1 - fo), transform: `translateY(${(1 - fa) * -60 - fo * 40}px) scale(${lerp(0.94, 1, fa) * lerp(1, 0.94, fo)})` }}>
              <Hex size={110} color={fw.c}><Icon name={fw.icon} size={48} width={2} /></Hex>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                <div style={{ fontSize: 42, fontWeight: 700, color: C.ink, letterSpacing: '-0.01em' }}>{fw.name}</div>
                <div style={{ fontSize: 26, color: C.slate, lineHeight: 1.4 }}>{fw.d}</div>
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: C.orange, letterSpacing: '0.12em', whiteSpace: 'nowrap' }}>MANAGES EVERY WORKER</div>
            </div>
            {[0, 1].map((k) => (
              <div key={'l' + k} style={{ position: 'absolute', left: 170 + 395 + k * 810 - 2, top: 490, width: 4, height: 70, background: C.orange, opacity: 0.5 * (1 - fo), transform: `scaleY(${line})`, transformOrigin: 'top' }}></div>
            ))}
            {WORKERS.slice(0, 2).map((w, k) => {
              const a = MOTION.pop(T, t0 + 3.7 + k * 0.15, 0.6);
              const o = MOTION.draw(T, t0 + 6.8 + k * 0.08, 0.5);
              return (
                <div key={k} style={{ position: 'absolute', left: 170 + k * 810, top: 560, width: 770, height: 330, ...card, padding: 36, display: 'flex', flexDirection: 'column', gap: 22,
                  opacity: clamp(a * 1.5, 0, 1) * (1 - o), transform: `translateY(${(1 - a) * 80 - o * 40}px) scale(${lerp(0.92, 1, a) * lerp(1, 0.9, o)})` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
                    <Hex size={104} color={w.c}><Icon name={w.icon} size={46} width={2} /></Hex>
                    <div style={{ fontSize: 40, fontWeight: 700, color: C.ink, letterSpacing: '-0.01em' }}>{w.name}</div>
                  </div>
                  <div style={{ fontSize: 26, color: C.slate, lineHeight: 1.4, flex: 1, textWrap: 'pretty' }}>{w.d}</div>
                  <div style={{ borderTop: '1px solid #eceef0', paddingTop: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 12, height: 12, borderRadius: 6, background: C.green, boxShadow: `0 0 0 ${4 + dot * 5}px rgba(121,187,67,${0.25 - dot * 0.15})` }}></div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: C.okText, letterSpacing: '0.06em' }}>RUNNING 24/7</div>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        );
      })()}
      <div style={{ position: 'absolute', left: 120, top: 140 }}>
        <Mask T={T} inAt={t0 + 7.4} outAt={CUES.Outcome}><div style={{ ...hs, color: C.ink }}>Every task.</div></Mask>
        <Mask T={T} inAt={t0 + 7.6} outAt={CUES.Outcome + 0.08}><div style={{ ...hs, color: C.okText }}>Handled.</div></Mask>
      </div>
      <Counter T={T} light inAt={t0 + 7.4} outAt={CUES.Outcome} label="OPEN TASKS" value={left}
        color={ok ? C.okText : C.ink} sub="Digital Workers on it" subColor={ok ? C.okText : C.muted} />
    </React.Fragment>
  );
}

function Outcome({ T, CUES }) {
  const t0 = CUES.Outcome;
  if (T < t0 - 0.1 || T > CUES.Close + 1.2) return null;
  const m = MOTION.draw(T, t0 + 1.5, 1.5);
  const widths = COST_W.map((w, k) => lerp(w, OUT_W[k], m));
  const fills = COST_W.map(() => 1);
  const labelOp = COST_W.map(() => 1 - MOTION.draw(T, t0 + 1.0, 0.5));
  const gA = MOTION.enter(T, t0 + 2.8, 0.6);
  const hs = { fontSize: 96, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.08, whiteSpace: 'nowrap' };
  const drift = 1;
  return (
    <div style={{ position: 'absolute', inset: 0, transform: `scale(${drift})`, transformOrigin: '960px 540px' }}>
      <div style={{ position: 'absolute', left: 160, top: 210 }}>
        <Mask T={T} inAt={t0 + 0.3}><div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '0.18em', color: C.blue }}>THE RESULT</div></Mask>
        <div style={{ height: 18 }}></div>
        <Mask T={T} inAt={t0 + 0.5}><div style={{ ...hs, color: C.ink }}>Less busywork.</div></Mask>
        <Mask T={T} inAt={t0 + 0.8}><div style={{ ...hs, color: C.okText }}>More patient care.</div></Mask>
      </div>
      <WorkdayBar T={T} y={644} widths={widths} fills={fills} labelOp={labelOp} light op={MOTION.enter(T, t0 + 0.7, 0.4)}
        colors={['#a7b1b8', '#cdd3d7', '#7d8b94', '#cdd3d7', '#a7b1b8', C.green]} labels={[...BUSY, null]}
        extra={(segs) => {
          const g = segs[5];
          return (
            <React.Fragment>
              <div style={{ position: 'absolute', left: g.x + 32, top: 0, height: 92, display: 'flex', alignItems: 'center', fontSize: 36, fontWeight: 800, color: C.ink, opacity: gA, whiteSpace: 'nowrap' }}>Time for patient care</div>
              <div style={{ position: 'absolute', left: g.x, top: 124, display: 'flex', gap: 14 }}>
                {['Staffing to patient demand', 'Clinician retention', 'Safer units'].map((l, k) => {
                  const a = MOTION.pop(T, t0 + 3.4 + k * 0.2, 0.5);
                  return (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid #dfe3e6', borderRadius: 999, padding: '12px 22px', fontSize: 24, fontWeight: 600, color: C.slate, opacity: clamp(a, 0, 1), transform: `translateY(${(1 - a) * 20}px)` }}>
                      <div style={{ width: 10, height: 10, borderRadius: 5, background: C.green }}></div>{l}
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        }} />
    </div>
  );
}

function Close({ T, CUES, hexGrid }) {
  const t0 = CUES.Close;
  if (T < t0 - 0.05) return null;
  const w = MOTION.draw(T, t0, 0.9);
  const logo = MOTION.enter(T, t0 + 0.7, 0.8);
  const drift = 1;
  const cta = MOTION.pop(T, t0 + 2.4, 0.6);
  return (
    <React.Fragment>
      <Hex size={2800} color={C.slate} style={{ position: 'absolute', left: 960 - 1400, top: 540 - 1212, transform: `scale(${Easing.easeInCubic(w) * 1.02})` }} />
      {w >= 1 && hexGrid && <HexGrid T={T} stroke="#ffffff" opacity={0.06} />}
      <img src="assets/trio-mark.png" alt="" style={{ position: 'absolute', right: -220, top: 90, width: 980, opacity: 0.1 * logo, transform: `scale(${lerp(0.9, 1.06, prog(T, t0 + 0.6, 7.4))}) rotate(${lerp(-6, 0, prog(T, t0 + 0.6, 7.4))}deg)` }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 44, transform: `scale(${drift})` }}>
        <img src="assets/trio-logo-white.png" alt="Trio Workforce Solutions" style={{ height: 150, opacity: logo, transform: `translateY(${(1 - logo) * 30}px)` }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Mask T={T} inAt={t0 + 1.3}><div style={{ fontSize: 76, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>Built for healthcare. <span style={{ color: C.greenLight }}>Not adapted.</span></div></Mask>
          <Mask T={T} inAt={t0 + 1.8}><div style={{ fontSize: 32, color: '#e6e7e8', letterSpacing: '0.02em' }}>Trio Digital Workers  •  Inside Trio VMS</div></Mask>
        </div>
        <div style={{ background: C.orange, color: '#fff', fontSize: 30, fontWeight: 700, padding: '22px 44px', borderRadius: 6, opacity: clamp(cta, 0, 1), transform: `scale(${lerp(0.8, 1, cta)})` }}>See Digital Workers in Action</div>
      </div>
    </React.Fragment>
  );
}

function HUD({ T, CUES }) {
  const light = T >= CUES.Meet - 0.4 && T < CUES.Close + 0.5;
  const a = MOTION.enter(T, 0.1, 0.6) * (1 - MOTION.draw(T, CUES.Close, 0.5));
  if (a <= 0) return null;
  const chapter = T < CUES.Turn ? '01  THE PROBLEM' : T < CUES.Meet - 0.4 ? '02  THE SHIFT' : '03  THE SOLUTION';
  const col = light ? C.muted : C.darkMuted;
  return (
    <div style={{ position: 'absolute', left: 120, right: 120, top: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: a, fontSize: 18, fontWeight: 700, letterSpacing: '0.18em', color: col }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <img src={light ? 'assets/trio-logo-primary.png' : 'assets/trio-logo-white.png'} alt="Trio Workforce Solutions" style={{ height: 44 }} />
        <div style={{ width: 1, height: 26, background: col, opacity: 0.5 }}></div>
        DIGITAL WORKERS
      </div>
    </div>
  );
}

function Piece({ hexGrid }) {
  const { T, CUES, time } = useComposition();
  return (
    <div data-screen-label={`t=${Math.floor(time || 0)}s`} style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: C.dark, fontFamily: FONT }}>
      {hexGrid && <HexGrid T={T} stroke="#ffffff" opacity={0.05} />}
      <Cost T={T} CUES={CUES} />
      <Turn T={T} CUES={CUES} />
      <Board T={T} CUES={CUES} />
      <Hook T={T} CUES={CUES} />
      <Volume T={T} CUES={CUES} />
      <Meet T={T} CUES={CUES} />
      <Outcome T={T} CUES={CUES} />
      <Close T={T} CUES={CUES} hexGrid={hexGrid} />
      <HUD T={T} CUES={CUES} />
    </div>
  );
}

function DigitalWorkersApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || { motionEditor: true, hexGrid: true });
  return (
    <React.Fragment>
      <CompositionStage width={1920} height={1080} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg={C.dark}>
        <Piece hexGrid={t.hexGrid} />
      </CompositionStage>
      <TweaksPanel>
        <TweakSection label="Video" />
        <TweakToggle label="Motion editor" value={t.motionEditor} onChange={(v) => setTweak('motionEditor', v)} />
        <TweakToggle label="Hex grid texture" value={t.hexGrid} onChange={(v) => setTweak('hexGrid', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

window.DigitalWorkersApp = DigitalWorkersApp;
})();
