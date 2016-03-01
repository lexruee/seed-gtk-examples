#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_color_activated()
{
    var color = colorchooserwidget.get_rgba();
    print("Color set to " + color.color.red + ", " + color.color.green + ", " + color.color.blue);
}

var window = new Gtk.Window();
window.set_title("ColorChooserWidget");
window.set_border_width(5);
window.signal.connect("destroy", Gtk.main_quit);

var colorchooserwidget = new Gtk.ColorChooserWidget();
colorchooserwidget.signal.connect("color-activated", on_color_activated);
window.add(colorchooserwidget);

window.show_all();

Gtk.main();
