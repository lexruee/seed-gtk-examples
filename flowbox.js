#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title('FlowBox');
window.set_default_size(200, -1)
window.signal.connect('destroy', Gtk.main_quit);

var flowbox = new Gtk.FlowBox();
flowbox.set_row_spacing(5);
flowbox.set_column_spacing(5);
window.add(flowbox);

for (var count = 1; count < 10; count++)
{
    var label = new Gtk.Label({label: 'Label ' + count});
    flowbox.insert(label, count);
}

window.show_all();

Gtk.main();
