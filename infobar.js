#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

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

var label = new Gtk.Label({label: "An InfoBar used to display messages."});

var infobar = new Gtk.InfoBar();
var content = infobar.get_content_area();
content.add(label);
infobar.set_show_close_button(true);
infobar.signal.connect("response", on_info_bar_close);
grid.attach(infobar, 0, 0, 1, 1);

var buttonbox = new Gtk.ButtonBox();
buttonbox.set_spacing(5);
grid.attach(buttonbox, 0, 1, 1, 1);

buttonInformation = new Gtk.Button({label: "Information"});
buttonInformation.message_type = Gtk.MessageType.INFO;
buttonInformation.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(buttonInformation);
buttonQuestion = new Gtk.Button({label: "Question"});
buttonQuestion.message_type = Gtk.MessageType.QUESTION;
buttonQuestion.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(buttonQuestion);
buttonWarning = new Gtk.Button({label: "Warning"});
buttonWarning.message_type = Gtk.MessageType.WARNING;
buttonWarning.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(buttonWarning);
buttonError = new Gtk.Button({label: "Error"});
buttonError.message_type = Gtk.MessageType.ERROR;
buttonError.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(buttonError);
buttonOther = new Gtk.Button({label: "Other"});
buttonOther.message_type = Gtk.MessageType.OTHER;
buttonOther.signal.connect("clicked", on_info_bar_changed);
buttonbox.add(buttonOther);

window.show_all();

Gtk.main();
