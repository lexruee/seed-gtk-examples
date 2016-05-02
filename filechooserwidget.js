#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_file_activated()
{
    print('File set to ' + filechooserwidget.get_filename());
}

var window = new Gtk.Window();
window.set_title('FileChooserWidget');
window.set_border_width(5);
window.signal.connect('destroy', Gtk.main_quit);

var filechooserwidget = new Gtk.FileChooserWidget();
filechooserwidget.signal.connect('file-activated', on_file_activated);
window.add(filechooserwidget);

window.show_all();

Gtk.main();
