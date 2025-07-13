import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ResumeView from "./pages/ResumeView";
import ResumeEdit from "./pages/ResumeEdit";
import initialResume from "./data/resume";

export default function App() {
  // สร้าง state สำหรับเก็บ resume
  const [resume, setResume] = useState(initialResume);

  // ฟังก์ชันเก็บข้อมูลใหม่หลังแก้ไข
  const handleSave = (updatedResume) => {
    setResume(updatedResume);
    alert("Saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* เมนูนำทาง */}
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">My Resume</h1>
        <div className="space-x-4">
          <Link to="/" className="text-blue-500 hover:underline">View</Link>
          <Link to="/edit" className="text-blue-500 hover:underline">Edit</Link>
        </div>
      </nav>

      {/* เนื้อหาหลัก */}
      <main className="p-4">
        <Routes>
          <Route path="/" element={<ResumeView resume={resume} />} />
          <Route path="/edit" element={<ResumeEdit resume={resume} onSave={handleSave} />} />
        </Routes>
      </main>
    </div>
  );
}
