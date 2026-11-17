/* @ds-bundle: {"format":3,"namespace":"TrioWorkforceSolutionsDesignSystem_6da10e","components":[{"name":"Icon","sourcePath":"assets/icons/icons.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"assets/icons/icons.jsx":"ff86193b7c2f","components/core/Avatar.jsx":"8dc43cb1bca9","components/core/Badge.jsx":"65ec7c5215b8","components/core/Button.jsx":"7ba69494a608","components/forms/Checkbox.jsx":"96fd8a993695","components/forms/Input.jsx":"a07e2946746b","components/forms/Select.jsx":"065a6c3543d9","components/navigation/SidebarNav.jsx":"4872a1ac49cd","components/navigation/Tabs.jsx":"c7eb86bf10d3","components/surfaces/Card.jsx":"8796d9138f4e","components/surfaces/StatCard.jsx":"42fbfb30470b","ui_kits/trio-market-intelligence/mi-dashboard.jsx":"23c9b987c7cb","ui_kits/trio-slides/slides.jsx":"ba78a0c29316","ui_kits/trio-vms/vms-app.jsx":"0358d1f7eea6","ui_kits/trio-vms/vms-dashboard.jsx":"373b173f9d62","ui_kits/trio-vms/vms-tables.jsx":"a71c5e908c27"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"assets/icons/icons.jsx"}]} */

(() => {

const __ds_ns = (window.TrioWorkforceSolutionsDesignSystem_6da10e = window.TrioWorkforceSolutionsDesignSystem_6da10e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trio uses a clean, single-weight line-icon style (2px stroke, rounded caps),
 * consistent with the icons in the Trio VMS product UI. The product's exact
 * icon files weren't provided, so these are drawn in the matching Lucide style
 * (ISC-licensed geometry). Swap for the licensed product set when available. */

const PATHS = {
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  recruiting: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>',
  membership: '<path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M13 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="7" cy="7" r="4"/><path d="M15 3.13a4 4 0 0 1 0 7.75"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  tasks: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  jobs: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  submissions: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  shifts: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
  billing: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  chevronDown: '<polyline points="6 9 12 15 18 9"/>',
  chevronRight: '<polyline points="9 18 15 12 9 6"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  barChart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  sparkles: '<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'
};

/**
 * Single-weight line icon in the Trio product style.
 * Pass `name` (see keys in PATHS) and optional `size` / stroke `width`.
 */
function Icon({
  name,
  size = 18,
  width = 2,
  style = {},
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: width,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d
    }
  }, rest));
}
const iconNames = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/icons.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 22,
  sm: 28,
  md: 34,
  lg: 44,
  xl: 56
};

// Deterministic brand-palette color from a string (initials avatars)
const PALETTE = ['#0081BB', '#79BB43', '#F58220', '#455560', '#00AAE5', '#6f5bd6'];
function pick(seed = '') {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = h * 31 + seed.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}
function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || '?';
}

/**
 * User avatar — initials on a deterministic brand color, or a photo.
 * Square (rounded, the Trio VMS top-bar style) or circle.
 */
function Avatar({
  name = '',
  src = null,
  size = 'md',
  shape = 'square',
  color = null,
  style = {},
  ...rest
}) {
  const px = SIZES[size] || (typeof size === 'number' ? size : 34);
  const bg = color || pick(name);
  const radius = shape === 'circle' ? '50%' : 'var(--radius-md)';
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name || undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: radius,
      background: src ? 'var(--slate-100)' : bg,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: Math.round(px * 0.4),
      lineHeight: 1,
      overflow: 'hidden',
      flex: 'none',
      userSelect: 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--slate-100)',
    color: 'var(--text-muted)'
  },
  primary: {
    bg: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)'
  },
  success: {
    bg: 'var(--color-success-subtle)',
    color: 'var(--color-success-text)'
  },
  warning: {
    bg: 'var(--color-warning-subtle)',
    color: 'var(--color-warning-text)'
  },
  danger: {
    bg: 'var(--color-danger-subtle)',
    color: 'var(--color-danger-text)'
  },
  info: {
    bg: 'var(--color-info-subtle)',
    color: 'var(--color-primary)'
  }
};

/**
 * Compact status / category label. Soft tinted pill (default) or a plain text
 * tag. Used for the Trio VMS task statuses, counts, and metadata flags.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const soft = variant === 'soft';
  const outline = variant === 'outline';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: '22px',
      padding: '0 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      letterSpacing: '0.01em',
      color: t.color,
      background: soft ? t.bg : 'transparent',
      border: outline ? `1px solid ${t.color}` : '1px solid transparent',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.color,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--field-h-sm)',
    padding: '0 12px',
    fontSize: 'var(--text-sm)',
    gap: '6px'
  },
  md: {
    height: 'var(--field-h)',
    padding: '0 16px',
    fontSize: 'var(--text-base)',
    gap: '8px'
  },
  lg: {
    height: 'var(--field-h-lg)',
    padding: '0 22px',
    fontSize: 'var(--text-md)',
    gap: '8px'
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--color-primary)',
    bgHover: 'var(--color-primary-hover)',
    color: '#fff',
    border: 'transparent'
  },
  accent: {
    bg: 'var(--color-accent)',
    bgHover: 'var(--color-accent-hover)',
    color: '#fff',
    border: 'transparent'
  },
  secondary: {
    bg: 'var(--surface-card)',
    bgHover: 'var(--surface-hover)',
    color: 'var(--text-body)',
    border: 'var(--border-strong)'
  },
  ghost: {
    bg: 'transparent',
    bgHover: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
    border: 'transparent'
  },
  danger: {
    bg: 'var(--color-danger)',
    bgHover: 'var(--color-danger-text)',
    color: '#fff',
    border: 'transparent'
  }
};

/**
 * Trio primary action button. Process-blue fill is the default; secondary is a
 * bordered white button, ghost is text-only, accent is the orange CTA.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      color: v.color,
      background: disabled ? 'var(--slate-150)' : hover ? v.bgHover : v.bg,
      border: `1px solid ${disabled ? 'var(--slate-150)' : v.border === 'transparent' ? 'transparent' : v.border}`,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast)',
      boxShadow: variant === 'primary' || variant === 'accent' || variant === 'danger' ? 'var(--shadow-xs)' : 'none',
      opacity: disabled ? 0.65 : 1,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox with label. Controlled or uncontrolled. Process-blue when checked.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const fid = id || (label ? `cb-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 18,
      height: 18,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      background: on ? 'var(--color-primary)' : 'var(--surface-card)',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: handle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), on && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.2 2.3L9.5 3.6",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, helper/error text, and leading icon.
 * Compact 36px field matching the Trio VMS forms.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  helper,
  error,
  iconLeft = null,
  disabled = false,
  required = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--color-danger)' : focus ? 'var(--border-focus)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height: 'var(--field-h)',
      padding: '0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      minWidth: 0
    }
  }, rest))), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-danger-text)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Native select styled to match Trio inputs, with a chevron affordance.
 */
