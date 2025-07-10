"use client";

import LandingConfig from "./LandingConfig";
import { useState } from "react";

export default function LandingConfigWrapper({ shop }: { shop: any }) {
  const [config, setConfig] = useState(shop.config || {});

  const handleUpdate = (updatedConfig: any) => {
    console.log("🟢 Config actualizada:", updatedConfig);
    setConfig(updatedConfig);
    // Aquí podrías llamar a tu API para guardar los cambios si lo necesitas
  };

  return (
    <LandingConfig
      shop={shop}
      config={config}
      onUpdate={handleUpdate}
    />
  );
}
