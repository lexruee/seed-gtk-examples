#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GdkPixbuf = imports.gi.GdkPixbuf;

Gtk.init(null, null);

function on_tooltip_query(button, x, y, keyboard_mode, tooltip)
{
    tooltip.set_text("Displaying an advanced tooltip.");
    tooltip.set_icon(icon);

    return true;
}

var window = new Gtk.Window();
window.set_title("Tooltip");
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var button = new Gtk.Button({label: "Simple Tooltip"});
button.set_tooltip_text("Displaying a simple tooltip.");
grid.attach(button, 0, 0, 1, 1);

var tooltip = new Gtk.Tooltip();
var icon = new GdkPixbuf.Pixbuf.from_file_at_size('_resources/gtk.png', 16, 16);

var button = new Gtk.Button({label: "Advanced Tooltip"});
button.set_has_tooltip(true);
button.signal.connect("query-tooltip", on_tooltip_query);
grid.attach(button, 0, 1, 1, 1);

window.show_all();

Gtk.main();
