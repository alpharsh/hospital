import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  // Placeholder data (Replace with actual API calls or state management logic)
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Mikelson Klaus ", specialty: "Cardiology" },
    { id: 2, name: "Dr. Peter Parker", specialty: "Neurology" },
  ]);

  const [patients, setPatients] = useState([
    { id: 1, name: "Alice Johnson", age: 45 },
    { id: 2, name: "Bob Brown", age: 60 },
  ]);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Kaustubh Mani",
      doctor: "Dr. Chris Evans",
      date: "2024-11-30",
    },
    {
      id: 2,
      patient: "Harsh Tripathi",
      doctor: "Dr. Tony Stark",
      date: "2024-11-30",
    },
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
    <div className="bg-gray-100">
      <div
        className="relative h-[18rem] md:h-[31rem] bg-cover bg-center rounded-3xl md:rounded-[3rem]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1632406898177-95f7acd8854f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002570] rounded-3xl md:rounded-[3rem] flex justify-center items-end">
          <div className="text-center text-white pb-8">
            <h1 className="text-4xl md:text-7xl font-bold font-Bricolage-Grotesque">
              Admin Dashboard
            </h1>
          </div>
        </div>
      </div>

      <div className="flex mt-10 w-4/5 mx-auto justify-center space-x-3 md:space-x-6 mb-8">
        <button
          className={`py-2 px-3 md:px-4 font-medium rounded-3xl font-Bricolage-Grotesque ${
            activeTab === "doctors"
              ? "bg-blue-900 text-white"
              : "bg-gray-300 text-blue-900"
          }`}
          onClick={() => handleTabChange("doctors")}
        >
          Doctors
        </button>
        <button
          className={`py-2 px-3 md:px-4 font-medium rounded-3xl font-Bricolage-Grotesque ${
            activeTab === "patients"
              ? "bg-blue-900 text-white"
              : "bg-gray-300 text-blue-900"
          }`}
          onClick={() => handleTabChange("patients")}
        >
          Patients
        </button>
        <button
          className={`py-2 px-3 md:px-4 font-medium rounded-3xl font-Bricolage-Grotesque ${
            activeTab === "appointments"
              ? "bg-blue-900 text-white"
              : "bg-gray-300 text-blue-900"
          }`}
          onClick={() => handleTabChange("appointments")}
        >
          Appointments
        </button>
      </div>
      <div className="pb-12 md:pb-20">{renderContent()}</div>
    </div>
  );
};

// CRUD Section Component
const CRUDSection = ({ title, data, setData, fields }) => {
  const [form, setForm] = useState(() =>
    fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
  );

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
    <div className="bg-white w-11/12 md:w-4/5 mx-auto lg:max-w-[1200px] p-6 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6 font-Bricolage-Grotesque">
        {title}
      </h2>
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
          className="bg-blue-900 text-white py-1 md:py-2 px-3 md:px-4 rounded-lg shadow-md font-Bricolage-Grotesque hover:bg-blue-700"
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
            <span className="flex flex-col">
              {fields.map((field) => (
                <span key={field} className="md:mr-4 font-sans">
                  <strong>{field}:</strong> {item[field]}
                </span>
              ))}
            </span>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <MdDelete className="text-2xl"/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
