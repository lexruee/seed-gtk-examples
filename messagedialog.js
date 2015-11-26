#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_button_clicked(button)
{
    messagedialog.message_type = button.type;
    messagedialog.run();
    messagedialog.hide();
}

var window = new Gtk.Window();
window.set_title("MessageDialog");
window.signal.connect("destroy", Gtk.main_quit);

var buttonbox = new Gtk.ButtonBox();
window.add(buttonbox);

var button = new Gtk.Button({label: "Information"});
button.type = Gtk.MessageType.INFO;
button.signal.connect("clicked", on_button_clicked);
buttonbox.add(button);
var button = new Gtk.Button({label: "Question"});
button.type = Gtk.MessageType.QUESTION;
button.signal.connect("clicked", on_button_clicked);
buttonbox.add(button);
var button = new Gtk.Button({label: "Warning"});
button.type = Gtk.MessageType.WARNING;
button.signal.connect("clicked", on_button_clicked);
buttonbox.add(button);
var button = new Gtk.Button({label: "Error"});
button.type = Gtk.MessageType.ERROR;
button.signal.connect("clicked", on_button_clicked);
buttonbox.add(button);
var button = new Gtk.Button({label: "Other"});
button.type = Gtk.MessageType.OTHER;
button.signal.connect("clicked", on_button_clicked);
buttonbox.add(button);

var messagedialog = new Gtk.MessageDialog();
messagedialog.set_transient_for(window);
messagedialog.set_markup("<span size='12000'><b>The MessageDialog is used to display messages to the user.</b></span>");
messagedialog.secondary_text = "It can be used for informational, warning or error messages, or simply for asking questions.";
messagedialog.add_button("Close", Gtk.ResponseType.CLOSE);

window.show_all();

Gtk.main();
