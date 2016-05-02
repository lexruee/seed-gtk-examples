#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title('Window');
window.signal.connect('destroy', Gtk.main_quit);
window.show_all();

Gtk.main();
