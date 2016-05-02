#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

function on_present_toggled(checkbutton)
{
    treemodelfilter.refilter();
}

function filter_visible(model, treeiter, data)
{
    var visible = true;

    if (checkbutton.get_active())
        if (model.get_value(treeiter, 1).value.get_int() < 70)
            visible = false;

    return visible;
}

var window = new Gtk.Window();
window.set_title('TreeModelFilter');
window.set_default_size(200, 200);
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var liststore = new Gtk.ListStore();
liststore.set_column_types(2, [GObject.TYPE_STRING, GObject.TYPE_INT]);

var students = [{name: 'Andrew', exam: 65},
                {name: 'Marcus', exam: 93},
                {name: 'Timothy', exam: 48},
                {name: 'Lucas', exam: 77},
                {name: 'Fred', exam: 72}]

for (var i=0; i < students.length; i++)
{
    var treeiter = {};
    liststore.append(treeiter);
    liststore.set_value(treeiter.iter, 0, students[i].name, -1);
    liststore.set_value(treeiter.iter, 1, students[i].exam, -1);
}

var checkbutton = new Gtk.CheckButton({label: 'Show Only Passing Scores'});
checkbutton.signal.connect('toggled', on_present_toggled);
grid.attach(checkbutton, 0, 1, 1, 1);

var treemodelfilter = liststore.filter_new();
treemodelfilter.set_visible_func(filter_visible);

var treeview = new Gtk.TreeView();
treeview.set_hexpand(true);
treeview.set_vexpand(true);
treeview.set_model(treemodelfilter);
grid.attach(treeview, 0, 0, 1, 1);

var cellrenderertext = new Gtk.CellRendererText();

var treeviewcolumn = new Gtk.TreeViewColumn({title: 'Student'});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, 'text', 0);
treeview.append_column(treeviewcolumn);

var treeviewcolumn = new Gtk.TreeViewColumn({title: 'Exam'});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, 'text', 1);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
