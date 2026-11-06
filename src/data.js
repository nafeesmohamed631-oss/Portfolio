export const LINKS = { email: "", github: "", linkedin: "", leetcode: "" };
export const PHONE = "+91 94862 32879";
export const PHONE_RAW = "919486232879";

export const SECTIONS = ["about", "education", "experience", "projects", "skills", "achievements", "contact"];

export const PROJECTS = [
  { title: "SmartRent – Rental Management System", stack: ["React", "Vite", "Express", "MongoDB", "JWT"],
    points: ["MERN-based portal for renting books, cameras and laptops for flexible 1–7 day periods.",
      "JWT authentication, product search and filtering, rental requests, demo UPI payment and an admin dashboard.",
      "EmailJS notifications for rental status updates, with rental, product and user data stored in MongoDB."] },
  { title: "Voice-Based Loan Application", stack: ["React", "FastAPI", "SQLite"],
    points: ["Voice assistant that helps rural and low-literacy users complete loan applications by speaking.",
      "Speech-to-text, text-to-speech, field extraction, and field-by-field confirmation with voice correction.",
      "Multilingual interaction with an offline fallback to keep submission simple and accessible."] }
];
