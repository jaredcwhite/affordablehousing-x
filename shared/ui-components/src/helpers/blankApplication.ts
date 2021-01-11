import { ApplicationStatus, ApplicationSubmissionType, Language } from "@bloom-housing/core"

export const blankApplication = () => {
  return {
    loaded: false,
    completedSections: 0,
    submissionType: ApplicationSubmissionType.electronical,
    language: Language.en,
    acceptedTerms: false,
    status: ApplicationStatus.submitted,
    applicant: {
      orderId: undefined,
      firstName: "",
      middleName: "",
      lastName: "",
      birthMonth: "",
      birthDay: "",
      birthYear: "",
      emailAddress: "",
      noEmail: false,
      phoneNumber: "",
      phoneNumberType: "",
      noPhone: false,
      workInRegion: null,
      address: {
        street: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
        county: "",
        latitude: null,
        longitude: null,
      },
      workAddress: {
        street: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
        county: "",
        latitude: null,
        longitude: null,
      },
    },
    additionalPhone: false,
    additionalPhoneNumber: "",
    additionalPhoneNumberType: "",
    contactPreferences: [],
    householdSize: 0,
    housingStatus: "",
    sendMailToMailingAddress: false,
    mailingAddress: {
      street: "",
      street2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    alternateAddress: {
      street: "",
      street2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    alternateContact: {
      type: "",
      otherType: "",
      firstName: "",
      lastName: "",
      agency: "",
      phoneNumber: "",
      emailAddress: "",
      mailingAddress: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
    },
    accessibility: {
      mobility: null,
      vision: null,
      hearing: null,
    },
    incomeVouchers: null,
    income: null,
    incomePeriod: null,
    householdMembers: [],
    preferredUnit: [],
    demographics: {
      ethnicity: "",
      race: "",
      gender: "",
      sexualOrientation: "",
      howDidYouHear: [],
    },
    preferences: {
      liveIn: false,
      none: false,
      workIn: false,
    },
    confirmationId: "",
  }
}