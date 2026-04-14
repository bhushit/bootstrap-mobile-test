import type { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "bootstrap-mobile-test",
  slug: "bootstrap-mobile-test",
  newArchEnabled: true,
  version: "1.0.0",
  orientation: "portrait",
  scheme: "bootstrap-mobile-test",
  userInterfaceStyle: "automatic",
  runtimeVersion: "1.0.0",
  updates: {
    url: "https://u.expo.dev/71cbda0a-6885-4a12-811f-0979002e01e5",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
    bundleIdentifier: "ai.analogous.bootstrap-mobile-test",
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    package: "ai.analogous.bootstrap-mobile-test",
    edgeToEdgeEnabled: true,
  },
  plugins: [
    "expo-router",
    "expo-font",
    [
      "expo-build-properties",
      {
        ios: {
          deploymentTarget: "17.0",
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "71cbda0a-6885-4a12-811f-0979002e01e5",
    },
  },
  owner: "bagarwal_dev",
});
