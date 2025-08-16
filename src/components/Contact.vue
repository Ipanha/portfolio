<script setup>
import { Mail, MapPin, Send, Phone } from "lucide-vue-next";
import { ref } from "vue";

// --- Form State ---
const name = ref("");
const email = ref("");
const message = ref("");
const isSending = ref(false);
const statusMessage = ref(""); // To show success or error messages

// --- Handle Form Submission ---
const handleSubmit = async () => {
  isSending.value = true;
  statusMessage.value = "";

  // --- IMPORTANT: Replace with your actual Bot Token and Chat ID ---
  const botToken = "8037577082:AAFAnxOOcZVQ5dyLJIopbTK_iW0R7q1cgk4";
  const chatId = "1316755847";

  if (
    botToken === "YOUR_TELEGRAM_BOT_TOKEN" ||
    chatId === "YOUR_TELEGRAM_CHAT_ID"
  ) {
    statusMessage.value =
      "Error: Please configure your Bot Token and Chat ID in the code.";
    isSending.value = false;
    return;
  }

  // Format the message to be sent to Telegram
  const formattedMessage = `
📬 *New Contact Form Submission*

*Name:* ${name.value}
*Email:* ${email.value}
*Message:*
${message.value}
  `;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formattedMessage,
        parse_mode: "Markdown", // Allows for bold, italics, etc.
      }),
    });

    const result = await response.json();

    if (result.ok) {
      statusMessage.value = "✅ Message sent successfully!";
      // Clear the form
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      throw new Error(result.description);
    }
  } catch (error) {
    console.error("Failed to send message:", error);
    statusMessage.value = `❌ Failed to send message. Please try again later.`;
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <section class="section-container">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="section-title">
        Get In <span class="accent-text">Touch</span>
      </h2>
      <p class="section-subtitle">Let's build something amazing together.</p>
    </div>

    <!-- The grid layout is already responsive, stacking on mobile -->
    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Contact Info Column -->
      <div class="animate-fade-in-up">
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <Phone class="text-accent" size="24" />
            <a
              href="tel:+855976029519"
              class="text-base font-medium hover:underline"
              >+855 97 60 29 519</a
            >
          </div>
          <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <Send class="text-accent" size="24" />
            <a
              href="https://t.me/Chet_Panha"
              target="_blank"
              class="text-base font-medium hover:underline"
              >Chet Panha</a
            >
          </div>
          <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <Mail class="text-accent" size="24" />
            <a
              href="mailto:chetpanha888@gmail.com"
              class="text-base font-medium hover:underline"
              >chetpanha888@gmail.com</a
            >
          </div>
          <div class="flex items-center gap-4 bg-secondary p-4 rounded-lg">
            <MapPin class="text-accent" size="24" />
            <h2 class="text-base font-medium">Phnom Penh, Cambodia</h2>
          </div>
        </div>
      </div>

      <!-- Form Column -->
      <div class="animate-fade-in-up" style="animation-delay: 0.2s">
        <!-- Changed form to handle submission with Vue -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <input
            v-model="name"
            type="text"
            placeholder="Your Name"
            class="w-full bg-secondary px-4 py-3 rounded-md border border-primary focus:border-accent focus:ring-accent outline-none transition-all"
            required
          />
          <input
            v-model="email"
            type="email"
            placeholder="Your Email"
            class="w-full bg-secondary px-4 py-3 rounded-md border border-primary focus:border-accent focus:ring-accent outline-none transition-all"
            required
          />
          <textarea
            v-model="message"
            rows="5"
            placeholder="Your Message"
            class="w-full bg-secondary px-4 py-3 rounded-md border border-primary focus:border-accent focus:ring-accent outline-none transition-all resize-none"
            required
          ></textarea>
          <button
            type="submit"
            :disabled="isSending"
            class="w-full bg-accent text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            <Send size="20" />
            <!-- Show different text based on sending state -->
            {{ isSending ? "Sending..." : "Send Message" }}
          </button>
          <!-- Display status message after submission -->
          <p
            v-if="statusMessage"
            class="text-center text-sm mt-4"
            :class="
              statusMessage.includes('✅') ? 'text-green-400' : 'text-red-400'
            "
          >
            {{ statusMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
