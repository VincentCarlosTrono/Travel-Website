export interface HeaderPropsInterface {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

  export interface ButtonPropsInterface {
    title: any;
  }

  export interface ContactInfoInterface {
    title: string;
    info1: string;
    info2: string;
    info3: string;
  }

  export interface ExperienceDescriptionInterface {
    numbers: string;
    text: string;
  }

  export interface FooterIconInterface {
    icon: any
  }

  export interface HeaderListInterface {
    list: string;
    path: string;
  }
  export interface SponsorInterface {
    logo: string;
  }

  export interface DiscoverImageInterface {
    image: string;
    title: string;
    tours: string;
  }

  export interface PlaceCardInterface {
    image: string;
    name: string;
    location: string;
    price: string;
    favorite: string;
  }