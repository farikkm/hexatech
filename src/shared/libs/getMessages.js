export async function getMessages(locale) {
  try {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    return messages;
  } catch (error) {
    console.error("Failed with loading translations next-intl", error);
    return {};
  }
}
