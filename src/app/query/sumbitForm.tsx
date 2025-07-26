// lib/submit-form.ts or wherever you keep API functions
export type FormValues = {
  name: string;
  phoneNumber: string;
  email: string;
};

export async function submitForm(data: FormValues) {
  const response = await fetch("https://monkey-1-jhiq.onrender.com/api/forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return await response.json();
}
