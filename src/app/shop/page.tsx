"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Shop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-amber-950/20 to-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-amber-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-lg flex items-center justify-center font-bold text-2xl shadow-lg shadow-amber-500/50">
                🦆
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">DuckNW</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-amber-400 transition">Ana Sayfa</Link>
              <Link href="/forum" className="text-gray-300 hover:text-amber-400 transition">Forum</Link>
              <Link href="/shop" className="text-amber-400 hover:text-amber-300 transition">Mağaza</Link>
              <Link href="/tickets" className="text-gray-300 hover:text-amber-400 transition">Destek</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Shop Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            Mağaza
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Sunucumuzu destekle ve özel ayrıcalıklar kazan
          </p>
        </div>
      </section>

      {/* VIP Packages */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">VIP Paketler</h2>
          <p className="text-center text-gray-400 mb-12">Aylık yenilenen premium üyelikler</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:scale-105 transition-all">
              <CardHeader>
                <div className="text-center">
                  <Badge className="mb-4 bg-amber-600/20 text-amber-400 border-amber-600/50">VIP</Badge>
                  <CardTitle className="text-4xl mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">₺49.99</CardTitle>
                  <CardDescription className="text-gray-400">Aylık</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex items-center"><span className="text-amber-400 mr-2">✓</span>Turuncu isim rengi</li>
                  <li className="flex items-center"><span className="text-amber-400 mr-2">✓</span>/fly komutu</li>
                  <li className="flex items-center"><span className="text-amber-400 mr-2">✓</span>5 ev kurma hakkı</li>
                  <li className="flex items-center"><span className="text-amber-400 mr-2">✓</span>Özel chat renkleri</li>
                  <li className="flex items-center"><span className="text-amber-400 mr-2">✓</span>Öncelikli giriş</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-orange-600/50 backdrop-blur-sm hover:scale-105 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white">En Popüler</Badge>
              </div>
              <CardHeader>
                <div className="text-center">
                  <Badge className="mb-4 bg-orange-600/20 text-orange-400 border-orange-600/50">VIP+</Badge>
                  <CardTitle className="text-4xl mb-2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">₺99.99</CardTitle>
                  <CardDescription className="text-gray-400">Aylık</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex items-center"><span className="text-orange-400 mr-2">✓</span>Tüm VIP özellikleri</li>
                  <li className="flex items-center"><span className="text-orange-400 mr-2">✓</span>Kırmızı isim rengi</li>
                  <li className="flex items-center"><span className="text-orange-400 mr-2">✓</span>/nick komutu</li>
                  <li className="flex items-center"><span className="text-orange-400 mr-2">✓</span>10 ev kurma hakkı</li>
                  <li className="flex items-center"><span className="text-orange-400 mr-2">✓</span>Pet sistemi</li>
                  <li className="flex items-center"><span className="text-orange-400 mr-2">✓</span>Özel partikül efektleri</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-yellow-900/50 backdrop-blur-sm hover:scale-105 transition-all">
              <CardHeader>
                <div className="text-center">
                  <Badge className="mb-4 bg-yellow-600/20 text-yellow-400 border-yellow-600/50">MVP</Badge>
                  <CardTitle className="text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">₺199.99</CardTitle>
                  <CardDescription className="text-gray-400">Aylık</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Tüm VIP+ özellikleri</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Altın isim rengi</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Sınırsız ev kurma</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Custom kozmetikler</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Özel evcil hayvanlar</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>/god komutu (PvP hariç)</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Other Items */}
          <h2 className="text-3xl font-bold text-white mb-6">Diğer Ürünler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-3xl">
                  🎒
                </div>
                <CardTitle className="text-center text-amber-400">Ekstra Slot</CardTitle>
                <CardDescription className="text-center text-gray-400">
                  Envanter slotu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-bold text-purple-400 mb-4">₺19.99</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Satın Al</Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-3xl">
                  🏠
                </div>
                <CardTitle className="text-center text-amber-400">Ev Slotu</CardTitle>
                <CardDescription className="text-center text-gray-400">
                  +5 ev kurma hakkı
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-bold text-blue-400 mb-4">₺24.99</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Satın Al</Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-3xl">
                  💰
                </div>
                <CardTitle className="text-center text-amber-400">Para Paketi</CardTitle>
                <CardDescription className="text-center text-gray-400">
                  1,000,000 coin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-bold text-green-400 mb-4">₺29.99</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Satın Al</Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-3xl">
                  ⚔️
                </div>
                <CardTitle className="text-center text-amber-400">Özel Silah</CardTitle>
                <CardDescription className="text-center text-gray-400">
                  Efsanevi kılıç
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-bold text-red-400 mb-4">₺39.99</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">Satın Al</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-amber-900/20 py-12 px-4 mt-12">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 DuckNW Mağaza. Güvenli ödeme sistemi ile korunmaktadır.</p>
        </div>
      </footer>
    </div>
  );
}
