# Gudmed Frontend Deployment Guide

# 1. SSH into the Server
ssh root@46.202.164.138

# 2. Navigate to the Project Directory
cd /home/ubuntu/gudmed.in/gudmed-site

#  You only need the 'build/' folder and 'gudmed-in.sh'.
#    You can delete other files if you're not rebuilding the frontend.

# 3. Install http-server globally (if not already)
npm install -g http-server

# 4. Check or create the shell script (gudmed-in.sh)
#    This file should contain:
# ---------------------------------------
#    #!/bin/bash
#    cd /home/ubuntu/gudmed.in/gudmed-site
#    http-server build -p 9000
# ---------------------------------------

# 5. Make the script executable
chmod +x gudmed-in.sh

# 6. Start the application using PM2
pm2 start gudmed-in.sh --name gudmed-site

# 7. (Optional) Restart if needed
pm2 restart gudmed-site

# 8. Save PM2 process list and enable it on system startup
pm2 save
pm2 startup

# ##############################################################
For domain configuration 
# Follow the command it prints (e.g., systemctl enable pm2-root)

# 🌐 Application is now accessible at:
# - http://46.202.164.138:9000 (internal port)
# - https://gudmed.in and https://www.gudmed.in (via Nginx)

# 1 Nginx is configured for the domain
#    Check config file:
cat /etc/nginx/sites-available/gudmed.in

# 2. Make sure it's enabled and Nginx is reloaded:
sudo ln -s /etc/nginx/sites-available/gudmed.in /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
