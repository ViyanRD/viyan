# راهنمای استقرار روی GitHub Organization

این پوشه شامل نسخهٔ آمادهٔ push از سایت Viyan R&D است. فایل‌ها در ریشهٔ مخزن قرار دارند (نه در زیرپوشه) تا GitHub Pages مستقیم روی آدرس_org.github.io/viyan/ یا آدرس_org.github.io/ کار کند.

## ۱. ساخت مخزن در GitHub Organization

وارد GitHub شو → روی organization مورد نظر → **New repository**:
- **Owner**: organization مورد نظر (مثلاً `viyan-rd`)
- **Repository name**: `viyan` (یا `viyan.github.io` اگر می‌خواهی روی ریشهٔ دامنهOrg باشد)
- **Visibility**: `Public` (GitHub Pages برای مخزنِ Private در plan رایگان فعال نیست)
- **Initialize**: هیچ‌کدام را تیک نزن (README، .gitignore یا license نسازیم چون داریم)

روی **Create repository** بزن.

## ۲. push کردن کد از این پوشه

در ترمینال، به پوشهٔ `viyan-site-deploy` برو و این دستورات را اجرا کن:

```bash
cd viyan-site-deploy

# اگر هنوز git init نکرده‌ای:
git init -b main
git add .
git commit -m "Viyan R&D site — initial release (team site, resumes, electric theme)"

# اتصال به مخزن ریموت (آدرس را با اسم organization و repo خودت جایگزین کن)
git remote add origin https://github.com/YOUR_ORG/viyan.git
git push -u origin main
```

اگر توکن یا SSH استفاده می‌کنی، آدرس remote را متناسب تنظیم کن:
- HTTPS: `https://github.com/YOUR_ORG/viyan.git`
- SSH: `git@github.com:YOUR_ORG/viyan.git`

## ۳. فعال‌سازی GitHub Pages

وارد مخزن در GitHub شو → **Settings** → **Pages**:
- **Source**: `Deploy from a branch`
- **Branch**: `main` و پوشه `/ (root)`
- **Save**

بعد از ۱–۲ دقیقه، سایت روی یکی از این آدرس‌ها قابل دسترس خواهد بود:
- اگر repo نام `viyan` باشد → `https://YOUR_ORG.github.io/viyan/`
- اگر repo نام `YOUR_ORG.github.io` باشد → `https://YOUR_ORG.github.io/`

## ۴. دادن به کارفرما

سه راه برای اشتراک‌گذاری:
1. **لینک مستقیم سایت**: آدرس نهایی بالا را بده
2. **لینک مخزن**: `https://github.com/YOUR_ORG/viyan` (اگر public است، کارفرما می‌تواند کد را هم ببیند)
3. **فایل زیپ آماده**: همین پوشه را به‌صورت zip بده

اگر کارفرما فقط خروجی نهایی را می‌خواهد و نباید کد را ببیند، GitHub Pages بهترین گزینه است — فقط آدرس سایت را بده.

## ۵. برای آپدیت‌های بعدی

هر تغییری در فایل‌ها (مخصوصاً `assets/js/data.js`) اعمال کن، بعد:

```bash
git add .
git commit -m "توضیح کوتاه تغییر"
git push
```

GitHub Pages در ۱–۲ دقیقهٔ بعد آپدیت می‌شود.

## ۶. دامنهٔ اختصاصی (اختیاری)

اگر بعداً خواستی روی `viyan.ir` یا `viyan-rd.com` برود:
- در Settings → Pages → **Custom domain** دامنه را وارد کن
- یک رکورد CNAME در DNS دامنه به `YOUR_ORG.github.io` اضافه کن
- فایل `CNAME` (شامل نام دامنه) را در ریشهٔ repo اضافه کن

## نکات

- فایل `.nojekyll` را نگه دار تا GitHub Pages فایل‌های `_` دار و فولدرهای `assets` را بدون پردازش Jekyll سرو کند
- همهٔ مسیرها نسبی‌اند (بدون `/` ابتدایی)، پس در ریپوی پروژه‌ای (`/viyan/`) هم درست کار می‌کنند
- اگر CSS یا عکس 404 داد، مطمئن شو پوشهٔ `assets` دقیقاً کنار `index.html` است و فایل `.nojekyll` هست
