<!DOCTYPE html>
<html lang="en" class="loading">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <!-- Critical CSS - Inline to prevent FOUC -->
        <style>
            /* Prevent FOUC */
            html.loading { 
                overflow: hidden !important;
            }
            html.loading body { 
                visibility: hidden !important; 
                opacity: 0 !important;
            }
            html.loaded body { 
                visibility: visible !important; 
                opacity: 1 !important;
                transition: opacity 0.3s ease-in;
            }
        </style>
        
        <!-- Preconnect to improve performance -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com">
        <link rel="dns-prefetch" href="https://fonts.gstatic.com">
        
        <!-- Preload critical CSS files -->
        <link rel="preload" href="/assets/css/bootstrap.min.css" as="style">
        <link rel="preload" href="/assets/css/default.css" as="style">
        <link rel="preload" href="/assets/css/style.css" as="style">
        
        <!-- Fonts with font-display swap to prevent FOIT -->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
        
        {!! $headerCode ?? '' !!}
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @inertiaHead
        @routes
    </head>
    <body>
        @inertia
        {!! $footerCode ?? '' !!}
        
        <!-- Remove loading class after page loads -->
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(function() {
                    document.documentElement.classList.remove('loading');
                    document.documentElement.classList.add('loaded');
                }, 100);
            });
        </script>
    </body>
</html>