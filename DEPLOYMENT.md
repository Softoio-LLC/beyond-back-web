# Laravel Inertia SSR Deployment Guide

## Prerequisites
- Node.js 22+ & npm installed
- PM2 installed globally: `npm install -g pm2`
- PHP 8.2+ and Composer installed
- MySQL running

## Deployment Steps

### 1. Database Setup
```bash
# Import database backup
mysql -u root -p beyond < backup.sql

# Or if using specific host
mysql -h 127.0.0.1 -P 3306 -u root -p beyond < backup.sql
```

### 2. Application Setup
```bash
# Install PHP dependencies
composer install

# Install Node dependencies
npm install
    
# Copy environment file
cp .env.production.example .env

# Generate app key (if needed)
php artisan key:generate


# cache config
php artisan optimize

# Link storage
php artisan storage:link
```

### 3. Restore Public Assets (only if fresh deployment)
```bash
# Unpack public.zip to restore assets and build folders
unzip -o public.zip -d public/
```

### 4. Build SSR Assets
```bash
# Build both client and SSR assets
npm run build:ssr
```

### 5. Start SSR Server with PM2
```bash
# Start SSR server
pm2 start bootstrap/ssr/ssr.js --name "beyond-ssr"

# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
pm2 startup

# Monitor processes
pm2 status
pm2 logs beyond-ssr
```



## PM2 Commands
```bash
pm2 restart beyond-ssr    # Restart SSR server
pm2 stop beyond-ssr        # Stop SSR server
pm2 delete beyond-ssr      # Remove from PM2
pm2 logs beyond-ssr        # View logs
pm2 monit                  # Monitor all processes
```


## Environment Variables
Ensure .env has:
- `INERTIA_SSR_ENABLED=true`
- `APP_ENV=production`
- `APP_DEBUG=false`
- Add `APP_URL`
- add SESSION_DOMAIN=.your-domain.com
- Add Valid database credentials
- make sure session lifetime is set appropriately (e.g., `SESSION_LIFETIME=120`) # 2 hours and less or more depending on your needs of users staying logged in.

## OCI Object Storage
```bash
# Set these in .env for cloud storage:
STORAGE_DISK=oci
OCI_ACCESS_KEY_ID=your-access-key
OCI_SECRET_ACCESS_KEY=your-secret-key
OCI_BUCKET=bucket-beyond-website
OCI_REGION=me-jeddah-1
OCI_NAMESPACE=axirnwmffdrl
OCI_ENDPOINT=https://axirnwmffdrl.compat.objectstorage.me-jeddah-1.oraclecloud.com

# Migrate existing files to OCI (optional)
php artisan storage:migrate-to-oci --dry-run  # Preview
php artisan storage:migrate-to-oci            # Execute
```

## permissions
Ensure correct permissions for storage and bootstrap cache:
```bash
chmod -R 775 storage bootstrap/cache
```

## Troubleshooting

### for FrontEnd and SSR Issues
- Check PM2 logs for SSR issues: `pm2 logs beyond-ssr` or `pm2 logs <process_id>`
- Rebuild assets if frontend changes: `npm run build:ssr`
- Restart PM2 process after changes: `pm2 restart beyond-ssr`
### for Backend Issues
- Ensure linked storage is correct: `php artisan storage:link`
- Ensure correct file permissions
- Clear caches: `php artisan optimize:clear`
- Ensure database connection settings in `.env` are correct
- For CRRF issues, ensure SESSION_DOMAIN is set properly `SESSION_DOMAIN=.your-domain.com`
- Check Laravel logs in `storage/logs/laravel.log` for errors

