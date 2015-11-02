#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_default_size(350, 200);
window.set_title("Paned");
window.signal.hide.connect(Gtk.main_quit);

var hpaned = new Gtk.Paned({orientation: Gtk.Orientation.HORIZONTAL});
window.add(hpaned);

var label = new Gtk.Label({label: "Left Pane"});
hpaned.add1(label);

var vpaned = new Gtk.Paned({orientation: Gtk.Orientation.VERTICAL});
hpaned.add2(vpaned);

var label = new Gtk.Label({label: "Top-Right Pane"});
vpaned.add1(label);
var label = new Gtk.Label({label: "Bottom-Right Pane"});
vpaned.add2(label);

window.show_all();

Gtk.main();
