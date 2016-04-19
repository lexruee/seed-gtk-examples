#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_entry_changed(entry)
{
    levelbar.set_value(entry.get_text_length());
}

var window = new Gtk.Window();
window.set_title("LevelBar");
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var entry = new Gtk.Entry();
entry.signal.connect("changed", on_entry_changed);
grid.attach(entry, 0, 0, 1, 1);

var levelbar = new Gtk.LevelBar();
levelbar.set_max_value(50);
grid.attach(levelbar, 0, 1, 1, 1);

window.show_all();

Gtk.main();
