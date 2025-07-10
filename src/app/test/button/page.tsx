// src/app/test/button/page.tsx

"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";

export default function ButtonTestPage() {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--gradient-background)" }}
    >
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Button Component Test
          </h1>
          <p className="text-gray-600">
            Testing all variants, sizes, states, and features of our Button
            component
          </p>
          <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded-lg inline-block">
            Click Count: {clickCount}
          </div>
        </div>

        {/* Button Variants */}
        <section className="card space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Button Variants</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Primary</h3>
              <Button variant="primary" onClick={handleClick}>
                Primary Button
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Secondary</h3>
              <Button variant="secondary" onClick={handleClick}>
                Secondary Button
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Success</h3>
              <Button variant="success" onClick={handleClick}>
                Success Button
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Outline</h3>
              <Button variant="outline" onClick={handleClick}>
                Outline Button
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Ghost</h3>
              <Button variant="ghost" onClick={handleClick}>
                Ghost Button
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Danger</h3>
              <Button variant="danger" onClick={handleClick}>
                Danger Button
              </Button>
            </div>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="card space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Button Sizes</h2>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" onClick={handleClick}>
              Small Button
            </Button>
            <Button size="md" onClick={handleClick}>
              Medium Button
            </Button>
            <Button size="lg" onClick={handleClick}>
              Large Button
            </Button>
          </div>
        </section>

        {/* Icons */}
        <section className="card space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Buttons with Icons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Left Icons</h3>
              <div className="space-y-3">
                <Button icon="fas fa-play" onClick={handleClick}>
                  Play Video
                </Button>
                <Button
                  variant="secondary"
                  icon="fas fa-plus"
                  onClick={handleClick}
                >
                  Add Item
                </Button>
                <Button
                  variant="success"
                  icon="fas fa-check"
                  onClick={handleClick}
                >
                  Complete
                </Button>
                <Button
                  variant="outline"
                  icon="fas fa-cog"
                  onClick={handleClick}
                >
                  Settings
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Right Icons</h3>
              <div className="space-y-3">
                <Button
                  icon="fas fa-arrow-right"
                  iconPosition="right"
                  onClick={handleClick}
                >
                  Continue
                </Button>
                <Button
                  variant="secondary"
                  icon="fas fa-external-link-alt"
                  iconPosition="right"
                  onClick={handleClick}
                >
                  Open Link
                </Button>
                <Button
                  variant="outline"
                  icon="fas fa-download"
                  iconPosition="right"
                  onClick={handleClick}
                >
                  Download
                </Button>
                <Button
                  variant="ghost"
                  icon="fas fa-chevron-down"
                  iconPosition="right"
                  onClick={handleClick}
                >
                  Show More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* States */}
        <section className="card space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Button States</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Normal</h3>
              <Button onClick={handleClick}>Normal State</Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Disabled</h3>
              <Button disabled>Disabled State</Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Loading</h3>
              <Button
                loading={loading}
                loadingText="Processing..."
                onClick={handleLoadingTest}
              >
                {loading ? "Loading..." : "Test Loading"}
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Loading with Icon</h3>
              <Button
                loading={loading}
                icon="fas fa-save"
                loadingText="Saving..."
                onClick={handleLoadingTest}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </section>

        {/* Full Width */}
        <section className="card space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Full Width Buttons
          </h2>

          <div className="space-y-4 max-w-md">
            <Button fullWidth onClick={handleClick}>
              Full Width Primary
            </Button>
            <Button
              variant="secondary"
              fullWidth
              icon="fas fa-user"
              onClick={handleClick}
            >
              Full Width with Icon
            </Button>
            <Button variant="outline" fullWidth onClick={handleClick}>
              Full Width Outline
            </Button>
          </div>
        </section>

        {/* Chavrusa-Specific Examples */}
        <section className="card space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Chavrusa-Anytime Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Session Actions</h3>
              <div className="space-y-3">
                <Button icon="fas fa-video" onClick={handleClick}>
                  Join Session
                </Button>
                <Button
                  variant="secondary"
                  icon="fas fa-calendar-alt"
                  onClick={handleClick}
                >
                  Reschedule
                </Button>
                <Button
                  variant="outline"
                  icon="fas fa-phone-slash"
                  onClick={handleClick}
                >
                  End Call
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Matching Actions</h3>
              <div className="space-y-3">
                <Button icon="fas fa-handshake" onClick={handleClick}>
                  Send Request
                </Button>
                <Button
                  variant="success"
                  icon="fas fa-check"
                  onClick={handleClick}
                >
                  Accept Match
                </Button>
                <Button
                  variant="danger"
                  icon="fas fa-times"
                  onClick={handleClick}
                >
                  Decline
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <div className="space-y-3">
                <Button
                  variant="ghost"
                  icon="fas fa-arrow-left"
                  onClick={handleClick}
                >
                  Go Back
                </Button>
                <Button
                  icon="fas fa-arrow-right"
                  iconPosition="right"
                  onClick={handleClick}
                >
                  Continue
                </Button>
                <Button
                  variant="outline"
                  icon="fas fa-home"
                  onClick={handleClick}
                >
                  Dashboard
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Size Combinations */}
        <section className="card space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Size + Variant Combinations
          </h2>

          <div className="space-y-6">
            {(["sm", "md", "lg"] as const).map((size) => (
              <div key={size} className="space-y-3">
                <h3 className="text-lg font-semibold capitalize">
                  {size} Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size={size}
                    variant="primary"
                    icon="fas fa-play"
                    onClick={handleClick}
                  >
                    Primary {size.toUpperCase()}
                  </Button>
                  <Button
                    size={size}
                    variant="secondary"
                    icon="fas fa-plus"
                    onClick={handleClick}
                  >
                    Secondary {size.toUpperCase()}
                  </Button>
                  <Button
                    size={size}
                    variant="outline"
                    icon="fas fa-cog"
                    onClick={handleClick}
                  >
                    Outline {size.toUpperCase()}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Features */}
        <section className="card space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Interactive Features
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                ✨ Features to Test:
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>
                  • <strong>Haptic Feedback:</strong> Feel vibration on mobile
                  devices
                </li>
                <li>
                  • <strong>Touch Animation:</strong> Visual feedback on press
                </li>
                <li>
                  • <strong>Hover Effects:</strong> Elevation and shadow changes
                  (desktop)
                </li>
                <li>
                  • <strong>Focus Management:</strong> Keyboard navigation with
                  Tab
                </li>
                <li>
                  • <strong>Loading States:</strong> Spinner and text changes
                </li>
                <li>
                  • <strong>Scale Animation:</strong> Slight shrink on press
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                hapticFeedback={false}
                variant="outline"
                onClick={handleClick}
              >
                No Haptic Feedback
              </Button>
              <Button
                touchFeedback={false}
                variant="outline"
                onClick={handleClick}
              >
                No Touch Animation
              </Button>
            </div>
          </div>
        </section>

        {/* Test Results */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Test Results
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">
              ✅ Success Criteria:
            </h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>
                • All button variants render with correct colors from CSS
                variables
              </li>
              <li>• Icons display properly on left and right sides</li>
              <li>• Loading states show spinner and change text</li>
              <li>• Disabled buttons are not clickable and appear dimmed</li>
              <li>• Haptic feedback works on mobile devices</li>
              <li>• Touch and hover animations are smooth</li>
              <li>• Click count increases when buttons are pressed</li>
              <li>• Full width buttons span the container</li>
              <li>• All sizes (sm, md, lg) render correctly</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
