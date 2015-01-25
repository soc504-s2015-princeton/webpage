#!/bin/bash
# -v: verbose
# -a: archive
# -z: enables compression

rsync -apmvz --exclude=.git/ --exclude=*.bash# * mjs3@arizona.princeton.edu:~/public_html/soc504_s2015
