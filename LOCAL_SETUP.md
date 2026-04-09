# Local Development Setup Guide

This guide walks you through setting up the **Beyond Back Web** Laravel application on your local machine from scratch — even if you've never worked with PHP or Laravel before.

---

## Prerequisites Overview

| Tool | Version | Purpose |
|------|---------|---------|
| PHP | 8.2 | Backend runtime |
| Composer | Latest | PHP package manager |
| Node.js | 18+ (LTS) | Frontend tooling |
| WAMP / XAMPP | Latest | MySQL + phpMyAdmin (easiest for Windows) |
| Git | Latest | Version control |

---

## Step 1 — Install WAMP or XAMPP (MySQL + phpMyAdmin)

> **WAMP** and **XAMPP** are all-in-one local server packages that bundle MySQL and phpMyAdmin — the easiest way to get a database running on Windows.

### Option A — WAMP (recommended for Windows)

1. Download from [https://www.wampserver.com](https://www.wampserver.com) and install it.
2. Launch **WampServer** — the tray icon should turn **green**.
3. Open **phpMyAdmin** at [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
   - Default user: `root`, password: *(empty)*

### Option B — XAMPP

1. Download from [https://www.apachefriends.org](https://www.apachefriends.org) and install it.
2. Open the **XAMPP Control Panel** and start **MySQL**.
3. Open **phpMyAdmin** at [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
   - Default user: `root`, password: *(empty)*

> Both options run MySQL on port `3306` by default.

---

## Step 2 — Install PHP 8.2

1. Download **PHP 8.2** from [https://www.php.net/downloads](https://www.php.net/downloads)
   - On Windows: choose **Windows downloads** → **VS16 x64 Non Thread Safe** zip.
2. Extract to `C:\php`.
3. Add `C:\php` to your system **PATH**:
   - Search **"Environment Variables"** in Start → **Environment Variables**
   - Under **System variables**, select `Path` → **Edit** → **New** → type `C:\php`
   - Click OK on all dialogs.
4. Verify:

```bash
php -v
```

You should see `PHP 8.2.x`.

### macOS

```bash
brew install php@8.2
php -v
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install php8.2 php8.2-cli php8.2-mbstring php8.2-xml php8.2-curl php8.2-zip php8.2-mysql php8.2-gd php8.2-bcmath
php -v
```

---

## Step 3 — Install Composer

Composer is the PHP package manager (like `npm` for Node.js).

### Windows

1. Download from [https://getcomposer.org/Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)
2. Run the installer — it auto-detects your PHP at `C:\php`.
3. Verify:

```bash
composer -V
```

### macOS / Linux

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
sudo mv composer.phar /usr/local/bin/composer
composer -V
```

---

## Step 4 — Install Node.js

Download and install from [https://nodejs.org](https://nodejs.org) — choose the **LTS** version (18 or higher).

Verify:

```bash
node -v
npm -v
```

---

## Step 5 — Clone the Repository

```bash
git clone <repository-url> beyond-back-web
cd beyond-back-web
```

---

## Step 6 — Create the Database

### Option A — phpMyAdmin (no command line needed)

1. Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
2. Click **New** in the left sidebar.
3. Enter `beyond` as the database name, select `utf8mb4_general_ci` collation, and click **Create**.

### Option B — MySQL in terminal (if MySQL is in your PATH)

```bash
mysql -u root -p -e "CREATE DATABASE beyond CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
```

---

## Step 7 — Import the Database

The project includes a `backup.sql` file with all the data you need.

### Option A — phpMyAdmin (easiest)

1. Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
2. Select the **beyond** database from the left sidebar.
3. Click the **Import** tab.
4. Click **Choose File** and select `backup.sql` from the project folder.
5. Click **Go** at the bottom.

### Option B — MySQL in terminal

```bash
mysql -u root -p beyond < backup.sql
```

---

## Step 8 — Configure Environment

Copy the example environment file:

**Windows (PowerShell):**
```bash
copy .env.example .env
```

**macOS / Linux:**
```bash
cp .env.example .env
```

Open `.env` in your editor and set the database credentials:

```env
APP_URL=http://127.0.0.1:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=beyond
DB_USERNAME=root
DB_PASSWORD=
```

> WAMP/XAMPP use an empty root password by default. If you set one, enter it after `DB_PASSWORD=`.

---

## Step 9 — Install PHP Dependencies

```bash
composer install
```

This installs all Laravel packages into the `vendor/` folder.

---

## Step 10 — Generate Application Key

```bash
php artisan key:generate
```

This sets a unique encryption key in your `.env` file.

---

## Step 11 — Link Storage

```bash
php artisan storage:link
```

This creates a symbolic link so uploaded images and files are publicly accessible.

---

## Step 12 — Install Node Dependencies

```bash
npm install
```

---

## Step 13 — Start the Development Servers

You need **two terminals** running at the same time:

**Terminal 1 — Laravel backend:**

```bash
php artisan serve
```

**Terminal 2 — Vite frontend (hot reload):**

```bash
npm run dev
```

Open your browser and go to: **http://127.0.0.1:8000**

---

## All-in-One Quick Reference

After the initial setup, your daily workflow is just:

```bash
# Make sure WAMP/XAMPP MySQL is running, then:

# Terminal 1
php artisan serve

# Terminal 2
npm run dev
```

---

## Common Issues & Fixes

### Blank page or error after pulling new code

```bash
composer install
npm install
php artisan optimize:clear
```

### Frontend changes not showing up

If you're not running `npm run dev`, do a fresh build:

```bash
npm run build
```

### Storage images not loading

```bash
php artisan storage:link
```

### Database connection refused

- Make sure **WAMP/XAMPP MySQL** is running (tray icon is green / service is started).
- Double-check `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD` in `.env`.

### `php` command not found

- Make sure `C:\php` is added to your system PATH.
- Open a **new** terminal window after changing PATH.

---

## Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| Backend | Laravel 12 (PHP 8.2) |
| Frontend | Vue 3 + Inertia.js v2 |
| Styling | Tailwind CSS v4 + Bootstrap 5 |
| Build Tool | Vite 7 |
| Database | MySQL 8 |
| Routing | Ziggy (named routes in JS) |
