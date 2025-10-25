"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function KrediSatinAlPage() {
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Kredi Satın Al
            </h1>
            <p className="text-xl text-gray-300">
              Oyun içi kredi satın alarak avantaj elde edin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <CardTitle className="text-2xl text-amber-400">100 Kredi</CardTitle>
                  <CardDescription className="text-gray-400">Başlangıç paketi</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-amber-400">₺10.00</p>
                </div>
                <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    100 oyun içi kredi
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Anında teslimat
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <CardTitle className="text-2xl text-amber-400">250 Kredi</CardTitle>
                  <CardDescription className="text-gray-400">Popüler paket</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-amber-400">₺24.00</p>
                  <p className="text-sm text-green-400">%4 indirim</p>
                </div>
                <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    250 oyun içi kredi
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Anında teslimat
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-600/50 backdrop-blur-sm hover:border-amber-500/50 transition relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                  En İyi Değer
                </Badge>
              </div>
              <CardHeader>
                <div className="text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <CardTitle className="text-2xl text-amber-400">500 Kredi</CardTitle>
                  <CardDescription className="text-gray-400">Değerli paket</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-amber-400">₺45.00</p>
                  <p className="text-sm text-green-400">%10 indirim</p>
                </div>
                <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    500 oyun içi kredi
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Anında teslimat
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Bonus 50 kredi
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
              <CardHeader>
                <div className="text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <CardTitle className="text-2xl text-amber-400">1000 Kredi</CardTitle>
                  <CardDescription className="text-gray-400">Premium paket</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-amber-400">₺85.00</p>
                  <p className="text-sm text-green-400">%15 indirim</p>
                </div>
                <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    1000 oyun içi kredi
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Anında teslimat
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-400 mr-2">✓</span>
                    Bonus 150 kredi
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Satın Al
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-amber-400">Kredilerle Neler Yapabilirsiniz?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-white">Özel İtemler:</strong> Efsanevi silahlar, zırhlar ve diğer özel itemleri satın alın
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-white">Kozmetikler:</strong> Partikül efektleri, özel isim renkleri ve daha fazlası
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-white">Klan Özellikleri:</strong> Klanınızı geliştirin ve özel özellikler kazanın
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-white">Sandıklar:</strong> Özel sandıklar açın ve nadir ödüller kazanın
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-amber-900/20 border-amber-600/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🔒</div>
                <div>
                  <h3 className="text-lg font-bold text-amber-400 mb-1">Güvenli Ödeme</h3>
                  <p className="text-sm text-gray-300">
                    Tüm ödemeler SSL sertifikası ile şifrelenmiş güvenli kanallardan yapılır.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
