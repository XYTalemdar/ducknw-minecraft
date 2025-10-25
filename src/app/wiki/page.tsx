"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function WikiPage() {
  const [selectedCategory, setSelectedCategory] = useState("baslarken");

  const categories = [
    { id: "baslarken", name: "Başlarken", icon: "🎮" },
    { id: "komutlar", name: "Komutlar", icon: "⌨️" },
    { id: "ekonomi", name: "Ekonomi", icon: "💰" },
    { id: "klanlar", name: "Klanlar", icon: "🏰" },
    { id: "pvp", name: "PvP & Savaş", icon: "⚔️" },
    { id: "ozellikler", name: "Özel Özellikler", icon: "✨" },
  ];

  const content = {
    baslarken: [
      {
        title: "Sunucuya Nasıl Katılırım?",
        content: "Minecraft Java Edition'ı açın ve Multiplayer bölümünden 'Add Server' seçeneğine tıklayın. Server Address kısmına 'play.ducknw.net' yazın ve sunucuya katılın."
      },
      {
        title: "İlk Adımlar",
        content: "Sunucuya katıldığınızda spawn bölgesindesiniz. /rtp komutu ile rastgele bir konuma ışınlanabilir ve oyuna başlayabilirsiniz. İlk evinizi kurun ve hayatta kalmaya başlayın!"
      },
      {
        title: "Yeni Oyuncu Bonusları",
        content: "Yeni oyuncular ilk giriş yaptığında başlangıç paketi alır. Bu pakette temel araçlar, yiyecek ve başlangıç parası bulunur."
      },
    ],
    komutlar: [
      {
        title: "Temel Komutlar",
        content: "/spawn - Ana lobiye dönüş\n/rtp - Rastgele teleport\n/sethome [isim] - Ev noktası belirle\n/home [isim] - Eve ışınlan\n/tpa [oyuncu] - Oyuncuya ışınlanma isteği gönder"
      },
      {
        title: "Ekonomi Komutları",
        content: "/bal - Bakiyeni görüntüle\n/pay [oyuncu] [miktar] - Para gönder\n/shop - Mağazayı aç\n/sell hand - Elindeki itemi sat\n/baltop - En zenginler listesi"
      },
      {
        title: "Klan Komutları",
        content: "/clan create [isim] - Klan oluştur\n/clan invite [oyuncu] - Klana davet et\n/clan home - Klan evine git\n/clan bank - Klan bankasını görüntüle"
      },
    ],
    ekonomi: [
      {
        title: "Para Kazanma Yolları",
        content: "Sunucuda para kazanmanın birçok yolu var: İtem satışı, görevler, joblar, PvP arena ödülleri, oy verme, günlük bonuslar ve mini oyunlar."
      },
      {
        title: "Mağaza Sistemi",
        content: "Sunucu mağazasından temel itemleri satın alabilir, kendi itemlerinizi satabilirsiniz. Oyuncu mağazalarında da alışveriş yapabilirsiniz."
      },
      {
        title: "Joblar (Meslekler)",
        content: "Madenci, çiftçi, avcı, oduncu ve daha fazla meslek seçerek para kazanabilirsiniz. Her meslekte seviye atlayarak daha fazla kazanç elde edersiniz."
      },
    ],
    klanlar: [
      {
        title: "Klan Sistemi",
        content: "Klanlar, oyuncuların bir araya gelerek güçlü topluluklar oluşturmasını sağlar. Klan kurma ücreti 10,000 paradır."
      },
      {
        title: "Klan Özellikleri",
        content: "Klanlar toprak sahipliği, ortak banka, klan evi, özel sohbet ve klan savaşları özelliklerine sahiptir."
      },
      {
        title: "Klan Seviyeleri",
        content: "Klanlar aktiviteleriyle deneyim kazanarak seviye atlayabilir. Her seviyede yeni özellikler ve bonuslar açılır."
      },
    ],
    pvp: [
      {
        title: "PvP Kuralları",
        content: "Spawn bölgesinde ve güvenli bölgelerde PvP yasaktır. Klan topraklarında klan üyeleri arasında PvP olmaz. Diğer tüm bölgelerde PvP açıktır."
      },
      {
        title: "Savaş Arenası",
        content: "Özel arena bölgesinde oyuncularla 1v1 veya takım savaşları yapabilirsiniz. Arena ödülleri kazanın."
      },
      {
        title: "Custom Silahlar",
        content: "Sunucuda özel tasarlanmış güçlü silahlar ve zırhlar bulunur. Bunları craftlayabilir, kutulardan çıkarabilir veya satın alabilirsiniz."
      },
    ],
    ozellikler: [
      {
        title: "McMMO Sistemi",
        content: "Aktivitelerinizle beceri puanları kazanın. Madencilik, odunculuk, savaş, tarım ve daha fazla beceri geliştirebilirsiniz."
      },
      {
        title: "Günlük Görevler",
        content: "Her gün yeni görevler tamamlayarak para, deneyim ve özel ödüller kazanabilirsiniz. Görevleri /quests komutuyla görüntüleyin."
      },
      {
        title: "Pet Sistemi",
        content: "Sevimli petler edinin ve özelleştirin. Petler size bonuslar sağlar ve yanınızda dolaşır."
      },
      {
        title: "Özel Eventler",
        content: "Haftalık eventler, boss savaşları, hazine avları ve özel turnuvalar düzenlenir. Discord'dan duyurularımızı takip edin."
      },
    ],
  };

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
              Wiki
            </h1>
            <p className="text-xl text-gray-300">
              DuckNW sunucusu hakkında her şey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm sticky top-24">
                <CardHeader>
                  <CardTitle className="text-amber-400">Kategoriler</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition ${
                        selectedCategory === category.id
                          ? "bg-amber-600/20 text-amber-400 border border-amber-600/50"
                          : "bg-zinc-800/50 text-gray-300 hover:bg-zinc-800"
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3 space-y-6">
              {content[selectedCategory as keyof typeof content].map((item, index) => (
                <Card key={index} className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                  <CardHeader>
                    <CardTitle className="text-2xl text-amber-400">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-12 bg-amber-900/20 border-amber-600/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Daha Fazla Yardım Mı Lazım?</h3>
              <p className="text-gray-300 mb-6">
                Wiki'de bulamadığınız bir şey mi var? Destek ekibimiz size yardımcı olmak için hazır!
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
