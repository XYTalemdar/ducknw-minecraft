"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OyVerPage() {
  const voteSites = [
    {
      name: "MinecraftServers.org",
      reward: "100 Kredi + 1 Sandık Anahtarı",
      cooldown: "24 saat",
      status: "Hazır",
      statusColor: "bg-green-600"
    },
    {
      name: "TopG.org",
      reward: "150 Kredi + 5000 Para",
      cooldown: "12 saat",
      status: "Hazır",
      statusColor: "bg-green-600"
    },
    {
      name: "Minecraft-MP.com",
      reward: "75 Kredi + Bonus XP",
      cooldown: "24 saat",
      status: "8 saat kaldı",
      statusColor: "bg-red-600"
    },
    {
      name: "MinecraftList.org",
      reward: "100 Kredi",
      cooldown: "24 saat",
      status: "Hazır",
      statusColor: "bg-green-600"
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
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Oy Ver
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Sunucumuza oy vererek harika ödüller kazanın
            </p>
            <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/50 text-lg px-4 py-2">
              Bu ay toplam: 1,247 oy
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-amber-900/30 to-zinc-900/50 border-amber-600/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <CardTitle className="text-2xl text-amber-400">Aylık Ödül</CardTitle>
                    <CardDescription className="text-gray-300">En çok oy veren 3 oyuncu</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-amber-900/20 rounded-lg border border-amber-600/30">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🥇</span>
                      <div>
                        <p className="text-white font-bold">1. Sıra</p>
                        <p className="text-sm text-gray-400">MVP Rank + 5000 Kredi</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🥈</span>
                      <div>
                        <p className="text-white font-bold">2. Sıra</p>
                        <p className="text-sm text-gray-400">VIP+ Rank + 3000 Kredi</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🥉</span>
                      <div>
                        <p className="text-white font-bold">3. Sıra</p>
                        <p className="text-sm text-gray-400">VIP Rank + 2000 Kredi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-4xl">📊</div>
                  <div>
                    <CardTitle className="text-2xl text-amber-400">Bu Ay En Çok Oy Verenler</CardTitle>
                    <CardDescription className="text-gray-300">Top 5 sıralaması</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { rank: 1, player: "xProPlayer", votes: 89 },
                    { rank: 2, player: "DuckMaster", votes: 76 },
                    { rank: 3, player: "MinecraftKing", votes: 71 },
                    { rank: 4, player: "VoteChampion", votes: 65 },
                    { rank: 5, player: "SkyWarrior", votes: 58 },
                  ].map((entry) => (
                    <div key={entry.rank} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-amber-400 font-bold text-lg w-6">#{entry.rank}</span>
                        <span className="text-white font-semibold">{entry.player}</span>
                      </div>
                      <Badge className="bg-amber-600/20 text-amber-400">{entry.votes} oy</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Oy Siteleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {voteSites.map((site, index) => (
                <Card key={index} className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-amber-400">{site.name}</CardTitle>
                      <Badge className={site.statusColor}>{site.status}</Badge>
                    </div>
                    <CardDescription className="text-gray-400">
                      Bekleme süresi: {site.cooldown}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 p-3 bg-amber-900/20 rounded-lg border border-amber-600/30">
                      <p className="text-sm text-gray-400 mb-1">Ödül:</p>
                      <p className="text-amber-400 font-semibold">{site.reward}</p>
                    </div>
                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      disabled={site.status !== "Hazır"}
                    >
                      {site.status === "Hazır" ? "Oy Ver" : "Bekleniyor"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">Oy Verme Avantajları</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">💰</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Kredi Kazan</h4>
                    <p className="text-sm text-gray-400">Her oy ile 75-150 arası kredi kazanın</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">🎁</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Özel Ödüller</h4>
                    <p className="text-sm text-gray-400">Sandık anahtarları ve nadir itemler</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">📈</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Sunucuyu Büyüt</h4>
                    <p className="text-sm text-gray-400">Daha çok oyuncu, daha eğlenceli oyun</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">🏆</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Yarışa Katıl</h4>
                    <p className="text-sm text-gray-400">Aylık sıralamada üst sıralara çık</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-amber-900/20 border-amber-600/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h3 className="text-lg font-bold text-amber-400 mb-2">İpucu</h3>
                  <p className="text-gray-300 text-sm">
                    Tüm sitelere her gün düzenli oy vererek ayda binlerce kredi ve özel ödüller kazanabilirsiniz.
                    Oyuncu adınızı doğru yazdığınızdan emin olun!
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
