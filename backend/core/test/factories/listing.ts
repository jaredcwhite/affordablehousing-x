import { Factory } from "fishery"
import { nanoid } from "nanoid"
import { Listing } from "../../src/entity/Listing"

export default Factory.define<Listing>(({ sequence, factories }) => ({
  id: nanoid(),
  preferences: [],
  units: [factories.unit.build()],
  attachments: [],
  acceptingApplicationsAtLeasingAgent: true,
  acceptingApplicationsByPoBox: true,
  acceptingOnlineApplications: false,
  acceptsPostmarkedApplications: true,
  accessibility: "There is a total of 5 ADA units in the complex",
  amenities: "Community Room, Laundry Room",
  applicationDueDate: "2019-12-31T15:22:57.000-07:00",
  applicationOpenDate: null,
  applicationFee: "30.0",
  applicationOrganization: `Triton-${sequence}`,
  applicationAddress: {
    city: `Foster City-${sequence}`,
    street: "55 Triton Park Lane",
    zipCode: "94404",
    state: "CA",
    county: "San Jose",
    latitude: 37.55695,
    longitude: -122.27521,
  },
  blankPaperApplicationCanBePickedUp: true,
  buildingAddress: {
    city: `Foster City-${sequence}`,
    street: "55 Triton Park Lane",
    zipCode: "94404",
    state: "CA",
    county: "San Jose",
    latitude: 37.55695,
    longitude: -122.27521,
  },
  buildingTotalUnits: 48,
  buildingSelectionCriteria: null,
  costsNotIncluded:
    "Residents responsible for PG&E and Internet. Residents encourage to obtain renter’s insurance but this is not a requirement. Rent is due by the 5rd of each month. Late fee is $20.00. Owner pays for water, trash, and sewage. Resident to pay $25 for each returned check or rejected electronic payment.",
  creditHistory:
    "A poor credit history may be grounds to deem an applicant ineligible for housing.",
  criminalBackground: "A check will be made of criminal conviction records",
  depositMin: "1140.0",
  depositMax: null,
  developer: "Charities Housing",
  disableUnitsAccordion: true,
  imageUrl:
    "https://regional-dahlia-staging.s3-us-west-1.amazonaws.com/listings/archer/archer-studios.jpg",
  leasingAgentAddress: {
    city: `Foster City-${sequence}`,
    street: "55 Triton Park Lane",
    zipCode: "94404",
    state: "CA",
    county: "San Jose",
    latitude: 37.55695,
    longitude: -122.27521,
  },
  leasingAgentEmail: "thetriton@legacypartners.com",
  leasingAgentName: "Francis Santos",
  leasingAgentOfficeHours: "Monday - Friday, 9:00 am - 5:00 pm",
  leasingAgentPhone: "650-437-2039",
  leasingAgentTitle: "Business Manager",
  name: "Gish Apartments",
  neighborhood: "San Jose",
  petPolicy: "No Pets Allowed",
  postmarkedApplicationsReceivedByDate: "2019-12-05",
  programRules: null,
  rentalHistory: "Two years of rental history will be verified",
  requiredDocuments: "Due at interview - Paystubs",
  smokingPolicy: "Non-Smoking",
  unitsAvailable: 2,
  unitAmenities: "Dishwasher",
  waitlistCurrentSize: 20,
  waitlistMaxSize: 20,
  yearBuilt: 2019,
}))