#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_button_start_clicked()
{
    spinner.start();
}

function on_button_stop_clicked()
{
    spinner.stop();
}

var window = new Gtk.Window();
window.set_default_size(200, 200);
window.set_title('Spinner');
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var spinner = new Gtk.Spinner();
spinner.set_vexpand(true);
spinner.set_hexpand(true);
grid.attach(spinner, 0, 0, 2, 1);

var buttonStart = new Gtk.Button({label: 'Start'});
buttonStart.signal.connect('clicked', on_button_start_clicked);
grid.attach(buttonStart, 0, 1, 1, 1);
var buttonStop = new Gtk.Button({label: 'Stop'});
buttonStop.signal.connect('clicked', on_button_stop_clicked);
grid.attach(buttonStop, 1, 1, 1, 1);

window.show_all();

Gtk.main();
