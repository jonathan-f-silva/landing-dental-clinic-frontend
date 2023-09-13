import dentistImage from "../assets/dentist-sample.png";

export type Config = {
  footer: {
    text: string;
  };
  location: {
    url: string;
    description: string;
  };
  mainLanding: {
    bannerImageURL: string;
    introText: string;
    addSectionButtons: boolean;
  };
  header: {
    title: string;
    additionalLinks?: {
      href: string;
      description: string;
    }[];
  };
};

export type Action = {
  payload: Partial<Config>;
  type: "UPDATE_CONFIG";
};

export const initialConfig: Config = {
  footer: {
    text: "© 2023 Vai De Digital! Todos os direitos reservados.",
  },
  location: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29616.581628772714!2d-49.04017319972907!3d-21.893275947826538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf2202ab90eea3%3A0xb2c6adaca91d8c19!2sIacanga%2C%20SP%2C%2017180-000!5e0!3m2!1spt-BR!2sbr!4v1693317059093!5m2!1spt-BR!2sbr",
    description: "Rua 15 de Novembro, 1234 - Centro - Iacanga/SP",
  },
  mainLanding: {
    bannerImageURL: dentistImage,
    introText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..",
    addSectionButtons: true,
  },
  header: {
    title: "Clínica Odontológica",
    additionalLinks: [],
  },
};

export function configReducer(config: Config, action: Action): Config {
  switch (action.type) {
    case "UPDATE_CONFIG": {
      return {
        ...config,
        ...action.payload,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
