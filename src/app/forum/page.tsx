"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Forum() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Duyurular",
      description: "Sunucu duyuruları ve haberler",
      topics: 24,
      posts: 186,
      icon: "📢",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      name: "Genel Sohbet",
      description: "Serbest konuşma alanı",
      topics: 342,
      posts: 2847,
      icon: "💬",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      name: "Öneri & Şikayet",
      description: "Fikirlerinizi bizimle paylaşın",
      topics: 158,
      posts: 624,
      icon: "💡",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      name: "Oyuncu Başvuruları",
      description: "Yetkili, Youtuber ve diğer başvurular",
      topics: 89,
      posts: 267,
      icon: "✍️",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 5,
      name: "Oyun İçi Yardım",
      description: "Oyunla ilgili sorularınızı sorun",
      topics: 245,
      posts: 1523,
      icon: "❓",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 6,
      name: "Etkinlikler",
      description: "Sunucu etkinlikleri ve yarışmalar",
      topics: 67,
      posts: 453,
      icon: "🎉",
      color: "from-yellow-500 to-amber-600"
    },
  ];

  const recentThreads = [
    {
      id: 1,
      title: "Yeni Sezon Başladı! Sizleri Bekleyoruz!",
      author: "DuckOwner",
      category: "Duyurular",
      replies: 45,
      views: 1234,
      lastPost: "2 saat önce"
    },
    {
      id: 2,
      title: "Custom Boss eklenebilir mi?",
      author: "xPlayer",
      category: "Öneri & Şikayet",
      replies: 12,
      views: 234,
      lastPost: "4 saat önce"
    },
    {
      id: 3,
      title: "Klan sistemi nasıl kullanılır?",
      author: "YeniOyuncu",
      category: "Oyun İçi Yardım",
      replies: 8,
      views: 156,
      lastPost: "6 saat önce"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-amber-950/20 to-zinc-950">
      {/* Navigation - Same as homepage */}
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
              <Link href="/forum" className="text-amber-400 hover:text-amber-300 transition">Forum</Link>
              <Link href="/shop" className="text-gray-300 hover:text-amber-400 transition">Mağaza</Link>
              <Link href="/tickets" className="text-gray-300 hover:text-amber-400 transition">Destek</Link>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-amber-500/50 hidden md:block">
                Discord
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-amber-400 p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Forum Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Forum
            </h1>
            <p className="text-xl text-gray-300">
              Toplulukla bağlantıda kalın, fikirlerinizi paylaşın
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
              Yeni Konu Aç
            </Button>
            <Button variant="outline" className="border-2 border-amber-600 text-amber-400 hover:bg-amber-600/10">
              Son Mesajlar
            </Button>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Kategoriler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition-all cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/50">
                      {category.topics} konu
                    </Badge>
                  </div>
                  <CardTitle className="text-amber-400">{category.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>💬 {category.posts} mesaj</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Threads */}
      <section className="py-12 px-4 bg-zinc-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Son Konular</h2>
          <div className="space-y-4">
            {recentThreads.map((thread) => (
              <Card key={thread.id} className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm hover:border-amber-600/50 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amber-400 mb-2">{thread.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          👤 {thread.author}
                        </span>
                        <span className="flex items-center gap-1">
                          📁 {thread.category}
                        </span>
                        <span className="flex items-center gap-1">
                          💬 {thread.replies} yanıt
                        </span>
                        <span className="flex items-center gap-1">
                          👁️ {thread.views} görüntülenme
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      🕐 {thread.lastPost}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-amber-900/20 py-12 px-4 mt-12">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 DuckNW Forum. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
