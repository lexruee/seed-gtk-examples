#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GdkPixbuf = imports.gi.GdkPixbuf;

Gtk.init(null, null);

var logo = new GdkPixbuf.Pixbuf.from_file_at_size('_resources/gtk.png', 64, 64)

var aboutdialog = new Gtk.AboutDialog();
aboutdialog.set_title('AboutDialog');
aboutdialog.set_program_name('Programmica');
aboutdialog.set_version('1.0');
aboutdialog.set_comments('Programming, system and network administration resources');
aboutdialog.set_website('https://programmica.com/');
aboutdialog.set_website_label('Programmica Website');
aboutdialog.set_authors(['Andrew Steele']);
aboutdialog.set_logo(logo);

aboutdialog.run();
aboutdialog.destroy();
