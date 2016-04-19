#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var filechooserdialog = new Gtk.FileChooserDialog();
filechooserdialog.set_title("FileChooserDialog");
filechooserdialog.add_button("_Cancel", Gtk.ResponseType.CANCEL);
filechooserdialog.add_button("_Select", Gtk.ResponseType.OK);

if (filechooserdialog.run() == Gtk.ResponseType.OK)
{
    print("File set to " + filechooserdialog.get_filename());
}

filechooserdialog.destroy();
