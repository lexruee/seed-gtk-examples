#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title("EntryBuffer");
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var entrybuffer = new Gtk.EntryBuffer();
entrybuffer.set_text("Shared Entry text", -1);

var entry = new Gtk.Entry();
entry.set_buffer(entrybuffer);
grid.attach(entry, 0, 0, 1, 1);

var entry = new Gtk.Entry();
entry.set_buffer(entrybuffer);
grid.attach(entry, 0, 1, 1, 1);

var entry = new Gtk.Entry();
entry.set_buffer(entrybuffer);
grid.attach(entry, 0, 2, 1, 1);

window.show_all();

Gtk.main();
