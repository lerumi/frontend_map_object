
export interface Tag {
   id: string
   tag_name: string
   tag_description: string
   tag_image: string
   tag_status: string
}

export interface TagsResult {
    resultCount: number
    results: Tag[]
}
export const getTags = async (name = ''): Promise<TagsResult> =>{
const url = name ? `/api/tags/?search_tag=${name}` : `/api/tags`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return {
            resultCount: data.tags ? data.tags.length : 0,
            results: data.tags || [],
        };
    } catch (error) {
        console.error("Error fetching tags:", error);
        return { resultCount: 0, results: [] };
    }

}
export const getTagById = async (id: number | string): Promise<TagsResult> =>{
    const url = `/api/tag/${id}`;
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