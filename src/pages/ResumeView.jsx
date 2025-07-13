export default function ResumeView({ resume }) {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold">{resume.name}</h2>
      <p className="text-gray-600">{resume.title}</p>
      <p className="mt-4">{resume.summary}</p>

      <h3 className="text-xl mt-6 font-semibold">Experience</h3>
      <ul className="mt-2 space-y-2">
        {resume.experience.map((job, idx) => (
          <li key={idx} className="border p-2 rounded">
            <p className="font-medium">{job.role} at {job.company}</p>
            <p className="text-sm text-gray-500">{job.years}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
