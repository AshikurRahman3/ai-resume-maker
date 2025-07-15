import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllResumeData } from "@/Services/resumeAPI";
import AddResume from "./components/AddResume";
import ResumeCard from "./components/ResumeCard";

function Dashboard() {
  const user = useSelector((state) => state.editUser.userData);
  const [resumeList, setResumeList] = React.useState([]);

  const fetchAllResumeData = async () => {
    try {
      const resumes = await getAllResumeData();
      console.log(
        `Printing from DashBoard List of Resumes got from Backend`,
        resumes.data
      );
      setResumeList(resumes.data);
    } catch (error) {
      console.log("Error from dashboard", error.message);
    }
  };

  useEffect(() => {
    fetchAllResumeData();
  }, [user]);

  return (
    <div className="p-10 md:px-20 lg:px-32">
  <h2 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-md">
    My Resumes
  </h2>
  <p className="py-3 text-gray-500 font-medium">
    Build smart, eye-catching resumes tailored for your next career move.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    <AddResume />
    {resumeList.length > 0 &&
      resumeList.map((resume, index) => (
        <ResumeCard
          key={resume._id}
          resume={resume}
          refreshData={fetchAllResumeData}
        />
      ))}
  </div>
</div>

  );
}

export default Dashboard;
