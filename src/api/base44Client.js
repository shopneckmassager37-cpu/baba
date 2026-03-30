import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { token, functionsVersion, appBaseUrl } = appParams;

export const base44 = createClient({
  appId: "69caab40b61d6ee7c5b75332",
  token,
  functionsVersion,
  requiresAuth: false,
  appBaseUrl
});
