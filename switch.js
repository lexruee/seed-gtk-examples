#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_switch_toggled(widget)
{
    if (widget.get_active())
        print("Switch toggled on")
    else
        print("Switch toggled off")
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Switch");
window.signal.connect("hide", Gtk.main_quit);

var gtkswitch = new Gtk.Switch();
gtkswitch.signal.connect("notify::active", on_switch_toggled);
window.add(gtkswitch);

window.show_all();

Gtk.main();
