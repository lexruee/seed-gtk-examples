#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_button_clicked()
{
    print("The overlayed button was clicked!");
}

var window = new Gtk.Window();
window.set_title("Overlay");
window.signal.connect("destroy", Gtk.main_quit);

var overlay = new Gtk.Overlay();
window.add(overlay);

var textview = new Gtk.TextView();
textview.set_wrap_mode(Gtk.WrapMode.WORD_CHAR);
var textbuffer = textview.get_buffer();
textbuffer.set_text("Welcome to the PyGObject Tutorial\n\nThis guide aims to provide an introduction to using Python and GTK+.\n\nIt includes many sample code files and exercises for building your knowledge of the language.", -1);
overlay.add(textview);

var button = new Gtk.Button({label: "Overlayed Button"});
button.set_valign(Gtk.Align.CENTER);
button.set_halign(Gtk.Align.CENTER);
button.signal.connect("clicked", on_button_clicked);
overlay.add_overlay(button);

overlay.show_all();

window.show_all();

Gtk.main();
