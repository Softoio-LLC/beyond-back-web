/**
 * Composable for generating URL slugs from text input
 * Supports both English and Arabic text with proper formatting
 */
export function useSlugify() {
    /**
     * Generate a slug from a given text
     * @param {string} text - The text to convert to slug
     * @param {string} lang - Language code ('en' or 'ar')
     * @returns {string} The generated slug
     */
    const generateSlug = (text, lang = 'en') => {
        if (!text) return '';

        let slug = text.trim();

        if (lang === 'en') {
            // For English: convert to lowercase, replace spaces with hyphens
            slug = slug
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
                .replace(/\s+/g, '-')          // Replace spaces with hyphens
                .replace(/-+/g, '-')           // Replace multiple hyphens with single
                .replace(/^-+|-+$/g, '');      // Trim hyphens from start/end
        } else if (lang === 'ar') {
            // For Arabic: keep readable Arabic characters, replace spaces with hyphens
            slug = slug
                .replace(/\s+/g, '-')          // Replace spaces with hyphens
                .replace(/-+/g, '-')           // Replace multiple hyphens with single
                .replace(/^-+|-+$/g, '');      // Trim hyphens from start/end
        }

        return slug;
    };

    /**
     * Format an existing slug to ensure it follows slug conventions
     * @param {string} text - The text to format as slug
     * @param {string} lang - Language code ('en' or 'ar')
     * @returns {string} The formatted slug
     */
    const formatAsSlug = (text, lang = 'en') => {
        if (!text) return '';

        let slug = text.trim();

        if (lang === 'en') {
            // Enforce English slug rules: lowercase letters, numbers, hyphens only
            slug = slug
                .toLowerCase()
                .replace(/[^a-z0-9-]/g, '')    // Remove anything that's not lowercase letter, number, or hyphen
                .replace(/-+/g, '-')           // Replace multiple hyphens with single
                .replace(/^-+|-+$/g, '');      // Trim hyphens from start/end
        } else if (lang === 'ar') {
            // For Arabic: allow Arabic characters, numbers, and hyphens
            slug = slug
                .replace(/\s+/g, '-')          // Replace spaces with hyphens
                .replace(/-+/g, '-')           // Replace multiple hyphens with single
                .replace(/^-+|-+$/g, '');      // Trim hyphens from start/end
        }

        return slug;
    };

    /**
     * Check if a slug is valid for the given language
     * @param {string} slug - The slug to validate
     * @param {string} lang - Language code ('en' or 'ar')
     * @returns {boolean} True if valid, false otherwise
     */
    const isValidSlug = (slug, lang = 'en') => {
        if (!slug) return false;

        if (lang === 'en') {
            // English slugs must be lowercase letters, numbers, and hyphens only
            return /^[a-z0-9-]+$/.test(slug);
        } else if (lang === 'ar') {
            // Arabic slugs can contain Arabic characters, numbers, and hyphens
            return slug.length > 0 && !slug.startsWith('-') && !slug.endsWith('-');
        }

        return false;
    };

    return {
        generateSlug,
        formatAsSlug,
        isValidSlug
    };
}
