#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title("ToolPalette");
window.set_default_size(200, 200);
window.signal.connect("destroy", Gtk.main_quit);

var toolpalette = new Gtk.ToolPalette();
toolpalette.set_icon_size(Gtk.IconSize.LARGE_TOOLBAR);
window.add(toolpalette);

var toolitemgroup = new Gtk.ToolItemGroup({label: "Group 1"});
toolpalette.add(toolitemgroup);

var toolbutton = new Gtk.ToolButton({label: "New"});
toolbutton.set_icon_name("gtk-new");
toolitemgroup.add(toolbutton);
var toolbutton = new Gtk.ToolButton({label: "Open"});
toolbutton.set_icon_name("gtk-open");
toolitemgroup.add(toolbutton);
var toolbutton = new Gtk.ToolButton({label: "Save"});
toolbutton.set_icon_name("gtk-save");
toolitemgroup.add(toolbutton);

var toolitemgroup = new Gtk.ToolItemGroup({label: "Group 2"});
toolpalette.add(toolitemgroup);

var toolbutton = new Gtk.ToolButton({label: "Find"});
toolbutton.set_icon_name("gtk-find");
toolitemgroup.add(toolbutton);
var toolbutton = new Gtk.ToolButton({label: "Undo"});
toolbutton.set_icon_name("gtk-undo");
toolitemgroup.add(toolbutton);
var toolbutton = new Gtk.ToolButton({label: "Redo"});
toolbutton.set_icon_name("gtk-redo");
toolitemgroup.add(toolbutton);

window.show_all();

Gtk.main();
