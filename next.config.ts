import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Optimisation pour systèmes de fichiers lents */
  
  // Réduire le cache pour éviter les boucles de compilation
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,      // 60s avant eviction
    pagesBufferLength: 5,            // Keep 5 pages en mémoire
  },
};

export default nextConfig;
