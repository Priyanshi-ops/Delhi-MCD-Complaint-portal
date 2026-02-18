import React, { forwardRef, useState } from "react";
import axios from "axios";

const CATEGORIES = [
  { value: "GARBAGE", label: "Garbage / Waste", icon: "🗑️" },
  { value: "STREET_LIGHT", label: "Street Light", icon: "💡" },
  { value: "WATER_LOGGING", label: "Water Logging", icon: "🌊" },
  { value: "ROAD_DAMAGE", label: "Road Damage", icon: "🚧" },
  { value: "SEWER_DRAINAGE", label: "Sewer / Drainage", icon: "🔧" },
  { value: "STRAY_ANIMALS", label: "Stray Animals", icon: "🐕" },
  { value: "MOSQUITO_FOGGING", label: "Mosquito / Fogging", icon: "🦟" },
];

const MAX_DESC = 300;

const ComplaintForm = forwardRef((props, ref) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [step, setStep] = useState(1);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', msg }
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    contact: "",
    category: "",
    address: "",
    description: "",
  });

  // ── Validation ──────────────────────────────────────────────────────────────
  const validateStep1 = () => {
    const errs = {};
    if (!formData.contact.trim()) errs.contact = "Contact number is required.";
    else if (!/^\d{10}$/.test(formData.contact.trim()))
      errs.contact = "Enter a valid 10-digit number.";
    if (!formData.category) errs.category = "Please select a category.";
    return errs;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.description.trim())
      errs.description = "Description is required.";
    if (!formData.address.trim()) errs.address = "Address is required.";
    return errs;
  };

  // ── Handlers ─────────────────────────────────────────────────────────────────
  const handleNext = () => {
    const errs = validateStep1();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStep(2);
  };

  const handleBack = () => { setErrors({}); setStep(1); };

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateStep2();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8081/api/complaints",
        formData
      );
      console.log("Complaint Submitted:", response.data);
      showToast("success", "✅ Complaint submitted successfully!");
      setFormData({ name: user?.name || "", email: user?.email || "", contact: "", category: "", address: "", description: "" });
      setPreview(null);
      setStep(1);
    } catch (err) {
      showToast("error", "❌ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full border p-3 rounded-lg transition focus:outline-none focus:ring-2 ${errors[field]
      ? "border-red-400 focus:ring-red-400 bg-red-50"
      : "border-gray-300 focus:ring-slate-500"
    }`;

  return (
    <div ref={ref} className="w-full py-20 flex justify-center relative overflow-hidden" style={{ background: 'linear-gradient(270deg, #0f172a, #1e3a5f, #164e63, #0f172a)', backgroundSize: '400% 400%', animation: 'gradientShift 10s ease infinite' }}>

      {/* ── Floating Blobs ── */}
      <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.25), transparent 70%)', animation: 'blobFloat 8s ease-in-out infinite', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.25), transparent 70%)', animation: 'blobFloat 11s ease-in-out infinite reverse', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '50%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,184,166,0.18), transparent 70%)', animation: 'blobFloat 14s ease-in-out infinite', filter: 'blur(50px)', pointerEvents: 'none', transform: 'translateX(-50%)' }} />

      {/* ── Toast ── */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-xl text-white text-sm font-medium transition-all duration-500 ${toast.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          style={{ animation: "fadeInDown 0.4s ease" }}
        >
          {toast.msg}
        </div>
      )}

      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl">

        {/* ── Header ── */}
        <h2 className="text-2xl font-bold mb-2 text-center text-slate-800">
          Register a Complaint
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Help us serve you better — fill in the details below.
        </p>

        {/* ── Progress Bar ── */}
        <div className="flex items-center mb-8">
          {[1, 2].map((s) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-gray-200 text-gray-500"
                    }`}
                >
                  {step > s ? "✓" : s}
                </div>
                <span className="text-xs mt-1 text-gray-500">
                  {s === 1 ? "Details" : "Description"}
                </span>
              </div>
              {s < 2 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded transition-all duration-500 ${step > 1 ? "bg-slate-900" : "bg-gray-200"
                    }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* ══ STEP 1 ══ */}
          {step === 1 && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              {/* Name (read-only) */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  readOnly
                  className="w-full border border-gray-200 bg-gray-100 p-3 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Email (read-only) */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="w-full border border-gray-200 bg-gray-100 p-3 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Contact */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.contact}
                  onChange={(e) => {
                    setFormData({ ...formData, contact: e.target.value });
                    if (errors.contact) setErrors({ ...errors, contact: null });
                  }}
                  className={inputClass("contact")}
                />
                {errors.contact && (
                  <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
                )}
              </div>

              {/* Category Cards */}
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Complaint Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, category: cat.value });
                        if (errors.category) setErrors({ ...errors, category: null });
                      }}
                      className={`flex items-center gap-2 p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 text-left ${formData.category === cat.value
                        ? "border-slate-900 bg-slate-900 text-white shadow-md scale-[1.02]"
                        : "border-gray-200 hover:border-slate-400 hover:bg-gray-50"
                        }`}
                    >
                      <span className="text-xl">{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                )}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full mt-6 bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-200 shadow-md"
              >
                Next →
              </button>
            </div>
          )}

          {/* ══ STEP 2 ══ */}
          {step === 2 && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Description
                  <span className={`float-right font-normal ${formData.description.length > MAX_DESC ? "text-red-500" : "text-gray-400"}`}>
                    {formData.description.length} / {MAX_DESC}
                  </span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => {
                    if (e.target.value.length <= MAX_DESC)
                      setFormData({ ...formData, description: e.target.value });
                    if (errors.description) setErrors({ ...errors, description: null });
                  }}
                  placeholder="Describe your complaint in detail..."
                  className={`${inputClass("description")} h-32 resize-none`}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                )}
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                    if (errors.address) setErrors({ ...errors, address: null });
                  }}
                  placeholder="Enter the complaint location address"
                  className={inputClass("address")}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Upload Image <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl p-4 cursor-pointer hover:border-slate-500 hover:bg-gray-50 transition">
                  <span className="text-2xl mb-1">📷</span>
                  <span className="text-sm text-gray-500">Click to upload an image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files[0])
                        setPreview(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                </label>
                {preview && (
                  <div className="mt-3 relative">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-40 rounded-xl border object-cover shadow"
                    />
                    <button
                      type="button"
                      onClick={() => setPreview(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700 transition"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 border-2 border-slate-900 text-slate-900 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-200"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Complaint"
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blobFloat {
          0%   { transform: translateY(0px) scale(1); }
          50%  { transform: translateY(-30px) scale(1.08); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
});

export default ComplaintForm;
