#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title('LinkButton');
window.signal.connect('destroy', Gtk.main_quit);

var linkbutton = new Gtk.LinkButton({label: 'Programmica'});
linkbutton.set_uri('http://programmica.com/');
window.add(linkbutton);

window.show_all();

Gtk.main();
