export const trackLeadConversion = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-6500756931/a1a2m2F9d4mcKR2iahHC",
    });
  }
};
