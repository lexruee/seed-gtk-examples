#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

colorchooserdialog = new Gtk.ColorChooserDialog();
colorchooserdialog.set_title("ColorChooserDialog");

if (colorchooserdialog.run() == Gtk.ResponseType.OK)
{
    var color = colorchooserdialog.get_rgba();
    print("Color set to " + color.color.red + ", " + color.color.green + ", " + color.color.blue);
}

colorchooserdialog.destroy();
