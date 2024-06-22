import React from "react";

const LandingPage = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">
        Reputable - Coming Soon
      </h1>

      <p className="text-xl mb-4">
        Welcome to <strong>Reputable</strong>—the simplest way to build a
        professional portfolio online. Tailored for content creators,{" "}
        <strong>Reputable</strong> allows you to create your personal or
        business portfolio with ease, integrating everything from services to
        product showcases, without any need for technical know-how.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Features</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <strong>Instant Portfolio Creation</strong>: Jump into our editor
          without signing up and see how easy it is to create.
        </li>
        <li>
          <strong>Custom Components</strong>: Includes products, services,
          meeting setups, email subscriptions, and social media content
          integration from platforms like Instagram, TikTok, and YouTube.
        </li>
        <li>
          <strong>AI-Driven Templates</strong>: Use AI to generate beautiful
          portfolios tailored to your needs.
        </li>
        <li>
          <strong>Flexible Payment Options</strong>: Accept payments via
          cryptocurrency or Stripe.
        </li>
        <li>
          <strong>Advanced Analytics</strong>: Track how your portfolio performs
          with our built-in analytics.
        </li>
        <li>
          <strong>No-Fee Premium Option</strong>: Upgrade to remove fees, remove
          branding, use a custom domain, and access premium templates.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-6 mb-4">Getting Involved</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <strong>Try our MVP</strong>: We're looking for the first 100 users to
          try our platform and provide feedback.
        </li>
        <li>
          <strong>Follow our Public Roadmap</strong>: Stay updated with what's
          coming next and share your suggestions.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-6 mb-4">Development Plan</h2>
      <p className="mb-4">
        Our journey starts with creating a landing page to gather email
        addresses, followed by:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>Developing an MVP</li>
        <li>Engaging with users via social media</li>
        <li>Adding new features based on your feedback</li>
      </ul>
      <h2 className="text-2xl font-bold mt-6 mb-4">Contact</h2>
      <p className="mb-4">
        Created by Meduard Krasniqi - for any inquiries, reach out via
        contact@codebymedu.com.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Acknowledgments</h2>
      <p className="mb-4">
        Inspired by services like tally.so, aiming to bring simplicity and
        efficiency to portfolio creation.
      </p>
    </div>
  );
};

export default LandingPage;
