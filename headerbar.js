#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_default_size(-1, 200);
window.signal.connect("destroy", Gtk.main_quit);

var headerbar = new Gtk.HeaderBar();
headerbar.set_title("HeaderBar");
headerbar.set_subtitle("With Subtitle");
headerbar.set_show_close_button(true);
headerbar.set_vexpand(false);
window.set_titlebar(headerbar);

window.show_all();

Gtk.main();
