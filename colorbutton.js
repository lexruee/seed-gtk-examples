#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_color_set()
{
    var color = colorbutton.get_rgba();
    print('Color set to ' + color.color.red + ', ' + color.color.green + ', ' + color.color.blue);
}

var window = new Gtk.Window();
window.set_title('ColorButton');
window.set_default_size(200, -1);
window.signal.connect('destroy', Gtk.main_quit);

var colorbutton = new Gtk.ColorButton();
colorbutton.set_title('ColorButton');
colorbutton.signal.connect('color-set', on_color_set);
window.add(colorbutton);

window.show_all();

Gtk.main();
