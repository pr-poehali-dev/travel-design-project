import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, MapPin, Users } from "lucide-react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.4), rgba(26, 31, 44, 0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
          Приключения
          <span className="block text-orange-400">ждут тебя</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto">
          Исследуй неизведанные места, покоряй горные вершины и создавай
          незабываемые воспоминания
        </p>

        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Направление
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Куда едем?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mountains">Горы</SelectItem>
                  <SelectItem value="sea">Море</SelectItem>
                  <SelectItem value="forest">Лес</SelectItem>
                  <SelectItem value="desert">Пустыня</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                Дата выезда
              </label>
              <Input type="date" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Icon name="Users" size={16} />
                Участники
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Сколько?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 человек</SelectItem>
                  <SelectItem value="2">2 человека</SelectItem>
                  <SelectItem value="3-5">3-5 человек</SelectItem>
                  <SelectItem value="6+">6+ человек</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold">
              Найти приключение
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
