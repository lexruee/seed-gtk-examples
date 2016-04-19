#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title("Frame");
window.set_default_size(200, 200);
window.set_border_width(5);
window.signal.connect("destroy", Gtk.main_quit);

var frame = new Gtk.Frame({label: "Frame"});
window.add(frame);

var label = new Gtk.Label({label: "Label in a Frame"});
frame.add(label);

window.show_all();

Gtk.main();
