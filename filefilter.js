#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var filechooserdialog = new Gtk.FileChooserDialog();
filechooserdialog.set_title("FileFilter");
filechooserdialog.add_button("_Cancel", Gtk.ResponseType.CANCEL);
filechooserdialog.add_button("_Open", Gtk.ResponseType.OK);

var filefilter = new Gtk.FileFilter();
filefilter.set_name("All Items");
filefilter.add_pattern("*");
filechooserdialog.add_filter(filefilter);

var filefilter = new Gtk.FileFilter();
filefilter.set_name("Audio")
filefilter.add_mime_type("audio/flac")
filefilter.add_mime_type("audio/ogg")
filechooserdialog.add_filter(filefilter)

var filefilter = new Gtk.FileFilter();
filefilter.set_name("Images")
filefilter.add_pattern("*.png")
filefilter.add_pattern("*.jpg")
filefilter.add_pattern("*.bmp")
filechooserdialog.add_filter(filefilter)

if (filechooserdialog.run() == Gtk.ResponseType.OK)
{
    print("File set to " + filechooserdialog.get_filename());
}

filechooserdialog.destroy();
