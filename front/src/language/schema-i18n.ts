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
      },
      b: {
        title: string
        description: string
      },
      c: {
        title: string
        description: string
      },
      d: {
        title: string
        description: string
      },
      f: {
        title: string
        description: string
      },
      g: {
        title: string
        description: string
      },
      h: {
        title: string
        description: string
      }
      i: {
        title: string
        description: string
      }
      e: {
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
  legal: {
    title: string,
    section1: {
      title: string,
      description: string
    }
    section2: {
      title: string,
      description: string
      item1:string
      item2:string
      item3:string
      item4:string
    }
    section3: {
      title: string,
      description: string
    }
    section4: {
      title: string,
      description: string
    }
    section5: {
      title: string,
      description: string
      item1:string
      item2:string
      item3:string
      item4:string
      item5:string
      item6:string
      item7:string
    }
    section6: {
      title: string,
      description: string
    }
    section7: {
      title: string,
      description: string
    }
    section8: {
      title: string,
      description: string
    }
    section9: {
      title: string,
      description: string
    }
    section10: {
      title: string,
      text1: string,
      text2: string,
      text3: string

    }
    section11: {
      title: string,
      description: string
    }
    section12: {
      title: string,
      description1: string
      description2: string
      description3: string
    }
    section13: {
      title: string,
      description1: string
      item1:string
      item2:string
      item3:string
      item4:string
      item5:string
      item6:string
      item7:string
      item8:string

      description2: string
      item9:string
      item10:string
      item11:string
      item12:string
      item13:string
      description3: string;
    }
    section14: {
      title: string,
      description: string
    }
    section15: {
      title: string,
      description: string
    }
    section16: {
      title: string,
      description: string
    }
  }
  politics: {
    title: string
    section1: {
      title: string
      description: string
    }
    section2: {
      title: string
      subtitle1: string
      description1: string
      subtitle2: string
      description2: string
      item1: string
      item2: string
      description3: string
      description4: string
    }
    section3: {
      title: string
      description: string
    }
    section4: {
      title: string
      description: string
    }
    section5: {
      title: string
      description: string
    }
    section6: {
      title: string
      description: string
    }
  }
  blog: {
    title: string
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
        6: string
      }
    }
  }
}
