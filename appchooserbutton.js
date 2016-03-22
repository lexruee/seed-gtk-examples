#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_app_chooser_changed(appchooserbutton)
{
    var info = appchooserbutton.get_app_info();
    print("Selected application: " + info.get_name())
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("AppChooserButton");
window.set_default_size(200, -1);
window.signal.connect("destroy", Gtk.main_quit);

var appchooserbutton = new Gtk.AppChooserButton({content_type: "text/plain"});
appchooserbutton.signal.connect("changed", on_app_chooser_changed);
window.add(appchooserbutton);

window.show_all();

Gtk.main();
