#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title('ListStore');
window.set_default_size(200, 200);
window.signal.connect('destroy', Gtk.main_quit);

var liststore = new Gtk.ListStore();
liststore.set_column_types(2, [GObject.TYPE_STRING, GObject.TYPE_STRING]);

var treeiter = {};
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Potato', -1);
liststore.set_value(treeiter.iter, 1, 'Jersey', -1);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Carrot', -1);
liststore.set_value(treeiter.iter, 1, 'Mini', -1);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Mushroom', -1);
liststore.set_value(treeiter.iter, 1, 'White Button', -1);

var cellrenderertext = new Gtk.CellRendererText();
var treeview = new Gtk.TreeView();
treeview.set_model(liststore);
window.add(treeview);

var treeviewcolumn = new Gtk.TreeViewColumn({title: 'Vegetable'});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, 'text', 0);
treeview.append_column(treeviewcolumn);

var treeviewcolumn = new Gtk.TreeViewColumn({title: 'Type'});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, 'text', 1);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
