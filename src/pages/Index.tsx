import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Основы программирования на Python',
    description: 'Изучите основы программирования с нуля. Курс подходит для начинающих.',
    duration: '12 недель',
    level: 'Начальный',
    students: 2847,
    rating: 4.9,
    price: '29 990 ₽',
    image: '🐍'
  },
  {
    id: 2,
    title: 'Машинное обучение и ИИ',
    description: 'Глубокое погружение в алгоритмы машинного обучения и нейронные сети.',
    duration: '16 недель',
    level: 'Продвинутый',
    students: 1523,
    rating: 4.8,
    price: '49 990 ₽',
    image: '🤖'
  },
  {
    id: 3,
    title: 'Веб-разработка полного цикла',
    description: 'От создания интерфейсов до разработки серверной части приложений.',
    duration: '20 недель',
    level: 'Средний',
    students: 3142,
    rating: 4.9,
    price: '39 990 ₽',
    image: '💻'
  },
  {
    id: 4,
    title: 'Анализ данных и Data Science',
    description: 'Научитесь извлекать ценные инсайты из больших объёмов данных.',
    duration: '14 недель',
    level: 'Средний',
    students: 1891,
    rating: 4.7,
    price: '44 990 ₽',
    image: '📊'
  }
];

const instructors = [
  {
    id: 1,
    name: 'Дмитрий Петров',
    role: 'Профессор Computer Science',
    experience: '15 лет опыта',
    courses: 8,
    students: 12400,
    avatar: '/placeholder.svg',
    initials: 'ДП'
  },
  {
    id: 2,
    name: 'Елена Смирнова',
    role: 'Кандидат технических наук',
    experience: '12 лет опыта',
    courses: 6,
    students: 9800,
    avatar: '/placeholder.svg',
    initials: 'ЕС'
  },
  {
    id: 3,
    name: 'Александр Иванов',
    role: 'Senior Software Engineer',
    experience: '10 лет опыта',
    courses: 5,
    students: 7500,
    avatar: '/placeholder.svg',
    initials: 'АИ'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Мария Козлова',
    role: 'Выпускница курса Python',
    text: 'Отличная структура курса и поддержка преподавателей. За 3 месяца получила работу junior-разработчика.',
    rating: 5
  },
  {
    id: 2,
    name: 'Игорь Волков',
    role: 'Выпускник курса Data Science',
    text: 'Практические задания и реальные кейсы помогли глубоко понять материал. Рекомендую всем.',
    rating: 5
  },
  {
    id: 3,
    name: 'Анна Соколова',
    role: 'Выпускница курса Web-разработки',
    text: 'Профессиональный подход и актуальные знания. Курс полностью оправдал ожидания.',
    rating: 5
  }
];

