export interface TranslationSchema {
  title: string
  description: string
  buttonAction: string
  about: {
    title: string
    description: string
  }
  bot: {
    welcome: string
    question: {
      1: string
      2: string
      3: string
    }
  }
  services: {
    title: string
    description: string
    service: {
      a: {
        subtitle: string
        description: string
      }
      b: {
        subtitle: string
        description: string
      }
      c: {
        subtitle: string
        description: string
      }
      d: {
        subtitle: string
        description: string
      }
    }
  }
  buttonAction2: string
  powers: {
    title: string
    description: string
    buttonAction: string
    power: {
      a: {
        title: string
        description: string
      }
      b: {
        title: string
        description: string
      }
    }
  }
  teams: {
    title: string
    description: string
    buttonAction: string
    team: {
      a: {
        name: string
        profession: string
      }
      b: {
        name: string
        profession: string
      }
      c: {
        name: string
        profession: string
      }
    }
  }
  contact: {
    title: string
    description: string
    numberPhoneOne: string
    numberPhoneTwo: string
    address: string
    social: string
    form: {
      field1: {
        name: string
        placeholder: string
      }
      field2: {
        name: string
        placeholder: string
      }
      field3: {
        name: string
        placeholder: string
      }
      field4: {
        name: string
        placeholder: string
      }
      buttonAction: string
    }
  }
  cookies: {
    title: string,
    description: string;
    subtitle1: string,
    subdescription1: string
    subtitle2: string,
    subdescription2: string
    subtitle3: string,
    subdescription3: string
    subtitle4: string,
    subdescription4: string
  }
  footer: {
    description: string
    newsletter: {
      title: string
      description: string
      placeholder: string
      links: {
        1: string
        2: string
        3: string
        4: string
        5: string
      }
    }
  }
}
