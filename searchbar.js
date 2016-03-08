#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_search_bar_toggled()
{
    searchbar.set_search_mode(checkbutton.get_active());
}

function on_search_entry_activated(searchentry)
{
    print("SearchEntry text: '" + searchentry.get_text() + "'");
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("SearchBar");
window.signal.connect("destroy", Gtk.main_quit);

var box = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL});
window.add(box);

var checkbutton = new Gtk.CheckButton({label: "SearchBar visible"});
checkbutton.signal.connect("toggled", on_search_bar_toggled);
box.add(checkbutton);

var searchbar = new Gtk.SearchBar();
searchbar.set_search_mode(false);
box.add(searchbar);

var searchentry = new Gtk.SearchEntry();
searchentry.signal.connect("activate", on_search_entry_activated);
searchbar.add(searchentry);

window.show_all();

Gtk.main();
