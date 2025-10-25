"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-amber-950/20 to-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-amber-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                {/* Placeholder for duck logo - you can replace with actual logo */}
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-lg flex items-center justify-center font-bold text-2xl shadow-lg shadow-amber-500/50">
                  🦆
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">DuckNW</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-amber-400 hover:text-amber-300 transition">Ana Sayfa</Link>
              <Link href="/magaza" className="text-gray-300 hover:text-amber-400 transition">Mağaza</Link>
              <Link href="/kredi-satin-al" className="text-gray-300 hover:text-amber-400 transition">Kredi Satın Al</Link>
              <Link href="/tickets" className="text-gray-300 hover:text-amber-400 transition">Destek</Link>
              <Link href="/wiki" className="text-gray-300 hover:text-amber-400 transition">Wiki</Link>
              <Link href="/yetkili-basvuru" className="text-gray-300 hover:text-amber-400 transition">Yetkili Başvuru</Link>
              <Link href="/oy-ver" className="text-gray-300 hover:text-amber-400 transition">Oy Ver</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/giris-yap" className="hidden md:block">
                <Button variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-600/10">
                  Giriş Yap
                </Button>
              </Link>
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-amber-400 p-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-top">
              <Link href="/" className="block text-amber-400 hover:text-amber-300 transition" onClick={() => setMobileMenuOpen(false)}>
                Ana Sayfa
              </Link>
              <Link href="/magaza" className="block text-gray-300 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Mağaza
              </Link>
              <Link href="/kredi-satin-al" className="block text-gray-300 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Kredi Satın Al
              </Link>
              <Link href="/tickets" className="block text-gray-300 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Destek
              </Link>
              <Link href="/wiki" className="block text-gray-300 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Wiki
              </Link>
              <Link href="/yetkili-basvuru" className="block text-gray-300 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Yetkili Başvuru
              </Link>
              <Link href="/oy-ver" className="block text-gray-300 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Oy Ver
              </Link>
              <Link href="/kredi-gonder" className="block text-gray-300 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Kredi Gönder
              </Link>
              <Link href="/sandik" className="block text-gray-300 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Sandık
              </Link>
              <Link href="/kurallar" className="block text-gray-300 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Kurallar
              </Link>
              <Link href="/giris-yap" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-amber-500/50">
                  Giriş Yap
                </Button>
              </Link>
              <Link href="/kayit-ol" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-amber-600 text-amber-400 hover:bg-amber-600/10">
                  Kayıt Ol
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/10 rounded-lg animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/10 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-amber-600/10 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-amber-600/20 text-amber-400 border-amber-600/50 animate-pulse">
            Yeni Sezon Açıldı!
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            DuckNW
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Türkiye'nin En İyi Minecraft Survival Sunucusu
          </p>

          {/* Server IP and Player Count */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition-all animate-glow cursor-pointer">
              <CardContent className="p-6">
                <p className="text-sm text-gray-400 mb-2">Sunucu IP</p>
                <p className="text-2xl font-mono font-bold text-amber-400">play.ducknw.net</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition-all">
              <CardContent className="p-6">
                <p className="text-sm text-gray-400 mb-2">Aktif Oyuncu</p>
                <p className="text-2xl font-bold text-amber-400">247 / 500</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-lg px-8 py-6 hover:scale-105 transition-transform shadow-lg shadow-amber-500/50">
              Şimdi Katıl
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-400 hover:bg-amber-600/10 text-lg px-8 py-6 hover:scale-105 transition-transform">
              Nasıl Katılırım?
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Neden DuckNW?
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Eşsiz özelliklerimizle en iyi oyun deneyimini yaşayın
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚔️</span>
                </div>
                <CardTitle className="text-amber-400">Custom Silahlar</CardTitle>
                <CardDescription className="text-gray-400">
                  Özel tasarlanmış eşsiz silahlar ve zırhlarla rakiplerinizi alt edin
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏰</span>
                </div>
                <CardTitle className="text-amber-400">Klan Sistemi</CardTitle>
                <CardDescription className="text-gray-400">
                  Kendi klanınızı kurun, topraklarınızı koruyun ve lider olun
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <CardTitle className="text-amber-400">Ekonomi Sistemi</CardTitle>
                <CardDescription className="text-gray-400">
                  Gelişmiş ekonomi sistemi ile ticaret yapın ve zengin olun
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <CardTitle className="text-amber-400">Günlük Görevler</CardTitle>
                <CardDescription className="text-gray-400">
                  Her gün yeni görevler tamamlayın ve ödüller kazanın
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle className="text-amber-400">Lag-Free</CardTitle>
                <CardDescription className="text-gray-400">
                  Güçlü sunucularımızla kesintisiz ve akıcı oyun deneyimi
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <CardTitle className="text-amber-400">7/24 Destek</CardTitle>
                <CardDescription className="text-gray-400">
                  Aktif moderasyon ekibi ile her zaman yanınızdayız
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="py-20 px-4 bg-zinc-900/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Oyun Modları
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Farklı oyun modlarıyla eğlenceyi katlayın
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-amber-900/30 to-zinc-900/50 border-amber-600/50 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-amber-400">Survival</CardTitle>
                  <Badge className="bg-amber-600 text-white">Aktif</Badge>
                </div>
                <CardDescription className="text-gray-300 text-base">
                  Klasik survival deneyimi, custom özellikler, klan sistemi ve ekonomi ile geliştirilmiş halinde. Kendi dünyanda yaşa, inşa et ve hayatta kal!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-amber-600/50 text-amber-400">Custom Items</Badge>
                  <Badge variant="outline" className="border-amber-600/50 text-amber-400">Klanlar</Badge>
                  <Badge variant="outline" className="border-amber-600/50 text-amber-400">McMMO</Badge>
                  <Badge variant="outline" className="border-amber-600/50 text-amber-400">Jobs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/30 to-zinc-900/50 border-amber-600/50 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-amber-400">SkyBlock</CardTitle>
                  <Badge className="bg-amber-600 text-white">Yakında</Badge>
                </div>
                <CardDescription className="text-gray-300 text-base">
                  Gökyüzünde kendi adanı oluştur, kaynaklarını yönet ve en büyük adaya sahip ol. Custom challengelar ve özel ödüller seni bekliyor!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-amber-600/50 text-amber-400">Custom Islands</Badge>
                  <Badge variant="outline" className="border-amber-600/50 text-amber-400">Challenges</Badge>
                  <Badge variant="outline" className="border-amber-600/50 text-amber-400">Co-op</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            VIP Paketler
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Sunucumuzu destekle ve özel ayrıcalıklar kazan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* VIP Package */}
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:scale-105 transition">
              <CardHeader>
                <div className="text-center">
                  <Badge className="mb-4 bg-amber-600/20 text-amber-400 border-amber-600/50">VIP</Badge>
                  <CardTitle className="text-3xl mb-2 text-amber-400">₺49.99</CardTitle>
                  <CardDescription className="text-gray-400">Aylık</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Yeşil isim rengi
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    /fly komutu
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    5 ev kurma hakkı
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Özel chat renkleri
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>

            {/* VIP+ Package */}
            <Card className="bg-zinc-900/50 border-amber-600/50 backdrop-blur-sm hover:scale-105 transition relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                  En Popüler
                </Badge>
              </div>
              <CardHeader>
                <div className="text-center">
                  <Badge className="mb-4 bg-amber-600/20 text-amber-400 border-amber-600/50">VIP+</Badge>
                  <CardTitle className="text-3xl mb-2 text-amber-400">₺99.99</CardTitle>
                  <CardDescription className="text-gray-400">Aylık</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Tüm VIP özellikleri
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Altın isim rengi
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    /nick komutu
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    10 ev kurma hakkı
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Pet sistemi
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>

            {/* MVP Package */}
            <Card className="bg-zinc-900/50 border-purple-900/50 backdrop-blur-sm hover:scale-105 transition">
              <CardHeader>
                <div className="text-center">
                  <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/50">MVP</Badge>
                  <CardTitle className="text-3xl mb-2 text-purple-400">₺199.99</CardTitle>
                  <CardDescription className="text-gray-400">Aylık</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Tüm VIP+ özellikleri
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Mor isim rengi
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Sınırsız ev kurma
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Custom partikül efektleri
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Özel kozmetikler
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 px-4 bg-zinc-900/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Sunucu Kuralları
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Herkes için adil ve eğlenceli bir ortam sağlamak için kurallarımıza uyun
          </p>

          <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">1. Saygılı Olun</h3>
                  <p className="text-gray-300">Tüm oyunculara saygılı davranın. Hakaret, küfür ve taciz yasaktır.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">2. Hile Yasaktır</h3>
                  <p className="text-gray-300">Her türlü hile, hack ve yasaklı modların kullanımı kalıcı ban ile sonuçlanır.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">3. Reklam Yasaktır</h3>
                  <p className="text-gray-300">Başka sunucuların veya dış bağlantıların reklamını yapmayın.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">4. Spam Yapmayın</h3>
                  <p className="text-gray-300">Chat'te spam yapmak, büyük harf kullanmak ve gereksiz mesajlar atmak yasaktır.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">5. Griefing Yasaktır</h3>
                  <p className="text-gray-300">Başkalarının yapılarına zarar vermek veya eşyalarını çalmak yasaktır.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">6. Yetkililere Uyun</h3>
                  <p className="text-gray-300">Sunucu yetkililerinin talimatlarına uyun ve onlara saygılı olun.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Kadromuz
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Sunucumuzu yöneten profesyonel ekibimiz
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zinc-900/50 border-red-900/50 backdrop-blur-sm hover:border-red-600/50 transition">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👑</span>
                </div>
                <Badge className="mb-2 bg-red-600/20 text-red-400 border-red-600/50">Owner</Badge>
                <h3 className="text-xl font-bold text-white mb-1">DuckOwner</h3>
                <p className="text-sm text-gray-400">Kurucu</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-purple-900/50 backdrop-blur-sm hover:border-purple-600/50 transition">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <Badge className="mb-2 bg-purple-600/20 text-purple-400 border-purple-600/50">Admin</Badge>
                <h3 className="text-xl font-bold text-white mb-1">xAdmin</h3>
                <p className="text-sm text-gray-400">Baş Yönetici</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-blue-900/50 backdrop-blur-sm hover:border-blue-600/50 transition">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                <Badge className="mb-2 bg-blue-600/20 text-blue-400 border-blue-600/50">Moderator</Badge>
                <h3 className="text-xl font-bold text-white mb-1">ModDuck</h3>
                <p className="text-sm text-gray-400">Moderatör</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎮</span>
                </div>
                <Badge className="mb-2 bg-amber-600/20 text-amber-400 border-amber-600/50">Helper</Badge>
                <h3 className="text-xl font-bold text-white mb-1">HelperDuck</h3>
                <p className="text-sm text-gray-400">Yardımcı</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-zinc-900/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            İstatistikler
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-amber-400 mb-2">15K+</p>
                <p className="text-gray-400">Kayıtlı Oyuncu</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-amber-400 mb-2">247</p>
                <p className="text-gray-400">Aktif Oyuncu</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-amber-400 mb-2">99.9%</p>
                <p className="text-gray-400">Uptime</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-amber-400 mb-2">2 Yıl</p>
                <p className="text-gray-400">Deneyim</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-amber-900/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-lg flex items-center justify-center font-bold text-2xl shadow-lg shadow-amber-500/50">
                  🦆
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">DuckNW</span>
              </div>
              <p className="text-gray-400">
                Türkiye'nin en iyi Minecraft survival sunucusu. 2023'ten beri hizmetinizdeyiz.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Hızlı Linkler</h3>
              <ul className="space-y-2">
                <li><Link href="/magaza" className="text-gray-400 hover:text-amber-400 transition">Mağaza</Link></li>
                <li><Link href="/wiki" className="text-gray-400 hover:text-amber-400 transition">Wiki</Link></li>
                <li><Link href="/kurallar" className="text-gray-400 hover:text-amber-400 transition">Kurallar</Link></li>
                <li><Link href="/oy-ver" className="text-gray-400 hover:text-amber-400 transition">Oy Ver</Link></li>
                <li><Link href="/sandik" className="text-gray-400 hover:text-amber-400 transition">Sandıklar</Link></li>
                <li><Link href="/yetkili-basvuru" className="text-gray-400 hover:text-amber-400 transition">Yetkili Başvuru</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Bize Ulaşın</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Discord: discord.gg/ducknw</li>
                <li className="text-gray-400">E-posta: destek@ducknw.net</li>
                <li className="text-gray-400">IP: play.ducknw.net</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-900/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DuckNW. Tüm hakları saklıdır. Minecraft ve ilgili tüm varlıklar Mojang Studios'a aittir.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
