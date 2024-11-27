import React, { useState } from "react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  // Placeholder data (Replace with actual API calls or state management logic)
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. John Doe", specialty: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Neurology" },
  ]);

  const [patients, setPatients] = useState([
    { id: 1, name: "Alice Johnson", age: 45 },
    { id: 2, name: "Bob Brown", age: 60 },
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, patient: "Alice Johnson", doctor: "Dr. John Doe", date: "2024-11-30" },
  ]);

  const handleTabChange = (tab) => setActiveTab(tab);

  const renderContent = () => {
    switch (activeTab) {
      case "doctors":
        return (
          <CRUDSection
            title="Manage Doctors"
            data={doctors}
            setData={setDoctors}
            fields={["name", "specialty"]}
          />
        );
      case "patients":
        return (
          <CRUDSection
            title="Manage Patients"
            data={patients}
            setData={setPatients}
            fields={["name", "age"]}
          />
        );
      case "appointments":
        return (
          <CRUDSection
            title="Manage Appointments"
            data={appointments}
            setData={setAppointments}
            fields={["patient", "doctor", "date"]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 pt-28 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Admin Dashboard
      </h1>
      <div className="flex justify-center space-x-6 mb-8">
        <button
          className={`py-2 px-4 rounded-lg ${
            activeTab === "doctors"
              ? "bg-blue-900 text-white"
              : "bg-gray-300 text-blue-900"
          }`}
          onClick={() => handleTabChange("doctors")}
        >
          Doctors
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            activeTab === "patients"
              ? "bg-blue-900 text-white"
              : "bg-gray-300 text-blue-900"
          }`}
          onClick={() => handleTabChange("patients")}
        >
          Patients
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            activeTab === "appointments"
              ? "bg-blue-900 text-white"
              : "bg-gray-300 text-blue-900"
          }`}
          onClick={() => handleTabChange("appointments")}
        >
          Appointments
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

// CRUD Section Component
const CRUDSection = ({ title, data, setData, fields }) => {
  const [form, setForm] = useState(() => fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {}));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setData([...data, { id: data.length + 1, ...form }]);
    setForm(fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {}));
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="space-y-4">
        {fields.map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={`Enter ${field}`}
            value={form[field]}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        ))}
        <button
          onClick={handleAdd}
          className="bg-blue-900 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
        >
          Add {title.split(" ")[1].slice(0, -1)}
        </button>
      </div>
      <ul className="mt-6 space-y-4">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow"
          >
            <span>
              {fields.map((field) => (
                <span key={field} className="mr-4">
                  <strong>{field}:</strong> {item[field]}
                </span>
              ))}
            </span>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
