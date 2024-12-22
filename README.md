# Eren'in Kişisel Web Sitesi

## Proje Açıklaması
Modern, responsive ve tema destekli kişisel web sitesi. React ve TypeScript kullanılarak geliştirilmiştir.

## Özellikler
- 🌓 Dark/Light Tema Desteği
- 📱 Responsive Tasarım
- 🚀 Modern UI/UXxx
- 🔍 Proje Filtreleme
- 🌐 Çoklu Sayfa Yapısı

## Teknolojiler
- React
- TypeScript
- React Router
- FontAwesome İkonları
- CSS Modules

## Gereksinimler
- Node.js (v14 veya üzeri)
- npm (v6 veya üzeri)

## Kurulum
1. Depoyu klonlayın
```bash
git clone https://github.com/kullaniciadi/kisisel-website.git
cd kisisel-website
```

2. Bağımlılıkları yükleyin
```bash
npm install
```

## Geliştirme Sunucusunu Çalıştırma
```bash
npm start
```

Tarayıcınızda `http://localhost:3000` adresini açın.

## Proje Yapısı
```
src/
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── context/
│   └── ThemeContext.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── Projects.tsx
├── styles/
│   └── global.css
└── App.tsx
```

## Tema Değişimi
Sağ üst köşedeki tema butonunu kullanarak light ve dark modlar arasında geçiş yapabilirsiniz.

## Yapı Oluşturma
Üretim için projeyi derlemek için:
```bash
npm run build
```

## Lisans
MIT Lisansı
