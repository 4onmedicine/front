import { useEffect, useState } from "react";
import { MedicineCodeApi } from "../../apis/MedicineCodeApi";

const usePostMedicineCode = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) {
      console.log("약 보험코드 미입력");
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
