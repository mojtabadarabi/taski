import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taski.app',
  appName: 'taski',
  webDir: 'public',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.4:3000',
    cleartext: true
  },
  plugins: {
		"SplashScreen": {
			"launchAutoHide": true,
			"backgroundColor": "#d0d1d3",
			"androidSplashResourceName": "splash",
			"androidScaleType": "CENTER_INSIDE",
			"showSpinner": false,
			"androidSpinnerStyle": "small",
			"iosSpinnerStyle": "small",
			"spinnerColor": "#48525c",
			"splashFullScreen": true,
			"splashImmersive": true,
			"layoutName": "launch_screen",
			"useDialog": false
		}
  }
};

export default config;
