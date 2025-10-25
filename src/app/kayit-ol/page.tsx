"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function KayitOlPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-amber-950/20 to-zinc-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-lg flex items-center justify-center font-bold text-3xl shadow-lg shadow-amber-500/50">
              🦆
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">DuckNW</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Kayıt Ol</h1>
          <p className="text-gray-400">Yeni hesap oluşturun</p>
        </div>

        <Card className="bg-zinc-900/50 border-amber-900/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  placeholder="MinecraftNick"
                  className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minecraft kullanıcı adınızı girin
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  placeholder="ornek@email.com"
                  className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Şifre
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  En az 8 karakter, büyük harf ve rakam içermeli
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Şifre Tekrar
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-zinc-800 border border-amber-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 outline-none"
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-amber-900/20 rounded-lg border border-amber-600/30">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  <Link href="/kurallar" className="text-amber-400 hover:text-amber-300">
                    Kullanım şartlarını
                  </Link>{" "}
                  ve{" "}
                  <Link href="/kurallar" className="text-amber-400 hover:text-amber-300">
                    sunucu kurallarını
                  </Link>{" "}
                  okudum ve kabul ediyorum
                </label>
              </div>

              <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg py-6">
                Kayıt Ol
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-900/50"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-zinc-900/50 text-gray-400">veya</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full border-amber-900/50 hover:bg-amber-600/10 hover:border-amber-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
                  </svg>
                  Google ile Kayıt Ol
                </Button>

                <Button variant="outline" className="w-full border-amber-900/50 hover:bg-amber-600/10 hover:border-amber-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Discord ile Kayıt Ol
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Zaten hesabınız var mı?{" "}
            <Link href="/giris-yap" className="text-amber-400 hover:text-amber-300 font-semibold">
              Giriş Yap
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-amber-400 hover:text-amber-300 text-sm">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
