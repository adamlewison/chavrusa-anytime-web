import React from "react";

export default function CustomStylesTestPage() {
  return (
    <div
      style={{ background: "var(--gradient-background)" }}
      className="min-h-screen-mobile"
    >
      {/* Header with Custom Variables */}
      <header
        style={{
          background: "var(--gradient-card)",
          padding: "var(--space-5) var(--space-6)",
          borderBottom: "1px solid var(--color-gray-200)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo using CSS variables */}
            <div className="flex items-baseline">
              <span
                style={{
                  fontSize: "var(--text-3xl)",
                  fontWeight: "var(--font-extrabold)",
                  color: "var(--color-primary-orange)",
                  letterSpacing: "-0.5px",
                }}
              >
                Chavrusa
              </span>
              <span
                style={{
                  fontSize: "var(--text-3xl)",
                  fontWeight: "var(--font-semibold)",
                  color: "var(--color-primary-blue)",
                  letterSpacing: "-0.3px",
                }}
              >
                Anytime
              </span>
            </div>

            {/* Custom Badge */}
            <div
              style={{
                background: "var(--gradient-primary)",
                color: "var(--color-white)",
                padding: "var(--space-2) var(--space-4)",
                borderRadius: "var(--radius-full)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-bold)",
              }}
            >
              Custom Variables Test
            </div>
          </div>
        </div>
      </header>

      <main
        style={{ padding: "var(--space-4)" }}
        className="container space-y-8"
      >
        <div className="bg-red-200 hover:scale-105 transition-transform duration-300">
          Test hover
        </div>

        {/* CSS Variables Color Palette */}
        <section
          style={{
            background: "var(--gradient-card)",
            borderRadius: "var(--radius-3xl)",
            padding: "var(--space-6)",
            boxShadow: "var(--shadow-card)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--font-bold)",
              color: "var(--color-gray-800)",
              marginBottom: "var(--space-6)",
            }}
          >
            CSS Custom Properties - Color System
          </h2>

          {/* Brand Colors */}
          <div style={{ marginBottom: "var(--space-6)" }}>
            <h3
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: "var(--font-semibold)",
                marginBottom: "var(--space-4)",
              }}
            >
              Brand Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    background: "var(--color-primary-orange)",
                    borderRadius: "var(--radius-2xl)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-medium)",
                  }}
                >
                  Primary Orange
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-gray-600)",
                  }}
                >
                  --color-primary-orange
                </p>
              </div>

              <div className="text-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    background: "var(--color-primary-blue)",
                    borderRadius: "var(--radius-2xl)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-medium)",
                  }}
                >
                  Primary Blue
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-gray-600)",
                  }}
                >
                  --color-primary-blue
                </p>
              </div>

              <div className="text-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    background: "var(--color-primary-orange-light)",
                    borderRadius: "var(--radius-2xl)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-medium)",
                  }}
                >
                  Orange Light
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-gray-600)",
                  }}
                >
                  --color-primary-orange-light
                </p>
              </div>

              <div className="text-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    background: "var(--color-primary-blue-dark)",
                    borderRadius: "var(--radius-2xl)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-medium)",
                  }}
                >
                  Blue Dark
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-gray-600)",
                  }}
                >
                  --color-primary-blue-dark
                </p>
              </div>
            </div>
          </div>

          {/* Semantic Colors */}
          <div style={{ marginBottom: "var(--space-6)" }}>
            <h3
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: "var(--font-semibold)",
                marginBottom: "var(--space-4)",
              }}
            >
              Semantic Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    background: "var(--color-success)",
                    borderRadius: "var(--radius-2xl)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-medium)",
                  }}
                >
                  Success
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-gray-600)",
                  }}
                >
                  --color-success
                </p>
              </div>

              <div className="text-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    background: "var(--color-warning)",
                    borderRadius: "var(--radius-2xl)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-medium)",
                  }}
                >
                  Warning
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-gray-600)",
                  }}
                >
                  --color-warning
                </p>
              </div>

              <div className="text-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    background: "var(--color-error)",
                    borderRadius: "var(--radius-2xl)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-medium)",
                  }}
                >
                  Error
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-gray-600)",
                  }}
                >
                  --color-error
                </p>
              </div>

              <div className="text-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    background: "var(--color-info)",
                    borderRadius: "var(--radius-2xl)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-medium)",
                  }}
                >
                  Info
                </p>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-gray-600)",
                  }}
                >
                  --color-info
                </p>
              </div>
            </div>
          </div>

          {/* Gray Scale */}
          <div>
            <h3
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: "var(--font-semibold)",
                marginBottom: "var(--space-4)",
              }}
            >
              Neutral Gray Scale
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                (shade) => (
                  <div key={shade} className="text-center">
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        background: `var(--color-gray-${shade})`,
                        borderRadius: "var(--radius-lg)",
                        margin: "0 auto var(--space-1)",
                      }}
                    ></div>
                    <p
                      style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--font-medium)",
                        color:
                          shade < 500
                            ? "var(--color-gray-800)"
                            : "var(--color-gray-600)",
                      }}
                    >
                      {shade}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Custom Gradients */}
        <section
          style={{
            background: "var(--gradient-card)",
            borderRadius: "var(--radius-3xl)",
            padding: "var(--space-6)",
            boxShadow: "var(--shadow-card)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--font-bold)",
              color: "var(--color-gray-800)",
              marginBottom: "var(--space-6)",
            }}
          >
            Custom Gradient Variables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              style={{
                background: "var(--gradient-primary)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-6)",
                color: "var(--color-white)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: "var(--font-semibold)",
                }}
              >
                Primary Gradient
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  opacity: 0.9,
                  marginTop: "var(--space-2)",
                }}
              >
                --gradient-primary
              </p>
            </div>

            <div
              style={{
                background: "var(--gradient-secondary)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-6)",
                color: "var(--color-white)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: "var(--font-semibold)",
                }}
              >
                Secondary Gradient
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  opacity: 0.9,
                  marginTop: "var(--space-2)",
                }}
              >
                --gradient-secondary
              </p>
            </div>

            <div
              style={{
                background: "var(--gradient-success)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-6)",
                color: "var(--color-white)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: "var(--font-semibold)",
                }}
              >
                Success Gradient
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  opacity: 0.9,
                  marginTop: "var(--space-2)",
                }}
              >
                --gradient-success
              </p>
            </div>
          </div>
        </section>

        {/* Typography with CSS Variables */}
        <section
          style={{
            background: "var(--gradient-card)",
            borderRadius: "var(--radius-3xl)",
            padding: "var(--space-6)",
            boxShadow: "var(--shadow-card)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--font-bold)",
              color: "var(--color-gray-800)",
              marginBottom: "var(--space-6)",
            }}
          >
            Typography Scale Variables
          </h2>

          <div className="space-y-4">
            <div
              style={{
                fontSize: "var(--text-5xl)",
                fontWeight: "var(--font-black)",
              }}
            >
              Heading XL (--text-5xl)
            </div>
            <div
              style={{
                fontSize: "var(--text-4xl)",
                fontWeight: "var(--font-extrabold)",
              }}
            >
              Heading Large (--text-4xl)
            </div>
            <div
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: "var(--font-bold)",
              }}
            >
              Heading Medium (--text-3xl)
            </div>
            <div
              style={{
                fontSize: "var(--text-2xl)",
                fontWeight: "var(--font-semibold)",
              }}
            >
              Heading Small (--text-2xl)
            </div>
            <div
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: "var(--font-medium)",
              }}
            >
              Large Text (--text-xl)
            </div>
            <div
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: "var(--font-normal)",
              }}
            >
              Medium Text (--text-lg)
            </div>
            <div
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-normal)",
              }}
            >
              Base Text (--text-base)
            </div>
            <div
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-normal)",
              }}
            >
              Small Text (--text-sm)
            </div>
            <div
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-normal)",
              }}
            >
              Extra Small Text (--text-xs)
            </div>
          </div>
        </section>

        {/* Spacing and Layout Variables */}
        <section
          style={{
            background: "var(--gradient-card)",
            borderRadius: "var(--radius-3xl)",
            padding: "var(--space-6)",
            boxShadow: "var(--shadow-card)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--font-bold)",
              color: "var(--color-gray-800)",
              marginBottom: "var(--space-6)",
            }}
          >
            Spacing & Border Radius Variables
          </h2>

          {/* Spacing Scale */}
          <div style={{ marginBottom: "var(--space-6)" }}>
            <h3
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: "var(--font-semibold)",
                marginBottom: "var(--space-4)",
              }}
            >
              Spacing Scale
            </h3>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((space) => (
                <div key={space} className="flex items-center gap-4">
                  <div
                    style={{
                      width: `var(--space-${space})`,
                      height: "var(--space-4)",
                      background: "var(--color-primary-blue)",
                      borderRadius: "var(--radius-sm)",
                    }}
                  ></div>
                  <span
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-medium)",
                    }}
                  >
                    --space-{space}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius Scale */}
          <div>
            <h3
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: "var(--font-semibold)",
                marginBottom: "var(--space-4)",
              }}
            >
              Border Radius Scale
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["sm", "base", "md", "lg", "xl", "2xl", "3xl", "4xl"].map(
                (radius) => (
                  <div key={radius} className="text-center">
                    <div
                      style={{
                        width: "4rem",
                        height: "4rem",
                        background: "var(--gradient-primary)",
                        borderRadius: `var(--radius-${radius})`,
                        margin: "0 auto var(--space-2)",
                      }}
                    ></div>
                    <p
                      style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--font-medium)",
                      }}
                    >
                      --radius-{radius}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Shadow Variables */}
        <section
          style={{
            background: "var(--gradient-card)",
            borderRadius: "var(--radius-3xl)",
            padding: "var(--space-6)",
            boxShadow: "var(--shadow-card)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--font-bold)",
              color: "var(--color-gray-800)",
              marginBottom: "var(--space-6)",
            }}
          >
            Shadow Variables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              style={{
                background: "var(--color-white)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-6)",
                boxShadow: "var(--shadow-sm)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-semibold)",
                }}
              >
                Small Shadow
              </h3>
              <p
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-gray-600)",
                }}
              >
                --shadow-sm
              </p>
            </div>

            <div
              style={{
                background: "var(--color-white)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-6)",
                boxShadow: "var(--shadow-lg)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-semibold)",
                }}
              >
                Large Shadow
              </h3>
              <p
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-gray-600)",
                }}
              >
                --shadow-lg
              </p>
            </div>

            <div
              style={{
                background: "var(--color-white)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-6)",
                boxShadow: "var(--shadow-floating)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-semibold)",
                }}
              >
                Floating Shadow
              </h3>
              <p
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-gray-600)",
                }}
              >
                --shadow-floating
              </p>
            </div>
          </div>
        </section>

        {/* Custom Utility Classes Test */}
        <section
          style={{
            background: "var(--gradient-card)",
            borderRadius: "var(--radius-3xl)",
            padding: "var(--space-6)",
            boxShadow: "var(--shadow-card)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--font-bold)",
              color: "var(--color-gray-800)",
              marginBottom: "var(--space-6)",
            }}
          >
            Custom Utility Classes
          </h2>

          <div className="space-y-6">
            {/* Gradient Text */}
            <div>
              <h3
                className="gradient-text-primary"
                style={{
                  fontSize: "var(--text-2xl)",
                  fontWeight: "var(--font-bold)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Gradient Text Primary
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-gray-600)",
                }}
              >
                .gradient-text-primary class
              </p>
            </div>

            <div>
              <h3
                className="gradient-text-secondary"
                style={{
                  fontSize: "var(--text-2xl)",
                  fontWeight: "var(--font-bold)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Gradient Text Secondary
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-gray-600)",
                }}
              >
                .gradient-text-secondary class
              </p>
            </div>

            {/* Animation Classes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className="card animate-fade-in text-center"
                style={{
                  padding: "var(--space-4)",
                }}
              >
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    background: "var(--color-primary-blue)",
                    borderRadius: "var(--radius-full)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p style={{ fontSize: "var(--text-sm)" }}>animate-fade-in</p>
              </div>

              <div
                className="card animate-slide-up text-center"
                style={{
                  padding: "var(--space-4)",
                }}
              >
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    background: "var(--color-success)",
                    borderRadius: "var(--radius-full)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p style={{ fontSize: "var(--text-sm)" }}>animate-slide-up</p>
              </div>

              <div
                className="card animate-scale-in text-center"
                style={{
                  padding: "var(--space-4)",
                }}
              >
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    background: "var(--color-warning)",
                    borderRadius: "var(--radius-full)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p style={{ fontSize: "var(--text-sm)" }}>animate-scale-in</p>
              </div>

              <div
                className="card animate-float text-center"
                style={{
                  padding: "var(--space-4)",
                }}
              >
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    background: "var(--color-error)",
                    borderRadius: "var(--radius-full)",
                    margin: "0 auto var(--space-2)",
                  }}
                ></div>
                <p style={{ fontSize: "var(--text-sm)" }}>animate-float</p>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="space-y-4">
              <button
                className="btn interactive"
                style={{
                  background: "var(--gradient-primary)",
                  color: "var(--color-white)",
                }}
              >
                Interactive Button (.btn .interactive)
              </button>

              <div
                className="card interactive touch-feedback"
                style={{
                  padding: "var(--space-4)",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-medium)",
                  }}
                >
                  Interactive Card with Touch Feedback
                </p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-gray-600)",
                  }}
                >
                  .card .interactive .touch-feedback
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hebrew Font Test */}
        <section
          style={{
            background: "var(--gradient-card)",
            borderRadius: "var(--radius-3xl)",
            padding: "var(--space-6)",
            boxShadow: "var(--shadow-card)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--font-bold)",
              color: "var(--color-gray-800)",
              marginBottom: "var(--space-6)",
            }}
          >
            Hebrew Font Variables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: "var(--font-semibold)",
                  marginBottom: "var(--space-4)",
                }}
              >
                English - Inter Font
              </h3>
              <div style={{ fontFamily: "var(--font-family-primary)" }}>
                <h4
                  style={{
                    fontSize: "var(--text-2xl)",
                    fontWeight: "var(--font-bold)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  Chavrusa Anytime
                </h4>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-gray-700)",
                  }}
                >
                  This text uses the Inter font family variable:
                  --font-family-primary
                </p>
              </div>
            </div>

            <div className="hebrew" dir="rtl">
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: "var(--font-semibold)",
                  marginBottom: "var(--space-4)",
                  textAlign: "right",
                }}
              >
                Hebrew - Heebo Font - עברית
              </h3>
              <div style={{ fontFamily: "var(--font-family-hebrew)" }}>
                <h4
                  style={{
                    fontSize: "var(--text-2xl)",
                    fontWeight: "var(--font-bold)",
                    marginBottom: "var(--space-2)",
                    textAlign: "right",
                  }}
                >
                  חברותא בכל זמן
                </h4>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-gray-700)",
                    textAlign: "right",
                  }}
                >
                  הטקסט הזה משתמש במשתנה הפונט העברי: --font-family-hebrew
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "var(--color-white)",
          borderTop: "1px solid var(--color-gray-200)",
          padding: "var(--space-6)",
          marginTop: "var(--space-12)",
        }}
      >
        <div className="container text-center">
          <p style={{ color: "var(--color-gray-600)" }}>
            ✅ If all colors, gradients, typography, and spacing display
            correctly,
            <br />
            your CSS custom properties from globals.css are working perfectly!
          </p>
        </div>
      </footer>
    </div>
  );
}
