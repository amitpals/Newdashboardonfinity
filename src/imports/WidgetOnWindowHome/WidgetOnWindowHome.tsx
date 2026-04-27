import { Fragment, useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarClock,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  ExternalLink,
  FilePlus2,
  Github,
  GraduationCap,
  HardDrive,
  HardDriveDownload,
  Hourglass,
  Home,
  Mail,
  NotebookText,
  Package2,
  Pencil,
  Percent,
  Phone,
  Plus,
  RotateCcw,
  Send,
  Ticket,
  Trash2,
  UserRound,
} from "lucide-react";
import svgPaths from "./svg-gcxtz2mw3y";
import imgImage34 from "./67915b5281a364c5879b410415ba1e8e9e7f1129.png";
import { imgImage33, imgGroup97, imgGroup100 } from "./svg-k0rdy";

function MaterialSymbolsMenu() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="material-symbols:menu">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="material-symbols:menu">
          <path d={svgPaths.p16ee8f00} fill="var(--fill-0, #0083DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Slot() {
  return (
    <div className="h-[24px] relative shrink-0 w-[72px]" data-name="Slot">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 24">
        <g clipPath="url(#clip0_1_1884)" id="Slot">
          <g id="Group 13594">
            <path d={svgPaths.p18455800} fill="var(--fill-0, #0083DA)" id="Subtraction 17" />
            <path d={svgPaths.p16300740} fill="var(--fill-0, #0083DA)" id="pen-solid (1)" />
          </g>
          <line id="Line 13" stroke="var(--stroke-0, #E1E1E1)" x1="36.5" x2="36.5" y1="1" y2="23" />
          <g id="material-symbols:star">
            <path d={svgPaths.p952ebf0} fill="var(--fill-0, #0083DA)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1884">
            <rect fill="white" height="24" width="72" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    null
  );
}

function Group() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[50px]" data-name="Group">
      <div className="absolute inset-[-6%_-12%_-18%_-12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
          <g filter="url(#filter0_d_1_1810)" id="Group">
            <path d={svgPaths.p334e6400} fill="var(--fill-0, white)" id="Ellipse 353" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="62" id="filter0_d_1_1810" width="62" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1810" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1810" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[-9px] mt-0 place-items-start relative row-1" data-name="Mask Group 18">
      <div className="col-1 h-[51.75px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_0px] mask-size-[45px_45px] ml-0 mt-0 relative row-1 w-[62.631px]" data-name="Image 33" style={{ maskImage: `url('${imgImage33}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage34} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Clip path group">
      <MaskGroup />
    </div>
  );
}

function Icon() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.5px] mt-[2.5px] place-items-start relative row-1" data-name="icon">
      <ClipPathGroup />
    </div>
  );
}

function AvatarUser() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Avatar User">
      <Group />
      <Icon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-gradient-to-b from-[rgba(255,255,255,0.7)] h-[48px] relative rounded-[8px] shrink-0 to-[rgba(255,255,255,0.49)]" data-name="Icons Group">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <Slot />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="content-stretch flex gap-[16px] items-center overflow-clip p-[8px] relative shrink-0" data-name="User Info">
        <Frame61 />
        <AvatarUser />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_12.5%_0.78%_12.5%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20.814">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p14c00640} fill="var(--fill-0, #1F83FF)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteGridFill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:grid-fill">
      <Group1 />
    </div>
  );
}

function RiWindowFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ri:window-fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:window-fill">
          <path d={svgPaths.p357f300} fill="var(--fill-0, #1F83FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <MingcuteGridFill />
      <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <line id="Line 15" stroke="var(--stroke-0, #D9D9D9)" x2="17" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <RiWindowFill />
    </div>
  );
}

function IwwaArrowUp() {
  return (
    <div className="absolute left-[69px] size-[20px] top-[25px]" data-name="iwwa:arrow-up">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iwwa:arrow-up">
          <path d={svgPaths.p16513680} fill="var(--fill-0, #1F83FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame77({ label }: { label: string }) {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
      <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative shrink-0 w-[96px]">
        <Frame76 />
      </div>
      <IwwaArrowUp />
    </div>
  );
}

function MaterialSymbolsClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:close">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:close">
          <path d={svgPaths.p2edaeb50} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame73({
  onGoHome,
  onGoModule,
  currentScreen,
  moduleName,
}: {
  onGoHome: () => void;
  onGoModule?: () => void;
  currentScreen: ScreenMode;
  moduleName: string | null;
}) {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
        <button
          className={`font-['Roboto:Bold',sans-serif] font-bold text-[18px] ${
            currentScreen === "home" ? "text-black" : "text-[rgba(0,0,0,0.4)]"
          }`}
          onClick={onGoHome}
          style={{ fontVariationSettings: "'wdth' 100" }}
          type="button"
        >
          Home
        </button>
        {moduleName ? (
          <>
            <div className="flex h-[24px] items-center justify-center text-black">
              <ChevronRight className="size-[14px]" strokeWidth={2.2} />
            </div>
            <button
              className={`font-['Roboto:Bold',sans-serif] font-bold text-[18px] whitespace-nowrap ${
                currentScreen === "crm" ? "text-black" : "text-[rgba(0,0,0,0.4)]"
              }`}
              onClick={onGoModule}
              style={{ fontVariationSettings: "'wdth' 100" }}
              type="button"
            >
              {moduleName}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[normal] px-[8px] py-[4px] relative text-[16px] text-black text-center w-full">
          <p className="relative shrink-0 w-[98px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Bank Balance
          </p>
          <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            1 of 1
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="min-w-[360px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] min-w-[inherit] p-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Axis Bank - 348493493844
          </p>
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            € 80,000.00
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white min-w-[360px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] min-w-[inherit] p-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            HDFC Bank - 100343940904
          </p>
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            € 18,700.00
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white min-w-[360px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] min-w-[inherit] p-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            SBI Bank - 66324939293441
          </p>
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            € 118,7800.00
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[347px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[386px]">
      <Frame9 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Component2X() {
  return (
    <div className="aspect-[418/418] bg-gradient-to-b col-[1/span_2] from-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[12px] row-6 shrink-0 to-[rgba(255,255,255,0.49)]" data-name="2x2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[16px] relative size-full">
          <Frame8 />
          <Frame10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ececec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[normal] px-[8px] py-[4px] relative text-[16px] text-black text-center w-full whitespace-nowrap">
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cash Balance
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            1 of 1
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="min-w-[360px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] min-w-[inherit] p-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cashbook Head Office
          </p>
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            € 80,000.00
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="min-w-[360px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] min-w-[inherit] p-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cashbook Register Branch
          </p>
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            € 18,700.00
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="min-w-[360px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] min-w-[inherit] p-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tejoo Cashbook
          </p>
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            AED 18,700.00
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[347px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[386px]">
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Component2X1() {
  return (
    <div className="aspect-[418/418] bg-gradient-to-b col-[3/span_2] from-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[12px] row-6 shrink-0 to-[rgba(255,255,255,0.49)]" data-name="2x2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[16px] relative size-full">
          <Frame13 />
          <Frame14 />
        </div>
      </div>
      
    </div>
  );
}

function VisWorkflow() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="vis-workflow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="vis-workflow">
          <path d={svgPaths.p3ddd46c0} fill="var(--fill-0, #3FC8A0)" id="î¦" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#3fc8a0] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[99px] shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        45
      </p>
    </div>
  );
}

function Component1X() {
  return (
    <div className="bg-[#f1fffc] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip p-[16px] relative rounded-[4px] shrink-0 size-[190px]" data-name="1x1">
      <VisWorkflow />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] text-black text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow
      </p>
      <Frame7 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#5093ef] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[99px] shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        45
      </p>
    </div>
  );
}

function Component1X1() {
  return (
    <div className="bg-[#f2f7ff] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip p-[16px] relative rounded-[4px] shrink-0 size-[190px]" data-name="1x1">
      <div className="content-stretch flex items-center justify-center px-[5px] py-[4px] relative shrink-0 size-[40px]" data-name="vis-notice">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 32">
            <path d={svgPaths.p103fb280} fill="var(--fill-0, #5093EF)" id="î¥" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] text-black text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Notice
      </p>
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#facb62] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[99px] shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        45
      </p>
    </div>
  );
}

function Component1X2() {
  return (
    <div className="bg-[rgba(250,203,98,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip p-[16px] relative rounded-[4px] shrink-0 size-[190px]" data-name="1x1">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="va-notifications">
        <div className="absolute inset-[3.13%_9.38%_6.25%_9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 36.25">
            <path d={svgPaths.p20c80d00} fill="var(--fill-0, #FACB62)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.5%_6.25%_62.5%_68.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p46c6500} fill="var(--fill-0, #FACB62)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] text-black text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Requests
      </p>
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#7f46f0] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[99px] shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        45
      </p>
    </div>
  );
}

function Component1X3() {
  return (
    <div className="bg-[rgba(127,70,240,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip p-[16px] relative rounded-[4px] shrink-0 size-[190px]" data-name="1x1">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="va-notifications">
        <div className="absolute inset-[3.13%_9.38%_6.25%_9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 36.25">
            <path d={svgPaths.p20c80d00} fill="var(--fill-0, #7F46F0)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.5%_6.25%_62.5%_68.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p46c6500} fill="var(--fill-0, #7F46F0)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] text-black text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Follow Ups
      </p>
      <Frame20 />
    </div>
  );
}

function Component2X2() {
  return (
    <div className="bg-gradient-to-b col-[5/span_2] from-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[12px] row-[6/span_2] self-stretch shrink-0 to-[rgba(255,255,255,0.49)]" data-name="2x2">
      
      
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[4px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Leads by Sales Region
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute h-[131px] left-[149px] top-[139px] w-[415px]">
      <div className="absolute inset-[-87.79%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 415 246">
          <g id="Frame 23639">
            <line id="Line 5" stroke="var(--stroke-0, #F7F7F7)" transform="matrix(-1.77689e-09 1 -1 -1.0753e-06 3.0625 0)" x2="246" y1="-0.5" y2="-0.5" />
            <line id="Line 6" stroke="var(--stroke-0, #F7F7F7)" transform="matrix(-1.77689e-09 1 -1 -1.0753e-06 53.0625 0)" x2="246" y1="-0.5" y2="-0.5" />
            <line id="Line 7" stroke="var(--stroke-0, #F7F7F7)" transform="matrix(-1.77689e-09 1 -1 -1.0753e-06 104.062 0)" x2="246" y1="-0.5" y2="-0.5" />
            <line id="Line 8" stroke="var(--stroke-0, #F7F7F7)" transform="matrix(-1.77689e-09 1 -1 -1.0753e-06 153.062 0)" x2="246" y1="-0.5" y2="-0.5" />
            <line id="Line 9" stroke="var(--stroke-0, #F7F7F7)" transform="matrix(-1.77689e-09 1 -1 -1.0753e-06 203.062 0)" x2="246" y1="-0.5" y2="-0.5" />
            <line id="Line 10" stroke="var(--stroke-0, #F7F7F7)" transform="matrix(-1.77689e-09 1 -1 -1.0753e-06 253.062 0)" x2="246" y1="-0.5" y2="-0.5" />
            <line id="Line 12" stroke="var(--stroke-0, #F7F7F7)" transform="matrix(-1.77689e-09 1 -1 -1.0753e-06 303.062 0)" x2="246" y1="-0.5" y2="-0.5" />
            <line id="Line 11" stroke="var(--stroke-0, #F7F7F7)" transform="matrix(-1.77689e-09 1 -1 -1.0753e-06 353.062 0)" x2="246" y1="-0.5" y2="-0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute h-[10px] left-[102px] top-[271px] w-[400px]">
      <div className="absolute inset-[0_-0.25%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 401 10">
          <g id="Frame 23638">
            <line id="Line 4" stroke="var(--stroke-0, black)" x1="0.5" x2="0.5" y1="2.18557e-08" y2="10" />
            <line id="Line 5" stroke="var(--stroke-0, black)" x1="50.5" x2="50.5" y1="2.18557e-08" y2="10" />
            <line id="Line 6" stroke="var(--stroke-0, black)" x1="100.5" x2="100.5" y1="2.18557e-08" y2="10" />
            <line id="Line 7" stroke="var(--stroke-0, black)" x1="150.5" x2="150.5" y1="2.18557e-08" y2="10" />
            <line id="Line 8" stroke="var(--stroke-0, black)" x1="200.5" x2="200.5" y1="2.18557e-08" y2="10" />
            <line id="Line 9" stroke="var(--stroke-0, black)" x1="250.5" x2="250.5" y1="2.18557e-08" y2="10" />
            <line id="Line 10" stroke="var(--stroke-0, black)" x1="300.5" x2="300.5" y1="2.18557e-08" y2="10" />
            <line id="Line 12" stroke="var(--stroke-0, black)" x1="350.5" x2="350.5" y1="2.18557e-08" y2="10" />
            <line id="Line 11" stroke="var(--stroke-0, black)" x1="400.5" x2="400.5" y1="2.18557e-08" y2="10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[333px] relative rounded-[8px] shrink-0 w-[581px]">
      <Frame42 />
      <div className="absolute bg-[#374073] h-[36px] left-[105px] top-[31px] w-[388px]" />
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[80px] text-[10px] text-black text-right top-[43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        America
      </p>
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[77px] text-[10px] text-black text-right top-[91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Kuwait
      </p>
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[77px] text-[10px] text-black text-right top-[139px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        UAE
      </p>
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[77px] text-[10px] text-black text-right top-[187px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        France
      </p>
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[77px] text-[10px] text-black text-right top-[235px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        England
      </p>
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[102.5px] text-[10px] text-black text-center top-[293px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0%
      </p>
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[153.5px] text-[10px] text-black text-center top-[293px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5%
      </p>
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[202.5px] text-[10px] text-black text-center top-[293px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        10%
      </p>
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[253.5px] text-[10px] text-black text-center top-[293px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        15%
      </p>
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[303.5px] text-[10px] text-black text-center top-[293px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        20%
      </p>
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[353.5px] text-[10px] text-black text-center top-[293px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        25%
      </p>
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[404.5px] text-[10px] text-black text-center top-[293px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        30%
      </p>
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[453.5px] text-[10px] text-black text-center top-[293px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        35%
      </p>
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[504.5px] text-[10px] text-black text-center top-[293px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        40%
      </p>
      <div className="absolute bg-[#5c6bc0] h-[36px] left-[105px] top-[79px] w-[144px]" />
      <div className="absolute bg-[#9da6d9] h-[36px] left-[105px] top-[127px] w-[107px]" />
      <div className="absolute bg-[#bdc3e5] h-[36px] left-[105px] top-[223px] w-[58px]" />
      <div className="absolute bg-[#9da6d9] h-[36px] left-[105px] top-[175px] w-[83px]" />
      <div className="absolute flex h-[253px] items-center justify-center left-[102px] top-[24px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[253px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 253 1">
                <line id="Line 1" stroke="var(--stroke-0, black)" x2="253" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[102px] top-[277px] w-[461px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 461 1">
            <line id="Line 2" stroke="var(--stroke-0, black)" x2="461" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame41 />
    </div>
  );
}

function Component3X() {
  return (
    <div className="bg-gradient-to-b col-9 from-[rgba(255,255,255,0.7)] relative rounded-[12px] row-[5/span_2] self-stretch shrink-0 to-[rgba(255,255,255,0.49)] w-[627px]" data-name="3x2">
      <div className="overflow-clip rounded-[inherit] size-full">
        
      </div>
      
    </div>
  );
}

function MaterialSymbolsMarkEmailUnreadOutlineRounded() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="material-symbols:mark-email-unread-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="material-symbols:mark-email-unread-outline-rounded">
          <path d={svgPaths.p1ff96250} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="relative shrink-0 text-[24px] text-black w-[66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inbox
      </p>
      <p className="min-w-full relative shrink-0 text-[#9f9f9f] text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        synced 5 mins ago
      </p>
    </div>
  );
}

function IcRoundPlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:round-plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:round-plus">
          <path d={svgPaths.p7fcb800} fill="var(--fill-0, #1F82FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <IcRoundPlus />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f83ff] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        New
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[52px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        01
      </p>
      <Frame3 />
    </div>
  );
}

function Component1X4() {
  return (
    <div className="bg-gradient-to-b col-1 from-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0 to-[rgba(255,255,255,0.49)]" data-name="1x1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
          <MaterialSymbolsMarkEmailUnreadOutlineRounded />
          <Frame5 />
          <Frame4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function VisTask() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="vis-task">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="vis-task">
          <path d={svgPaths.pf4889f0} fill="var(--fill-0, black)" id="î¦" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        My Tasks
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[30px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        03
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <VisTask />
      <Frame47 />
    </div>
  );
}

function MajesticonsOpenLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="majesticons:open-line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="majesticons:open-line">
          <path d={svgPaths.p391616e0} id="Vector" stroke="var(--stroke-0, #1F83FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="min-w-[360px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-w-[inherit] p-[16px] relative w-full">
          <Frame48 />
          <MajesticonsOpenLine />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e2e2] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VisTaskassigned() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="vis-taskassigned">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="vis-taskassigned">
          <path d={svgPaths.p255c6000} fill="var(--fill-0, black)" id="î¦" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned Tasks
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[30px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        03
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <VisTaskassigned />
      <Frame50 />
    </div>
  );
}

function MajesticonsOpenLine1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="majesticons:open-line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="majesticons:open-line">
          <path d={svgPaths.p391616e0} id="Vector" stroke="var(--stroke-0, #1F83FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="min-w-[360px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-w-[inherit] p-[16px] relative w-full">
          <Frame49 />
          <MajesticonsOpenLine1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e2e2] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VisAppointment() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="vis-appointment">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="vis-appointment">
          <path d={svgPaths.p28219800} fill="var(--fill-0, black)" id="î¤" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Upcoming Appointments
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[30px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        03
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <VisAppointment />
      <Frame52 />
    </div>
  );
}

function MajesticonsOpenLine2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="majesticons:open-line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="majesticons:open-line">
          <path d={svgPaths.p391616e0} id="Vector" stroke="var(--stroke-0, #1F83FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="min-w-[360px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-w-[inherit] p-[16px] relative w-full">
          <Frame51 />
          <MajesticonsOpenLine2 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full">
      <div className="content-stretch flex flex-col items-start justify-between py-[24px] relative size-full">
        <Frame24 />
        <Frame25 />
        <Frame26 />
      </div>
    </div>
  );
}

function Component2X3() {
  return (
    <div className="bg-gradient-to-b col-[1/span_3] from-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[8px] row-[1/span_2] self-stretch shrink-0 to-[rgba(255,255,255,0.49)]" data-name="2x2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <Frame23 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="relative shrink-0 text-[24px] text-black w-[66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lost Leads
      </p>
      <p className="min-w-full relative shrink-0 text-[#9f9f9f] text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Past 12 Months
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[#ed1c24] text-[70px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        02
      </p>
    </div>
  );
}

function Component1X5() {
  return (
    <div className="bg-gradient-to-b col-6 from-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[8px] row-3 self-stretch shrink-0 to-[rgba(255,255,255,0.49)]" data-name="1x1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
          <Frame6 />
          <Frame27 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="relative shrink-0 text-[24px] text-black w-[87px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Closed Leads
      </p>
      <p className="min-w-full relative shrink-0 text-[#9f9f9f] text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Past 12 Months
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[#019d89] text-[70px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        03
      </p>
    </div>
  );
}

function Component1X6() {
  return (
    <div className="bg-gradient-to-b col-5 from-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[8px] row-3 self-stretch shrink-0 to-[rgba(255,255,255,0.49)]" data-name="1x1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
          <Frame28 />
          <Frame29 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="relative shrink-0 text-[24px] text-black w-[66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total Leads
      </p>
      <p className="min-w-full relative shrink-0 text-[#9f9f9f] text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Past 12 Months
      </p>
    </div>
  );
}

function IcRoundPlus1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:round-plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:round-plus">
          <path d={svgPaths.p7fcb800} fill="var(--fill-0, #1F82FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <IcRoundPlus1 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#106ab0] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lead
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[70px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        05
      </p>
      <Frame32 />
    </div>
  );
}

function Component1X7() {
  return (
    <div className="bg-gradient-to-b col-4 from-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[8px] row-3 self-stretch shrink-0 to-[rgba(255,255,255,0.49)]" data-name="1x1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
          <Frame30 />
          <Frame31 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MaterialSymbolsMarkEmailUnreadOutlineRounded1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="material-symbols:mark-email-unread-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="material-symbols:mark-email-unread-outline-rounded">
          <path d={svgPaths.p38101b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[286px]">
      <MaterialSymbolsMarkEmailUnreadOutlineRounded1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inbox
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame68 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0083da] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Compose Email
      </p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unread Emails
      </p>
      <p className="relative shrink-0 text-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        02
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] px-[8px] py-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Maya Chen
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            QA Staffing plan discussion
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] px-[8px] py-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Maya Chen
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            QA Staffing plan discussion
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Frame54 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[rgba(180,222,244,0.2)] col-1 h-[342px] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative size-full">
          <Frame53 />
          <Frame67 />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Emails Reply Due
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        03
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] px-[8px] py-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Kevin Smith
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            QA Staffing plan discussion
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] px-[8px] py-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Mack Rod
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            QA Staffing plan discussion
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] px-[8px] py-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Maya Chen
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            QA Staffing plan discussion
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[rgba(255,226,210,0.2)] col-2 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <Frame55 />
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="flex-[1_0_0] gap-x-[20px] gap-y-[30px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] min-h-px min-w-px relative w-full">
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative rounded-[4px] w-full">
      <Frame34 />
      <Frame43 />
    </div>
  );
}

function Component2X4() {
  return (
    <div className="bg-gradient-to-b col-[1/span_3] from-[rgba(255,255,255,0.7)] h-[412px] justify-self-stretch relative rounded-[12px] row-[3/span_2] self-start shrink-0 to-[rgba(255,255,255,0.49)]" data-name="2x2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <Frame33 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function MajesticonsCalendarLine() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="majesticons:calendar-line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="majesticons:calendar-line">
          <path d={svgPaths.p18763680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[286px]">
      <MajesticonsCalendarLine />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calendar
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame70 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0083da] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        All Events
      </p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Today
      </p>
      <p className="relative shrink-0 text-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        02
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] overflow-clip py-[16px] relative rounded-[inherit] text-black text-center w-full whitespace-nowrap">
        <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Aziz Tech Demo
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          03:00 pm on Teams
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] overflow-clip py-[16px] relative rounded-[inherit] text-black text-center w-full whitespace-nowrap">
        <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          KM Demo Prep
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          5:30 pm
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame39 />
      <Frame60 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[rgba(211,244,180,0.2)] col-1 h-[342px] justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative size-full">
          <Frame58 />
          <Frame72 />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Upcoming
      </p>
      <p className="relative shrink-0 text-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        11
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] px-[8px] py-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            DK Boiler Demo
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            05:00 PM, 12 Jan 2026
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] px-[8px] py-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Followup Kenneth
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            09:30 PM, 14 Jan, 2026
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] px-[8px] py-[16px] relative text-black text-center w-full whitespace-nowrap">
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Weekly Vendors Meet
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            04:00 PM, 14 Jan, 2026
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ececec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame40 />
      <Frame63 />
      <Frame64 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[rgba(210,240,255,0.3)] col-2 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <Frame62 />
          <Frame75 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="flex-[1_0_0] gap-x-[20px] gap-y-[30px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] min-h-px min-w-px relative w-full">
      <Frame71 />
      <Frame74 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative rounded-[4px] w-full">
      <Frame38 />
      <Frame44 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="website-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="website-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="var(--fill-0, #1F83FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame81() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="linkedin-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="linkedin-icon">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="var(--fill-0, #0077B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="email-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="email-icon">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="var(--fill-0, #EA4335)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Website
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        128
      </p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LinkedIn
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        86
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-black text-center whitespace-nowrap">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email Campaign
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        54
      </p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-between min-w-[inherit] p-[16px] relative w-full">
          <Frame80 />
          <Frame83 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e2e2] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame87() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-between min-w-[inherit] p-[16px] relative w-full">
          <Frame81 />
          <Frame84 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e2e2] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame88() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-between min-w-[inherit] p-[16px] relative w-full">
          <Frame82 />
          <Frame85 />
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full">
      <div className="content-stretch flex flex-col items-start justify-between py-[24px] relative size-full">
        <Frame86 />
        <Frame87 />
        <Frame88 />
      </div>
    </div>
  );
}

function Component3X2LeadSources() {
  const leadSources = [
    { source: "Website", count: 128, percentage: 40, accent: "#1F83FF" },
    { source: "LinkedIn", count: 86, percentage: 27, accent: "#0077B5" },
    { source: "Email Campaign", count: 54, percentage: 17, accent: "#EA4335" },
    { source: "Referral", count: 32, percentage: 10, accent: "#22C55E" },
    { source: "Walk-In", count: 20, percentage: 6, accent: "#F59E0B" },
  ];

  return (
    <div className="bg-gradient-to-b col-[4/span_3] from-[rgba(255,255,255,0.7)] relative rounded-[12px] row-[1/span_2] self-stretch shrink-0 to-[rgba(255,255,255,0.49)]" data-name="3x2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[18px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Lead Sources
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-[#717182] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Count and contribution share
              </p>
            </div>
            <div className="bg-white/70 border border-white/80 rounded-[10px] px-[12px] py-[8px] shrink-0">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[11px] text-[#717182] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Total Leads
              </p>
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                320
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between px-[12px] relative shrink-0 w-full">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[12px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Leads by Source
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[12px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Count / %
            </p>
          </div>
          <div className="content-stretch flex flex-col relative shrink-0 w-full">
            {leadSources.map((item, index) => (
              <>
                <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
                  <div className="content-stretch flex items-center gap-[10px] min-w-0 relative shrink-0">
                    <div className="rounded-full shrink-0 size-[10px]" style={{ backgroundColor: item.accent }} />
                    <div className="content-stretch flex flex-col gap-[4px] min-w-0 relative shrink-0 w-[220px]">
                      <div className="content-stretch flex items-center justify-between gap-[6px] relative shrink-0 w-full">
                        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-0 overflow-hidden text-[13px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.source}
                        </p>
                        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.count}
                        </p>
                      </div>
                      <div className="bg-[#dbe8f1] h-[4px] overflow-hidden relative rounded-full shrink-0 w-full">
                        <div className="absolute inset-y-0 left-0 rounded-full" style={{ backgroundColor: item.accent, width: `${item.percentage}%` }} />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-[#0f172a] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.percentage}%
                  </p>
                </div>
                {index < leadSources.length - 1 && <div className="h-[1px] bg-[#e2e2e2] w-full my-[4px]" />}
              </>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Component2X5() {
  return (
    <div className="bg-gradient-to-b col-[7/span_3] from-[rgba(255,255,255,0.7)] h-[412px] justify-self-stretch relative rounded-[12px] row-[1/span_2] self-start shrink-0 to-[rgba(255,255,255,0.49)]" data-name="2x2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <Frame37 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Component6X2OpportunityFunnel() {
  const funnelStages = [
    { label: "Leads", count: 320, rate: "100%", accent: "#1F83FF", width: "100%" },
    { label: "Qualified", count: 214, rate: "67%", accent: "#38BDF8", width: "78%" },
    { label: "Proposal", count: 126, rate: "39%", accent: "#34D399", width: "58%" },
    { label: "Negotiation", count: 74, rate: "23%", accent: "#F59E0B", width: "38%" },
    { label: "Deals Won", count: 31, rate: "10%", accent: "#0F9D89", width: "20%" },
  ];

  return (
    <div className="bg-gradient-to-b col-[4/span_6] from-[rgba(255,255,255,0.7)] relative rounded-[12px] row-[5/span_2] self-stretch shrink-0 to-[rgba(255,255,255,0.49)]" data-name="6x2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-center p-[18px] relative size-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Opportunity Funnel
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[12px] text-[#717182] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Lead to deal flow across the current pipeline
              </p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <div className="bg-white/75 border border-white/80 rounded-[10px] px-[12px] py-[8px]">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[11px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Win Rate
                </p>
                <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  9.7%
                </p>
              </div>
              <div className="bg-white/75 border border-white/80 rounded-[10px] px-[12px] py-[8px]">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[11px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Avg. Deal Cycle
                </p>
                <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  24 Days
                </p>
              </div>
            </div>
          </div>

          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            {funnelStages.map((stage, index) => (
              <div className="content-stretch flex items-center flex-[1_0_0] gap-[10px] relative" key={stage.label}>
                <div className="bg-white/65 border border-white/70 rounded-[12px] flex-[1_0_0] min-h-[128px] min-w-0 relative">
                  <div className="content-stretch flex flex-col gap-[14px] items-start p-[14px] relative size-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex items-center gap-[8px] min-w-0 relative shrink-0">
                        <div className="rounded-full shrink-0 size-[10px]" style={{ backgroundColor: stage.accent }} />
                        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-0 overflow-hidden text-[14px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {stage.label}
                        </p>
                      </div>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] text-[13px] text-[#717182] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {stage.rate}
                      </p>
                    </div>
                    <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] text-[34px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {stage.count}
                    </p>
                    <div className="bg-[#deebf4] h-[8px] overflow-hidden relative rounded-full shrink-0 w-full">
                      <div className="absolute inset-y-0 left-0 rounded-full" style={{ backgroundColor: stage.accent, width: stage.width }} />
                    </div>
                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[11px] text-[#717182] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {index === 0 ? "All captured opportunities" : `Conversion from ${funnelStages[index - 1].label}`}
                    </p>
                  </div>
                </div>
                {index < funnelStages.length - 1 && (
                  <div className="flex items-center justify-center shrink-0 w-[18px]">
                    <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 18 18">
                      <path d="M4 9H14" stroke="#9FB6C8" strokeLinecap="round" strokeWidth="1.8" />
                      <path d="M10.5 5.5L14 9L10.5 12.5" stroke="#9FB6C8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white/55 border border-white/70 rounded-[12px] content-stretch flex items-center justify-between px-[16px] py-[12px] relative shrink-0 w-full">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[13px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Biggest drop-off appears between qualified opportunities and proposal-ready deals.
            </p>
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] text-[14px] text-[#0F9D89] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Focus area: Qualification to Proposal
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

// Social Media Analytics Widget Components
function SocialMediaIcon({ platform }: { platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' }) {
  const icons = {
    facebook: (
      <svg className="size-[32px]" viewBox="0 0 24 24" fill="none">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" fill="#1877F2"/>
      </svg>
    ),
    twitter: (
      <svg className="size-[32px]" viewBox="0 0 24 24" fill="none">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#000000"/>
      </svg>
    ),
    instagram: (
      <svg className="size-[32px]" viewBox="0 0 24 24" fill="none">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="url(#instagram-gradient)"/>
        <defs>
          <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FD5949"/>
            <stop offset="50%" stopColor="#D6249F"/>
            <stop offset="100%" stopColor="#285AEB"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    linkedin: (
      <svg className="size-[32px]" viewBox="0 0 24 24" fill="none">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
      </svg>
    ),
  };
  return icons[platform];
}

function SocialMediaStat({ platform, followers, engagement, growth }: { platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin', followers: string, engagement: string, growth: string }) {
  const isPositive = growth.startsWith('+');
  return (
    <div className="flex items-center justify-between w-full p-[12px] bg-white rounded-[8px] border border-[#ececec]">
      <div className="flex items-center gap-[12px]">
        <SocialMediaIcon platform={platform} />
        <div className="flex flex-col gap-[2px]">
          <p className="font-['Roboto:Bold',sans-serif] font-bold text-[16px] text-black capitalize" style={{ fontVariationSettings: "'wdth' 100" }}>
            {platform}
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {followers} followers
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-[2px]">
        <p className="font-['Roboto:Bold',sans-serif] font-bold text-[14px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
          {engagement}%
        </p>
        <p className={`font-['Roboto:Regular',sans-serif] font-normal text-[12px] ${isPositive ? 'text-[#22C55E]' : 'text-[#EF4444]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          {growth}%
        </p>
      </div>
    </div>
  );
}

function SocialMediaHeader() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative w-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Instagram Analytics
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialMediaOverview() {
  return (
    <div className="flex items-center justify-between w-full p-[16px] bg-gradient-to-r from-[#E4405F] to-[#C13584] rounded-[8px]">
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-white/80" style={{ fontVariationSettings: "'wdth' 100" }}>
          Followers
        </p>
        <p className="font-['Roboto:Bold',sans-serif] font-bold text-[28px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          1.2M
        </p>
      </div>
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-white/80" style={{ fontVariationSettings: "'wdth' 100" }}>
          Engagement
        </p>
        <p className="font-['Roboto:Bold',sans-serif] font-bold text-[28px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          6.2%
        </p>
      </div>
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-white/80" style={{ fontVariationSettings: "'wdth' 100" }}>
          Growth
        </p>
        <p className="font-['Roboto:Bold',sans-serif] font-bold text-[28px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          +15.4%
        </p>
      </div>
    </div>
  );
}

function InstagramMetric({ label, value, subtext }: { label: string, value: string, subtext?: string }) {
  return (
    <div className="flex flex-col gap-[4px] p-[12px] bg-white rounded-[8px] border border-[#ececec]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        {value}
      </p>
      {subtext && (
        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[11px] text-[#22C55E]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {subtext}
        </p>
      )}
    </div>
  );
}

function SocialMediaContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
      <SocialMediaOverview />
      <div className="grid grid-cols-2 gap-[6px] w-full">
        <InstagramMetric label="Posts This Month" value="24" subtext="+12% vs last month" />
        <InstagramMetric label="Avg. Likes" value="8.4K" subtext="+5.2% increase" />
        <InstagramMetric label="Comments" value="1.2K" subtext="+18% increase" />
        <InstagramMetric label="Story Views" value="450K" subtext="+22% increase" />
      </div>
    </div>
  );
}

