"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SandikPage() {
  const crates = [
    {
      name: "Başlangıç Sandığı",
      rarity: "Yaygın",
      color: "from-gray-500 to-gray-700",
      borderColor: "border-gray-500",
      keyPrice: 50,
      description: "Yeni başlayanlar için temel itemler",
      rewards: ["Temel Araçlar", "Yiyecek", "Para", "Kaynak Bloklar"]
    },
    {
      name: "Altın Sandık",
      rarity: "Nadir",
      color: "from-amber-500 to-amber-700",
      borderColor: "border-amber-500",
      keyPrice: 150,
      description: "Değerli itemler ve paralar",
      rewards: ["Özel Araçlar", "Elmas", "Altın", "Büyük Para Ödülleri"]
    },
    {
      name: "Efsane Sandık",
      rarity: "Efsanevi",
      color: "from-orange-500 to-red-600",
      borderColor: "border-orange-500",
      keyPrice: 300,
      description: "En nadir ve güçlü itemler",
      rewards: ["Efsane Silahlar", "Custom Zırhlar", "Nadir Itemler", "VIP Rank"]
    },
    {
      name: "Savaş Sandığı",
      rarity: "Özel",
      color: "from-red-500 to-red-800",
      borderColor: "border-red-500",
      keyPrice: 200,
      description: "PvP için özel itemler",
      rewards: ["Güçlü Silahlar", "Zırhlar", "Potions", "Savaş Buffları"]
    },
  ];

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
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Sandıklar
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Özel sandıkları açın ve harika ödüller kazanın
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Card className="inline-block bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <p className="text-sm text-gray-400 mb-1">Envanterimdeki Anahtarlar</p>
                  <p className="text-2xl font-bold text-amber-400">3 Adet</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {crates.map((crate, index) => (
              <Card key={index} className={`bg-zinc-900/50 border-2 ${crate.borderColor} backdrop-blur-sm hover:scale-105 transition-transform`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-2xl text-white">{crate.name}</CardTitle>
                    <Badge className={`bg-gradient-to-r ${crate.color} text-white`}>
                      {crate.rarity}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {crate.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-amber-400 mb-2">Olası Ödüller:</h4>
                    <div className="flex flex-wrap gap-2">
                      {crate.rewards.map((reward, i) => (
                        <Badge key={i} variant="outline" className="border-amber-600/50 text-gray-300">
                          {reward}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-amber-900/20 rounded-lg border border-amber-600/30 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Anahtar Fiyatı:</span>
                      <span className="text-amber-400 font-bold">{crate.keyPrice} Kredi</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Anahtar Al
                    </Button>
                    <Button variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-600/10">
                      Sandık Aç
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Anahtar Nasıl Elde Edilir?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-xl">🎁</span>
                    <div>
                      <strong className="text-white">Kredi ile Satın Al:</strong> Mağazadan kredi ile anahtar satın alabilirsiniz
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-xl">🗳️</span>
                    <div>
                      <strong className="text-white">Oy Vererek:</strong> Sunucuya oy vererek ücretsiz anahtarlar kazanın
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-xl">🎯</span>
                    <div>
                      <strong className="text-white">Görevler:</strong> Günlük ve haftalık görevleri tamamlayarak kazanın
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-xl">🎪</span>
                    <div>
                      <strong className="text-white">Eventler:</strong> Özel eventlere katılarak anahtar ödülleri kazanın
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Son Açılan Sandıklar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-zinc-800/50 rounded-lg border border-amber-900/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold">xProPlayer</p>
                        <p className="text-sm text-gray-400">Efsane Sandık</p>
                      </div>
                      <Badge className="bg-orange-600">Efsane Kılıç</Badge>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-800/50 rounded-lg border border-amber-900/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold">DuckMaster</p>
                        <p className="text-sm text-gray-400">Altın Sandık</p>
                      </div>
                      <Badge className="bg-amber-600">1000 Para</Badge>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-800/50 rounded-lg border border-amber-900/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold">MinecraftKing</p>
                        <p className="text-sm text-gray-400">Savaş Sandığı</p>
                      </div>
                      <Badge className="bg-red-600">Güçlü Zırh</Badge>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-800/50 rounded-lg border border-amber-900/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold">SkyWarrior</p>
                        <p className="text-sm text-gray-400">Başlangıç Sandığı</p>
                      </div>
                      <Badge className="bg-gray-600">Temel Set</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-amber-900/30 to-zinc-900/50 border-amber-600/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎰</div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Şansını Dene!</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Her sandık açılışında eşsiz ve değerli ödüller kazanma şansına sahipsiniz.
                  Efsanevi itemler, nadir silahlar, büyük para ödülleri ve daha fazlası sizi bekliyor!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/kredi-satin-al">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6">
                      Kredi Satın Al
                    </Button>
                  </Link>
                  <Link href="/oy-ver">
                    <Button variant="outline" className="border-2 border-amber-600 text-amber-400 hover:bg-amber-600/10 text-lg px-8 py-6">
                      Ücretsiz Anahtar Kazan
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
