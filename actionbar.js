#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("ActionBar");
window.set_default_size(200, 200);
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var actionbar = new Gtk.ActionBar();
actionbar.set_hexpand(true);
grid.attach(actionbar, 0, 1, 1, 1);

var label = new Gtk.Label({label: ""});
label.set_vexpand(true);
grid.attach(label, 0, 0, 1, 1);

var button = new Gtk.Button({label: "Cut"});
actionbar.pack_start(button);
var button = new Gtk.Button({label: "Copy"});
actionbar.pack_start(button);
var button = new Gtk.Button({label: "Paste"});
actionbar.pack_end(button);

window.show_all();

Gtk.main();
