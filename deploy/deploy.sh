#!/bin/bash

# Configuration
SERVER="icm-webfrontend-01"
SERVER_PATH="/var/www/website"
LOCAL_BUILD_DIR="public"  # Changed to reference parent directory

# Move up one directory and build the Hugo site
echo "Building Hugo site..."
cd ..
hugo --minify

# Ensure the remote directory exists
ssh $SERVER "sudo mkdir -p $SERVER_PATH"
ssh $SERVER "sudo chown -R \$USER:\$USER $SERVER_PATH"

# Copy the files
echo "Copying files to server..."
rsync -avz --delete $LOCAL_BUILD_DIR/ $SERVER:$SERVER_PATH/

# Return to original directory (optional, but good practice)
cd deploy

echo "Deployment complete!"