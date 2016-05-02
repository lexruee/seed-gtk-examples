#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var fontchooserdialog = new Gtk.FontChooserDialog();
fontchooserdialog.set_title('FontChooserDialog');

if (fontchooserdialog.run() == Gtk.ResponseType.OK)
{
    print('Font set to ' + fontchooserdialog.get_font());
}

fontchooserdialog.destroy();
