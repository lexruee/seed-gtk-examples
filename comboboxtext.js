#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_comboboxtext_changed()
{
    print("Selected vehicle is " + comboboxtext.get_active_text());
}

var window = new Gtk.Window();
window.set_title("ComboBoxText");
window.set_default_size(200, -1);
window.signal.connect("destroy", Gtk.main_quit);

var comboboxtext = new Gtk.ComboBoxText();
comboboxtext.append_text("Car");
comboboxtext.append_text("Motorcycle");
comboboxtext.append_text("Van");
comboboxtext.append_text("Lorry");
comboboxtext.append_text("Truck");
comboboxtext.set_active(0);
comboboxtext.signal.connect("changed", on_comboboxtext_changed);
window.add(comboboxtext);

window.show_all();

Gtk.main();
