const { remote } = window.require('electron');
const { Menu } = remote;

/**
 * Helper to create any customised context menu.
 * @see Check `./file-tree-entry-menu.js` for an example.
 */
export default class BaseMenu {
  constructor(template, options = {}) {
    this.template = template;
    this.options = options;
  }

  open(options, popupOptions = { x: null, y: null }) {
    const template = this.template(options);
    this.instance = Menu.buildFromTemplate(template);
    this.instance.popup(remote.getCurrentWindow(), {
      async: true,
      x: popupOptions.x,
      y: popupOptions.y,
    });
  }
}
