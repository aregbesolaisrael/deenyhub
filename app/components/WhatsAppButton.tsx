"use client";

import { FaWhatsapp } from "react-icons/fa";

// ─── Configuration ────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "2348033363741";
const WHATSAPP_MESSAGE = "Hello! I'd like to order Garri.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
)}`;

// ─── Component ────────────────────────────────────────────────────────────────
export default function WhatsAppButton() {
    return (
        <a
            id="whatsapp-chat-button"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="whatsapp-fab group"
        >
            {/* Pulse ring */}
            <span className="whatsapp-pulse" aria-hidden="true" />

            {/* Icon */}
            <FaWhatsapp className="whatsapp-icon" aria-hidden="true" />

            {/* Tooltip */}
            <span className="whatsapp-tooltip" role="tooltip">
                Chat with us
            </span>
        </a>
    );
}
