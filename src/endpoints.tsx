const BASE_URL = "https://hacker-news.firebaseio.com/v0"

export const endpoints = {
    topStories: `${BASE_URL}/topstories.json`,
    storyPoints: (id: number) => `${BASE_URL}/item/${id}.json`,
    user: (id: string) => `${BASE_URL}/user/${id}.json`,
}