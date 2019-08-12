import { Component } from "react";
import ReactDOMServer from "react-dom/server";
import { unitSummariesTable } from "../lib/unit_summaries";
import Layout from "../layouts/application";
import { Listing } from "../components/listings_list";
import ImageHeader from "@dahlia/ui-components/src/headers/image_header";
import { OneLineAddress } from "@dahlia/ui-components/src/helpers/address";
import { ContentSection } from "@dahlia/ui-components/src/sections/content_section";
import { ListSection } from "@dahlia/ui-components/src/sections/list_section";
import { InfoCard } from "@dahlia/ui-components/src/cards/info_card";
import { Description } from "@dahlia/ui-components/src/atoms/description";
import { BasicTable } from "@dahlia/ui-components/src/tables/basic_table";
import axios from "axios";

interface ListingProps {
  listing: Listing;
}

export default class extends Component<ListingProps> {
  static async getInitialProps({ query }) {
    const listing_id = query.id;
    let listing = {};

    try {
      const response = await axios.get("http://localhost:3001");
      listing = response.data.listings.find(l => l.id == listing_id);
    } catch (error) {
      console.log(error);
    }

    return { listing };
  }

  render() {
    const listing = this.props.listing;

    const address = {
      street_address: listing.building_street_address,
      city: listing.building_city,
      state: listing.building_state,
      zip_code: listing.building_zip_code
    };

    const oneLineAddress = <OneLineAddress address={address} />;

    const googleMapsHref =
      "https://www.google.com/maps/place/" + ReactDOMServer.renderToStaticMarkup(oneLineAddress);

    const unitSummariesHeaders = {
      unit_type: "Unit Type",
      minimum_income: "Minimum Income",
      rent: "Rent",
      availability: "Availability"
    };
    const unitSummaries = unitSummariesTable(listing);

    return (
      <Layout>
        <article className="flex flex-wrap relative max-w-5xl m-auto mb-12">
          <ImageHeader
            className="w-full md:w-3/4 p-3"
            title={listing.name}
            imageUrl={listing.image_url}
            subImageContent={
              <>
                <p className="t-alt-sans uppercase">{oneLineAddress}</p>
                <p className="text-gray-700">{listing.developer}</p>
                <p className="text-xs">
                  <a href={googleMapsHref} target="_blank" aria-label="Opens in new window">
                    View on Map
                  </a>
                </p>
              </>
            }
          />

          <div className="w-full md:w-3/4 mt-12 mb-6 px-3">
            <BasicTable
              headers={unitSummariesHeaders}
              data={unitSummaries}
              responsiveCollapse={true}
            />
          </div>

          <aside className="w-full md:absolute md:right-0 md:w-1/4">
            <section className="border border-black h-48">
              <p>Hello, I am a sidebar waiting for content</p>
            </section>
            <section className="border border-green-600 h-48">
              <p>I can have multiple sections</p>
            </section>
            <section className="border border-yellow-600 h-48">
              <p>Featuring helpful listing-related info</p>
            </section>
            <section className="border border-blue-500 h-48">
              <p>Such as application details</p>
            </section>
            <section className="border border-red-500 h-48">
              <p>And leasing agent contact info</p>
            </section>
          </aside>

          <div className="w-full md:w-3/4">
            <ContentSection
              title="Eligibility"
              subtitle="Income, occupancy, preferences, and subsidies"
            >
              <ul>
                <ListSection
                  title="Household Maximum Income"
                  subtitle="For income calculations, household size includes everyone (all ages) living in the unit."
                >
                  <>table goes here…</>
                </ListSection>
                <ListSection
                  title="Occupancy"
                  subtitle="Occupancy limits for this building differ from household size, and do not include children under 6."
                >
                  <>table goes here…</>
                </ListSection>

                <ListSection
                  title="Rental Assistance"
                  subtitle="Housing Choice Vouchers, Section 8 and other valid rental assistance programs will be 
                      considered for this property. In the case of a valid rental subsidy, the required minimum income 
                      will be based on the portion of the rent that the tenant pays after use of the subsidy."
                />

                <ListSection
                  title="Housing Preferences"
                  subtitle="Preference holders will be given highest ranking."
                >
                  <>table goes here…</>
                </ListSection>

                <ListSection
                  title="Additional Eligibility Rules"
                  subtitle="Applicants must also qualify under the rules of the building."
                >
                  <>
                    <InfoCard title="Credit History">
                      <p className="text-sm text-gray-700">{listing.credit_history}</p>
                    </InfoCard>
                    <InfoCard title="Rental History">
                      <p className="text-sm text-gray-700">{listing.rental_history}</p>
                    </InfoCard>
                  </>
                </ListSection>
              </ul>
            </ContentSection>

            <ContentSection title="Features" subtitle="Amenities, unit details and additional fees">
              <dl>
                <Description term="Neighborhood" description={listing.neighborhood} />
                <Description term="Built" description={listing.year_built} />
                <Description term="Smoking Policy" description={listing.smoking_policy} />
                <Description term="Pets Policy" description={listing.pet_policy} />
                <Description term="Property Amenities" description={listing.amenities} />
              </dl>
            </ContentSection>

            <ContentSection title="Neighborhood" subtitle="Location and transportation">
              <p>Map goes here…</p>
            </ContentSection>

            <ContentSection
              title="Additional Information"
              subtitle="Required documents and selection criteria"
            >
              <InfoCard title="Required Documents">
                <p className="text-sm text-gray-700">{listing.required_documents}</p>
              </InfoCard>
            </ContentSection>

            <em>Listing Id: {listing.id}</em>
          </div>
        </article>
      </Layout>
    );
  }
}