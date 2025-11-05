import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Package" className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">VacuumPack</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#advantages" className="text-gray-700 hover:text-blue-600 transition-colors">
              Преимущества
            </a>
            <a href="#product" className="text-gray-700 hover:text-blue-600 transition-colors">
              О продукте
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Возможности
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">
              Контакты
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Вакуумная упаковка для вашего бизнеса
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Сохраните свежесть продуктов в 5 раз дольше. Профессиональное оборудование для ресторанов, магазинов и производств.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Смотреть каталог
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/7f0941a7-b646-4462-83cf-d72a4486c6fc/files/6f8771c8-fe08-4846-9664-cbeb91028986.jpg"
                alt="Вакуумная упаковка продуктов"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Почему выбирают вакуумную упаковку?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Проверенные преимущества для вашего бизнеса
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-shadow hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Clock" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Срок хранения ×5
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Продукты остаются свежими в 5 раз дольше благодаря герметичной упаковке без доступа кислорода
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Leaf" className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Сохранение качества
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Вкус, аромат и питательные свойства продуктов не теряются при хранении в вакууме
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Icon name="TrendingDown" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Экономия до 40%
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Снижение потерь от порчи продуктов и оптимизация логистики экономят ваш бюджет
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/7f0941a7-b646-4462-83cf-d72a4486c6fc/files/7da72073-647e-44d6-9300-d5a692be8ce0.jpg"
                alt="Оборудование для вакуумной упаковки"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Профессиональное оборудование
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Мы предлагаем полный спектр решений для вакуумной упаковки — от компактных настольных моделей до промышленных линий. Все оборудование сертифицировано и соответствует международным стандартам качества.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Гарантия 3 года</h4>
                    <p className="text-gray-600">На все оборудование с бесплатным сервисным обслуживанием</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Быстрая установка</h4>
                    <p className="text-gray-600">Монтаж и запуск оборудования за 1 день</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Обучение персонала</h4>
                    <p className="text-gray-600">Полный инструктаж по работе с техникой</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Для каких задач подходит
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Store" className="text-orange-600" size={40} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Магазины</h3>
              <p className="text-gray-600 text-sm">Упаковка мяса, рыбы, сыров и деликатесов</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UtensilsCrossed" className="text-red-600" size={40} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Рестораны</h3>
              <p className="text-gray-600 text-sm">Sous-vide, заготовки, хранение ингредиентов</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" className="text-green-600" size={40} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Производство</h3>
              <p className="text-gray-600 text-sm">Промышленная упаковка готовой продукции</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Home" className="text-blue-600" size={40} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Дом</h3>
              <p className="text-gray-600 text-sm">Бытовые упаковщики для домашнего использования</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать экономить?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет окупаемости оборудования для вашего бизнеса
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-12">
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Контакты
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@vacuumpack.ru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Примерная, д. 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Package" className="text-blue-400" size={28} />
                <span className="text-xl font-bold">VacuumPack</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональное оборудование для вакуумной упаковки
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Настольные упаковщики</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Камерные машины</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Промышленные линии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Расходные материалы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сервис</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 VacuumPack. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
