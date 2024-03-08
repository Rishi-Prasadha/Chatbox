import { useState, useCallback } from "react";
import TextArea2 from "../components/TextArea2";
import TextArea1 from "../components/TextArea1";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [organizationNameTextValue, setOrganizationNameTextValue] =
    useState("");
  const [postalCodeTextValue, setPostalCodeTextValue] = useState("");
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full h-[1024px] relative bg-neutral-80 flex flex-row items-start justify-start pt-[59px] pb-[437.6999999999998px] pr-20 pl-[193px] box-border gap-[167px] tracking-[normal] text-left text-base text-adventure-blue-adventure-blue-500 font-text-l-medium mq450:h-auto mq450:gap-[83px] mq450:pl-24 mq450:pr-10 mq450:box-border">
      <div className="w-[734px] hidden flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div className="w-[200px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border gap-[4px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-[38px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
            Back
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </div>
        <div className="w-[200px] rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-center justify-center py-2 px-5 box-border gap-[4px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-[69px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
            Continue
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </div>
      </div>
      <div className="w-[200px] flex flex-col items-start justify-start pt-[317px] px-0 pb-0 box-border shrink-0 mq450:hidden mq450:pt-[206px] mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[62px]">
            <img
              className="h-[135px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/logo--guzo-2@2x.png"
            />
          </div>
          <img
            className="self-stretch h-[74.3px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/guzo-1-11@2x.png"
          />
        </div>
      </div>
      <div className="h-[965px] flex-1 rounded-xs-8 bg-neutral-10 box-border overflow-y-auto flex flex-col items-end justify-start pt-10 px-[50px] pb-[60px] gap-[40px] max-w-[calc(100%_-_367px)] z-[1] text-xs text-black border-[1px] border-solid border-mediumslateblue mq450:pt-5 mq450:pb-[25px] mq450:box-border mq450:max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center shrink-0 text-center text-9xl-3">
          <div className="h-[41px] w-[434px] relative tracking-[-0.02em] leading-[40.11px] font-semibold inline-block">
            Tell us more about your business
          </div>
        </div>
        <div className="self-stretch rounded-3xs hidden flex-col items-start justify-center gap-[4px] min-h-[80px] text-power-black-power-black-300">
          <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
            Contact Phone Number*
          </div>
          <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden hidden flex-row items-center justify-start p-1.5 gap-[4px] text-sm text-power-black-power-black-200 border-[1px] border-solid border-neutral-100">
            <img
              className="h-6 w-6 relative object-cover"
              alt=""
              src="/outlined-flag-24px@2x.png"
            />
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/arrow-drop-down-24px.svg"
            />
            <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
              (201) 555-0123
            </div>
          </div>
          <div className="self-stretch h-[18px] relative leading-[18px] text-neutral-60 inline-block">
            This phone number will NOT be shared on the organization profile.
            This phone number is for Guzo organization verification.
          </div>
        </div>
        <div className="self-stretch h-[1012px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[356px] box-border gap-[20px] max-w-full mq450:h-auto mq450:pb-[150px] mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center">
            <div className="h-[150px] w-[150px] rounded-81xl bg-neutral-601 overflow-hidden shrink-0 flex flex-row items-start justify-start py-[61px] px-0 box-border">
              <div className="ml-[-25px] h-7 w-[200px] relative tracking-[-0.01em] leading-[15px] inline-block shrink-0">
                <p className="m-0">Upload Profile Photo*</p>
                <p className="m-0 text-darkslategray">
                  <i className="font-light">(Acceptable: jpeg, png)</i>
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[4px] shrink-0 text-power-black-power-black-300">
            <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
              Organization Name*
            </div>
            <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-start justify-start py-1.5 px-5 border-[1px] border-solid border-neutral-100">
              <input
                className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
                placeholder="Organization Name"
                type="text"
                value={organizationNameTextValue}
                onChange={(event) =>
                  setOrganizationNameTextValue(event.target.value)
                }
              />
            </div>
            <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
              Text helper
            </div>
          </div>
          <TextArea2
            mailOutline24px="/mail-outline-24px@2x.png"
            contactEmail="Contact Email*"
            emailPlaceholder="Email"
            thisEmailWillNOTBeSharedO="This email will NOT be shared on the organization profile. This email will be used for all Guzo correspondence."
            showThisEmailWill
            propWidth="208px"
            propAlignSelf="stretch"
          />
          <TextArea1
            phone24px="/phone-24px.svg"
            phoneNumber="Phone Number"
            countryRegion="Country/Region"
            expandMore24px="/expand-more-24px.svg"
            textHelper="Text helper"
            textHelper1={false}
            propWidth="240px"
          />
          <TextArea1
            phone24px="/location-on-24px@2x.png"
            phoneNumber="Location*"
            countryRegion="Country/Region"
            expandMore24px="/expand-more-24px.svg"
            textHelper="Text helper"
            textHelper1={false}
            propBorderRadius="unset"
            propWidth="unset"
            propAlignSelf="stretch"
          />
          <div className="self-stretch rounded-3xs flex flex-row items-start justify-start gap-[4px] max-w-full text-neutral-60">
            <div className="flex-1 rounded-lg bg-neutral-601 box-border overflow-hidden flex flex-row items-start justify-start py-1.5 px-5 max-w-full border-[1px] border-solid border-neutral-100">
              <input
                className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
                placeholder="Postal Code"
                type="text"
                value={postalCodeTextValue}
                onChange={(event) => setPostalCodeTextValue(event.target.value)}
              />
            </div>
            <div className="self-stretch w-60 relative leading-[18px] hidden">
              Text helper
            </div>
          </div>
          <div className="self-stretch rounded-3xs flex flex-row items-start justify-start gap-[4px] max-w-full shrink-0 text-sm text-adventure-blue-adventure-blue-700">
            <div className="flex-1 rounded-lg bg-neutral-601 box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-1.5 px-[19px] gap-[4px] max-w-full border-[1px] border-solid border-neutral-100">
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[409px] max-w-full">
                <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                  City
                </div>
              </div>
              <img
                className="h-6 w-6 relative"
                alt=""
                src="/expand-more-24px.svg"
              />
            </div>
            <div className="self-stretch w-60 relative text-xs leading-[18px] text-neutral-60 hidden">
              Text helper
            </div>
          </div>
          <TextArea1
            phone24px="/work-24px@2x.png"
            phoneNumber="Industry"
            countryRegion="Industry"
            expandMore24px="/expand-more-24px.svg"
            textHelper="Text helper"
            textHelper1={false}
            propBorderRadius="unset"
            propWidth="unset"
            propAlignSelf="stretch"
          />
          <TextArea2
            mailOutline24px="/calendar-today-24px@2x.png"
            contactEmail="Calendar Scheduling Link"
            emailPlaceholder="Website Link"
            thisEmailWillNOTBeSharedO="Text helper"
            showThisEmailWill={false}
            propWidth="unset"
            propFlex="1"
            propMinWidth="250px"
            propAlignSelf="stretch"
            propWidth1="unset"
          />
          <TextArea
            language24px="/language-24px@2x.png"
            website="Website"
            websiteLink="Website Link"
          />
          <TextArea
            language24px="/web-asset-24px@2x.png"
            website="Organization Description"
            websiteLink="Description"
          />
          <TextArea1
            phone24px="/local-offer-24px@2x.png"
            phoneNumber="Descriptive Tags"
            countryRegion="Add tags separated by a comma..."
            expandMore24px="/add-24px.svg"
            textHelper="Tags help Guzo curate relevant connections and opportunities."
            textHelper1
            propBorderRadius="100px"
            propWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
        <div
          className="rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-start justify-start py-2 px-5 gap-[4px] shrink-0 cursor-pointer text-base text-adventure-blue-adventure-blue-500"
          onClick={onButtonContainerClick}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-[69px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
            Continue
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
