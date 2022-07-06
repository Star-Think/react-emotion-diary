import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();

  const navgiate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();

  // const id = searchParams.get("id");

  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length > 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navgiate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {/* <h1>Edit</h1>
      <p>이곳은 일기 수정페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "starthink" })}>
        QS 바꾸기
      </button>
      <button onClick={() => navgiate("/home")}>Home 으로 가기</button>
      <button
        onClick={() => {
          navgiate(-1);
        }}
      >
        뒤로가기
      </button> */}
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
      <h2>Edit</h2>
    </div>
  );
};

export default Edit;
