#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

function on_cell_toggled(cellrenderertoggle, treepath)
{
    var treeiter = {};

    var success = liststore.get_iter_from_string(treeiter, treepath);

    var state = !cellrenderertoggle.get_active();
    liststore.set_value(treeiter.iter, 1, state, -1);
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("CellRendererToggle");
window.signal.connect("destroy", Gtk.main_quit);

var treeiter = {};

var liststore = new Gtk.ListStore();
liststore.set_column_types(2, [GObject.TYPE_STRING, GObject.TYPE_BOOLEAN]);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Ethernet", -1);
liststore.set_value(treeiter.iter, 1, true, -1);

liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Wireless", -1);
liststore.set_value(treeiter.iter, 1, false, -1);

liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Bluetooth", -1);
liststore.set_value(treeiter.iter, 1, false, -1);

liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Mobile", -1);
liststore.set_value(treeiter.iter, 1, false, -1);

var treeview = new Gtk.TreeView();
treeview.set_model(liststore);
window.add(treeview);

var cellrenderertext = new Gtk.CellRendererText();

var treeviewcolumn = new Gtk.TreeViewColumn({title: "Connection Type"});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, "text", 0);
treeview.append_column(treeviewcolumn);

var cellrenderertoggle = new Gtk.CellRendererToggle();
cellrenderertoggle.signal.connect("toggled", on_cell_toggled);

var treeviewcolumn = new Gtk.TreeViewColumn({title: "Status"});
treeviewcolumn.pack_start(cellrenderertoggle, true);
treeviewcolumn.add_attribute(cellrenderertoggle, "active", 1);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
