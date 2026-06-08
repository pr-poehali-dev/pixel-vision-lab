import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const rappers = [
  {
    name: "Drake",
    country: "🇨🇦 Канада",
    genre: "Hip-Hop / R&B",
    era: "2000-е — наши дни",
    bio: "Самый стримингуемый артист в истории. Бывший актёр из Торонто, ставший королём современного хип-хопа. Основатель лейбла OVO Sound.",
    albums: ["Thank Me Later", "Take Care", "Nothing Was the Same", "Views", "Certified Lover Boy", "For All The Dogs"],
    color: "from-yellow-500/20",
    emoji: "👑",
  },
  {
    name: "Kendrick Lamar",
    country: "🇺🇸 США",
    genre: "Conscious Rap",
    era: "2000-е — наши дни",
    bio: "Пулитцеровская премия, 5 Grammy подряд. Артист из Комптона, переосмысливший рэп как поэзию и политику. Победитель beef'а с Drake.",
    albums: ["good kid, m.A.A.d city", "To Pimp a Butterfly", "DAMN.", "Mr. Morale & The Big Steppers"],
    color: "from-blue-500/20",
    emoji: "🏆",
  },
  {
    name: "Eminem",
    country: "🇺🇸 США",
    genre: "Hip-Hop",
    era: "1990-е — наши дни",
    bio: "Белый рэпер из Детройта, ставший одним из самых продаваемых музыкантов всех времён. Мастер многосложных рифм и провокационных текстов.",
    albums: ["The Slim Shady LP", "The Marshall Mathers LP", "The Eminem Show", "Recovery", "The Death of Slim Shady"],
    color: "from-gray-500/20",
    emoji: "💀",
  },
  {
    name: "Travis Scott",
    country: "🇺🇸 США",
    genre: "Trap / Psychedelic",
    era: "2010-е — наши дни",
    bio: "Создатель «астромира» — уникальной психоделической trap-вселенной. Его концерты стали легендой, а Astroworld — эпохальным альбомом.",
    albums: ["Rodeo", "Birds in the Trap Sing McKnight", "Astroworld", "Utopia"],
    color: "from-orange-500/20",
    emoji: "🚀",
  },
  {
    name: "Kanye West",
    country: "🇺🇸 США",
    genre: "Hip-Hop / Gospel",
    era: "2000-е — наши дни",
    bio: "Гений и провокатор. Изменил звучание хип-хопа несколько раз — от soul samples до industrial и gospel. Самый противоречивый артист поколения.",
    albums: ["The College Dropout", "Late Registration", "Graduation", "My Beautiful Dark Twisted Fantasy", "Donda"],
    color: "from-red-500/20",
    emoji: "🎹",
  },
  {
    name: "Tyler, the Creator",
    country: "🇺🇸 США",
    genre: "Alternative Rap",
    era: "2010-е — наши дни",
    bio: "Сооснователь коллектива Odd Future. Эволюционировал от эпатажного подростка до одного из главных творческих умов поколения. Grammy за IGOR.",
    albums: ["Goblin", "Wolf", "Cherry Bomb", "Flower Boy", "IGOR", "Call Me If You Get Lost"],
    color: "from-green-500/20",
    emoji: "🌸",
  },
  {
    name: "XXXTentacion",
    country: "🇺🇸 США",
    genre: "Emo Rap / Trap",
    era: "2010-е",
    bio: "Один из пионеров эмо-рэпа. Флоридский артист с трагической судьбой, чья музыка об одиночестве и боли нашла миллионы фанатов по всему миру.",
    albums: ["17", "?", "Skins", "Bad Vibes Forever"],
    color: "from-purple-500/20",
    emoji: "🖤",
  },
  {
    name: "Playboi Carti",
    country: "🇺🇸 США",
    genre: "Trap / Experimental",
    era: "2010-е — наши дни",
    bio: "Культовый артист Atlants с минималистичными текстами и максималистичными битами. Whole Lotta Red и Die Lit — библия современного trap-андерграунда.",
    albums: ["Playboi Carti", "Die Lit", "Whole Lotta Red"],
    color: "from-red-900/20",
    emoji: "🩸",
  },
  {
    name: "Lil Uzi Vert",
    country: "🇺🇸 США",
    genre: "Emo Rap / Trap",
    era: "2010-е — наши дни",
    bio: "Филадельфийский рэпер, вживил в лоб розовый бриллиант за $24 млн. Eternal Atake и Luv Is Rage 2 — гимны поколения SoundCloud-рэпа.",
    albums: ["Luv Is Rage", "Luv Is Rage 2", "Eternal Atake", "Pink Tape"],
    color: "from-pink-500/20",
    emoji: "💎",
  },
  {
    name: "21 Savage",
    country: "🇬🇧🇺🇸 Великобритания / США",
    genre: "Trap",
    era: "2010-е — наши дни",
    bio: "Выходец из Лондона, выросший в Атланте. Сдержанная подача и холодные тексты о жизни на улице. Iero — один из лучших trap-альбомов десятилетия.",
    albums: ["Savage Mode", "Without Warning", "I Am > I Was", "Savage Mode II"],
    color: "from-slate-500/20",
    emoji: "🗡️",
  },
  {
    name: "50 Cent",
    country: "🇺🇸 США",
    genre: "Gangsta Rap",
    era: "2000-е — наши дни",
    bio: "Выживший после 9 пуль и выпустивший Get Rich or Die Tryin — одну из лучших дебютных пластинок в истории. Икона 2000-х, бизнесмен и продюсер.",
    albums: ["Get Rich or Die Tryin'", "The Massacre", "Curtis", "Before I Self Destruct"],
    color: "from-amber-500/20",
    emoji: "💰",
  },
  {
    name: "Ken Carson",
    country: "🇺🇸 США",
    genre: "Hyperpop / Trap",
    era: "2020-е — наши дни",
    bio: "Участник коллектива Opium во главе с Playboi Carti. Сочетает агрессивные биты с меланхоличными текстами. Один из главных голосов нового поколения.",
    albums: ["X", "A Great Chaos"],
    color: "from-violet-500/20",
    emoji: "⚡",
  },
  {
    name: "Destroy Lonely",
    country: "🇺🇸 США",
    genre: "Hyperpop / Trap",
    era: "2020-е — наши дни",
    bio: "Артист лейбла Opium, сын рэпера Solé. Дрим-попные мелодии поверх жёстких трэп-битов — уникальный звук, покоривший Gen Z.",
    albums: ["NO STYLIST", "If Looks Could Kill"],
    color: "from-cyan-500/20",
    emoji: "🌀",
  },
  {
    name: "Young Thug",
    country: "🇺🇸 США",
    genre: "Trap",
    era: "2010-е — наши дни",
    bio: "Революционер трэп-мелодики. Его фристайл и необычная вокальная подача вдохновили целое поколение рэперов. Основатель лейбла YSL Records.",
    albums: ["Barter 6", "Beautiful Thugger Girls", "So Much Fun", "Punk"],
    color: "from-lime-500/20",
    emoji: "🦋",
  },
  {
    name: "Yanix",
    country: "🇷🇺 Россия",
    genre: "Русский рэп",
    era: "2010-е — наши дни",
    bio: "Один из пионеров современного русского рэпа. Автор культовых треков об уличной жизни, дружбе и Сибири. Голос целого поколения российских слушателей.",
    albums: ["Дорогой", "Нарисуй", "Лайтер"],
    color: "from-blue-600/20",
    emoji: "❄️",
  },
  {
    name: "Платина",
    country: "🇷🇺 Россия",
    genre: "Русский рэп / Trap",
    era: "2010-е — наши дни",
    bio: "Московский рэпер с европейским звуком и русской душой. Известен коллаборациями с лучшими продюсерами СНГ и уникальным мрачным стилем.",
    albums: ["Платина", "Холодно"],
    color: "from-zinc-500/20",
    emoji: "🔱",
  },
  {
    name: "Bushido Zho",
    country: "🇷🇺 Россия",
    genre: "Русский рэп",
    era: "2010-е — наши дни",
    bio: "Уличный поэт из России с резким слогом и острой социальной критикой. Его тексты — срез жизни русскоязычной молодёжи без прикрас.",
    albums: ["Катана", "Последний самурай"],
    color: "from-red-800/20",
    emoji: "⚔️",
  },
  {
    name: "Scally Milano",
    country: "🇷🇺 Россия",
    genre: "Русский рэп / Drill",
    era: "2020-е — наши дни",
    bio: "Молодой артист с дрилловым звуком и влиянием западной культуры. Один из ярчайших представителей нового поколения русского рэпа.",
    albums: ["Milano"],
    color: "from-indigo-500/20",
    emoji: "🎯",
  },
  {
    name: "Kai Angel",
    country: "🇷🇺 Россия",
    genre: "Русский рэп / Hyperpop",
    era: "2020-е — наши дни",
    bio: "Андрогинный артист, разрушающий гендерные стереотипы в русской музыке. Смешивает hyperpop, трэп и электронику в уникальный нежный саунд.",
    albums: ["boy_in_a_dream", "ANGEL"],
    color: "from-rose-400/20",
    emoji: "👼",
  },
  {
    name: "9mice",
    country: "🇷🇺 Россия",
    genre: "Indie Pop / Рэп",
    era: "2020-е — наши дни",
    bio: "Питерская артистка, сочетающая лирику, нежность и чувственность. Её тексты — дневник поколения, выросшего в интернете.",
    albums: ["Розовый туман", "Мышиная возня"],
    color: "from-fuchsia-400/20",
    emoji: "🐭",
  },
  {
    name: "Fakemink",
    country: "🇷🇺 Россия",
    genre: "Русский рэп",
    era: "2020-е — наши дни",
    bio: "Андерграундный артист с культовым статусом среди знатоков. Ценится за честность текстов, сырой звук и отказ от коммерческих компромиссов.",
    albums: ["Норка"],
    color: "from-teal-500/20",
    emoji: "🦦",
  },
  {
    name: "MAYOT",
    country: "🇷🇺 Россия",
    genre: "Русский рэп / Trap",
    era: "2020-е — наши дни",
    bio: "Молодой казанский рэпер, покоривший русский TikTok и стриминги. Мелодичный трэп с узнаваемым голосом и прямыми текстами о молодости.",
    albums: ["MAYOT"],
    color: "from-yellow-600/20",
    emoji: "🌙",
  },
  {
    name: "Heronwater",
    country: "🇷🇺 Россия",
    genre: "Русский рэп / Lo-fi",
    era: "2020-е — наши дни",
    bio: "Атмосферный артист с lo-fi эстетикой и меланхоличными текстами. Музыка для ночных прогулок и осенних дождей.",
    albums: ["Цапля"],
    color: "from-sky-600/20",
    emoji: "🦢",
  },
  {
    name: "prettifun",
    country: "🇷🇺 Россия",
    genre: "Русский рэп / Hyperpop",
    era: "2020-е — наши дни",
    bio: "Экспериментальная артистка, смешивающая поп, hyperpop и рэп. Яркий визуальный образ и непредсказуемые релизы держат аудиторию в постоянном предвкушении.",
    albums: ["prettifun"],
    color: "from-pink-400/20",
    emoji: "✨",
  },
  {
    name: "Nine Vicious",
    country: "🇷🇺 Россия",
    genre: "Русский рэп / Drill",
    era: "2020-е — наши дни",
    bio: "Агрессивный дрилловый артист с холодными текстами и атмосферными битами. Представитель жёсткого андерграунда русского рэп-сцены.",
    albums: ["Девять"],
    color: "from-neutral-600/20",
    emoji: "🔪",
  },
  {
    name: "OsamaSom",
    country: "🇷🇺 Россия",
    genre: "Русский рэп",
    era: "2020-е — наши дни",
    bio: "Нишевый артист с верной аудиторией. Тексты об улице, деньгах и самоидентичности в стиле, впитавшем лучшее из американского трэпа.",
    albums: ["Som"],
    color: "from-orange-700/20",
    emoji: "🌊",
  },
  {
    name: "Nettspend",
    country: "🇺🇸 США",
    genre: "Hyperpop / Trap",
    era: "2020-е — наши дни",
    bio: "Один из самых быстро растущих молодых артистов американской сцены. Дерзкий гиперпоп-звук с трэп-корнями и виральными хитами.",
    albums: ["ROTTING IN HEAVEN"],
    color: "from-emerald-500/20",
    emoji: "💸",
  },
  {
    name: "2hollis",
    country: "🇺🇸 США",
    genre: "Hyperpop / DIY",
    era: "2020-е — наши дни",
    bio: "Андерграундный DIY-артист с культовым статусом. Сырой звук, честные тексты и полная независимость от лейблов — символ нового поколения.",
    albums: ["COWBOY"],
    color: "from-stone-500/20",
    emoji: "🤠",
  },
  {
    name: "OG Buda",
    country: "🇷🇺 Россия",
    genre: "Русский рэп / Trap",
    era: "2020-е — наши дни",
    bio: "Продюсер и рэпер в одном лице. Создатель уникального саунда для целого поколения русских артистов. Биты OG Buda узнаёшь с первой секунды.",
    albums: ["BUDA"],
    color: "from-amber-700/20",
    emoji: "🔮",
  },
  {
    name: "Егор Крид",
    country: "🇷🇺 Россия",
    genre: "Поп-рэп",
    era: "2010-е — наши дни",
    bio: "Самый популярный русскоязычный поп-рэпер. Миллионы подписчиков, хиты на каждой вечеринке и узнаваемый образ сделали его иконой русского шоубиза.",
    albums: ["Крид", "Холостяк", "#selfie"],
    color: "from-blue-400/20",
    emoji: "💙",
  },
]

