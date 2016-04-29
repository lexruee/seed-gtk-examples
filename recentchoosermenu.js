#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

function on_item_activated()
{
    var uri = recentchoosermenu.get_current_uri();

    if (uri != null)
    {
        print("Recent document selected: " + uri);
    }
}

var window = new Gtk.Window();
window.set_default_size(200, -1);
window.set_title('RecentChooserMenu');
window.signal.connect('destroy', Gtk.main_quit);

var menubar = new Gtk.MenuBar();
window.add(menubar);

var menuitem = new Gtk.MenuItem.with_label('Recent');
menubar.add(menuitem);

var recentchoosermenu = new Gtk.RecentChooserMenu();
recentchoosermenu.signal.connect('item-activated', on_item_activated)
menuitem.set_submenu(recentchoosermenu);

window.show_all();

Gtk.main();
