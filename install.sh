#!/usr/bin/env bash
sudo bash -c "cat << 'EOF' > ok
$(date +%Y%m%d%H%M%S)
EOF"
echo "complete"