export  interface LoginProps {
    email:string,
    password:string,
}

interface AddressProps {
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    stateAcronym: string;
    zipCode: string;
    latitude: number;
    longitude: number;
  }

export interface UserProfileProps {
    firstName: string;
    lastName: string;
    phone: string;
    cpf: string;
    address: AddressProps;
  }

  interface CompanyProfileProps {
    company: {
      identity: string;
      identityType: string;
      companyType: string;
      status: boolean;
      isHeadquarters: boolean;
      corporateName: string;
      businessName: string;
      phones: string;
      email: string;
      stateRegistration: string;
      startedActivityIn: string;
    };
  }

  interface BusinessHoursProps {
    dayOfWeek: string;
    timeSlots: {
      startTime: string;
      endTime: string;
    }[];
  }

  interface WasteModel {
    materialId: string;
    amount: number;
    unit: string;
    wasteType: string;
  }

  interface CollectionInfoProps {
    collectionType: string;
    wasteId: string;
    wasteType: string;
    tradingType: string;
    measurement: string;
    quantity: number;
    unitAmount: number;
    grossAmount: number;
    discountAmount: number;
    netAmount: number;
    latitude: number;
    longitude: number;
  }

  interface MaterialInfoProps {
    name: string;
    category: string;
  }

  interface DisposalPointProps {
    description: string;
    longitude: number;
    latitude: number;
  }

  interface SolverInfoProps {
    solverId: string;
    priority: string;
    solveUntil: string;
  }

  interface ServiceInfoProps {
    solverId: string;
    description: string;
  }

  interface CollectionRouteProps {
    code: string;
    addresses: string[];
    city: string;
    state: string;
    sectors: string;
    frequency: string[];
    startTime: string;
    endTime: string;
    serviceType: string;
    equipment: string;
    destination: string;
  }

  interface DonationProps {
    description: string;
    quantity: number;
    condition: string;
    additionalNotes: string;
  }

  interface RegisterIrregularDonationProps {
    reason: string;
}