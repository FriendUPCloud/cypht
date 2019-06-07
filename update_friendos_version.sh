#!/bin/sh

mkdir -p /usr/local/share/cypht/site/friend
cp third_party/friend_extras.js /usr/local/share/cypht/site/friend/
cp third_party/friend_ui_overrides.css /usr/local/share/cypht/site/friend/
rsync -ravl modules/* /usr/local/share/cypht/modules/
rsync -ravl modules/themes/assets/* /usr/local/share/cypht/site/modules/themes/assets/

