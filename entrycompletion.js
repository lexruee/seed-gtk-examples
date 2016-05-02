#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null, null);

function on_mode_toggled(radiobutton)
{
    if (radiobutton.get_active())
    {
        if (radiobutton.mode == 0)
        {
            entrycompletion.set_popup_completion(true);
            entrycompletion.set_inline_completion(false);
        }
        else
        {
            entrycompletion.set_popup_completion(false);
            entrycompletion.set_inline_completion(true);
        }
    }
}

var window = new Gtk.Window();
window.set_title('EntryCompletion');
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var liststore = new Gtk.ListStore();
liststore.set_column_types(1, [GObject.TYPE_STRING]);

var treeiter = {};
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, [GObject.TYPE_STRING, 'Christine']);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, [GObject.TYPE_STRING, 'Zoey']);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, [GObject.TYPE_STRING, 'Vanessa']);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, [GObject.TYPE_STRING, 'Martina']);
liststore.append(treeiter);
liststore.set_value(treeiter.iter, 0, [GObject.TYPE_STRING, 'Maxine']);

var entrycompletion = new Gtk.EntryCompletion();
entrycompletion.set_model(liststore);
entrycompletion.set_text_column(0);

var entry = new Gtk.Entry();
entry.set_completion(entrycompletion);
grid.attach(entry, 0, 0, 1, 1);

var radiobuttonPopup = new Gtk.RadioButton({label: 'Popup Completion'});
radiobuttonPopup.mode = 0;
radiobuttonPopup.signal.connect('toggled', on_mode_toggled);
grid.attach(radiobuttonPopup, 0, 1, 1, 1);
var radiobuttonInline = new Gtk.RadioButton({label: 'Inline Completion'});
radiobuttonInline.join_group(radiobuttonPopup);
radiobuttonInline.mode = 1;
radiobuttonInline.signal.connect('toggled', on_mode_toggled);
grid.attach(radiobuttonInline, 0, 2, 1, 1);

window.show_all();

Gtk.main();
