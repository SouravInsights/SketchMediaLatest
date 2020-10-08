import Head from "next/head";
import Footer from "@/components/Footer";
import HeroSection from "components/HeroSection";
import GridSection from "@/components/GridSection";
import GridCard from "components/GridCard";
import GridHeader from "components/GridHeader";
import GridCardSection from "@/components/GridCardSection";
import JobCard from "components/JobCard";
import { PrimaryButton } from "components/Buttons";

const Careers = () => {
  return (
    <>
      <Head>
        <title>Careers - Sketch Media</title>
      </Head>
      <HeroSection
        title="CAREERS"
        heading="Work and live
        your own way."
        description="Learn modern web building, join the remote team, and work from…
        wherever you want."
        src="https://images.ctfassets.net/x7ylmnfcd6wz/3HToCJNuqjS7ZF6Eu4tmCt/023496da489cf598b53049966340a778/become-one-of-us_2x.webp"
        alt="careers"
      >
        <PrimaryButton text="View opportunities" height="60px" />
      </HeroSection>

      <GridSection bgcolor="gray.250">
        <GridHeader
          title="THINGS WE VALUE"
          heading="Believability at the core"
          description="As a team of independent thinkers, we need to share common values and behaviors to make things work."
        />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Empathy"
            carddescription="We get that sometimes things don’t go the way we’d like them to.
              We talk and listen to each other to find the best solution."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="empathy"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Open mindedness"
            carddescription="Got any idea how something could be done better? Good. We love constructive feedback and improving our skills."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/3c9ZEFQ1NuEWMCY6vCiCz1/6d11f55c915253bd757ae74fe452a3f2/service_icon_03.webp?h=250"
            alt="open-mindedness"
          />
        </GridCardSection>
      </GridSection>

      <GridSection>
        <GridHeader
          heading="Work benefits"
          description="Because happy people make a great company."
        />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="First benefit"
            carddescription="Lorem ipsum dolor sit amet, consectetur adip possimus et magnis
            dis parturient montes."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="first-benefit"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Third benefit"
            carddescription="Lorem ipsum dolor sit amet, consectetur adip possimus et magnis
            dis parturient montes."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/3c9ZEFQ1NuEWMCY6vCiCz1/6d11f55c915253bd757ae74fe452a3f2/service_icon_03.webp?h=250"
            alt="second-benefit"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Third benefit"
            carddescription="Lorem ipsum dolor sit amet, consectetur adip possimus et magnis
            dis parturient montes."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="third-benefit"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Fourth benefit"
            carddescription="Lorem ipsum dolor sit amet, consectetur adip possimus et magnis
            dis parturient montes."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/3c9ZEFQ1NuEWMCY6vCiCz1/6d11f55c915253bd757ae74fe452a3f2/service_icon_03.webp?h=250"
            alt="fourth-benefit"
          />
        </GridCardSection>
      </GridSection>

      <GridSection>
        <GridHeader title="OPEN ROLES" heading="Career opportunities" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        >
          <JobCard
            jobTitle="React Developer"
            location="Kuwait, Remote"
            status="Ongoing"
          >
            <PrimaryButton text="View job offer" height="55px" />
          </JobCard>
          <JobCard
            jobTitle="Frontend Developer"
            location="Kuwait, Remote"
            status="Ongoing"
          >
            <PrimaryButton text="View job offer" height="55px" />
          </JobCard>
          <JobCard
            jobTitle="Backend Developer"
            location="Kuwait, Remote"
            status="Ongoing"
          >
            <PrimaryButton text="View job offer" height="55px" />
          </JobCard>
          <JobCard
            jobTitle="UI/UX Designer"
            location="Kuwait, Remote"
            status="Ongoing"
          >
            <PrimaryButton text="View job offer" height="55px" />
          </JobCard>
        </GridCardSection>
      </GridSection>
      <Footer />
    </>
  );
};

export default Careers;
