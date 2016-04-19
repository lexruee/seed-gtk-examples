#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_scale_changed(scale)
{
    if (scale.type == 0)
    {
        print("Horizontal Scale value: " + scale.get_value());
    }
    else if (scale.type == 1)
    {
        print("Vertical Scale value: " + scale.get_value());
    }
}

var window = new Gtk.Window();
window.set_title("Scale");
window.set_default_size(400, 200);
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
grid.set_column_homogeneous(true);
window.add(grid);

var scale = new Gtk.Scale.with_range(Gtk.Orientation.HORIZONTAL, 0, 100, 1);
scale.set_hexpand(true);
scale.type = 0;
scale.signal.connect("value-changed", on_scale_changed);
grid.attach(scale, 0, 0, 1, 1);

var scale = new Gtk.Scale.with_range(Gtk.Orientation.VERTICAL, 25, 50, 1);
scale.type = 1;
scale.set_value(35);
scale.set_vexpand(true);
scale.signal.connect("value-changed", on_scale_changed);
grid.attach(scale, 1, 0, 1, 1);

window.show_all();

Gtk.main();
