#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_scale_button_changed(scalebutton)
{
    print(scalebutton.get_value());
}

var window = new Gtk.Window();
window.set_title("ScaleButton");
window.set_default_size(200, 200);
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var scalebutton = new Gtk.ScaleButton();
scalebutton.set_value(5);
scalebutton.set_icons(["gtk-go-down", "gtk-go-up"]);
scalebutton.signal.connect("value-changed", on_scale_button_changed);
grid.attach(scalebutton, 0, 0, 1, 1);

window.show_all();

Gtk.main();
