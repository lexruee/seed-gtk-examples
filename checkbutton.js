#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_button_toggled(checkbutton)
{
    if (checkbutton.get_active())
    {
        var label = checkbutton.get_label();
        print(label + ' is present');
    }
}

var window = new Gtk.Window();
window.set_title('CheckButton');
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var checkbutton1 = new Gtk.CheckButton({label: 'Henrietta'});
checkbutton1.signal.connect('clicked', on_button_toggled);
grid.attach(checkbutton1, 0, 0, 1, 1);
var checkbutton2 = new Gtk.CheckButton({label: 'Jasmine'});
checkbutton2.signal.connect('clicked', on_button_toggled);
grid.attach(checkbutton2, 0, 1, 1, 1);
var checkbutton3 = new Gtk.CheckButton({label: 'Bethany'});
checkbutton3.signal.connect('clicked', on_button_toggled);
grid.attach(checkbutton3, 0, 2, 1, 1);

window.show_all();

Gtk.main();
