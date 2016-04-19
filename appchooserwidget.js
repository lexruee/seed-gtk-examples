#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_application_activated(appchooserwidget)
{
    var info = appchooserwidget.get_app_info();
    print("Selected application: " + info.get_name())
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("AppChooserWidget");
window.signal.connect("destroy", Gtk.main_quit);

var appchooserwidget = new Gtk.AppChooserWidget({content_type: "video/webm"});
appchooserwidget.signal.connect("application-activated", on_application_activated);
window.add(appchooserwidget);

window.show_all();

Gtk.main();
