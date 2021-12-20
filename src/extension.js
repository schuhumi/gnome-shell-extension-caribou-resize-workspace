
const Main = imports.ui.main;

function init() {

}

function enable() {
    // Make caribou resize windows to not cover them
    Main.layoutManager.removeChrome(Main.layoutManager.keyboardBox);
    Main.layoutManager.addTopChrome(   Main.layoutManager.keyboardBox, { affectsStruts: true, trackFullscreen: true });

}

function disable() {
    // Revert: Make caribou resize windows to not cover them
    Main.layoutManager.removeChrome(Main.layoutManager.keyboardBox);
    Main.layoutManager.addTopChrome(   Main.layoutManager.keyboardBox);
}
