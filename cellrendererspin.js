#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

function on_cell_edited(cellrendererspin, treepath, value)
{
    var treeiter = {};

    var success = liststore.get_iter_from_string(treeiter, treepath);
    liststore.set_value(treeiter.iter, 1, value, -1);
}

var window = new Gtk.Window();
window.set_default_size(200, -1);
window.set_title('CellRendererSpin');
window.signal.connect('destroy', Gtk.main_quit);

var treeiter = {};

var liststore = new Gtk.ListStore();
liststore.set_column_types(2, [GObject.TYPE_STRING, GObject.TYPE_STRING]);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Pencils', -1);
liststore.set_value(treeiter.iter, 1, '4', -1);

liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Compasses', -1);
liststore.set_value(treeiter.iter, 1, '2', -1);

liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, 'Rulers', -1);
liststore.set_value(treeiter.iter, 1, '1', -1);

var treeview = new Gtk.TreeView();
treeview.set_model(liststore);
window.add(treeview);

var cellrenderertext = new Gtk.CellRendererText();

var treeviewcolumn = new Gtk.TreeViewColumn({title: 'Item'});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, 'text', 0);
treeview.append_column(treeviewcolumn);

var adjustment = new Gtk.Adjustment({value: 0,
                                     lower: 0,
                                     upper: 10,
                                     step_increment: 1,
                                     page_increment: 2});

var cellrendererspin = new Gtk.CellRendererSpin();
cellrendererspin.editable = true;
cellrendererspin.adjustment = adjustment;
cellrendererspin.signal.connect('edited', on_cell_edited);

var treeviewcolumn = new Gtk.TreeViewColumn({title: 'Quantity'});
treeviewcolumn.pack_start(cellrendererspin, true);
treeviewcolumn.add_attribute(cellrendererspin, 'text', 1);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
