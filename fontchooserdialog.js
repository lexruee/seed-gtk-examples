#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

fontchooserdialog = new Gtk.FontChooserDialog();
fontchooserdialog.set_title("FontChooserDialog");

if (fontchooserdialog.run() == Gtk.ResponseType.OK)
{
    print("Font set to " + fontchooserdialog.get_font());
}

fontchooserdialog.destroy();
