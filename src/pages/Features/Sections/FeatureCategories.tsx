import {
  Zap,
  Database,
  Workflow,
  ShieldCheck,
  Sparkles,
  RefreshCw,
  Code2,
  ChevronLeft,
  ChevronRight,
  Play,
  Check,
} from "lucide-react";

const FeatureCategories = () => {
  const orbitIcons = [
    ChevronLeft,
    Zap,
    Check,
    Play,
    Code2,
    Database,
    ShieldCheck,
    Sparkles,
    RefreshCw,
    Workflow,
    ChevronRight,
  ];

  const features = [
    {
      title: "Language Understanding",
      description:
        "Extract intent, meaning, and sentiment from human language turning unstructured text into valuable data and sentiment from human language.",
      position: "top",
      source: (
        <div className="mb-8">
          <div
            style={{
              width: "100%",
              height: 120,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,255,0.08))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.3,
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div
              style={{
                borderRadius: 12,
                padding: 2,
                background: "linear-gradient(90deg,#5B6CFF,#7B5CFF)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  borderRadius: 10,
                  background: "#4a5bdb",
                  padding: "12px 24px",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: 14,
                }}
              >
                Orca.AI
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI Workflow Automation",
      description:
        "Automate repetitive tasks, approvals, and data processing with intelligent, trigger-based flows. Extract intent, meaning, and sentiment from human language—turning unstructured text into valuable data.",
      position: "topRight",
      source: (
        <div>
          <div
            style={{
              background: "rgba(14,19,38,0.6)",
              padding: 20,
              borderRadius: 150,
              display: "flex",
              justifyContent: "center",
              gap: 16,
              border: "3px solid #4a5bdb",
              position: "relative",
              height: "150px",
              alignItems: "center"
            }}
          >
            {orbitIcons.map((Icon, i) => {
              const isCenter = i === Math.floor(orbitIcons.length / 2);
              return (
                <div
                  key={i}
                  style={{
                    width: isCenter ? 72 : 48,
                    height: isCenter ? 72 : 48,
                    borderRadius: 999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isCenter
                      ? "linear-gradient(135deg,#6C7CFF,#8B5CFF)"
                      : "rgba(17,20,40,0.9)",
                    boxShadow: isCenter
                      ? "0 8px 24px rgba(115,101,255,0.4)"
                      : "0 4px 12px rgba(0,0,0,0.5)",
                    border: isCenter
                      ? "2px solid rgba(255,255,255,0.1)"
                      : "1px solid rgba(255,255,255,0.05)",
                    zIndex: 2,
                  }}
                >
                  <Icon
                    style={{
                      width: isCenter ? 28 : 20,
                      height: isCenter ? 28 : 20,
                      color: isCenter ? "#fff" : "#9AA6FF",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "Your AI Command Center",
      description:
        "Seamlessly navigate between a diverse array of generative AI modules—from code generation to creative design all integrated within a single, powerful workspace designed to accelerate your project from concept to completion.",
      position: "bottomLeft",
      source: (
        <div style={{ display: "flex", justifyContent: "center", padding: "20px", }}>
          <div style={{ width: "100%", height: "auto", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: -50,
                transform: "translateX(-50%)",
                width: "100px",
                height: "100px",
                borderRadius: 999,
                background: "linear-gradient(180deg,#7B5CFF,#6C7CFF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                zIndex: 40,
                padding: "10px",


              }}
            >
             Orca.AI
            </div>

            {orbitIcons.map((Icon, i) => {
              const angle = (180 * i) / (orbitIcons.length - 1);
              const r = 150;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * r;
              const y = -Math.sin(rad) * r;

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%,-50%)",
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    background: "rgba(17,20,40,0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 20px rgba(3,8,20,0.6)",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <Icon style={{ width: 18, height: 18, color: "#dfe9ff" }} />
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "Unified Security",
      description:
        "Fortify your entire digital ecosystem with a comprehensive, centralized security platform that seamlessly protection across all your applications.",
      position: "bottomRight",
      source: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: 20,
              background: "linear-gradient(135deg,#5B6CFF,#7B5CFF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 50px rgba(91,108,255,0.25)",
            }}
          >
            <ShieldCheck size={56} color="#fff" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section style={{ padding: "80px 24px" }}>
      <div
        style={{
          marginInline:"60px",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20,
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              gridColumn:
                index === 1 || index === 2 ? "span 2" : "span 1",
              position: "relative",
              borderRadius: 24,
              padding: 32,
              background: "linear-gradient(145deg,#0a0e1f,#06080f)",
              border: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              minHeight: 320,
              display: "flex",
              flexDirection: "column",

            }}
          >
            {item.position === "top" && item.source}

            <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 700 }}>
              {item.title}
            </h3>

            <p
              style={{
                color: "#8891b2",
                fontSize: 14,
                lineHeight: 1.65,
                marginBottom: 16,
              }}
            >
              {item.description}
            </p>

            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                padding: "10px",

              }}
              className="w-35"
            >
              Get Started →
            </button>

            {item.position === "topRight" && (
              <div style={{ marginTop: "auto" }}>{item.source}</div>
            )}
            {item.position === "bottomLeft" && (
              <div style={{ marginTop: "auto", }} >{item.source}</div>
            )}
            {item.position === "bottomRight" && (
              <div style={{ marginTop: "auto" }}>{item.source}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCategories;
