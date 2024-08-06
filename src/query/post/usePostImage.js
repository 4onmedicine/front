import { useEffect, useState } from "react";
import { ImageApi } from "../../apis/ImageApi";

const usePostImage = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!url) {
      console.log("이미지 url 미입력");
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