function SocialMediaWidget() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start p-[12px] relative w-full">
      <SocialMediaHeader />
      <SocialMediaContent />
    </div>
  );
}

function ComponentSocialMedia() {
  return (
    <div className="bg-gradient-to-b col-[7/span_3] from-[rgba(255,255,255,0.7)] justify-self-stretch relative rounded-[12px] row-[3/span_2] self-stretch shrink-0 to-[rgba(255,255,255,0.49)]" data-name="social-media">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <SocialMediaWidget />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(9,minmax(0,1fr))] grid-rows-[repeat(7,minmax(0,1fr))] h-[1472px] left-0 overflow-clip top-0 w-[1836px]">
      <Component2X3 />
      <Component1X5 />
      <Component1X6 />
      <Component1X7 />
      <Component2X4 />
      <Component2X5 />
      <ComponentSocialMedia />
      <Component3X2LeadSources />
      <Component6X2OpportunityFunnel />
    </div>
  );
}

function Slot1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Slot">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="expand-icon">
            <div className="absolute inset-[20%_10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 14.4">
                <path d={svgPaths.p36d2b00} fill="var(--fill-0, #0083DA)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsMarkEmailUnreadOutlineRounded2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:mark-email-unread-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:mark-email-unread-outline-rounded">
          <path d={svgPaths.p123f6b80} fill="var(--fill-0, #0083DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OcticonTasklist() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="octicon:tasklist-24">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="octicon:tasklist-24">
          <path d={svgPaths.p35f59a80} fill="var(--fill-0, #0083DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Slot2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 size-[24px]" data-name="Slot">
      <MaterialSymbolsMarkEmailUnreadOutlineRounded2 />
      <OcticonTasklist />
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 size-[48px]" data-name="Left Icon">
      <Slot2 />
    </div>
  );
}

function IxCustomer() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ix:customer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ix:customer">
          <path clipRule="evenodd" d={svgPaths.p37997c00} fill="var(--fill-0, #0083DA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Slot3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[24px]" data-name="Slot">
      <IxCustomer />
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 size-[48px]" data-name="Left Icon">
      <Slot3 />
    </div>
  );
}

function CiCalendar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ci:calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ci:calendar">
          <path d={svgPaths.pafbcec0} id="Vector" stroke="var(--stroke-0, #0083DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IxCustomer1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ix:customer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ix:customer">
          <path clipRule="evenodd" d={svgPaths.p37997c00} fill="var(--fill-0, #0083DA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Slot4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 size-[24px]" data-name="Slot">
      <CiCalendar />
      <IxCustomer1 />
    </div>
  );
}

function LeftIcon2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 size-[48px]" data-name="Left Icon">
      <Slot4 />
    </div>
  );
}

function OcticonTasklist1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="octicon:tasklist-24">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="octicon:tasklist-24">
          <path d={svgPaths.p35f59a80} fill="var(--fill-0, #0083DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Slot5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[24px]" data-name="Slot">
      <OcticonTasklist1 />
    </div>
  );
}

function LeftIcon3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 size-[48px]" data-name="Left Icon">
      <Slot5 />
    </div>
  );
}

function MdiLeadsOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:leads-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:leads-outline">
          <path d={svgPaths.p144ddb80} fill="var(--fill-0, #0083DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OcticonTasklist2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="octicon:tasklist-24">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="octicon:tasklist-24">
          <path d={svgPaths.p35f59a80} fill="var(--fill-0, #0083DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Slot6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 size-[24px]" data-name="Slot">
      <MdiLeadsOutline />
      <OcticonTasklist2 />
    </div>
  );
}

function LeftIcon4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 size-[48px]" data-name="Left Icon">
      <Slot6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_14.58%_8.33%_18.75%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
          <g id="Group">
            <path d={svgPaths.p3bae6800} id="Vector" stroke="var(--stroke-0, #0083DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M5 5H12V10H5V5Z" id="Vector_2" stroke="var(--stroke-0, #0083DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineDocDetail() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-park-outline:doc-detail">
      <Group2 />
    </div>
  );
}

function OcticonTasklist3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="octicon:tasklist-24">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="octicon:tasklist-24">
          <path d={svgPaths.p35f59a80} fill="var(--fill-0, #0083DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Slot7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 size-[24px]" data-name="Slot">
      <IconParkOutlineDocDetail />
      <OcticonTasklist3 />
    </div>
  );
}

function LeftIcon5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 size-[48px]" data-name="Left Icon">
      <Slot7 />
    </div>
  );
}

function OpportunityIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="opportunity-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="opportunity-icon">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="var(--fill-0, #0083DA)" />
        </g>
      </svg>
    </div>
  );
}

function Slot8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[24px]" data-name="Slot">
      <OpportunityIcon />
    </div>
  );
}

function SettingsIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="settings-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="settings-icon">
          <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.65 2.57 9.61 2.81L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33C5.02 5.25 4.77 5.33 4.65 5.55L2.74 8.87C2.62 9.08 2.66 9.34 2.86 9.48L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="var(--fill-0, #0083DA)" />
        </g>
      </svg>
    </div>
  );
}

function Slot9() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[24px]" data-name="Slot">
      <SettingsIcon />
    </div>
  );
}

function IconWithTooltip({ children, label }: { children: ReactNode; label: string }) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div 
      className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 size-[48px] hover:bg-gradient-to-b hover:from-[rgba(255,255,255,0.7)] hover:to-[rgba(255,255,255,0.49)] cursor-pointer transition-all group" 
      data-name="Left Icon"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="overflow-clip size-[24px]">
        {children}
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity" />
      {showTooltip && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-2 bg-[rgba(0,0,0,0.9)] text-white text-[14px] font-medium whitespace-nowrap rounded-md z-[1000] pointer-events-none shadow-lg font-['Roboto',sans-serif]">
          {label}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-[rgba(0,0,0,0.9)]" />
        </div>
      )}
    </div>
  );
}

type ScreenMode = "home" | "crm";

type AppView = "dashboard" | "salesProposal" | "opportunities" | "prospects" | "tasks" | "calendar";
type MenuItemId = "inbox" | "customers" | "calendar" | "tasks" | "prospects" | "salesProposal" | "opportunities" | "settings";

type ProposalStatus = "Accepted" | "Rejected" | "Draft" | "Sent";

type ProposalRecord = {
  id: string;
  company: string;
  clientName: string;
  contactPerson: string;
  title: string;
  amount: string;
  status: ProposalStatus;
  owner: string;
  ownerRole: string;
  updatedAt: string;
  lastViewed: string;
  validUntil: string;
  probability: string;
  notes: string;
  sections: Array<{ label: string; value: string }>;
  lineItems: Array<{
    item: string;
    quantity: number;
    price: string;
    discount: string;
    total: string;
  }>;
  totals: {
    subtotal: string;
    tax: string;
    total: string;
  };
  activities: Array<{
    title: string;
    meta: string;
    actor: string;
    description: string;
    changes?: string[];
  }>;
};

