#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_default_size(200, 200);
window.set_title('ScrolledWindow');
window.set_border_width(5);
window.signal.connect('destroy', Gtk.main_quit);

var scrolledwindow = new Gtk.ScrolledWindow();
window.add(scrolledwindow);

var layout = new Gtk.Layout();
layout.set_size(800, 600);
layout.set_vexpand(true);
layout.set_hexpand(true);
scrolledwindow.add(layout);

var hadjustment = layout.get_hadjustment();
scrolledwindow.set_hadjustment(hadjustment);
var vadjustment = layout.get_vadjustment();
scrolledwindow.set_vadjustment(vadjustment);

var button = new Gtk.Button({label: 'Button 1'});
layout.put(button, 645, 140);
var button = new Gtk.Button({label: 'Button 2'});
layout.put(button, 130, 225);
var button = new Gtk.Button({label: 'Button 3'});
layout.put(button, 680, 350);

window.show_all();

Gtk.main();
