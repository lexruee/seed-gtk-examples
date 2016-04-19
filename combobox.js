#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

function on_combobox_changed(combobox)
{
    var treeiter = {};
    var success = combobox.get_active_iter(treeiter);

    if (success)
    {
        var cake = liststore.get_value(treeiter.iter, 0).value.get_string();
        print("Cake selection is " + cake);
    }
}

var window = new Gtk.Window();
window.set_title("ComboBox");
window.set_default_size(200, -1);
window.signal.connect("destroy", Gtk.main_quit);

var liststore = new Gtk.ListStore();
liststore.set_column_types(1, [GObject.TYPE_STRING]);

var cakes = ["Sponge", "Carrot", "Fruit", "Chocolate Fudge", "Cream"];

var treeiter = {};

for (var i = 0; i < cakes.length; i++)
{
    liststore.append(treeiter);
    liststore.set_value(treeiter.iter, 0, cakes[i] + " Cake", -1);
}

var cellrenderertext = new Gtk.CellRendererText();

var combobox = new Gtk.ComboBox();
combobox.set_model(liststore);
combobox.set_active(0);
combobox.pack_start(cellrenderertext, true);
combobox.add_attribute(cellrenderertext, "text", 0);
combobox.signal.connect("changed", on_combobox_changed);
window.add(combobox);

window.show_all();

Gtk.main();
