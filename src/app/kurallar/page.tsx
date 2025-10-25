"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function KurallarPage() {
  const rules = [
    {
      id: 1,
      title: "Saygılı Olun",
      icon: "🤝",
      description: "Tüm oyunculara saygılı davranın. Hakaret, küfür, ayrımcılık ve taciz kesinlikle yasaktır.",
      penalty: "1. İhlal: Uyarı, 2. İhlal: Mute (1 saat), 3. İhlal: Ban (1 gün)"
    },
    {
      id: 2,
      title: "Hile Yasaktır",
      icon: "🚫",
      description: "Her türlü hile, hack, yasaklı mod ve haksız avantaj sağlayan programların kullanımı yasaktır.",
      penalty: "Kalıcı Ban"
    },
    {
      id: 3,
      title: "Reklam Yasaktır",
      icon: "📢",
      description: "Başka sunucuların, Discord sunucularının veya dış bağlantıların reklamını yapmak yasaktır.",
      penalty: "1. İhlal: Mute (6 saat), 2. İhlal: Ban (7 gün), 3. İhlal: Kalıcı Ban"
    },
    {
      id: 4,
      title: "Spam Yapmayın",
      icon: "💬",
      description: "Chat'te spam yapmak, büyük harf kullanmak, gereksiz mesajlar atmak ve flood yapmak yasaktır.",
      penalty: "1. İhlal: Uyarı, 2. İhlal: Mute (30 dakika), 3. İhlal: Mute (3 saat)"
    },
    {
      id: 5,
      title: "Griefing Yasaktır",
      icon: "🏚️",
      description: "Başkalarının yapılarına zarar vermek, eşyalarını çalmak veya bölgelerine izinsiz girmek yasaktır.",
      penalty: "1. İhlal: Ban (3 gün) + Geri ödeme, 2. İhlal: Ban (14 gün), 3. İhlal: Kalıcı Ban"
    },
    {
      id: 6,
      title: "Bug/Hata Sömürüsü",
      icon: "🐛",
      description: "Oyundaki hataları kötüye kullanmak yasaktır. Bulduğunuz hataları yetkililere bildirin.",
      penalty: "1. İhlal: Ban (7 gün) + Envanter sıfırlama, 2. İhlal: Kalıcı Ban"
    },
    {
      id: 7,
      title: "Yetkililere Uyun",
      icon: "👮",
      description: "Sunucu yetkililerinin talimatlarına uyun ve onlara saygılı olun. Yetkili kararlarına saygı gösterin.",
      penalty: "1. İhlal: Uyarı, 2. İhlal: Mute/Ban (durum değerlendirmesine göre)"
    },
    {
      id: 8,
      title: "Hesap Güvenliği",
      icon: "🔒",
      description: "Hesabınızı başkalarıyla paylaşmayın. Hesabınızdan yapılan tüm eylemlerden siz sorumlusunuz.",
      penalty: "Hesap paylaşımı tespit edilirse her iki hesap da banlanabilir"
    },
    {
      id: 9,
      title: "Scam/Dolandırıcılık",
      icon: "⚠️",
      description: "Oyuncuları kandırmak, dolandırmak veya aldatmak yasaktır. Dürüst ticaret yapın.",
      penalty: "1. İhlal: Ban (7 gün) + Geri ödeme, 2. İhlal: Kalıcı Ban"
    },
    {
      id: 10,
      title: "İsim Kuralları",
      icon: "📝",
      description: "Kullanıcı adınız uygunsuz, hakaret içeren veya yanıltıcı olamaz. Yetkili taklit edilemez.",
      penalty: "İsim değişikliği zorunluluğu, uymazsa ban"
    },
    {
      id: 11,
      title: "PvP Kuralları",
      icon: "⚔️",
      description: "Spawn ve güvenli bölgelerde PvP yasaktır. Kill aura, reach hack gibi hilelere kesinlikle izin verilmez.",
      penalty: "Hile kullanımı: Kalıcı Ban, Güvenli bölgede PvP: Ban (1 gün)"
    },
    {
      id: 12,
      title: "İçerik Paylaşımı",
      icon: "🎥",
      description: "Sunucumuzla ilgili içerik oluşturabilirsiniz, ancak uygunsuz içerik paylaşımı yasaktır.",
      penalty: "İhlal durumuna göre değişir"
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
              Sunucu Kuralları
            </h1>
            <p className="text-xl text-gray-300">
              Herkes için adil ve eğlenceli bir ortam sağlamak için kurallarımıza uyun
            </p>
          </div>

          <Card className="bg-amber-900/20 border-amber-600/50 backdrop-blur-sm mb-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📖</div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">Önemli Bilgilendirme</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      Bu kuralları bilmemek mazeret sayılmaz
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      Yetkililer duruma göre ceza şiddetini artırabilir veya azaltabilir
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      Kurallar önceden haber verilmeksizin güncellenebilir
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      Burada belirtilmeyen ancak genel ahlak kurallarına aykırı davranışlar da cezalandırılabilir
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {rules.map((rule) => (
              <Card key={rule.id} className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{rule.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/50">
                          Kural #{rule.id}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-amber-400 mb-2">{rule.title}</CardTitle>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {rule.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-red-900/20 rounded-lg border border-red-600/30">
                    <p className="text-sm text-gray-400 mb-1">Ceza:</p>
                    <p className="text-sm text-red-400">{rule.penalty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">İzin Verilen Modlar</CardTitle>
              <CardDescription className="text-gray-300">
                Aşağıdaki modlar sunucumuzda kullanılabilir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Optifine",
                  "Minimap (Radar yok)",
                  "Inventory Tweaks",
                  "JEI/NEI",
                  "Shaders",
                  "Better PvP",
                  "Damage Indicators",
                  "ArmorStatus",
                  "DirectionHUD",
                  "Schematica (Printer yok)",
                  "Replay Mod",
                  "VoxelMap (Radar yok)"
                ].map((mod, index) => (
                  <div key={index} className="p-3 bg-green-900/20 rounded-lg border border-green-600/30">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300 text-sm">{mod}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-red-900/50 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400">Yasaklı Modlar</CardTitle>
              <CardDescription className="text-gray-300">
                Bu modların kullanımı kalıcı ban ile sonuçlanır
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "X-Ray",
                  "Fly Hack",
                  "Speed Hack",
                  "Kill Aura",
                  "Reach Hack",
                  "Auto Clicker",
                  "Nuker",
                  "Freecam",
                  "Blink",
                  "AutoArmor",
                  "ESP/Wallhack",
                  "Printer Mods"
                ].map((mod, index) => (
                  <div key={index} className="p-3 bg-red-900/20 rounded-lg border border-red-600/30">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      <span className="text-gray-300 text-sm">{mod}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-amber-900/20 border-amber-600/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Kural İhlali Bildirimi</h3>
              <p className="text-gray-300 mb-6">
                Bir kural ihlali gördüyseniz, lütfen yetkililere bildirin veya destek talebi oluşturun.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/tickets">
                  <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition">
                    Destek Talebi Oluştur
                  </button>
                </Link>
                <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-gray-300 rounded-lg transition">
                  Discord'a Katıl
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