const faqs = [
  {
    question: 'Как проходит обучение?',
    answer: 'Обучение проходит в онлайн-формате. Вы получаете доступ к видео-лекциям, практическим заданиям и тестам. Преподаватели проверяют домашние задания и дают обратную связь в течение 48 часов.'
  },
  {
    question: 'Какие требования к студентам?',
    answer: 'Требования зависят от курса. Для начинающих курсов достаточно базовых компьютерных навыков. Для продвинутых курсов необходимы знания основ программирования.'
  },
  {
    question: 'Выдаётся ли сертификат?',
    answer: 'Да, после успешного завершения курса и сдачи итогового проекта вы получаете сертификат установленного образца, который можно добавить в портфолио.'
  },
  {
    question: 'Есть ли возврат средств?',
    answer: 'Да, мы предоставляем гарантию возврата средств в течение первых 14 дней обучения, если курс вам не подошёл.'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">Академия</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-accent transition-colors">Главная</button>
            <button onClick={() => scrollToSection('courses')} className="text-sm font-medium hover:text-accent transition-colors">Курсы</button>
            <button onClick={() => scrollToSection('instructors')} className="text-sm font-medium hover:text-accent transition-colors">Преподаватели</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">О платформе</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium hover:text-accent transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-accent transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-accent transition-colors">Контакты</button>
          </nav>
          <Button className="hidden md:inline-flex">Войти</Button>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32">
          <div className="container">
            <div className="flex flex-col items-center text-center space-y-8">
              <Badge variant="secondary" className="px-4 py-1">🎓 Образование мирового уровня</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
                Получите профессию вашей мечты с ведущими преподавателями
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Онлайн-курсы от практикующих экспертов. Учитесь в удобном темпе, получайте сертификаты и начинайте карьеру в IT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('courses')} className="text-lg">
                  Выбрать курс
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-12 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">12 000+</div>
                  <div className="text-sm text-muted-foreground">Выпускников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Курсов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-muted-foreground">Средний рейтинг</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные курсы</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Выберите курс из нашего каталога и начните обучение уже сегодня
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-6xl mb-4">{course.image}</div>
                    <Badge className="w-fit mb-2">{course.level}</Badge>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={16} className="text-muted-foreground" />
                        <span>{course.students.toLocaleString()} студентов</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={16} className="text-accent fill-accent" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <Button className="w-full">Записаться на курс</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="instructors" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преподаватели</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Учитесь у лучших специалистов с многолетним опытом
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {instructors.map((instructor) => (
                <Card key={instructor.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-32 w-32">
                        <AvatarImage src={instructor.avatar} />
                        <AvatarFallback className="text-2xl">{instructor.initials}</AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-2xl">{instructor.name}</CardTitle>
                    <CardDescription className="text-base">{instructor.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Briefcase" size={16} className="text-muted-foreground" />
                        <span className="text-sm">{instructor.experience}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="BookOpen" size={16} className="text-muted-foreground" />
                        <span className="text-sm">{instructor.courses} курсов</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Users" size={16} className="text-muted-foreground" />
                        <span className="text-sm">{instructor.students.toLocaleString()} студентов</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашей платформе</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Академия — это современная образовательная платформа, созданная для тех, кто стремится получить качественное IT-образование и построить успешную карьеру.
                  </p>
                  <p>
                    Мы объединяем лучших преподавателей-практиков, актуальные программы обучения и удобный формат онлайн-занятий. За годы работы мы помогли более 12 000 студентам освоить новые профессии.
                  </p>
                  <p>
                    Наша миссия — сделать качественное IT-образование доступным каждому, независимо от места проживания и уровня подготовки.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-3">
                    <Icon name="Award" size={24} className="text-accent flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Сертификаты</div>
                      <div className="text-sm text-muted-foreground">Официальное подтверждение</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MessageSquare" size={24} className="text-accent flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Поддержка</div>
                      <div className="text-sm text-muted-foreground">24/7 помощь студентам</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="TrendingUp" size={24} className="text-accent flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Карьерный рост</div>
                      <div className="text-sm text-muted-foreground">Помощь в трудоустройстве</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" size={24} className="text-accent flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Комьюнити</div>
                      <div className="text-sm text-muted-foreground">Сеть выпускников</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Target" size={24} className="text-accent" />
                      Наши ценности
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">Качество образования</h4>
                      <p className="text-sm text-muted-foreground">Только проверенные методики и актуальные знания</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Практический подход</h4>
                      <p className="text-sm text-muted-foreground">Реальные проекты и задачи из индустрии</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Индивидуальный подход</h4>
                      <p className="text-sm text-muted-foreground">Персональная обратная связь от преподавателей</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы выпускников</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Узнайте, что говорят наши студенты о своём опыте обучения
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <CardDescription className="text-base">{testimonial.text}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted/30">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-muted-foreground text-lg">
                Ответы на популярные вопросы о процессе обучения
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Свяжитесь с нами, и мы поможем выбрать подходящий курс
              </p>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Icon name="Mail" size={32} className="mx-auto mb-3 text-accent" />
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">info@academy.ru</div>
                    </div>
                    <div className="text-center">
                      <Icon name="Phone" size={32} className="mx-auto mb-3 text-accent" />
                      <div className="font-semibold">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                    <div className="text-center">
                      <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-accent" />
                      <div className="font-semibold">Telegram</div>
                      <div className="text-sm text-muted-foreground">@academy_support</div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button size="lg" className="w-full md:w-auto">
                      Связаться с нами
                      <Icon name="Send" size={18} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} className="text-primary" />
                <span className="text-xl font-bold">Академия</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Образовательная платформа для тех, кто стремится к знаниям
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-accent transition-colors">Каталог курсов</button></li>
                <li><button onClick={() => scrollToSection('instructors')} className="hover:text-accent transition-colors">Преподаватели</button></li>
                <li><a href="#" className="hover:text-accent transition-colors">Программы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Расписание</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">О платформе</button></li>
                <li><a href="#" className="hover:text-accent transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Блог</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-accent transition-colors">FAQ</button></li>
                <li><a href="#" className="hover:text-accent transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Академия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
