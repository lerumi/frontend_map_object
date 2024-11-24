
export interface Tag {
   id: number
   tag_name: string
   tag_description: string
   tag_image: string
   tag_status: boolean
}

export interface TagsResult {
    resultCount: number
    results: Tag[]
}

export const getTags = async (name = ''): Promise<TagsResult> =>{
const url = name ? `http://192.168.35.183:3001/api/tags/?search_tag=${name}` : `http://localhost:3001/api/tags`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return {
            resultCount: data ? data.length : 0,
            results: data || [],
        };
    } catch (error) {
        console.error("Error fetching tags:", error);
        return { resultCount: 0, results: [] };
    }

}
export const getTagById = async (id: number | string): Promise<TagsResult> =>{
    const url = `http://192.168.35.183:3001/api/tag/${id}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return {
            resultCount: data ? data.length : 0,
            results: data || [],
        };
    } catch (error) {
        console.error("Error fetching tags:", error);
        return { resultCount: 0, results: [] };
    }
};