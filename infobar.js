#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_info_bar_changed(button)
{
    infobar.show();
    infobar.set_message_type(button.message_type);
}

function on_info_bar_close()
{
    infobar.hide();
}

var window = new Gtk.Window();
window.set_title("InfoBar");
window.signal.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
grid.set_row_spacing(5);
window.add(grid);

var infobar = new Gtk.InfoBar();
infobar.set_show_close_button(true);
infobar.signal.connect("response", on_info_bar_close);
grid.attach(infobar, 0, 0, 1, 1);

var label = new Gtk.Label({label: "An InfoBar used to display messages."});
var content = infobar.get_content_area();
content.add(label);

var buttonbox = new Gtk.ButtonBox();
buttonbox.set_spacing(5);
grid.attach(buttonbox, 0, 1, 1, 1);

var button = new Gtk.Button({label: "Information"});
button.message_type = Gtk.MessageType.INFO;
button.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(button);
var button = new Gtk.Button({label: "Question"});
button.message_type = Gtk.MessageType.QUESTION;
button.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(button);
var button = new Gtk.Button({label: "Warning"});
button.message_type = Gtk.MessageType.WARNING;
button.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(button);
var button = new Gtk.Button({label: "Error"});
button.message_type = Gtk.MessageType.ERROR;
button.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(button);
var button = new Gtk.Button({label: "Other"});
button.message_type = Gtk.MessageType.OTHER;
button.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(button);

window.show_all();

Gtk.main();
