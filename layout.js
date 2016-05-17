#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_default_size(200, 200);
window.set_title('Layout');
window.set_border_width(5);
window.signal.connect('destroy', Gtk.main_quit)

var layout = new Gtk.Layout();
layout.set_size(200, 200);
layout.set_vexpand(true);
layout.set_hexpand(true);
window.add(layout);

var button = new Gtk.Button({label: 'Button 1'});
layout.put(button, 40, 60);
var button = new Gtk.Button({label: 'Button 2'});
layout.put(button, 120, 95);
var button = new Gtk.Button({label: 'Button 3'});
layout.put(button, 15, 160);

window.show_all();

Gtk.main();
