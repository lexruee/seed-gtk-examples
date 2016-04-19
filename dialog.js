#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var dialog = new Gtk.Dialog();
dialog.set_title("Dialog")
dialog.set_default_size(200, 200);
dialog.add_button("_OK", Gtk.ResponseType.OK);
dialog.add_button("_Cancel", Gtk.ResponseType.CANCEL);

var response = dialog.run();

if (response == Gtk.ResponseType.OK)
{
    print("OK button clicked");
}
else if (response == Gtk.ResponseType.CANCEL)
{
    print("Cancel button clicked");
}

dialog.destroy();
