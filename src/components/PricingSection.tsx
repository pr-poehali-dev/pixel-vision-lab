import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const charts = [
  {
    name: "🔥 Всех времён",
    description: "Абсолютные легенды",
    items: [
      "Eminem — The Marshall Mathers LP",
      "Kendrick Lamar — To Pimp a Butterfly",
      "Kanye West — My Beautiful Dark Twisted Fantasy",
      "Drake — Take Care",
      "50 Cent — Get Rich or Die Tryin'",
    ],
    highlighted: false,
  },
  {
    name: "⚡ Прямо сейчас",
    description: "Горячие релизы 2024–2025",
    items: [
      "Kendrick Lamar — GNX",
      "Travis Scott — Utopia",
      "Ken Carson — A Great Chaos",
      "Playboi Carti — MUSIC",
      "MAYOT — новый альбом",
    ],
    highlighted: true,
  },
  {
    name: "🇷🇺 Русский рэп",
    description: "Лучшее из СНГ",
    items: [
      "Платина — Холодно",
      "Kai Angel — ANGEL",
      "Yanix — Нарисуй",
      "9mice — Розовый туман",
      "Bushido Zho — Катана",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Чарты RapVault
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Лучшие <span className="text-primary">альбомы</span> в истории
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Редакция RapVault выбрала ключевые релизы — от классики до свежих хитов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {charts.map((chart, index) => (
            <Card
              key={index}
              className={`relative group ${
                chart.highlighted
                  ? "border-primary shadow-xl scale-105 bg-gradient-to-b from-background to-primary/5"
                  : "hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {chart.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Актуально
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-1">{chart.name}</CardTitle>
                <Badge variant="secondary" className="mx-auto w-fit">{chart.description}</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {chart.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 group/item">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Список пополняется с каждым <span className="text-primary font-semibold">новым релизом</span> — следите за обновлениями
          </p>
        </div>
      </div>
    </section>
  )
}
