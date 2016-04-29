#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var recentchooserdialog = new Gtk.RecentChooserDialog();
recentchooserdialog.set_title("RecentChooserDialog");
recentchooserdialog.add_button("_Cancel", Gtk.ResponseType.CANCEL);
recentchooserdialog.add_button("_Select", Gtk.ResponseType.OK);

if (recentchooserdialog.run() == Gtk.ResponseType.OK)
{
    var uri = recentchooserdialog.get_current_uri();

    if (uri != null)
    {
        print("Recent document selected: " + uri);
    }
}

recentchooserdialog.destroy();
