#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title("Separator");
window.set_default_size(400, 200);
window.signal.connect("destroy", Gtk.main_quit);

var box = new Gtk.Box();
window.add(box);

var separator = new Gtk.Separator();
separator.set_hexpand(true);
separator.set_vexpand(true);
box.pack_start(separator, true, true, 0);

var separator = new Gtk.Separator();
separator.set_orientation(Gtk.Orientation.VERTICAL);
separator.set_hexpand(true);
separator.set_vexpand(true);
box.pack_start(separator, true, true, 0);

window.show_all();

Gtk.main();
