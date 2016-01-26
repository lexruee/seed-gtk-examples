#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_font_set()
{
    print("Font set to " + fontbutton.get_font());
}

var window = new Gtk.Window();
window.set_title("FontButton");
window.set_default_size(200, -1);
window.signal.connect("destroy", Gtk.main_quit);

var fontbutton = new Gtk.FontButton();
fontbutton.set_title("FontButton");
fontbutton.signal.connect("font-set", on_font_set);
window.add(fontbutton);

window.show_all();

Gtk.main();
