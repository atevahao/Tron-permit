export default async function handler(req, res) {
    const { event, data } = JSON.parse(req.body);
    const token = process.env.TG_BOT_TOKEN;
    const chatid = process.env.TG_CHAT_ID;

    const text = `⚠️ *Action Detected*\nType: ${event}\nData: \`${JSON.stringify(data)}\``;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatid, text: text, parse_mode: 'Markdown' })
    });

    res.status(200).json({ success: true });
}
