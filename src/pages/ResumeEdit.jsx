import React, { useState } from "react";

export default function ResumeEdit({ resume, onSave }) {
  const [formData, setFormData] = useState(resume);

  // แก้ไขข้อมูล field ทั่วไป
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // แก้ไขข้อมูล experience แต่ละตัว
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData(prev => ({ ...prev, experience: newExperience }));
  };

  // เพิ่ม experience ใหม่
  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: "", role: "", years: "", description: "" }]
    }));
  };

  // ลบ experience ออกจาก list
  const removeExperience = (index) => {
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, experience: newExperience }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Resume</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows={4}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          {formData.experience.map((exp, index) => (
            <div key={index} className="border p-4 rounded mb-4 relative">
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                aria-label={`Remove experience ${index + 1}`}
              >
                &times;
              </button>

              <div className="mb-2">
                <label className="block text-sm font-medium mb-1" htmlFor={`company-${index}`}>
                  Company
                </label>
                <input
                  id={`company-${index}`}
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium mb-1" htmlFor={`role-${index}`}>
                  Role
                </label>
                <input
                  id={`role-${index}`}
                  name="role"
                  value={exp.role}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium mb-1" htmlFor={`years-${index}`}>
                  Years
                </label>
                <input
                  id={`years-${index}`}
                  name="years"
                  value={exp.years}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor={`description-${index}`}>
                  Description
                </label>
                <textarea
                  id={`description-${index}`}
                  name="description"
                  value={exp.description || ""}
                  onChange={(e) => handleExperienceChange(index, e)}
                  rows={3}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addExperience}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            + Add Experience
          </button>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}
