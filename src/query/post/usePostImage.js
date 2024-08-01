import { useEffect, useState } from 'react';

const ImageApi = {
  postImage: async (url) => {
    const reqBody = {
      image: url,
    };
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/send-image`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      }
    );
    if (response.status != 200) {
      throw new Error(`Error Posting Image! status: ${response.status}`);
    }
    return response.json();
  },
};

const usePostImage = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!url) {
      console.log('이미지 url 미입력');
      return;
    }
    const fetchData = async () => {
      try {
        const res = await ImageApi.postImage(url);
        setData(res);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default usePostImage;
