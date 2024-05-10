#!/bin/env bash

# Launch the Wallpaper Application
hyprpaper &

hyprpm reload

# Set up the wob brightness 
mkfifo /tmp/wobpipe
tail -f /tmp/wobpipe | wob & 
