import { create } from "zustand";

type Language = "en" | "id";

interface LanguageStore {
  language: Language;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "en",
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "en" ? "id" : "en",
    })),
}));
