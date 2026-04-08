// Base44 entities removed — using localStorage for persistence

const STORAGE_KEY = 'chatbot_config';

function getStoredConfigs() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveConfigs(configs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
}

export const ChatbotConfig = {
  async list() {
    return getStoredConfigs();
  },
  async create(config) {
    const configs = getStoredConfigs();
    const newConfig = { ...config, id: Date.now().toString() };
    configs.push(newConfig);
    saveConfigs(configs);
    return newConfig;
  },
  async update(id, config) {
    const configs = getStoredConfigs();
    const index = configs.findIndex(c => c.id === id);
    if (index !== -1) {
      configs[index] = { ...configs[index], ...config };
      saveConfigs(configs);
    }
    return configs[index];
  }
};

export const User = null;
