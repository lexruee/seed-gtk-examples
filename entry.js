#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_entry_activated()
{
    print("Entry text: '" + entry.get_text() + "'");
}

var window = new Gtk.Window();
window.set_title("Entry");
window.signal.hide.connect(Gtk.main_quit);

var entry = new Gtk.Entry();
entry.set_placeholder_text("Text in an Entry...");
entry.signal.activate.connect(on_entry_activated);
window.add(entry);

window.show_all();

Gtk.main();
