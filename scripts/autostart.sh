#!/bin/env bash

# Launch the Wallpaper Application
hyprpaper &

# Launch idle daemon
hypridle &

# Reload plugins
hyprpm reload

# Set up the wob brightness 
tail -f $WOBPIPE | wob & 
