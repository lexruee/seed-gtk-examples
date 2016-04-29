#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_item_activated()
{
    var uri = recentchooserwidget.get_current_uri();

    if (uri != null)
    {
        print("Recent document selected: " + uri);
    }
}

var window = new Gtk.Window();
window.set_default_size(300, -1);
window.set_title('RecentChooserWidget');
window.signal.connect('destroy', Gtk.main_quit);

var recentchooserwidget = new Gtk.RecentChooserWidget();
recentchooserwidget.signal.connect('item-activated', on_item_activated)
window.add(recentchooserwidget);

window.show_all();

Gtk.main();
