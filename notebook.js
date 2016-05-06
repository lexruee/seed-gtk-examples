#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title('Notebook');
window.set_default_size(200, 200);
window.signal.connect('destroy', Gtk.main_quit);

var notebook = new Gtk.Notebook();
window.add(notebook);

for (var i=1; i<6; i++)
{
    var child = new Gtk.Label({label: 'Page ' + i + ' Child Widget'});
    var title = new Gtk.Label({label: 'Page ' + i});
    notebook.append_page(child, title);
}

window.show_all();

Gtk.main();
