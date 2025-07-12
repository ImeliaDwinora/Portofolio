import { create } from "zustand";

type Language = "id" | "en";

interface LanguageStore {
  language: Language;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "id",
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "id" ? "en" : "id",
    })),
}));
