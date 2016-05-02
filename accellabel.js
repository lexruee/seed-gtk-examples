#!/usr/bin/env seed

const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;

Gtk.init(null, null);

function on_button_clicked()
{
    print('Button clicked!');
}

var window = new Gtk.Window();
window.set_title('AccelLabel');
window.set_default_size(200, -1);
window.signal.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
grid.set_border_width(5);
grid.set_row_spacing(5);
grid.set_column_spacing(5);
window.add(grid);

var accelgroup = new Gtk.AccelGroup();
window.add_accel_group(accelgroup);

var accellabel = new Gtk.AccelLabel({label: 'Button Accelerator:'});
accellabel.set_hexpand(true);
grid.attach(accellabel, 0, 0, 1, 1);

var button = new Gtk.Button({label: 'Save'});
button.add_accelerator('clicked',
                       accelgroup,
                       's'.charCodeAt(0),
                       Gdk.ModifierType.CONTROL_MASK,
                       Gtk.AccelFlags.VISIBLE);
button.signal.connect('clicked', on_button_clicked);
accellabel.set_accel_widget(button);
grid.attach(button, 0, 1, 1, 1);

window.show_all();

Gtk.main();
