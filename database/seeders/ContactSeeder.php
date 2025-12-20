<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contacts = [
            // 5 Read contacts
            [
                'name' => 'محمد أحمد الشمري',
                'email' => 'mohammed.shamri@example.com',
                'phone' => '+966501234567',
                'subject' => 'استفسار عن خدمات البرمجة',
                'message' => 'السلام عليكم، أود الاستفسار عن خدمات تطوير تطبيقات الجوال وما هي المدة المتوقعة لتطوير تطبيق للتجارة الإلكترونية؟',
                'is_read' => true,
                'read_at' => now()->subDays(1),
                'created_at' => now()->subDays(2),
            ],
            [
                'name' => 'Sarah Johnson',
                'email' => 'sarah.johnson@company.com',
                'phone' => '+966509876543',
                'subject' => 'Partnership Inquiry',
                'message' => 'Hello, I represent a tech company interested in partnering with Beyond for digital transformation projects. Can we schedule a meeting to discuss potential collaboration?',
                'is_read' => true,
                'read_at' => now()->subDays(2),
                'created_at' => now()->subDays(3),
            ],
            [
                'name' => 'عبدالله سعود العتيبي',
                'email' => 'abdullah.otaibi@gmail.com',
                'phone' => '+966551234567',
                'subject' => 'طلب عرض سعر لمشروع ERP',
                'message' => 'نحن شركة متوسطة الحجم في قطاع التجزئة ونبحث عن نظام ERP متكامل. هل يمكنكم إرسال عرض سعر تفصيلي؟',
                'is_read' => true,
                'read_at' => now()->subDays(3),
                'created_at' => now()->subDays(5),
            ],
            [
                'name' => 'فاطمة محمد الزهراني',
                'email' => 'fatima.zahrani@business.sa',
                'phone' => '+966541234567',
                'subject' => 'خدمات التسويق الرقمي',
                'message' => 'أدير متجراً إلكترونياً وأحتاج إلى خدمات تسويق رقمي شاملة تشمل إدارة حسابات التواصل الاجتماعي والإعلانات المدفوعة.',
                'is_read' => true,
                'read_at' => now()->subDays(5),
                'created_at' => now()->subDays(7),
            ],
            [
                'name' => 'Ahmed Hassan',
                'email' => 'ahmed.hassan@startup.io',
                'phone' => '+966521234567',
                'subject' => 'Startup Technical Consultation',
                'message' => 'We are a startup looking for technical consultation for our MVP. We need guidance on technology stack selection and architecture design.',
                'is_read' => true,
                'read_at' => now()->subDays(6),
                'created_at' => now()->subDays(10),
            ],

            // 5 Unread contacts
            [
                'name' => 'خالد عبدالرحمن السلمي',
                'email' => 'khalid.salmi@hotmail.com',
                'phone' => '+966561234567',
                'subject' => 'استفسار عاجل - مشروع جديد',
                'message' => 'السلام عليكم، لدي فكرة مشروع تقني أحتاج إلى مناقشتها معكم في أقرب وقت. المشروع يتعلق بمنصة خدمات لوجستية.',
                'is_read' => false,
                'read_at' => null,
                'created_at' => now()->subHours(2),
            ],
            [
                'name' => 'نورة سعد القحطاني',
                'email' => 'noura.qahtani@edu.sa',
                'phone' => '+966571234567',
                'subject' => 'منصة تعليمية إلكترونية',
                'message' => 'أعمل في قطاع التعليم وأبحث عن شركة تقنية لتطوير منصة تعليمية متكاملة تدعم اللغة العربية بشكل كامل.',
                'is_read' => false,
                'read_at' => null,
                'created_at' => now()->subHours(5),
            ],
            [
                'name' => 'James Wilson',
                'email' => 'james.wilson@international.co',
                'phone' => '+966581234567',
                'subject' => 'International Project Collaboration',
                'message' => 'Our company is expanding to Saudi Arabia and we need a local technology partner for our digital projects. Would Beyond be interested in such collaboration?',
                'is_read' => false,
                'read_at' => null,
                'created_at' => now()->subHours(12),
            ],
            [
                'name' => 'سلطان محمد الدوسري',
                'email' => 'sultan.dosari@company.sa',
                'phone' => '+966591234567',
                'subject' => 'تطوير موقع إلكتروني للشركة',
                'message' => 'نحتاج إلى تطوير موقع إلكتروني احترافي لشركتنا مع لوحة تحكم متكاملة ودعم للغتين العربية والإنجليزية.',
                'is_read' => false,
                'read_at' => null,
                'created_at' => now()->subDay(),
            ],
            [
                'name' => 'ريم أحمد العنزي',
                'email' => 'reem.anazi@gmail.com',
                'phone' => '+966531234567',
                'subject' => 'تطبيق توصيل طلبات',
                'message' => 'أخطط لإطلاق مشروع توصيل طلبات في مدينتي وأحتاج إلى تطبيق جوال متكامل للعملاء والسائقين. ما هي التكلفة التقريبية والمدة الزمنية للمشروع؟',
                'is_read' => false,
                'read_at' => null,
                'created_at' => now()->subDays(1)->subHours(6),
            ],
        ];

        foreach ($contacts as $contactData) {
            Contact::create($contactData);
        }
    }
}
