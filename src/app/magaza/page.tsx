"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MagazaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-amber-950/20 to-zinc-950">
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-amber-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-lg flex items-center justify-center font-bold text-2xl shadow-lg shadow-amber-500/50">
                🦆
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">DuckNW</span>
            </Link>
            <Link href="/" className="text-amber-400 hover:text-amber-300 transition">
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Mağaza
            </h1>
            <p className="text-xl text-gray-300">
              VIP paketleri ve özel itemler
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">VIP Paketler</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

              <Card className="bg-zinc-900/50 border-blue-900/50 backdrop-blur-sm hover:scale-105 transition">
                <CardHeader>
                  <div className="text-center">
                    <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/50">MVP</Badge>
                    <CardTitle className="text-3xl mb-2 text-blue-400">₺199.99</CardTitle>
                    <CardDescription className="text-gray-400">Aylık</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      Tüm VIP+ özellikleri
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      Mavi isim rengi
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      Sınırsız ev kurma
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      Custom partikül efektleri
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      Özel kozmetikler
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Satın Al
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Özel İtemler</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-4xl mb-3">⚔️</div>
                    <CardTitle className="text-amber-400">Efsanevi Kılıç</CardTitle>
                    <CardDescription className="text-gray-400">Custom silah</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-amber-400">₺25.00</p>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Satın Al
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🛡️</div>
                    <CardTitle className="text-amber-400">Titan Zırhı</CardTitle>
                    <CardDescription className="text-gray-400">Full set zırh</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-amber-400">₺40.00</p>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Satın Al
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎁</div>
                    <CardTitle className="text-amber-400">Gizem Kutusu</CardTitle>
                    <CardDescription className="text-gray-400">Rastgele ödül</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-amber-400">₺15.00</p>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Satın Al
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-4xl mb-3">💎</div>
                    <CardTitle className="text-amber-400">Elmas Paketi</CardTitle>
                    <CardDescription className="text-gray-400">64 elmas</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-amber-400">₺10.00</p>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Satın Al
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-amber-900/20 border-amber-600/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Güvenli Ödeme</h3>
              <p className="text-gray-300 mb-4">
                Tüm ödemeler güvenli ödeme sistemleri üzerinden gerçekleştirilir.
              </p>
              <p className="text-gray-400 text-sm">
                Kredi kartı, banka kartı ve diğer ödeme yöntemlerini kabul ediyoruz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
