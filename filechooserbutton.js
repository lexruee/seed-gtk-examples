#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_file_set()
{
    print("File set to " + filechooserbutton.get_filename());
}

var window = new Gtk.Window();
window.set_title("FileChooserButton");
window.set_default_size(200, -1);
window.signal.connect("destroy", Gtk.main_quit);

var filechooserbutton = new Gtk.FileChooserButton();
filechooserbutton.set_title("FileChooserButton");
filechooserbutton.signal.connect("file-set", on_file_set);
window.add(filechooserbutton);

window.show_all();

Gtk.main();
