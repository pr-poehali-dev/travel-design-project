import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const destinations = [
  {
    id: 1,
    title: "Эльбрус",
    location: "Кабардино-Балкария",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "от 45 000 ₽",
    duration: "7 дней",
    difficulty: "Сложно",
    description: "Покорение высочайшей вершины России",
  },
  {
    id: 2,
    title: "Алтай",
    location: "Республика Алтай",
    image:
      "https://images.unsplash.com/photo-1464822759844-d150baec95ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "от 25 000 ₽",
    duration: "5 дней",
    difficulty: "Средне",
    description: "Треккинг по горным тропам и озерам",
  },
  {
    id: 3,
    title: "Камчатка",
    location: "Камчатский край",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "от 85 000 ₽",
    duration: "10 дней",
    difficulty: "Экстрим",
    description: "Вулканы, гейзеры и дикая природа",
  },
];

const PopularDestinations = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко":
        return "bg-green-100 text-green-800";
      case "Средне":
        return "bg-yellow-100 text-yellow-800";
      case "Сложно":
        return "bg-orange-100 text-orange-800";
      case "Экстрим":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            Популярные направления
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбери свое следующее приключение из наших самых популярных
            маршрутов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getDifficultyColor(destination.difficulty)}>
                    {destination.difficulty}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="MapPin" size={16} />
                    {destination.location}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
                  {destination.title}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Icon name="Clock" size={16} />
                      {destination.duration}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-orange-500">
                    {destination.price}
                  </div>
                </div>

                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Посмотреть все направления
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
