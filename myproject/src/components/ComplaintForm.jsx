import React, { forwardRef } from "react";
import { useState } from "react";
const ComplaintForm = forwardRef((props, ref) => {
    const user=JSON.parse(localStorage.getItem("user"));
    const [preview, setPreview] = useState(null);
    console.log("Logged user:", user);

const[formData,setFormData]=useState({
    name:user?.name||"",
    email:user?.email||"",
    contact:"",
    category:"",
    address:"",
    description:""
    });
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", formData);
    alert("Complaint submitted (backend next step)");
  };

  return (
    <div ref={ref} className="w-full bg-black-100 py-16 flex justify-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Register Complaint
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            readOnly
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            readOnly
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Contact no."
            value={formData.contact}
            onChange={(e)=>
                setFormData({...formData,contact:e.target.value})
                }
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <label className="block font-medium">
            Complaint Category

          </label>

          <select
          value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">-- Select Category --</option>
            <option value="GARBAGE">Garbage / Waste</option>
            <option value="STREET_LIGHT">Street Light</option>
            <option value="WATER_LOGGING">Water Logging</option>
            <option value="ROAD_DAMAGE">Road Damage</option>
            <option value="SEWER_DRAINAGE">Sewer / Drainage</option>
            <option value="STRAY_ANIMALS">Stray Animals</option>
            <option value="MOSQUITO_FOGGING">Mosquito / Fogging</option>
          </select>

          <textarea
          value={formData.description}
          onChange={(e)=>
              setFormData({...formData,description:e.target.value})
              }
            placeholder="Description"
            className="w-full border p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input type="text"
          value={formData.address}
          onChange={(e)=>
              setFormData({...formData,address:e.target.value})
              }
            placeholder="Address"

            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <label>Upload Image (optional)</label>
<input type="file" accept="image/*" onChange={(e)=>setPreview(URL.createObjectURL(e.target.files[0]))}
    className="w-full border border-dashed p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"

/>
{preview && (
            <img
              src={preview}
              alt="Preview"
              className="h-32 mt-2 rounded border object-cover"
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
});

export default ComplaintForm;
