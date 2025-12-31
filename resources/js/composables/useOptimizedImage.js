/**
 * Composable for generating optimized image URLs
 * Use this in any Vue component to generate optimized image URLs
 */

export function useOptimizedImage() {
    /**
     * Generate optimized image URL
     * @param {string} src - Original image path
     * @param {object} options - Optimization options
     * @returns {string} Optimized image URL
     */
    const getOptimizedUrl = (src, options = {}) => {
        if (!src) return '';
        
        const {
            width = null,
            height = null,
            quality = 80,
            format = 'webp'
        } = options;
        
        // Clean the path
        let path = src;
        
        // Remove domain
        if (path.startsWith('http')) {
            try {
                const url = new URL(path);
                path = url.pathname;
            } catch (e) {
                // If URL parsing fails, use the original path
            }
        }
        
        // Remove leading slashes
        path = path.replace(/^\/+/, '');
        
        // Remove /storage/ prefix if present (for uploaded files)
        if (path.startsWith('storage/')) {
            path = path.replace('storage/', '');
        }
        
        // Build query params
        const params = new URLSearchParams({
            path,
            q: quality.toString(),
            f: format
        });
        
        if (width) params.set('w', width.toString());
        if (height) params.set('h', height.toString());
        
        return `/img?${params.toString()}`;
    };
    
    /**
     * Generate srcset for responsive images
     * @param {string} src - Original image path
     * @param {array} widths - Array of widths for srcset
     * @param {object} options - Additional options
     * @returns {string} srcset string
     */
    const generateSrcset = (src, widths = [320, 640, 768, 1024, 1280, 1536, 1920], options = {}) => {
        return widths
            .map(w => `${getOptimizedUrl(src, { ...options, width: w })} ${w}w`)
            .join(', ');
    };
    
    return {
        getOptimizedUrl,
        generateSrcset
    };
}
