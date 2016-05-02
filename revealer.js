#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_open_clicked()
{
    revealer.set_reveal_child(true);
}

function on_close_clicked()
{
    revealer.set_reveal_child(false);
}

var window = new Gtk.Window();
window.set_title('Revealer');
window.set_border_width(5);
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var buttonbox = new Gtk.ButtonBox();
grid.attach(buttonbox, 0, 0, 1, 1);

var buttonOpen = new Gtk.Button({label: 'Open'});
buttonOpen.signal.connect('clicked', on_open_clicked)
buttonbox.add(buttonOpen);
var buttonClose = new Gtk.Button({label: 'Close'});
buttonClose.signal.connect('clicked', on_close_clicked)
buttonbox.add(buttonClose);

var revealer = new Gtk.Revealer();
grid.attach(revealer, 0, 1, 1, 1);

var label = new Gtk.Label({label: 'Label in a Revealer'});
label.set_size_request(-1, 200);
revealer.add(label);

window.show_all();

Gtk.main();
