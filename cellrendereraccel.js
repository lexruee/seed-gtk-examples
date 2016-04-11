#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

function on_cell_edited(cellrenderertext, treepath, key, modifier, hwcode)
{
    var accelerator = Gtk.accelerator_name(key, modifier);

    var treeiter = {};

    var success = liststore.get_iter_from_string(treeiter, treepath);
    liststore.set_value(treeiter.iter, 1, accelerator, -1);
}

function on_cell_cleared(cellrendereraccel, treepath)
{
    var treeiter = {};

    var success = liststore.get_iter_from_string(treeiter, treepath);
    liststore.set_value(treeiter.iter, 1, "None", -1);
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("CellRendererAccel");
window.signal.connect("destroy", Gtk.main_quit);

var treeiter = {};

var liststore = new Gtk.ListStore();
liststore.set_column_types(2, [GObject.TYPE_STRING, GObject.TYPE_STRING]);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "New", -1);
liststore.set_value(treeiter.iter, 1, "<Primary>n", -1);

liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Open", -1);
liststore.set_value(treeiter.iter, 1, "<Primary>o", -1);

liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Save", -1);
liststore.set_value(treeiter.iter, 1, "<Primary>s", -1);

var treeview = new Gtk.TreeView();
treeview.set_model(liststore);
window.add(treeview);

var cellrenderertext = new Gtk.CellRendererText();

var treeviewcolumn = new Gtk.TreeViewColumn({title: "Action"});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, "text", 0);
treeview.append_column(treeviewcolumn);

var cellrendereraccel = new Gtk.CellRendererAccel();
cellrendereraccel.editable = true;
cellrendereraccel.signal.connect("accel-edited", on_cell_edited);
cellrendereraccel.signal.connect("accel-cleared", on_cell_cleared);

var treeviewcolumn = new Gtk.TreeViewColumn({title: "Accelerator"});
treeviewcolumn.pack_start(cellrendereraccel, true);
treeviewcolumn.add_attribute(cellrendereraccel, "text", 1);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
