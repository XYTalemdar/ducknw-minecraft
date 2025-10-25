"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function YetkiliBasvuruPage() {
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
              Yetkili Başvurusu
            </h1>
            <p className="text-xl text-gray-300">
              Ekibimize katılın ve fark yaratın
            </p>
          </div>

          <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">Aranan Özellikler</CardTitle>
              <CardDescription className="text-gray-400">
                İdeal adaylarımızda beklediğimiz nitelikler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold">Yaş: 16+</h4>
                    <p className="text-sm text-gray-400">Olgunluk ve sorumluluk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold">Aktif Olma</h4>
                    <p className="text-sm text-gray-400">Günde en az 3-4 saat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold">İyi İletişim</h4>
                    <p className="text-sm text-gray-400">Nazik ve yardımsever</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold">Deneyim</h4>
                    <p className="text-sm text-gray-400">Sunucuda en az 1 ay</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold">Discord</h4>
                    <p className="text-sm text-gray-400">Aktif Discord kullanımı</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold">Temiz Geçmiş</h4>
                    <p className="text-sm text-gray-400">Ban veya mute kaydı yok</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">Yetkili Pozisyonları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-zinc-800/50 rounded-lg border border-amber-900/30">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/50">Helper</Badge>
                  <h4 className="text-white font-bold">Yardımcı</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Oyunculara yardım eder, soruları cevaplar ve basit sorunları çözer. Yetkili yolculuğunun ilk adımı.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-blue-900/30">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/50">Moderator</Badge>
                  <h4 className="text-white font-bold">Moderatör</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Sunucu kurallarını uygular, raporları inceler ve gerekli cezaları verir. Daha geniş yetkiler.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-green-900/30">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/50">Admin</Badge>
                  <h4 className="text-white font-bold">Admin</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Sunucu yönetiminde aktif rol alır, eventler düzenler ve yönetim kararlarında söz sahibidir.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">Başvuru Formu</CardTitle>
              <CardDescription className="text-gray-400">
                Lütfen tüm soruları eksiksiz ve dürüstçe cevaplayın
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Oyun İçi Adınız
                    </label>
                    <input
                      type="text"
                      placeholder="MinecraftNick"
                      className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Yaşınız
                    </label>
                    <input
                      type="number"
                      placeholder="18"
                      min="16"
                      className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Discord Adınız
                    </label>
                    <input
                      type="text"
                      placeholder="kullanici#1234"
                      className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Başvurduğunuz Pozisyon
                    </label>
                    <select className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none">
                      <option>Helper</option>
                      <option>Moderator</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ne kadar süredir DuckNW'de oynuyorsunuz?
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: 3 ay"
                    className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Günde ortalama kaç saat aktif olabilirsiniz?
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: 4-5 saat"
                    className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Daha önce yetkili deneyiminiz var mı? Varsa detaylandırın.
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Daha önce çalıştığınız sunucular ve pozisyonlarınızı açıklayın..."
                    className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Neden yetkili olmak istiyorsunuz?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Motivasyonunuzu ve hedeflerinizi açıklayın..."
                    className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Bir oyuncu kural ihlali yaptığında nasıl davranırsınız?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Örnek bir senaryoda nasıl hareket edeceğinizi açıklayın..."
                    className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Sizi diğer adaylardan ayıran özellikleriniz nelerdir?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Güçlü yönlerinizi ve katkılarınızı belirtin..."
                    className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-amber-900/20 rounded-lg border border-amber-600/30">
                  <input
                    type="checkbox"
                    id="agree"
                    className="mt-1"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-300">
                    Başvurumda verdiğim bilgilerin doğru olduğunu, sunucu kurallarını okuduğumu ve kabul ettiğimi, yetkili sorumluluklarını yerine getirebileceğimi onaylıyorum.
                  </label>
                </div>

                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg py-6">
                  Başvuruyu Gönder
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-amber-900/20 border-amber-600/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-amber-400 mb-3">Önemli Notlar</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  Başvurular genellikle 7-14 gün içinde değerlendirilir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  Sonuç Discord üzerinden bildirilir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  Reddedilen başvurular 30 gün sonra yeniden yapılabilir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  Sahte bilgi vermek kalıcı başvuru yasağına neden olur
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
