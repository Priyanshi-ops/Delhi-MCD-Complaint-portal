import React, { forwardRef } from "react";
import { useState } from "react";
const ComplaintForm = forwardRef((props, ref) => {
    const [preview, setPreview] = useState(null);

  return (
    <div ref={ref} className="w-full bg-black-100 py-16 flex justify-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Register Complaint
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Contact no."
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <label className="block font-medium">
            Complaint Category
          </label>

          <select
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
            placeholder="Description"
            className="w-full border p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input type="text"
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
