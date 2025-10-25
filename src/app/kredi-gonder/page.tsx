"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function KrediGonderPage() {
  const [activeTab, setActiveTab] = useState<"send" | "history">("send");

  const transactions = [
    {
      id: "#TX12345",
      type: "Gönderildi",
      player: "xProPlayer",
      amount: 500,
      date: "2 saat önce",
      typeColor: "text-red-400"
    },
    {
      id: "#TX12344",
      type: "Alındı",
      player: "DuckMaster",
      amount: 250,
      date: "5 saat önce",
      typeColor: "text-green-400"
    },
    {
      id: "#TX12343",
      type: "Gönderildi",
      player: "MinecraftKing",
      amount: 150,
      date: "1 gün önce",
      typeColor: "text-red-400"
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Kredi Gönder
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Arkadaşlarınıza kredi gönderin
            </p>
            <Card className="inline-block bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="text-sm text-gray-400 mb-1">Mevcut Bakiyeniz</p>
                <p className="text-3xl font-bold text-amber-400">1,250 Kredi</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab("send")}
              className={activeTab === "send"
                ? "bg-gradient-to-r from-amber-500 to-orange-600"
                : "bg-zinc-800 hover:bg-zinc-700"
              }
            >
              Kredi Gönder
            </Button>
            <Button
              onClick={() => setActiveTab("history")}
              className={activeTab === "history"
                ? "bg-gradient-to-r from-amber-500 to-orange-600"
                : "bg-zinc-800 hover:bg-zinc-700"
              }
            >
              İşlem Geçmişi
            </Button>
          </div>

          {activeTab === "send" && (
            <div>
              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-400">Kredi Transfer Formu</CardTitle>
                  <CardDescription className="text-gray-400">
                    Lütfen alıcı bilgilerini doğru girdiğinizden emin olun
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Alıcının Oyuncu Adı
                      </label>
                      <input
                        type="text"
                        placeholder="Oyuncu adını girin"
                        className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Not: Oyuncu adları büyük/küçük harf duyarlıdır
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Gönderilecek Kredi Miktarı
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="0"
                          min="1"
                          max="1250"
                          className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400 font-semibold">
                          Kredi
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Button type="button" variant="outline" size="sm" className="border-amber-600 text-amber-400 hover:bg-amber-600/10">
                          100
                        </Button>
                        <Button type="button" variant="outline" size="sm" className="border-amber-600 text-amber-400 hover:bg-amber-600/10">
                          250
                        </Button>
                        <Button type="button" variant="outline" size="sm" className="border-amber-600 text-amber-400 hover:bg-amber-600/10">
                          500
                        </Button>
                        <Button type="button" variant="outline" size="sm" className="border-amber-600 text-amber-400 hover:bg-amber-600/10">
                          Tümü
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Not (Opsiyonel)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="İsteğe bağlı mesaj ekleyin..."
                        className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                      />
                    </div>

                    <div className="p-4 bg-amber-900/20 rounded-lg border border-amber-600/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Gönderilecek Miktar:</span>
                        <span className="text-white font-semibold">0 Kredi</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">İşlem Ücreti:</span>
                        <span className="text-white font-semibold">0 Kredi</span>
                      </div>
                      <div className="border-t border-amber-600/30 my-2"></div>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-400 font-semibold">Toplam:</span>
                        <span className="text-amber-400 font-bold text-lg">0 Kredi</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg py-6">
                      Kredi Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="bg-amber-900/20 border-amber-600/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-amber-400 mb-4">Önemli Bilgiler</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      Minimum transfer miktarı: 10 Kredi
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      İşlem ücreti alınmaz
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      Transferler anında gerçekleşir
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      Gönderilen krediler geri alınamaz
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      Kendine kredi gönderemezsin
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "history" && (
            <div>
              <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-400">İşlem Geçmişi</CardTitle>
                  <CardDescription className="text-gray-400">
                    Son 30 günün kredi transfer işlemleri
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="p-4 bg-zinc-800/50 rounded-lg border border-amber-900/30 hover:border-amber-600/50 transition"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className="bg-zinc-700 text-white">{transaction.id}</Badge>
                              <Badge className={`bg-zinc-800 ${transaction.typeColor}`}>
                                {transaction.type}
                              </Badge>
                            </div>
                            <p className="text-white font-semibold mb-1">
                              {transaction.type === "Gönderildi" ? "Gönderilen: " : "Gönderen: "}
                              <span className="text-amber-400">{transaction.player}</span>
                            </p>
                            <p className="text-sm text-gray-500">{transaction.date}</p>
                          </div>
                          <div className="text-right">
                            <p className={`text-2xl font-bold ${transaction.typeColor}`}>
                              {transaction.type === "Gönderildi" ? "-" : "+"}{transaction.amount}
                            </p>
                            <p className="text-sm text-gray-400">Kredi</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
