const BASE_URL = import.meta.env.VITE_API_URL;

interface MusicPost {
  url: string;
}

export async function getMusicPosts() {
  const res = await fetch(`${BASE_URL}/music-posts`);
  if (!res.ok) throw new Error("Failed to fetch music posts");
  return res.json();
}

export async function createMusicPost(musicPost: MusicPost) {
  const res = await fetch(`${BASE_URL}/music-posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(musicPost),
  });
  if (!res.ok) throw new Error("Failed to create music post");
  return res.json();
}

export async function getMusicPostId(id: string) {
  const res = await fetch(`${BASE_URL}/music-posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch music post");
  return res.json();
}
