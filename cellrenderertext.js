#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

function on_cell_edited(cellrenderertext, treepath, text)
{
    var treeiter = {};

    var success = liststore.get_iter_from_string(treeiter, treepath);
    liststore.set_value(treeiter.iter, 1, text, -1);
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("CellRendererText");
window.signal.connect("destroy", Gtk.main_quit);

var treeiter = {};

var liststore = new Gtk.ListStore();
liststore.set_column_types(2, [GObject.TYPE_STRING, GObject.TYPE_STRING]);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Antergos", -1);
liststore.set_value(treeiter.iter, 1, "http://www.antergos.com/", -1);

liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Manjaro", -1);
liststore.set_value(treeiter.iter, 1, "http://www.manjaro.org/", -1);

liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Chakra", -1);
liststore.set_value(treeiter.iter, 1, "http://www.chakraos.org/", -1);

var treeview = new Gtk.TreeView();
treeview.set_model(liststore);
window.add(treeview);

var cellrenderertext = new Gtk.CellRendererText();

var treeviewcolumn = new Gtk.TreeViewColumn({title: "Distribution"});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, "text", 0);
treeview.append_column(treeviewcolumn);

var cellrenderertext = new Gtk.CellRendererText();
cellrenderertext.editable = true;
cellrenderertext.signal.connect("edited", on_cell_edited);

var treeviewcolumn = new Gtk.TreeViewColumn({title: "Website"});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, "text", 1);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
