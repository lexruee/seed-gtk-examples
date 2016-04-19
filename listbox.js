#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("ListBox");
window.set_default_size(200, -1)
window.signal.connect("destroy", Gtk.main_quit);

var listbox = new Gtk.ListBox();
window.add(listbox);

for (var count = 1; count < 10; count++)
{
    var label = new Gtk.Label({label: "Label " + count});
    listbox.insert(label, count);
}

window.show_all();

Gtk.main();
