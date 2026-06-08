import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const genres = [
  {
    icon: "Flame",
    title: "Trap",
    description:
      "Тяжёлые 808-басы, хай-хэты и мрачная атмосфера. Trap зародился на Юге США и захватил весь мир. Travis Scott, Playboi Carti, 21 Savage — главные имена жанра.",
  },
  {
    icon: "Crown",
    title: "Хип-хоп классика",
    description:
      "Фундамент рэп-культуры. Сэмплы, битбокс и острые тексты. Eminem, 50 Cent, Kanye West — те, кто сделал хип-хоп мировым явлением.",
  },
  {
    icon: "Zap",
    title: "Cloud rap",
    description:
      "Мечтательные биты, размытая эстетика и меланхоличные тексты. Lil Uzi Vert, XXXTentacion — пионеры жанра, изменившие звучание нового поколения.",
  },
  {
    icon: "Globe",
    title: "Русский рэп",
    description:
      "От уличного андерграунда до стадионов. Янix, Платина, Bushido Zho, Скally Milano — русскоязычный рэп завоевал миллионы слушателей.",
  },
  {
    icon: "Music",
    title: "Hyperpop / DIY",
    description:
      "Экспериментальный звук нового поколения. Nettspend, 2hollis, OG Buda, Ken Carson — молодые артисты, ломающие все жанровые границы.",
  },
  {
    icon: "Star",
    title: "Alternative rap",
    description:
      "Tyler, the Creator, Kendrick Lamar — рэп как высокое искусство. Концептуальные альбомы, сложные нарративы и неповторимая эстетика.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Жанры и направления
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Вселенная <span className="text-primary">рэп-культуры</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От классического хип-хопа до современного hyperpop — здесь собраны все ключевые жанры и их главные представители.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genres.map((genre, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={genre.icon} fallback="Music" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{genre.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{genre.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
