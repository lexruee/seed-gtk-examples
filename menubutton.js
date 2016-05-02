#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title('MenuButton');
window.signal.connect('destroy', Gtk.main_quit);

var menubutton = new Gtk.MenuButton({label: 'MenuButton'});
window.add(menubutton);

var menu = new Gtk.Menu();
menubutton.set_popup(menu);

for (var i=1; i<6; i++)
{
    var menuitem = new Gtk.MenuItem({label: 'MenuItem ' + i});
    menu.append(menuitem);
}

menu.show_all();
window.show_all();

Gtk.main();
