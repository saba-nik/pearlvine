// ==================== داده‌های گالری ====================
const galleryItems = [
    {
        "id": 1779974461886,
        "title": "پالتو کلاسیک لوکس",
        "category": "پالتو",
        "categoryLabel": "پالتو",
        "categories": ["پالتو", "مردانه", "زمستونی"],
        "bgClass": "پالتو-bg",
        "desc": "زمستون رو با وقار رد کن. در پناه پالتویی که سرمای جهان در برابرش تسلیم می‌شود و گرما، وفادارترین همراه قامتت می‌ماند.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۷%20خرداد%20۱۴۰۵،%20۱۶_۴۰_۳۶.png", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۷%20خرداد%20۱۴۰۵،%20۱۴_۴۸_۳۸.png", "type": "image"}
        ]
    },
    {
        "id": 1779975121603,
        "title": "پیراهن زئوس",
        "category": "زنانه",
        "categoryLabel": "زنانه",
        "categories": ["زنانه", "پیراهن"],
        "bgClass": "زنانه-bg",
        "desc": "اسطوره‌ها نمرده‌اند؛ فقط پیراهن عوض کرده‌اند.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۷%20خرداد%20۱۴۰۵،%20۱۶_۵۷_۲۴.png", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۷%20خرداد%20۱۴۰۵،%20۱۶_۵۵_۲۱.png", "type": "image"}
        ]
    },
    {
        "id": 1779975515899,
        "title": "کت اشرافی",
        "category": "کت",
        "categoryLabel": "کت",
        "categories": ["کت", "زنانه"],
        "bgClass": "کت-bg",
        "desc": "بعضی چیزها فریاد نمی‌زنند تا دیده شوند. این کت زمزمه می‌کند، اما همه سر برمی‌گردانند.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۷%20خرداد%20۱۴۰۵،%20۱۶_۳۲_۱۵.png", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۷%20خرداد%20۱۴۰۵،%20۱۶_۳۱_۳۸.png", "type": "image"}
        ]
    },
    {
        "id": 1779976091020,
        "title": "پیراهن اطلسی",
        "category": "پیراهن",
        "categoryLabel": "پیراهن",
        "categories": ["پیراهن", "مجلسی", "زنانه"],
        "bgClass": "پیراهن-bg",
        "desc": "بعضی زیبایی‌ها آرام وارد می‌شوند، اما هرگز فراموش نمی‌شوند.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/image-14.jpg", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/image-10.jpg", "type": "image"}
        ]
    },
    {
        "id": 1779980000001,
        "title": "ست سرخ سلطنتی",
        "category": "کت",
        "categoryLabel": "کت",
        "categories": ["کت", "شلوار", "زنانه"],
        "bgClass": "کت-bg",
        "desc": "بعضی رنگ‌ها فریاد می‌زنند، این یکی فرمان می‌دهد.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۷%20خرداد%20۱۴۰۵،%20۱۷_۴۸_۳۴%20(1).png", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۷%20خرداد%20۱۴۰۵،%20۱۸_۰۷_۴۱.png", "type": "image"}
        ]
    },
    {
        "id": 1779980000002,
        "title": "کت و شلوار امپریال",
        "category": "کت و شلوار",
        "categoryLabel": "کت و شلوار",
        "categories": ["کت و شلوار", "مردانه", "مجلسی"],
        "bgClass": "کت-bg",
        "desc": "مخصوص مردی که تفاوت را نه در حرف، که در انتخابش نشان می‌دهد.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۸%20خرداد%20۱۴۰۵،%20۱۰_۰۴_۳۷.png", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۸%20خرداد%20۱۴۰۵،%20۱۰_۰۵_۴۸.png", "type": "image"}
        ]
    },
       {
        "id": 1779980000003,
        "title": "پیراهن موناکو",
        "category": "پیراهن",
        "categoryLabel": "پیراهن",
        "categories": ["پیراهن", "مردانه"],
        "bgClass": "پیراهن-bg",
        "desc": "چهارخونه‌ای که بلد است چطور کلاسیک باشد، بدون اینکه کهنه به نظر برسد.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/pZa5I.jpg", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/HzjMi.jpg", "type": "image"}
        ]
    },
    {
        "id": 1779980000004,
        "title": "پیراهن اسکاتلندی",
        "category": "پیراهن",
        "categoryLabel": "پیراهن",
        "categories": ["پیراهن", "مردانه"],
        "bgClass": "پیراهن-bg",
        "desc": "بعضی طرح‌ها هرگز از مد نمی‌افتند. این یکی از آنهاست. همیشگی، مثل خودت.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۹%20خرداد%20۱۴۰۵،%20۲۱_۳۵_۵۴%20(2).png", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۹%20خرداد%20۱۴۰۵،%20۲۱_۳۵_۴۹%20(1).png", "type": "image"}
        ]
    },
    {
        "id": 1779980000005,
        "title": "پیراهن آتنا",
        "category": "پیراهن",
        "categoryLabel": "پیراهن",
        "categories": ["پیراهن", "زنانه", "مجلسی"],
        "bgClass": "پیراهن-bg",
        "desc": "زیبایی وقتی به اوج می‌رسد، نیازی به توضیح ندارد. فقط کافی‌ست وارد شوی. بقیه‌اش را نگاه‌ها می‌گویند.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۹%20خرداد%20۱۴۰۵،%20۲۲_۱۷_۰۲.png", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۹%20خرداد%20۱۴۰۵،%20۲۲_۱۴_۱۹.png", "type": "image"}
        ]
    },
    {
        "id": 1779980000006,
        "title": "ست هارمونی",
        "category": "کت و شلوار",
        "categoryLabel": "کت و شلوار",
        "categories": ["کت و شلوار", "زنانه", "مردانه", "مجلسی"],
        "bgClass": "کت-bg",
        "desc": "وقتی دو نفر یک زبان را می‌پوشند، حرف‌های ناگفته معنا می‌شوند. این ست، ترجمهٔ پارچه‌ای عشق است.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۹%20خرداد%20۱۴۰۵،%20۲۱_۵۲_۲۹.png", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/ChatGPT%20Image%20۹%20خرداد%20۱۴۰۵،%20۲۱_۵۴_۲۰.png", "type": "image"}
        ]
    },
    {
        "id": 1779980000007,
        "title": "ست بانو",
        "category": "کت",
        "categoryLabel": "کت",
        "categories": ["کت", "دامن", "زنانه", "مجلسی"],
        "bgClass": "کت-bg",
        "desc": "بعضی ست‌ها فقط پوشیده نمی‌شوند؛ زندگی می‌شوند.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/image-5.jpg", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/image-6.jpg", "type": "image"}
        ]
    },
    {
        "id": 1779980000008,
        "title": "ست نوبل",
        "category": "کت و شلوار",
        "categoryLabel": "کت و شلوار",
        "categories": ["کت و شلوار", "زنانه", "مجلسی"],
        "bgClass": "کت-bg",
        "desc": "اشرافیت در خون توست. این ست، فقط تأییدیهٔ آن است.",
        "media": [
            {"url": "https://saba-nik.github.io/pearlvine/images/image-4_1.jpg", "type": "image"},
            {"url": "https://saba-nik.github.io/pearlvine/images/image-5_1.jpg", "type": "image"}
        ]
    }
];

// ==================== دسته‌بندی‌ها ====================
const galleryCategories = [
    {"value": "کت", "label": "کت"},
    {"value": "شلوار", "label": "شلوار"},
    {"value": "skirt", "label": "دامن"},
    {"value": "پالتو", "label": "پالتو"},
    {"value": "زنانه", "label": "زنانه"},
    {"value": "مردانه", "label": "مردانه"},
    {"value": "زمستونی", "label": "زمستونی"},
    {"value": "تابستونی", "label": "تابستونی"},
    {"value": "پیراهن", "label": "پیراهن"},
    {"value": "مجلسی", "label": "مجلسی"},
    {"value": "سایر", "label": "سایر"}
];