function parseCurrency(value: string) {
  const numeric = Number(value.replace(/[^0-9.-]+/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function parseDiscount(value: string) {
  const numeric = Number(value.replace(/[^0-9.-]+/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function formatCurrency(value: number) {
  return `$ ${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function getProbabilityTone(probability: string) {
  const numeric = Number(probability.replace(/[^0-9.]+/g, ""));

  if (numeric >= 70) {
    return {
      card: "border-[#cdebd8] bg-[#effaf3]",
      value: "text-[#17724d]",
      meta: "text-[#4f7a61]",
    };
  }

  if (numeric >= 40) {
    return {
      card: "border-[#ffe3b5] bg-[#fff7e8]",
      value: "text-[#9b6a00]",
      meta: "text-[#8c7343]",
    };
  }

  return {
    card: "border-[#f3cdd8] bg-[#fff1f5]",
    value: "text-[#9b2d6f]",
    meta: "text-[#8c5b73]",
  };
}

function getOpportunityActivityTypeMeta(type: string) {
  if (type === "call") {
    return {
      label: "Call",
      icon: <Phone className="size-[14px]" strokeWidth={1.8} />,
      badge: "bg-[#eef7ff] text-[#0b67a3]",
    };
  }

  if (type === "meeting") {
    return {
      label: "Meeting",
      icon: <CalendarDays className="size-[14px]" strokeWidth={1.8} />,
      badge: "bg-[#effaf3] text-[#17724d]",
    };
  }

  return {
    label: "Email",
    icon: <Mail className="size-[14px]" strokeWidth={1.8} />,
    badge: "bg-[#fff4df] text-[#9b6a00]",
  };
}

function GlassPanel({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`bg-gradient-to-b from-[rgba(255,255,255,0.76)] to-[rgba(255,255,255,0.52)] border-2 border-white rounded-[12px] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

function HomeQuickAction({
  title,
  cta,
}: {
  title: string;
  cta: string;
}) {
  return (
    <button
      className="h-[80px] w-[200px] rounded-[8px] border-2 border-[#0068a5] bg-[rgba(255,255,255,0.32)] px-[8px] py-[4px] text-left transition-all hover:bg-white/55"
      type="button"
    >
      <div className="flex h-full flex-col justify-center p-[8px]">
        <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
        <p className="mt-[8px] font-['Roboto:Bold',sans-serif] text-[14px] text-[#0060ac]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {cta}
        </p>
      </div>
    </button>
  );
}

function HomeResourceTile({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <GlassPanel className="flex h-full flex-col items-center justify-between p-[18px] text-center">
      <div className="flex size-[80px] items-center justify-center">
        {icon}
      </div>
      <div className="w-full">
        <p className="font-['Roboto:Regular',sans-serif] text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
        <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#b1b1b1]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {subtitle}
        </p>
      </div>
    </GlassPanel>
  );
}

function HomeManagerCard({
  title,
  name,
  email,
  phone,
}: {
  title: string;
  name: string;
  email: string;
  phone: string;
}) {
  return (
    <GlassPanel className="flex h-full flex-col gap-[16px] px-[20px] py-[16px]">
      <p className="font-['Roboto:Regular',sans-serif] text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        {title}
      </p>
      <div className="flex flex-1 items-start gap-[10px] min-h-0">
        <div className="flex size-[70px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#ffffff_0%,#e6f4ff_100%)] text-[#1f83ff] shadow-[inset_0_0_0_1px_rgba(0,131,218,0.14)]">
          <UserRound className="size-[30px]" strokeWidth={1.7} />
        </div>
        <div className="min-w-0">
          <p className="font-['Roboto:Bold',sans-serif] text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            {name}
          </p>
          <p className="mt-[6px] break-all font-['Roboto:Regular',sans-serif] text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            {email}
          </p>
          <p className="mt-[6px] font-['Roboto:Regular',sans-serif] text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            {phone}
          </p>
        </div>
      </div>
      <button className="self-start font-['Roboto:Bold',sans-serif] text-[13px] text-[#106ab0]" style={{ fontVariationSettings: "'wdth' 100" }} type="button">
        Do you have any question?
      </button>
    </GlassPanel>
  );
}

function HomeBlogPanel() {
  return (
    <GlassPanel className="flex h-full flex-col p-[10px]">
      <div className="flex items-center justify-between px-[6px] pb-[10px]">
        <p className="font-['Roboto:Regular',sans-serif] text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
          Latest Blog
        </p>
        <button className="flex items-center gap-[6px] text-[#0060ac]" type="button">
          <ExternalLink className="size-[13px]" strokeWidth={1.8} />
          <span className="font-['Roboto:Regular',sans-serif] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Open Blog Site
          </span>
        </button>
      </div>
      <div className="grid flex-1 grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] gap-[12px]">
        <div className="flex flex-col">
          <div className="relative h-[108px] overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#0b2b45_0%,#0f5c87_60%,#6bc8ff_120%)]">
            <div className="absolute left-[12px] top-[10px] rounded-full bg-[rgba(255,255,255,0.92)] px-[8px] py-[3px] font-['Roboto:Bold',sans-serif] text-[9px] uppercase tracking-[0.5px] text-[#115e59]">
              Data Strategy
            </div>
            <div className="absolute inset-x-[20px] inset-y-[20px] rounded-[12px] border border-white/20 bg-[radial-gradient(circle_at_top,rgba(120,220,255,0.28),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />
          </div>
          <p className="mt-[12px] font-['Roboto:Regular',sans-serif] text-[18px] text-[#2a343a]" style={{ fontVariationSettings: "'wdth' 100" }}>
            The Future of Atmospheric Data Modeling
          </p>
          <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[13px] leading-[20px] text-[#566167]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Explore how neural networks are reshaping the way teams read large-scale environmental data and make better predictions.
          </p>
          <button className="mt-auto pt-[14px] text-left font-['Roboto:Bold',sans-serif] text-[11px] uppercase tracking-[1px] text-[#0060ac]" style={{ fontVariationSettings: "'wdth' 100" }} type="button">
            Read Article
          </button>
        </div>

        <div className="flex flex-col">
          <div className="relative h-[108px] overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#2a6b8f_0%,#83c6eb_100%)]">
            <div className="absolute left-[10px] top-[10px] rounded-full bg-[rgba(255,255,255,0.92)] px-[8px] py-[3px] font-['Roboto:Bold',sans-serif] text-[9px] uppercase tracking-[0.5px] text-[#115e59]">
              Culture
            </div>
            <div className="absolute inset-[18px] rounded-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.04))]" />
          </div>
          <p className="mt-[12px] font-['Roboto:Regular',sans-serif] text-[18px] text-[#2a343a]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Scaling Your Data Function
          </p>
          <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[13px] leading-[20px] text-[#566167]" style={{ fontVariationSettings: "'wdth' 100" }}>
            How leading tech firms balance rapid development with sustainable growth and stronger delivery operations.
          </p>
          <button className="mt-auto pt-[14px] text-left font-['Roboto:Bold',sans-serif] text-[11px] uppercase tracking-[1px] text-[#0060ac]" style={{ fontVariationSettings: "'wdth' 100" }} type="button">
            Read Article
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-[4px] pt-[10px]">
        <button className="text-[#1f83ff]" type="button">
          <ChevronLeft className="size-[16px]" strokeWidth={1.8} />
        </button>
        <div className="flex items-center gap-[4px]">
          <div className="size-[7px] rounded-full bg-[#1d1d1d]" />
          <div className="size-[7px] rounded-full bg-[#d4d4d4]" />
        </div>
        <button className="text-[#1f83ff]" type="button">
          <ChevronRight className="size-[16px]" strokeWidth={1.8} />
        </button>
      </div>
    </GlassPanel>
  );
}

function HomeTicketsPanel() {
  const items = [
    { label: "Total Tickets", value: "03", icon: <Ticket className="size-[18px] text-[#141414]" strokeWidth={1.7} /> },
    { label: "Waiting on Customer", value: "00", icon: <Hourglass className="size-[18px] text-[#141414]" strokeWidth={1.7} /> },
    { label: "Resolved Tickets", value: "01", icon: <BadgeCheck className="size-[18px] text-[#141414]" strokeWidth={1.7} /> },
  ];

  return (
    <GlassPanel className="flex h-full flex-col p-[16px]">
      <div className="flex items-center justify-between">
        <p className="font-['Roboto:Regular',sans-serif] text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
          My Tickets
        </p>
        <button className="flex items-center gap-[6px] text-[#1f83ff]" type="button">
          <Plus className="size-[14px]" strokeWidth={2} />
          <span className="font-['Roboto:Regular',sans-serif] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Create New
          </span>
        </button>
      </div>
      <div className="mt-[10px] flex flex-1 flex-col">
        {items.map((item, index) => (
          <div
            className={`flex items-center justify-between py-[20px] ${index !== items.length - 1 ? "border-b border-solid border-[#e5edf3]" : ""}`}
            key={item.label}
          >
            <div className="flex items-center gap-[12px]">
              {item.icon}
              <div>
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {item.label}
                </p>
                <p className="mt-[4px] font-['Roboto:Bold',sans-serif] text-[22px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {item.value}
                </p>
              </div>
            </div>
            <ExternalLink className="size-[14px] text-[#1f83ff]" strokeWidth={1.9} />
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}

function HomeView() {
  return (
    <div className="h-full overflow-auto px-[12px] pb-[14px]">
      <div className="mx-auto min-w-[1200px] max-w-[1836px]">
        <div className="grid grid-cols-9 grid-rows-[136px_200px_200px] gap-x-[12px] gap-y-[12px] w-full">
        <div className="col-[1/span_6] flex items-center px-[8px]">
          <div>
            <p className="font-['Roboto:Regular',sans-serif] text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Welcome
            </p>
            <p className="font-['Roboto:Medium',sans-serif] text-[34px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Kevin Duos!
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.5)]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Partner
            </p>
          </div>
        </div>

        <div className="col-[7/span_3] flex items-center justify-end gap-[16px]">
          <HomeQuickAction cta="Demo Link" title="Your default demo link" />
          <HomeQuickAction cta="Apply new Key" title="Need a new key?" />
        </div>

        <div className="col-[1/span_2] row-[2/span_2] h-full">
          <HomeTicketsPanel />
        </div>

        <div className="col-3 row-2 h-full">
          <HomeResourceTile
            icon={<Package2 className="size-[38px] text-[#111111]" strokeWidth={1.8} />}
            subtitle="Updated on 23 Jan, 2026"
            title="Partner Kit"
          />
        </div>
        <div className="col-4 row-2 h-full">
          <HomeResourceTile
            icon={<NotebookText className="size-[38px] text-[#111111]" strokeWidth={1.8} />}
            subtitle="Updated on 23 Jan, 2026"
            title="Release Notes"
          />
        </div>
        <div className="col-5 row-2 h-full">
          <HomeResourceTile
            icon={<GraduationCap className="size-[38px] text-[#111111]" strokeWidth={1.8} />}
            subtitle="Learn by completing course"
            title="LMS"
          />
        </div>
        <div className="col-6 row-2 h-full">
          <HomeResourceTile
            icon={<Github className="size-[38px] text-[#111111]" strokeWidth={1.8} />}
            subtitle="Updated on 23 Jan, 2026"
            title="Source code"
          />
        </div>

        <div className="col-[7/span_3] row-[2/span_2] h-full">
          <HomeBlogPanel />
        </div>

        <div className="col-[3/span_2] row-3 h-full">
          <HomeManagerCard
            email="gunther.wilken@viennaadvantage.com"
            name="Gunther Wilken"
            phone="+491724126441"
            title="Know Your Partner Manager"
          />
        </div>
        <div className="col-[5/span_2] row-3 h-full">
          <HomeManagerCard
            email="kasif.ahmed@viennaadvantage.com"
            name="Kasif Ahmed"
            phone="+491724126441"
            title="Know Your Technical Manager"
          />
        </div>
        </div>
      </div>
    </div>
  );
}

function LeftMenu({
  activeItem,
  isDashboardActive,
  onGoDashboard,
  onNavigate,
}: {
  activeItem: MenuItemId | null;
  isDashboardActive: boolean;
  onGoDashboard: () => void;
  onNavigate: (view: AppView, item: MenuItemId) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const menuItems = [
    { id: "inbox" as MenuItemId, label: "Inbox", icon: <Slot2 />, view: "dashboard" as AppView },
    { id: "customers" as MenuItemId, label: "Customers", icon: <Slot3 />, view: "dashboard" as AppView },
    { id: "calendar" as MenuItemId, label: "Calendar", icon: <Slot4 />, view: "calendar" as AppView },
    { id: "tasks" as MenuItemId, label: "Tasks", icon: <Slot5 />, view: "tasks" as AppView },
    { id: "prospects" as MenuItemId, label: "Prospects", icon: <Slot6 />, view: "prospects" as AppView },
    { id: "salesProposal" as MenuItemId, label: "Sales Proposal", icon: <Slot7 />, view: "salesProposal" as AppView },
    { id: "opportunities" as MenuItemId, label: "Opportunities", icon: <Slot8 />, view: "opportunities" as AppView },
    { id: "settings" as MenuItemId, label: "Settings", icon: <Slot9 />, view: "dashboard" as AppView },
  ];

  return (
    <>
      {/* Collapsed Menu */}
      <div className="absolute content-stretch flex flex-col gap-[12px] h-[820px] items-start left-[12px] rounded-[4px] top-[8px]" data-name="Left Menu">
        {/* Menu Toggle Button at Top */}
        <div 
          className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px] hover:bg-gradient-to-b hover:from-[rgba(255,255,255,0.7)] hover:to-[rgba(255,255,255,0.49)] cursor-pointer transition-all group" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform">
            {isExpanded ? (
              <path d="M15 18L9 12L15 6" stroke="#0083DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M9 18L15 12L9 6" stroke="#0083DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <button
          className={`rounded-[8px] ${isDashboardActive ? "bg-gradient-to-b from-[rgba(255,255,255,0.85)] to-[rgba(255,255,255,0.64)] shadow-[0_10px_24px_rgba(0,131,218,0.12)]" : ""}`}
          onClick={onGoDashboard}
          type="button"
        >
          <IconWithTooltip label="Module Dashboard">
            <MingcuteGridFill />
          </IconWithTooltip>
        </button>

        {/* Regular Menu Icons */}
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`rounded-[8px] ${activeItem === item.id ? "bg-gradient-to-b from-[rgba(255,255,255,0.85)] to-[rgba(255,255,255,0.64)] shadow-[0_10px_24px_rgba(0,131,218,0.12)]" : ""}`}
            onClick={() => onNavigate(item.view, item.id)}
            type="button"
          >
            <IconWithTooltip label={item.label}>
              {item.icon}
            </IconWithTooltip>
          </button>
        ))}
      </div>

      {/* Expanded Menu Overlay */}
      {isExpanded && (
        <div className="absolute left-[12px] top-[8px] h-[820px] w-[240px] bg-gradient-to-b from-[rgba(255,255,255,0.95)] to-[rgba(255,255,255,0.9)] backdrop-blur-lg rounded-[12px] shadow-2xl flex flex-col gap-[8px] p-[12px] z-[101]">
          {/* Header with Toggle Button */}
          <div className="flex items-center justify-between px-[12px] py-[8px]">
            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Menu
            </p>
            <button
              onClick={() => setIsExpanded(false)}
              className="content-stretch flex items-center justify-center size-[32px] hover:bg-white/50 rounded-[8px] cursor-pointer transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#0083DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Menu Items with Labels */}
          <button
            className={`flex items-center gap-[12px] px-[12px] py-[10px] rounded-[8px] hover:bg-white/60 cursor-pointer transition-all group text-left ${isDashboardActive ? "bg-[linear-gradient(109deg,#eaf8ff_0%,#caedff_100%)] border border-[#bfe4ff]" : ""}`}
            onClick={() => {
              onGoDashboard();
              setIsExpanded(false);
            }}
            type="button"
          >
            <div className="overflow-clip size-[24px] shrink-0">
              <MingcuteGridFill />
            </div>
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              Module Dashboard
            </p>
          </button>
          {menuItems.map((item, index) => (
            <button 
              key={index}
              className={`flex items-center gap-[12px] px-[12px] py-[10px] rounded-[8px] hover:bg-white/60 cursor-pointer transition-all group text-left ${activeItem === item.id ? "bg-[linear-gradient(109deg,#eaf8ff_0%,#caedff_100%)] border border-[#bfe4ff]" : ""}`}
              onClick={() => {
                onNavigate(item.view, item.id);
                setIsExpanded(false);
              }}
              type="button"
            >
              <div className="overflow-clip size-[24px] shrink-0">
                {item.icon}
              </div>
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                {item.label}
              </p>
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function ProposalStatusChip({ status }: { status: ProposalStatus }) {
  const styles = {
    Accepted: "bg-[#ccefdd] text-[#0c5d38]",
    Rejected: "bg-[#fad7d7] text-[#8f2d2d]",
    Draft: "bg-[#e1e1e1] text-[#505050]",
    Sent: "bg-[#d9ecff] text-[#0e5da8]",
  };

  return (
    <div className={`content-stretch flex items-center justify-center rounded-[999px] px-[12px] py-[6px] ${styles[status]}`}>
      <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {status}
      </p>
    </div>
  );
}

function ProposalListRow({
  proposal,
  isSelected,
  onSelect,
}: {
  proposal: ProposalRecord;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      className={`content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip px-[18px] py-[20px] relative w-full text-left border-b border-solid transition-all ${
        isSelected
          ? "border-[#0083da] bg-[linear-gradient(109deg,#eaf8ff_0%,#caedff_100%)] shadow-[inset_4px_0_0_0_#0083da,0_12px_24px_rgba(31,131,255,0.10)]"
          : "border-[#ebebeb] bg-[#fcfcfc] hover:bg-[#f7fbff]"
      }`}
      onClick={onSelect}
      type="button"
    >
      <div className="content-stretch flex items-start justify-between relative w-full">
        <p className={`font-['Roboto:Bold',sans-serif] font-bold text-[16px] underline ${isSelected ? "text-[#005fa3]" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          Proposal #{proposal.id}
        </p>
        <span className={`flex size-[28px] shrink-0 items-center justify-center rounded-full border border-solid transition-colors ${
          isSelected ? "border-[#9ed1ff] bg-white text-[#0083da]" : "border-[#e1e8ef] bg-white/80 text-[#7a8a98]"
        }`}>
          <Pencil className="size-[14px]" strokeWidth={1.9} />
        </span>
      </div>
      <div className="content-stretch flex items-start justify-between leading-[normal] relative w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center min-w-0 relative">
          <p className={`font-['Roboto:Bold',sans-serif] font-bold text-[18px] ${isSelected ? "text-[#0b3558]" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {proposal.company}
          </p>
          <p className={`font-['Roboto:Regular',sans-serif] font-normal text-[16px] ${isSelected ? "text-[#24506d]" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {proposal.title}
          </p>
        </div>
        <p className={`font-['Roboto:Bold',sans-serif] font-bold text-[18px] whitespace-nowrap ${isSelected ? "text-[#0b3558]" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          {proposal.amount}
        </p>
      </div>
      <ProposalStatusChip status={proposal.status} />
    </button>
  );
}

function ProposalActionButton({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <button
      className={`content-stretch flex items-center justify-center rounded-[8px] transition-all hover:bg-white/80 ${
        label ? "gap-[8px] px-[10px] py-[8px]" : "size-[32px]"
      }`}
      type="button"
    >
      {children}
      {label ? (
        <span
          className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-black whitespace-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {label}
        </span>
      ) : null}
    </button>
  );
}

function ProposalFooter({
  totalRecords,
  currentPage,
  totalPages,
}: {
  totalRecords: number;
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className="bg-white border-t border-solid border-[#e5e7eb] content-stretch flex items-center justify-between px-[18px] py-[8px] relative shrink-0 w-full">
      <p
        className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#141414] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Navigate or Update record
      </p>

      <div className="content-stretch flex items-center gap-[14px] relative shrink-0">
        <p
          className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#1f83ff] whitespace-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          -1/0
        </p>
        <div className="h-[28px] w-px bg-[#d6d6d6]" />
        <p
          className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#141414] whitespace-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Showing Result 0-0 of {totalRecords}
        </p>

        <div className="content-stretch flex items-center overflow-hidden rounded-[10px] border border-solid border-[#d9d9d9] bg-[#fcfcfc] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
          <button className="content-stretch flex items-center justify-center size-[46px] border-r border-solid border-[#d9d9d9] text-[#b2b8bf]" type="button">
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d="M11 4L6 9L11 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            </svg>
          </button>
          <button className="content-stretch flex items-center justify-center gap-[8px] min-w-[88px] px-[16px] py-[11px] text-[#141414]" type="button">
            <span
              className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {currentPage}
            </span>
            <svg className="size-[16px] text-[#1f83ff]" fill="none" viewBox="0 0 16 16">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </button>
          <button className="content-stretch flex items-center justify-center size-[46px] border-l border-solid border-[#d9d9d9] text-[#9aa3ad]" type="button">
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d="M7 4L12 9L7 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ActivityChangesModal({
  activity,
  onClose,
}: {
  activity: { title: string; changes?: string[] } | null;
  onClose: () => void;
}) {
  if (!activity || !activity.changes?.length) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-[120] flex items-center justify-center bg-[rgba(15,23,42,0.20)]">
      <div className="w-[420px] rounded-[16px] border border-solid border-[#dfe8ef] bg-white p-[20px] shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
        <div className="content-stretch flex items-start justify-between gap-[12px]">
          <div>
            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {activity.title}
            </p>
            <p className="mt-[4px] font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Revision changes
            </p>
          </div>
          <button className="flex size-[28px] items-center justify-center rounded-[8px] text-[#5f6b7a] hover:bg-[#f4f7fa]" onClick={onClose} type="button">
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
            </svg>
          </button>
        </div>
        <div className="mt-[16px] flex flex-col gap-[10px]">
          {activity.changes.map((change) => (
            <div className="rounded-[12px] border border-solid border-[#edf2f6] bg-[#fbfdff] px-[14px] py-[12px]" key={change}>
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProposalHeaderAction({
  icon,
  label,
  onClick,
  variant = "secondary",
}: {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      className={`content-stretch flex items-center gap-[8px] rounded-[999px] border border-solid px-[14px] py-[9px] transition-all ${
        variant === "primary"
          ? "border-[#0083da] bg-[#0083da] text-white shadow-[0_8px_18px_rgba(0,131,218,0.24)] hover:bg-[#0073c0]"
          : "border-[#0083da] bg-white text-[#0083da] hover:bg-[#f2f9ff]"
      }`}
      onClick={onClick}
      type="button"
    >
      {icon}
      <span className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </span>
    </button>
  );
}

function OpportunitiesView({ onClose }: { onClose: () => void }) {
  const [viewMode, setViewMode] = useState<"dashboard" | "window">("dashboard");
  const [selectedOpportunityId, setSelectedOpportunityId] = useState("opp-001");
  const [isDetailOpen, setIsDetailOpen] = useState(true);
  const pipelineColumns = [
    {
      label: "Discovery",
      count: 2,
      total: "$36K",
      accent: "#1DA1D8",
      cards: [
        { title: "Harper Studios - Starter", closeDate: "Close May 18", owner: "Jacob M.", amount: "$12.4k", probability: "30%" },
        { title: "Vendr Co-op - Custom", closeDate: "Close May 30", owner: "Jacob M.", amount: "$24.0k", probability: "25%" },
      ],
    },
    {
      label: "Proposal",
      count: 2,
      total: "$79K",
      accent: "#8B7CFF",
      cards: [
        { title: "DK Industries - Platform v3", closeDate: "Close May 5", owner: "Jacob M.", amount: "$48.0k", probability: "60%" },
        { title: "Harbor Medical - Renewal", closeDate: "Close May 12", owner: "Kevin S.", amount: "$31.2k", probability: "50%" },
      ],
    },
    {
      label: "Negotiation",
      count: 2,
      total: "$91K",
      accent: "#D78B10",
      cards: [
        { title: "Ember RetailCo - Annual", closeDate: "Close Apr 28", owner: "Jacob M.", amount: "$62.0k", probability: "75%" },
        { title: "Northwind - Expansion", closeDate: "Close Apr 22", owner: "Maya C.", amount: "$28.5k", probability: "80%" },
      ],
    },
    {
      label: "Commit",
      count: 1,
      total: "$38K",
      accent: "#20A464",
      cards: [{ title: "Aerial Robotics - Growth", closeDate: "Close Apr 20", owner: "Jacob M.", amount: "$38.0k", probability: "90%" }],
    },
  ];

  const rows = [
    {
      id: "opp-001",
      opportunity: "Apex Modernization",
      company: "Apex Med Systems",
      stage: "Proposal",
      amount: "$ 124,000",
      owner: "Mack Rod",
      nextStep: "Pricing review due",
      contact: "Diana Morris",
      probability: "64%",
      closeDate: "28 Apr 2026",
      notes: "The client is aligned on scope and is waiting for final commercials before sign-off.",
      activities: [
        { title: "Pricing revision requested by procurement", meta: "18 Apr 2026, 4:10 PM", type: "email" },
        { title: "Technical scope approved by delivery lead", meta: "17 Apr 2026, 11:20 AM", type: "call" },
        { title: "Follow-up meeting scheduled for tomorrow", meta: "16 Apr 2026, 6:45 PM", type: "meeting" },
      ],
      stageDetail: "Commercial discussion is active and proposal is under review",
      probabilityDetail: "Raised after review call",
      closeMeta: "9 days remaining",
      nextStepDetail: "Final pricing call booked",
      progress: [
        { label: "Qualification", state: "done", value: "Done" },
        { label: "Discovery", state: "done", value: "Done" },
        { label: "Proposal", state: "done", value: "Done" },
        { label: "Negotiation", state: "active", value: "Active" },
        { label: "Closure", state: "pending", value: "Pending" },
      ],
      snapshot: [
        { label: "Lead", value: "Qualified from healthcare outbound campaign" },
        { label: "Discovery", value: "Completed on 12 Apr 2026 with operations and procurement" },
        { label: "Proposal", value: "Commercial draft sent and under review" },
        { label: "Negotiation", value: "Pending updated pricing pack" },
      ],
    },
    {
      id: "opp-002",
      opportunity: "Northwind Expansion",
      company: "Northwind Energy",
      stage: "Qualified",
      amount: "$ 81,500",
      owner: "Maya Chen",
      nextStep: "Schedule discovery call",
      contact: "Rina Patel",
      probability: "42%",
      closeDate: "09 May 2026",
      notes: "Discovery is complete and the team is preparing a recommended rollout approach.",
      activities: [
        { title: "Budget range confirmed", meta: "19 Apr 2026, 9:15 AM", type: "call" },
        { title: "Discovery notes shared with solutions team", meta: "18 Apr 2026, 3:40 PM", type: "email" },
        { title: "Call with operations booked for Friday", meta: "17 Apr 2026, 5:05 PM", type: "meeting" },
      ],
      stageDetail: "Client goals are confirmed and the solution team is shaping scope",
      probabilityDetail: "Stable after qualification review",
      closeMeta: "19 days remaining",
      nextStepDetail: "Discovery workshop on Friday",
      progress: [
        { label: "Qualification", state: "done", value: "Done" },
        { label: "Discovery", state: "active", value: "Active" },
        { label: "Proposal", state: "pending", value: "Pending" },
        { label: "Negotiation", state: "pending", value: "Pending" },
        { label: "Closure", state: "pending", value: "Pending" },
      ],
      snapshot: [
        { label: "Lead", value: "Inbound interest via expansion request form" },
        { label: "Discovery", value: "Requirements captured and technical scope outlined" },
        { label: "Proposal", value: "Not started" },
        { label: "Negotiation", value: "Not started" },
      ],
    },
    {
      id: "opp-003",
      opportunity: "UrbanAxis Rollout",
      company: "UrbanAxis Retail",
      stage: "Negotiation",
      amount: "$ 212,800",
      owner: "Kevin Smith",
      nextStep: "Client legal feedback",
      contact: "Kevin Howard",
      probability: "71%",
      closeDate: "14 May 2026",
      notes: "Commercials are accepted in principle and only legal review remains open.",
      activities: [
        { title: "Redlines returned by client legal", meta: "20 Apr 2026, 10:30 AM", type: "email" },
        { title: "Finance approved revised payment schedule", meta: "19 Apr 2026, 1:50 PM", type: "call" },
        { title: "Executive sponsor requested summary deck", meta: "18 Apr 2026, 4:20 PM", type: "meeting" },
      ],
      stageDetail: "Deal terms are being finalized while legal completes redlines",
      probabilityDetail: "Improved after payment terms approval",
      closeMeta: "24 days remaining",
      nextStepDetail: "Await final legal response",
      progress: [
        { label: "Qualification", state: "done", value: "Done" },
        { label: "Discovery", state: "done", value: "Done" },
        { label: "Proposal", state: "done", value: "Done" },
        { label: "Negotiation", state: "active", value: "Active" },
        { label: "Closure", state: "pending", value: "Pending" },
      ],
      snapshot: [
        { label: "Lead", value: "Expansion opportunity linked to warehouse pilot" },
        { label: "Discovery", value: "Business case and rollout phases approved" },
        { label: "Proposal", value: "Commercials accepted in principle" },
        { label: "Negotiation", value: "Legal review in progress" },
      ],
    },
    {
      id: "opp-004",
      opportunity: "Kumaan Renewal",
      company: "Kumaan Pvt. Ltd.",
      stage: "Proposal",
      amount: "$ 99,394",
      owner: "Parkash Chaudary",
      nextStep: "Send revised quote",
      contact: "Parkash Chaudary",
      probability: "82%",
      closeDate: "25 Apr 2026",
      notes: "Renewal is active and tied to the current proposal revision already under review.",
      activities: [
        { title: "Renewal quote updated with latest scope", meta: "20 Apr 2026, 8:45 AM", type: "email" },
        { title: "Client requested revised onboarding dates", meta: "19 Apr 2026, 2:25 PM", type: "call" },
        { title: "Internal approval completed", meta: "18 Apr 2026, 12:10 PM", type: "meeting" },
      ],
      stageDetail: "Renewal terms are being aligned before final confirmation",
      probabilityDetail: "High due to active renewal relationship",
      closeMeta: "6 days remaining",
      nextStepDetail: "Send revised quote today",
      progress: [
        { label: "Qualification", state: "done", value: "Done" },
        { label: "Discovery", state: "done", value: "Done" },
        { label: "Proposal", state: "active", value: "Active" },
        { label: "Negotiation", state: "pending", value: "Pending" },
        { label: "Closure", state: "pending", value: "Pending" },
      ],
      snapshot: [
        { label: "Lead", value: "Renewal reminder triggered from active account plan" },
        { label: "Discovery", value: "Scope refresh completed with delivery team" },
        { label: "Proposal", value: "Revision 2 prepared for client" },
        { label: "Negotiation", value: "Awaiting final confirmation on revised dates" },
      ],
    },
    {
      id: "opp-005",
      opportunity: "Apex Support Expansion",
      company: "Apex Med Systems",
      stage: "Qualified",
      amount: "$ 58,600",
      owner: "Mack Rod",
      nextStep: "Prepare solution outline",
      contact: "Diana Morris",
      probability: "38%",
      closeDate: "16 May 2026",
      notes: "Secondary expansion track for post-launch support coverage across two new facilities.",
      activities: [
        { title: "Support requirements gathered from regional ops team", meta: "19 Apr 2026, 11:05 AM", type: "meeting" },
        { title: "Early pricing range discussed with client", meta: "18 Apr 2026, 3:15 PM", type: "call" },
        { title: "Awaiting service coverage assumptions", meta: "17 Apr 2026, 5:30 PM", type: "email" },
      ],
      stageDetail: "Cross-sell discussion is qualified and solution sizing is in progress",
      probabilityDetail: "Early-stage expansion track",
      closeMeta: "26 days remaining",
      nextStepDetail: "Prepare support solution outline",
      progress: [
        { label: "Qualification", state: "done", value: "Done" },
        { label: "Discovery", state: "active", value: "Active" },
        { label: "Proposal", state: "pending", value: "Pending" },
        { label: "Negotiation", state: "pending", value: "Pending" },
        { label: "Closure", state: "pending", value: "Pending" },
      ],
      snapshot: [
        { label: "Lead", value: "Cross-sell from modernization workstream" },
        { label: "Discovery", value: "Support scope reviewed with regional stakeholders" },
        { label: "Proposal", value: "Solution outline pending" },
        { label: "Negotiation", value: "Not started" },
      ],
    },
  ];
  const selectedOpportunity = rows.find((row) => row.id === selectedOpportunityId) ?? rows[0];
  const relatedOpportunities = rows.filter((row) => row.company === selectedOpportunity.company);
  const relatedOpportunityCount = relatedOpportunities.length;
  const otherRelatedOpportunities = relatedOpportunities.filter((row) => row.id !== selectedOpportunity.id);

  const selectOpportunity = (opportunityId: string) => {
    setSelectedOpportunityId(opportunityId);
  };

  useEffect(() => {
    if (viewMode === "window") {
      setIsDetailOpen(true);
    }
  }, [viewMode]);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[64px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center gap-[18px] relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Opportunities
            </p>
            <div className="relative shrink-0 w-[96px]">
              <div className="flex items-center justify-center gap-[12px] w-full">
                <button className="relative flex size-[24px] shrink-0 items-center justify-center" onClick={() => setViewMode("dashboard")} type="button">
                  <MingcuteGridFill />
                  {viewMode === "dashboard" ? <div className="absolute inset-[-6px] rounded-[8px] border border-[#bfe4ff] bg-[#eaf8ff] -z-10" /> : null}
                </button>
                <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0">
                  <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[17px]">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                          <line id="Line 15" stroke="var(--stroke-0, #D9D9D9)" x2="17" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="relative flex size-[24px] shrink-0 items-center justify-center" onClick={() => setViewMode("window")} type="button">
                  <RiWindowFill />
                  {viewMode === "window" ? <div className="absolute inset-[-6px] rounded-[8px] border border-[#bfe4ff] bg-[#eaf8ff] -z-10" /> : null}
                </button>
              </div>
              <div
                className={`absolute bottom-[-21px] h-0 w-0 border-l-[8px] border-r-[8px] border-t-0 border-b-[10px] border-l-transparent border-r-transparent border-b-[#1f83ff] transition-all ${
                  viewMode === "dashboard" ? "left-[17px]" : "left-[63px]"
                }`}
              />
            </div>
          </div>
          <button className="content-stretch flex items-center justify-center size-[32px]" type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
        {viewMode === "window" ? (
          <div className="bg-[linear-gradient(180deg,rgba(230,243,252,0.65)_0%,rgba(245,250,253,0.72)_100%)] content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <ProposalActionButton>
                <Home className="size-[18px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <ArrowLeft className="size-[18px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <RotateCcw className="size-[18px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton label="New Record">
                <FilePlus2 className="size-[18px] text-[#141414]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <Trash2 className="size-[18px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <HardDrive className="size-[18px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <HardDriveDownload className="size-[18px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <FilePlus2 className="size-[18px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
            </div>

            <div className="content-stretch flex items-center gap-[14px] relative shrink-0">
              <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[50px] w-[320px] shadow-[0_6px_14px_rgba(16,47,74,0.06)]">
                <div className="bg-[#1f83ff] content-stretch flex items-center justify-center overflow-clip py-[12px] relative rounded-bl-[50px] rounded-tl-[50px] shrink-0 w-[56px]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <circle cx="9" cy="9" r="5" stroke="white" strokeWidth="1.8" />
                    <path d="M13 13L17 17" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
                  </svg>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px px-[12px] relative">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#9f9f9f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Search
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                      <path d="M4 6L9 11L14 6" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                    </svg>
                    <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                      <circle cx="8" cy="8" r="3.5" stroke="#141414" strokeWidth="1.4" />
                      <path d="M10.7 10.7L14 14" stroke="#141414" strokeLinecap="round" strokeWidth="1.4" />
                    </svg>
                  </div>
                </div>
              </div>

              <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                <path d="M3 4.5H15L11 9V14L7 12V9L3 4.5Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
              <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                <circle cx="9" cy="5" fill="#141414" r="1.4" />
                <circle cx="9" cy="9" fill="#141414" r="1.4" />
                <circle cx="9" cy="13" fill="#141414" r="1.4" />
              </svg>
            </div>
          </div>
        ) : null}
      </div>

      {viewMode === "dashboard" ? (
        <div className="flex-1 overflow-auto px-[18px] py-[18px]">
          <div className="grid grid-cols-9 gap-[12px]">
            <div className="col-[1/span_9] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.78)] to-[rgba(255,255,255,0.55)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[20px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Pipeline
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[11px] uppercase tracking-[0.16em] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Drag cards to advance stage
                  </p>
                </div>
                <button className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }} type="button">
                  + New deal
                </button>
              </div>

              <div className="mt-[16px] grid grid-cols-4 gap-[14px]">
                {pipelineColumns.map((column) => (
                  <div className="flex min-h-[300px] flex-col gap-[12px] rounded-[14px] border border-white/70 bg-[rgba(244,247,252,0.82)] p-[12px] shadow-[0px_10px_24px_rgba(15,23,42,0.04)]" key={column.label}>
                    <div className="flex items-center justify-between">
                      <div className="flex min-w-0 items-center gap-[8px]">
                        <div className="size-[7px] shrink-0 rounded-full" style={{ backgroundColor: column.accent }} />
                        <p className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap font-['Roboto:Bold',sans-serif] text-[11px] uppercase tracking-[0.14em] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {column.label}
                        </p>
                        <div className="flex h-[18px] min-w-[18px] shrink-0 items-center justify-center rounded-full border border-solid border-[#dfe7f2] bg-white px-[6px]">
                          <p className="font-['Roboto:Bold',sans-serif] text-[10px] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {column.count}
                          </p>
                        </div>
                      </div>
                      <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#7a8194]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {column.total}
                      </p>
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col gap-[10px]">
                      {column.cards.map((card) => (
                        <div className="flex flex-col gap-[8px] rounded-[11px] border border-solid border-[#e5ebf3] bg-white p-[12px] shadow-[0px_2px_6px_rgba(15,23,42,0.05)]" key={card.title}>
                          <div className="flex flex-col gap-[4px]">
                            <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#1f2937]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {card.title}
                            </p>
                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#7a8194]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {card.closeDate} · {card.owner}
                            </p>
                          </div>

                          <div className="flex items-end justify-between">
                            <p className="font-['Roboto:Bold',sans-serif] text-[26px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {card.amount}
                            </p>
                            <div className="flex h-[22px] shrink-0 items-center justify-center rounded-full bg-[#cdefff] px-[8px]">
                              <p className="font-['Roboto:Bold',sans-serif] text-[11px] text-[#0f7db5]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {card.probability}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      {column.cards.length === 1 ? <div className="min-h-[88px] flex-1" /> : null}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[14px] flex items-center justify-between rounded-[12px] border border-solid border-white/75 bg-white/55 px-[14px] py-[10px]">
                <div className="flex items-center gap-[18px]">
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Open Pipeline
                    </p>
                    <p className="font-['Roboto:Bold',sans-serif] text-[18px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      $244K
                    </p>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Avg. Probability
                    </p>
                    <p className="font-['Roboto:Bold',sans-serif] text-[18px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      58%
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-[2px]">
                  <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Focus
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Proposal to Negotiation handoff
                  </p>
                </div>
              </div>
            </div>

            <div className="col-[1/span_3] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.78)] to-[rgba(255,255,255,0.55)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
              <p className="font-['Roboto:Regular',sans-serif] text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                Focus Today
              </p>
              <div className="mt-[16px] flex flex-col gap-[10px]">
                {[
                  "2 pricing revisions need approval",
                  "1 deal is waiting on client legal review",
                  "3 calls are scheduled this afternoon",
                ].map((item) => (
                  <div className="rounded-[12px] bg-white/80 px-[14px] py-[12px] text-[14px] text-[#102c3f]" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-[4/span_6] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.78)] to-[rgba(255,255,255,0.55)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
              <div className="flex items-center justify-between">
                <p className="font-['Roboto:Regular',sans-serif] text-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Active Opportunities
                </p>
                <button className="rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da]" type="button">
                  Add Opportunity
                </button>
              </div>

              <div className="mt-[16px] grid grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)_0.9fr_0.9fr_0.9fr_1fr] gap-[12px] border-b border-solid border-[#e8eef3] px-[10px] pb-[10px]">
                {["Opportunity", "Company", "Stage", "Amount", "Owner", "Next Step"].map((heading) => (
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {heading}
                  </p>
                ))}
              </div>

              {rows.map((row) => (
                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)_0.9fr_0.9fr_0.9fr_1fr] gap-[12px] border-b border-solid border-[#edf2f6] px-[10px] py-[14px]" key={row.id}>
                  <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.opportunity}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.company}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.stage}
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.amount}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.owner}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.nextStep}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="content-stretch flex flex-[1_0_0] items-start min-h-0 relative w-full">
          <div className={`bg-white content-stretch flex flex-col h-full items-start overflow-auto relative shrink-0 ${isDetailOpen ? "w-[380px]" : "w-full"}`}>
            {isDetailOpen ? (
              rows.map((row) => (
                <button
                  className={`content-stretch flex flex-col gap-[14px] items-start justify-center overflow-clip px-[18px] py-[18px] relative w-full text-left border-b border-solid transition-all ${
                    selectedOpportunity.id === row.id
                      ? "border-[#0083da] bg-[linear-gradient(109deg,#eaf8ff_0%,#caedff_100%)] shadow-[inset_4px_0_0_0_#0083da,0_12px_24px_rgba(31,131,255,0.10)]"
                      : "border-[#ebebeb] bg-[#fcfcfc] hover:bg-[#f7fbff]"
                  }`}
                  key={row.id}
                  onClick={() => selectOpportunity(row.id)}
                  type="button"
                >
                  <div className="content-stretch flex items-start justify-between relative w-full">
                    <p className={`font-['Roboto:Bold',sans-serif] font-bold text-[16px] ${selectedOpportunity.id === row.id ? "text-[#005fa3]" : "text-black"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      {row.opportunity}
                    </p>
                    <div className="flex shrink-0 items-center gap-[8px]">
                      <span className="rounded-[999px] bg-white/85 px-[10px] py-[5px] text-[12px] text-[#41576a]">{row.stage}</span>
                      <span className={`flex size-[28px] items-center justify-center rounded-full border border-solid transition-colors ${
                        selectedOpportunity.id === row.id ? "border-[#9ed1ff] bg-white text-[#0083da]" : "border-[#e1e8ef] bg-white/80 text-[#7a8a98]"
                      }`}>
                        <Pencil className="size-[14px]" strokeWidth={1.9} />
                      </span>
                    </div>
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.company}
                  </p>
                  <div className="flex w-full items-center justify-between">
                    <p className="font-['Roboto:Bold',sans-serif] text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {row.amount}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {row.owner}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <div className="w-full px-[18px] py-[18px]">
                {rows.map((row) => {
                  const isSelected = selectedOpportunity.id === row.id;

                  return (
                    <div
                      className={`mb-[12px] flex min-h-[96px] items-center justify-between gap-[18px] rounded-[16px] border border-solid px-[16px] py-[14px] transition-all last:mb-0 ${
                        isSelected
                          ? "border-[#cfe6fb] bg-[linear-gradient(109deg,#f4fbff_0%,#eef8ff_100%)] shadow-[0_10px_22px_rgba(31,131,255,0.08)]"
                          : "border-[#e4edf4] bg-[#fbfdff] hover:border-[#d5e6f3] hover:bg-white"
                      }`}
                      key={row.id}
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-[18px]">
                        <div className="min-w-0 flex-[1.6]">
                          <div className="flex items-center gap-[10px]">
                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Opportunity
                            </p>
                            <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full border border-solid border-[#e1e8ef] bg-white text-[#7a8a98]">
                              <Pencil className="size-[13px]" strokeWidth={1.9} />
                            </span>
                          </div>
                          <p className="mt-[6px] truncate font-['Roboto:Bold',sans-serif] text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.opportunity}
                          </p>
                        </div>

                        <div className="min-w-0 flex-[1.35]">
                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Company
                          </p>
                          <p className="mt-[6px] truncate font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.company}
                          </p>
                        </div>

                        <div className="min-w-[110px]">
                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Stage
                          </p>
                          <p className="mt-[6px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.stage}
                          </p>
                        </div>

                        <div className="min-w-[110px]">
                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Amount
                          </p>
                          <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.amount}
                          </p>
                        </div>

                        <div className="min-w-[120px]">
                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Owner
                          </p>
                          <p className="mt-[6px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.owner}
                          </p>
                        </div>

                        <div className="min-w-0 flex-[1]">
                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Next Step
                          </p>
                          <p className="mt-[6px] truncate font-['Roboto:Regular',sans-serif] text-[14px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.nextStep}
                          </p>
                        </div>
                      </div>
                      <button
                        className="shrink-0 self-center rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da] transition-colors hover:bg-[#eef8ff]"
                        onClick={() => {
                          selectOpportunity(row.id);
                          setIsDetailOpen(true);
                        }}
                        type="button"
                      >
                        See details
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {isDetailOpen && (
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col min-h-0 min-w-px relative self-stretch">
            <div className="flex h-[56px] shrink-0 items-center justify-between border-b border-solid border-[#e4edf4] px-[24px]">
              <p className="font-['Roboto:Bold',sans-serif] text-[16px] text-[#141414]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Opportunity Overview
              </p>
              <div className="flex items-center gap-[12px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {selectedOpportunity.company} • {relatedOpportunityCount} opportunities
                </p>
                <button className="content-stretch flex items-center justify-center size-[32px]" onClick={() => setIsDetailOpen(false)} type="button">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[18px] h-full items-start overflow-auto px-[24px] py-[22px] relative">
              <div className="bg-white border border-solid border-[#e7edf2] rounded-[16px] content-stretch flex flex-col gap-[16px] items-start px-[18px] py-[18px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Opportunity Snapshot
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {selectedOpportunity.company} • {relatedOpportunityCount} opportunities
                  </p>
                </div>
                <div className="grid w-full grid-cols-[minmax(0,1.6fr)_repeat(4,minmax(0,1fr))] gap-[12px]">
                  <div className="rounded-[14px] border border-solid border-[#dfe8ef] bg-[linear-gradient(135deg,#f8fcff_0%,#eef6fb_100%)] px-[16px] py-[14px]">
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Company
                    </p>
                    <p className="mt-[4px] font-['Roboto:Bold',sans-serif] font-bold text-[24px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {selectedOpportunity.company}
                    </p>
                    <div className="mt-[10px] flex flex-wrap items-center gap-[8px]">
                      <span className="rounded-[999px] bg-white px-[10px] py-[5px] text-[12px] text-[#41576a]">
                        Contact: {selectedOpportunity.contact}
                      </span>
                      <span className="rounded-[999px] bg-white px-[10px] py-[5px] text-[12px] text-[#41576a]">
                        Owner: {selectedOpportunity.owner}
                      </span>
                      <span className="rounded-[999px] bg-[#eaf6ff] px-[10px] py-[5px] text-[12px] text-[#0073c0]">
                        {relatedOpportunityCount} opportunities
                      </span>
                    </div>
                  </div>

                  {[
                    {
                      title: "Current Stage",
                      value: selectedOpportunity.stage,
                      meta: selectedOpportunity.stageDetail,
                      valueClass: "text-[18px]",
                    },
                    {
                      title: "Probability",
                      value: selectedOpportunity.probability,
                      meta: selectedOpportunity.probabilityDetail,
                      valueClass: "text-[18px]",
                    },
                    {
                      title: "Close Date",
                      value: selectedOpportunity.closeDate,
                      meta: selectedOpportunity.closeMeta,
                      valueClass: "text-[18px]",
                    },
                    {
                      title: "Next Step",
                      value: selectedOpportunity.nextStep,
                      meta: selectedOpportunity.nextStepDetail,
                      valueClass: "text-[18px]",
                    },
                  ].map((card) => {
                    const probabilityTone =
                      card.title === "Probability"
                        ? getProbabilityTone(selectedOpportunity.probability)
                        : null;

                    return (
                      <div
                        className={`rounded-[14px] border border-solid px-[14px] py-[12px] ${
                          probabilityTone ? probabilityTone.card : "border-[#dfe8ef] bg-white"
                        }`}
                        key={card.title}
                      >
                        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {card.title}
                        </p>
                        <p
                          className={`mt-[4px] font-['Roboto:Bold',sans-serif] font-bold ${card.valueClass} ${
                            probabilityTone ? probabilityTone.value : "text-[#102c3f]"
                          }`}
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {card.value}
                        </p>
                        <p
                          className={`mt-[4px] font-['Roboto:Regular',sans-serif] font-normal text-[13px] leading-[18px] ${
                            probabilityTone ? probabilityTone.meta : "text-[#5f7283]"
                          }`}
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {card.meta}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid w-full grid-cols-5 gap-[10px]">
                  {selectedOpportunity.progress.map((item) => {
                    const tone =
                      item.state === "done"
                        ? "border-[#d8e8f4] bg-[#f8fbfe] text-[#102c3f]"
                        : item.state === "active"
                          ? "border-[#cce4ff] bg-[#eef7ff] text-[#102c3f]"
                          : "border-[#e4edf4] bg-[#fbfdff] text-[#102c3f]";

                    return (
                      <div className={`rounded-[14px] border border-solid px-[12px] py-[10px] text-center ${tone}`} key={`${selectedOpportunity.id}-${item.label}`}>
                        <p className="font-['Roboto:Bold',sans-serif] font-bold text-[13px] text-[#5d7487]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.label}
                        </p>
                        <p className="mt-[6px] font-['Roboto:Bold',sans-serif] font-bold text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.state === "done" ? "✓" : item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid w-full grid-cols-[120px_minmax(0,1fr)] gap-x-[14px] gap-y-[10px]">
                  {selectedOpportunity.snapshot.map((item) => (
                    <Fragment key={`${selectedOpportunity.id}-${item.label}`}>
                      <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item.label}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item.value}
                      </p>
                    </Fragment>
                  ))}
                </div>

                <div className="grid w-full grid-cols-2 gap-[12px]">
                  <div className="rounded-[14px] border border-solid border-[#e4edf4] bg-white px-[14px] py-[12px]">
                    <p className="font-['Roboto:Bold',sans-serif] font-bold text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Opportunity Notes
                    </p>
                    <p className="mt-[8px] font-['Roboto:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {selectedOpportunity.notes}
                    </p>
                  </div>

                  <div className="rounded-[14px] border border-solid border-[#e4edf4] bg-white px-[14px] py-[12px]">
                    <div className="flex items-center justify-between">
                      <p className="font-['Roboto:Bold',sans-serif] font-bold text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Recent Activity
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {selectedOpportunity.activities.length} updates
                      </p>
                    </div>
                    <div className="mt-[10px] flex flex-col gap-[10px]">
                      {selectedOpportunity.activities.map((activity) => {
                        const activityMeta = getOpportunityActivityTypeMeta(activity.type);

                        return (
                          <div className="flex items-start justify-between gap-[16px] border-b border-solid border-[#edf2f6] pb-[10px] last:border-b-0 last:pb-0" key={`${selectedOpportunity.id}-${activity.title}-${activity.meta}`}>
                            <div className="flex items-start gap-[10px]">
                              <div className={`mt-[2px] inline-flex items-center gap-[6px] rounded-[999px] px-[8px] py-[5px] text-[12px] ${activityMeta.badge}`}>
                                {activityMeta.icon}
                                <span className="font-['Roboto:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {activityMeta.label}
                                </span>
                              </div>
                              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {activity.title}
                              </p>
                            </div>
                            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#748494] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {activity.meta}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {otherRelatedOpportunities.length ? (
                <div className="bg-white border border-solid border-[#e7edf2] rounded-[16px] content-stretch flex flex-col gap-[14px] items-start px-[18px] py-[18px] relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Other Opportunities for {selectedOpportunity.company}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {otherRelatedOpportunities.length} related records
                    </p>
                  </div>
                  <div className="grid w-full grid-cols-2 gap-[12px]">
                    {otherRelatedOpportunities.map((opportunity) => (
                      <button
                        className="rounded-[14px] border border-solid border-[#e4edf4] bg-[#fbfdff] px-[16px] py-[14px] text-left transition-all hover:border-[#c9e1f5] hover:bg-[#f4fbff]"
                        key={opportunity.id}
                        onClick={() => selectOpportunity(opportunity.id)}
                        type="button"
                      >
                        <div className="flex items-start justify-between gap-[10px]">
                          <div>
                            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {opportunity.opportunity}
                            </p>
                            <p className="mt-[4px] font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {opportunity.contact} • {opportunity.owner}
                            </p>
                          </div>
                          <span className="rounded-[999px] bg-white px-[10px] py-[5px] text-[12px] text-[#41576a]">
                            {opportunity.stage}
                          </span>
                        </div>
                        <div className="mt-[12px] flex items-end justify-between gap-[12px]">
                          <div>
                            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Value
                            </p>
                            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[20px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {opportunity.amount}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Close date
                            </p>
                            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {opportunity.closeDate}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          )}
        </div>
      )}
    </div>
  );
}

function SalesProposalView({
  proposals,
  selectedProposalId,
  onSelectProposal,
  onClose,
  onSaveProposalLines,
}: {
  proposals: ProposalRecord[];
  selectedProposalId: string;
  onSelectProposal: (proposalId: string) => void;
  onClose: () => void;
  onSaveProposalLines: (proposalId: string, lineItems: ProposalRecord["lineItems"]) => void;
}) {
  const selectedProposal =
    proposals.find((proposal) => proposal.id === selectedProposalId) ?? proposals[0];
  const [activeTab, setActiveTab] = useState<"lines" | "activities">("lines");
  const [activeActivity, setActiveActivity] = useState<{
    title: string;
    changes?: string[];
  } | null>(null);
  const [editedLineItems, setEditedLineItems] = useState<Record<string, ProposalRecord["lineItems"]>>({});
  const [editingProposalId, setEditingProposalId] = useState<string | null>(null);
  const activeLineItems = editedLineItems[selectedProposal.id] ?? selectedProposal.lineItems;
  const isDraftProposal = selectedProposal.status === "Draft";
  const isEditingCurrentDraft = isDraftProposal && editingProposalId === selectedProposal.id;
  const lineSubtotal = activeLineItems.reduce((sum, line) => sum + parseCurrency(line.total), 0);
  const lineTax = Math.max(lineSubtotal * 0.038, 0);
  const lineTotals = {
    subtotal: formatCurrency(lineSubtotal),
    tax: formatCurrency(lineTax),
    total: formatCurrency(lineSubtotal + lineTax),
  };

  const updateDraftLine = (
    index: number,
    field: keyof ProposalRecord["lineItems"][number],
    value: string,
  ) => {
    setEditedLineItems((current) => {
      const proposalLines = [...(current[selectedProposal.id] ?? selectedProposal.lineItems)];
      const nextLine = {
        ...proposalLines[index],
        [field]: field === "quantity" ? Number(value) || 0 : value,
      };
      const quantity = Number(nextLine.quantity) || 0;
      const price = parseCurrency(nextLine.price);
      const discount = parseDiscount(nextLine.discount);
      const total = quantity * price * (1 - discount / 100);

      proposalLines[index] = {
        ...nextLine,
        total: formatCurrency(total),
      };

      return {
        ...current,
        [selectedProposal.id]: proposalLines,
      };
    });
  };

  const beginEditingLines = () => {
    setEditedLineItems((current) => ({
      ...current,
      [selectedProposal.id]: current[selectedProposal.id] ?? selectedProposal.lineItems.map((line) => ({ ...line })),
    }));
    setEditingProposalId(selectedProposal.id);
    setActiveTab("lines");
  };

  const cancelEditingLines = () => {
    setEditedLineItems((current) => {
      const next = { ...current };
      delete next[selectedProposal.id];
      return next;
    });
    setEditingProposalId(null);
  };

  const saveEditingLines = () => {
    onSaveProposalLines(selectedProposal.id, activeLineItems);
    setEditingProposalId(null);
  };

  return (
    <div className="content-stretch flex flex-col h-full items-start relative w-full">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[64px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Sales Proposal
            </p>
          </div>
          <button className="content-stretch flex items-center justify-center size-[32px]" onClick={onClose} type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
        <div className="bg-[linear-gradient(180deg,rgba(230,243,252,0.65)_0%,rgba(245,250,253,0.72)_100%)] content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
            <ProposalActionButton>
              <Home className="size-[18px] text-[#586575]" strokeWidth={1.8} />
            </ProposalActionButton>
            <ProposalActionButton>
              <ArrowLeft className="size-[18px] text-[#586575]" strokeWidth={1.8} />
            </ProposalActionButton>
            <ProposalActionButton>
              <RotateCcw className="size-[18px] text-[#586575]" strokeWidth={1.8} />
            </ProposalActionButton>
            <ProposalActionButton label="New Record">
              <FilePlus2 className="size-[18px] text-[#141414]" strokeWidth={1.8} />
            </ProposalActionButton>
            <ProposalActionButton>
              <Trash2 className="size-[18px] text-[#586575]" strokeWidth={1.8} />
            </ProposalActionButton>
            <ProposalActionButton>
              <HardDrive className="size-[18px] text-[#586575]" strokeWidth={1.8} />
            </ProposalActionButton>
            <ProposalActionButton>
              <HardDriveDownload className="size-[18px] text-[#586575]" strokeWidth={1.8} />
            </ProposalActionButton>
            <ProposalActionButton>
              <FilePlus2 className="size-[18px] text-[#586575]" strokeWidth={1.8} />
            </ProposalActionButton>
          </div>

          <div className="content-stretch flex items-center gap-[14px] relative shrink-0">
            <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[50px] w-[320px] shadow-[0_6px_14px_rgba(16,47,74,0.06)]">
              <div className="bg-[#1f83ff] content-stretch flex items-center justify-center overflow-clip py-[12px] relative rounded-bl-[50px] rounded-tl-[50px] shrink-0 w-[56px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <circle cx="9" cy="9" r="5" stroke="white" strokeWidth="1.8" />
                  <path d="M13 13L17 17" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
                </svg>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px px-[12px] relative">
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#9f9f9f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Search
                </p>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                    <path d="M4 6L9 11L14 6" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  </svg>
                  <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                    <circle cx="8" cy="8" r="3.5" stroke="#141414" strokeWidth="1.4" />
                    <path d="M10.7 10.7L14 14" stroke="#141414" strokeLinecap="round" strokeWidth="1.4" />
                  </svg>
                </div>
              </div>
            </div>

            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d="M3 4.5H15L11 9V14L7 12V9L3 4.5Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            </svg>
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <circle cx="9" cy="5" fill="#141414" r="1.4" />
              <circle cx="9" cy="9" fill="#141414" r="1.4" />
              <circle cx="9" cy="13" fill="#141414" r="1.4" />
            </svg>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-[1_0_0] items-start min-h-0 relative w-full">
        <div className="bg-white content-stretch flex flex-col h-full items-start overflow-auto relative shrink-0 w-[380px]">
          {proposals.map((proposal) => (
            <ProposalListRow
              isSelected={selectedProposal.id === proposal.id}
              key={proposal.id}
              onSelect={() => onSelectProposal(proposal.id)}
              proposal={proposal}
            />
          ))}
        </div>

        <div className="bg-white content-stretch flex flex-[1_0_0] flex-col min-h-0 min-w-px relative self-stretch">
          <div className="content-stretch flex flex-col gap-[18px] h-full items-start overflow-auto px-[24px] py-[22px] relative">
            <div className="bg-[#fbfdff] border border-solid border-[#e4edf4] rounded-[18px] content-stretch flex flex-col gap-[18px] items-start px-[22px] py-[20px] relative shrink-0 w-full shadow-[0_10px_30px_rgba(15,35,52,0.05)]">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                  <div className="content-stretch flex items-center gap-[10px] relative shrink-0">
                    <p className="font-['Roboto:Bold',sans-serif] font-bold text-[26px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {selectedProposal.clientName}
                    </p>
                    <ProposalStatusChip status={selectedProposal.status} />
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-[#4b6477]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {selectedProposal.title}
                  </p>
                </div>

                <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                  <ProposalHeaderAction icon={<Send className="size-[16px]" strokeWidth={1.8} />} label="Send" />
                  <ProposalHeaderAction icon={<Download className="size-[16px]" strokeWidth={1.8} />} label="Download" />
                </div>
              </div>

              <div className="content-stretch flex items-center flex-wrap gap-x-[20px] gap-y-[10px] relative shrink-0">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <div className="content-stretch flex items-center gap-[6px]">
                    <UserRound className="size-[14px] text-[#748494]" strokeWidth={1.8} />
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Contact Person
                    </p>
                  </div>
                  <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {selectedProposal.contactPerson}
                  </p>
                </div>
                <div className="h-[34px] w-px bg-[#d9e5ee]" />
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Proposal ID
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    #{selectedProposal.id}
                  </p>
                </div>
                <div className="h-[34px] w-px bg-[#d9e5ee]" />
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Total Value
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {selectedProposal.amount}
                  </p>
                </div>
                <div className="h-[34px] w-px bg-[#d9e5ee]" />
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <div className="content-stretch flex items-center gap-[6px]">
                    <CalendarClock className="size-[14px] text-[#748494]" strokeWidth={1.8} />
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Valid Until
                    </p>
                  </div>
                  <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {selectedProposal.validUntil}
                  </p>
                </div>
                <div className="h-[34px] w-px bg-[#d9e5ee]" />
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <div className="content-stretch flex items-center gap-[6px]">
                    <Eye className="size-[14px] text-[#748494]" strokeWidth={1.8} />
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Last Viewed
                    </p>
                  </div>
                  <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {selectedProposal.lastViewed}
                  </p>
                </div>
                <div className="h-[34px] w-px bg-[#d9e5ee]" />
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <div className="content-stretch flex items-center gap-[6px]">
                    <Percent className="size-[14px] text-[#748494]" strokeWidth={1.8} />
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Probability
                    </p>
                  </div>
                  <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {selectedProposal.probability}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-solid border-[#e7edf2] rounded-[16px] content-stretch flex flex-col gap-[16px] items-start px-[18px] py-[18px] relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="bg-[#f3f7fa] rounded-[12px] p-[4px] content-stretch flex items-center gap-[4px] relative shrink-0">
                  <button
                    className={`rounded-[10px] px-[18px] py-[9px] text-[14px] transition-all ${activeTab === "lines" ? "bg-white text-[#102c3f] shadow-[0_2px_8px_rgba(16,44,63,0.10)]" : "bg-transparent text-[#41576a]"}`}
                    onClick={() => setActiveTab("lines")}
                    type="button"
                  >
                    Lines
                  </button>
                  <button
                    className={`rounded-[10px] px-[18px] py-[9px] text-[14px] transition-all ${activeTab === "activities" ? "bg-white text-[#102c3f] shadow-[0_2px_8px_rgba(16,44,63,0.10)]" : "bg-transparent text-[#41576a]"}`}
                    onClick={() => setActiveTab("activities")}
                    type="button"
                  >
                    Activities
                  </button>
                </div>

                {isDraftProposal && activeTab === "lines" ? (
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    {isEditingCurrentDraft ? (
                      <>
                        <ProposalHeaderAction
                          icon={<HardDrive className="size-[16px]" strokeWidth={1.8} />}
                          label="Save"
                          onClick={saveEditingLines}
                          variant="primary"
                        />
                        <ProposalHeaderAction
                          icon={<ArrowLeft className="size-[16px]" strokeWidth={1.8} />}
                          label="Cancel"
                          onClick={cancelEditingLines}
                          variant="secondary"
                        />
                      </>
                    ) : (
                      <ProposalHeaderAction
                        icon={<Pencil className="size-[16px]" strokeWidth={1.8} />}
                        label="Edit Lines"
                        onClick={beginEditingLines}
                        variant="primary"
                      />
                    )}
                  </div>
                ) : null}
              </div>

              {activeTab === "lines" ? (
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  {isEditingCurrentDraft ? (
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#0083da]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Draft proposal: edit line items inline.
                    </p>
                  ) : null}
                  <div className="grid grid-cols-[minmax(0,2.2fr)_0.7fr_0.9fr_0.8fr_0.9fr] gap-[12px] w-full px-[12px] pb-[8px] border-b border-solid border-[#e8eef3]">
                    {["Item", "Quantity", "Price", "Discount", "Total"].map((heading) => (
                      <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#748494]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {heading}
                      </p>
                    ))}
                  </div>
                  {activeLineItems.map((line, index) => (
                    <div className="grid grid-cols-[minmax(0,2.2fr)_0.7fr_0.9fr_0.8fr_0.9fr] gap-[12px] w-full px-[12px] py-[12px] border-b border-solid border-[#edf2f6]" key={line.item}>
                      {isEditingCurrentDraft ? (
                        <input
                          className="rounded-[8px] border border-solid border-[#dbe7f1] px-[10px] py-[8px] text-[14px] text-[#102c3f] outline-none focus:border-[#0083da]"
                          onChange={(event) => updateDraftLine(index, "item", event.target.value)}
                          value={line.item}
                        />
                      ) : (
                        <p className="font-['Roboto:Bold',sans-serif] font-bold text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {line.item}
                        </p>
                      )}
                      {isEditingCurrentDraft ? (
                        <input
                          className="rounded-[8px] border border-solid border-[#dbe7f1] px-[10px] py-[8px] text-[14px] text-[#102c3f] outline-none focus:border-[#0083da]"
                          onChange={(event) => updateDraftLine(index, "quantity", event.target.value)}
                          type="number"
                          value={line.quantity}
                        />
                      ) : (
                        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {line.quantity}
                        </p>
                      )}
                      {isEditingCurrentDraft ? (
                        <input
                          className="rounded-[8px] border border-solid border-[#dbe7f1] px-[10px] py-[8px] text-[14px] text-[#102c3f] outline-none focus:border-[#0083da]"
                          onChange={(event) => updateDraftLine(index, "price", event.target.value)}
                          value={line.price}
                        />
                      ) : (
                        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {line.price}
                        </p>
                      )}
                      {isEditingCurrentDraft ? (
                        <input
                          className="rounded-[8px] border border-solid border-[#dbe7f1] px-[10px] py-[8px] text-[14px] text-[#102c3f] outline-none focus:border-[#0083da]"
                          onChange={(event) => updateDraftLine(index, "discount", event.target.value)}
                          value={line.discount}
                        />
                      ) : (
                        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {line.discount}
                        </p>
                      )}
                      <p className="font-['Roboto:Bold',sans-serif] font-bold text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {line.total}
                      </p>
                    </div>
                  ))}
                  <div className="self-end w-[320px] px-[12px] py-[8px]">
                    {[
                      { label: "Subtotal", value: isEditingCurrentDraft ? lineTotals.subtotal : selectedProposal.totals.subtotal },
                      { label: "Tax", value: isEditingCurrentDraft ? lineTotals.tax : selectedProposal.totals.tax },
                      { label: "Total", value: isEditingCurrentDraft ? lineTotals.total : selectedProposal.totals.total },
                    ].map((row) => (
                      <div className="content-stretch flex items-center justify-between py-[6px] w-full" key={row.label}>
                        <p className={`font-['Roboto:Regular',sans-serif] ${row.label === "Total" ? "font-bold text-[16px] text-[#102c3f]" : "font-normal text-[14px] text-[#748494]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                          {row.label}
                        </p>
                        <p className={`font-['Roboto:Regular',sans-serif] ${row.label === "Total" ? "font-bold text-[16px] text-[#102c3f]" : "font-normal text-[14px] text-[#102c3f]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                          {row.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  {selectedProposal.activities.map((activity, index) => (
                    <div className="w-full border-b border-solid border-[#edf2f6] px-[6px] py-[12px]" key={`${activity.title}-${index}`}>
                      <div className="content-stretch flex items-start justify-between gap-[16px] w-full">
                        <div className="min-w-0">
                          <div className="content-stretch flex items-center gap-[8px]">
                            <div className="bg-[#0083da] rounded-full size-[8px] shrink-0" />
                            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {activity.title}
                            </p>
                          </div>
                          <p className="mt-[6px] font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {activity.description}
                          </p>
                          <div className="mt-[8px] flex items-center gap-[10px]">
                            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              By {activity.actor}
                            </p>
                            {activity.changes?.length ? (
                              <button
                                className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#0083da] underline"
                                onClick={() => setActiveActivity(activity)}
                                type="button"
                              >
                                View changes
                              </button>
                            ) : null}
                          </div>
                        </div>
                        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#748494] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {activity.meta}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-[#fcfcfc] border border-[#ebebeb] rounded-[14px] content-stretch flex flex-col gap-[12px] items-start px-[18px] py-[18px] relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <p className="font-['Roboto:Bold',sans-serif] font-bold text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Proposal Notes
                </p>
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Last updated {selectedProposal.updatedAt}
                </p>
              </div>
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[15px] leading-[24px] text-black whitespace-pre-line" style={{ fontVariationSettings: "'wdth' 100" }}>
                {selectedProposal.notes}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProposalFooter currentPage={1} totalPages={1} totalRecords={proposals.length} />
      <ActivityChangesModal activity={activeActivity} onClose={() => setActiveActivity(null)} />
    </div>
  );
}

function ProspectsView() {
  const summaryCards = [
    {
      label: "New Leads",
      value: "46",
      meta: "Added this week",
      detail: "+12 vs last week",
      accent: "bg-[linear-gradient(135deg,#eef8ff_0%,#dff1ff_100%)] border-[#cde9ff]",
      valueClass: "text-[#102c3f]",
    },
    {
      label: "Qualified",
      value: "18",
      meta: "Active sales-ready prospects",
      detail: "39% qualification rate",
      accent: "bg-[linear-gradient(135deg,#f3fff8_0%,#e5f8ef_100%)] border-[#cfead9]",
      valueClass: "text-[#0b6b45]",
    },
    {
      label: "Avg Lead Score",
      value: "78",
      meta: "Across last 30 days",
      detail: "Top quartile is 88+",
      accent: "bg-[linear-gradient(135deg,#fff8ee_0%,#ffefd5_100%)] border-[#f3dfb8]",
      valueClass: "text-[#9a5c00]",
    },
    {
      label: "Pipeline Created",
      value: "$248K",
      meta: "Estimated from last 30 days",
      detail: "7 opportunities opened",
      accent: "bg-[linear-gradient(135deg,#f7f4ff_0%,#ebe5ff_100%)] border-[#ddd4ff]",
      valueClass: "text-[#5f4aa6]",
    },
  ];

  const prospects = [
    {
      company: "Apex Med Systems",
      contact: "Diana Morris",
      source: "Website",
      score: 92,
      stage: "Qualified",
      value: "$62K",
      responseTime: "18 min",
      owner: "Mack Rod",
    },
    {
      company: "Northwind Energy",
      contact: "Rina Patel",
      source: "Referral",
      score: 84,
      stage: "Discovery",
      value: "$44K",
      responseTime: "42 min",
      owner: "Maya Chen",
    },
    {
      company: "UrbanAxis Retail",
      contact: "Kevin Howard",
      source: "LinkedIn",
      score: 76,
      stage: "Nurturing",
      value: "$28K",
      responseTime: "1h 10m",
      owner: "Kevin Smith",
    },
    {
      company: "Kumaan Pvt. Ltd.",
      contact: "Parkash Chaudary",
      source: "Partner",
      score: 88,
      stage: "Qualified",
      value: "$53K",
      responseTime: "26 min",
      owner: "Parkash Chaudary",
    },
    {
      company: "Harper Studios",
      contact: "Jacob Myers",
      source: "Campaign",
      score: 69,
      stage: "New",
      value: "$19K",
      responseTime: "2h 05m",
      owner: "Jacob M.",
    },
    {
      company: "Ember RetailCo",
      contact: "Maya Collins",
      source: "Walk-in",
      score: 81,
      stage: "Qualified",
      value: "$41K",
      responseTime: "34 min",
      owner: "Maya Chen",
    },
  ];

  const funnelSteps = [
    { label: "New", count: 46, width: "100%", tone: "bg-[#dff1ff] text-[#0b6ea9]" },
    { label: "Contacted", count: 34, width: "78%", tone: "bg-[#d7f3e5] text-[#0b6b45]" },
    { label: "Qualified", count: 18, width: "56%", tone: "bg-[#fff0cf] text-[#9a6500]" },
    { label: "Pipeline", count: 7, width: "32%", tone: "bg-[#ebe3ff] text-[#5f4aa6]" },
  ];

  const scoreBuckets = [
    { label: "Hot 85+", count: 9, bar: "72%", color: "#1f83ff" },
    { label: "Warm 70-84", count: 21, bar: "88%", color: "#12a57a" },
    { label: "Monitor <70", count: 16, bar: "61%", color: "#f39b18" },
  ];
  const summarySpans = ["col-span-2", "col-span-2", "col-span-2", "col-span-2"];

  const stageTone: Record<string, string> = {
    New: "bg-[#eef6ff] text-[#0f69ac]",
    Nurturing: "bg-[#fff3dd] text-[#9b6400]",
    Discovery: "bg-[#efeaff] text-[#6551b1]",
    Qualified: "bg-[#ddf4e8] text-[#0b6b45]",
  };

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[64px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center gap-[14px] relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Prospects
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#6b7280] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Weekly lead health, qualification, and pipeline readiness
            </p>
          </div>
          <div className="content-stretch flex items-center gap-[10px] relative shrink-0">
            <div className="rounded-[999px] border border-solid border-[#d7e7f6] bg-white px-[12px] py-[7px]">
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#5f7283] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Last 30 days
              </p>
            </div>
            <button className="rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da]" type="button">
              Export List
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-[18px] py-[18px]">
        <div className="grid grid-cols-9 gap-[12px]">
          <button
            className="col-span-1 rounded-[14px] border-2 border-dashed border-[#9ed1ff] bg-[linear-gradient(135deg,rgba(234,248,255,0.92)_0%,rgba(255,255,255,0.82)_100%)] p-[16px] text-left shadow-[0_10px_24px_rgba(15,61,97,0.06)] transition-all hover:border-[#63b1ff] hover:bg-[linear-gradient(135deg,rgba(222,242,255,0.96)_0%,rgba(255,255,255,0.9)_100%)]"
            type="button"
          >
            <div className="flex h-full min-h-[140px] flex-col justify-between">
              <div className="flex items-start justify-between gap-[10px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Quick Action
                </p>
                <div className="flex size-[40px] items-center justify-center rounded-[14px] bg-[#1f83ff] shadow-[0_10px_24px_rgba(31,131,255,0.22)]">
                  <Plus className="size-[20px] text-white" strokeWidth={2.2} />
                </div>
              </div>
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] leading-[28px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  New Prospect
                </p>
                <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Add a lead, referral, or inbound contact.
                </p>
              </div>
            </div>
          </button>
          {summaryCards.map((card, index) => (
            <div className={`${summarySpans[index]} rounded-[14px] border p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`} key={card.label}>
              <div className="flex items-start justify-between gap-[12px]">
                <div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.label}
                  </p>
                  <p className={`mt-[8px] font-['Roboto:Bold',sans-serif] text-[34px] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.value}
                  </p>
                </div>
                <div className="rounded-[12px] bg-white/80 px-[10px] py-[8px] text-right shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[11px] uppercase tracking-[0.12em] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Trend
                  </p>
                  <p className="mt-[2px] font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.detail}
                  </p>
                </div>
              </div>
              <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.meta}
              </p>
            </div>
          ))}

          <div className="col-[1/span_6] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-center justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[24px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Prospect Grid
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Prioritized leads by score, response speed, and estimated pipeline value
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="rounded-[999px] bg-[#eef6ff] px-[12px] py-[8px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#0f69ac]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    18 qualified
                  </p>
                </div>
                <div className="rounded-[999px] bg-[#ddf4e8] px-[12px] py-[8px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#0b6b45]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    92 min avg follow-up
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[18px] grid grid-cols-[minmax(0,1.8fr)_minmax(0,1.3fr)_0.9fr_0.8fr_0.9fr_0.9fr_0.9fr] gap-[12px] border-b border-solid border-[#e8eef3] px-[10px] pb-[10px]">
              {["Company", "Contact", "Source", "Score", "Stage", "Value", "Response"].map((heading) => (
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {heading}
                </p>
              ))}
            </div>

            <div className="mt-[2px]">
              {prospects.map((prospect) => (
                <div className="grid grid-cols-[minmax(0,1.8fr)_minmax(0,1.3fr)_0.9fr_0.8fr_0.9fr_0.9fr_0.9fr] gap-[12px] border-b border-solid border-[#edf2f6] px-[10px] py-[14px] last:border-b-0" key={`${prospect.company}-${prospect.contact}`}>
                  <div className="min-w-0">
                    <p className="truncate font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {prospect.company}
                    </p>
                    <p className="mt-[3px] truncate font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Owner: {prospect.owner}
                    </p>
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {prospect.contact}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {prospect.source}
                  </p>
                  <div className="flex items-center gap-[8px]">
                    <div className="h-[7px] w-[56px] overflow-hidden rounded-full bg-[#e8f0f8]">
                      <div className="h-full rounded-full bg-[#1f83ff]" style={{ width: `${prospect.score}%` }} />
                    </div>
                    <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {prospect.score}
                    </p>
                  </div>
                  <div>
                    <span className={`inline-flex rounded-[999px] px-[10px] py-[5px] text-[12px] font-['Roboto:Bold',sans-serif] ${stageTone[prospect.stage]}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      {prospect.stage}
                    </span>
                  </div>
                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {prospect.value}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {prospect.responseTime}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-[7/span_3] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Response Time
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Speed to first touch for the latest prospect flow
                </p>
              </div>
              <CalendarClock className="size-[22px] text-[#1f83ff]" strokeWidth={1.8} />
            </div>

            <div className="mt-[18px] grid grid-cols-2 gap-[10px]">
              {[
                { label: "Median", value: "42 min" },
                { label: "SLA Met", value: "83%" },
                { label: "Under 30m", value: "19" },
                { label: "Needs Follow-up", value: "6" },
              ].map((item) => (
                <div className="rounded-[12px] border border-solid border-[#e4edf4] bg-white/80 px-[14px] py-[12px]" key={item.label}>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.label}
                  </p>
                  <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[22px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[16px] rounded-[12px] border border-solid border-[#e4edf4] bg-white/75 px-[14px] py-[12px]">
              <div className="flex items-center justify-between">
                <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Fastest Sources
                </p>
                <Hourglass className="size-[16px] text-[#5f7283]" strokeWidth={1.8} />
              </div>
              <div className="mt-[10px] flex flex-col gap-[10px]">
                {[
                  { label: "Referral", time: "14 min", share: "92% replied" },
                  { label: "Website", time: "28 min", share: "84% replied" },
                  { label: "Partner", time: "35 min", share: "79% replied" },
                ].map((item) => (
                  <div className="flex items-center justify-between gap-[10px]" key={item.label}>
                    <div>
                      <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item.label}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item.share}
                      </p>
                    </div>
                    <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-[1/span_4] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Conversion Funnel
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  From raw inquiry to active pipeline creation
                </p>
              </div>
              <Percent className="size-[22px] text-[#1f83ff]" strokeWidth={1.8} />
            </div>

            <div className="mt-[18px] flex flex-col gap-[12px]">
              {funnelSteps.map((step) => (
                <div className="rounded-[12px] border border-solid border-[#e4edf4] bg-white/75 p-[12px]" key={step.label}>
                  <div className="flex items-center justify-between">
                    <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {step.label}
                    </p>
                    <span className={`rounded-[999px] px-[10px] py-[4px] text-[12px] font-['Roboto:Bold',sans-serif] ${step.tone}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      {step.count}
                    </span>
                  </div>
                  <div className="mt-[10px] h-[10px] overflow-hidden rounded-full bg-[#e8f0f8]">
                    <div className="h-full rounded-full bg-[#1f83ff]" style={{ width: step.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-[5/span_5] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-center justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Score Distribution
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Lead quality mix and where the team should spend attention
                </p>
              </div>
              <BadgeCheck className="size-[22px] text-[#1f83ff]" strokeWidth={1.8} />
            </div>

            <div className="mt-[18px] grid grid-cols-[minmax(0,1.2fr)_80px_1fr] gap-x-[12px] gap-y-[12px] items-center">
              {scoreBuckets.map((bucket) => (
                <Fragment key={bucket.label}>
                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {bucket.label}
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {bucket.count} leads
                  </p>
                  <div className="h-[10px] overflow-hidden rounded-full bg-[#e8f0f8]">
                    <div className="h-full rounded-full" style={{ backgroundColor: bucket.color, width: bucket.bar }} />
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="mt-[18px] grid grid-cols-3 gap-[10px]">
              {[
                { label: "Best source", value: "Website", meta: "12 qualified leads" },
                { label: "Highest value", value: "Partner", meta: "$91K created" },
                { label: "Focus queue", value: "6 prospects", meta: "Score 70-84, no follow-up" },
              ].map((item) => (
                <div className="rounded-[12px] border border-solid border-[#e4edf4] bg-white/75 px-[14px] py-[12px]" key={item.label}>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.label}
                  </p>
                  <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[19px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.value}
                  </p>
                  <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.meta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TasksView({ onClose }: { onClose: () => void }) {
  const summaryCards = [
    {
      label: "My Tasks",
      value: "32",
      meta: "Across open queues",
      detail: "7 due today",
      accent: "bg-[linear-gradient(135deg,#eef8ff_0%,#dff1ff_100%)] border-[#cde9ff]",
      valueClass: "text-[#102c3f]",
    },
    {
      label: "In Progress",
      value: "11",
      meta: "Actively worked this week",
      detail: "4 blocked",
      accent: "bg-[linear-gradient(135deg,#fff8ee_0%,#ffefd5_100%)] border-[#f3dfb8]",
      valueClass: "text-[#9a5c00]",
    },
    {
      label: "Completed",
      value: "24",
      meta: "Closed in last 7 days",
      detail: "+6 vs previous week",
      accent: "bg-[linear-gradient(135deg,#f3fff8_0%,#e5f8ef_100%)] border-[#cfead9]",
      valueClass: "text-[#0b6b45]",
    },
    {
      label: "Avg Response",
      value: "3.2h",
      meta: "Assignment to first update",
      detail: "Within 4h SLA target",
      accent: "bg-[linear-gradient(135deg,#f7f4ff_0%,#ebe5ff_100%)] border-[#ddd4ff]",
      valueClass: "text-[#5f4aa6]",
    },
  ];

  const tasks = [
    { title: "Finalize Q2 renewal revision", assignee: "Parkash Chaudary", priority: "High", status: "In Progress", due: "Today, 4:30 PM", client: "Kumaan Pvt. Ltd." },
    { title: "Prepare discovery notes for Northwind", assignee: "Maya Chen", priority: "Medium", status: "Ready", due: "Today, 6:00 PM", client: "Northwind Energy" },
    { title: "Send pricing follow-up to Apex", assignee: "Mack Rod", priority: "High", status: "Waiting", due: "Tomorrow, 10:00 AM", client: "Apex Med Systems" },
    { title: "Review legal comments from UrbanAxis", assignee: "Kevin Smith", priority: "High", status: "Blocked", due: "Tomorrow, 2:00 PM", client: "UrbanAxis Retail" },
    { title: "Update proposal activity log", assignee: "Jacob M.", priority: "Low", status: "Ready", due: "Fri, 11:00 AM", client: "Harper Studios" },
    { title: "Confirm onboarding date options", assignee: "Diana Morris", priority: "Medium", status: "In Progress", due: "Fri, 3:30 PM", client: "Apex Med Systems" },
  ];

  const statusTone: Record<string, string> = {
    Ready: "bg-[#eef6ff] text-[#0f69ac]",
    "In Progress": "bg-[#fff3dd] text-[#9b6400]",
    Waiting: "bg-[#efeaff] text-[#6551b1]",
    Blocked: "bg-[#ffe4e4] text-[#a33f3f]",
  };

  const priorityTone: Record<string, string> = {
    High: "text-[#d14545]",
    Medium: "text-[#9a6500]",
    Low: "text-[#0b6b45]",
  };

  const boardColumns = [
    {
      label: "Today",
      count: 7,
      tone: "bg-[#eef8ff]",
      items: [
        { title: "Renewal revision sign-off", meta: "Kumaan Pvt. Ltd. • Parkash", emphasis: "Due 4:30 PM" },
        { title: "Northwind discovery notes", meta: "Northwind Energy • Maya", emphasis: "Due 6:00 PM" },
      ],
    },
    {
      label: "Up Next",
      count: 9,
      tone: "bg-[#f7f3ff]",
      items: [
        { title: "Apex pricing follow-up", meta: "Apex Med Systems • Mack", emphasis: "Tomorrow" },
        { title: "UrbanAxis legal review", meta: "UrbanAxis Retail • Kevin", emphasis: "Tomorrow" },
      ],
    },
    {
      label: "Waiting",
      count: 4,
      tone: "bg-[#fff8ee]",
      items: [
        { title: "Client approval on revised dates", meta: "Kumaan Pvt. Ltd. • Diana", emphasis: "External dependency" },
        { title: "Budget confirmation", meta: "Ember RetailCo • Maya", emphasis: "Pending client reply" },
      ],
    },
  ];

  const workload = [
    { label: "Parkash", count: 8, width: "76%", color: "#1f83ff" },
    { label: "Maya", count: 7, width: "68%", color: "#20a464" },
    { label: "Kevin", count: 6, width: "54%", color: "#8b7cff" },
    { label: "Mack", count: 5, width: "46%", color: "#d78b10" },
  ];

  const completionTrend = [
    { label: "Mon", value: 3 },
    { label: "Tue", value: 5 },
    { label: "Wed", value: 4 },
    { label: "Thu", value: 6 },
    { label: "Fri", value: 6 },
  ];
  const summarySpans = ["col-span-2", "col-span-2", "col-span-2", "col-span-2"];

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[64px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center gap-[14px] relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Tasks
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#6b7280] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Daily workload, due actions, and team execution health
            </p>
          </div>
          <button className="content-stretch flex items-center justify-center size-[32px]" onClick={onClose} type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-[18px] py-[18px]">
        <div className="grid grid-cols-9 gap-[12px]">
          <button
            className="col-span-1 rounded-[14px] border-2 border-dashed border-[#9ed1ff] bg-[linear-gradient(135deg,rgba(234,248,255,0.92)_0%,rgba(255,255,255,0.82)_100%)] p-[16px] text-left shadow-[0_10px_24px_rgba(15,61,97,0.06)] transition-all hover:border-[#63b1ff] hover:bg-[linear-gradient(135deg,rgba(222,242,255,0.96)_0%,rgba(255,255,255,0.9)_100%)]"
            type="button"
          >
            <div className="flex h-full min-h-[140px] flex-col justify-between">
              <div className="flex items-start justify-between gap-[10px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Quick Action
                </p>
                <div className="flex size-[40px] items-center justify-center rounded-[14px] bg-[#1f83ff] shadow-[0_10px_24px_rgba(31,131,255,0.22)]">
                  <Plus className="size-[20px] text-white" strokeWidth={2.2} />
                </div>
              </div>
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] leading-[28px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  New Task
                </p>
                <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Create a follow-up, proposal edit task, or client action item.
                </p>
              </div>
            </div>
          </button>
          {summaryCards.map((card, index) => (
            <div className={`${summarySpans[index]} rounded-[14px] border p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`} key={card.label}>
              <div className="flex items-start justify-between gap-[12px]">
                <div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.label}
                  </p>
                  <p className={`mt-[8px] font-['Roboto:Bold',sans-serif] text-[34px] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.value}
                  </p>
                </div>
                <div className="rounded-[12px] bg-white/80 px-[10px] py-[8px] text-right shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[11px] uppercase tracking-[0.12em] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Focus
                  </p>
                  <p className="mt-[2px] font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.detail}
                  </p>
                </div>
              </div>
              <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.meta}
              </p>
            </div>
          ))}

          <div className="col-[1/span_6] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-center justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[24px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Task Queue
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Priority work across proposals, opportunities, and follow-ups
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="rounded-[999px] bg-[#ffe4e4] px-[12px] py-[8px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#a33f3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    4 blocked
                  </p>
                </div>
                <div className="rounded-[999px] bg-[#ddf4e8] px-[12px] py-[8px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#0b6b45]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    83% on time
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[18px] grid grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_0.8fr_1fr_1fr_1fr] gap-[12px] border-b border-solid border-[#e8eef3] px-[10px] pb-[10px]">
              {["Task", "Account", "Priority", "Status", "Due", "Assignee"].map((heading) => (
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {heading}
                </p>
              ))}
            </div>

            <div className="mt-[2px]">
              {tasks.map((task) => (
                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_0.8fr_1fr_1fr_1fr] gap-[12px] border-b border-solid border-[#edf2f6] px-[10px] py-[14px] last:border-b-0" key={`${task.title}-${task.assignee}`}>
                  <div className="min-w-0">
                    <p className="truncate font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {task.title}
                    </p>
                    <p className="mt-[3px] truncate font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Client: {task.client}
                    </p>
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {task.client}
                  </p>
                  <p className={`font-['Roboto:Bold',sans-serif] text-[14px] ${priorityTone[task.priority]}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {task.priority}
                  </p>
                  <div>
                    <span className={`inline-flex rounded-[999px] px-[10px] py-[5px] text-[12px] font-['Roboto:Bold',sans-serif] ${statusTone[task.status]}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      {task.status}
                    </span>
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {task.due}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {task.assignee}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-[7/span_3] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Focus Board
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  What needs attention today and next
                </p>
              </div>
              <NotebookText className="size-[22px] text-[#1f83ff]" strokeWidth={1.8} />
            </div>

            <div className="mt-[16px] grid grid-cols-2 gap-[10px]">
              {[
                { label: "Ready Today", value: "5" },
                { label: "Blocked", value: "4" },
              ].map((item) => (
                <div className="rounded-[12px] border border-solid border-[#e4edf4] bg-white/80 px-[14px] py-[12px]" key={item.label}>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.label}
                  </p>
                  <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[22px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[18px] flex flex-col gap-[10px]">
              {boardColumns.map((column) => (
                <div className={`rounded-[12px] border border-solid border-[#e4edf4] p-[12px] ${column.tone}`} key={column.label}>
                  <div className="flex items-center justify-between">
                    <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {column.label}
                    </p>
                    <span className="rounded-[999px] bg-white px-[10px] py-[4px] text-[12px] font-['Roboto:Bold',sans-serif] text-[#41576a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {column.count}
                    </span>
                  </div>
                  <div className="mt-[10px]">
                    {column.items.map((item) => (
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-[10px] border-b border-solid border-white/80 py-[10px] last:border-b-0 last:pb-0 first:pt-0" key={item.title}>
                        <div className="min-w-0">
                          <p className="truncate font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {item.title}
                          </p>
                          <p className="mt-[4px] truncate font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {item.meta}
                          </p>
                        </div>
                        <p className="self-center whitespace-nowrap font-['Roboto:Bold',sans-serif] text-[12px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.emphasis}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-[1/span_4] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Workload Spread
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Open task distribution across key owners
                </p>
              </div>
              <UserRound className="size-[22px] text-[#1f83ff]" strokeWidth={1.8} />
            </div>

            <div className="mt-[18px] flex flex-col gap-[12px]">
              {workload.map((person) => (
                <div className="grid grid-cols-[110px_70px_minmax(0,1fr)] items-center gap-[12px] border-b border-solid border-[#e4edf4] py-[10px] last:border-b-0 last:pb-0 first:pt-0" key={person.label}>
                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {person.label}
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {person.count} open
                  </p>
                  <div className="h-[10px] overflow-hidden rounded-full bg-[#e8f0f8]">
                    <div className="h-full rounded-full" style={{ width: person.width, backgroundColor: person.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-[5/span_5] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Completion Trend
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Completed tasks by day plus execution notes
                </p>
              </div>
              <CalendarDays className="size-[22px] text-[#1f83ff]" strokeWidth={1.8} />
            </div>

            <div className="mt-[18px] grid grid-cols-[repeat(5,minmax(0,1fr))] gap-[12px] items-end">
              {completionTrend.map((item) => (
                <div className="flex flex-col items-center gap-[10px]" key={item.label}>
                  <div className="flex h-[120px] items-end">
                    <div className="w-[54px] rounded-t-[14px] bg-[linear-gradient(180deg,#1f83ff_0%,#80c8ff_100%)]" style={{ height: `${32 + item.value * 12}px` }} />
                  </div>
                  <div className="text-center">
                    <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {item.value}
                    </p>
                    <p className="mt-[2px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-[18px] grid grid-cols-3 gap-[10px]">
              {[
                { label: "Best day", value: "Thu / Fri", meta: "6 completed each day" },
                { label: "Oldest open", value: "4 days", meta: "2 tasks exceeded target age" },
                { label: "Team note", value: "Proposal edits peaking", meta: "Most volume from pricing changes" },
              ].map((item) => (
                <div className="rounded-[12px] border border-solid border-[#e4edf4] bg-white/75 px-[14px] py-[12px]" key={item.label}>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.label}
                  </p>
                  <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[19px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.value}
                  </p>
                  <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.meta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarView({ onClose }: { onClose: () => void }) {
  const summaryCards = [
    {
      label: "Today's Meetings",
      value: "08",
      meta: "Across sales and follow-up calls",
      detail: "3 client-facing",
      accent: "bg-[linear-gradient(135deg,#eef8ff_0%,#dff1ff_100%)] border-[#cde9ff]",
      valueClass: "text-[#102c3f]",
    },
    {
      label: "Open Slots",
      value: "05",
      meta: "Available today after 2 PM",
      detail: "Best gap: 4:00-5:30",
      accent: "bg-[linear-gradient(135deg,#f3fff8_0%,#e5f8ef_100%)] border-[#cfead9]",
      valueClass: "text-[#0b6b45]",
    },
    {
      label: "Avg Meeting Time",
      value: "42m",
      meta: "This week so far",
      detail: "Down 8m from last week",
      accent: "bg-[linear-gradient(135deg,#fff8ee_0%,#ffefd5_100%)] border-[#f3dfb8]",
      valueClass: "text-[#9a5c00]",
    },
    {
      label: "Follow-ups Due",
      value: "06",
      meta: "Need notes or next action",
      detail: "2 overdue",
      accent: "bg-[linear-gradient(135deg,#f7f4ff_0%,#ebe5ff_100%)] border-[#ddd4ff]",
      valueClass: "text-[#5f4aa6]",
    },
  ];

  const weekDays = [
    {
      label: "Mon 22",
      items: [
        { time: "09:00", title: "Renewal review", meta: "Kumaan Pvt. Ltd.", lane: "Sales", color: "#1f83ff" },
        { time: "14:30", title: "Pricing sync", meta: "Internal", lane: "Team", color: "#8b7cff" },
      ],
    },
    {
      label: "Tue 23",
      items: [
        { time: "10:00", title: "Discovery call", meta: "Northwind Energy", lane: "Client", color: "#20a464" },
        { time: "16:00", title: "Proposal walkthrough", meta: "Apex Med Systems", lane: "Client", color: "#1f83ff" },
      ],
    },
    {
      label: "Wed 24",
      items: [
        { time: "11:30", title: "Legal review", meta: "UrbanAxis Retail", lane: "Client", color: "#d78b10" },
        { time: "15:00", title: "Manager 1:1", meta: "Weekly cadence", lane: "Team", color: "#8b7cff" },
      ],
    },
    {
      label: "Thu 25",
      items: [
        { time: "09:30", title: "Outbound block", meta: "Lead callbacks", lane: "Work", color: "#20a464" },
        { time: "13:00", title: "Demo prep", meta: "Aziz Tech", lane: "Work", color: "#1f83ff" },
        { time: "17:30", title: "Proposal send", meta: "Follow-up reminder", lane: "Work", color: "#d14545" },
      ],
    },
    {
      label: "Fri 26",
      items: [
        { time: "10:30", title: "Executive update", meta: "Pipeline review", lane: "Team", color: "#8b7cff" },
        { time: "12:30", title: "Client lunch", meta: "Harper Studios", lane: "Client", color: "#20a464" },
      ],
    },
  ];

  const todayAgenda = [
    { time: "09:30 AM", title: "Kumaan renewal alignment", type: "Video", contact: "Parkash Chaudary", icon: <Phone className="size-[14px]" strokeWidth={1.8} /> },
    { time: "11:00 AM", title: "Northwind discovery call", type: "Meeting", contact: "Rina Patel", icon: <UserRound className="size-[14px]" strokeWidth={1.8} /> },
    { time: "03:00 PM", title: "Apex pricing follow-up", type: "Email review", contact: "Diana Morris", icon: <Mail className="size-[14px]" strokeWidth={1.8} /> },
    { time: "05:30 PM", title: "Demo prep notes", type: "Internal", contact: "Kevin Smith", icon: <NotebookText className="size-[14px]" strokeWidth={1.8} /> },
  ];

  const availabilityRows = [
    { label: "Morning", value: "2 open slots", bar: "32%", color: "#20a464" },
    { label: "Afternoon", value: "3 open slots", bar: "58%", color: "#1f83ff" },
    { label: "Evening", value: "1 open slot", bar: "18%", color: "#d78b10" },
  ];

  const followUps = [
    { title: "Send minutes to Northwind", due: "Today", owner: "Maya Chen" },
    { title: "Upload revised quote notes", due: "Today", owner: "Parkash Chaudary" },
    { title: "Confirm Friday lunch attendees", due: "Tomorrow", owner: "Jacob M." },
  ];
  const summarySpans = ["col-span-2", "col-span-2", "col-span-2", "col-span-2"];

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[64px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center gap-[14px] relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Calendar
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#6b7280] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Weekly planning, meetings, and availability overview
            </p>
          </div>
          <button className="content-stretch flex items-center justify-center size-[32px]" onClick={onClose} type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-[18px] py-[18px]">
        <div className="grid grid-cols-9 gap-[12px]">
          <button
            className="col-span-1 rounded-[14px] border-2 border-dashed border-[#9ed1ff] bg-[linear-gradient(135deg,rgba(234,248,255,0.92)_0%,rgba(255,255,255,0.82)_100%)] p-[16px] text-left shadow-[0_10px_24px_rgba(15,61,97,0.06)] transition-all hover:border-[#63b1ff] hover:bg-[linear-gradient(135deg,rgba(222,242,255,0.96)_0%,rgba(255,255,255,0.9)_100%)]"
            type="button"
          >
            <div className="flex h-full min-h-[140px] flex-col justify-between">
              <div className="flex items-start justify-between gap-[10px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Quick Action
                </p>
                <div className="flex size-[40px] items-center justify-center rounded-[14px] bg-[#1f83ff] shadow-[0_10px_24px_rgba(31,131,255,0.22)]">
                  <Plus className="size-[20px] text-white" strokeWidth={2.2} />
                </div>
              </div>
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] leading-[28px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  New Meeting
                </p>
                <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Create an appointment or client call.
                </p>
              </div>
            </div>
          </button>
          {summaryCards.map((card, index) => (
            <div className={`${summarySpans[index]} rounded-[14px] border p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`} key={card.label}>
              <div className="flex items-start justify-between gap-[12px]">
                <div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.label}
                  </p>
                  <p className={`mt-[8px] font-['Roboto:Bold',sans-serif] text-[34px] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.value}
                  </p>
                </div>
                <div className="rounded-[12px] bg-white/80 px-[10px] py-[8px] text-right shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[11px] uppercase tracking-[0.12em] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Snapshot
                  </p>
                  <p className="mt-[2px] font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.detail}
                  </p>
                </div>
              </div>
              <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.meta}
              </p>
            </div>
          ))}

          <div className="col-[1/span_6] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-center justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[24px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Weekly Schedule
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[14px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  This week across client calls, internal reviews, and follow-up blocks
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <button className="flex size-[30px] items-center justify-center rounded-[999px] border border-solid border-[#d7e7f6] bg-white" type="button">
                  <ChevronLeft className="size-[16px] text-[#5f7283]" strokeWidth={1.8} />
                </button>
                <div className="rounded-[999px] border border-solid border-[#d7e7f6] bg-white px-[14px] py-[8px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    22-26 Apr
                  </p>
                </div>
                <button className="flex size-[30px] items-center justify-center rounded-[999px] border border-solid border-[#d7e7f6] bg-white" type="button">
                  <ChevronRight className="size-[16px] text-[#5f7283]" strokeWidth={1.8} />
                </button>
              </div>
            </div>

            <div className="mt-[18px] grid grid-cols-5 gap-[8px]">
              {weekDays.map((day) => (
                <div className="rounded-[12px] border border-solid border-[#e4edf4] bg-white/75 p-[12px]" key={day.label}>
                  <div className="border-b border-solid border-[#edf2f6] pb-[8px]">
                    <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {day.label}
                    </p>
                  </div>
                  <div className="mt-[8px] flex flex-col gap-[8px]">
                    {day.items.map((item) => (
                      <div className="rounded-[10px] border border-solid border-[#edf2f6] bg-[#fbfdff] p-[10px]" key={`${day.label}-${item.time}-${item.title}`}>
                        <div className="flex items-center justify-between gap-[8px]">
                          <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {item.time}
                          </p>
                          <span className="rounded-[999px] px-[8px] py-[3px] text-[11px] font-['Roboto:Bold',sans-serif] text-white" style={{ backgroundColor: item.color, fontVariationSettings: "'wdth' 100" }}>
                            {item.lane}
                          </span>
                        </div>
                        <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[13px] leading-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.title}
                        </p>
                        <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.meta}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-[7/span_3] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Today's Agenda
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Next meetings and action blocks in sequence
                </p>
              </div>
              <CalendarClock className="size-[22px] text-[#1f83ff]" strokeWidth={1.8} />
            </div>

            <div className="mt-[16px] rounded-[12px] border border-solid border-[#e4edf4] bg-white/80 px-[14px] py-[12px]">
              <div className="flex items-center justify-between">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Next up
                </p>
                <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  11:00 AM
                </p>
              </div>
              <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Northwind discovery call
              </p>
              <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Rina Patel • Meeting room 2 / Teams bridge
              </p>
            </div>

            <div className="mt-[14px]">
              {todayAgenda.map((item) => (
                <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-[10px] border-b border-solid border-[#e4edf4] py-[10px] first:pt-0 last:border-b-0 last:pb-0" key={`${item.time}-${item.title}`}>
                  <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.time}
                  </p>
                  <div className="min-w-0">
                    <div className="flex items-center gap-[8px]">
                      <div className="flex size-[24px] items-center justify-center rounded-[999px] bg-[#eef6ff] text-[#1f83ff]">
                        {item.icon}
                      </div>
                      <p className="truncate font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {item.type} • {item.contact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-[1/span_4] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Availability
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Remaining capacity in today's working day
                </p>
              </div>
              <Hourglass className="size-[22px] text-[#1f83ff]" strokeWidth={1.8} />
            </div>

            <div className="mt-[18px] flex flex-col gap-[12px]">
              {availabilityRows.map((row) => (
                <div className="grid grid-cols-[100px_100px_minmax(0,1fr)] items-center gap-[12px] border-b border-solid border-[#e4edf4] py-[10px] first:pt-0 last:border-b-0 last:pb-0" key={row.label}>
                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.label}
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.value}
                  </p>
                  <div className="h-[10px] overflow-hidden rounded-full bg-[#e8f0f8]">
                    <div className="h-full rounded-full" style={{ width: row.bar, backgroundColor: row.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-[5/span_5] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[22px] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Follow-up Queue
                </p>
                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#6b7280]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Notes, recap emails, and next-step actions after meetings
                </p>
              </div>
              <Mail className="size-[22px] text-[#1f83ff]" strokeWidth={1.8} />
            </div>

            <div className="mt-[18px] grid grid-cols-[minmax(0,2fr)_110px_1fr] gap-[12px] border-b border-solid border-[#e8eef3] px-[10px] pb-[10px]">
              {["Follow-up", "Due", "Owner"].map((heading) => (
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {heading}
                </p>
              ))}
            </div>

            <div className="mt-[2px]">
              {followUps.map((item) => (
                <div className="grid grid-cols-[minmax(0,2fr)_110px_1fr] gap-[12px] border-b border-solid border-[#edf2f6] px-[10px] py-[14px] last:border-b-0" key={item.title}>
                  <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.title}
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.due}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.owner}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[18px] grid grid-cols-3 gap-[10px]">
              {[
                { label: "Client meetings", value: "5", meta: "This week" },
                { label: "Internal reviews", value: "4", meta: "This week" },
                { label: "Longest free gap", value: "1.5h", meta: "Today" },
              ].map((item) => (
                <div className="rounded-[12px] border border-solid border-[#e4edf4] bg-white/75 px-[14px] py-[12px]" key={item.label}>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.label}
                  </p>
                  <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[19px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.value}
                  </p>
                  <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.meta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59({
  activeView,
  onNavigateView,
}: {
  activeView: AppView;
  onNavigateView: (view: AppView) => void;
}) {
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItemId | null>(
    activeView === "salesProposal"
      ? "salesProposal"
      : activeView === "opportunities"
        ? "opportunities"
        : activeView === "prospects"
          ? "prospects"
          : activeView === "tasks"
            ? "tasks"
            : activeView === "calendar"
              ? "calendar"
          : null,
  );
  const [selectedProposalId, setSelectedProposalId] = useState("485932");
  const [proposals, setProposals] = useState<ProposalRecord[]>([
    {
      id: "485932",
      company: "Kumaan Pvt. Ltd.",
      clientName: "Kumaan Pvt. Ltd.",
      contactPerson: "Parkash Chaudary",
      title: "Q2 Renewal",
      amount: "$ 99,3942.00",
      status: "Accepted",
      owner: "Parkash Chaudary",
      ownerRole: "Manager",
      updatedAt: "Today, 11:20 AM",
      lastViewed: "Today, 2:15 PM",
      validUntil: "30 Apr 2026",
      probability: "82%",
      notes:
        "Renewal proposal for the Q2 staffing and operations package. Client approved pricing subject to revised onboarding timeline.\n\nKey dependencies include revised implementation dates, support coverage, and legal sign-off for the SLA addendum.",
      sections: [
        { label: "Proposal ID", value: "#485932" },
        { label: "Account", value: "Kumaan Pvt. Ltd." },
        { label: "Prepared By", value: "Parkash Chaudary" },
        { label: "Stage", value: "Accepted by client" },
      ],
      lineItems: [
        { item: "Staffing Renewal Package", quantity: 1, price: "$ 58,000.00", discount: "5%", total: "$ 55,100.00" },
        { item: "Support & Monitoring", quantity: 12, price: "$ 2,150.00", discount: "0%", total: "$ 25,800.00" },
        { item: "Implementation Services", quantity: 1, price: "$ 15,420.00", discount: "3%", total: "$ 14,957.40" },
      ],
      totals: {
        subtotal: "$ 95,857.40",
        tax: "$ 3,536.80",
        total: "$ 99,394.20",
      },
      activities: [
        { title: "Viewed by client", meta: "14 Apr 2026, 2:15 PM", actor: "Kumaan Procurement Team", description: "Client opened the proposal and reviewed the commercial summary and SLA details." },
        {
          title: "Revision 2 saved",
          meta: "12 Apr 2026, 5:40 PM",
          actor: "Parkash Chaudary",
          description: "Commercial terms and onboarding schedule updated before final send-out.",
          changes: [
            "Revised onboarding timeline from 14 days to 21 days.",
            "Updated support coverage to include Saturday escalation support.",
            "Adjusted implementation services line item discount from 0% to 3%.",
          ],
        },
        { title: "Sent to client", meta: "12 Apr 2026, 9:10 AM", actor: "Parkash Chaudary", description: "Proposal emailed to procurement and operations stakeholders for approval." },
        {
          title: "Revision 1 saved",
          meta: "10 Apr 2026, 4:20 PM",
          actor: "Maya Chen",
          description: "Updated implementation scope and revised support coverage after internal review.",
          changes: [
            "Added support and monitoring service block for 12 months.",
            "Clarified SLA addendum notes in proposal summary.",
          ],
        },
        { title: "Proposal created", meta: "08 Apr 2026, 10:30 AM", actor: "Parkash Chaudary", description: "Initial renewal proposal drafted and linked to the Q2 opportunity pipeline." },
      ],
    },
    {
      id: "485947",
      company: "Northwind Energy",
      clientName: "Northwind Energy",
      contactPerson: "Rina Patel",
      title: "Plant Audit Package",
      amount: "$ 52,180.00",
      status: "Rejected",
      owner: "Maya Chen",
      ownerRole: "Senior Sales Lead",
      updatedAt: "Yesterday, 5:40 PM",
      lastViewed: "Yesterday, 3:50 PM",
      validUntil: "22 Apr 2026",
      probability: "28%",
      notes:
        "Client declined the current commercial structure after reviewing implementation scope.\n\nThe next iteration should reduce the first-phase audit team and offer a phased rollout model.",
      sections: [
        { label: "Proposal ID", value: "#485947" },
        { label: "Account", value: "Northwind Energy" },
        { label: "Prepared By", value: "Maya Chen" },
        { label: "Stage", value: "Commercial feedback received" },
      ],
      lineItems: [
        { item: "Site Audit Team", quantity: 1, price: "$ 31,500.00", discount: "8%", total: "$ 28,980.00" },
        { item: "Process Mapping Workshop", quantity: 2, price: "$ 8,400.00", discount: "0%", total: "$ 16,800.00" },
        { item: "Risk Assessment Report", quantity: 1, price: "$ 5,800.00", discount: "0%", total: "$ 5,800.00" },
      ],
      totals: {
        subtotal: "$ 51,580.00",
        tax: "$ 600.00",
        total: "$ 52,180.00",
      },
      activities: [
        { title: "Rejected by client", meta: "15 Apr 2026, 5:40 PM", actor: "Northwind Energy", description: "Client declined the package due to budget concerns and phased rollout preference." },
        { title: "Sent to client", meta: "07 Apr 2026, 10:20 AM", actor: "Maya Chen", description: "Proposal delivered to operations leadership for review." },
        {
          title: "Revision saved",
          meta: "05 Apr 2026, 2:45 PM",
          actor: "Maya Chen",
          description: "Commercial team reduced the workshop scope and adjusted service fees.",
          changes: [
            "Reduced workshop sessions from 3 to 2.",
            "Applied 8% discount to site audit team line item.",
          ],
        },
        { title: "Proposal created", meta: "03 Apr 2026, 11:10 AM", actor: "Maya Chen", description: "Plant audit package drafted for the first-phase assessment engagement." },
      ],
    },
    {
      id: "486011",
      company: "UrbanAxis Retail",
      clientName: "UrbanAxis Retail",
      contactPerson: "Kevin Howard",
      title: "Warehouse Automation",
      amount: "$ 128,450.00",
      status: "Draft",
      owner: "Kevin Smith",
      ownerRole: "Business Consultant",
      updatedAt: "Today, 9:05 AM",
      lastViewed: "Today, 12:30 PM",
      validUntil: "03 May 2026",
      probability: "61%",
      notes:
        "Draft proposal in progress for warehouse automation and inventory forecasting.\n\nNeed confirmation on hardware leasing options and whether installation should be included in phase one.",
      sections: [
        { label: "Proposal ID", value: "#486011" },
        { label: "Account", value: "UrbanAxis Retail" },
        { label: "Prepared By", value: "Kevin Smith" },
        { label: "Stage", value: "Awaiting internal review" },
      ],
      lineItems: [
        { item: "Automation Blueprint", quantity: 1, price: "$ 42,000.00", discount: "0%", total: "$ 42,000.00" },
        { item: "Forecasting Engine Setup", quantity: 1, price: "$ 54,500.00", discount: "4%", total: "$ 52,320.00" },
        { item: "On-site Training", quantity: 3, price: "$ 9,800.00", discount: "0%", total: "$ 29,400.00" },
      ],
      totals: {
        subtotal: "$ 123,720.00",
        tax: "$ 4,730.00",
        total: "$ 128,450.00",
      },
      activities: [
        { title: "Draft reviewed", meta: "16 Apr 2026, 9:05 AM", actor: "Kevin Smith", description: "Internal review requested final confirmation on leasing and installation terms." },
        {
          title: "Revision saved",
          meta: "12 Apr 2026, 1:10 PM",
          actor: "Kevin Smith",
          description: "Forecasting engine setup and training services added to the scope.",
          changes: [
            "Added forecasting engine setup line item.",
            "Added 3 on-site training sessions.",
          ],
        },
        { title: "Proposal created", meta: "11 Apr 2026, 8:55 AM", actor: "Kevin Smith", description: "Initial warehouse automation proposal created from the linked opportunity." },
      ],
    },
    {
      id: "486025",
      company: "Apex Med Systems",
      clientName: "Apex Med Systems",
      contactPerson: "Diana Morris",
      title: "Service Expansion",
      amount: "$ 74,900.00",
      status: "Sent",
      owner: "Mack Rod",
      ownerRole: "Regional Manager",
      updatedAt: "Today, 1:35 PM",
      lastViewed: "Today, 4:05 PM",
      validUntil: "06 May 2026",
      probability: "54%",
      notes:
        "Proposal sent to the procurement and operations stakeholders.\n\nAwaiting confirmation on final facility count before the implementation timeline can be locked.",
      sections: [
        { label: "Proposal ID", value: "#486025" },
        { label: "Account", value: "Apex Med Systems" },
        { label: "Prepared By", value: "Mack Rod" },
        { label: "Stage", value: "Sent for approval" },
      ],
      lineItems: [
        { item: "Facility Expansion Audit", quantity: 1, price: "$ 24,500.00", discount: "0%", total: "$ 24,500.00" },
        { item: "Service Rollout Package", quantity: 1, price: "$ 38,400.00", discount: "5%", total: "$ 36,480.00" },
        { item: "Support Retainer", quantity: 6, price: "$ 2,650.00", discount: "0%", total: "$ 15,900.00" },
      ],
      totals: {
        subtotal: "$ 76,880.00",
        tax: "-$ 1,980.00",
        total: "$ 74,900.00",
      },
      activities: [
        { title: "Sent to client", meta: "17 Apr 2026, 1:35 PM", actor: "Mack Rod", description: "Proposal sent to procurement and operations stakeholders for review." },
        {
          title: "Revision saved",
          meta: "14 Apr 2026, 6:20 PM",
          actor: "Mack Rod",
          description: "Adjusted facility count assumptions and updated support retainer coverage.",
          changes: [
            "Updated facility count assumptions from 8 to 6 sites.",
            "Expanded support retainer coverage wording for after-hours requests.",
          ],
        },
        { title: "Proposal created", meta: "13 Apr 2026, 9:45 AM", actor: "Mack Rod", description: "Service expansion proposal prepared for multi-site rollout." },
      ],
    },
  ]);

  const handleSaveProposalLines = (proposalId: string, lineItems: ProposalRecord["lineItems"]) => {
    const subtotal = lineItems.reduce((sum, line) => sum + parseCurrency(line.total), 0);
    const tax = Math.max(subtotal * 0.038, 0);

    setProposals((current) =>
      current.map((proposal) =>
        proposal.id === proposalId
          ? {
              ...proposal,
              lineItems,
              totals: {
                subtotal: formatCurrency(subtotal),
                tax: formatCurrency(tax),
                total: formatCurrency(subtotal + tax),
              },
              updatedAt: "Just now",
            }
          : proposal,
      ),
    );
  };

  useEffect(() => {
    if (activeView === "salesProposal") {
      setActiveMenuItem("salesProposal");
      return;
    }

    if (activeView === "opportunities") {
      setActiveMenuItem("opportunities");
      return;
    }

    if (activeView === "prospects") {
      setActiveMenuItem("prospects");
      return;
    }

    if (activeView === "tasks") {
      setActiveMenuItem("tasks");
      return;
    }

    if (activeView === "calendar") {
      setActiveMenuItem("calendar");
      return;
    }

    if (activeView === "dashboard") {
      setActiveMenuItem(null);
    }
  }, [activeView]);

  const handleNavigate = (view: AppView, item: MenuItemId) => {
    setActiveMenuItem(item);
    onNavigateView(view);
  };

  return (
    <div className="h-full relative shrink-0 w-full">
      <div className="absolute h-full left-[72px] overflow-auto top-[8px] w-[calc(100%-84px)]" data-name="Canvas_WH">
        {activeView === "salesProposal" ? (
          <SalesProposalView
            onClose={() => onNavigateView("dashboard")}
            onSaveProposalLines={handleSaveProposalLines}
            onSelectProposal={setSelectedProposalId}
            proposals={proposals}
            selectedProposalId={selectedProposalId}
          />
        ) : activeView === "opportunities" ? (
          <OpportunitiesView onClose={() => onNavigateView("dashboard")} />
        ) : activeView === "prospects" ? (
          <ProspectsView />
        ) : activeView === "tasks" ? (
          <TasksView onClose={() => onNavigateView("dashboard")} />
        ) : activeView === "calendar" ? (
          <CalendarView onClose={() => onNavigateView("dashboard")} />
        ) : (
          <Frame2 />
        )}
      </div>
      <LeftMenu
        activeItem={activeMenuItem}
        isDashboardActive={activeView === "dashboard"}
        onGoDashboard={() => onNavigateView("dashboard")}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

function Group18() {
  return (
    <div className="h-[38px] overflow-hidden relative shrink-0 w-[40px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 38.0843">
        <g id="Group 4093">
          <path d="M40 0H0V38.0843H40V0Z" fill="var(--fill-0, #2084C4)" id="Rectangle 1670" />
          <path d={svgPaths.p26316b00} fill="var(--fill-0, white)" id="Icon material-home" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[36px]" data-name="Group">
      <div className="absolute inset-[-8.33%_-25%_-25%_-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <g filter="url(#filter0_d_1_1863)" id="Group">
            <path d={svgPaths.p3eb73200} fill="var(--fill-0, #002640)" id="Ellipse 344" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_1_1863" width="48" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="3" dy="3" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1863" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1863" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 h-[6.263px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.749px_-0.402px] mask-size-[6.283px_5.953px] ml-0 mt-0 relative row-1 w-[2.194px]" style={{ maskImage: `url('${imgGroup97}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.19451 6.26301">
        <g id="Group 97">
          <path d={svgPaths.p147d1580} fill="var(--fill-0, #2C2A2B)" id="Path 143" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.75px] mt-[0.4px] place-items-start relative row-1">
      <Group4 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[23.75px] mt-[9.65px] place-items-start relative row-1">
      <ClipPathGroup1 />
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 h-[6.263px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.067px_-1.029px] mask-size-[7.48px_7.205px] ml-0 mt-0 relative row-1 w-[2.197px]" style={{ maskImage: `url('${imgGroup100}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.19736 6.26296">
        <g id="Group 100">
          <path d={svgPaths.p16036500} fill="var(--fill-0, #2C2A2B)" id="Path 148" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[-0.07px] mt-[1.03px] place-items-start relative row-1">
      <Group7 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[9.03px] place-items-start relative row-1">
      <ClipPathGroup2 />
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 h-[6.43px] ml-[13.96px] mt-[1.51px] relative row-1 w-[2.012px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01172 6.43021">
        <g id="Group 103">
          <path d={svgPaths.p3f11b100} fill="var(--fill-0, white)" id="Path 150" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 h-[14.571px] ml-[22.07px] mt-[5.25px] relative row-1 w-[2.169px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16873 14.5709">
        <g id="Group 104">
          <path d={svgPaths.p1381fa00} fill="var(--fill-0, #2C2A2B)" id="Path 152" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="col-1 h-[14.574px] ml-[6.59px] mt-[5.25px] relative row-1 w-[2.169px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16909 14.5736">
        <g id="Group 105">
          <path d={svgPaths.p66b2c00} fill="var(--fill-0, #2C2A2B)" id="Path 153" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 h-[3.974px] ml-[8.48px] mt-[10.05px] relative row-1 w-[13.786px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7857 3.97448">
        <g id="Group 106">
          <path d={svgPaths.p375f9500} fill="var(--fill-0, #2C2A2B)" id="Path 155" />
          <path d={svgPaths.p2ffd3800} fill="var(--fill-0, #2C2A2B)" id="Path 156" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[5.951px] ml-[23.75px] mt-[9.65px] relative row-1 w-[6.282px]" data-name="Path 142">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.28231 5.95088">
          <path d={svgPaths.p3e06ab00} fill="var(--fill-0, #DBE48E)" id="Path 142" />
        </svg>
      </div>
      <Group6 />
      <div className="col-1 h-[4.711px] ml-[24.1px] mt-[10.89px] relative row-1 w-[2.97px]" data-name="Path 145">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.97033 4.71069">
          <path d={svgPaths.p139ae600} fill="var(--fill-0, #2C2A2B)" id="Path 145" />
        </svg>
      </div>
      <div className="col-1 h-[5.952px] ml-[0.6px] mt-[9.65px] relative row-1 w-[6.282px]" data-name="Path 146">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.28242 5.95157">
          <path d={svgPaths.p142fd600} fill="var(--fill-0, #5FAED5)" id="Path 146" />
        </svg>
      </div>
      <div className="col-1 h-[4.7px] ml-[3.93px] mt-[10.89px] relative row-1 w-[2.86px]" data-name="Path 147">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.86005 4.69966">
          <path d={svgPaths.p258d3e00} fill="var(--fill-0, #2C2A2B)" id="Path 147" />
        </svg>
      </div>
      <Group9 />
      <div className="col-1 h-[14.463px] ml-[4.29px] mt-[5.28px] relative row-1 w-[22.156px]" data-name="Path 149">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1563 14.4629">
          <path d={svgPaths.p20fc1b00} fill="url(#paint0_linear_1_1742)" id="Path 149" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1742" x1="0.731159" x2="21.403" y1="7.23147" y2="7.23147">
              <stop stopColor="#5FAED5" />
              <stop offset="1" stopColor="#DBE48D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group10 />
      <div className="col-1 h-[2.548px] ml-[11.89px] mt-0 relative row-1 w-[2.839px]" data-name="Path 151">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83857 2.54834">
          <path d={svgPaths.p1545ec00} fill="var(--fill-0, white)" id="Path 151" />
        </svg>
      </div>
      <Group11 />
      <Group12 />
      <div className="col-1 h-[10.099px] ml-[6.62px] mt-[7.58px] relative row-1 w-[17.489px]" data-name="Path 154">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4886 10.0991">
          <path d={svgPaths.p1ede6d80} fill="var(--fill-0, white)" id="Path 154" />
        </svg>
      </div>
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group14 />
    </div>
  );
}

function Robot() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1.99px] mt-[5.85px] place-items-start relative row-1" data-name="robot">
      <Group15 />
      <div className="col-1 ml-[14.78px] mt-[14.3px] relative row-1 size-[1.177px]" data-name="Path 184">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.17679 1.17679">
          <path d={svgPaths.p321c0c00} fill="var(--fill-0, #2C2A2B)" id="Path 184" />
        </svg>
      </div>
      <div className="col-1 ml-[21.31px] mt-[11.41px] relative row-1 size-[0.628px]" data-name="Path 187">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.628032 0.628031">
          <path d={svgPaths.p1541ed80} fill="var(--fill-0, white)" id="Path 187" />
        </svg>
      </div>
      <div className="col-1 ml-[11.18px] mt-[11.41px] relative row-1 size-[0.628px]" data-name="Path 188">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.628207 0.628207">
          <path d={svgPaths.p30de7100} fill="var(--fill-0, white)" id="Path 188" />
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group3 />
      <Robot />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#edf5fa] content-stretch flex h-[38px] items-center justify-between leading-[0] px-[8px] relative shrink-0 w-[242px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#9f9f9f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal]">{`Question? Ask `}</span>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Aura
        </span>
      </p>
      <Group16 />
    </div>
  );
}

function Group17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.794px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.7944 20">
        <g id="Group 3180">
          <path clipRule="evenodd" d={svgPaths.p7077f00} fill="var(--fill-0, #002640)" fillRule="evenodd" id="Path 18" />
          <path clipRule="evenodd" d={svgPaths.pa8cac00} fill="url(#paint0_linear_1_1723)" fillRule="evenodd" id="Path 19" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1723" x1="1.09157e-08" x2="42.7944" y1="10" y2="10">
            <stop stopColor="#009CDF" />
            <stop offset="1" stopColor="#CDD200" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-white h-full relative shrink-0" data-name="Logo">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-full items-center justify-center px-[12px] py-[6px] relative">
          <Group17 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end relative shrink-0">
      <Frame />
      <div className="flex flex-row items-center self-stretch">
        <Logo />
      </div>
    </div>
  );
}

function Frame45({ onGoHome }: { onGoHome: () => void }) {
  return (
    <div className="col-1 content-stretch flex h-[38px] items-center justify-between ml-0 mt-0 relative row-1 w-full">
      <button className="h-[38px] shrink-0 w-[40px]" onClick={onGoHome} type="button">
        <Group18 />
      </button>
      <Frame46 />
    </div>
  );
}

function Group19({ onGoHome }: { onGoHome: () => void }) {
  return (
    <div className="grid grid-rows-[max-content] leading-[0] overflow-hidden place-items-start relative shrink-0 w-full">
      <div className="col-1 h-[38px] ml-0 mt-0 relative row-1 w-full">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 38">
          <path d="M1920 0H0V38H1920V0Z" fill="var(--fill-0, #002640)" id="Rectangle 5421" />
        </svg>
      </div>
      <Frame45 onGoHome={onGoHome} />
    </div>
  );
}

export default function WidgetOnWindowHome() {
  const [screenMode, setScreenMode] = useState<ScreenMode>("home");
  const [activeModuleName, setActiveModuleName] = useState<string | null>(null);
  const [activeModuleView, setActiveModuleView] = useState<AppView>("dashboard");
  const openCrmModuleDashboard = () => {
    setActiveModuleName("CRM");
    setActiveModuleView("dashboard");
    setScreenMode("crm");
  };

  return (
    <div className="content-stretch flex flex-col items-start relative size-full min-h-0 overflow-hidden" data-name="Widget on Window Home" style={{ backgroundImage: "linear-gradient(129.795deg, rgb(199, 232, 255) 20.389%, rgb(255, 255, 196) 116.98%)" }}>
      <div className="content-stretch flex h-[80px] items-center justify-between px-[12px] relative shrink-0 w-full" data-name="Top Bar">
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <button
            className="bg-gradient-to-b from-[rgba(255,255,255,0.7)] relative rounded-[8px] shrink-0 to-[rgba(255,255,255,0.49)]"
            data-name="Menu Button"
            onClick={openCrmModuleDashboard}
            type="button"
          >
            <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
              <MaterialSymbolsMenu />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
          </button>
          <Frame73
            currentScreen={screenMode}
            moduleName={activeModuleName}
            onGoHome={() => setScreenMode("home")}
            onGoModule={activeModuleName === "CRM" ? openCrmModuleDashboard : undefined}
          />
        </div>
        <div className="ml-auto mr-[12px]">
          <Frame1 />
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden w-full">
        {screenMode === "home" ? (
          <HomeView />
        ) : (
          <Frame59
            activeView={activeModuleView}
            onNavigateView={setActiveModuleView}
          />
        )}
      </div>
      <div className="shrink-0 w-full">
        <div className="overflow-hidden">
          <Group19 onGoHome={() => setScreenMode("home")} />
        </div>
      </div>
    </div>
  );
}
