import { useEffect, useState } from 'react';

const MedicineCodeApi = {
  postMedicineCode: async (id) => {
    const reqBody = {
      data: id,
    };
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/receive-data`,
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
      throw new Error(
        `Error Posting Medicine Code! status: ${response.status}`
      );
    }
    return response.json();
  },
};

const usePostMedicineCode = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) {
      console.log('약 보험코드 미입력');
      return;
    }
    const fetchData = async () => {
      try {
        const res = await MedicineCodeApi.postMedicineCode(id);
        setData(res);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return { data, loading };
};

export default usePostMedicineCode;
