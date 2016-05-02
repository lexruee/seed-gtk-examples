#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_volume_button_changed(volumebutton)
{
    print(volumebutton.get_value());
}

var window = new Gtk.Window();
window.set_title('VolumeButton');
window.set_default_size(200, 200);
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var volumebutton = new Gtk.VolumeButton();
volumebutton.signal.connect('value-changed', on_volume_button_changed);
grid.attach(volumebutton, 0, 0, 1, 1);

window.show_all();

Gtk.main();
