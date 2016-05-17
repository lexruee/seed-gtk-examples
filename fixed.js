#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_default_size(200, 200);
window.set_title('Fixed');
window.set_border_width(5);
window.signal.connect('destroy', Gtk.main_quit)

var fixed = new Gtk.Fixed();
fixed.set_vexpand(true);
fixed.set_hexpand(true);
window.add(fixed);

var button = new Gtk.Button({label: 'Button 1'});
fixed.put(button, 40, 60);
var button = new Gtk.Button({label: 'Button 2'});
fixed.put(button, 120, 95);
var button = new Gtk.Button({label: 'Button 3'});
fixed.put(button, 15, 160);

window.show_all();

Gtk.main();
