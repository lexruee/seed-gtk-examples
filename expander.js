#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_expander_activate()
{
    if (expander.get_expanded())
        print("Expander closed");
    else
        print("Expander opened");
}

var window = new Gtk.Window();
window.set_title("Expander");
window.set_border_width(5);
window.signal.hide.connect(Gtk.main_quit);

var expander = new Gtk.Expander({label: "_Expander"});
expander.set_use_underline(true);
expander.set_resize_toplevel(true);
expander.signal.connect("activate", on_expander_activate);
window.add(expander);

var label = new Gtk.Label({label: "Label in an Expander"});
label.set_size_request(200, 200);
expander.add(label);

window.show_all();

Gtk.main();