function Select({
  label,
  id,
  value,
  defaultValue,
  onChange,
  options = [],
  placeholder,
  helper,
  error,
  disabled = false,
  required = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--color-danger)' : focus ? 'var(--border-focus)' : 'var(--border-strong)';
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--field-h)',
      padding: '0 34px 0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12,
      lineHeight: 1
    }
  }, "\u25BE")), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-danger-text)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavRow({
  label,
  icon,
  on,
  depth,
  onClick,
  hasChildren,
  open
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '11px',
      padding: depth ? '8px 12px 8px 44px' : '9px 12px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
      color: on ? 'var(--color-primary)' : 'var(--text-body)',
      background: on ? 'var(--color-primary-subtle)' : hover ? 'var(--surface-hover)' : 'transparent',
      textAlign: 'left',
      transition: 'background var(--dur-fast), color var(--dur-fast)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      justifyContent: 'center',
      color: on ? 'var(--color-primary)' : 'var(--text-muted)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), hasChildren && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 11,
      color: 'var(--text-faint)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-fast)'
    }
  }, "\u25BE"));
}

/**
 * Vertical sidebar navigation — the Trio VMS left rail. Supports flat items
 * and collapsible groups with sub-items, an active id, and per-item icons.
 * items: [{ id, label, icon, children?: [{id,label}] }]
 */
function SidebarNav({
  items = [],
  active,
  onSelect,
  defaultExpanded = [],
  style = {},
  ...rest
}) {
  const [expanded, setExpanded] = React.useState(() => new Set(defaultExpanded));
  const toggle = id => setExpanded(prev => {
    const n = new Set(prev);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const select = id => onSelect && onSelect(id);
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      width: 'var(--app-sidebar-w)',
      ...style
    }
  }, rest), items.map(it => {
    const hasChildren = it.children && it.children.length > 0;
    const open = expanded.has(it.id);
    const childActive = hasChildren && it.children.some(c => c.id === active);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id
    }, /*#__PURE__*/React.createElement(NavRow, {
      label: it.label,
      icon: it.icon,
      on: active === it.id || childActive && !open,
      depth: 0,
      hasChildren: hasChildren,
      open: open,
      onClick: () => hasChildren ? toggle(it.id) : select(it.id)
    }), hasChildren && open && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        marginTop: 2
      }
    }, it.children.map(c => /*#__PURE__*/React.createElement(NavRow, {
      key: c.id,
      label: c.label,
      on: active === c.id,
      depth: 1,
      hasChildren: false,
      open: false,
      onClick: () => select(c.id)
    }))));
  }));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horizontal tab bar — the underline style of the Trio VMS top nav
 * (IRM / TIMECARDS / REPORTS). Controlled or uncontrolled.
 */
function Tabs({
  tabs = [],
  // [{ id, label, badge }] or ['A','B']
  value,
  defaultValue,
  onChange,
  size = 'md',
  style = {},
  ...rest
}) {
  const norm = tabs.map(t => typeof t === 'string' ? {
    id: t,
    label: t
  } : t);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.id);
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  const fz = size === 'sm' ? 'var(--text-xs)' : 'var(--text-base)';
  const py = size === 'sm' ? '8px' : '12px';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), norm.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.id),
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: `${py} 2px`,
        marginBottom: -1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        fontFamily: 'var(--font-sans)',
        fontSize: fz,
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        letterSpacing: '0.02em',
        color: on ? 'var(--color-primary)' : 'var(--text-muted)',
        borderBottom: `2px solid ${on ? 'var(--color-primary)' : 'transparent'}`,
        transition: 'color var(--dur-fast), border-color var(--dur-fast)',
        textTransform: size === 'sm' ? 'none' : 'uppercase'
      }
    }, t.label, t.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-2xs)',
        fontWeight: 'var(--fw-bold)',
        background: on ? 'var(--color-primary-subtle)' : 'var(--slate-100)',
        color: on ? 'var(--color-primary)' : 'var(--text-muted)',
        borderRadius: 'var(--radius-pill)',
        padding: '1px 7px',
        lineHeight: 1.5
      }
    }, t.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: 'var(--space-3)',
  md: 'var(--space-4)',
  lg: 'var(--space-6)'
};

/**
 * Surface container — white panel with a soft shadow. Optional title row
 * (with actions) and footer. The base building block for Trio layouts.
 */
