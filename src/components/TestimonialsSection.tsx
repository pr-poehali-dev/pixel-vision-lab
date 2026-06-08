import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const quotes = [
  {
    quote: "I'm not afraid to take a stand. Everybody come take my hand.",
    name: "Eminem",
    role: "Not Afraid, 2010",
  },
  {
    quote: "Sit down, be humble.",
    name: "Kendrick Lamar",
    role: "HUMBLE., 2017",
  },
  {
    quote: "Started from the bottom, now we're here.",
    name: "Drake",
    role: "Started From the Bottom, 2013",
  },
  {
    quote: "No one man should have all that power.",
    name: "Kanye West",
    role: "Power, 2010",
  },
  {
    quote: "I got a lot to say about this world, all of this pain.",
    name: "XXXTentacion",
    role: "Sad!, 2018",
  },
  {
    quote: "I told you ima winner, I told you ima winner.",
    name: "Tyler, the Creator",
    role: "EARFQUAKE, 2019",
  },
  {
    quote: "New Flock, I pull up in that foreign, foreign.",
    name: "Playboi Carti",
    role: "Magnolia, 2017",
  },
  {
    quote: "Я не сплю — я просто закрыл глаза.",
    name: "Kai Angel",
    role: "boy_in_a_dream, 2021",
  },
  {
    quote: "Мы из тех, кто не сдаётся никогда.",
    name: "Yanix",
    role: "Дорогой, 2015",
  },
  {
    quote: "Coldest winter ever, I want you to remember.",
    name: "Travis Scott",
    role: "SICKO MODE, 2018",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Строчки, которые живут
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Цитаты из треков артистов, ставшие культурными феноменами и частью жизни миллионов людей по всему миру.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...quotes, ...quotes].map((quote, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[420px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[80px] italic">
                    "{quote.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-lg text-primary">{quote.name}</p>
                    <p className="text-muted-foreground text-sm">{quote.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
