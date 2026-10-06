import type {
    VercelRequest,
    VercelResponse,
} from "@vercel/node";

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
        });
    }

    const {
        name,
        company,
        email,
        phone,
        message,
    } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            message: "Required fields are missing",
        });
    }

    const botToken =
        process.env.TELEGRAM_BOT_TOKEN;

    const chatId =
        process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        return res.status(500).json({
            message: "Telegram is not configured",
        });
    }

    const telegramMessage = `
🚛 New Luna ELD Lead

👤 Name:
${name}

🏢 Company:
${company || "Not provided"}

📧 Email:
${email}

📞 Phone:
${phone || "Not provided"}

💬 Message:
${message}
  `.trim();

    try {
        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                }),
            }
        );

        if (!telegramResponse.ok) {
            throw new Error(
                "Telegram API request failed"
            );
        }

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Unable to send message",
        });
    }
}