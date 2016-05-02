#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title('StackSidebar');
window.set_default_size(200, 200);
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var stack = new Gtk.Stack();
stack.set_vexpand(true);
stack.set_hexpand(true);
grid.attach(stack, 1, 0, 1, 1);

var stacksidebar = new Gtk.StackSidebar();
stacksidebar.set_stack(stack);
grid.attach(stacksidebar, 0, 0, 1, 1);

var i;

for (i = 1; i < 6; i++)
{
    var name = i.toString();
    var title = 'Page ' + name;

    var label = new Gtk.Label({label: title});
    stack.add_titled(label, name, title);
}

window.show_all();

Gtk.main();
