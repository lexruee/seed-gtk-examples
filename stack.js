#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_page_clicked(button)
{
    stack.set_visible_child_name(button.page);
}

var window = new Gtk.Window();
window.set_title('Stack');
window.set_default_size(200, 200);
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var stack = new Gtk.Stack();
stack.set_vexpand(true);
stack.set_hexpand(true);
grid.attach(stack, 0, 0, 6, 1);

var i;

for (i = 1; i < 6; i++)
{
    var name = i.toString();

    var label = new Gtk.Label({label: 'Page ' + name});
    stack.add_named(label, name);

    var button = new Gtk.Button({label: 'Page ' + name});
    button.page = name
    button.signal.connect('clicked', on_page_clicked);
    grid.attach(button, i, 1, 1, 1);
}

window.show_all();

Gtk.main();
