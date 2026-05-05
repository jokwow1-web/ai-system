# Panduan Manual Post-Deploy SEO Atrahdis.id

## 1. GA4 via GTM (Zero Code)

**Tujuan:** Kirim data PageView ke GA4 tanpa ubah kode. Cukup tambah tag di GTM container yang sudah terpasang.

### Langkah-langkah

1. **Buka** [tagmanager.google.com](https://tagmanager.google.com)
2. **Login** dengan akun Google yang punya akses container
3. **Pilih container:** `GTM-PDT5F8VW` (sudah terpasang di website)
4. Klik menu **Tags** (di sidebar kiri)
5. Klik tombol **New** (di pojok kanan atas)
6. Di kolom **Name**, ketik: `GA4 Configuration`
7. Klik kotak **Tag Configuration**
8. Pilih tipe: **Google Analytics: GA4 Configuration**
9. Di kolom **Measurement ID**, masukkan: `G-MBFS7DEE9F`
10. Klik kotak **Triggering**
11. Pilih: **All Pages** (atau buat trigger baru: Page View > All Pages)
12. Klik **Save** (pojok kanan atas)
13. Klik tombol **Submit** (pojok kanan atas)
14. Di popup, klik **Publish**
15. Selesai. GA4 akan mulai menerima data dalam 5–10 menit.

### Verifikasi GA4

1. Buka [analytics.google.com](https://analytics.google.com)
2. Pilih property dengan ID `G-MBFS7DEE9F`
3. Buka menu **Admin** (roda gigi di pojok kiri bawah)
4. Pilih **DebugView** (di bawah kolom Property)
5. Buka website `https://atrahdis.id/sbu` di tab baru
6. Kembali ke DebugView — harus muncul event `page_view`

---

## 2. Google Search Console Submit Sitemap

**Tujuan:** Google tahu ada sitemap baru, biar page di-index lebih cepat.

### Langkah-langkah

1. **Buka** [search.google.com/search-console](https://search.google.com/search-console)
2. **Login** dengan akun Google
3. Di dashboard, pilih property: `atrahdis.id`
   - Kalau belum ada, tambah dulu via **Add Property** > pilih **Domain** > masukkan `atrahdis.id` > verifikasi via DNS (tambah TXT record di Cloudflare/Namecheap)
4. Di sidebar kiri, klik **Sitemaps**
5. Di kolom **Add a new sitemap**, ketik: `sitemap.xml`
6. Klik **Submit**
7. Tunggu 1–3 hari, cek status di **Coverage** > **Valid** (harus muncul 15+ URL)

### Tambahan: Inspeksi URL

1. Di GSC, pilih menu **URL Inspection** (di sidebar)
2. Masukkan: `https://atrahdis.id/sbu`
3. Klik **Test Live URL**
4. Harus muncul status: **URL is on Google** + **Page is mobile-friendly**

---

## 3. Meta Pixel / GTM Best Practices Fix

**Masalah:** Lighthouse Best Practices score 54 karena third-party cookies + deprecated API dari Meta Pixel dan GTM script.

### Solusi 1: First-Party Cookie Mode Meta Pixel

1. Buka [business.facebook.com](https://business.facebook.com)
2. Pilih **Events Manager** > pilih pixel Anda
3. Klik tab **Settings**
4. Scroll ke **Cookie Settings**
5. Aktifkan **First-Party Cookies**
6. Simpan

### Solusi 2: Audit GTM Tags

1. Buka [tagmanager.google.com](https://tagmanager.google.com) > container `GTM-PDT5F8VW`
2. Klik **Versions** (sidebar kiri)
3. Klik versi terakhir yang published
4. Klik **Preview** (di pojok kanan atas)
5. Buka website di tab baru > masukkan URL `https://atrahdis.id/sbu`
6. Kembali ke tab Tag Assistant — cek apakah ada tag merah (error)
7. Kalau ada tag error, catat nama tagnya
8. Buka menu **Tags** > cari tag error > periksa trigger atau konfigurasi
9. Kalau tag tidak dipakai, hapus. Kalau trigger salah, perbaiki.

---

## 4. Quick Checklist Verifikasi Live

Copy-paste perintah ini di terminal (Mac) untuk verifikasi:

```bash
# Cek sitemap
curl -s https://atrahdis.id/sitemap.xml | head -20

# Cek robots.txt
curl -s https://atrahdis.id/robots.txt

# Cek canonical /sbu
curl -s https://atrahdis.id/sbu | grep -o '<link rel="canonical"[^>]*>'

# Cek JSON-LD /sbu
curl -s https://atrahdis.id/sbu | grep -o '<script type="application/ld+json"[^>]*>[^<]*</script>' | head -2

# Cek blog index
curl -s https://atrahdis.id/blog | grep -o '<h1[^>]*>[^<]*</h1>'
```

---

## Catatan Penting

- Sitemap sudah auto-update kalau ada artikel baru (dari `lib/blog.ts`)
- Blog posts sudah static-generated, jadi load cepat dan SEO-friendly
- Voice Guard sudah aktif untuk semua artikel — 90 files scanned, 0 violations
- Kalau ada artikel baru, cukup tambah file `.mdx` di `content/blog/`, deploy ulang
