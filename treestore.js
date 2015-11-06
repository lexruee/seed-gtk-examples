#!/usr/bin/env seed

Gtk = imports.gi.Gtk;
GObject = imports.gi.GObject;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title("TreeStore");
window.set_default_size(200, 200);
window.signal.connect("destroy", Gtk.main_quit);

var treestore = new Gtk.TreeStore();
treestore.set_column_types(1, [GObject.TYPE_STRING]);

var treeiter = {};
var treeiter2 = {};

treestore.append(treeiter);
treestore.set_value(treeiter.iter, 0, "Valcado", -1);
treestore.append(treeiter2, treeiter.iter);
treestore.set_value(treeiter2.iter, 0, "Unit 2, Long Way, Gormston", -1);
treestore.append(treeiter);
treestore.set_value(treeiter.iter, 0, "Castle Logistics", -1);
treestore.append(treeiter2, treeiter.iter);
treestore.set_value(treeiter2.iter, 0, "Gee House, May Lane, Kendal", -1);
treestore.append(treeiter);
treestore.set_value(treeiter.iter, 0, "Firefly Artworks", -1);
treestore.append(treeiter2, treeiter.iter);
treestore.set_value(treeiter2.iter, 0, "1882 Holder Street, Burden", -1);

var cellrenderertext = new Gtk.CellRendererText();
var treeview = new Gtk.TreeView();
treeview.set_model(treestore);
window.add(treeview);

var treeviewcolumn = new Gtk.TreeViewColumn({title: "Company"});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, "text", 0);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
