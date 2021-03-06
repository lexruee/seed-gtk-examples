#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_button_toggled(radiobutton)
{
    if (radiobutton.get_active())
    {
        var label = radiobutton.get_label();
        print(label + ' is selected');
    }
}

var window = new Gtk.Window();
window.set_title('RadioButton');
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var radiobutton1 = new Gtk.RadioButton({label: 'Droid Sans'});
radiobutton1.signal.connect('toggled', on_button_toggled);
grid.attach(radiobutton1, 0, 0, 1, 1);
var radiobutton2 = new Gtk.RadioButton({label: 'Inconsolata'});
radiobutton2.join_group(radiobutton1);
radiobutton2.signal.connect('toggled', on_button_toggled);
grid.attach(radiobutton2, 0, 1, 1, 1);
var radiobutton3 = new Gtk.RadioButton({label: 'Liberation Serif'});
radiobutton3.join_group(radiobutton1);
radiobutton3.signal.connect('toggled', on_button_toggled);
grid.attach(radiobutton3, 0, 2, 1, 1);

window.show_all();

Gtk.main();
