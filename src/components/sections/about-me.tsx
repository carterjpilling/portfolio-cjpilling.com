import Image from "next/image";

import CJFullPose from "/public/images/cj-full-pose.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={CJFullPose}
              alt="Fullpose of Cj"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
              priority
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Well you&apos;ve made it this far, so let me introduce myself
          </Typography>
          <Typography>
            I&apos;m a passionate Software Developer who specializes in full
            stack development (React.js, Angular & Node.js). I am enthusiastic
            about bringing the technical and visual aspects of digital products
            to life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </Typography>
          <Typography>
            I began my journey as a web developer in 2020, making a career
            change to Software Development has been one of the most rewarding
            decisions I&apos;ve ever made.
          </Typography>
          <Typography>
            I have a unique background with Business Management, Administration,
            French, and Sports Marketing. What I bring to any team is a diverse
            set of skills and experiences that allow me to see things from
            different perspectives.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            cheering on for my favorite sport teams.{" "}
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">B.A. in Integrated Studies</Typography>
              <Typography component="li">Full time awesome</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid Sportist</Typography>
              <Typography component="li">
                Aspiring softpitch softball athlete
              </Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
