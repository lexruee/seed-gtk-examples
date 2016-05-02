#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_toggle_button_toggled(togglebutton)
{
    if (togglebutton.get_active())
    {
        print(togglebutton.get_label() + ' toggled on');
    }
    else
    {
        print(togglebutton.get_label() + ' toggled off');
    }
}

var window = new Gtk.Window();
window.set_title('ToggleButton');
window.signal.connect('destroy', Gtk.main_quit);

var buttonbox = new Gtk.ButtonBox({orientation: Gtk.Orientation.VERTICAL});
window.add(buttonbox);

var togglebutton = new Gtk.ToggleButton({label: 'ToggleButton 1'});
togglebutton.signal.connect('toggled', on_toggle_button_toggled);
buttonbox.add(togglebutton);
var togglebutton = new Gtk.ToggleButton({label: 'ToggleButton 2'});
togglebutton.signal.connect('toggled', on_toggle_button_toggled);
buttonbox.add(togglebutton);
var togglebutton = new Gtk.ToggleButton({label: 'ToggleButton 3'});
togglebutton.signal.connect('toggled', on_toggle_button_toggled);
buttonbox.add(togglebutton);

window.show_all();

Gtk.main();
