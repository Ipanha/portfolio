export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const botToken = process.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.VITE_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return response.status(500).json({
      error: "Server configuration error: Missing Telegram credentials.",
    });
  }

  const { name, email, message } = request.body;

  if (!name || !email || !message) {
    return response
      .status(400)
      .json({ error: "Missing required form fields." });
  }

  const formattedMessage = `
📬 *New Contact Form Submission*

*Name:* ${name}
*Email:* ${email}
*Message:*
${message}
  `;

  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const telegramResponse = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formattedMessage,
        parse_mode: "Markdown",
      }),
    });

    const result = await telegramResponse.json();

    if (!result.ok) {
      // Forward the error from Telegram for debugging
      throw new Error(result.description || "Telegram API error");
    }

    // Send a success response back to the frontend
    return response.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return response.status(500).json({ error: "Failed to send message." });
  }
}
