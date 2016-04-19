#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title("ButtonBox");
window.signal.connect("destroy", Gtk.main_quit);

var buttonbox = new Gtk.ButtonBox();
buttonbox.set_spacing(2);
window.add(buttonbox);

var button = new Gtk.Button({label: "Iron"});
buttonbox.add(button);
var button = new Gtk.Button({label: "Zinc"});
buttonbox.add(button);
var button = new Gtk.Button({label: "Potassium"});
buttonbox.add(button);

window.show_all();

Gtk.main();
