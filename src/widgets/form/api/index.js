import emailjs from "@emailjs/browser";

export async function sendEmail(params) {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      params,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
}
