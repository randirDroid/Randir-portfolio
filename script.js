// class Component extends DCLogic {
//   state = { dark: false, accentIdx: null };
//   componentDidUpdate() { this.applyTheme(); }
//   setRoot = (el) => { this._root = el; if (el) this.applyTheme(); };
//   applyTheme() {
//     const el = this._root; if (!el) return;
//     const palette = ['#ffd02e', '#ff7bac', '#5b8cff', '#c2f24a', '#ff7a3c'];
//     const accent = this.state.accentIdx != null ? palette[this.state.accentIdx % palette.length] : (this.props.accent || '#ffd02e');
//     el.style.setProperty('--accent', accent);
//     const sh = { tight: '4px', medium: '7px', bold: '11px' };
//     el.style.setProperty('--shadow', sh[this.props.shadow] || '7px');
//     if (this.state.dark) {
//       el.style.setProperty('--ink', '#f3ead8');
//       el.style.setProperty('--card', '#202020');
//       el.style.setProperty('--paper', '#161616');
//       el.style.setProperty('--muted', '#b9b3a4');
//     } else {
//       el.style.setProperty('--ink', '#111');
//       el.style.setProperty('--card', '#fff');
//       el.style.setProperty('--muted', '#5a5a5a');
//       const paper = { cream: '#f5efe0', mint: '#d8f3e3', sky: '#dbe9ff', pink: '#ffe1ec' };
//       el.style.setProperty('--paper', paper[this.props.surface] || '#f5efe0');
//     }
//   }
//   renderVals() {
//     return {
//       setRoot: this.setRoot,
//       darkIcon: this.state.dark ? '☀' : '☾',
//       toggleDark: () => this.setState(s => ({ ...s, dark: !s.dark }), () => this.applyTheme()),
//       cycleAccent: () => this.setState(s => ({ ...s, accentIdx: (s.accentIdx == null ? 1 : s.accentIdx + 1) }), () => this.applyTheme()),
//     };
//   }
// }
