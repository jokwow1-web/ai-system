# Panduan Audit GTM — Fix Best Practices Score

## Masalah

Lighthouse Best Practices score 54 karena:
1. Third-party cookies dari Meta Pixel (fix via business.facebook.com)
2. Console errors / deprecated APIs dari GTM tags

## Cara Audit GTM

### Step 1: Buka GTM Preview Mode

1. Buka **tagmanager.google.com**
2. Pilih workspace **GTM-PDT5F8VW**
3. Klik tombol **Preview** (besar, di pojok kanan atas)
4. Pop-up baru terbuka dengan Tag Assistant tab

### Step 2: Test Live Website

1. Di Tag Assistant tab, masukkan URL: `https://atrahdis.id/sbu`
2. Klik **Connect**
3. Website akan terbuka di tab baru
4. Tunggu 5 detik supaya semua tag fire

### Step 3: Cek Tag Error

1. Kembali ke tab **Tag Assistant**
2. Lihat tabel dengan kolom: **Tag Name | Status | Firing Triggers**
3. Status yang perlu diperhatikan:
   - 🟢 **Fired** = OK, tidak ada masalah
   - 🟡 **Not Fired** = OK (mungkin trigger tidak cocok)
   - 🔴 **Failed** = INI YANG HARUS FIX
   - ⚠️ **Error** = INI YANG HARUS FIX

### Step 4: Identifikasi Masalah Umum

Kalau ada tag merah/error, biasanya penyebabnya:

| Error | Penyebab | Solusi |
|-------|----------|--------|
| `gtag is not defined` | GA4 tag aktif tapi gtag.js belum load | Tambahkan Google Tag (gtag.js) tag sebelum GA4 tag |
| `fbq is not defined` | Meta Pixel firing sebelum script load | Delay Meta Pixel tag atau pindahkan ke atas |
| `undefined variable` | Variable GTM salah nama | Cek nama variable, pastikan match |
| `404 on script` | URL script salah | Update URL script |

### Step 5: Fix Tag Error

**Contoh: Meta Pixel firing too early**

1. Di GTM, klik menu **Tags**
2. Cari tag **Meta Pixel** atau **Facebook Pixel**
3. Klik tag tersebut
4. Cek bagian **Tag Sequencing** atau **Advanced Settings**
5. Aktifkan **Set Tag Priority** → isi angka **10** (lebih tinggi = lebih dulu)
6. Atau tambah **Tag Firing Options** → **Once per page**
7. Klik **Save**

**Contoh: GA4 tag firing sebelum gtag ready**

1. Di GTM, klik menu **Tags**
2. Cari tag **GA4 Configuration** atau **Google Analytics**
3. Cek bagian **Triggering**
4. Pastikan trigger adalah **All Pages** atau **Initialization - All Pages**
5. Jangan pakai trigger **Window Loaded** untuk GA4 config
6. Klik **Save**

### Step 6: Submit & Test Ulang

1. Klik **Submit** (pojok kanan atas)
2. Isi Version Name: `Fix tag errors - Best Practices audit`
3. Klik **Publish**
4. Tunggu 2 menit
5. Buka Preview Mode lagi
6. Test website → cek tag status
7. Kalau semua hijau → selesai

### Step 7: Lighthouse Re-test

```bash
# Terminal Mac — copy paste saja
lighthouse https://atrahdis.id/sbu \
  --chrome-flags="--headless --no-sandbox" \
  --preset=desktop \
  --output=json \
  --output-path=/tmp/lighthouse-final.json \
  --quiet

# Extract score
cat /tmp/lighthouse-final.json | node -e "
let d = '';
process.stdin.on('data', c => d += c);
process.stdin.on('end', () => {
  const r = JSON.parse(d);
  console.log('SEO:', r.categories?.seo?.score * 100);
  console.log('Performance:', r.categories?.performance?.score * 100);
  console.log('Best Practices:', r.categories?.['best-practices']?.score * 100);
});
"
```

## Kalau Tidak Ada Tag Error

Kalau semua tag status 🟢 hijau di Tag Assistant, berarti Best Practices 54 bukan karena GTM error, tapi karena warning browser tentang third-party scripts umum. Ini normal untuk website yang pakai:
- Google Analytics
- Meta Pixel
- Widget chat
- Embedded video

Score Best Practices 54–70 adalah range normal untuk site dengan tracking tools. Yang penting:
- SEO 100 ✅
- Performance 90+ ✅
- Accessibility 90+ ⏳ (bisa fix nanti)

Best Practices score tidak langsung mempengaruhi ranking Google. SEO score dan Performance yang lebih penting.
