#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title('Grid');
window.set_border_width(5);
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
grid.set_row_spacing(5);
grid.set_column_spacing(5);
grid.set_row_homogeneous(true);
grid.set_column_homogeneous(true);
window.add(grid);

var label = new Gtk.Label({label: 'Position 0, 0'});
grid.attach(label, 0, 0, 1, 1);
var label = new Gtk.Label({label: 'Position 0, 1'});
grid.attach(label, 0, 1, 1, 1);
var label = new Gtk.Label({label: 'Position 1, 1 (2 wide)'});
grid.attach(label, 1, 1, 2, 1);
var label = new Gtk.Label({label: 'Position 0, 2 (3 high)'});
grid.attach(label, 0, 2, 1, 3);

window.show_all();

Gtk.main();
