#!/usr/bin/env seed

Gtk = imports.gi.Gtk;
GdkPixbuf = imports.gi.GdkPixbuf;
GObject = imports.gi.GObject;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title("CellRendererPixbuf");
window.signal.connect("destroy", Gtk.main_quit);

var liststore = new Gtk.ListStore();
liststore.set_column_types(2, [GObject.TYPE_STRING, GObject.TYPE_OBJECT]);

var treeiter = {};

icon = new GdkPixbuf.Pixbuf.from_file_at_size("_resources/fedora.ico", 16, 16);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Fedora", -1);
liststore.set_value(treeiter.iter, 1, icon, -1);

icon = new GdkPixbuf.Pixbuf.from_file_at_size("_resources/debian.ico", 16, 16);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Debian", -1);
liststore.set_value(treeiter.iter, 1, icon, -1);

icon = new GdkPixbuf.Pixbuf.from_file_at_size("_resources/gentoo.ico", 16, 16);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, "Gentoo", -1);
liststore.set_value(treeiter.iter, 1, icon, -1);

var cellrenderertext = new Gtk.CellRendererText();
var cellrendererpixbuf = new Gtk.CellRendererPixbuf();

var treeview = new Gtk.TreeView();
treeview.set_model(liststore);
window.add(treeview);

var treeviewcolumn = new Gtk.TreeViewColumn({title: "Distribution"});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, "text", 0);
treeview.append_column(treeviewcolumn);

var treeviewcolumn = new Gtk.TreeViewColumn({title: "Logo"});
treeviewcolumn.pack_start(cellrendererpixbuf, true);
treeviewcolumn.add_attribute(cellrendererpixbuf, "pixbuf", 1);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
