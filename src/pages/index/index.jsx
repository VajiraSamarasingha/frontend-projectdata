import React from "react";

import { Button, Img, Line, Text } from "components";

const PxPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <header className="bg-deep_purple-500 flex md:flex-col md:gap-2 items-center justify-between px-20 md:px-5 py-[26px] w-full">
          <Img
            className="h-[25px] w-[238px]"
            src="images/img_logo.svg"
            alt="logo"
          />
          <ul className="flex sm:flex-col flex-row gap-7 sm:hidden items-start justify-start w-auto common-row-list">
            <li>
              <a href="./" className="text-sm text-white-A700">
                <Text size="txtInterMedium14">SERVICES</Text>
              </a>
            </li>
            <li>
              <a href="./" className="text-sm text-white-A700">
                <Text size="txtInterMedium14">ABOUT US</Text>
              </a>
            </li>
            <li>
              <a href="./" className="text-sm text-white-A700">
                <Text size="txtInterMedium14">CONTACT US</Text>
              </a>
            </li>
            <li>
              <a href="./" className="text-sm text-white-A700">
                <Text size="txtInterMedium14">CAREERS</Text>
              </a>
            </li>
          </ul>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[700px] md:px-5 relative w-full">
            <Img
              className="h-[700px] m-auto object-cover w-full"
              src="images/img_andykelly0ev.png"
              alt="andykelly0ev"
            />
            <div className="absolute bg-gradient  bottom-[6%] flex flex-col gap-5 items-start justify-start left-[6%] max-w-[630px] pb-8 pt-6 px-10 sm:px-5 w-full">
              <Text
                className="capitalize leading-[100.00%] max-w-[556px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px]"
                size="txtInterBold48"
              >
                We crush your competitors, goals, and sales records - without
                the B.S.
              </Text>
              <Button className="cursor-pointer font-bold min-w-[214px] text-center text-sm tracking-[-0.28px] uppercase">
                Get free consultation
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[108px] items-center justify-between max-w-[1064px] mt-20 mx-auto md:px-5 w-full">
          <Img
            className="sm:flex-1 h-[414px] md:h-auto object-cover w-[414px] sm:w-full"
            src="images/img_image2.png"
            alt="imageTwo"
          />
          <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-[542px] sm:w-full">
            <div className="flex flex-col font-poppins items-start justify-start w-auto sm:w-full">
              <Text
                className="sm:text-[23px] md:text-[25px] text-[27px] text-deep_purple-500 tracking-[0.40px] w-auto"
                size="txtPoppinsSemiBold27"
              >
                Web & Mobile App Development
              </Text>
            </div>
            <Text
              className="max-w-[542px] md:max-w-full text-base text-black-900"
              size="txtInterRegular16"
            >
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </Text>
            <Button className="cursor-pointer font-bold font-inter min-w-[129px] text-center text-sm tracking-[-0.28px] uppercase">
              LEARN MORE
            </Button>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[108px] items-center justify-between max-w-[1064px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-[542px] sm:w-full">
            <div className="flex flex-col font-poppins items-start justify-start w-auto sm:w-full">
              <Text
                className="sm:text-[23px] md:text-[25px] text-[27px] text-deep_purple-500 tracking-[0.40px] w-auto"
                size="txtPoppinsSemiBold27"
              >
                Digital Strategy Consulting
              </Text>
            </div>
            <Text
              className="max-w-[542px] md:max-w-full text-base text-black-900"
              size="txtInterRegular16"
            >
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </Text>
            <Button className="cursor-pointer font-bold font-inter min-w-[129px] text-center text-sm tracking-[-0.28px] uppercase">
              LEARN MORE
            </Button>
          </div>
          <Img
            className="md:flex-1 h-[416px] sm:h-auto object-cover w-[414px] md:w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
        </div>
        <footer className="bg-deep_purple-500 flex font-lato items-center justify-center mt-[100px] pb-5 pt-10 px-20 md:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-[413px] sm:w-full">
                <Img
                  className="h-[25px] w-[238px]"
                  src="images/img_logo.svg"
                  alt="logo_One"
                />
                <Text
                  className="max-w-[413px] md:max-w-full text-base text-white-A700"
                  size="txtLatoRegular16"
                >
                  Your goal is our target. Not anything in between. We use
                  online marketing platforms and tools to achieve single
                  objective - your business results.
                </Text>
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row font-inter sm:gap-10 gap-32 items-start justify-between w-auto sm:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-[197px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-auto"
                    size="txtInterSemiBold21"
                  >
                    Our Technologies
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="./"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">ReactJS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="./"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">Gatsby</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="./"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">NextJS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="./"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">NodeJS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="./"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">GraphQL</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="./"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">Laravel</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-[197px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-auto"
                    size="txtInterSemiBold21"
                  >
                    Our Services
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="capitalize text-sm text-white-A700 w-full"
                      size="txtInterMedium14"
                    >
                      Social media Marketing
                    </Text>
                    <Text
                      className="capitalize max-w-[197px] md:max-w-full text-sm text-white-A700"
                      size="txtInterMedium14"
                    >
                      Web & Mobile App Development
                    </Text>
                    <Text
                      className="capitalize text-sm text-white-A700 w-full"
                      size="txtInterMedium14"
                    >
                      Data & Analytics
                    </Text>
                    <Text
                      className="capitalize text-sm text-white-A700 w-full"
                      size="txtInterMedium14"
                    >
                      Google Marketing solutions
                    </Text>
                    <Text
                      className="capitalize text-sm text-white-A700 w-full"
                      size="txtInterMedium14"
                    >
                      Search Engine Optimization
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-2 items-center justify-start max-w-[630px] w-full">
              <Line className="bg-white-A700 h-px w-full" />
              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <a
                  href="./"
                  className="capitalize text-sm text-white-A700 w-auto"
                >
                  <Text size="txtInterMedium14">Privacy Policy</Text>
                </a>
                <Line className="bg-white-A700 h-4 w-px" />
                <a
                  href="./"
                  className="capitalize text-sm text-white-A700 w-auto"
                >
                  <Text size="txtInterMedium14">Terms & Conditions</Text>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PxPage;
