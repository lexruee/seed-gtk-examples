#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_search_entry_activated(searchentry)
{
    print("SearchEntry text: '" + searchentry.get_text() + "'");
}

var window = new Gtk.Window();
window.set_title('SearchEntry');
window.signal.connect('destroy', Gtk.main_quit);

var searchentry = new Gtk.SearchEntry();
searchentry.signal.connect('activate', on_search_entry_activated);
window.add(searchentry);

window.show_all();

Gtk.main();
