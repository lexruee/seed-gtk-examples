#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_spinbutton_changed(spinbutton)
{
    print(spinbutton.get_value());
}

var window = new Gtk.Window();
window.set_title("SpinButton");
window.signal.hide.connect(Gtk.main_quit);

var spinbutton = new Gtk.SpinButton();
spinbutton.set_range(0, 100);
spinbutton.set_value(50);
spinbutton.set_increments(1, 10);
spinbutton.signal.value_changed.connect(on_spinbutton_changed)
window.add(spinbutton);

window.show_all();

Gtk.main();
