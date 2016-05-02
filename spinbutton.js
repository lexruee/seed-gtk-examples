#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_spinbutton_changed(spinbutton)
{
    print('SpinButton value: ' + spinbutton.get_value());
}

var window = new Gtk.Window();
window.set_title('SpinButton');
window.signal.connect('destroy', Gtk.main_quit);

var spinbutton = new Gtk.SpinButton();
spinbutton.set_range(0, 100);
spinbutton.set_value(50);
spinbutton.set_increments(1, 10);
spinbutton.signal.connect('value-changed', on_spinbutton_changed)
window.add(spinbutton);

window.show_all();

Gtk.main();
