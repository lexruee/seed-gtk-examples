#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_push_clicked()
{
    count += 1;

    message = "Message number " + count;
    statusbar.push(context, message);
}

function on_pop_clicked()
{
    statusbar.pop(context);
}

function on_remove_all_clicked()
{
    statusbar.remove_all(context);
}

var count = 0;

var window = new Gtk.Window();
window.set_title("Statusbar");
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var buttonbox = new Gtk.ButtonBox({orientation: Gtk.Orientation.HORIZONTAL});
grid.attach(buttonbox, 0, 0, 1, 1);

var buttonPush = new Gtk.Button({label: "Push"});
buttonPush.signal.connect("clicked", on_push_clicked);
buttonbox.add(buttonPush);
var buttonPop = new Gtk.Button({label: "Pop"});
buttonPop.signal.connect("clicked", on_pop_clicked);
buttonbox.add(buttonPop);
var buttonRemoveAll = new Gtk.Button({label: "Remove All"});
buttonRemoveAll.signal.connect("clicked", on_remove_all_clicked);
buttonbox.add(buttonRemoveAll);

var statusbar = new Gtk.Statusbar();
var context = statusbar.get_context_id("example");
grid.attach(statusbar, 0, 1, 1, 1);

window.show_all();

Gtk.main();
