#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_button_clicked()
{
    print("Button clicked!");
}

var window = new Gtk.Window();
window.set_title("SizeGroup");
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var sizegroup = new Gtk.SizeGroup();

var button = new Gtk.Button({label: "Button with Single Line"});
sizegroup.add_widget(button);
grid.attach(button, 0, 0, 1, 1);

var button = new Gtk.Button({label: "Button with\nTwo Lines"});
sizegroup.add_widget(button);
grid.attach(button, 1, 0, 1, 1);

var button = new Gtk.Button({label: "Button with\nThree\nLines"});
sizegroup.add_widget(button);
grid.attach(button, 2, 0, 1, 1);

window.show_all();

Gtk.main();
