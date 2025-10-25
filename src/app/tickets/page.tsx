"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Tickets() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"new" | "my-tickets">("new");

  const myTickets = [
    {
      id: "#001234",
      subject: "Hesabıma giriş yapamıyorum",
      status: "Açık",
      priority: "Yüksek",
      created: "2 saat önce",
      statusColor: "bg-green-600",
      priorityColor: "text-red-400"
    },
    {
      id: "#001189",
      subject: "VIP paketim aktif değil",
      status: "Yanıtlandı",
      priority: "Orta",
      created: "1 gün önce",
      statusColor: "bg-blue-600",
      priorityColor: "text-yellow-400"
    },
    {
      id: "#001056",
      subject: "Item kayboldu",
      status: "Kapalı",
      priority: "Düşük",
      created: "3 gün önce",
      statusColor: "bg-zinc-600",
      priorityColor: "text-green-400"
    },
  ];

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
              <Link href="/shop" className="text-gray-300 hover:text-amber-400 transition">Mağaza</Link>
              <Link href="/tickets" className="text-amber-400 hover:text-amber-300 transition">Destek</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Tickets Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Destek Merkezi
            </h1>
            <p className="text-xl text-gray-300">
              Size yardımcı olmak için buradayız
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab("new")}
              className={activeTab === "new"
                ? "bg-gradient-to-r from-amber-500 to-orange-600"
                : "bg-zinc-800 hover:bg-zinc-700"
              }
            >
              Yeni Talep
            </Button>
            <Button
              onClick={() => setActiveTab("my-tickets")}
              className={activeTab === "my-tickets"
                ? "bg-gradient-to-r from-amber-500 to-orange-600"
                : "bg-zinc-800 hover:bg-zinc-700"
              }
            >
              Taleplerim
            </Button>
          </div>
        </div>
      </section>

      {/* New Ticket Form */}
      {activeTab === "new" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Yeni Destek Talebi Oluştur</CardTitle>
                <CardDescription className="text-gray-400">
                  Lütfen sorununuzu detaylı bir şekilde açıklayın
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Kategori
                    </label>
                    <select className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none">
                      <option>Hesap Sorunları</option>
                      <option>Ödeme Sorunları</option>
                      <option>Teknik Destek</option>
                      <option>Oyun İçi Sorunlar</option>
                      <option>Şikayet</option>
                      <option>Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Öncelik
                    </label>
                    <select className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none">
                      <option>Düşük</option>
                      <option>Orta</option>
                      <option>Yüksek</option>
                      <option>Acil</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Konu Başlığı
                    </label>
                    <input
                      type="text"
                      placeholder="Sorununuzu özetleyin"
                      className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Açıklama
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Sorununuzu detaylı bir şekilde açıklayın..."
                      className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Ekran Görüntüsü (Opsiyonel)
                    </label>
                    <div className="border-2 border-dashed border-amber-900/50 rounded-lg p-8 text-center hover:border-amber-600/50 transition cursor-pointer">
                      <div className="text-4xl mb-2">📎</div>
                      <p className="text-gray-400">Dosya yüklemek için tıklayın</p>
                      <p className="text-sm text-gray-500 mt-1">PNG, JPG veya GIF (Maks. 5MB)</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg py-6">
                    Talep Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Help */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">❓</div>
                  <h3 className="font-bold text-amber-400 mb-2">SSS</h3>
                  <p className="text-sm text-gray-400">Sık sorulan sorular</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="font-bold text-amber-400 mb-2">Discord</h3>
                  <p className="text-sm text-gray-400">Canlı destek</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="font-bold text-amber-400 mb-2">E-posta</h3>
                  <p className="text-sm text-gray-400">destek@ducknw.net</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* My Tickets */}
      {activeTab === "my-tickets" && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-6">Taleplerim</h2>
            <div className="space-y-4">
              {myTickets.map((ticket) => (
                <Card key={ticket.id} className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-zinc-700 text-white">{ticket.id}</Badge>
                          <Badge className={ticket.statusColor}>{ticket.status}</Badge>
                          <Badge className={`bg-zinc-800 ${ticket.priorityColor}`}>{ticket.priority}</Badge>
                        </div>
                        <h3 className="text-lg font-bold text-amber-400 mb-1">{ticket.subject}</h3>
                        <p className="text-sm text-gray-500">Oluşturulma: {ticket.created}</p>
                      </div>
                      <Button variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-600/10">
                        Görüntüle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-amber-900/20 py-12 px-4 mt-12">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 DuckNW Destek. Ortalama yanıt süresi: 2-4 saat</p>
        </div>
      </footer>
    </div>
  );
}
