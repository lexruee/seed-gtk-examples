#!/usr/bin/env seed

Gtk = imports.gi.Gtk;
GLib = imports.gi.GLib;

Gtk.init(null, null);

function pulse_function()
{
    if (progressbar.get_fraction() < 1.0)
        var value = progressbar.get_fraction() + 0.1
    else
        var value = 0

    progressbar.set_fraction(value);

    return true;
}

function on_checkbutton_toggled(checkbutton)
{
    progressbar.set_show_text(checkbutton.get_active());
}

var window = new Gtk.Window();
window.set_title("ProgressBar");
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var progressbar = new Gtk.ProgressBar();
grid.attach(progressbar, 0, 0, 1, 1);

var checkbutton = new Gtk.CheckButton({label: "Show Text"});
checkbutton.signal.connect("toggled", on_checkbutton_toggled);
grid.attach(checkbutton, 1, 0, 1, 1);

GLib.timeout_add(GLib.PRIORITY_DEFAULT, 500, pulse_function);

window.show_all();

Gtk.main();
