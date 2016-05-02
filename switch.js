#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_switch_toggled(widget)
{
    if (widget.get_active())
        print('Switch toggled on')
    else
        print('Switch toggled off')
}

var window = new Gtk.Window();
window.set_title('Switch');
window.signal.connect('destroy', Gtk.main_quit);

var gtkswitch = new Gtk.Switch();
gtkswitch.signal.connect('notify::active', on_switch_toggled);
window.add(gtkswitch);

window.show_all();

Gtk.main();
