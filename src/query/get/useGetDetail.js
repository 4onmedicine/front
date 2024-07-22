import { useState, useEffect } from "react";

const DetailApi = {
  getDetail: async (id) => {
    const response = await fetch(`http://localhost:8080/medicine/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
};

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
