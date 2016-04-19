#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;
const GdkPixbuf = imports.gi.GdkPixbuf;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

function on_item_activated(iconview)
{
    var model = iconview.get_model();
    var items = iconview.get_selected_items();

    for (var i = 0; i < items.length; i++)
    {
        var values = {};

        var boolean = model.get_iter(values, items[i]);

        var data = model.get_value(values.iter, 0).value.get_string();

        print("Selected item: " + data);
    }
}

var window = new Gtk.Window();
window.set_title("IconView");
window.signal.connect("destroy", Gtk.main_quit);

var liststore = new Gtk.ListStore();
liststore.set_column_types(3, [GObject.TYPE_STRING, GdkPixbuf.Pixbuf.type, GObject.TYPE_STRING]);

var image = new Gtk.Image();

var treeiter = {};
var distributions = ["debian", "fedora", "mandriva", "gentoo", "mepis"]

for (var i = 0; i < distributions.length; i++)
{
    image.set_from_file("_resources/" + distributions[i] + ".ico");

    var name = distributions[i].charAt(0).toUpperCase() + distributions[i].slice(1);
    var tooltip = name + " tooltip example";

    var pixbuf = image.get_pixbuf();

    liststore.append(treeiter);
    liststore.set_value(treeiter.iter, 0, name, -1);
    liststore.set_value(treeiter.iter, 1, pixbuf, -1);
    liststore.set_value(treeiter.iter, 2, tooltip, -1);
}

var iconview = new Gtk.IconView();
iconview.set_model(liststore);
iconview.set_text_column(0);
iconview.set_pixbuf_column(1);
iconview.set_tooltip_column(2);
iconview.signal.connect("item-activated", on_item_activated);
window.add(iconview);

window.show_all();

Gtk.main();
