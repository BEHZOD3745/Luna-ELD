export interface ContactFormPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactForm(
  data: ContactFormPayload
) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Unable to send message"
    );
  }

  return result;
}