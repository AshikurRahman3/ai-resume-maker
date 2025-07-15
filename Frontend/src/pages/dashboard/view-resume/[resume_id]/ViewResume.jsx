import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getResumeData } from "@/Services/resumeAPI";
import ResumePreview from "../../edit-resume/components/PreviewPage";
import { useDispatch } from "react-redux";
import { addResumeData } from "@/features/resume/resumeFeatures";
import { RWebShare } from "react-web-share";
import { toast } from "sonner";

function ViewResume() {
  const [resumeInfo, setResumeInfo] = React.useState({});
  const { resume_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchResumeInfo();
  }, []);
  const fetchResumeInfo = async () => {
    const response = await getResumeData(resume_id);
    // console.log(response.data);
    dispatch(addResumeData(response.data));
  };

  const HandleDownload = () => {
    window.print();
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
  <div id="noPrint">
    <div className="my-10 mx-10 md:mx-20 lg:mx-36 text-center">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-lg">
        🎉 Your AI-Powered Resume Is Ready!
      </h2>
      

      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 px-6 sm:px-44 my-10">
        <Button
          className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={HandleDownload}
        >
          Download PDF
        </Button>

       
      </div>
    </div>
  </div>

  <div
    className="bg-white rounded-3xl shadow-xl p-8 print-area transition-transform hover:scale-[1.01]"
    style={{ width: "210mm", height: "297mm" }}
  >
    <div className="print">
      <ResumePreview />
    </div>
  </div>
</div>

    </>
  );
}

export default ViewResume;
