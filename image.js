#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Image");
window.signal.connect("destroy", Gtk.main_quit);

var image = new Gtk.Image();
image.set_from_file("_resources/gtk.png");
window.add(image);

window.show_all();

Gtk.main();
