var d = require("obsidian");

class PluginStoreShortcutPlugin extends d.Plugin {
  async onload() {
    this.addRibbonIcon("puzzle", "Installed plugins", () => {
      this.app.setting.open();
      this.app.setting.openTabById("community-plugins");
    });
  }

  onunload() {}
}

module.exports = PluginStoreShortcutPlugin;
