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

  // The frontend no longer knows about the secret tokens.
  // It just sends the form data to our own secure backend endpoint.
  const apiEndpoint = "/api/sendMessage";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We only send the public form data, not the secrets.
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      statusMessage.value = "✅ Message sent successfully!";
      // Clear the form
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      // Use the error message from our backend
      throw new Error(result.error || "Something went wrong");
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
    <div class="text-center mb-12 md-mb-16">
      <h2 class="section-title">
        Get In <span class="accent-text">Touch</span>
      </h2>
      <p class="section-subtitle">Let's build something amazing together.</p>
    </div>

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
            {{ isSending ? "Sending..." : "Send Message" }}
          </button>
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
