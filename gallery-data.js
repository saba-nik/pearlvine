// ==================== داده‌های گالری ====================
const galleryItems = [
    { id: 1, title: 'کت و شلوار کلاسیک مشکی', category: 'suit', categoryLabel: 'کت و شلوار', bgClass: 'suit-bg', desc: 'دوخت دست‌ساز با پارچه فاستونی ایتالیایی، یقه انگلیسی، دو دکمه، فیت اسلیم', image: '' },
    { id: 2, title: 'کت و شلوار طوسی یشمی', category: 'suit', categoryLabel: 'کت و شلوار', bgClass: 'suit-bg', desc: 'پارچه لورو پیانا، آستر ابریشمی، جیب‌های مخفی، دوخت ممتاز', image: '' },
    { id: 3, title: 'کت تک رسمی شرابی', category: 'suit', categoryLabel: 'کت و شلوار', bgClass: 'suit-bg', desc: 'کت تک مخمل شرابی، یقه شال، مناسب مجالس رسمی و مهمانی‌های شب', image: '' },
    { id: 4, title: 'پیراهن سفید رسمی', category: 'shirt', categoryLabel: 'پیراهن', bgClass: 'shirt-bg', desc: 'پارچه پوپلین نخی سوئیسی، یقه سامورایی، دکمه‌های مرواریدی', image: '' },
    { id: 5, title: 'پیراهن راه‌راه آبی', category: 'shirt', categoryLabel: 'پیراهن', bgClass: 'shirt-bg', desc: 'پارچه کتان مصری، راه‌راه‌های ظریف، آستین‌های قابل تنظیم', image: '' },
    { id: 6, title: 'پیراهن کتان یقه‌ای', category: 'shirt', categoryLabel: 'پیراهن', bgClass: 'shirt-bg', desc: 'مناسب استایل نیمه‌رسمی، پارچه تنفس‌پذیر، دوخت تقویت‌شده', image: '' },
    { id: 7, title: 'شومیز حریر گل‌دار', category: 'blouse', categoryLabel: 'شومیز', bgClass: 'blouse-bg', desc: 'پارچه حریر طبیعی، طرح گل‌های دست‌دوز، یقه برگردان ظریف', image: '' },
    { id: 8, title: 'شومیز ساتن یقه‌ای', category: 'blouse', categoryLabel: 'شومیز', bgClass: 'blouse-bg', desc: 'ساتن براق کره‌ای، آستین‌های پفی، دکمه‌های مخفی، مناسب مهمانی', image: '' },
    { id: 9, title: 'شومیز ابریشمی ساده', category: 'blouse', categoryLabel: 'شومیز', bgClass: 'blouse-bg', desc: 'ابریشم خالص تایلندی، برش آزاد، مناسب استایل روزمره و رسمی', image: '' },
    { id: 10, title: 'دامن میدی پلیسه', category: 'skirt', categoryLabel: 'دامن', bgClass: 'skirt-bg', desc: 'پارچه کرپ سنگین، پلیسه‌های منظم، کمر کشی مخفی، قد میدی', image: '' },
    { id: 11, title: 'دامن ماکسی مجلسی', category: 'skirt', categoryLabel: 'دامن', bgClass: 'skirt-bg', desc: 'پارچه لمه‌دار ایتالیایی، برش مورب، آستر تمام‌قد، زیپ مخفی', image: '' },
    { id: 12, title: 'دامن راسته ابریشمی', category: 'skirt', categoryLabel: 'دامن', bgClass: 'skirt-bg', desc: 'ابریشم طبیعی، برش راسته کلاسیک، چاک پشتی، مناسب اداری و رسمی', image: '' },
    { id: 13, title: 'کت چرم دست‌دوز', category: 'other', categoryLabel: 'سایر', bgClass: 'other-bg', desc: 'چرم گوساله ایتالیایی، دوخت سنتی، آستر ویسکوز، طراحی منحصربه‌فرد', image: '' },
    { id: 14, title: 'پالتوی پشمی بلند', category: 'other', categoryLabel: 'سایر', bgClass: 'other-bg', desc: 'پشم کشمیر، یقه انگلیسی بلند، کمربند چرمی، مناسب فصول سرد', image: '' },
    { id: 15, title: 'مانتو مجلسی گیپور', category: 'other', categoryLabel: 'سایر', bgClass: 'other-bg', desc: 'گیپور فرانسوی، آستر ساتن، برش پرنسسی، دوخت گلدوزی‌شده', image: '' },
    { id: 16, title: 'تیپ کامل عروس', category: 'other', categoryLabel: 'سایر', bgClass: 'other-bg', desc: 'ست کامل شامل کت و شلوار یا پیراهن و شومیز مخصوص مراسم عقد و عروسی', image: '' }
];