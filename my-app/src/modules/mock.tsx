import { TagsResult } from "./TagsApi.tsx";

export const TAGS_MOCK: TagsResult = {
  resultCount: 10,
  results: [
    {
        id: 1,
        tag_name: 'Рестораны',
        tag_image: 'nan',
        tag_status: true,
        tag_description: 'Здесь можно насладиться вкусной едой и приятной атмосферой'
    },
    {
        id: 2,
        tag_name: 'Гостиницы',
        tag_image: 'nan',
        tag_status: true,
        tag_description: 'Уютные места для комфортного отдыха'
    },
    {
        id: 3,
        tag_name: 'Развлечения',
        tag_image: 'nan',
        tag_status: true,
        tag_description: 'Места для активного времяпрепровождения'
    },
    {
        id: 4,
        tag_name: 'Спорт',
        tag_image: 'nan',
        tag_status: true,
        tag_description: 'Для любителей активного образа жизни'
    },
    {
        id: 5,
        tag_name: 'Медицина',
        tag_image: 'nan',
        tag_status: true,
        tag_description: 'Места для здоровья и ухода за собой'
    }
  ],
};
