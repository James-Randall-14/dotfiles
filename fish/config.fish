if status is-interactive
    # Commands to run in interactive sessions can go here
end

# Edit Path Variable
set -gx PATH $PATH:~/.local/bin

# Change starship config path
set -gx STARSHIP_CONFIG = $HOME/.config/fish/starship.toml

# Set aliases
# LunarVim:
alias nvim '~/.local/bin/lvim'

# ls shortcuts
alias l 'ls'
alias sl 'ls'

# Hyrdo prompt config
# Prompt Characters
set --global hydro_symbol_prompt '◀|'
set --global hydro_symbol_git_dirty ''
set --global hydro_symbol_git_ahead ''
set --global hydro_symbol_git_behind ''

# Prompt Colors
set --global hydro_color_pwd green
set --global hydro_color_pwd blue
set --global hydro_multiline false

# Set theme
set --global GTK_THEME WhiteSur-Dark

# Make Chromium run native with Wayland
alias chromium 'chromium --enable-features=UseOzonePlatform --ozone-platform=wayland'
