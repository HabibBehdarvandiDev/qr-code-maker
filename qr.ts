/* For start type tsc qr.ts && node qr.js */
import * as QRCode from "qrcode";
import { createInterface } from "readline/promises";
import * as fs from "fs";
import { stdin as input, stdout as output } from "process";

const rl = createInterface({ input, output });

async function main() {
    console.log("🔁 QR Code Generator Started (Press Ctrl + C to stop)\n");

    while (true) {
        const fileName = await rl.question(
            "📝 Enter file name (without extension): "
        );
        const url = await rl.question("🔗 Enter the URL or text to encode: ");
        const format = await rl.question("🖼️ Enter format (svg or png): ");

        const safeName = fileName.trim().replace(/\s+/g, "_");
        const filePath = `./${safeName}.${format === "svg" ? "svg" : "png"}`;

        try {
            if (format === "svg") {
                const svg = await QRCode.toString(url, { type: "svg" });
                fs.writeFileSync(filePath, svg);
                console.log(`✅ QR code saved as SVG → ${filePath}\n`);
            } else {
                await QRCode.toFile(filePath, url); // ✅ this now works
                console.log(`✅ QR code saved as PNG → ${filePath}\n`);
            }
        } catch (err) {
            console.error("❌ Error generating QR code:", err);
        }
    }
}

main().catch(console.error);
