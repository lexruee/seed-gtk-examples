#!/usr/bin/env seed

Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var window = new Gtk.Window();
window.set_title("AspectFrame");
window.set_default_size(200, 200);
window.set_border_width(5);
window.signal.hide.connect(Gtk.main_quit);

var aspectframe = new Gtk.AspectFrame({label: "Frame",
                                        xalign: 0,
                                        yalign: 0,
                                        ratio: 1.0,
                                        obey_child: false});
window.add(aspectframe);

var label = new Gtk.Label({label: "Label in a Frame"});
aspectframe.add(label);

window.show_all();

Gtk.main();