const ITEMS_PER_PAGE = 9

export function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [selectedRapper, setSelectedRapper] = useState<typeof rappers[0] | null>(null)

  const visible = rappers.slice(0, visibleCount)

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Каталог артистов</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {rappers.length} рэперов — от Eminem и Kendrick до Kai Angel и 9mice. Выбери любого и узнай всё о его творчестве.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((rapper, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br ${rapper.color} to-card`}
              onClick={() => setSelectedRapper(selectedRapper?.name === rapper.name ? null : rapper)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{rapper.emoji}</span>
                  <Badge variant="secondary" className="text-xs">{rapper.genre}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{rapper.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{rapper.country} · {rapper.era}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{rapper.bio}</p>

                {selectedRapper?.name === rapper.name && (
                  <div className="mt-4 pt-4 border-t border-border/50 animate-fade-in-up">
                    <p className="text-xs font-semibold text-primary mb-2 flex items-center gap-1">
                      <Icon name="Disc3" size={12} /> Дискография
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {rapper.albums.map((album, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {album}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-1 text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name={selectedRapper?.name === rapper.name ? "ChevronUp" : "ChevronDown"} size={12} />
                  {selectedRapper?.name === rapper.name ? "Скрыть" : "Дискография"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleCount < rappers.length && (
          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary"
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
            >
              Показать ещё ({rappers.length - visibleCount} артистов)
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
