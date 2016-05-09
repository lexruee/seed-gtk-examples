#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title('TreeModelSort');
window.set_default_size(200, 200);
window.signal.connect('destroy', Gtk.main_quit);

var liststore = new Gtk.ListStore();
liststore.set_column_types(1, [GObject.TYPE_STRING]);

var treeiter = {};
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Volkswagen', -1);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Ferrari', -1);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Audi', -1);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Porsche', -1);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Chevrolet', -1);

var treemodelsort = new Gtk.TreeModelSort({model: liststore});
treemodelsort.set_sort_column_id(0, Gtk.SortType.ASCENDING);

var cellrenderertext = new Gtk.CellRendererText();
var treeview = new Gtk.TreeView();
treeview.set_model(treemodelsort);
window.add(treeview);

var treeviewcolumn = new Gtk.TreeViewColumn({title: 'Cars'});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, 'text', 0);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
