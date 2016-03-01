#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_font_activated()
{
    print("Font set to " + fontbutton.get_font());
}

var window = new Gtk.Window();
window.set_title("FontChooserWidget");
window.set_border_width(5);
window.signal.connect("destroy", Gtk.main_quit);

var fontchooserwidget = new Gtk.FontChooserWidget();
fontchooserwidget.signal.connect("font-activated", on_font_activated);
window.add(fontchooserwidget);

window.show_all();

Gtk.main();
