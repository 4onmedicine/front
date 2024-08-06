import { useState, useEffect } from "react";
import { DetailApi } from "../../apis/DetailApi";

const useGetDetail = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.log("디테일 요청 param 부제");
      return;
    }
    const fetchData = async () => {
      try {
        const res = await DetailApi.getDetail(id);
        setData(res);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { data, error, loading };
};

export default useGetDetail;
