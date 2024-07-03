#!/bin/env bash

# Launch the Wallpaper Application
hyprpaper &

# Launch idle daemon
hypridle &

# Launch the notify daemon
hyprnotify &

# Reload plugins
hyprpm reload

# Set up the wob brightness 
tail -f $WOBPIPE | wob & 