function Card({
  children,
  title,
  subtitle,
  actions,
  footer,
  padding = 'md',
  interactive = false,
  style = {},
  bodyStyle = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pad = PAD[padding] || PAD.md;
  return /*#__PURE__*/React.createElement("section", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base)',
      transform: hover ? 'translateY(-1px)' : 'none',
      overflow: 'hidden',
      ...style
    }
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      padding: `var(--space-3) ${pad}`,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flex: 'none'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      ...bodyStyle
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `var(--space-3) ${pad}`,
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Dashboard metric card — the signature Trio VMS KPI tile. A labeled header
 * (with optional icon), a primary figure, optional secondary stat breakdown,
 * and an optional segmented progress bar.
 */
function StatCard({
  label,
  icon = null,
  value,
  caption,
  stats = [],
  // [{ label, value, tone }]
  segments = [],
  // [{ value, color }] for the progress bar
  accent = 'var(--color-primary)',
  style = {},
  ...rest
}) {
  const total = segments.reduce((a, s) => a + (s.value || 0), 0) || 1;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex',
      fontSize: 16
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label)), value !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--fw-extra)',
      color: accent,
      lineHeight: 1
    }
  }, value), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, caption)), stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: s.tone || 'var(--text-strong)'
    }
  }, s.value)))), segments.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 6,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: `${s.value / total * 100}%`,
      background: s.color
    }
  }))));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trio-market-intelligence/mi-dashboard.jsx
