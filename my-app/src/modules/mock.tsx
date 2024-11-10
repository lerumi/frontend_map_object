import { TagsResult } from "./TagsApi.tsx";

export const TAGS_MOCK: TagsResult = {
  resultCount: 10,
  results: [
    {
        id: 1,
        tag_name: 'Рестораны',
        tag_image: 'http://127.0.0.1:9000/mapobject/1.jpg',
        tag_description: 'Здесь можно насладиться вкусной едой и приятной атмосферой'
    },
    {
        id: 2,
        tag_name: 'Гостиницы',
        tag_image: 'http://127.0.0.1:9000/mapobject/2.jpg',
        tag_description: 'Уютные места для комфортного отдыха'
    },
    {
        id: 3,
        tag_name: 'Развлечения',
        tag_image: 'http://127.0.0.1:9000/mapobject/3.jpg',
        tag_description: 'Места для активного времяпрепровождения'
    },
    {
        id: 4,
        tag_name: 'Спорт',
        tag_image: 'http://127.0.0.1:9000/mapobject/4.jpg',
        tag_description: 'Для любителей активного образа жизни'
    },
    {
        id: 5,
        tag_name: 'Медицина',
        tag_image: 'http://127.0.0.1:9000/mapobject/5.jpg',
        tag_description: 'Места для здоровья и ухода за собой'
    },
    {
        id: 6,
        tag_name: 'Красота',
        tag_image: 'http://127.0.0.1:9000/mapobject/6.jpg',
        tag_description: 'Салоны красоты и ухода за внешностью'
    },
    {
        id: 7,
        tag_name: 'Авто-сервисы',
        tag_image: 'http://127.0.0.1:9000/mapobject/7.jpg',
        tag_description: 'Для ремонта и обслуживания автомобилей'
    },
    {
        id: 8,
        tag_name: 'Образование',
        tag_image: 'http://127.0.0.1:9000/mapobject/8.jpg',
        tag_description: 'Учебные заведения и курсы обучения'
    },
    {
        id: 9,
        tag_name: 'Финансы',
        tag_image: 'http://127.0.0.1:9000/mapobject/9.jpg',
        tag_description: 'Сфера финансовых услуг'
    },
    {
        id: 10,
        tag_name: 'Туризм',
        tag_image: 'http://127.0.0.1:9000/mapobject/10.jpg',
        tag_description: 'Путешествия и туристические услуги'
    }
  ],
};
