<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AllPagesSeeder extends Seeder
{
    /**
     * Master seeder that runs all page seeders.
     * This seeder creates all production-ready pages with their content.
     */
    public function run(): void
    {
        $this->command->info('🚀 Starting to seed all pages...');
        $this->command->newLine();

        // Service Pages (index-2 to index-6)
        $this->command->info('📄 Seeding Service Pages...');
        $this->call([
            CommercialServicesPageSeeder::class,
            SalesDistributionPageSeeder::class,
            ProgrammingPageSeeder::class,
            ProjectManagementPageSeeder::class,
            DigitalMarketingPageSeeder::class,
        ]);
        $this->command->newLine();

        // Product Platform Pages (index-7 to index-11)
        $this->command->info('📄 Seeding Product Platform Pages...');
        $this->call([
            RiyaPlatformPageSeeder::class,
            JiyadPlatformPageSeeder::class,
            ShopsZPlatformPageSeeder::class,
            BeyondERPPageSeeder::class,
            BeyondPayPageSeeder::class,
        ]);
        $this->command->newLine();

        // Utility Pages (index-13 to index-14)
        $this->command->info('📄 Seeding Utility Pages...');
        $this->call([
            ContactPageSeeder::class,
            GalleryPageSeeder::class,
        ]);
        $this->command->newLine();

        $this->command->info('✅ All pages seeded successfully!');
        $this->command->newLine();
        
        // Summary
        $this->command->table(
            ['Page Type', 'Status'],
            [
                ['Commercial Services', '✓ Created'],
                ['Sales & Distribution', '✓ Created'],
                ['Programming & App Development', '✓ Created'],
                ['Project Management', '✓ Created'],
                ['Digital Marketing', '✓ Created'],
                ['Riya Platform', '✓ Created'],
                ['Jiyad Platform', '✓ Created'],
                ['Shops Z Platform', '✓ Created'],
                ['Beyond ERP', '✓ Created'],
                ['Beyond Pay', '✓ Created'],
                ['Contact Us', '✓ Created'],
                ['Gallery', '✓ Created'],
            ]
        );
        
        $this->command->newLine();
        $this->command->info('🎉 Total: 12 pages created with full bilingual content (EN/AR)');
        $this->command->info('🔧 All pages are editable through the Page Builder');
    }
}
