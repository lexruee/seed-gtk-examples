#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title("Window");
window.signal.hide.connect(Gtk.main_quit);
window.show_all();

Gtk.main();