try { (() => {
/* Trio Market Intelligence — dark analytics dashboard (recreation) */
const MI_NS = window.TrioWorkforceSolutionsDesignSystem_6da10e;
const MIcon = MI_NS && MI_NS.Icon || (() => null);
const FACILITY = {
  Urban: [['1-99', 86.79], ['100-199', 84.51], ['200+', 87.10], ['Unspecified', 97.92]],
  Rural: [['1-99', 79.40], ['100-199', 81.20], ['200+', 83.05], ['Unspecified', 88.10]],
  Unspecified: [['1-99', 90.10], ['100-199', 88.30], ['200+', 91.40], ['Unspecified', 99.20]]
};
const HISTORY = [['2024-10', 86], ['2024-11', 91], ['2024-12', 99], ['2025-01', 92], ['2025-02', 96], ['2025-03', 85], ['2025-04', 93], ['2025-05', 86], ['2025-06', 86], ['2025-07', 85], ['2025-08', 86], ['2025-09', 86], ['2025-10', 85]];
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--dark-muted)'
    }
  }, label), children);
}
function DarkSelect({
  value,
  disabled
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      height: 32,
      padding: '0 10px',
      borderRadius: 4,
      background: disabled ? '#1d262d' : '#2b3741',
      border: '1px solid var(--dark-border)',
      color: disabled ? '#5d6b74' : 'var(--dark-text)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, value), /*#__PURE__*/React.createElement(MIcon, {
    name: "chevronDown",
    size: 14
  }));
}
function Panel({
  title,
  sub,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dark-panel)',
      border: '1px solid var(--dark-border)',
      borderRadius: 8,
      padding: 16,
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--dark-text)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--dark-muted)',
      marginTop: 2
    }
  }, sub), children);
}
function FacilityBars() {
  const [tab, setTab] = React.useState('Urban');
  const rows = FACILITY[tab];
  const max = Math.max(...Object.values(FACILITY).flat().map(r => r[1]));
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Market Rates by Facility Size",
    sub: "Staffed Bed Counts",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      marginTop: 12,
      marginBottom: 14,
      border: '1px solid var(--dark-border)',
      borderRadius: 4,
      overflow: 'hidden',
      width: 'fit-content'
    }
  }, Object.keys(FACILITY).map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 16px',
      fontSize: 12,
      fontWeight: 600,
      background: tab === t ? '#33414c' : 'transparent',
      color: tab === t ? 'var(--dark-text)' : 'var(--dark-muted)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, rows.map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 86,
      fontSize: 13,
      color: 'var(--dark-muted)',
      flex: 'none'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      background: '#2b3741',
      borderRadius: 3,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${val / max * 100}%`,
      height: '100%',
      background: '#3a4a55',
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--dark-accent)'
    }
  }, "$", val.toFixed(2)))))));
}
function LineChart() {
  const w = 1090,
    h = 150,
    pad = 28;
  const vals = HISTORY.map(d => d[1]);
  const min = 82,
    max = 100;
  const x = i => pad + i * (w - pad * 2) / (HISTORY.length - 1);
  const y = v => pad / 2 + (h - pad) * (1 - (v - min) / (max - min));
  const pts = HISTORY.map((d, i) => `${x(i)},${y(d[1])}`).join(' ');
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Historical Bill Rate Fluctuations",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h + 24}`,
    style: {
      width: '100%',
      marginTop: 10
    }
  }, [100, 90].map(g => /*#__PURE__*/React.createElement("g", {
    key: g
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad,
    x2: w - pad,
    y1: y(g),
    y2: y(g),
    stroke: "#33414c",
    strokeDasharray: "3 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: 4,
    y: y(g) + 4,
    fill: "#7f8d96",
    fontSize: "11"
  }, "$", g))), /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: "var(--dark-accent)",
    strokeWidth: "2.5",
    strokeLinejoin: "round"
  }), HISTORY.map((d, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x(i),
    cy: y(d[1]),
    r: "3.5",
    fill: "var(--dark-accent)"
  }), /*#__PURE__*/React.createElement("text", {
    x: x(i),
    y: y(d[1]) - 10,
    fill: "#cfd6da",
    fontSize: "11",
    textAnchor: "middle"
  }, "$", d[1]), /*#__PURE__*/React.createElement("text", {
    x: x(i),
    y: h + 16,
    fill: "#7f8d96",
    fontSize: "10",
    textAnchor: "middle"
  }, d[0])))));
}
function Histogram() {
  const bars = [0, 0, 96, 84, 0]; // mint bars centered near 0σ
  const max = 100;
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Market Rate Confidence",
    sub: "Current rate distribution by sample size",
    style: {
      marginTop: 14,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      height: 120,
      marginTop: 14,
      paddingLeft: 28,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 6,
      fontSize: 10,
      color: '#7f8d96'
    }
  }, "100K"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 18,
      fontSize: 10,
      color: '#7f8d96'
    }
  }, "0"), bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${b / max * 100}%`,
      background: b ? 'var(--dark-accent)' : 'transparent',
      borderRadius: '2px 2px 0 0'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 10,
      color: '#7f8d96',
      paddingLeft: 28,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "-2"), /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", null, "2")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 11,
      color: '#7f8d96',
      marginTop: 2
    }
  }, "Standard Deviations (\u03C3)"));
}
function MarketIntelligence() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-dark)',
      padding: '18px 22px',
      color: 'var(--dark-text)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/trio-mark.png",
    alt: "Trio",
    style: {
      height: 30,
      width: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 700
    }
  }, "Market Intelligence")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--dark-accent)'
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "help",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '180px 150px 150px 130px 220px 1fr 1fr auto',
      gap: 16,
      alignItems: 'end',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Focus"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid var(--dark-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, ['Region', 'State', 'Bin'].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: '7px 0',
      fontSize: 13,
      fontWeight: 600,
      background: i === 0 ? '#33414c' : 'transparent',
      color: i === 0 ? 'var(--dark-text)' : 'var(--dark-muted)'
    }
  }, t)))), /*#__PURE__*/React.createElement(Field, {
    label: "Region"
  }, /*#__PURE__*/React.createElement(DarkSelect, {
    value: "All"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "State"
  }, /*#__PURE__*/React.createElement(DarkSelect, {
    value: "All",
    disabled: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Bin ID"
  }, /*#__PURE__*/React.createElement(DarkSelect, {
    value: "All",
    disabled: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Date Range"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DarkSelect, {
    value: "10/1/2024"
  }), /*#__PURE__*/React.createElement(DarkSelect, {
    value: "10/31/2025"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Profession"
  }, /*#__PURE__*/React.createElement(DarkSelect, {
    value: "All"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Specialty"
  }, /*#__PURE__*/React.createElement(DarkSelect, {
    value: "All"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--dark-accent)',
      fontSize: 13,
      fontWeight: 600,
      paddingBottom: 8,
      cursor: 'pointer'
    }
  }, "Reset Filters")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Market Rate Map",
    style: {
      flex: '1 1 64%',
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 8px'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/mi-region-map.png",
    alt: "US region market-rate map",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 36%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Current Job Order Bill Rate"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--dark-muted)',
      marginTop: 4
    }
  }, "Multiple selected professions"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--dark-muted)'
    }
  }, "Multiple Geographies"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      color: 'var(--dark-accent)',
      marginTop: 10
    }
  }, "$89.20")), /*#__PURE__*/React.createElement(Panel, {
    style: {
      flex: '0 0 38%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Jobs Included"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      color: 'var(--dark-accent)',
      marginTop: 48
    }
  }, "234K"))), /*#__PURE__*/React.createElement(FacilityBars, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 64%'
    }
  }, /*#__PURE__*/React.createElement(LineChart, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 36%',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Histogram, null))));
}
window.MarketIntelligence = MarketIntelligence;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trio-market-intelligence/mi-dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trio-slides/slides.jsx
try { (() => {
/* Trio — sample presentation slides (1280×720), reflecting the PMM & PEAK decks.
 * Brand system: Open Sans, slate + trio colors, uppercase eyebrows, numbered
 * items, hexagon mark. Each export is a full slide. */
const SL = window.TrioWorkforceSolutionsDesignSystem_6da10e || {};
const SLIcon = SL.Icon || (() => null);
const SLIDE = {
  width: 1280,
  height: 720,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'var(--font-sans)',
  background: '#fff',
  boxSizing: 'border-box'
};
const EY = {
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--trio-blue)'
};
function Logo({
  white
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: `../../assets/logos/${white ? 'trio-logo-white' : 'trio-logo-primary'}.png`,
    alt: "Trio Workforce Solutions",
    style: {
      height: 34
    }
  });
}
function PageMeta({
  children,
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 64,
      bottom: 40,
      fontSize: 13,
      color: light ? 'rgba(255,255,255,.6)' : 'var(--text-faint)'
    }
  }, children);
}

/* Cover */
function TitleSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SLIDE,
      background: 'var(--trio-slate)',
      color: '#fff',
      padding: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    white: true
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/trio-mark.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -90,
      bottom: -90,
      width: 460,
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 250,
      left: 64,
      right: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EY,
      color: 'var(--trio-blue-light)'
    }
  }, "Internal \u2022 Sales Enablement"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 68,
      fontWeight: 800,
      margin: '18px 0 0',
      color: '#fff',
      letterSpacing: '-0.02em',
      lineHeight: 1.05
    }
  }, "What Is a PMM?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      color: 'rgba(255,255,255,.75)',
      margin: '18px 0 0',
      maxWidth: 720
    }
  }, "Who I am, what I do, and what's in it for you.")), /*#__PURE__*/React.createElement(PageMeta, {
    light: true
  }, "Product Marketing \xA0\u2022\xA0 Sales Team Session \xA0\u2022\xA0 June 2026"));
}

/* Numbered agenda */
function AgendaSlide() {
  const items = [['01', 'What is a PMM?', 'The role in plain language — and what it is not.'], ['02', 'Who am I?', 'A quick intro and how I got here.'], ['03', "What's my role?", 'What I own across the portfolio and how it connects to you.'], ['04', "What's in it for me?", 'How partnering with PMM helps you win more deals.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SLIDE,
      padding: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: EY
  }, "Today's Session"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      fontWeight: 700,
      margin: '10px 0 36px'
    }
  }, "What We'll Cover"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, items.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 20,
      padding: '26px 28px',
      background: 'var(--surface-page)',
      borderRadius: 12,
      borderLeft: '4px solid var(--trio-blue)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: 'var(--trio-blue)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      marginTop: 6,
      lineHeight: 1.45
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 56,
      bottom: 36
    }
  }, /*#__PURE__*/React.createElement(Logo, null)));
}

/* Section divider */
function SectionSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SLIDE,
      background: 'var(--surface-page)',
      padding: 64,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/trio-mark.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 80,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 300,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...EY,
      color: 'var(--trio-orange)'
    }
  }, "Section 03"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 66,
      fontWeight: 800,
      margin: '14px 0 0',
      letterSpacing: '-0.02em',
      maxWidth: 760
    }
  }, "What's My Role?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "What I own \u2014 and where it connects to you."));
}

/* Card grid of strengths */
function ContentGridSlide() {
  const cards = [['Consistent messaging', 'Every seller telling the same compelling Trio story.', 'var(--trio-blue)'], ['Faster launches & GTM', 'Tighter go-to-market execution when we ship.', 'var(--trio-green)'], ['Better positioning', 'Knowing how we win against every competitor.', 'var(--trio-orange)'], ['Stronger proof points', 'Customer stories and evidence that close deals.', 'var(--trio-blue)']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SLIDE,
      padding: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: EY
  }, "What Is a PMM?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      margin: '10px 0 6px'
    }
  }, "Why Trio Added Product Marketing"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-muted)',
      margin: '0 0 30px',
      maxWidth: 820
    }
  }, "As Trio grows, this role exists to scale how we tell our story and support revenue."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, cards.map(([t, d, c]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 12,
      padding: 24,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: c,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SLIcon, {
    name: "sparkles",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      marginTop: 8,
      lineHeight: 1.5
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      fontSize: 18,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--trio-blue)'
    }
  }, "Bottom line:"), " I'm here to scale the Trio story and help drive revenue growth."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 56,
      bottom: 36
    }
  }, /*#__PURE__*/React.createElement(Logo, null)));
}

/* Analyst quote */
function QuoteSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SLIDE,
      background: 'var(--trio-slate)',
      color: '#fff',
      padding: 80,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 140,
      lineHeight: 0.6,
      color: 'var(--trio-blue-light)',
      fontWeight: 800,
      height: 70
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.35,
      maxWidth: 980,
      margin: '0 0 28px'
    }
  }, "Trio's capabilities enhance workforce visibility, optimize staffing, and improve talent management \u2014 contributing to its recognition as a Major Contender in Everest Group's VMS PEAK Matrix\xAE 2026."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      height: 44,
      background: 'var(--trio-orange)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "Krishna Charan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,.7)'
    }
  }, "Vice President, Everest Group"))));
}

/* Stat callouts */
function StatSlide() {
  const stats = [['2nd', 'Consecutive year as Star Performer & Major Contender', 'var(--trio-blue)'], ['29', 'Providers evaluated worldwide in the 2026 assessment', 'var(--trio-green)'], ['Only', 'Healthcare-native VMS — built for clinical work, not retrofitted', 'var(--trio-orange)']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SLIDE,
      padding: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: EY
  }, "The Takeaway"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      fontWeight: 700,
      margin: '10px 0 8px',
      maxWidth: 900
    }
  }, "Two years. Two charts. Same result."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-muted)',
      margin: '0 0 44px',
      maxWidth: 820
    }
  }, "In a growing competitive field, Trio's trajectory points consistently up and to the right."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, stats.map(([n, d, c]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      borderTop: `4px solid ${c}`,
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      fontWeight: 800,
      color: c,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: 'var(--text-body)',
      marginTop: 14,
      lineHeight: 1.45
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 56,
      bottom: 36
    }
  }, /*#__PURE__*/React.createElement(Logo, null)));
}

/* Closing */
function ClosingSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SLIDE,
      background: 'var(--trio-slate)',
      color: '#fff',
      padding: 80,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/trio-mark.png",
    alt: "",
    style: {
      position: 'absolute',
      left: -70,
      top: -70,
      width: 360,
      opacity: 0.1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...EY,
      color: 'var(--trio-blue-light)'
    }
  }, "Let's Win Together"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 58,
      fontWeight: 800,
      margin: '16px 0 0',
      lineHeight: 1.1,
      maxWidth: 900,
      letterSpacing: '-0.02em'
    }
  }, "Better story, better proof, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--trio-orange)'
    }
  }, "better odds"), " in every deal."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      color: 'rgba(255,255,255,.78)',
      marginTop: 22
    }
  }, "Bring me in early. Let's make every deal easier to win."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 64,
      bottom: 48
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    white: true
  })));
}
Object.assign(window, {
  TitleSlide,
  AgendaSlide,
  SectionSlide,
  ContentGridSlide,
  QuoteSlide,
  StatSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trio-slides/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trio-vms/vms-app.jsx
try { (() => {
/* Trio VMS — application shell: slate top bar, left rail, view switching, footer.
 * Composes the design-system components from the global namespace. */
const NS = window.TrioWorkforceSolutionsDesignSystem_6da10e;
const {
  Icon,
  SidebarNav,
  Avatar,
  Input,
  Tabs
} = NS;
function TopBar() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--app-topbar-h)',
      background: 'var(--surface-brand)',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '0 16px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/trio-mark.png",
    alt: "Trio",
    style: {
      height: 26,
      width: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, "trio"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.7)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      marginTop: 8
    }
  }, "VMS")), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--color-danger)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      padding: '4px 9px',
      borderRadius: 'var(--radius-sm)',
      letterSpacing: '0.04em'
    }
  }, "TRIO WIP"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: '#fff',
      borderRadius: 'var(--radius-sm)',
      height: 32,
      padding: '0 10px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search Trio",
    style: {
      border: 'none',
      outline: 'none',
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)',
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      fontSize: 12,
      color: 'var(--text-muted)',
      borderLeft: '1px solid var(--border-default)',
      paddingLeft: 8
    }
  }, "All ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 13
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Jesse Szygiel",
    color: "#6f5bd6",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 13,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, "Jesse Szygiel ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 13,
    style: {
      color: 'rgba(255,255,255,.7)'
    }
  }))));
}
const NAV_ITEMS = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "dashboard"
  })
}, {
  id: 'recruiting',
  label: 'Recruiting',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "recruiting"
  })
}, {
  id: 'membership',
  label: 'Membership',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "membership"
  }),
  children: [{
    id: 'resources',
    label: 'Resources'
  }, {
    id: 'pools',
    label: 'Resource Pools'
  }]
}, {
  id: 'provider',
  label: 'Provider Activity',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "activity"
  })
}, {
  id: 'tasks',
  label: 'Tasks',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "tasks"
  })
}, {
  id: 'jobs',
  label: 'Jobs',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "jobs"
  })
}, {
  id: 'submissions',
  label: 'Submissions',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "submissions"
  })
}, {
  id: 'shifts',
  label: 'Shifts',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "shifts"
  }),
  children: [{
    id: 'grid',
    label: 'Grid View'
  }, {
    id: 'calendar',
    label: 'Calendar View'
  }]
}, {
  id: 'billing',
  label: 'Billing',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "billing"
  }),
  children: [{
    id: 'time',
    label: 'Time Collection'
  }, {
    id: 'timecards',
    label: 'Timecards'
  }]
}];
function Sidebar({
  view,
  setView
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--app-sidebar-w)',
      flex: 'none',
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-default)',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 12px',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px 12px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)',
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, "Locums Program ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 14,
    style: {
      color: 'var(--text-muted)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "Sunset Grove Medical Hospital")), /*#__PURE__*/React.createElement(SidebarNav, {
    items: NAV_ITEMS,
    active: view,
    onSelect: setView,
    defaultExpanded: ['membership', 'shifts', 'billing'],
    style: {
      width: '100%',
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setView('settings'),
    style: {
      appearance: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '10px 12px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      background: view === 'settings' ? 'var(--color-primary-subtle)' : 'var(--surface-card)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: view === 'settings' ? 'var(--color-primary)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings"
  }), " Program Settings"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      flex: 'none',
      padding: '10px 24px',
      borderTop: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2017\u20132025 American Health Technology Group, LLC: Trio WFS 23.15.0.0"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-link)'
    }
  }, "Terms of Use"), " | ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-link)'
    }
  }, "Privacy Policy")));
}
function VmsApp() {
  const [view, setView] = React.useState('dashboard');
  const VIEWS = {
    dashboard: DashboardView,
    jobs: JobsView,
    submissions: SubmissionsView
  };
  const Active = VIEWS[view];
  const main = Active ? /*#__PURE__*/React.createElement(Active, null) : /*#__PURE__*/React.createElement(PlaceholderView, {
    id: view
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-default)',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['IRM', 'TIMECARDS', 'REPORTS'],
    defaultValue: "IRM"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    setView: setView
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '24px 28px',
      background: 'var(--surface-page)'
    }
  }, main)), /*#__PURE__*/React.createElement(Footer, null));
}
window.VmsApp = VmsApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trio-vms/vms-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trio-vms/vms-dashboard.jsx
try { (() => {
/* Trio VMS — Locums Program Dashboard view */
const _ds = window.TrioWorkforceSolutionsDesignSystem_6da10e;
const {
  StatCard,
  Badge,
  Icon,
  Card
} = _ds;
const TASKS = [{
  kind: 'Resource',
  name: 'Sophia Anderson',
  task: 'Initial Review',
  due: 'Feb 15, 2025',
  status: ['neutral', 'Not Started'],
  detail: 'Streamline resources and connect with prospect to simplify onboarding and maintain schedules for medical staff.'
}, {
  kind: 'Prospect',
  name: 'Firstname Lastname',
  task: 'Survey Distribution',
  due: 'Apr 5, 2025',
  status: ['warning', 'In Progress'],
  detail: 'Send client satisfaction Medical Onboarding Tasks to collect feedback and improve service delivery.'
}, {
  kind: 'Resource',
  name: 'Firstname Lastname',
  task: 'Proposal Draft',
  due: 'May 20, 2025',
  status: ['info', 'Pending'],
  detail: 'Develop a plan for onboarding new resource and follow up on his schedules for medical positions.'
}, {
  kind: 'Prospect',
  name: 'Firstname Lastname',
  task: 'Client Meeting',
  due: 'Mar 10, 2025',
  status: ['primary', 'Scheduled'],
  detail: 'Follow up with Dr. other prospective medical staff to finalize onboarding schedules.'
}, {
  kind: 'Resource',
  name: 'Ava Davis',
  task: 'Budget Review',
  due: 'Jun 15, 2025',
  status: ['danger', 'Past Due'],
  detail: 'Review and finalize allocation.'
}, {
  kind: 'Resource',
  name: 'Oliver Martinez',
  task: 'Content Update',
  due: 'Jul 30, 2025',
  status: ['warning', 'In Progress'],
  detail: 'Coordinate onboarding credentials, ensuring timely starts on position schedules.'
}, {
  kind: 'Resource',
  name: 'Isabella Taylor',
  task: 'Strategy Session',
  due: 'Aug 25, 2025',
  status: ['primary', 'Scheduled'],
  detail: 'Follow up with Isabella regarding times and schedules for new shift.'
}];
function DashboardView() {
  const [filter, setFilter] = React.useState('All Tasks');
  const [mine, setMine] = React.useState(true);
  const filters = ['All Tasks', 'Not Started', 'In-Progress', 'Past Due'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: 0
    }
  }, "Locums Program Dashboard"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 4,
      fontSize: 'var(--text-base)'
    }
  }, "Sunset Grove Locums and Traveler Network"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 14,
      margin: '20px 0 22px'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Recruiting",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "recruiting",
      size: 15
    }),
    stats: [{
      label: 'New',
      value: 8,
      tone: 'var(--color-primary)'
    }, {
      label: 'Active',
      value: 12
    }]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Provider Activity",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "activity",
      size: 15
    }),
    value: "5",
    caption: "/ 40 idle",
    segments: [{
      value: 5,
      color: 'var(--color-accent)'
    }, {
      value: 35,
      color: 'var(--slate-150)'
    }]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Jobs",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "jobs",
      size: 15
    }),
    value: "15",
    caption: "Open Jobs"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Submissions",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "submissions",
      size: 15
    }),
    stats: [{
      label: 'In Progress',
      value: 10
    }, {
      label: 'Name Cleared',
      value: 5
    }, {
      label: 'Presented',
      value: 5
    }, {
      label: 'Offered',
      value: 5
    }]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Shifts",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shifts",
      size: 15
    }),
    stats: [{
      label: 'Open',
      value: 30
    }, {
      label: 'Pending',
      value: 15
    }, {
      label: 'Booked',
      value: 10
    }],
    segments: [{
      value: 30,
      color: 'var(--trio-slate)'
    }, {
      value: 15,
      color: 'var(--trio-blue)'
    }, {
      value: 10,
      color: 'var(--trio-blue-light)'
    }]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Billing",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "billing",
      size: 15
    }),
    stats: [{
      label: 'Submitted',
      value: 200
    }, {
      label: 'Draft',
      value: 120
    }, {
      label: 'Decline',
      value: 62,
      tone: 'var(--color-danger)'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    bodyStyle: {
      padding: 0
    },
    title: "My Program Tasks (7)",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "My Tasks", /*#__PURE__*/React.createElement("button", {
      onClick: () => setMine(!mine),
      style: {
        width: 36,
        height: 20,
        borderRadius: 999,
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        background: mine ? 'var(--color-primary)' : 'var(--slate-200)',
        transition: 'background .15s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 2,
        left: mine ? 18 : 2,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: '#fff',
        transition: 'left .15s'
      }
    })), "All Tasks"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, filters.map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: () => setFilter(f),
      style: {
        appearance: 'none',
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
        padding: '5px 11px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid',
        borderColor: filter === f ? 'var(--color-primary)' : 'var(--border-default)',
        background: filter === f ? 'var(--color-primary-subtle)' : 'var(--surface-card)',
        color: filter === f ? 'var(--color-primary)' : 'var(--text-muted)'
      }
    }, f))), /*#__PURE__*/React.createElement("button", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-default)',
        background: 'var(--surface-card)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })))
  }, /*#__PURE__*/React.createElement("div", null, TASKS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '180px 170px 110px 1fr 32px',
      gap: 16,
      alignItems: 'center',
      padding: '14px 20px',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-faint)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, t.kind), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, t.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, t.task, " \u2014"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, "Due: ", t.due)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: t.status[0],
    dot: t.status[0] === 'danger'
  }, t.status[1])), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "Details"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-body)',
      lineHeight: 1.4
    }
  }, t.detail)), /*#__PURE__*/React.createElement("button", {
    style: {
      appearance: 'none',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-faint)',
      display: 'inline-flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 18
  })))))));
}
window.DashboardView = DashboardView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trio-vms/vms-dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trio-vms/vms-tables.jsx
try { (() => {
/* Trio VMS — Jobs & Submissions table views, plus a generic placeholder. */
const _dst = window.TrioWorkforceSolutionsDesignSystem_6da10e;
const {
  Card: _Card,
  Badge: _Badge,
  Icon: _Icon,
  Button: _Btn,
  Avatar: _Av
} = _dst;
function Th({
  children,
  w
}) {
  return /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '10px 16px',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      width: w,
      borderBottom: '1px solid var(--border-default)'
    }
  }, children);
}
function Td({
  children,
  strong
}) {
  return /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 16px',
      fontSize: 13,
      color: strong ? 'var(--text-strong)' : 'var(--text-body)',
      fontWeight: strong ? 700 : 400,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, children);
}
const JOBS = [{
  id: 'JOB-4821',
  title: 'RN — ICU Night',
  unit: 'Critical Care',
  city: 'Dallas, TX',
  rate: '$92.50',
  subs: 4,
  status: ['primary', 'Open']
}, {
  id: 'JOB-4820',
  title: 'Allied — Surg Tech',
  unit: 'Operating Room',
  city: 'Phoenix, AZ',
  rate: '$58.00',
  subs: 7,
  status: ['warning', 'Interviewing']
}, {
  id: 'JOB-4815',
  title: 'RN — Med/Surg',
  unit: 'Med/Surg',
  city: 'Denver, CO',
  rate: '$74.25',
  subs: 2,
  status: ['primary', 'Open']
}, {
  id: 'JOB-4809',
  title: 'Locum — Hospitalist',
  unit: 'Internal Medicine',
  city: 'Tampa, FL',
  rate: '$165.00',
  subs: 5,
  status: ['success', 'Filled']
}, {
  id: 'JOB-4806',
  title: 'RN — Float Pool',
  unit: 'Internal Resource',
  city: 'Sunset Grove',
  rate: '$68.00',
  subs: 9,
  status: ['primary', 'Open']
}, {
  id: 'JOB-4798',
  title: 'Per Diem — CNA',
  unit: 'Long-Term Care',
  city: 'Austin, TX',
  rate: '$31.50',
  subs: 1,
  status: ['danger', 'On Hold']
}];
function ViewHeader({
  title,
  sub,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 4,
      fontSize: 'var(--text-base)'
    }
  }, sub)), action);
}
function JobsView() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ViewHeader, {
    title: "Jobs",
    sub: "Open requisitions across the Locums Program",
    action: /*#__PURE__*/React.createElement(_Btn, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(_Icon, {
        name: "plus",
        size: 15
      })
    }, "New Job")
  }), /*#__PURE__*/React.createElement(_Card, {
    padding: "md",
    bodyStyle: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, {
    w: "110px"
  }, "Job ID"), /*#__PURE__*/React.createElement(Th, null, "Role"), /*#__PURE__*/React.createElement(Th, null, "Unit"), /*#__PURE__*/React.createElement(Th, null, "Location"), /*#__PURE__*/React.createElement(Th, {
    w: "90px"
  }, "Bill Rate"), /*#__PURE__*/React.createElement(Th, {
    w: "90px"
  }, "Subs"), /*#__PURE__*/React.createElement(Th, {
    w: "130px"
  }, "Status"))), /*#__PURE__*/React.createElement("tbody", null, JOBS.map(j => /*#__PURE__*/React.createElement("tr", {
    key: j.id
  }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, j.id)), /*#__PURE__*/React.createElement(Td, {
    strong: true
  }, j.title), /*#__PURE__*/React.createElement(Td, null, j.unit), /*#__PURE__*/React.createElement(Td, null, j.city), /*#__PURE__*/React.createElement(Td, {
    strong: true
  }, j.rate), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(_Badge, {
    tone: "neutral"
  }, j.subs)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(_Badge, {
    tone: j.status[0]
  }, j.status[1]))))))));
}
const SUBS = [{
  name: 'Marcus Bell',
  role: 'RN — ICU Night',
  job: 'JOB-4821',
  supplier: 'Apex Clinical',
  score: 92,
  stage: ['warning', 'In Progress']
}, {
  name: 'Dana Whitfield',
  role: 'Surg Tech',
  job: 'JOB-4820',
  supplier: 'MedSource',
  score: 88,
  stage: ['info', 'Name Cleared']
}, {
  name: 'Priya Nair',
  role: 'RN — Med/Surg',
  job: 'JOB-4815',
  supplier: 'Internal Float Pool',
  score: 95,
  stage: ['primary', 'Presented']
}, {
  name: 'Carlos Reyna',
  role: 'Hospitalist',
  job: 'JOB-4809',
  supplier: 'LocumLink',
  score: 90,
  stage: ['success', 'Offered']
}, {
  name: 'Tasha Green',
  role: 'RN — Float',
  job: 'JOB-4806',
  supplier: 'Apex Clinical',
  score: 84,
  stage: ['warning', 'In Progress']
}];
function ScoreBar({
  score
}) {
  const color = score >= 90 ? 'var(--color-success)' : score >= 85 ? 'var(--color-primary)' : 'var(--color-accent)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 6,
      borderRadius: 999,
      background: 'var(--surface-sunken)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: `${score}%`,
      height: '100%',
      background: color
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, score));
}
function SubmissionsView() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ViewHeader, {
    title: "Submissions",
    sub: "Candidate submissions evaluated by Trio AI",
    action: /*#__PURE__*/React.createElement(_Badge, {
      tone: "info",
      dot: true
    }, "Submission Evaluator AI active")
  }), /*#__PURE__*/React.createElement(_Card, {
    padding: "md",
    bodyStyle: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "Candidate"), /*#__PURE__*/React.createElement(Th, null, "Role"), /*#__PURE__*/React.createElement(Th, {
    w: "110px"
  }, "Job"), /*#__PURE__*/React.createElement(Th, null, "Supplier"), /*#__PURE__*/React.createElement(Th, {
    w: "140px"
  }, "AI Fit Score"), /*#__PURE__*/React.createElement(Th, {
    w: "140px"
  }, "Stage"))), /*#__PURE__*/React.createElement("tbody", null, SUBS.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.name
  }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(_Av, {
    name: s.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, s.name))), /*#__PURE__*/React.createElement(Td, null, s.role), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, s.job)), /*#__PURE__*/React.createElement(Td, null, s.supplier), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(ScoreBar, {
    score: s.score
  })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(_Badge, {
    tone: s.stage[0]
  }, s.stage[1]))))))));
}
function PlaceholderView({
  id
}) {
  const label = id.charAt(0).toUpperCase() + id.slice(1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ViewHeader, {
    title: label,
    sub: "Section preview"
  }), /*#__PURE__*/React.createElement(_Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      color: 'var(--text-muted)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--slate-300)'
    }
  }, /*#__PURE__*/React.createElement(_Icon, {
    name: "dashboard",
    size: 40
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, label, " view"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      textAlign: 'center',
      maxWidth: 360
    }
  }, "This screen is part of the Trio VMS kit. Open ", /*#__PURE__*/React.createElement("b", null, "Dashboard"), ", ", /*#__PURE__*/React.createElement("b", null, "Jobs"), ", or ", /*#__PURE__*/React.createElement("b", null, "Submissions"), " for fully built examples."))));
}
Object.assign(window, {
  JobsView,
  SubmissionsView,
  PlaceholderView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trio-vms/vms-tables.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
