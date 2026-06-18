import { Fragment, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CalendarClock,
  CalendarDays,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleDollarSign,
  Download,
  Eye,
  ExternalLink,
  FilePlus2,
  FileSpreadsheet,
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
  ReceiptText,
  MoreVertical,
  RotateCcw,
  Search,
  Send,
  Ticket,
  Trash2,
  UserRound,
  WalletCards,
} from "lucide-react";
import { register as registerDashboardWidth, unregister as unregisterDashboardWidth } from "../../lib/dashboardWidth";
import { useAdaptiveRowCount } from "../../lib/useAdaptiveRowCount";
import svgPaths from "./svg-gcxtz2mw3y";
import imgImage34 from "./67915b5281a364c5879b410415ba1e8e9e7f1129.png";
import { imgImage33, imgGroup97, imgGroup100 } from "./svg-k0rdy";

function MaterialSymbolsMenu() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:menu">
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
    <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]" data-name="Group">
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
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[-6px] mt-0 place-items-start relative row-1" data-name="Mask Group 18">
      <div className="col-1 h-[37px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6px_0px] mask-size-[32px_32px] ml-0 mt-0 relative row-1 w-[44px]" data-name="Image 33" style={{ maskImage: `url('${imgImage33}')` }}>
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
      <div className="bg-gradient-to-b from-[rgba(255,255,255,0.7)] h-[32px] relative rounded-[8px] shrink-0 to-[rgba(255,255,255,0.49)]" data-name="Icons Group">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Slot />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[4px] relative shrink-0" data-name="User Info">
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
                currentScreen !== "home" ? "text-black" : "text-[rgba(0,0,0,0.4)]"
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
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[14px] text-[#102C3F] w-[98px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
          <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[14px] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-[#102C3F] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <DashboardWidgetHeader icon={<Mail className="size-[18px] text-black" strokeWidth={2} />} subtitle="synced 5 mins ago" title="Inbox" />
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
    <DashboardWidgetHeader icon={<Hourglass className="size-[18px] text-black" strokeWidth={2} />} subtitle="Past 12 Months" title="Lost Leads" />
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
    <DashboardWidgetHeader icon={<BadgeCheck className="size-[18px] text-black" strokeWidth={2} />} subtitle="Past 12 Months" title="Closed Leads" />
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
    <DashboardWidgetHeader icon={<UserRound className="size-[18px] text-black" strokeWidth={2} />} subtitle="Past 12 Months" title="Total Leads" />
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
    <div className="relative shrink-0 w-[286px]">
      <DashboardWidgetHeader icon={<Mail className="size-[18px] text-black" strokeWidth={2} />} title="Inbox" />
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
      <DashboardWidgetHeader icon={<CalendarDays className="size-[18px]" strokeWidth={1.9} />} title="Calendar" />
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

function DashboardWidgetHeader({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const token = registerDashboardWidth(rootRef.current);
    return () => unregisterDashboardWidth(token);
  }, []);
  return (
    <div ref={rootRef} className="flex min-w-0 items-center gap-[10px]">
      {icon ? (
        <div
          className="flex shrink-0 items-center justify-center self-center rounded-[12px] bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(232,244,255,0.96)_100%)] text-black shadow-[inset_0_0_0_1px_rgba(0,131,218,0.10)] [&>svg]:!w-[clamp(18px,calc(var(--dash-inline-size,100vw)*0.012500),22px)] [&>svg]:!h-[clamp(18px,calc(var(--dash-inline-size,100vw)*0.012500),22px)]"
          style={{
            width: "clamp(32px, calc(var(--dash-inline-size, 100vw) * 0.022750), 40px)",
            height: "clamp(32px, calc(var(--dash-inline-size, 100vw) * 0.022750), 40px)",
          }}
        >
          {icon}
        </div>
      ) : null}
      <div className="min-w-0">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] text-[clamp(16px,calc(var(--dash-inline-size,100vw)*0.011375),17px)] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
        {subtitle ? (
          <p className="mt-[2px] font-['Roboto:Regular',sans-serif] font-normal leading-[1.3] text-[clamp(12px,calc(var(--dash-inline-size,100vw)*0.009625),13px)] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function DashboardSearchWidget({
  placeholder,
}: {
  placeholder: string;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="col-[1/span_9] bg-transparent py-[18px]">
      <div className="flex h-full w-full items-center justify-center">
        <div
          className="flex w-[80%] items-center gap-[12px] rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] px-[18px] py-[16px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]"
          style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
        >
          <svg className="size-[1.125em] shrink-0 text-[#1f83ff]" fill="none" viewBox="0 0 20 20">
            <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M13 13L17 17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          </svg>
          <input
            className="min-w-0 flex-1 bg-transparent font-['Roboto:Regular',sans-serif] text-[0.875em] text-[#102c3f] outline-none placeholder:text-[#8a95a3]"
            onChange={(event) => setValue(event.target.value)}
            placeholder={placeholder}
            style={{ fontVariationSettings: "'wdth' 100" }}
            type="text"
            value={value}
          />
        </div>
      </div>
    </div>
  );
}

function NewRecordWidget({
  title,
  subtitle,
  onClick,
}: {
  title: string;
  subtitle: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="col-span-1 relative overflow-hidden rounded-[14px] border-2 border-dashed border-[#9ed1ff] bg-[linear-gradient(135deg,rgba(234,248,255,0.92)_0%,rgba(255,255,255,0.82)_100%)] p-[0.875em] text-left shadow-[0_10px_24px_rgba(15,61,97,0.06)] transition-all hover:border-[#63b1ff] hover:bg-[linear-gradient(135deg,rgba(222,242,255,0.96)_0%,rgba(255,255,255,0.9)_100%)]"
      onClick={onClick}
      style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
      type="button"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex justify-end">
          <div className="flex size-[1.75em] items-center justify-center rounded-[10px] bg-[#1f83ff] shadow-[0_10px_24px_rgba(31,131,255,0.22)]">
            <Plus className="size-[1em] text-white" strokeWidth={2.2} />
          </div>
        </div>
        <div>
          <p className="font-['Roboto:Medium',sans-serif] font-medium text-[0.75em] leading-[1.2] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {title}
          </p>
          <p className="mt-[0.25em] line-clamp-2 font-['Roboto:Regular',sans-serif] text-[0.625em] leading-[1.35] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {subtitle}
          </p>
        </div>
      </div>
    </button>
  );
}

function DynamicRowsWidget({
  className,
  title,
  rows,
}: {
  className: string;
  title: string;
  rows: Array<{
    label: string;
    badge: string;
  }>;
}) {
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState(rows.length);
  const [pageIndex, setPageIndex] = useState(0);
  const pageCount = Math.max(1, Math.ceil(rows.length / rowsPerPage));
  const safePageIndex = Math.min(pageIndex, pageCount - 1);
  const visibleRows = rows.slice(safePageIndex * rowsPerPage, safePageIndex * rowsPerPage + rowsPerPage);
  const showVerticalPager = rows.length > rowsPerPage;
  const sharedRowClass = "grid grid-cols-[minmax(0,1fr)_auto] gap-[12px] items-center border-b border-solid border-[#e2eaf1] last:border-b-0 px-[10px] py-[14px]";
  const sharedBadgeClass = "inline-flex shrink-0 rounded-[999px] bg-[#eef6ff] font-['Roboto:Bold',sans-serif] text-[12px] text-[#0f69ac] px-[12px] py-[6px]";

  useLayoutEffect(() => {
    const node = widgetRef.current;

    if (!node) {
      return;
    }

    // Chrome = root padding (18 + 18) + title line (18 * 1.2) + mt before rows (18) ≈ 76
    // Row height = py (14 + 14) + label line (14 * 1.2) + border (1) ≈ 46; last row has no border
    // Bottom breathing buffer ensures the last row sits comfortably above the bottom edge.
    // Tuned so H≈400 → 5 rows (cascading: 460→6, 500→7, 350→4).
    const ROW_HEIGHT = 46;
    const BOTTOM_BREATHING = 64;
    const CHROME_HEIGHT = 76 + BOTTOM_BREATHING;

    const updateRowsPerPage = () => {
      const available = node.clientHeight - CHROME_HEIGHT;
      const fits = Math.max(1, Math.floor((available + 1) / ROW_HEIGHT));
      setRowsPerPage((current) => (current === fits ? current : fits));
    };

    updateRowsPerPage();

    const resizeObserver = new ResizeObserver(() => {
      updateRowsPerPage();
    });

    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setPageIndex((current) => Math.min(current, Math.max(0, pageCount - 1)));
  }, [pageCount]);

  return (
    <div
      className={`${className} relative flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]`}
      ref={widgetRef}
    >
      <p className="truncate font-['Roboto:Medium',sans-serif] text-[18px] leading-[1.2] text-[#111827]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {title}
      </p>
      <div className={`mt-[18px] flex min-h-0 flex-1 flex-col ${showVerticalPager ? "pr-[40px]" : ""}`}>
        {visibleRows.map((row) => (
          <div className={sharedRowClass} key={`${row.label}-${row.badge}`}>
            <div className="min-w-0">
              <p
                className="truncate font-['Roboto:Medium',sans-serif] text-[14px] leading-[1.2] text-[#102c3f]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {row.label}
              </p>
            </div>
            <div className="flex items-center justify-end">
              <span className={sharedBadgeClass} style={{ fontVariationSettings: "'wdth' 100" }}>
                {row.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
      {showVerticalPager ? (
        <div className="absolute bottom-[18px] right-[18px] top-[52px] flex items-center">
          <div className="flex flex-col items-center gap-[8px]">
            <button
              className={`flex size-[32px] items-center justify-center rounded-[12px] border border-solid transition-colors ${
                safePageIndex > 0
                  ? "border-[#d8e5f0] bg-white text-[#0083da] hover:border-[#c6dcf1] hover:bg-[#f7fbff]"
                  : "cursor-not-allowed border-[#e2eaf1] bg-white/60 text-[#b8c6d2]"
              }`}
              disabled={safePageIndex === 0}
              onClick={() => setPageIndex((current) => Math.max(0, current - 1))}
              type="button"
            >
              <ChevronUp className="size-[16px]" strokeWidth={1.9} />
            </button>
            <p className="font-['Roboto:Medium',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {safePageIndex + 1} of {pageCount}
            </p>
            <button
              className={`flex size-[32px] items-center justify-center rounded-[12px] border border-solid transition-colors ${
                safePageIndex < pageCount - 1
                  ? "border-[#d8e5f0] bg-white text-[#0083da] hover:border-[#c6dcf1] hover:bg-[#f7fbff]"
                  : "cursor-not-allowed border-[#e2eaf1] bg-white/60 text-[#b8c6d2]"
              }`}
              disabled={safePageIndex >= pageCount - 1}
              onClick={() => setPageIndex((current) => Math.min(pageCount - 1, current + 1))}
              type="button"
            >
              <ChevronDown className="size-[16px]" strokeWidth={1.9} />
            </button>
          </div>
        </div>
      ) : null}
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
            <DashboardWidgetHeader
              icon={<UserRound className="size-[18px]" strokeWidth={1.9} />}
              subtitle="Count and contribution share"
              title="Lead Sources"
            />
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
            <DashboardWidgetHeader
              icon={<CircleDollarSign className="size-[18px]" strokeWidth={1.9} />}
              subtitle="Lead to deal flow across the current pipeline"
              title="Opportunity Funnel"
            />
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
          <DashboardWidgetHeader icon={<Send className="size-[18px]" strokeWidth={1.9} />} title="Instagram Analytics" />
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
  const summaryCards = [
    {
      label: "Total Leads",
      value: "320",
      meta: "Captured across all sources · past 12 months",
      detail: "+18 this week",
      accent: "border-[#cde9ff]",
      valueClass: "text-[#102c3f]",
    },
    {
      label: "Closed Leads",
      value: "31",
      meta: "Won opportunities · past 12 months",
      detail: "9.7% win rate",
      accent: "border-[#cfead9]",
      valueClass: "text-[#0b6b45]",
    },
    {
      label: "Lost Leads",
      value: "12",
      meta: "Disqualified or closed-lost · past 12 months",
      detail: "Top reason: pricing",
      accent: "border-[#f5cfcf]",
      valueClass: "text-[#b04343]",
    },
    {
      label: "Active Tasks",
      value: "08",
      meta: "Open follow-ups across the team",
      detail: "3 due today",
      accent: "border-[#f3dfb8]",
      valueClass: "text-[#9a5c00]",
    },
  ];
  const summarySpans = ["col-span-2", "col-span-2", "col-span-2", "col-span-2"];

  const leadSources = [
    { source: "Website", count: 128, percentage: 40, accent: "#1F83FF" },
    { source: "LinkedIn", count: 86, percentage: 27, accent: "#0077B5" },
    { source: "Email Campaign", count: 54, percentage: 17, accent: "#EA4335" },
    { source: "Referral", count: 32, percentage: 10, accent: "#22C55E" },
    { source: "Walk-In", count: 20, percentage: 6, accent: "#F59E0B" },
  ];

  const funnelStages = [
    { label: "Leads", count: 320, rate: "100%", accent: "#1F83FF", width: "100%", note: "All captured opportunities" },
    { label: "Qualified", count: 214, rate: "67%", accent: "#38BDF8", width: "78%", note: "Conversion from Leads" },
    { label: "Proposal", count: 126, rate: "39%", accent: "#34D399", width: "58%", note: "Conversion from Qualified" },
    { label: "Negotiation", count: 74, rate: "23%", accent: "#F59E0B", width: "38%", note: "Conversion from Proposal" },
    { label: "Deals Won", count: 31, rate: "10%", accent: "#0F9D89", width: "20%", note: "Conversion from Negotiation" },
  ];

  const inboxItems = [
    { sender: "Maya Chen", subject: "QA staffing plan discussion", time: "10:24 AM", unread: true },
    { sender: "Kevin Smith", subject: "Pricing follow-up for Apex Med", time: "09:02 AM", unread: true },
    { sender: "Mack Rod", subject: "Vendor contract redlines", time: "Yesterday", unread: false },
    { sender: "Diana Morris", subject: "Renewal terms — Apex Med", time: "Yesterday", unread: true },
    { sender: "Rina Patel", subject: "Northwind security review", time: "Mon", unread: false },
    { sender: "Parkash Chaudary", subject: "PO confirmation needed", time: "Mon", unread: true },
    { sender: "Tariq Aziz", subject: "Demo recording shared", time: "Fri", unread: false },
    { sender: "Hannah Lee", subject: "Q3 forecast inputs", time: "Fri", unread: false },
    { sender: "Marco Vega", subject: "Re: Mainline rollout plan", time: "Thu", unread: false },
    { sender: "Ada Owusu", subject: "Implementation kickoff agenda", time: "Thu", unread: false },
  ];

  const calendarItems = [
    { time: "11:00 AM", title: "Northwind discovery call", meta: "Rina Patel · Teams" },
    { time: "03:00 PM", title: "Aziz Tech demo", meta: "Sales · Meeting room 2" },
    { time: "05:30 PM", title: "KM demo prep", meta: "Internal · Kevin Smith" },
    { time: "Tue 09:30", title: "Apex Med pricing review", meta: "Diana Morris · Zoom" },
    { time: "Tue 11:00", title: "Pipeline retro", meta: "Sales team · Room 3" },
    { time: "Tue 02:00", title: "Mainline implementation sync", meta: "Marco Vega · Teams" },
    { time: "Thu 10:00", title: "Quarterly forecast review", meta: "Leadership · Boardroom" },
    { time: "Thu 03:30", title: "Onboarding: Acme renewal", meta: "Hannah Lee · Teams" },
  ];

  const taskItems = [
    { title: "Finalize Q2 renewal revision", meta: "Kumaan Pvt. Ltd. · Parkash", due: "Today" },
    { title: "Prepare discovery notes for Northwind", meta: "Northwind Energy · Maya", due: "Today" },
    { title: "Send pricing follow-up to Apex", meta: "Apex Med Systems · Mack", due: "Tomorrow" },
    { title: "Share security questionnaire with Northwind", meta: "Northwind Energy · Rina", due: "Tomorrow" },
    { title: "Draft implementation SOW", meta: "Mainline · Marco", due: "Wed" },
    { title: "Update CRM contact roles", meta: "Apex Med · Diana", due: "Wed" },
    { title: "Confirm legal review window", meta: "Acme · Hannah", due: "Thu" },
    { title: "Send recap from demo to Aziz", meta: "Aziz Tech · Tariq", due: "Thu" },
  ];

  const customerRows = [
    { name: "Kumaan Pvt. Ltd.", contact: "Parkash Chaudary", stage: "Negotiation", value: "$ 92K", response: "2h" },
    { name: "Northwind Energy", contact: "Rina Patel", stage: "Proposal", value: "$ 64K", response: "4h" },
    { name: "Apex Med Systems", contact: "Diana Morris", stage: "Qualified", value: "$ 48K", response: "1h" },
    { name: "UrbanAxis Retail", contact: "Kevin Smith", stage: "Negotiation", value: "$ 81K", response: "6h" },
    { name: "Mainline Logistics", contact: "Marco Vega", stage: "Proposal", value: "$ 58K", response: "3h" },
    { name: "Aziz Tech Group", contact: "Tariq Aziz", stage: "Discovery", value: "$ 39K", response: "8h" },
    { name: "Acme Holdings", contact: "Hannah Lee", stage: "Negotiation", value: "$ 110K", response: "1h" },
    { name: "Brightwave Media", contact: "Ada Owusu", stage: "Qualified", value: "$ 27K", response: "12h" },
    { name: "Polar Foods", contact: "Owen Reilly", stage: "Discovery", value: "$ 34K", response: "5h" },
    { name: "Vertex Industries", contact: "Sara Ng", stage: "Proposal", value: "$ 72K", response: "2h" },
    { name: "Cascade Health", contact: "Liam Park", stage: "Negotiation", value: "$ 95K", response: "4h" },
    { name: "Helix Robotics", contact: "Iris Tan", stage: "Discovery", value: "$ 41K", response: "9h" },
    { name: "Northcove Marine", contact: "Ben Patel", stage: "Qualified", value: "$ 53K", response: "2h" },
    { name: "Stellar Print", contact: "Nora Sims", stage: "Proposal", value: "$ 36K", response: "7h" },
  ];

  const socialStats = [
    { label: "Posts This Month", value: "24", trend: "+12%" },
    { label: "Avg. Likes", value: "8.4K", trend: "+5.2%" },
    { label: "Comments", value: "1.2K", trend: "+18%" },
    { label: "Story Views", value: "450K", trend: "+22%" },
  ];

  // Adaptive row counts — each list container measures its own available height
  // and the hook returns floor(clientHeight / rowHeight) clamped to [minRows, maxRows].
  // Pick the constant by row template, not by widget — two widgets that render the
  // same row markup must share the same rowHeight value.
  //
  // SMALL 2-line row (Inbox, My Tasks): text-[14px]/1.5 (21) + mt-[3px]
  //   + text-[12-13px]/1.5 (18-19.5) + py-[10px] (20) + 1px border ≈ 65 px
  // LARGE 2-line row (Calendar): text-[15px]/1.5 (22.5) + mt-[3px]
  //   + text-[13px]/1.5 (19.5) + py-[10px] (20) + 1px border ≈ 66 px
  // 1-line row (Active Customers): text-[14px]/1.5 (21) + py-[10px] (20)
  //   + 1px border ≈ 42 px
  const SMALL_TWO_LINE_ROW_HEIGHT = 65;
  const LARGE_TWO_LINE_ROW_HEIGHT = 66;
  const ONE_LINE_ROW_HEIGHT = 42;

  // Lead Sources row: text-[14px]/1.5 (21) top line + mt-[4px] (4) + bar h-[4px] (4)
  //   + py-[8px] (16) + 1px border ≈ 46 px
  const LEAD_SOURCE_ROW_HEIGHT = 46;

  const inboxListRef = useRef<HTMLDivElement | null>(null);
  const calendarListRef = useRef<HTMLDivElement | null>(null);
  const taskListRef = useRef<HTMLDivElement | null>(null);
  const customerListRef = useRef<HTMLDivElement | null>(null);
  const leadSourcesListRef = useRef<HTMLDivElement | null>(null);

  const inboxRowsPerPage = useAdaptiveRowCount({ containerRef: inboxListRef, rowHeight: SMALL_TWO_LINE_ROW_HEIGHT, minRows: 3 });
  const calendarRowsPerPage = useAdaptiveRowCount({ containerRef: calendarListRef, rowHeight: LARGE_TWO_LINE_ROW_HEIGHT, minRows: 3 });
  const taskRowsPerPage = useAdaptiveRowCount({ containerRef: taskListRef, rowHeight: SMALL_TWO_LINE_ROW_HEIGHT, minRows: 3 });
  const customerRowsPerPage = useAdaptiveRowCount({ containerRef: customerListRef, rowHeight: ONE_LINE_ROW_HEIGHT, minRows: 3 });
  const leadSourcesRowsPerPage = useAdaptiveRowCount({ containerRef: leadSourcesListRef, rowHeight: LEAD_SOURCE_ROW_HEIGHT, minRows: 2 });

  const [inboxPage, setInboxPage] = useState(1);
  const [calendarPage, setCalendarPage] = useState(1);
  const [taskPage, setTaskPage] = useState(1);
  const [customerPage, setCustomerPage] = useState(1);
  const [leadSourcesPage, setLeadSourcesPage] = useState(1);

  const inboxTotalPages = Math.max(1, Math.ceil(inboxItems.length / inboxRowsPerPage));
  const calendarTotalPages = Math.max(1, Math.ceil(calendarItems.length / calendarRowsPerPage));
  const taskTotalPages = Math.max(1, Math.ceil(taskItems.length / taskRowsPerPage));
  const customerTotalPages = Math.max(1, Math.ceil(customerRows.length / customerRowsPerPage));
  const leadSourcesTotalPages = Math.max(1, Math.ceil(leadSources.length / leadSourcesRowsPerPage));

  const inboxCurrentPage = Math.min(inboxPage, inboxTotalPages);
  const calendarCurrentPage = Math.min(calendarPage, calendarTotalPages);
  const taskCurrentPage = Math.min(taskPage, taskTotalPages);
  const customerCurrentPage = Math.min(customerPage, customerTotalPages);
  const leadSourcesCurrentPage = Math.min(leadSourcesPage, leadSourcesTotalPages);

  const inboxStart = (inboxCurrentPage - 1) * inboxRowsPerPage;
  const calendarStart = (calendarCurrentPage - 1) * calendarRowsPerPage;
  const taskStart = (taskCurrentPage - 1) * taskRowsPerPage;
  const customerStart = (customerCurrentPage - 1) * customerRowsPerPage;
  const leadSourcesStart = (leadSourcesCurrentPage - 1) * leadSourcesRowsPerPage;

  const inboxVisible = inboxItems.slice(inboxStart, inboxStart + inboxRowsPerPage);
  const calendarVisible = calendarItems.slice(calendarStart, calendarStart + calendarRowsPerPage);
  const taskVisible = taskItems.slice(taskStart, taskStart + taskRowsPerPage);
  const customerVisible = customerRows.slice(customerStart, customerStart + customerRowsPerPage);
  const leadSourcesVisible = leadSources.slice(leadSourcesStart, leadSourcesStart + leadSourcesRowsPerPage);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
        <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
          {/* Top row: 1 + 2 + 2 + 2 + 2 = 9 */}
          <NewRecordWidget
            subtitle="Capture a prospect, contact, or inbound enquiry."
            title="New Lead"
          />

          {summaryCards.map((card, index) => (
            <div
              className={`${summarySpans[index]} rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`}
              key={card.label}
              style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
            >
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[clamp(16px,calc(var(--dash-inline-size,100vw)*0.011375),17px)] leading-[1.3] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.label}
              </p>
              <p className={`mt-[0.25em] font-['Roboto:Regular',sans-serif] font-normal text-[1.75em] leading-[1.05] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.value}
              </p>
              <p className="mt-[0.25em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.meta}
              </p>
            </div>
          ))}

          {/* Main row: Opportunity Funnel (6) + Lead Sources (3) = 9 */}
          <div className="col-[1/span_6] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[14px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<CircleDollarSign className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Lead to deal flow across the current pipeline"
                title="Opportunity Funnel"
              />
              <div className="flex items-center gap-[8px]">
                <div className="rounded-[999px] bg-[#ddf4e8] px-[12px] py-[6px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#0b6b45]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    9.7% win rate
                  </p>
                </div>
                <div className="rounded-[999px] bg-[#eef6ff] px-[12px] py-[6px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#0f69ac]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    24 d avg cycle
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[12px] grid min-h-0 flex-1 grid-cols-5 gap-[10px]">
              {funnelStages.map((stage, index) => (
                <div className="flex min-h-0 min-w-0 flex-col gap-[6px] rounded-[12px] border border-solid border-[#d9e2eb] bg-white/75 p-[10px]" key={stage.label}>
                  <div className="flex items-center justify-between gap-[8px]">
                    <div className="flex min-w-0 items-center gap-[8px]">
                      <span className="size-[8px] shrink-0 rounded-full" style={{ backgroundColor: stage.accent }} />
                      <p className="truncate font-['Roboto:Regular',sans-serif] text-[12px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {stage.label}
                      </p>
                    </div>
                    <p className="font-['Roboto:Bold',sans-serif] text-[11px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {stage.rate}
                    </p>
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] text-[24px] leading-[1] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {stage.count}
                  </p>
                  <div className="h-[5px] overflow-hidden rounded-full bg-[#e8f0f8]">
                    <div className="h-full rounded-full" style={{ width: stage.width, backgroundColor: stage.accent }} />
                  </div>
                  <p className="mt-auto truncate font-['Roboto:Regular',sans-serif] text-[11px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {index === 0 ? stage.note : stage.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[10px] flex items-center justify-between gap-[12px] border-t border-solid border-[#d9e2eb] pt-[8px]">
              <p className="truncate font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Biggest drop-off appears between qualified opportunities and proposal-ready deals.
              </p>
              <p className="whitespace-nowrap font-['Roboto:Bold',sans-serif] text-[12px] text-[#0F9D89]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Focus: Qualification → Proposal
              </p>
            </div>
          </div>

          <div className="col-[7/span_3] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[14px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<UserRound className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Count and contribution share"
                title="Lead Sources"
              />
              <div className="rounded-[999px] bg-[#eef6ff] px-[12px] py-[6px]">
                <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#0f69ac]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  320 total leads
                </p>
              </div>
            </div>

            <div className="mt-[12px] grid grid-cols-[minmax(0,1fr)_60px] gap-[10px] border-b border-solid border-[#c5d2dd] pb-[6px]">
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Source
              </p>
              <p className="text-right font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Count / %
              </p>
            </div>

            <div ref={leadSourcesListRef} className="mt-[2px] min-h-0 flex-1 overflow-hidden">
              {leadSourcesVisible.map((item) => (
                <div className="grid grid-cols-[minmax(0,1fr)_60px] items-center gap-[10px] border-b border-solid border-[#e2eaf1] py-[8px] last:border-b-0" key={item.source}>
                  <div className="flex min-w-0 items-center gap-[10px]">
                    <span className="size-[8px] shrink-0 rounded-full" style={{ backgroundColor: item.accent }} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-[8px]">
                        <p className="truncate font-['Roboto:Regular',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={item.source}>
                          {item.source}
                        </p>
                        <p className="whitespace-nowrap font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {item.count}
                        </p>
                      </div>
                      <div className="mt-[4px] h-[4px] overflow-hidden rounded-full bg-[#e8f0f8]">
                        <div className="h-full rounded-full" style={{ width: `${item.percentage}%`, backgroundColor: item.accent }} />
                      </div>
                    </div>
                  </div>
                  <p className="text-right font-['Roboto:Bold',sans-serif] text-[13px] text-[#0f172a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.percentage}%
                  </p>
                </div>
              ))}
            </div>
            {leadSourcesTotalPages > 1 ? (
              <div className="mt-[8px] flex items-center justify-between border-t border-solid border-[#d9e2eb] pt-[8px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Showing {leadSourcesStart + 1}–{leadSourcesStart + leadSourcesVisible.length} of {leadSources.length}
                </p>
                <div className="flex items-center gap-[6px]">
                  <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={leadSourcesCurrentPage <= 1} onClick={() => setLeadSourcesPage((p) => Math.max(1, p - 1))} type="button">
                    <ChevronLeft className="size-[14px]" strokeWidth={1.9} />
                  </button>
                  <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {leadSourcesCurrentPage} of {leadSourcesTotalPages}
                  </p>
                  <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={leadSourcesCurrentPage >= leadSourcesTotalPages} onClick={() => setLeadSourcesPage((p) => Math.min(leadSourcesTotalPages, p + 1))} type="button">
                    <ChevronRight className="size-[14px]" strokeWidth={1.9} />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          {/* Support row: Inbox (3) + Calendar (3) + Tasks (3) = 9 */}
          <div className="col-[1/span_3] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[14px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <DashboardWidgetHeader
              icon={<Mail className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Unread mail and replies needing attention"
              title="Inbox"
            />
            <div ref={inboxListRef} className="mt-[12px] min-h-0 flex-1 overflow-hidden">
              {inboxVisible.map((item) => (
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-[10px] border-b border-solid border-[#e2eaf1] py-[10px] last:border-b-0" key={`${item.sender}-${item.subject}`}>
                  <div className="min-w-0">
                    <p className="truncate font-['Roboto:Bold',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={item.sender}>
                      {item.sender}
                    </p>
                    <p className="mt-[3px] truncate font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }} title={item.subject}>
                      {item.subject}
                    </p>
                  </div>
                  <p className="self-center whitespace-nowrap font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
            {inboxTotalPages > 1 ? (
              <div className="mt-[8px] flex items-center justify-between border-t border-solid border-[#d9e2eb] pt-[8px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Showing {inboxStart + 1}–{inboxStart + inboxVisible.length} of {inboxItems.length}
                </p>
                <div className="flex items-center gap-[6px]">
                  <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={inboxCurrentPage <= 1} onClick={() => setInboxPage((p) => Math.max(1, p - 1))} type="button">
                    <ChevronLeft className="size-[14px]" strokeWidth={1.9} />
                  </button>
                  <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {inboxCurrentPage} of {inboxTotalPages}
                  </p>
                  <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={inboxCurrentPage >= inboxTotalPages} onClick={() => setInboxPage((p) => Math.min(inboxTotalPages, p + 1))} type="button">
                    <ChevronRight className="size-[14px]" strokeWidth={1.9} />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <div className="col-[4/span_3] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[14px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <DashboardWidgetHeader
              icon={<CalendarDays className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Today's schedule and upcoming events"
              title="Calendar"
            />
            <div ref={calendarListRef} className="mt-[12px] min-h-0 flex-1 overflow-hidden">
              {calendarVisible.map((item) => (
                <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-[10px] border-b border-solid border-[#e2eaf1] py-[10px] last:border-b-0" key={`${item.time}-${item.title}`}>
                  <p className="self-center whitespace-nowrap font-['Roboto:Bold',sans-serif] text-[14px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.time}
                  </p>
                  <div className="min-w-0">
                    <p className="truncate font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={item.title}>
                      {item.title}
                    </p>
                    <p className="mt-[3px] truncate font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }} title={item.meta}>
                      {item.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {calendarTotalPages > 1 ? (
              <div className="mt-[8px] flex items-center justify-between border-t border-solid border-[#d9e2eb] pt-[8px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Showing {calendarStart + 1}–{calendarStart + calendarVisible.length} of {calendarItems.length}
                </p>
                <div className="flex items-center gap-[6px]">
                  <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={calendarCurrentPage <= 1} onClick={() => setCalendarPage((p) => Math.max(1, p - 1))} type="button">
                    <ChevronLeft className="size-[14px]" strokeWidth={1.9} />
                  </button>
                  <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {calendarCurrentPage} of {calendarTotalPages}
                  </p>
                  <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={calendarCurrentPage >= calendarTotalPages} onClick={() => setCalendarPage((p) => Math.min(calendarTotalPages, p + 1))} type="button">
                    <ChevronRight className="size-[14px]" strokeWidth={1.9} />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <div className="col-[7/span_3] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[14px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <DashboardWidgetHeader
              icon={<NotebookText className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Today's follow-ups and assigned work"
              title="My Tasks"
            />
            <div ref={taskListRef} className="mt-[12px] min-h-0 flex-1 overflow-hidden">
              {taskVisible.map((task) => (
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-[10px] border-b border-solid border-[#e2eaf1] py-[10px] last:border-b-0" key={task.title}>
                  <div className="min-w-0">
                    <p className="truncate font-['Roboto:Bold',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={task.title}>
                      {task.title}
                    </p>
                    <p className="mt-[3px] truncate font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }} title={task.meta}>
                      {task.meta}
                    </p>
                  </div>
                  <p className="self-center whitespace-nowrap font-['Roboto:Bold',sans-serif] text-[12px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {task.due}
                  </p>
                </div>
              ))}
            </div>
            {taskTotalPages > 1 ? (
              <div className="mt-[8px] flex items-center justify-between border-t border-solid border-[#d9e2eb] pt-[8px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Showing {taskStart + 1}–{taskStart + taskVisible.length} of {taskItems.length}
                </p>
                <div className="flex items-center gap-[6px]">
                  <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={taskCurrentPage <= 1} onClick={() => setTaskPage((p) => Math.max(1, p - 1))} type="button">
                    <ChevronLeft className="size-[14px]" strokeWidth={1.9} />
                  </button>
                  <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {taskCurrentPage} of {taskTotalPages}
                  </p>
                  <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={taskCurrentPage >= taskTotalPages} onClick={() => setTaskPage((p) => Math.min(taskTotalPages, p + 1))} type="button">
                    <ChevronRight className="size-[14px]" strokeWidth={1.9} />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          {/* Bottom row: Customer activity (6) + Social (3) = 9 */}
          <div className="col-[1/span_6] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[14px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <DashboardWidgetHeader
              icon={<UserRound className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Accounts currently moving through the pipeline"
              title="Active Customers"
            />
            <div className="mt-[12px] grid grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,0.7fr)] gap-[12px] border-b border-solid border-[#c5d2dd] px-[10px] pb-[8px]">
              {[
                { label: "Company", align: "left" as const },
                { label: "Primary Contact", align: "left" as const },
                { label: "Stage", align: "left" as const },
                { label: "Deal Value", align: "right" as const },
                { label: "Response", align: "right" as const },
              ].map((heading) => (
                <p className={`truncate font-['Roboto:Medium',sans-serif] font-medium text-[10px] uppercase tracking-[0.04em] text-[#5F7283] ${heading.align === "right" ? "text-right" : ""}`} key={heading.label} style={{ fontVariationSettings: "'wdth' 100" }} title={heading.label}>
                  {heading.label}
                </p>
              ))}
            </div>
            <div ref={customerListRef} className="mt-[2px] min-h-0 flex-1 overflow-hidden">
              {customerVisible.map((row) => (
                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,0.7fr)] items-center gap-[12px] border-b border-solid border-[#e2eaf1] px-[10px] py-[10px] last:border-b-0" key={row.name}>
                  <p className="truncate font-['Roboto:Bold',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={row.name}>
                    {row.name}
                  </p>
                  <p className="truncate font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }} title={row.contact}>
                    {row.contact}
                  </p>
                  <p className="truncate font-['Roboto:Regular',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={row.stage}>
                    {row.stage}
                  </p>
                  <p className="truncate text-right font-['Roboto:Bold',sans-serif] text-[13px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }} title={row.value}>
                    {row.value}
                  </p>
                  <p className="truncate text-right font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }} title={row.response}>
                    {row.response}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-[8px] flex items-center justify-between border-t border-solid border-[#d9e2eb] pt-[8px]">
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Showing {customerStart + 1}–{customerStart + customerVisible.length} of {customerRows.length} active accounts
              </p>
              <div className="flex items-center gap-[8px]">
                <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={customerCurrentPage <= 1} onClick={() => setCustomerPage((p) => Math.max(1, p - 1))} type="button">
                  <ChevronLeft className="size-[14px]" strokeWidth={1.9} />
                </button>
                <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {customerCurrentPage} of {customerTotalPages}
                </p>
                <button className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]" disabled={customerCurrentPage >= customerTotalPages} onClick={() => setCustomerPage((p) => Math.min(customerTotalPages, p + 1))} type="button">
                  <ChevronRight className="size-[14px]" strokeWidth={1.9} />
                </button>
              </div>
            </div>
          </div>

          <div className="col-[7/span_3] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <DashboardWidgetHeader
              icon={<Send className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Instagram performance this month"
              title="Social Reach"
            />
            <div className="mt-[16px] flex items-center justify-between rounded-[12px] bg-[linear-gradient(135deg,#E4405F_0%,#C13584_100%)] p-[14px]">
              <div>
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/85" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Followers
                </p>
                <p className="mt-[2px] font-['Roboto:Bold',sans-serif] text-[24px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  1.2M
                </p>
              </div>
              <div>
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/85" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Engagement
                </p>
                <p className="mt-[2px] font-['Roboto:Bold',sans-serif] text-[24px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  6.2%
                </p>
              </div>
              <div>
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/85" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Growth
                </p>
                <p className="mt-[2px] font-['Roboto:Bold',sans-serif] text-[24px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  +15.4%
                </p>
              </div>
            </div>
            <div className="mt-[12px] grid flex-1 grid-cols-2 gap-[10px]">
              {socialStats.map((item) => (
                <div className="flex flex-col rounded-[12px] border border-solid border-[#d9e2eb] bg-white/80 px-[12px] py-[10px]" key={item.label}>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.label}
                  </p>
                  <p className="mt-[4px] font-['Roboto:Bold',sans-serif] text-[20px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.value}
                  </p>
                  <p className="mt-[2px] font-['Roboto:Regular',sans-serif] text-[11px] text-[#22C55E]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.trend}
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
    <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Left Icon">
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
    <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Left Icon">
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
    <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Left Icon">
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
    <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Left Icon">
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
    <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Left Icon">
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
    <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Left Icon">
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
      className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0 size-[32px] hover:bg-gradient-to-b hover:from-[rgba(255,255,255,0.7)] hover:to-[rgba(255,255,255,0.49)] cursor-pointer transition-all group" 
      data-name="Left Icon"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="overflow-clip size-[20px]">
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

type ModuleId = "crm" | "finance";
type ScreenMode = "home" | ModuleId;

type AppView =
  | "dashboard"
  | "salesProposal"
  | "opportunities"
  | "prospects"
  | "tasks"
  | "calendar"
  | "inbox"
  | "customers"
  | "fin_sales"
  | "fin_ap_invoice"
  | "fin_purchase"
  | "fin_payment"
  | "fin_cockpit"
  | "fin_banking"
  | "fin_cashbook"
  | "fin_tax";
type MenuItemId =
  | "inbox"
  | "customers"
  | "calendar"
  | "tasks"
  | "prospects"
  | "salesProposal"
  | "opportunities"
  | "settings"
  | "fin_sales"
  | "fin_ap_invoice"
  | "fin_purchase"
  | "fin_payment"
  | "fin_cockpit"
  | "fin_banking"
  | "fin_cashbook"
  | "fin_tax";

type NavigationItem = {
  id: MenuItemId;
  label: string;
  icon: ReactNode;
  view: AppView;
};

const CRM_MENU_ITEMS: NavigationItem[] = [
  { id: "inbox", label: "Inbox", icon: <Slot2 />, view: "inbox" },
  { id: "customers", label: "Customers", icon: <Slot3 />, view: "customers" },
  { id: "calendar", label: "Calendar", icon: <Slot4 />, view: "calendar" },
  { id: "tasks", label: "Tasks", icon: <Slot5 />, view: "tasks" },
  { id: "prospects", label: "Prospects", icon: <Slot6 />, view: "prospects" },
  { id: "salesProposal", label: "Sales Proposal", icon: <Slot7 />, view: "salesProposal" },
  { id: "opportunities", label: "Opportunities", icon: <Slot8 />, view: "opportunities" },
  { id: "settings", label: "Settings", icon: <Slot9 />, view: "dashboard" },
];

const FINANCE_MENU_ITEMS: NavigationItem[] = [
  { id: "fin_sales", label: "Sales Invoice", icon: <ReceiptText className="size-[22px] text-[#0083DA]" strokeWidth={1.9} />, view: "fin_sales" },
  { id: "fin_ap_invoice", label: "AP Invoice", icon: <FileSpreadsheet className="size-[22px] text-[#0083DA]" strokeWidth={1.9} />, view: "fin_ap_invoice" },
  { id: "fin_purchase", label: "Purchase Invoice", icon: <FileSpreadsheet className="size-[22px] text-[#0083DA]" strokeWidth={1.9} />, view: "fin_purchase" },
  { id: "fin_payment", label: "Payment Entry", icon: <CircleDollarSign className="size-[22px] text-[#0083DA]" strokeWidth={1.9} />, view: "fin_payment" },
  { id: "fin_cockpit", label: "Payment Cockpit", icon: <WalletCards className="size-[22px] text-[#0083DA]" strokeWidth={1.9} />, view: "fin_cockpit" },
  { id: "fin_banking", label: "Banking", icon: <Building2 className="size-[22px] text-[#0083DA]" strokeWidth={1.9} />, view: "fin_banking" },
  { id: "fin_cashbook", label: "Cashbook", icon: <HardDrive className="size-[22px] text-[#0083DA]" strokeWidth={1.9} />, view: "fin_cashbook" },
  { id: "fin_tax", label: "Taxation", icon: <Percent className="size-[22px] text-[#0083DA]" strokeWidth={1.9} />, view: "fin_tax" },
];

const MODULE_CHOOSER_OPTIONS: Array<{
  id: ModuleId;
  label: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    id: "crm",
    label: "CRM",
    description: "Leads, opportunities, proposals, customers, and execution views",
    icon: <UserRound className="size-[20px] text-[#1f83ff]" strokeWidth={1.9} />,
  },
  {
    id: "finance",
    label: "Finance",
    description: "Invoices, payments, banking, cashbook, taxation, and collections",
    icon: <WalletCards className="size-[20px] text-[#1f83ff]" strokeWidth={1.9} />,
  },
];

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
      style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
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
    <GlassPanel className="flex h-full flex-col items-center justify-center p-[18px] text-center">
      <div className="flex size-[72px] items-center justify-center">
        {icon}
      </div>
      <div className="mt-[0.5em] flex w-full flex-col items-center">
        <p className="font-['Roboto:Medium',sans-serif] font-medium text-[0.875em] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
        <p className="mt-[0.1875em] max-w-[120px] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#8f98a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <GlassPanel className="flex h-full flex-col px-[18px] py-[16px]">
      <div className="flex h-full flex-col">
        <p className="font-['Roboto:Bold',sans-serif] font-bold text-[0.875em] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </p>
        <div className="mt-[14px] flex flex-1 items-center gap-[14px] min-h-0">
          <div className="flex size-[58px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#ffffff_0%,#e6f4ff_100%)] text-[#1f83ff] shadow-[inset_0_0_0_1px_rgba(0,131,218,0.14)]">
            <UserRound className="size-[24px]" strokeWidth={1.7} />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <p className="truncate font-['Roboto:Bold',sans-serif] text-[20px] leading-[24px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              {name}
            </p>
            <p className="mt-[8px] truncate font-['Roboto:Regular',sans-serif] text-[14px] leading-[18px] text-[#45525f]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {email}
            </p>
            <p className="mt-[6px] font-['Roboto:Regular',sans-serif] text-[15px] leading-[19px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {phone}
            </p>
          </div>
        </div>
        <button className="mt-[12px] self-start font-['Roboto:Bold',sans-serif] text-[13px] text-[#106ab0]" style={{ fontVariationSettings: "'wdth' 100" }} type="button">
          Do you have any question?
        </button>
      </div>
    </GlassPanel>
  );
}

function HomeBlogPanel() {
  return (
    <GlassPanel className="flex h-full flex-col p-[10px]">
      <div className="flex items-center justify-between px-[6px] pb-[10px]">
        <DashboardWidgetHeader icon={<NotebookText className="size-[18px]" strokeWidth={1.9} />} title="Latest Blog" />
        <button className="flex items-center gap-[6px] text-[#0060ac]" type="button">
          <ExternalLink className="size-[13px]" strokeWidth={1.8} />
          <span className="font-['Roboto:Regular',sans-serif] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Open Blog Site
          </span>
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">
        <div className="flex h-full gap-[12px] overflow-hidden">
        <div className="flex min-w-0 flex-[0_0_calc(50%-6px)] flex-col">
          <div className="relative h-[144px] overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#0b2b45_0%,#0f5c87_60%,#6bc8ff_120%)]">
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

        <div className="flex min-w-0 flex-[0_0_calc(50%-6px)] flex-col">
          <div className="relative h-[144px] overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#2a6b8f_0%,#83c6eb_100%)]">
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
      </div>
      <div className="flex items-center justify-between px-[4px] pt-[10px]">
        <button className="flex size-[24px] items-center justify-center text-[#1f83ff]" type="button">
          <ChevronLeft className="size-[14px]" strokeWidth={1.8} />
        </button>
        <div className="flex items-center gap-[4px]">
          <div className="size-[7px] rounded-full bg-[#1d1d1d]" />
          <div className="size-[7px] rounded-full bg-[#d4d4d4]" />
        </div>
        <button className="flex size-[24px] items-center justify-center text-[#1f83ff]" type="button">
          <ChevronRight className="size-[14px]" strokeWidth={1.8} />
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
        <DashboardWidgetHeader icon={<Ticket className="size-[18px]" strokeWidth={1.9} />} title="My Tickets" />
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
      <div className="w-full" style={{ containerType: "inline-size" }}>
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
  menuItems,
  onGoDashboard,
  onNavigate,
}: {
  activeItem: MenuItemId | null;
  isDashboardActive: boolean;
  menuItems: NavigationItem[];
  onGoDashboard: () => void;
  onNavigate: (view: AppView, item: MenuItemId) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Collapsed Menu */}
      <div className="absolute content-stretch flex flex-col gap-[12px] h-[820px] items-start left-[12px] rounded-[4px] top-[8px]" data-name="Left Menu">
        {/* Menu Toggle Button at Top */}
        <div
          className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px] hover:bg-gradient-to-b hover:from-[rgba(255,255,255,0.7)] hover:to-[rgba(255,255,255,0.49)] cursor-pointer transition-all group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-transform">
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
        {menuItems.map((item) => (
          <button
            key={item.id}
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
          {menuItems.map((item) => (
            <button 
              key={item.id}
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

function getWindowActionItems() {
  return [
    { id: "summary", icon: <Mail className="size-[18px]" strokeWidth={1.8} /> },
    { id: "reply", icon: <Send className="size-[18px]" strokeWidth={1.8} /> },
    { id: "review", icon: <Eye className="size-[18px]" strokeWidth={1.8} /> },
    { id: "schedule", icon: <CalendarDays className="size-[18px]" strokeWidth={1.8} /> },
    { id: "call", icon: <Phone className="size-[18px]" strokeWidth={1.8} /> },
    { id: "new", icon: <FilePlus2 className="size-[18px]" strokeWidth={1.8} /> },
    { id: "save", icon: <HardDrive className="size-[18px]" strokeWidth={1.8} /> },
    { id: "save-plus", icon: <HardDriveDownload className="size-[18px]" strokeWidth={1.8} /> },
    { id: "download", icon: <Download className="size-[18px]" strokeWidth={1.8} /> },
    { id: "share", icon: <ExternalLink className="size-[18px]" strokeWidth={1.8} /> },
    { id: "reset", icon: <RotateCcw className="size-[18px]" strokeWidth={1.8} /> },
    { id: "delete", icon: <Trash2 className="size-[18px]" strokeWidth={1.8} /> },
  ];
}

function WindowActionPanel({
  actions,
  topOffsetClass = "top-0",
  bottomOffsetClass = "bottom-0",
}: {
  actions: Array<{ id: string; icon: ReactNode }>;
  topOffsetClass?: string;
  bottomOffsetClass?: string;
}) {
  return (
    <div className={`absolute right-0 ${topOffsetClass} ${bottomOffsetClass} flex w-[56px] flex-col items-center border-l border-solid border-[#e6edf3] bg-white py-[10px]`}>
      <div className="flex flex-col items-center gap-[10px]">
        {actions.map((action) => (
          <button
            className="flex size-[34px] items-center justify-center rounded-full text-[#1f83ff] transition-all hover:bg-[#eef7ff]"
            key={action.id}
            type="button"
          >
            {action.icon}
          </button>
        ))}
      </div>
    </div>
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
    <div className="bg-white border-t border-solid border-[#e5e7eb] content-stretch flex items-center justify-between px-[16px] py-[6px] relative shrink-0 w-full">
      <p
        className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#141414] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Navigate or Update record
      </p>

      <div className="content-stretch flex items-center gap-[14px] relative shrink-0">
        <p
          className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#1f83ff] whitespace-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          -1/0
        </p>
        <div className="h-[24px] w-px bg-[#d6d6d6]" />
        <p
          className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] text-[#141414] whitespace-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Showing Result 0-0 of {totalRecords}
        </p>

        <div className="content-stretch flex items-center overflow-hidden rounded-[10px] border border-solid border-[#d9d9d9] bg-[#fcfcfc] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
          <button className="content-stretch flex items-center justify-center size-[38px] border-r border-solid border-[#d9d9d9] text-[#b2b8bf]" type="button">
            <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
              <path d="M11 4L6 9L11 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            </svg>
          </button>
          <button className="content-stretch flex items-center justify-center gap-[8px] min-w-[72px] px-[14px] py-[8px] text-[#141414]" type="button">
            <span
              className="font-['Roboto:Regular',sans-serif] font-normal text-[13px] whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {currentPage}
            </span>
            <svg className="size-[14px] text-[#1f83ff]" fill="none" viewBox="0 0 16 16">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </button>
          <button className="content-stretch flex items-center justify-center size-[38px] border-l border-solid border-[#d9d9d9] text-[#9aa3ad]" type="button">
            <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
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
            <div className="rounded-[12px] border border-solid border-[#e2eaf1] bg-[#fbfdff] px-[14px] py-[12px]" key={change}>
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
  const [screenView, setScreenView] = useState<"dashboard" | "card" | "detail">("dashboard");
  const [selectedOpportunityId, setSelectedOpportunityId] = useState("opp-001");
  const windowActions = getWindowActionItems();
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
  const isWindowMode = screenView === "card" || screenView === "detail";
  const isDetailOpen = screenView === "detail";

  return (
    <div className="flex h-full flex-col overflow-hidden bg-transparent">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between bg-transparent px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center gap-[18px] relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Opportunities
            </p>
            <div className="relative shrink-0 w-[96px]">
              <div className="flex items-center justify-center gap-[12px] w-full">
                <button className="relative flex size-[24px] shrink-0 items-center justify-center" onClick={() => setScreenView("dashboard")} type="button">
                  <MingcuteGridFill />
                  {screenView === "dashboard" ? <div className="absolute inset-[-6px] rounded-[8px] border border-[#bfe4ff] bg-[#eaf8ff] -z-10" /> : null}
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
                <button className="relative flex size-[24px] shrink-0 items-center justify-center" onClick={() => setScreenView("detail")} type="button">
                  <RiWindowFill />
                  {isWindowMode ? <div className="absolute inset-[-6px] rounded-[8px] border border-[#bfe4ff] bg-[#eaf8ff] -z-10" /> : null}
                </button>
              </div>
              <div
                className={`absolute bottom-[-10px] h-0 w-0 border-l-[8px] border-r-[8px] border-t-0 border-b-[10px] border-l-transparent border-r-transparent border-b-[#1f83ff] transition-all ${
                  screenView === "dashboard" ? "left-[17px]" : "left-[63px]"
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
      </div>

      {screenView === "dashboard" ? (
        <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
          <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
            <div className="col-[1/span_9] row-span-3 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.78)] to-[rgba(255,255,255,0.55)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
              <div className="flex items-center justify-between">
                <DashboardWidgetHeader
                  icon={<CircleDollarSign className="size-[18px] text-black" strokeWidth={1.9} />}
                  subtitle="Drag cards to advance stage"
                  title="Pipeline"
                />
                <button className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }} type="button">
                  + New deal
                </button>
              </div>

              <div className="mt-[16px] grid min-h-0 flex-1 grid-cols-4 gap-[14px] overflow-auto">
                {pipelineColumns.map((column) => (
                  <div className="flex flex-col gap-[12px] rounded-[14px] border border-white/70 bg-[rgba(244,247,252,0.82)] p-[12px] shadow-[0px_10px_24px_rgba(15,23,42,0.04)]" key={column.label}>
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

            <div className="col-[1/span_3] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.78)] to-[rgba(255,255,255,0.55)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
              <DashboardWidgetHeader icon={<Hourglass className="size-[18px] text-black" strokeWidth={1.9} />} title="Focus Today" />
              <div className="mt-[16px] flex min-h-0 flex-1 flex-col gap-[10px] overflow-auto">
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

            <div className="col-[4/span_6] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.78)] to-[rgba(255,255,255,0.55)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
              <div className="flex items-center justify-between">
                <DashboardWidgetHeader icon={<Building2 className="size-[18px] text-black" strokeWidth={1.9} />} title="Active Opportunities" />
                <button className="rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da]" type="button">
                  Add Opportunity
                </button>
              </div>

              <div className="mt-[16px] grid grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)_0.9fr_0.9fr_0.9fr_1fr] gap-[12px] border-b border-solid border-[#c5d2dd] px-[10px] pb-[10px]">
                {["Opportunity", "Company", "Stage", "Amount", "Owner", "Next Step"].map((heading) => (
                  <p className="font-['Roboto:Medium',sans-serif] font-medium text-[10px] uppercase tracking-[0.04em] text-[#5F7283]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {heading}
                  </p>
                ))}
              </div>

              <div className="min-h-0 flex-1 overflow-auto">
              {rows.map((row) => (
                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)_0.9fr_0.9fr_0.9fr_1fr] gap-[12px] border-b border-solid border-[#e2eaf1] px-[10px] py-[14px]" key={row.id}>
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
        </div>
      ) : (
        <div className="relative flex h-0 min-h-0 flex-1 flex-col bg-white">
          <div className="mr-[56px] bg-[linear-gradient(180deg,rgba(230,243,252,0.65)_0%,rgba(245,250,253,0.72)_100%)] content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative shrink-0">
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

          <div className="content-stretch flex flex-1 items-start min-h-0 pr-[64px] relative w-full">
          <div className={`bg-white content-stretch flex flex-col h-full items-start overflow-auto relative shrink-0 ${isDetailOpen ? "w-[380px]" : "w-full"}`}>
            {isDetailOpen ? (
              rows.map((row) => (
	                <button
	                  className={`content-stretch flex flex-col gap-[14px] items-start justify-center overflow-clip px-[18px] py-[18px] relative w-full text-left border-b border-solid transition-all ${
	                    selectedOpportunity.id === row.id
	                      ? "border-[#ebebeb] bg-white"
	                      : "border-[#ebebeb] bg-[#fcfcfc] hover:bg-[#f7fbff]"
	                  }`}
	                  key={row.id}
	                  onClick={() => selectOpportunity(row.id)}
	                  type="button"
	                >
	                  {selectedOpportunity.id === row.id ? (
	                    <>
	                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(153,214,255,0.42)_0%,rgba(193,231,255,0.22)_20%,rgba(235,248,255,0.08)_100%)]" />
	                      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-[4px] bg-[#0083da]" />
	                    </>
	                  ) : null}
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
                  return (
                    <div
                      className="mb-[12px] flex min-h-[96px] items-center justify-between gap-[14px] rounded-[16px] border border-solid border-[#d9e2eb] bg-[#fbfdff] px-[16px] py-[14px] transition-all last:mb-0 hover:border-[#d5e6f3] hover:bg-white"
                      key={row.id}
                    >
                      <div className="grid min-w-0 flex-1 grid-cols-[minmax(320px,1.2fr)_118px_132px_148px_minmax(190px,0.9fr)] items-center gap-x-[18px]">
                        <div className="min-w-0">
                          <p className="truncate font-['Roboto:Bold',sans-serif] text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.opportunity}
                          </p>
                          <p className="mt-[5px] truncate font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.company}
                          </p>
                        </div>

                        <div className="min-w-0">
                          <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.stage}
                          </p>
                        </div>

                        <div className="min-w-0">
                          <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.amount}
                          </p>
                        </div>

                        <div className="min-w-0">
                          <p className="truncate font-['Roboto:Regular',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.owner}
                          </p>
                        </div>

                        <div className="min-w-0">
                          <p className="truncate font-['Roboto:Regular',sans-serif] text-[14px] 2xl:text-[16px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {row.nextStep}
                          </p>
                        </div>
                      </div>
                      <button
                        className="shrink-0 self-center rounded-[999px] border border-solid border-[#0083da] bg-white px-[16px] py-[8px] text-[13px] text-[#0083da] transition-colors hover:bg-[#eef8ff]"
                        onClick={() => {
                          selectOpportunity(row.id);
                          setScreenView("detail");
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
            <div className="flex h-[56px] shrink-0 items-center justify-between border-b border-solid border-[#d9e2eb] px-[24px]">
              <p className="font-['Roboto:Bold',sans-serif] text-[16px] text-[#141414]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Opportunity Overview
              </p>
              <div className="flex items-center gap-[12px]">
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {selectedOpportunity.company} • {relatedOpportunityCount} opportunities
                </p>
                <button className="content-stretch flex items-center justify-center size-[32px]" onClick={() => setScreenView("card")} type="button">
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
                          : "border-[#d9e2eb] bg-[#fbfdff] text-[#102c3f]";

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
                  <div className="rounded-[14px] border border-solid border-[#d9e2eb] bg-white px-[14px] py-[12px]">
                    <p className="font-['Roboto:Bold',sans-serif] font-bold text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Opportunity Notes
                    </p>
                    <p className="mt-[8px] font-['Roboto:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {selectedOpportunity.notes}
                    </p>
                  </div>

                  <div className="rounded-[14px] border border-solid border-[#d9e2eb] bg-white px-[14px] py-[12px]">
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
                          <div className="flex items-start justify-between gap-[16px] border-b border-solid border-[#e2eaf1] pb-[10px] last:border-b-0 last:pb-0" key={`${selectedOpportunity.id}-${activity.title}-${activity.meta}`}>
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
                        className="rounded-[14px] border border-solid border-[#d9e2eb] bg-[#fbfdff] px-[16px] py-[14px] text-left transition-all hover:border-[#c9e1f5] hover:bg-[#f4fbff]"
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
            <WindowActionPanel actions={windowActions} />
          </div>
        </div>
      )}

      {isWindowMode ? <ProposalFooter currentPage={1} totalPages={1} totalRecords={rows.length} /> : null}
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
  const windowActions = getWindowActionItems();
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
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between px-[20px] relative shrink-0 w-full">
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
      </div>

      <div className="relative flex flex-[1_0_0] flex-col min-h-0 w-full bg-white">
        <div className="mr-[56px] bg-[linear-gradient(180deg,rgba(230,243,252,0.65)_0%,rgba(245,250,253,0.72)_100%)] content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative shrink-0">
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

        <div className="content-stretch flex flex-[1_0_0] items-start min-h-0 pr-[64px] relative w-full">
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
            <div className="bg-[#fbfdff] border border-solid border-[#d9e2eb] rounded-[18px] content-stretch flex flex-col gap-[18px] items-start px-[22px] py-[20px] relative shrink-0 w-full shadow-[0_10px_30px_rgba(15,35,52,0.05)]">
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
                  <div className="grid grid-cols-[minmax(0,2.2fr)_0.7fr_0.9fr_0.8fr_0.9fr] gap-[12px] w-full px-[12px] pb-[8px] border-b border-solid border-[#c5d2dd]">
                    {["Item", "Quantity", "Price", "Discount", "Total"].map((heading) => (
                      <p className="font-['Roboto:Medium',sans-serif] font-medium text-[10px] uppercase tracking-[0.04em] text-[#5F7283]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {heading}
                      </p>
                    ))}
                  </div>
                  {activeLineItems.map((line, index) => (
                    <div className="grid grid-cols-[minmax(0,2.2fr)_0.7fr_0.9fr_0.8fr_0.9fr] gap-[12px] w-full px-[12px] py-[12px] border-b border-solid border-[#e2eaf1]" key={line.item}>
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
                    <div className="w-full border-b border-solid border-[#e2eaf1] px-[6px] py-[12px]" key={`${activity.title}-${index}`}>
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

          <WindowActionPanel actions={windowActions} />
        </div>
      </div>

      <ProposalFooter currentPage={1} totalPages={1} totalRecords={proposals.length} />
      <ActivityChangesModal activity={activeActivity} onClose={() => setActiveActivity(null)} />
      <ProposalFooter currentPage={1} totalPages={1} totalRecords={messages.length} />
    </div>
  );
}

function FilterPopupField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "date";
}) {
  return (
    <label className="group block min-w-0 border-b border-solid border-[#d7d7d7] px-[2px] pb-[10px] pt-[4px] transition-colors hover:border-[#0083da] focus-within:border-[#0083da]">
      <span className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#444444]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </span>
      <input
        className="mt-[7px] w-full border-0 bg-transparent p-0 font-['Roboto:Regular',sans-serif] text-[15px] text-black outline-none placeholder:text-[#9f9f9f]"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  );
}

function FilterPopupSelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="group block min-w-0 border-b border-solid border-[#d7d7d7] px-[2px] pb-[10px] pt-[4px] transition-colors hover:border-[#0083da] focus-within:border-[#0083da]">
      <span className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#444444]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </span>
      <div className="relative mt-[7px]">
        <select
          className="w-full appearance-none border-0 bg-transparent p-0 pr-[20px] font-['Roboto:Regular',sans-serif] text-[15px] text-black outline-none"
          onChange={(event) => onChange(event.target.value)}
          value={value}
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg className="pointer-events-none absolute right-0 top-[3px] size-[14px] text-[#0083da]" fill="none" viewBox="0 0 16 16">
          <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </div>
    </label>
  );
}

function InboxView({ onClose }: { onClose: () => void }) {
  const messages = [
    {
      id: "msg-001",
      channel: "Email",
      subject: "Need revised onboarding plan before Friday",
      preview: "The client wants an updated rollout approach with training dates and ownership.",
      contact: "Diana Morris",
      company: "Apex Med Systems",
      owner: "Mack Rod",
      receivedAt: "Today, 4:10 PM",
      priority: "High",
      status: "Pending Reply",
      summary: "Procurement has asked for a revised onboarding schedule before the final budget review on Friday.",
      intent: "Proposal clarification",
      urgency: "High",
      sentiment: "Neutral but time-sensitive",
      recommendation: "Link to the active service expansion opportunity and create a follow-up task for commercial review.",
      actions: ["Draft reply", "Create follow-up task", "Attach to opportunity", "Share with delivery lead"],
      highlights: ["High-value account", "Reply due within 24 hours", "Linked opportunity likely impacted"],
    },
    {
      id: "msg-002",
      channel: "Call",
      subject: "Missed call regarding renewal pricing review",
      preview: "Client called twice to confirm whether the revised pricing can be approved this week.",
      contact: "Parkash Chaudary",
      company: "Kumaan Pvt. Ltd.",
      owner: "Kevin Smith",
      receivedAt: "Today, 2:35 PM",
      priority: "Medium",
      status: "Callback Needed",
      summary: "The contact is waiting on pricing confirmation for the active renewal discussion and expects a callback today.",
      intent: "Pricing follow-up",
      urgency: "Medium",
      sentiment: "Slightly urgent",
      recommendation: "Create a callback task and notify the proposal owner before end of day.",
      actions: ["Create callback task", "Notify proposal owner", "Log call note", "Link to proposal"],
      highlights: ["Open renewal deal", "Client requested same-day response"],
    },
    {
      id: "msg-003",
      channel: "Meeting",
      subject: "Follow-up requested after warehouse automation demo",
      preview: "Prospect team wants implementation examples and pricing assumptions after the meeting.",
      contact: "Kevin Howard",
      company: "UrbanAxis Retail",
      owner: "Maya Chen",
      receivedAt: "Yesterday, 6:05 PM",
      priority: "Medium",
      status: "Needs Action",
      summary: "Prospect is engaged after the demo and requested commercial examples plus implementation assumptions for the next step.",
      intent: "Lead progression",
      urgency: "Medium",
      sentiment: "Positive",
      recommendation: "Create a prospect follow-up task and push the message into pipeline qualification review.",
      actions: ["Create lead task", "Schedule follow-up", "Attach to prospect", "Draft recap email"],
      highlights: ["Warm prospect", "Potential pipeline creation", "Meeting recap pending"],
    },
    {
      id: "msg-004",
      channel: "Email",
      subject: "Support concern raised after rollout update",
      preview: "Customer flagged a delay risk and asked for a dedicated support contact this week.",
      contact: "Maya Chen",
      company: "Harper Studios",
      owner: "Jacob M.",
      receivedAt: "Yesterday, 11:20 AM",
      priority: "High",
      status: "Escalated",
      summary: "Customer is concerned about implementation timing and wants a named support contact for the rollout period.",
      intent: "Customer escalation",
      urgency: "High",
      sentiment: "Concerned",
      recommendation: "Escalate to delivery leadership and create a follow-up plus customer care task immediately.",
      actions: ["Escalate to delivery", "Create customer care task", "Draft reassurance reply", "Log escalation"],
      highlights: ["Escalation risk", "Delivery involvement needed", "Customer confidence at risk"],
    },
  ];

  const [selectedMessageId, setSelectedMessageId] = useState(messages[0].id);
  const [selectedMessageIds, setSelectedMessageIds] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterState, setFilterState] = useState({
    searchQuery: "",
    datePreset: "current-year",
    dateFrom: "",
    dateTo: "",
    sendingEntity: "",
    sendingRelatedEntity: "",
    receivingEntity: "",
    receivingRelatedEntity: "",
    organizationalUnit: "",
    relatedReference: "",
    correspondenceType: "",
    securityLevel: "",
    urgencyLevel: "",
    tasks: "",
    createdBy: "",
    actionTaken: "",
    takenBy: "",
    readStatus: "",
    documentType: "",
  });
  const selectedMessage = messages.find((message) => message.id === selectedMessageId) ?? messages[0];
  const allSelected = selectedMessageIds.length === messages.length;
  const windowActions = getWindowActionItems();
  const dateOptions = [
    { id: "last-year", label: "Last year" },
    { id: "current-year", label: "Current year" },
    { id: "last-week", label: "Last week" },
    { id: "last-month", label: "Last month" },
    { id: "current-month", label: "Current month" },
    { id: "custom", label: "Custom range" },
  ];
  const advancedOptions = {
    correspondenceType: ["General", "Commercial", "Support", "Compliance"],
    securityLevel: ["Public", "Internal", "Confidential", "Restricted"],
    urgencyLevel: ["Low", "Normal", "High", "Critical"],
    tasks: ["Reply pending", "Approval pending", "Review pending", "Escalated"],
    createdBy: ["Mack Rod", "Kevin Smith", "Maya Chen", "Jacob M."],
  };
  const actionTakenOptions = ["Approval", "Creation", "Review", "Sending", "Sending to Postal Office", "Sending via G2G"];
  const readStatusOptions = ["Read", "Unread"];
  const documentTypeOptions = ["Correspondence", "Proposal", "Support Note", "Internal Memo"];
  const activeFilterCount = Object.entries(filterState).reduce((count, [key, value]) => {
    if (key === "datePreset") {
      return value !== "current-year" ? count + 1 : count;
    }

    return value ? count + 1 : count;
  }, 0);

  const channelTone = (channel: string) => {
    if (channel === "Email") return "bg-[#eef7ff] text-[#0e68ad]";
    if (channel === "Call") return "bg-[#eef5ff] text-[#3869c8]";
    return "bg-[#eefaf3] text-[#18734d]";
  };

  const priorityTone = (priority: string) => {
    if (priority === "High") return "bg-[#ffe8e8] text-[#b23a3a]";
    if (priority === "Medium") return "bg-[#fff2df] text-[#9a6500]";
    return "bg-[#e7f7ef] text-[#18734d]";
  };

  const toggleAllMessages = () => {
    setSelectedMessageIds((current) => (current.length === messages.length ? [] : messages.map((message) => message.id)));
  };

  const toggleMessageSelection = (messageId: string) => {
    setSelectedMessageIds((current) => (current.includes(messageId) ? current.filter((id) => id !== messageId) : [...current, messageId]));
  };
  const updateFilterField = (field: keyof typeof filterState, value: string) => {
    setFilterState((current) => ({
      ...current,
      [field]: value,
    }));
  };
  const toggleFilterField = (field: keyof typeof filterState, value: string) => {
    setFilterState((current) => ({
      ...current,
      [field]: current[field] === value ? "" : value,
    }));
  };
  const toggleDatePreset = (value: string) => {
    setFilterState((current) => ({
      ...current,
      datePreset: current.datePreset === value && value !== "current-year" ? "current-year" : value,
      dateFrom: value === "custom" ? current.dateFrom : "",
      dateTo: value === "custom" ? current.dateTo : "",
    }));
  };
  const clearFilters = () => {
    setFilterState({
      searchQuery: "",
      datePreset: "current-year",
      dateFrom: "",
      dateTo: "",
      sendingEntity: "",
      sendingRelatedEntity: "",
      receivingEntity: "",
      receivingRelatedEntity: "",
      organizationalUnit: "",
      relatedReference: "",
      correspondenceType: "",
      securityLevel: "",
      urgencyLevel: "",
      tasks: "",
      createdBy: "",
      actionTaken: "",
      takenBy: "",
      readStatus: "",
      documentType: "",
    });
  };

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start overflow-clip relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between px-[20px] relative shrink-0 w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Inbox
          </p>
          <button className="content-stretch flex items-center justify-center size-[32px]" onClick={onClose} type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative flex h-0 min-h-0 flex-1 flex-col bg-white">
        <div className="mr-[56px] bg-[linear-gradient(180deg,rgba(230,243,252,0.65)_0%,rgba(245,250,253,0.72)_100%)] content-stretch flex items-center justify-between overflow-visible px-[14px] py-[7px] relative shrink-0 z-[70]">
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <ProposalActionButton>
                <Home className="size-[16px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <ArrowLeft className="size-[16px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <RotateCcw className="size-[16px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton label="New Message">
                <Mail className="size-[16px] text-[#141414]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <Trash2 className="size-[16px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <Send className="size-[16px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
            </div>

            <div className="content-stretch flex items-center gap-[12px] relative shrink-0">
              <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[50px] w-[284px] shadow-[0_6px_14px_rgba(16,47,74,0.06)]">
                <div className="bg-[#1f83ff] content-stretch flex items-center justify-center overflow-clip py-[9px] relative rounded-bl-[50px] rounded-tl-[50px] shrink-0 w-[46px]">
                  <svg className="size-[17px]" fill="none" viewBox="0 0 20 20">
                    <circle cx="9" cy="9" r="5" stroke="white" strokeWidth="1.8" />
                    <path d="M13 13L17 17" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
                  </svg>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px px-[11px] relative">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#9f9f9f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Search inbox
                  </p>
                  <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                      <path d="M4 6L9 11L14 6" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                    </svg>
                    <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                      <circle cx="8" cy="8" r="3.5" stroke="#141414" strokeWidth="1.4" />
                      <path d="M10.7 10.7L14 14" stroke="#141414" strokeLinecap="round" strokeWidth="1.4" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative">
                <button
                  className={`relative flex size-[30px] items-center justify-center rounded-[999px] transition-colors ${
                    isFilterOpen || activeFilterCount > 0 ? "bg-[#eaf6ff] text-[#0083da]" : "text-[#141414] hover:bg-white/80"
                  }`}
                  onClick={() => setIsFilterOpen((current) => !current)}
                  type="button"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                    <path d="M3 4.5H15L11 9V14L7 12V9L3 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                  </svg>
                  {activeFilterCount ? (
                    <span className="absolute right-[-2px] top-[-2px] inline-flex min-w-[16px] items-center justify-center rounded-full bg-[#0083da] px-[4px] py-[1px] text-[10px] text-white">
                      {activeFilterCount}
                    </span>
                  ) : null}
                </button>

                {isFilterOpen ? (
                  <div className="absolute right-0 top-[42px] z-[120] w-[620px] overflow-hidden rounded-[18px] border border-solid border-[#dce7ef] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                    <div className="flex items-center justify-between border-b border-solid border-[#e7eef4] bg-[linear-gradient(180deg,#fdfefe_0%,#f6fbff_100%)] px-[18px] py-[14px]">
                      <div>
                        <p className="font-['Roboto:Bold',sans-serif] text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Filter Correspondences
                        </p>
                        <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#6f8090]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Date defaults to current year when no range is selected.
                        </p>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <button
                          className="rounded-[999px] border border-solid border-[#d4e3ee] bg-white px-[12px] py-[7px] text-[12px] text-[#5f7283] hover:bg-[#f7fbff]"
                          onClick={clearFilters}
                          type="button"
                        >
                          Clear
                        </button>
                        <button
                          className="flex size-[30px] items-center justify-center rounded-[999px] text-[#5f7283] hover:bg-[#eef5fa]"
                          onClick={() => setIsFilterOpen(false)}
                          type="button"
                        >
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="max-h-[540px] overflow-auto px-[20px] py-[10px]">
                      <div className="flex flex-col">
                        <div className="border-b border-solid border-[#e7eef4] py-[16px]">
                          <FilterPopupField
                            label="Search term"
                            onChange={(value) => updateFilterField("searchQuery", value)}
                            placeholder="Search correspondences, entities, or references"
                            value={filterState.searchQuery}
                          />
                        </div>

                        <div className="border-b border-solid border-[#e7eef4] py-[16px]">
                          <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Date
                          </p>
                          <div className="mt-[10px] flex flex-wrap gap-[8px]">
                            {dateOptions.map((option) => (
                              <button
                                className={`rounded-[999px] border border-solid px-[12px] py-[7px] text-[12px] transition-colors ${
                                  filterState.datePreset === option.id
                                    ? "border-[#0083da] bg-[#eaf6ff] text-[#0083da]"
                                    : "border-[#dbe7ef] bg-white text-[#5f7283] hover:bg-[#f5fbff]"
                                }`}
                                key={option.id}
                                onClick={() => toggleDatePreset(option.id)}
                                type="button"
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                          {filterState.datePreset === "custom" ? (
                            <div className="mt-[14px] grid grid-cols-2 gap-[10px]">
                              <FilterPopupField label="Date from" onChange={(value) => updateFilterField("dateFrom", value)} type="date" value={filterState.dateFrom} />
                              <FilterPopupField label="Date to" onChange={(value) => updateFilterField("dateTo", value)} type="date" value={filterState.dateTo} />
                            </div>
                          ) : null}
                        </div>

                        <div className="border-b border-solid border-[#e7eef4] py-[16px]">
                          <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Entities
                          </p>
                          <div className="mt-[12px] grid grid-cols-2 gap-[10px]">
                            {[
                              { key: "sendingEntity", label: "Sending Entity" },
                              { key: "sendingRelatedEntity", label: "Related Entity" },
                              { key: "receivingEntity", label: "Receiving Entity" },
                              { key: "receivingRelatedEntity", label: "Related Entity" },
                              { key: "organizationalUnit", label: "Organizational Unit", span: "col-span-2" },
                              { key: "relatedReference", label: "Related Ref. Num", span: "col-span-2" },
                            ].map((field) => (
                              <div className={field.span ?? ""} key={field.key}>
                                <FilterPopupField
                                  label={field.label}
                                  onChange={(value) => updateFilterField(field.key as keyof typeof filterState, value)}
                                  placeholder="Searchable dropdown"
                                  value={filterState[field.key as keyof typeof filterState]}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="border-b border-solid border-[#e7eef4] py-[16px]">
                          <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Advanced
                          </p>
                          <div className="mt-[12px] grid grid-cols-2 gap-[10px]">
                            {Object.entries(advancedOptions).map(([key, options]) => (
                              <FilterPopupSelectField
                                key={key}
                                label={key.replace(/([A-Z])/g, " $1").replace(/^./, (value) => value.toUpperCase())}
                                onChange={(value) => updateFilterField(key as keyof typeof filterState, value)}
                                options={options}
                                value={filterState[key as keyof typeof filterState]}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="border-b border-solid border-[#e7eef4] py-[16px]">
                          <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Action Taken
                          </p>
                          <div className="mt-[10px] flex flex-wrap gap-[8px]">
                            {actionTakenOptions.map((option) => (
                              <button
                                className={`rounded-[999px] border border-solid px-[12px] py-[7px] text-[12px] transition-colors ${
                                  filterState.actionTaken === option
                                    ? "border-[#0083da] bg-[#eaf6ff] text-[#0083da]"
                                    : "border-[#dbe7ef] bg-white text-[#5f7283] hover:bg-[#f5fbff]"
                                }`}
                                key={option}
                                onClick={() => toggleFilterField("actionTaken", option)}
                                type="button"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                          <div className="mt-[12px]">
                            <FilterPopupField
                              label="Taken By"
                              onChange={(value) => updateFilterField("takenBy", value)}
                              placeholder="username + user ID + position"
                              value={filterState.takenBy}
                            />
                          </div>
                        </div>

                        <div className="border-b border-solid border-[#e7eef4] py-[16px]">
                          <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Read Status
                          </p>
                          <div className="mt-[10px] flex flex-wrap gap-[8px]">
                            {readStatusOptions.map((option) => (
                              <button
                                className={`rounded-[999px] border border-solid px-[12px] py-[7px] text-[12px] transition-colors ${
                                  filterState.readStatus === option
                                    ? "border-[#0083da] bg-[#eaf6ff] text-[#0083da]"
                                    : "border-[#dbe7ef] bg-white text-[#5f7283] hover:bg-[#f5fbff]"
                                }`}
                                key={option}
                                onClick={() => toggleFilterField("readStatus", option)}
                                type="button"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="py-[16px]">
                          <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Document Type
                          </p>
                          <div className="mt-[10px] flex flex-wrap gap-[8px]">
                            {documentTypeOptions.map((option) => (
                              <button
                                className={`rounded-[999px] border border-solid px-[12px] py-[7px] text-[12px] transition-colors ${
                                  filterState.documentType === option
                                    ? "border-[#0083da] bg-[#eaf6ff] text-[#0083da]"
                                    : "border-[#dbe7ef] bg-white text-[#5f7283] hover:bg-[#f5fbff]"
                                }`}
                                key={option}
                                onClick={() => toggleFilterField("documentType", option)}
                                type="button"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-solid border-[#e7eef4] bg-[#fbfdff] px-[18px] py-[12px]">
                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#6f8090]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Searchable filter fields can be mapped to entity name and file number sources.
                      </p>
                      <div className="flex items-center gap-[10px]">
                        <button
                          className="whitespace-nowrap rounded-[999px] border border-solid border-[#d4e3ee] bg-white px-[14px] py-[8px] text-[13px] text-[#5f7283] hover:bg-[#f7fbff]"
                          onClick={() => setIsFilterOpen(false)}
                          type="button"
                        >
                          Cancel
                        </button>
                        <button
                          className="whitespace-nowrap rounded-[999px] border border-solid border-[#0083da] bg-[#0083da] px-[16px] py-[8px] text-[13px] text-white hover:bg-[#0073c0]"
                          onClick={() => setIsFilterOpen(false)}
                          type="button"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                <circle cx="9" cy="5" fill="#141414" r="1.4" />
                <circle cx="9" cy="9" fill="#141414" r="1.4" />
                <circle cx="9" cy="13" fill="#141414" r="1.4" />
              </svg>
            </div>
          </div>

        <div className="min-w-0 h-0 flex-1 overflow-auto pr-[64px]">
          <div className="px-[18px] py-[18px]">
          <div className="flex flex-col bg-white">
            <div className="grid grid-cols-[40px_110px_minmax(0,2.1fr)_1.15fr_0.9fr_0.95fr_1fr] gap-[12px] border-b border-solid border-[#c5d2dd] px-[18px] py-[12px]">
              <label className="flex items-center">
                <input checked={allSelected} className="size-[16px] rounded-[4px] border border-solid border-[#cbd8e3]" onChange={toggleAllMessages} type="checkbox" />
              </label>
              {["Channel", "Communication", "Contact / Company", "Priority", "Received", "Status"].map((heading) => (
                <p className="font-['Roboto:Medium',sans-serif] font-medium text-[10px] uppercase tracking-[0.04em] text-[#5F7283]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {heading}
                </p>
              ))}
            </div>

            <div>
              {messages.map((message) => {
                const isSelected = selectedMessage.id === message.id;

                return (
                  <button
                    className={`grid w-full grid-cols-[40px_110px_minmax(0,2.1fr)_1.15fr_0.9fr_0.95fr_1fr] gap-[12px] border-b border-solid px-[18px] py-[14px] text-left transition-all ${
                      isSelected
                        ? "border-[#d8ebfb] bg-[linear-gradient(109deg,#f4fbff_0%,#eef8ff_100%)] shadow-[inset_4px_0_0_0_#0083da]"
                        : "border-[#e2eaf1] bg-transparent hover:bg-[#f9fcff]"
                    }`}
                    key={message.id}
                    onClick={() => setSelectedMessageId(message.id)}
                    type="button"
                  >
                    <div className="flex items-center" onClick={(event) => event.stopPropagation()}>
                      <input
                        checked={selectedMessageIds.includes(message.id)}
                        className="size-[16px] rounded-[4px] border border-solid border-[#cbd8e3]"
                        onChange={() => toggleMessageSelection(message.id)}
                        type="checkbox"
                      />
                    </div>
                    <div className="flex items-center">
                      <span className={`inline-flex rounded-[999px] px-[10px] py-[5px] text-[12px] ${channelTone(message.channel)}`}>
                        {message.channel}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {message.subject}
                      </p>
                      <p className="mt-[4px] truncate font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {message.preview}
                      </p>
                    </div>
                    <div>
                      <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {message.contact}
                      </p>
                      <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {message.company}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className={`inline-flex rounded-[999px] px-[10px] py-[5px] text-[12px] ${priorityTone(message.priority)}`}>
                        {message.priority}
                      </span>
                    </div>
                    <div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {message.receivedAt}
                      </p>
                      <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Owner: {message.owner}
                      </p>
                    </div>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {message.status}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
          </div>

          <div className="mt-[30px] flex flex-col overflow-hidden border-t border-solid border-[#dce6ee] bg-[linear-gradient(180deg,#fbfdff_0%,#f6fbff_100%)] pt-[8px]">
            <div className="mr-[36px] flex h-[56px] shrink-0 items-center justify-between px-[20px]">
              <p className="font-['Roboto:Bold',sans-serif] text-[16px] text-[#141414]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Inbox Analysis
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {selectedMessage.company} • {selectedMessage.status}
              </p>
            </div>

            <div className="mr-[36px] grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[18px] px-[20px] py-[18px]">
              <div className="flex min-w-0 flex-col gap-[14px]">
                <div>
                  <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Message Summary
                  </p>
                  <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[14px] leading-[22px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {selectedMessage.summary}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-[12px]">
                  {[
                    { label: "Intent", value: selectedMessage.intent },
                    { label: "Urgency", value: selectedMessage.urgency },
                    { label: "Sentiment", value: selectedMessage.sentiment },
                  ].map((item) => (
                    <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-[#fbfdff] px-[12px] py-[10px]" key={item.label}>
                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item.label}
                      </p>
                      <p className="mt-[5px] font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    CRM Recommendation
                  </p>
                  <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[14px] leading-[22px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {selectedMessage.recommendation}
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 flex-col gap-[14px]">
                <div>
                  <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Suggested Actions
                  </p>
                  <div className="mt-[10px] flex flex-wrap gap-[10px]">
                    {selectedMessage.actions.map((action) => (
                      <button
                        className="rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da] transition-colors hover:bg-[#eef8ff]"
                        key={action}
                        type="button"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Highlights
                  </p>
                  <div className="mt-[10px] flex flex-col gap-[10px]">
                    {selectedMessage.highlights.map((highlight) => (
                      <div className="flex items-start gap-[10px] rounded-[12px] border border-solid border-[#d9e2eb] bg-[#fbfdff] px-[12px] py-[10px]" key={highlight}>
                        <div className="mt-[5px] size-[7px] shrink-0 rounded-full bg-[#1f83ff]" />
                        <p className="font-['Roboto:Regular',sans-serif] text-[13px] leading-[19px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WindowActionPanel actions={windowActions} />
      </div>
    </div>
  );
}

function CustomerDetailField({
  label,
  value,
  icon,
  required = false,
  disabled = false,
  spanClass = "",
  multiline = false,
  onChange,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  spanClass?: string;
  multiline?: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div
      className={`group min-w-0 border-b border-solid px-[4px] pb-[10px] pt-[4px] ${
        disabled
          ? "border-[#e3e7eb]"
          : "border-[#d7d7d7] transition-colors hover:border-[#0083da] focus-within:border-[#0083da]"
      } ${spanClass}`}
    >
      <div className="flex items-center gap-[12px]">
        {icon ? (
          <div className={`flex size-[34px] shrink-0 items-center justify-center self-center border border-solid ${disabled ? "border-[#f0f2f4] bg-white text-[#b3bcc5]" : "border-[#f0f0f0] bg-white text-[#6a6a6a]"}`}>
            {icon}
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-[12px]">
            <div className="min-w-0 flex-1">
              <p className={`font-['Roboto:Regular',sans-serif] text-[12px] ${disabled ? "text-[#a6afb8]" : required ? "text-[#101010]" : "text-[#444444]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                {label}
                {required ? " *" : ""}
              </p>
              {multiline ? (
                <textarea
                  className={`mt-[6px] min-h-[48px] w-full resize-none border-0 bg-transparent p-0 font-['Roboto:Regular',sans-serif] text-[16px] leading-[22px] outline-none placeholder:text-[#9f9f9f] ${disabled ? "cursor-not-allowed text-[#8d98a4]" : "text-black"}`}
                  disabled={disabled}
                  onChange={(event) => onChange(event.target.value)}
                  rows={3}
                  value={value}
                />
              ) : (
                <input
                  className={`mt-[6px] w-full border-0 bg-transparent p-0 font-['Roboto:Regular',sans-serif] text-[16px] outline-none placeholder:text-[#9f9f9f] ${disabled ? "cursor-not-allowed text-[#8d98a4]" : "text-black"}`}
                  disabled={disabled}
                  onChange={(event) => onChange(event.target.value)}
                  type="text"
                  value={value}
                />
              )}
            </div>
            {!disabled ? (
              <button
                className="mb-[2px] self-end flex size-[28px] shrink-0 items-center justify-center rounded-[999px] text-[#0083da] opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                type="button"
              >
                <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                  <circle cx="9" cy="4.5" fill="currentColor" r="1.3" />
                  <circle cx="9" cy="9" fill="currentColor" r="1.3" />
                  <circle cx="9" cy="13.5" fill="currentColor" r="1.3" />
                </svg>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailFieldActionCell({
  buttons,
  align = "left",
  fullRow = false,
  activeColumns = 4,
  spanClass = "",
}: {
  buttons: string[];
  align?: "left" | "center" | "right";
  fullRow?: boolean;
  activeColumns?: 1 | 2 | 3 | 4;
  spanClass?: string;
}) {
  const alignmentClass = align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start";
  const fullRowClass = fullRow
    ? activeColumns === 4
      ? "col-span-4"
      : activeColumns === 3
        ? "col-span-3"
        : activeColumns === 2
          ? "col-span-2"
          : "col-span-1"
    : "";

  return (
    <div className={`min-w-0 px-[4px] pb-[14px] pt-[10px] ${fullRowClass} ${spanClass}`}>
      <div className={`flex min-h-[58px] flex-wrap items-end gap-[10px] ${alignmentClass}`}>
        {buttons.map((button) => (
          <button
            className="rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da] transition-colors hover:bg-[#eef8ff]"
            key={button}
            type="button"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

function FormFieldGroup({
  title,
  isOpen,
  onToggle,
  className = "",
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="w-full py-[12px]">
        <button
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-[16px] text-left"
          onClick={onToggle}
          type="button"
        >
          <p className="font-['Roboto:Bold',sans-serif] text-[16px] font-[800] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            {title}
          </p>
          <span className="flex size-[28px] shrink-0 items-center justify-center rounded-[999px] text-black transition-colors hover:bg-[#f3f6f9]">
            <ChevronDown className={`size-[18px] transition-transform ${isOpen ? "rotate-0" : "-rotate-90"}`} strokeWidth={2} />
          </span>
        </button>
      </div>
      {isOpen ? <div className="pt-[16px]">{children}</div> : null}
    </div>
  );
}

function CustomersView({ onClose }: { onClose: () => void }) {
  const [viewMode, setViewMode] = useState<"dashboard" | "window">("dashboard");
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [activeRightPanel, setActiveRightPanel] = useState<"activity" | "actions" | "subscription">("subscription");
  const [isRightPanelMenuOpen, setIsRightPanelMenuOpen] = useState(false);
  const windowActions = getWindowActionItems();

  const summaryCards = [
    { label: "Active Customers", value: "186", meta: "Accounts with open engagement", accent: "border-[#cde9ff]", valueClass: "text-[#102c3f]" },
    { label: "At Risk", value: "12", meta: "Need attention this month", accent: "border-[#f3d4b8]", valueClass: "text-[#9a5c00]" },
    { label: "Open Cases", value: "27", meta: "Support and service issues", accent: "border-[#ddd4ff]", valueClass: "text-[#5f4aa6]" },
    { label: "Renewal Due", value: "18", meta: "Next 45 days", accent: "border-[#cfead9]", valueClass: "text-[#0b6b45]" },
  ];

  const customerRows = [
    { name: "Apex Med Systems", contact: "Diana Morris", status: "Strategic", owner: "Mack Rod", balance: "$184K", health: "Healthy" },
    { name: "Kumaan Pvt. Ltd.", contact: "Parkash Chaudary", status: "Renewal", owner: "Kevin Smith", balance: "$99K", health: "Needs review" },
    { name: "UrbanAxis Retail", contact: "Kevin Howard", status: "Growth", owner: "Maya Chen", balance: "$128K", health: "Healthy" },
    { name: "Harper Studios", contact: "Jacob Myers", status: "Support", owner: "Jacob M.", balance: "$38K", health: "At risk" },
  ];
  const dynamicCustomerWidgetRows = [
    {
      label: "Renewals due this month",
      badge: "18",
    },
    {
      label: "Support escalations",
      badge: "07",
    },
    {
      label: "Commercial approvals pending",
      badge: "11",
    },
    {
      label: "High-value outreach blocked",
      badge: "04",
    },
    {
      label: "Upsell candidates flagged",
      badge: "09",
    },
    {
      label: "Contracts nearing expiry",
      badge: "06",
    },
  ];

  const detailFields = [
    { label: "Customer Name", value: "Apex Med Systems", icon: <UserRound className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Customer Type", value: "Strategic Account", icon: <BadgeCheck className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Payment Term", value: "Immediate", icon: <Ticket className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Price List", value: "KEH Pricelist", icon: <NotebookText className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Primary Contact", value: "Diana Morris", icon: <UserRound className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Email", value: "diana.morris@apexmed.com", icon: <Mail className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Phone", value: "+1 415 555 0147", icon: <Phone className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Territory", value: "North America", icon: <Package2 className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Warehouse", value: "Standard", icon: <CalendarDays className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Currency Rate Type", value: "Spot", icon: <Percent className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Account Manager", value: "Mack Rod", icon: <UserRound className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Last Order Date", value: "23 Apr 2026", icon: <CalendarDays className="size-[22px]" strokeWidth={1.8} /> },
  ];
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() => ({
    ...Object.fromEntries(detailFields.map((field) => [field.label, field.value])),
    "Billing Address": "501 Mission Street, San Francisco, CA 94105",
    "Shipping Address": "Dock 3, Apex Central Warehouse, Oakland, CA 94607",
    Notes: "Strategic healthcare account with active proposal and renewal motion. Customer prefers pricing updates before Friday reviews.",
    "Internal Summary": "Commercial, support, and renewal workstreams are active. Keep finance and delivery aligned on all pricing changes.",
  }));
  const isNewCustomer = false;
  const activityTimeline = [
    { title: "Quarterly business review completed", meta: "29 Apr 2026, 3:15 PM", tone: "bg-[#eef7ff] text-[#0f69ac]" },
    { title: "Renewal proposal shared with procurement", meta: "27 Apr 2026, 11:40 AM", tone: "bg-[#efeaff] text-[#6551b1]" },
    { title: "Support escalation closed", meta: "24 Apr 2026, 6:05 PM", tone: "bg-[#e7f7ef] text-[#18734d]" },
    { title: "Pricing call held with account team", meta: "22 Apr 2026, 2:30 PM", tone: "bg-[#fff2df] text-[#9a6500]" },
  ];
  const journeyTimeline = [
    { title: "Lead created from website inquiry", meta: "03 Apr 2026", tone: "bg-[#eef7ff] text-[#0f69ac]" },
    { title: "Lead qualified by sales team", meta: "06 Apr 2026", tone: "bg-[#e7f7ef] text-[#18734d]" },
    { title: "Proposal shared and reviewed", meta: "14 Apr 2026", tone: "bg-[#efeaff] text-[#6551b1]" },
    { title: "Customer account created", meta: "20 Apr 2026", tone: "bg-[#fff2df] text-[#9a6500]" },
  ];
  const quickActions = [
    "Create Opportunity",
    "New Proposal",
    "Create Task",
    "Log Call",
    "Send Email",
    "Open Support Case",
  ];
  const requiredDetailLabels = detailFields.filter((field) => field.required).map((field) => field.label);
  const isCustomerReadyToSave = requiredDetailLabels.every((label) => (fieldValues[label] ?? "").trim().length > 0);
  const isContactReadyToSave = ["Primary Contact", "Email", "Phone"].every((label) => (fieldValues[label] ?? "").trim().length > 0);
  const isAddressReadyToSave = ["Billing Address", "Shipping Address"].every((label) => (fieldValues[label] ?? "").trim().length > 0);
  const isNotesReadyToSave = ["Notes", "Internal Summary"].some((label) => (fieldValues[label] ?? "").trim().length > 0);
  const headerPanelActions = [
    { label: "Save Contact", variant: "secondary" as const, disabled: !isContactReadyToSave },
    { label: "Save Addresses", variant: "secondary" as const, disabled: !isAddressReadyToSave },
    { label: "Save Notes", variant: "secondary" as const, disabled: !isNotesReadyToSave },
    { label: "Save Customer", variant: "primary" as const, disabled: !isCustomerReadyToSave },
  ];
  const rightPanelOptions = [
    { id: "activity" as const, label: isNewCustomer ? "Journey Timeline" : "Recent Activity" },
    { id: "actions" as const, label: "Quick Actions" },
    { id: "subscription" as const, label: "Subscription" },
  ];
  const activeRightPanelLabel = rightPanelOptions.find((option) => option.id === activeRightPanel)?.label ?? "Recent Activity";
  const subscriptionPlan = {
    name: "Enterprise Suite",
    tier: "Annual • Tier 3",
    seats: "85 of 100 seats",
    renewsOn: "12 Sep 2026",
    billingCycle: "Annual",
    contractValue: "$ 42,000 / year",
  };
  const subscriptionModules = [
    { name: "Sales CRM", status: "Active", users: 38, addedOn: "12 Sep 2024", tone: "bg-[#e7f7ef] text-[#18734d]" },
    { name: "Customer Support", status: "Active", users: 22, addedOn: "12 Sep 2024", tone: "bg-[#e7f7ef] text-[#18734d]" },
    { name: "Billing & Invoicing", status: "Active", users: 12, addedOn: "12 Sep 2024", tone: "bg-[#e7f7ef] text-[#18734d]" },
    { name: "Analytics Pro", status: "Active", users: 8, addedOn: "18 Jan 2026", tone: "bg-[#e7f7ef] text-[#18734d]" },
    { name: "Field Service", status: "Trial", users: 5, addedOn: "02 May 2026", tone: "bg-[#fff2df] text-[#9a6500]" },
    { name: "Marketing Hub", status: "Not enabled", users: 0, addedOn: "—", tone: "bg-[#eef2f6] text-[#5f7283]" },
  ];
  const nextPayment = {
    amount: "$ 3,500.00",
    dueOn: "01 Jul 2026",
    daysAway: 34,
    method: "ACH • HDFC •••• 4421",
    invoiceRef: "INV-CUS-2014",
    description: "Monthly subscription • Jul 2026 cycle",
  };
  const subscriptionHistory = [
    { date: "01 Jun 2026", description: "Monthly subscription • Jun 2026", amount: "$ 3,500.00", status: "Paid", tone: "bg-[#e7f7ef] text-[#18734d]" },
    { date: "01 May 2026", description: "Monthly subscription • May 2026", amount: "$ 3,500.00", status: "Paid", tone: "bg-[#e7f7ef] text-[#18734d]" },
    { date: "20 Apr 2026", description: "Analytics Pro add-on (8 seats)", amount: "$ 640.00", status: "Paid", tone: "bg-[#e7f7ef] text-[#18734d]" },
    { date: "01 Apr 2026", description: "Monthly subscription • Apr 2026", amount: "$ 3,200.00", status: "Paid", tone: "bg-[#e7f7ef] text-[#18734d]" },
  ];
  const rightPanelWidths: Record<typeof activeRightPanel, string> = {
    activity: "440px",
    actions: "440px",
    subscription: "560px",
  };
  const rightPanelWidth = rightPanelWidths[activeRightPanel];
  const rightPanelNavWidth = 20;
  const windowActionRailWidth = 56;
  const rightPanelContentGap = 8;
  const collapsedRightPanelWidth = rightPanelNavWidth + windowActionRailWidth + rightPanelContentGap;
  const rightPanelWorkspaceOffset = isRightPanelOpen
    ? `calc(${rightPanelWidth} + ${rightPanelNavWidth}px + ${windowActionRailWidth}px + ${rightPanelContentGap}px)`
    : `${collapsedRightPanelWidth}px`;
  const updateFieldValue = (label: string, nextValue: string) => {
    setFieldValues((current) => ({
      ...current,
      [label]: nextValue,
    }));
  };
  const fieldByLabel = new Map(detailFields.map((field) => [field.label, field] as const));
  const renderDetailField = (label: string) => {
    const field = fieldByLabel.get(label);

    if (!field) {
      return null;
    }

    return (
      <CustomerDetailField
        icon={field.icon}
        key={field.label}
        label={field.label}
        onChange={(nextValue) => updateFieldValue(field.label, nextValue)}
        required={field.required}
        spanClass={"spanClass" in field ? field.spanClass ?? "" : ""}
        value={fieldValues[field.label] ?? ""}
      />
    );
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-transparent">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between bg-transparent px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center gap-[18px] relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Customers
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
                          <line stroke="var(--stroke-0, #D9D9D9)" x2="17" y1="0.5" y2="0.5" />
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
              <div className={`absolute bottom-[-10px] h-0 w-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#1f83ff] transition-all ${viewMode === "dashboard" ? "left-[17px]" : "left-[63px]"}`} />
            </div>
          </div>
          <button className="content-stretch flex items-center justify-center size-[32px]" onClick={onClose} type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>

      {viewMode === "dashboard" ? (
        <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
          <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
            <DashboardSearchWidget
              placeholder="Search customers, contacts, account owners, balances, or health"
            />
            <NewRecordWidget
              onClick={() => setViewMode("window")}
              subtitle="Create or open a customer detail record."
              title="New Customer"
            />
            {summaryCards.map((card) => (
              <div
                className={`col-span-2 rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`}
                key={card.label}
                style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
              >
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[clamp(16px,calc(var(--dash-inline-size,100vw)*0.011375),17px)] leading-[1.3] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.label}
                </p>
                <p className={`mt-[0.25em] font-['Roboto:Regular',sans-serif] font-normal text-[1.75em] leading-[1.05] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.value}
                </p>
                <p className="mt-[0.25em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.meta}
                </p>
              </div>
            ))}

            <div className="col-[1/span_6] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
              <div className="flex items-center justify-between gap-[12px]">
                <DashboardWidgetHeader
                  icon={<Building2 className="size-[18px] text-black" strokeWidth={1.9} />}
                  subtitle="Active accounts, customer health, and assigned owners"
                  title="Customer Grid"
                />
                <button className="rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da]" onClick={() => setViewMode("window")} type="button">
                  Open Detail
                </button>
              </div>

              <div className="mt-[18px] grid grid-cols-[minmax(0,1.8fr)_1.1fr_0.95fr_0.95fr_0.9fr_0.8fr] gap-[12px] border-b border-solid border-[#c5d2dd] px-[10px] pb-[10px]">
                {["Customer", "Contact", "Segment", "Owner", "Balance", "Health"].map((heading) => (
                  <p className="font-['Roboto:Medium',sans-serif] font-medium text-[10px] uppercase tracking-[0.04em] text-[#5F7283]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {heading}
                  </p>
                ))}
              </div>
              <div className="min-h-0 flex-1 overflow-auto">
              {customerRows.map((row) => (
                <button className="grid w-full grid-cols-[minmax(0,1.8fr)_1.1fr_0.95fr_0.95fr_0.9fr_0.8fr] gap-[12px] border-b border-solid border-[#e2eaf1] px-[10px] py-[14px] text-left" key={row.name} onClick={() => setViewMode("window")} type="button">
                  <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.name}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.contact}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.status}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.owner}
                  </p>
                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.balance}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {row.health}
                  </p>
                </button>
              ))}
              </div>
            </div>

            <DynamicRowsWidget
              className="col-[7/span_3] row-span-2"
              rows={dynamicCustomerWidgetRows}
              title="Customer Signals"
            />
          </div>
        </div>
      ) : (
        <div className="relative flex h-0 min-h-0 flex-1 flex-col bg-white">
          <div className="mr-[56px] bg-[linear-gradient(180deg,rgba(230,243,252,0.65)_0%,rgba(245,250,253,0.72)_100%)] content-stretch flex items-center justify-between overflow-clip px-[14px] py-[7px] relative shrink-0">
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <ProposalActionButton>
                <Home className="size-[16px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <ArrowLeft className="size-[16px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
              <ProposalActionButton>
                <RotateCcw className="size-[16px] text-[#586575]" strokeWidth={1.8} />
              </ProposalActionButton>
            </div>

            <div className="content-stretch flex items-center gap-[12px] relative shrink-0">
              <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[50px] w-[284px] shadow-[0_6px_14px_rgba(16,47,74,0.06)]">
                <div className="bg-[#1f83ff] content-stretch flex items-center justify-center overflow-clip py-[9px] relative rounded-bl-[50px] rounded-tl-[50px] shrink-0 w-[46px]">
                  <svg className="size-[17px]" fill="none" viewBox="0 0 20 20">
                    <circle cx="9" cy="9" r="5" stroke="white" strokeWidth="1.8" />
                    <path d="M13 13L17 17" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
                  </svg>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px px-[11px] relative">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#9f9f9f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Search customer
                  </p>
                  <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                      <path d="M4 6L9 11L14 6" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                    </svg>
                    <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                      <circle cx="8" cy="8" r="3.5" stroke="#141414" strokeWidth="1.4" />
                      <path d="M10.7 10.7L14 14" stroke="#141414" strokeLinecap="round" strokeWidth="1.4" />
                    </svg>
                  </div>
                </div>
              </div>
              <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                <path d="M3 4.5H15L11 9V14L7 12V9L3 4.5Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
              <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                <circle cx="9" cy="5" fill="#141414" r="1.4" />
                <circle cx="9" cy="9" fill="#141414" r="1.4" />
                <circle cx="9" cy="13" fill="#141414" r="1.4" />
              </svg>
            </div>
          </div>

          <div className="mr-[56px] border-b border-solid border-[#e6eef5] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,252,255,0.88)_100%)] px-[18px] py-[8px] backdrop-blur-[8px]">
            <div className="rounded-[14px] bg-[linear-gradient(180deg,rgba(251,253,255,0.96)_0%,rgba(245,250,255,0.90)_100%)] px-[18px] py-[10px] shadow-[0_8px_18px_rgba(15,61,97,0.035)]">
              <div className="flex flex-wrap items-center justify-between gap-[12px]">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-[14px] gap-y-[4px]">
                    <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {fieldValues["Primary Contact"] ?? ""}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {fieldValues["Email"] ?? ""}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {fieldValues["Phone"] ?? ""}
                    </p>
                  </div>
                  <p className="mt-[3px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {fieldValues["Customer Name"] ?? ""} • {fieldValues["Customer Type"] ?? ""}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-[10px]">
                  {headerPanelActions.map((action) => (
                    <button
                      className={`rounded-[999px] border border-solid px-[14px] py-[8px] text-[13px] transition-colors ${
                        action.variant === "primary"
                          ? action.disabled
                            ? "border-[#b7d8f1] bg-[#dfeef9] text-white/85 cursor-not-allowed"
                            : "border-[#0083da] bg-[#0083da] text-white hover:bg-[#0073c0]"
                          : action.disabled
                            ? "border-[#cfe0ed] bg-white text-[#9ab0c0] cursor-not-allowed"
                            : "border-[#0083da] bg-white text-[#0083da] hover:bg-[#eef8ff]"
                      }`}
                      key={action.label}
                      disabled={action.disabled}
                      type="button"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-0 min-h-0 flex-1 overflow-hidden bg-white">
            <div className="h-full overflow-auto" style={{ marginRight: rightPanelWorkspaceOffset }}>
              <div className="px-[18px] py-[18px]">
                <div className="flex flex-col">
                  <div className="grid grid-cols-3 gap-x-[28px] gap-y-[24px]">
                    {detailFields.map((field) => (
                      <CustomerDetailField
                        icon={field.icon}
                        key={field.label}
                        label={field.label}
                        onChange={(nextValue) => updateFieldValue(field.label, nextValue)}
                        required={field.required}
                        value={fieldValues[field.label] ?? ""}
                      />
                    ))}
                    <CustomerDetailField
                      label="Billing Address"
                      multiline
                      onChange={(nextValue) => updateFieldValue("Billing Address", nextValue)}
                      spanClass="col-span-3"
                      value={fieldValues["Billing Address"] ?? ""}
                    />
                    <CustomerDetailField
                      label="Shipping Address"
                      multiline
                      onChange={(nextValue) => updateFieldValue("Shipping Address", nextValue)}
                      spanClass="col-span-3"
                      value={fieldValues["Shipping Address"] ?? ""}
                    />
                    <CustomerDetailField
                      label="Notes"
                      multiline
                      onChange={(nextValue) => updateFieldValue("Notes", nextValue)}
                      spanClass="col-span-3"
                      value={fieldValues["Notes"] ?? ""}
                    />
                    <CustomerDetailField
                      label="Internal Summary"
                      multiline
                      onChange={(nextValue) => updateFieldValue("Internal Summary", nextValue)}
                      spanClass="col-span-3"
                      value={fieldValues["Internal Summary"] ?? ""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-[56px] flex">
              {isRightPanelOpen ? (
                <div
                  className="shrink-0 border-l border-solid border-[#e6edf3] bg-[linear-gradient(180deg,#fcfeff_0%,#f7fbff_100%)]"
                  style={{ width: rightPanelWidth }}
                >
                  <div className="flex h-full min-h-0 flex-col">
                    <div className="relative flex h-[56px] shrink-0 items-center justify-between border-b border-solid border-[#e6eef5] px-[18px]">
                      <button
                        className="flex min-w-0 items-center gap-[6px] rounded-[10px] px-[2px] py-[4px] text-left text-[#102c3f] transition-colors hover:text-[#0083da]"
                        onClick={() => setIsRightPanelMenuOpen((current) => !current)}
                        type="button"
                      >
                        <span className="truncate font-['Roboto:Bold',sans-serif] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {activeRightPanelLabel}
                        </span>
                        <ChevronDown
                          className={`size-[16px] shrink-0 transition-transform ${isRightPanelMenuOpen ? "rotate-180" : "rotate-0"}`}
                          strokeWidth={2}
                        />
                      </button>
                      <button
                        className="flex size-[28px] items-center justify-center rounded-[999px] text-[#141414] transition-colors hover:bg-[#eef4f8]"
                        onClick={() => {
                          setIsRightPanelMenuOpen(false);
                          setIsRightPanelOpen(false);
                        }}
                        type="button"
                      >
                        <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
                          <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                        </svg>
                      </button>

                      {isRightPanelMenuOpen ? (
                        <div className="absolute left-[14px] top-[46px] z-10 min-w-[170px] overflow-hidden rounded-[12px] border border-solid border-[#dce6ee] bg-white shadow-[0_12px_28px_rgba(15,61,97,0.12)]">
                          {rightPanelOptions.map((option) => {
                            const isActive = option.id === activeRightPanel;

                            return (
                              <button
                                className={`flex w-full items-center justify-between px-[14px] py-[10px] text-left transition-colors ${
                                  isActive ? "bg-[#eef8ff] text-[#005fa3]" : "text-[#102c3f] hover:bg-[#f7fbff]"
                                }`}
                                key={option.id}
                                onClick={() => {
                                  setActiveRightPanel(option.id);
                                  setIsRightPanelMenuOpen(false);
                                }}
                                type="button"
                              >
                                <span className="font-['Roboto:Regular',sans-serif] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {option.label}
                                </span>
                                {isActive ? <span className="size-[6px] rounded-full bg-[#0083da]" /> : null}
                              </button>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>

                    <div className="min-h-0 flex-1 overflow-auto px-[18px] py-[14px]">
                      {activeRightPanel === "activity" ? (
                        <div className="flex flex-col gap-[12px]">
                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {isNewCustomer ? "Lead to customer journey" : "Recent customer activity"}
                          </p>
                          <div className="mt-[2px] flex flex-col gap-[12px]">
                            {(isNewCustomer ? journeyTimeline : activityTimeline).map((item) => (
                              <div className="flex items-start gap-[12px]" key={`${item.title}-${item.meta}`}>
                                <div className="mt-[6px] flex shrink-0 flex-col items-center">
                                  <div className="size-[10px] rounded-full bg-[#1f83ff]" />
                                  <div className="mt-[4px] h-[40px] w-px bg-[#d9e6f2] last:hidden" />
                                </div>
                                <div className="min-w-0 flex-1 rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[10px]">
                                  <div className="flex items-center justify-between gap-[12px]">
                                    <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {item.title}
                                    </p>
                                    <span className={`rounded-[999px] px-[9px] py-[4px] text-[11px] font-['Roboto:Bold',sans-serif] ${item.tone}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {isNewCustomer ? "Journey" : "Update"}
                                    </span>
                                  </div>
                                  <p className="mt-[6px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {item.meta}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {activeRightPanel === "actions" ? (
                        <div className="flex flex-col gap-[14px]">
                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Quick actions and account snapshot for this customer.
                          </p>
                          <div className="flex flex-wrap gap-[10px]">
                            {quickActions.map((action) => (
                              <button
                                className="rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da] transition-colors hover:bg-[#eef8ff]"
                                key={action}
                                type="button"
                              >
                                {action}
                              </button>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 gap-[10px]">
                            {[
                              { label: "Open Opportunities", value: "03" },
                              { label: "Open Tasks", value: "05" },
                              { label: "Latest Proposal", value: "2 days ago" },
                              { label: "Account Health", value: "Healthy" },
                            ].map((item) => (
                              <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[10px]" key={item.label}>
                                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {item.label}
                                </p>
                                <p className="mt-[5px] font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {item.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {activeRightPanel === "subscription" ? (
                        <div className="flex flex-col gap-[14px]">
                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Active plan, enabled modules, and upcoming payment for this customer.
                          </p>

                          <div className="rounded-[14px] border border-solid border-[#cfe0ed] bg-[linear-gradient(180deg,#eef8ff_0%,#f7fbff_100%)] px-[14px] py-[12px]">
                            <div className="flex items-start justify-between gap-[12px]">
                              <div className="min-w-0">
                                <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {subscriptionPlan.name}
                                </p>
                                <p className="mt-[3px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {subscriptionPlan.tier} • {subscriptionPlan.seats}
                                </p>
                              </div>
                              <span className="shrink-0 rounded-[999px] bg-white px-[10px] py-[5px] text-[11px] font-['Roboto:Bold',sans-serif] text-[#0083da]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {subscriptionPlan.billingCycle}
                              </span>
                            </div>
                            <div className="mt-[10px] grid grid-cols-2 gap-x-[14px] gap-y-[6px]">
                              <div>
                                <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Renews on
                                </p>
                                <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {subscriptionPlan.renewsOn}
                                </p>
                              </div>
                              <div>
                                <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Contract value
                                </p>
                                <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {subscriptionPlan.contractValue}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[14px] border border-solid border-[#cfead9] bg-[linear-gradient(180deg,#eff9f3_0%,#f7fbf8_100%)] px-[14px] py-[12px]">
                            <div className="flex items-center justify-between gap-[12px]">
                              <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Next Payment
                              </p>
                              <span className="rounded-[999px] bg-white px-[10px] py-[4px] text-[11px] font-['Roboto:Bold',sans-serif] text-[#0b6b45]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                In {nextPayment.daysAway} days
                              </span>
                            </div>
                            <div className="mt-[10px] flex items-baseline gap-[12px]">
                              <p className="font-['Roboto:Bold',sans-serif] text-[24px] text-[#0b6b45]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {nextPayment.amount}
                              </p>
                              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                due {nextPayment.dueOn}
                              </p>
                            </div>
                            <p className="mt-[6px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {nextPayment.description}
                            </p>
                            <div className="mt-[10px] grid grid-cols-2 gap-x-[14px] gap-y-[6px] border-t border-solid border-[#d9ebde] pt-[10px]">
                              <div>
                                <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Payment method
                                </p>
                                <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {nextPayment.method}
                                </p>
                              </div>
                              <div>
                                <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Invoice reference
                                </p>
                                <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {nextPayment.invoiceRef}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="mb-[8px] flex items-center justify-between">
                              <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Active Modules
                              </p>
                              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {subscriptionModules.filter((m) => m.status === "Active").length} of {subscriptionModules.length} enabled
                              </p>
                            </div>
                            <div className="overflow-hidden rounded-[12px] border border-solid border-[#d9e2eb] bg-white">
                              {subscriptionModules.map((module, index) => (
                                <div
                                  className={`flex items-center justify-between gap-[12px] px-[12px] py-[10px] ${index < subscriptionModules.length - 1 ? "border-b border-solid border-[#e2eaf1]" : ""}`}
                                  key={module.name}
                                >
                                  <div className="min-w-0">
                                    <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {module.name}
                                    </p>
                                    <p className="mt-[3px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {module.users > 0 ? `${module.users} active users` : "No users assigned"} • Added {module.addedOn}
                                    </p>
                                  </div>
                                  <div className="flex shrink-0 items-center gap-[10px]">
                                    <span className={`rounded-[999px] px-[8px] py-[3px] text-[11px] font-['Roboto:Bold',sans-serif] ${module.tone}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {module.status}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="mb-[8px] font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Recent Payments
                            </p>
                            <div className="overflow-hidden rounded-[12px] border border-solid border-[#d9e2eb] bg-white">
                              {subscriptionHistory.map((entry, index) => (
                                <div
                                  className={`flex items-center justify-between gap-[12px] px-[12px] py-[10px] ${index < subscriptionHistory.length - 1 ? "border-b border-solid border-[#e2eaf1]" : ""}`}
                                  key={`${entry.date}-${entry.description}`}
                                >
                                  <div className="min-w-0">
                                    <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {entry.date}
                                    </p>
                                    <p className="mt-[3px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {entry.description}
                                    </p>
                                  </div>
                                  <div className="flex shrink-0 items-center gap-[10px]">
                                    <span className={`rounded-[999px] px-[8px] py-[3px] text-[11px] font-['Roboto:Bold',sans-serif] ${entry.tone}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {entry.status}
                                    </span>
                                    <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {entry.amount}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}

              <button
                aria-expanded={isRightPanelOpen}
                className="group flex w-[20px] shrink-0 items-center justify-center border-l border-solid border-[#e6edf3] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] text-[#7f8e9b] transition-colors hover:border-[#bfe0f6] hover:bg-[linear-gradient(180deg,#f7fbff_0%,#e9f5ff_100%)] hover:text-[#0083da]"
                onClick={() => setIsRightPanelOpen((current) => !current)}
                title={isRightPanelOpen ? "Collapse insights panel" : "Expand insights panel"}
                type="button"
              >
                <span className="flex size-[18px] items-center justify-center rounded-[999px] transition-all group-hover:bg-white group-hover:shadow-[0_2px_8px_rgba(0,131,218,0.18)]">
                  {isRightPanelOpen ? <ChevronRight className="size-[14px]" strokeWidth={2} /> : <ChevronLeft className="size-[14px]" strokeWidth={2} />}
                </span>
              </button>
            </div>

            <WindowActionPanel actions={windowActions} />
          </div>
        </div>
      )}

      {viewMode === "window" ? <ProposalFooter currentPage={1} totalPages={1} totalRecords={customerRows.length} /> : null}
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
      accent: "border-[#cde9ff]",
      valueClass: "text-[#102c3f]",
    },
    {
      label: "Qualified",
      value: "18",
      meta: "Active sales-ready prospects",
      detail: "39% qualification rate",
      accent: "border-[#cfead9]",
      valueClass: "text-[#0b6b45]",
    },
    {
      label: "Avg Lead Score",
      value: "78",
      meta: "Across last 30 days",
      detail: "Top quartile is 88+",
      accent: "border-[#f3dfb8]",
      valueClass: "text-[#9a5c00]",
    },
    {
      label: "Pipeline Created",
      value: "$248K",
      meta: "Estimated from last 30 days",
      detail: "7 opportunities opened",
      accent: "border-[#ddd4ff]",
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
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between px-[20px] relative shrink-0 w-full">
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

      <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
        <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
          <NewRecordWidget
            subtitle="Add a lead, referral, or inbound contact."
            title="New Prospect"
          />
          {summaryCards.map((card, index) => (
            <div
              className={`${summarySpans[index]} rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`}
              key={card.label}
              style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
            >
              <div className="flex items-start justify-between gap-[0.75em]">
                <div>
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[clamp(16px,calc(var(--dash-inline-size,100vw)*0.011375),17px)] leading-[1.3] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.label}
                  </p>
                  <p className={`mt-[0.25em] font-['Roboto:Regular',sans-serif] font-normal text-[1.75em] leading-[1.05] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.value}
                  </p>
                </div>
                <div className="rounded-[12px] bg-white/80 px-[0.625em] py-[0.5em] text-right shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold text-[clamp(9px,calc(var(--dash-inline-size,100vw)*0.007),10px)] uppercase tracking-[0.12em] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Trend
                  </p>
                  <p className="mt-[2px] font-['Roboto:Bold',sans-serif] font-bold text-[clamp(11px,calc(var(--dash-inline-size,100vw)*0.009625),13px)] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.detail}
                  </p>
                </div>
              </div>
              <p className="mt-[0.25em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.meta}
              </p>
            </div>
          ))}

          <div className="col-[1/span_6] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-center justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<Building2 className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Prioritized leads by score, response speed, and estimated pipeline value"
                title="Prospect Grid"
              />
              <div className="flex items-center gap-[8px]">
                <div className="rounded-[999px] bg-[#eef6ff] px-[12px] py-[6px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#0f69ac]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    18 qualified
                  </p>
                </div>
                <div className="rounded-[999px] bg-[#ddf4e8] px-[12px] py-[6px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#0b6b45]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    92 min avg follow-up
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[18px] grid grid-cols-[minmax(0,1.8fr)_minmax(0,1.3fr)_0.9fr_0.8fr_0.9fr_0.9fr_0.9fr] gap-[12px] border-b border-solid border-[#c5d2dd] px-[10px] pb-[10px]">
              {["Company", "Contact", "Source", "Score", "Stage", "Value", "Response"].map((heading) => (
                <p className="font-['Roboto:Medium',sans-serif] font-medium text-[10px] uppercase tracking-[0.04em] text-[#5F7283]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {heading}
                </p>
              ))}
            </div>

            <div className="mt-[2px] min-h-0 flex-1 overflow-auto">
              {prospects.map((prospect) => (
                <div className="grid grid-cols-[minmax(0,1.8fr)_minmax(0,1.3fr)_0.9fr_0.8fr_0.9fr_0.9fr_0.9fr] gap-[12px] border-b border-solid border-[#e2eaf1] px-[10px] py-[14px] last:border-b-0" key={`${prospect.company}-${prospect.contact}`}>
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

          <div className="col-[7/span_3] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<CalendarClock className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Speed to first touch for the latest prospect flow"
                title="Response Time"
              />
            </div>

            <div className="mt-[18px] grid grid-cols-2 gap-[10px]">
              {[
                { label: "Median", value: "42 min" },
                { label: "SLA Met", value: "83%" },
                { label: "Under 30m", value: "19" },
                { label: "Needs Follow-up", value: "6" },
              ].map((item) => (
                <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white/80 px-[14px] py-[12px]" key={item.label}>
                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.label}
                  </p>
                  <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[22px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[16px] min-h-0 flex-1 overflow-auto rounded-[12px] border border-solid border-[#d9e2eb] bg-white/75 px-[14px] py-[12px]">
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

          <div className="col-[1/span_4] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<Percent className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="From raw inquiry to active pipeline creation"
                title="Conversion Funnel"
              />
            </div>

            <div className="mt-[18px] flex min-h-0 flex-1 flex-col gap-[12px] overflow-auto">
              {funnelSteps.map((step) => (
                <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white/75 p-[12px]" key={step.label}>
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

          <div className="col-[5/span_5] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-center justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<BadgeCheck className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Lead quality mix and where the team should spend attention"
                title="Score Distribution"
              />
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
                <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white/75 px-[14px] py-[12px]" key={item.label}>
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
      accent: "border-[#cde9ff]",
      valueClass: "text-[#102c3f]",
    },
    {
      label: "In Progress",
      value: "11",
      meta: "Actively worked this week",
      detail: "4 blocked",
      accent: "border-[#f3dfb8]",
      valueClass: "text-[#9a5c00]",
    },
    {
      label: "Completed",
      value: "24",
      meta: "Closed in last 7 days",
      detail: "+6 vs previous week",
      accent: "border-[#cfead9]",
      valueClass: "text-[#0b6b45]",
    },
    {
      label: "Avg Response",
      value: "3.2h",
      meta: "Assignment to first update",
      detail: "Within 4h SLA target",
      accent: "border-[#ddd4ff]",
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
      tone: "bg-[#eef8ff]",
      items: [
        { title: "Renewal revision sign-off", meta: "Kumaan Pvt. Ltd. • Parkash", emphasis: "Due 4:30 PM" },
        { title: "Northwind discovery notes", meta: "Northwind Energy • Maya", emphasis: "Due 6:00 PM" },
        { title: "Apex commercial check-in", meta: "Apex Med Systems • Diana", emphasis: "Due 1:15 PM" },
        { title: "Aerial Robotics pricing confirm", meta: "Aerial Robotics • Mack", emphasis: "Due 2:30 PM" },
        { title: "Harper Studios renewal call", meta: "Harper Studios • Jacob", emphasis: "Due 3:00 PM" },
        { title: "Kenneth follow-up notes", meta: "Kenneth Group • Parkash", emphasis: "Due 5:45 PM" },
        { title: "Daily standup recap", meta: "Internal • Maya", emphasis: "Due 6:30 PM" },
      ],
    },
    {
      label: "Up Next",
      tone: "bg-[#f7f3ff]",
      items: [
        { title: "Apex pricing follow-up", meta: "Apex Med Systems • Mack", emphasis: "Tomorrow" },
        { title: "UrbanAxis legal review", meta: "UrbanAxis Retail • Kevin", emphasis: "Tomorrow" },
        { title: "Northwind discovery workshop", meta: "Northwind Energy • Maya", emphasis: "Wed" },
        { title: "Kumaan renewal quote send", meta: "Kumaan Pvt. Ltd. • Parkash", emphasis: "Wed" },
        { title: "DK Industries platform demo", meta: "DK Industries • Jacob", emphasis: "Thu" },
        { title: "Harbor Medical commercial reset", meta: "Harbor Medical • Kevin", emphasis: "Thu" },
        { title: "Vendr co-op scope alignment", meta: "Vendr Co-op • Jacob", emphasis: "Fri" },
        { title: "Apex onboarding date confirm", meta: "Apex Med Systems • Diana", emphasis: "Fri" },
        { title: "Ember RetailCo update brief", meta: "Ember RetailCo • Maya", emphasis: "Next Mon" },
      ],
    },
    {
      label: "Waiting",
      tone: "bg-[#fff8ee]",
      items: [
        { title: "Client approval on revised dates", meta: "Kumaan Pvt. Ltd. • Diana", emphasis: "External dependency" },
        { title: "Budget confirmation", meta: "Ember RetailCo • Maya", emphasis: "Pending client reply" },
        { title: "Procurement signature", meta: "Apex Med Systems • Mack", emphasis: "With finance" },
        { title: "Legal redline turnaround", meta: "UrbanAxis Retail • Kevin", emphasis: "Legal review" },
      ],
    },
  ];
  const focusBoardItemsPerPage = 3;
  const [focusBoardIndex, setFocusBoardIndex] = useState(0);
  const [focusBoardPageIndex, setFocusBoardPageIndex] = useState(0);
  const activeBoardColumn = boardColumns[focusBoardIndex];
  const focusBoardPageCount = Math.max(1, Math.ceil(activeBoardColumn.items.length / focusBoardItemsPerPage));
  const focusBoardPageStart = focusBoardPageIndex * focusBoardItemsPerPage;
  const focusBoardPageItems = activeBoardColumn.items.slice(focusBoardPageStart, focusBoardPageStart + focusBoardItemsPerPage);
  const focusBoardHasPrevSection = focusBoardIndex > 0;
  const focusBoardHasNextSection = focusBoardIndex < boardColumns.length - 1;
  const focusBoardHasPrevPage = focusBoardPageIndex > 0;
  const focusBoardHasNextPage = focusBoardPageIndex < focusBoardPageCount - 1;
  const changeFocusBoardSection = (nextIndex: number) => {
    setFocusBoardIndex(nextIndex);
    setFocusBoardPageIndex(0);
  };

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
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between px-[20px] relative shrink-0 w-full">
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

      <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
        <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
          <NewRecordWidget
            subtitle="Create a follow-up, proposal edit task, or client action item."
            title="New Task"
          />
          {summaryCards.map((card, index) => (
            <div
              className={`${summarySpans[index]} rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`}
              key={card.label}
              style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
            >
              <div className="flex items-start justify-between gap-[0.75em]">
                <div>
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[clamp(16px,calc(var(--dash-inline-size,100vw)*0.011375),17px)] leading-[1.3] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.label}
                  </p>
                  <p className={`mt-[0.25em] font-['Roboto:Regular',sans-serif] font-normal text-[1.75em] leading-[1.05] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.value}
                  </p>
                </div>
                <div className="rounded-[12px] bg-white/80 px-[0.625em] py-[0.5em] text-right shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold text-[clamp(9px,calc(var(--dash-inline-size,100vw)*0.007),10px)] uppercase tracking-[0.12em] text-[#8a90a2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Focus
                  </p>
                  <p className="mt-[2px] font-['Roboto:Bold',sans-serif] font-bold text-[clamp(11px,calc(var(--dash-inline-size,100vw)*0.009625),13px)] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {card.detail}
                  </p>
                </div>
              </div>
              <p className="mt-[0.25em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.meta}
              </p>
            </div>
          ))}

          <div className="col-[1/span_6] row-span-2 flex h-full min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-center justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<NotebookText className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Priority work across proposals, opportunities, and follow-ups"
                title="Task Queue"
              />
              <div className="flex items-center gap-[8px]">
                <div className="rounded-[999px] bg-[#ffe4e4] px-[12px] py-[6px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#a33f3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    4 blocked
                  </p>
                </div>
                <div className="rounded-[999px] bg-[#ddf4e8] px-[12px] py-[6px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#0b6b45]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    83% on time
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[18px] grid grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_0.8fr_1fr_1fr_1fr] gap-[12px] border-b border-solid border-[#c5d2dd] px-[10px] pb-[10px]">
              {["Task", "Account", "Priority", "Status", "Due", "Assignee"].map((heading) => (
                <p className="font-['Roboto:Medium',sans-serif] font-medium text-[10px] uppercase tracking-[0.04em] text-[#5F7283]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {heading}
                </p>
              ))}
            </div>

            <div className="mt-[2px]">
              {tasks.map((task) => (
                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_0.8fr_1fr_1fr_1fr] gap-[12px] border-b border-solid border-[#e2eaf1] px-[10px] py-[14px] last:border-b-0" key={`${task.title}-${task.assignee}`}>
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

          <div className="col-[7/span_3] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<NotebookText className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="What needs attention today and next"
                title="Focus Board"
              />
            </div>

            <div className="mt-[18px] flex min-h-0 flex-1 flex-col">
              <div className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[12px] border border-solid border-[#d9e2eb] p-[12px] ${activeBoardColumn.tone}`}>
                <div className="flex items-center justify-between">
                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {activeBoardColumn.label}
                  </p>
                  <span className="rounded-[999px] bg-white px-[10px] py-[4px] text-[12px] font-['Roboto:Bold',sans-serif] text-[#41576a]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {activeBoardColumn.items.length}
                  </span>
                </div>
                <div className="mt-[10px] flex min-h-0 flex-1 flex-col">
                  {focusBoardPageItems.map((item) => (
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

              <div className="mt-[14px] flex items-center justify-between gap-[12px]">
                <div className="flex items-center gap-[8px]">
                  <button
                    aria-label="Previous records"
                    className={`flex size-[24px] items-center justify-center rounded-[6px] border border-solid transition-colors ${
                      focusBoardHasPrevPage
                        ? "border-[#d8e5f0] bg-white text-[#0083da] hover:border-[#bfdcf1] hover:bg-[#eef8ff]"
                        : "border-[#e2eaf1] bg-white/60 text-[#b8c6d2] cursor-not-allowed"
                    }`}
                    disabled={!focusBoardHasPrevPage}
                    onClick={() => setFocusBoardPageIndex((current) => Math.max(0, current - 1))}
                    type="button"
                  >
                    <ChevronLeft className="size-[14px]" strokeWidth={1.9} />
                  </button>
                  <p className="font-['Roboto:Medium',sans-serif] text-[12px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {focusBoardPageIndex + 1} of {focusBoardPageCount}
                  </p>
                  <button
                    aria-label="Next records"
                    className={`flex size-[24px] items-center justify-center rounded-[6px] border border-solid transition-colors ${
                      focusBoardHasNextPage
                        ? "border-[#d8e5f0] bg-white text-[#0083da] hover:border-[#bfdcf1] hover:bg-[#eef8ff]"
                        : "border-[#e2eaf1] bg-white/60 text-[#b8c6d2] cursor-not-allowed"
                    }`}
                    disabled={!focusBoardHasNextPage}
                    onClick={() => setFocusBoardPageIndex((current) => Math.min(focusBoardPageCount - 1, current + 1))}
                    type="button"
                  >
                    <ChevronRight className="size-[14px]" strokeWidth={1.9} />
                  </button>
                </div>

                <div className="flex items-center gap-[6px]">
                  <button
                    aria-label={focusBoardHasPrevSection ? `Go to ${boardColumns[focusBoardIndex - 1].label}` : "No previous section"}
                    className={`flex h-[28px] items-center gap-[6px] rounded-[8px] border border-solid px-[10px] text-[12px] font-['Roboto:Medium',sans-serif] transition-colors ${
                      focusBoardHasPrevSection
                        ? "border-[#d8e5f0] bg-white text-[#0083da] hover:border-[#bfdcf1] hover:bg-[#eef8ff]"
                        : "border-[#e2eaf1] bg-white/60 text-[#b8c6d2] cursor-not-allowed"
                    }`}
                    disabled={!focusBoardHasPrevSection}
                    onClick={() => changeFocusBoardSection(Math.max(0, focusBoardIndex - 1))}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    type="button"
                  >
                    <ChevronLeft className="size-[14px]" strokeWidth={1.9} />
                    <span>{focusBoardHasPrevSection ? boardColumns[focusBoardIndex - 1].label : "Previous"}</span>
                  </button>
                  <button
                    aria-label={focusBoardHasNextSection ? `Go to ${boardColumns[focusBoardIndex + 1].label}` : "No next section"}
                    className={`flex h-[28px] items-center gap-[6px] rounded-[8px] border border-solid px-[10px] text-[12px] font-['Roboto:Medium',sans-serif] transition-colors ${
                      focusBoardHasNextSection
                        ? "border-[#d8e5f0] bg-white text-[#0083da] hover:border-[#bfdcf1] hover:bg-[#eef8ff]"
                        : "border-[#e2eaf1] bg-white/60 text-[#b8c6d2] cursor-not-allowed"
                    }`}
                    disabled={!focusBoardHasNextSection}
                    onClick={() => changeFocusBoardSection(Math.min(boardColumns.length - 1, focusBoardIndex + 1))}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    type="button"
                  >
                    <span>{focusBoardHasNextSection ? boardColumns[focusBoardIndex + 1].label : "Next"}</span>
                    <ChevronRight className="size-[14px]" strokeWidth={1.9} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-[1/span_4] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<UserRound className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Open task distribution across key owners"
                title="Workload Spread"
              />
            </div>

            <div className="mt-[18px] flex min-h-0 flex-1 flex-col gap-[12px] overflow-auto">
              {workload.map((person) => (
                <div className="grid grid-cols-[110px_70px_minmax(0,1fr)] items-center gap-[12px] border-b border-solid border-[#d9e2eb] py-[10px] last:border-b-0 last:pb-0 first:pt-0" key={person.label}>
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

          <div className="col-[5/span_5] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<CalendarDays className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Completed tasks by day plus execution notes"
                title="Completion Trend"
              />
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
                <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white/75 px-[14px] py-[12px]" key={item.label}>
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
  const [agendaPageIndex, setAgendaPageIndex] = useState(1);
  const summaryCards = [
    {
      label: "Today's Meetings",
      value: "08",
      meta: "Across sales and follow-up calls",
      detail: "3 client-facing",
      accent: "border-[#cde9ff]",
      valueClass: "text-[#102c3f]",
    },
    {
      label: "Open Slots",
      value: "05",
      meta: "Available today after 2 PM",
      detail: "Best gap: 4:00-5:30",
      accent: "border-[#cfead9]",
      valueClass: "text-[#0b6b45]",
    },
    {
      label: "Avg Meeting Time",
      value: "42m",
      meta: "This week so far",
      detail: "Down 8m from last week",
      accent: "border-[#f3dfb8]",
      valueClass: "text-[#9a5c00]",
    },
    {
      label: "Follow-ups Due",
      value: "06",
      meta: "Need notes or next action",
      detail: "2 overdue",
      accent: "border-[#ddd4ff]",
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

  const agendaPages = [
    {
      day: "Yesterday",
      helper: "Previous day · 3 completed agenda items",
      nextUpTime: "Completed",
      nextUpTitle: "Medical leave review wrap-up",
      nextUpMeta: "Anjali Verma • Notes filed and approvals synced",
      items: [
        { time: "10:00 AM", title: "Aditya leave approval review", type: "Review", contact: "People Ops", icon: <NotebookText className="size-[14px]" strokeWidth={1.8} /> },
        { time: "01:30 PM", title: "Budget follow-up with vendor", type: "Call", contact: "Mack Rod", icon: <Phone className="size-[14px]" strokeWidth={1.8} /> },
        { time: "04:00 PM", title: "Calendar resync for demos", type: "Internal", contact: "Kevin Smith", icon: <Mail className="size-[14px]" strokeWidth={1.8} /> },
      ],
    },
    {
      day: "Today",
      helper: "Showing 4 agenda items · Live day schedule",
      nextUpTime: "11:00 AM",
      nextUpTitle: "Northwind discovery call",
      nextUpMeta: "Rina Patel • Meeting room 2 / Teams bridge",
      items: [
        { time: "09:30 AM", title: "Kumaan renewal alignment", type: "Video", contact: "Parkash Chaudary", icon: <Phone className="size-[14px]" strokeWidth={1.8} /> },
        { time: "11:00 AM", title: "Northwind discovery call", type: "Meeting", contact: "Rina Patel", icon: <UserRound className="size-[14px]" strokeWidth={1.8} /> },
        { time: "03:00 PM", title: "Apex pricing follow-up", type: "Email review", contact: "Diana Morris", icon: <Mail className="size-[14px]" strokeWidth={1.8} /> },
        { time: "05:30 PM", title: "Demo prep notes", type: "Internal", contact: "Kevin Smith", icon: <NotebookText className="size-[14px]" strokeWidth={1.8} /> },
      ],
    },
    {
      day: "Tomorrow",
      helper: "Upcoming day · 3 scheduled agenda items",
      nextUpTime: "09:00 AM",
      nextUpTitle: "Apex commercial review",
      nextUpMeta: "Diana Morris • Pricing deck and legal summary",
      items: [
        { time: "09:00 AM", title: "Apex commercial review", type: "Meeting", contact: "Diana Morris", icon: <UserRound className="size-[14px]" strokeWidth={1.8} /> },
        { time: "12:30 PM", title: "Lunch with Harper Studios", type: "Client", contact: "Jacob M.", icon: <Phone className="size-[14px]" strokeWidth={1.8} /> },
        { time: "04:15 PM", title: "Weekly forecast clean-up", type: "Internal", contact: "Maya Chen", icon: <NotebookText className="size-[14px]" strokeWidth={1.8} /> },
      ],
    },
  ];
  const currentAgendaPage = agendaPages[agendaPageIndex];

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
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between px-[20px] relative shrink-0 w-full">
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

      <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
        <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
          <NewRecordWidget
            subtitle="Create an appointment or client call."
            title="New Meeting"
          />
          {summaryCards.map((card, index) => (
            <div
              className={`${summarySpans[index]} rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`}
              key={card.label}
              style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
            >
              <p className="font-['Roboto:Regular',sans-serif] font-normal text-[clamp(16px,calc(var(--dash-inline-size,100vw)*0.011375),17px)] leading-[1.3] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.label}
              </p>
              <p className={`mt-[0.25em] font-['Roboto:Regular',sans-serif] font-normal text-[1.75em] leading-[1.05] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.value}
              </p>
              <p className="mt-[0.25em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.meta}
              </p>
            </div>
          ))}

          <div className="col-[1/span_6] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-center justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<CalendarDays className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="This week across client calls, internal reviews, and follow-up blocks"
                title="Weekly Schedule"
              />
              <div className="flex items-center gap-[8px]">
                <button className="flex size-[24px] items-center justify-center rounded-[999px] border border-solid border-[#d7e7f6] bg-white" type="button">
                  <ChevronLeft className="size-[14px] text-[#5f7283]" strokeWidth={1.8} />
                </button>
                <div className="rounded-[999px] border border-solid border-[#d7e7f6] bg-white px-[14px] py-[8px]">
                  <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    22-26 Apr
                  </p>
                </div>
                <button className="flex size-[24px] items-center justify-center rounded-[999px] border border-solid border-[#d7e7f6] bg-white" type="button">
                  <ChevronRight className="size-[14px] text-[#5f7283]" strokeWidth={1.8} />
                </button>
              </div>
            </div>

            <div className="mt-[18px] min-h-0 flex-1 overflow-auto pr-[4px]">
              <div className="grid grid-cols-5 gap-[8px]">
              {weekDays.map((day) => (
                <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white/75 p-[12px]" key={day.label}>
                  <div className="border-b border-solid border-[#e2eaf1] pb-[8px]">
                    <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {day.label}
                    </p>
                  </div>
                  <div className="mt-[8px] flex flex-col gap-[8px]">
                    {day.items.map((item) => (
                      <div className="rounded-[10px] border border-solid border-[#e2eaf1] bg-[#fbfdff] p-[10px]" key={`${day.label}-${item.time}-${item.title}`}>
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
          </div>

          <div className="col-[7/span_3] row-span-2 flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<CalendarClock className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Next meetings and action blocks in sequence"
                title="Today's Agenda"
              />
            </div>

            <div className="mt-[16px] rounded-[12px] border border-solid border-[#d9e2eb] bg-white/80 px-[14px] py-[12px]">
              <div className="flex items-center justify-between">
                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {currentAgendaPage.day}
                </p>
                <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {currentAgendaPage.nextUpTime}
                </p>
              </div>
              <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[18px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {currentAgendaPage.nextUpTitle}
              </p>
              <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {currentAgendaPage.nextUpMeta}
              </p>
            </div>

            <div className="mt-[14px] min-h-0 flex-1 overflow-auto pr-[4px]">
              {currentAgendaPage.items.map((item) => (
                <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-[10px] border-b border-solid border-[#d9e2eb] py-[10px] first:pt-0 last:border-b-0 last:pb-0" key={`${item.time}-${item.title}`}>
                  <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {item.time}
                  </p>
                  <div className="min-w-0">
                    <div className="flex items-center gap-[8px]">
                      <div className="flex size-[24px] items-center justify-center rounded-[999px] bg-[#eef6ff] text-[#1f83ff]">
                        {item.icon}
                      </div>
                      <p className="truncate font-['Roboto:Bold',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
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

            <div className="mt-[16px] flex items-center justify-between gap-[12px] border-t border-solid border-[#d9e2eb] pt-[12px]">
              <p className="min-w-0 font-['Roboto:Regular',sans-serif] text-[13px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {currentAgendaPage.helper}
              </p>
              <div className="flex shrink-0 items-center gap-[8px]">
                <button
                  className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]"
                  disabled={agendaPageIndex === 0}
                  onClick={() => setAgendaPageIndex((current) => Math.max(0, current - 1))}
                  type="button"
                >
                  <ChevronLeft className="size-[14px]" strokeWidth={1.9} />
                </button>
                <p className="font-['Roboto:Medium',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {agendaPageIndex + 1} of {agendaPages.length}
                </p>
                <button
                  className="flex size-[24px] items-center justify-center rounded-[8px] border border-solid border-[#d9e2eb] bg-white/85 text-[#0083da] transition-colors hover:bg-[#eef7ff] disabled:text-[#b8c6d2]"
                  disabled={agendaPageIndex === agendaPages.length - 1}
                  onClick={() => setAgendaPageIndex((current) => Math.min(agendaPages.length - 1, current + 1))}
                  type="button"
                >
                  <ChevronRight className="size-[14px]" strokeWidth={1.9} />
                </button>
              </div>
            </div>
          </div>

          <div className="col-[1/span_4] row-span-2 rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<Hourglass className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Remaining capacity in today's working day"
                title="Availability"
              />
            </div>

            <div className="mt-[18px] flex flex-col gap-[12px]">
              {availabilityRows.map((row) => (
                <div className="grid grid-cols-[100px_100px_minmax(0,1fr)] items-center gap-[12px] border-b border-solid border-[#d9e2eb] py-[10px] first:pt-0 last:border-b-0 last:pb-0" key={row.label}>
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

          <div className="col-[5/span_5] row-span-2 rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[18px] shadow-[0_10px_24px_rgba(15,61,97,0.06)]">
            <div className="flex items-start justify-between gap-[12px]">
              <DashboardWidgetHeader
                icon={<Mail className="size-[18px] text-black" strokeWidth={1.9} />}
                subtitle="Notes, recap emails, and next-step actions after meetings"
                title="Follow-up Queue"
              />
            </div>

            <div className="mt-[18px] grid grid-cols-[minmax(0,2fr)_110px_1fr] gap-[12px] border-b border-solid border-[#c5d2dd] px-[10px] pb-[10px]">
              {["Follow-up", "Due", "Owner"].map((heading) => (
                <p className="font-['Roboto:Medium',sans-serif] font-medium text-[10px] uppercase tracking-[0.04em] text-[#5F7283]" key={heading} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {heading}
                </p>
              ))}
            </div>

            <div className="mt-[2px]">
              {followUps.map((item) => (
                <div className="grid grid-cols-[minmax(0,2fr)_110px_1fr] gap-[12px] border-b border-solid border-[#e2eaf1] px-[10px] py-[14px] last:border-b-0" key={item.title}>
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
                <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white/75 px-[14px] py-[12px]" key={item.label}>
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

function FinanceMetricCard({
  label,
  value,
  meta,
  accent,
  valueClass = "text-[#102c3f]",
  className = "col-span-2",
}: {
  label: string;
  value: string;
  meta: string;
  accent: string;
  valueClass?: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${accent}`}
      style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
    >
      <p className="font-['Roboto:Medium',sans-serif] font-medium text-[clamp(13px,calc(var(--dash-inline-size,100vw)*0.011375),16px)] leading-[1.3] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
      <p className={`mt-[0.25em] font-['Roboto:Regular',sans-serif] font-normal text-[1.75em] leading-[1.05] ${valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        {value}
      </p>
      <p className="mt-[0.25em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {meta}
      </p>
    </div>
  );
}

function FinanceTableCard({
  title,
  subtitle,
  icon,
  columns,
  rows,
  className,
  headerVariant = "rail",
}: {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  columns: string[];
  rows: string[][];
  className: string;
  headerVariant?: "default" | "rail";
}) {
  const isRailHeader = headerVariant === "rail";
  return (
    <div
      className={`${className} flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)]`}
      style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
    >
      <DashboardWidgetHeader icon={icon} subtitle={subtitle} title={title} />
      <div
        className={`mt-[0.75em] grid gap-[0.75em] border-b border-solid px-[0.5em] ${
          isRailHeader
            ? "border-[#c5d2dd] py-[0.5em]"
            : "border-[#e8eef3] pb-[0.5em]"
        }`}
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {columns.map((heading) => (
          <p
            className={
              isRailHeader
                ? "font-['Roboto:Medium',sans-serif] font-medium text-[0.625em] uppercase tracking-[0.04em] text-[#5f7283]"
                : "font-['Roboto:Regular',sans-serif] text-[0.75em] capitalize text-[#748494]"
            }
            key={heading}
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {heading}
          </p>
        ))}
      </div>
      <div className="mt-[0.125em] min-h-0 flex-1 overflow-auto">
        {rows.map((row, rowIndex) => (
          <div
            className="grid gap-[0.75em] border-b border-solid border-[#e2eaf1] px-[0.5em] py-[0.625em] last:border-b-0"
            key={`${title}-${rowIndex}`}
            style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
          >
            {row.map((cell, cellIndex) => (
              <p
                className={`${cellIndex === 0 ? "font-['Roboto:Bold',sans-serif] text-[#102c3f]" : "font-['Roboto:Regular',sans-serif] text-[#5f7283]"} text-[0.75em]`}
                key={`${title}-${rowIndex}-${cellIndex}`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {cell}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function FinanceListCard({
  title,
  subtitle,
  icon,
  items,
  className,
}: {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  items: Array<{ label: string; value: string; meta: string }>;
  className: string;
}) {
  return (
    <div
      className={`${className} flex min-h-0 flex-col overflow-hidden rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)]`}
      style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
    >
      <DashboardWidgetHeader icon={icon} subtitle={subtitle} title={title} />
      <div className="mt-[0.75em] flex min-h-0 flex-1 flex-col overflow-auto">
        {items.map((item) => (
          <div className="flex items-start justify-between gap-[0.75em] border-b border-solid border-[#e2eaf1] py-[0.625em] last:border-b-0 last:pb-0 first:pt-0" key={`${title}-${item.label}`}>
            <div className="min-w-0">
              <p className="font-['Roboto:Bold',sans-serif] text-[0.75em] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {item.label}
              </p>
              <p className="mt-[0.125em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {item.meta}
              </p>
            </div>
            <p className="whitespace-nowrap font-['Roboto:Bold',sans-serif] text-[0.75em] text-[#1f83ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinancePageShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="h-full overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
      <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
        {children}
      </div>
    </div>
  );
}

function FinanceWindowShell({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between px-[20px] relative shrink-0 w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {title}
          </p>
          <button className="content-stretch flex items-center justify-center size-[32px]" onClick={onClose} type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
        <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function FinanceModuleDashboard() {
  return (
    <FinancePageShell>
      <FinanceMetricCard accent="border-[#cde9ff]" label="Cash Position" meta="Across bank accounts and cashbooks" value="$ 1.82M" />
      <FinanceMetricCard accent="border-[#f3dfb8]" label="Receivables Due" meta="Customer invoices due this month" value="$ 426K" valueClass="text-[#9a5c00]" />
      <FinanceMetricCard accent="border-[#f5cfcf]" label="Payables Due" meta="Vendor obligations scheduled this month" value="$ 281K" valueClass="text-[#b04343]" />
      <FinanceMetricCard accent="border-[#cfead9]" className="col-span-3" label="Tax Exposure" meta="Net GST/VAT position before filing adjustments" value="$ 84K" valueClass="text-[#0b6b45]" />

      <FinanceTableCard
        className="col-[1/span_5] row-span-2"
        columns={["Customer", "Invoice", "Due", "Status"]}
        rows={[
          ["Apex Med Systems", "INV-30291", "12 May", "14 days overdue"],
          ["Kumaan Pvt. Ltd.", "INV-30296", "17 May", "Due this week"],
          ["UrbanAxis Retail", "INV-30304", "24 May", "Pending approval"],
        ]}
        icon={<ReceiptText className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Invoices needing collection follow-up and aging attention"
        title="Receivables Focus"
      />
      <FinanceListCard
        className="col-[6/span_4] row-span-2"
        items={[
          { label: "Vendor payroll batch", value: "Tomorrow", meta: "Primary operating account • balance check pending" },
          { label: "Quarterly tax set-aside", value: "$ 42K", meta: "Hold back before next vendor release" },
          { label: "Insurance reimbursement", value: "Expected Fri", meta: "Will improve short-term cash position" },
        ]}
        icon={<WalletCards className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Liquidity-sensitive items and treasury watchpoints"
        title="Cash & Treasury Watch"
      />

      <FinanceListCard
        className="col-[1/span_3] row-span-2"
        items={[
          { label: "Operating account", value: "$ 982K", meta: "Axis Bank • reconciled today" },
          { label: "Collections account", value: "$ 488K", meta: "HDFC • 3 unmatched deposits" },
          { label: "Petty cash network", value: "$ 12K", meta: "Across 4 active branches" },
        ]}
        icon={<Building2 className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Balances across banking and cashbook heads"
        title="Position by Source"
      />
      <FinanceTableCard
        className="col-[4/span_3] row-span-2"
        columns={["Obligation", "Date", "Owner"]}
        rows={[
          ["Vendor payment run", "09 May", "Treasury"],
          ["GST review", "13 May", "Tax team"],
          ["Month-end close prep", "28 May", "Finance ops"],
        ]}
        icon={<CalendarClock className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Upcoming finance operations over the next 30 days"
        title="Upcoming Obligations"
      />
      <FinanceTableCard
        className="col-[7/span_3] row-span-2"
        columns={["Jurisdiction", "Collected", "Net"]}
        rows={[
          ["India GST", "$ 118K", "$ 22K payable"],
          ["EU VAT", "$ 64K", "$ 9K reclaim"],
          ["UAE VAT", "$ 28K", "$ 4K payable"],
        ]}
        icon={<Percent className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Tax view by reporting region"
        title="Tax Snapshot"
      />
    </FinancePageShell>
  );
}

function FinanceSalesInvoiceView({ onClose }: { onClose: () => void }) {
  return (
    <FinanceWindowShell onClose={onClose} title="Sales Invoice">
      <FinanceMetricCard accent="border-[#cde9ff]" label="Outstanding Receivables" meta="Open customer invoices" value="$ 426K" />
      <FinanceMetricCard accent="border-[#f5cfcf]" label="Overdue" meta="Past due receivables" value="$ 118K" valueClass="text-[#b04343]" />
      <FinanceMetricCard accent="border-[#cfead9]" label="Invoices This Week" meta="Newly issued and posted" value="42" valueClass="text-[#0b6b45]" />
      <FinanceMetricCard accent="border-[#f3dfb8]" className="col-span-3" label="Average Days to Collect" meta="Rolling 90-day collection cycle" value="24 days" valueClass="text-[#9a5c00]" />
      <FinanceTableCard
        className="col-[1/span_6] row-span-2"
        columns={["Customer", "Invoice", "Amount", "Due"]}
        icon={<ReceiptText className="size-[18px] text-black" strokeWidth={1.9} />}
        rows={[
          ["Apex Med Systems", "INV-30291", "$ 64K", "12 May"],
          ["Northwind Energy", "INV-30294", "$ 28K", "14 May"],
          ["UrbanAxis Retail", "INV-30301", "$ 93K", "20 May"],
          ["Kumaan Pvt. Ltd.", "INV-30307", "$ 36K", "24 May"],
        ]}
        subtitle="Invoices needing collections outreach or approval follow-up"
        title="Invoices Needing Attention"
      />
      <FinanceListCard
        className="col-[7/span_3] row-span-2"
        icon={<Hourglass className="size-[18px] text-black" strokeWidth={1.9} />}
        items={[
          { label: "0-30 days", value: "$ 208K", meta: "Healthy current receivables" },
          { label: "31-60 days", value: "$ 76K", meta: "Needs owner follow-up" },
          { label: "60+ days", value: "$ 42K", meta: "Escalate with account owner" },
        ]}
        subtitle="Receivables aging summary"
        title="Aging Receivables"
      />
    </FinanceWindowShell>
  );
}

function FinancePurchaseInvoiceView({ onClose }: { onClose: () => void }) {
  const [viewMode, setViewMode] = useState<"dashboard" | "window">("dashboard");
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [activeRightPanel, setActiveRightPanel] = useState<"vendor-insights" | "invoice-history" | "approval-notes">("vendor-insights");
  const [isRightPanelMenuOpen, setIsRightPanelMenuOpen] = useState(false);
  const summaryCards = [
    { label: "Pending Bills", value: "$ 281K", meta: "Awaiting release or approval", accent: "border-[#f3dfb8]", valueClass: "text-[#9a5c00]" },
    { label: "Approved to Pay", value: "$ 164K", meta: "Ready for payment scheduling", accent: "border-[#cde9ff]", valueClass: "text-[#102c3f]" },
    { label: "Exception Queue", value: "09", meta: "Mismatch or compliance issue", accent: "border-[#f5cfcf]", valueClass: "text-[#b04343]" },
    { label: "Avg Approval Time", value: "2.1 days", meta: "Posting to release cycle", accent: "border-[#cfead9]", valueClass: "text-[#0b6b45]" },
  ];
  const detailFields = [
    { label: "Vendor Name", value: "Vertex Cloud Ltd.", icon: <Building2 className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Invoice Number", value: "PIN-1888", icon: <ReceiptText className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Invoice Date", value: "06 May 2026", icon: <CalendarDays className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Due Date", value: "20 May 2026", icon: <CalendarDays className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Purchase Order", value: "PO-44291", icon: <NotebookText className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Payment Term", value: "Net 14", icon: <Ticket className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Cost Center", value: "Cloud Infrastructure", icon: <Package2 className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Currency", value: "USD", icon: <CircleDollarSign className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Receiving Warehouse", value: "Platform Ops", icon: <HardDrive className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Tax Code", value: "GST Input 18%", icon: <Percent className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Amount", value: "$ 19,400.00", icon: <WalletCards className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Approval Owner", value: "Anita Verma", icon: <UserRound className="size-[22px]" strokeWidth={1.8} /> },
  ];
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() => ({
    ...Object.fromEntries(detailFields.map((field) => [field.label, field.value])),
    "Vendor Contact": "Kevin Hughes",
    "Vendor Email": "kevin.hughes@vertexcloud.com",
    "Vendor Phone": "+1 415 555 0981",
    "Billing Address": "22 Federal Street, San Francisco, CA 94107",
    "Internal Notes": "Monthly infrastructure invoice aligned to active cloud hosting contract. Validate bandwidth overage before final posting.",
    "Approval Notes": "Finance lead to confirm cost split between platform and analytics teams before release.",
    "Approval Status": "Ready for review",
  }));
  const windowActions = [
    { id: "new", icon: <FilePlus2 className="size-[18px]" strokeWidth={1.8} /> },
    { id: "save", icon: <HardDrive className="size-[18px]" strokeWidth={1.8} /> },
    { id: "download", icon: <Download className="size-[18px]" strokeWidth={1.8} /> },
    { id: "share", icon: <ExternalLink className="size-[18px]" strokeWidth={1.8} /> },
    { id: "review", icon: <Eye className="size-[18px]" strokeWidth={1.8} /> },
    { id: "reset", icon: <RotateCcw className="size-[18px]" strokeWidth={1.8} /> },
    { id: "delete", icon: <Trash2 className="size-[18px]" strokeWidth={1.8} /> },
  ];
  const requiredLabels = detailFields.filter((field) => field.required).map((field) => field.label);
  const isReadyToSave = requiredLabels.every((label) => (fieldValues[label] ?? "").trim().length > 0);
  const isReadyToSubmit = isReadyToSave && ["Vendor Contact", "Vendor Email"].every((label) => (fieldValues[label] ?? "").trim().length > 0);
  const headerPanelActions = [
    { label: "Save Draft", variant: "primary" as const, disabled: !isReadyToSave },
    { label: "Submit Invoice", variant: "secondary" as const, disabled: !isReadyToSubmit },
    { label: "Attach Bill", variant: "secondary" as const, disabled: false },
    { label: "Match PO", variant: "secondary" as const, disabled: false },
  ];
  const vendorPerformanceStats = [
    { label: "On-time Delivery", value: "93%", meta: "Across the last 12 purchase orders" },
    { label: "Open Due Invoices", value: "02", meta: "One exceeds the agreed due date" },
    { label: "Credit Exposure", value: "$ 28.6K", meta: "Open balance including this bill" },
    { label: "Quality Flags", value: "Low", meta: "No recent receiving or return exceptions" },
  ];
  const vendorOrderHistory = [
    { order: "PO-44291", amount: "$ 19.4K", status: "Invoiced", meta: "Cloud hosting expansion • 06 May 2026" },
    { order: "PO-43872", amount: "$ 12.8K", status: "Paid", meta: "Monitoring services • 22 Apr 2026" },
    { order: "PO-43318", amount: "$ 8.1K", status: "Due", meta: "Security patch support • 11 Apr 2026" },
  ];
  const dueInvoiceAlerts = [
    { ref: "PIN-1834", amount: "$ 8.1K", age: "Due in 2 days" },
    { ref: "PIN-1807", amount: "$ 4.6K", age: "Overdue by 5 days" },
  ];
  const rightPanelOptions = [
    { id: "vendor-insights" as const, label: "Vendor Insights" },
    { id: "invoice-history" as const, label: "Invoice History" },
    { id: "approval-notes" as const, label: "Approval Notes" },
  ];
  const activeRightPanelLabel = rightPanelOptions.find((option) => option.id === activeRightPanel)?.label ?? "Vendor Insights";
  const rightPanelWidths: Record<typeof activeRightPanel, string> = {
    "vendor-insights": "560px",
    "invoice-history": "460px",
    "approval-notes": "460px",
  };
  const rightPanelWidth = rightPanelWidths[activeRightPanel];
  const rightPanelNavWidth = 20;
  const windowActionRailWidth = 56;
  const rightPanelContentGap = 8;
  const collapsedRightPanelWidth = rightPanelNavWidth + windowActionRailWidth + rightPanelContentGap;
  const rightPanelWorkspaceOffset = isRightPanelOpen
    ? `calc(${rightPanelWidth} + ${rightPanelNavWidth}px + ${windowActionRailWidth}px + ${rightPanelContentGap}px)`
    : `${collapsedRightPanelWidth}px`;
  const updateFieldValue = (label: string, nextValue: string) => {
    setFieldValues((current) => ({
      ...current,
      [label]: nextValue,
    }));
  };
  const fieldByLabel = new Map(detailFields.map((field) => [field.label, field] as const));
  const renderDetailField = (label: string) => {
    const field = fieldByLabel.get(label);

    if (!field) {
      return null;
    }

    return (
      <CustomerDetailField
        icon={field.icon}
        key={field.label}
        label={field.label}
        onChange={(nextValue) => updateFieldValue(field.label, nextValue)}
        required={field.required}
        spanClass={"spanClass" in field ? field.spanClass ?? "" : ""}
        value={fieldValues[field.label] ?? ""}
      />
    );
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-transparent">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between bg-transparent px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center gap-[18px] relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Purchase Invoice
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
                          <line stroke="var(--stroke-0, #D9D9D9)" x2="17" y1="0.5" y2="0.5" />
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
              <div className={`absolute bottom-[-10px] h-0 w-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#1f83ff] transition-all ${viewMode === "dashboard" ? "left-[17px]" : "left-[63px]"}`} />
            </div>
          </div>
          <button className="content-stretch flex items-center justify-center size-[32px]" onClick={onClose} type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>

      {viewMode === "dashboard" ? (
        <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
          <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
            <NewRecordWidget
              onClick={() => setViewMode("window")}
              subtitle="Open the purchase invoice entry window."
              title="New Invoice"
            />

            {summaryCards.map((card) => (
              <div
                className={`col-span-2 rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`}
                key={card.label}
                style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
              >
                <p className="font-['Roboto:Medium',sans-serif] font-medium text-[clamp(13px,calc(var(--dash-inline-size,100vw)*0.011375),16px)] leading-[1.3] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.label}
                </p>
                <p className={`mt-[0.25em] font-['Roboto:Regular',sans-serif] font-normal text-[1.75em] leading-[1.05] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.value}
                </p>
                <p className="mt-[0.25em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.meta}
                </p>
              </div>
            ))}

            <FinanceTableCard
              className="col-[1/span_5] row-span-2"
              columns={["Vendor", "Bill", "Amount", "Status"]}
              rows={[
                ["Delphi Services", "PIN-1884", "$ 38K", "Needs approval"],
                ["Vertex Cloud", "PIN-1888", "$ 19K", "Approved"],
                ["Urban Logistics", "PIN-1892", "$ 27K", "3-way mismatch"],
              ]}
              icon={<FileSpreadsheet className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Vendor bills and exception status"
              title="Vendor Invoice Queue"
            />
            <FinanceListCard
              className="col-[6/span_4] row-span-2"
              items={[
                { label: "Rent & facilities", value: "$ 62K", meta: "Largest payable bucket this month" },
                { label: "Cloud infrastructure", value: "$ 54K", meta: "Already approved for release" },
                { label: "Professional services", value: "$ 31K", meta: "Contract review still pending" },
              ]}
              icon={<WalletCards className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Top spend categories by open bill amount"
              title="Open Payables Mix"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="relative flex h-0 min-h-0 flex-1 flex-col bg-white">
            <div className="mr-[56px] bg-[linear-gradient(180deg,rgba(230,243,252,0.65)_0%,rgba(245,250,253,0.72)_100%)] content-stretch flex items-center justify-between overflow-clip px-[14px] py-[7px] relative shrink-0">
              <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                <ProposalActionButton>
                  <Home className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
                <ProposalActionButton>
                  <ArrowLeft className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
                <ProposalActionButton>
                  <RotateCcw className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
                <ProposalActionButton label="New Record">
                  <FilePlus2 className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
              </div>

              <div className="content-stretch flex items-center gap-[12px] relative shrink-0">
                <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[50px] w-[284px] shadow-[0_6px_14px_rgba(16,47,74,0.06)]">
                  <div className="bg-[#1f83ff] content-stretch flex items-center justify-center overflow-clip py-[9px] relative rounded-bl-[50px] rounded-tl-[50px] shrink-0 w-[46px]">
                    <svg className="size-[17px]" fill="none" viewBox="0 0 20 20">
                      <circle cx="9" cy="9" r="5" stroke="white" strokeWidth="1.8" />
                      <path d="M13 13L17 17" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px px-[11px] relative">
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#9f9f9f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Search purchase invoices
                    </p>
                    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
                      <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                        <path d="M4 6L9 11L14 6" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                      </svg>
                      <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                        <circle cx="8" cy="8" r="3.5" stroke="#141414" strokeWidth="1.4" />
                        <path d="M10.7 10.7L14 14" stroke="#141414" strokeLinecap="round" strokeWidth="1.4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                  <path d="M3 4.5H15L11 9V14L7 12V9L3 4.5Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                </svg>
                <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                  <circle cx="9" cy="5" fill="#141414" r="1.4" />
                  <circle cx="9" cy="9" fill="#141414" r="1.4" />
                  <circle cx="9" cy="13" fill="#141414" r="1.4" />
                </svg>
              </div>
            </div>

            <div className="mr-[56px] border-b border-solid border-[#e6eef5] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,252,255,0.88)_100%)] px-[18px] py-[8px] backdrop-blur-[8px]">
              <div className="rounded-[14px] bg-[linear-gradient(180deg,rgba(251,253,255,0.96)_0%,rgba(245,250,255,0.90)_100%)] px-[18px] py-[10px] shadow-[0_8px_18px_rgba(15,61,97,0.035)]">
                <div className="flex flex-wrap items-center justify-between gap-[12px]">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-[14px] gap-y-[4px]">
                      <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {fieldValues["Vendor Name"] ?? ""}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {fieldValues["Vendor Contact"] ?? ""}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {fieldValues["Vendor Email"] ?? ""}
                      </p>
                    </div>
                    <p className="mt-[3px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {fieldValues["Invoice Number"] ?? ""} • {fieldValues["Amount"] ?? ""} • Due {fieldValues["Due Date"] ?? ""}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-[10px]">
                    {headerPanelActions.map((action) => (
                      <button
                        className={`rounded-[999px] border border-solid px-[14px] py-[8px] text-[13px] transition-colors ${
                          action.variant === "primary"
                            ? action.disabled
                              ? "border-[#b7d8f1] bg-[#dfeef9] text-white/85 cursor-not-allowed"
                              : "border-[#0083da] bg-[#0083da] text-white hover:bg-[#0073c0]"
                            : action.disabled
                              ? "border-[#cfe0ed] bg-white text-[#9ab0c0] cursor-not-allowed"
                              : "border-[#0083da] bg-white text-[#0083da] hover:bg-[#eef8ff]"
                        }`}
                        disabled={action.disabled}
                        key={action.label}
                        type="button"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-0 min-h-0 flex-1 overflow-hidden bg-white">
              <div className="h-full overflow-auto" style={{ marginRight: rightPanelWorkspaceOffset }}>
                <div className="min-h-full">
                  <div className="px-[20px] py-[18px]">
                    <div className="grid grid-cols-3 gap-x-[20px] gap-y-[20px]">
                      {renderDetailField("Vendor Name")}
                      {renderDetailField("Invoice Number")}
                      {renderDetailField("Invoice Date")}
                      {renderDetailField("Due Date")}
                      {renderDetailField("Purchase Order")}
                      {renderDetailField("Payment Term")}
                      {renderDetailField("Cost Center")}
                      {renderDetailField("Currency")}
                      {renderDetailField("Receiving Warehouse")}
                      {renderDetailField("Tax Code")}
                      {renderDetailField("Amount")}
                      {renderDetailField("Approval Owner")}
                      <CustomerDetailField
                        icon={<UserRound className="size-[22px]" strokeWidth={1.8} />}
                        label="Vendor Contact"
                        onChange={(nextValue) => updateFieldValue("Vendor Contact", nextValue)}
                        value={fieldValues["Vendor Contact"] ?? ""}
                      />
                      <CustomerDetailField
                        icon={<BadgeCheck className="size-[22px]" strokeWidth={1.8} />}
                        label="Approval Status"
                        onChange={(nextValue) => updateFieldValue("Approval Status", nextValue)}
                        value={fieldValues["Approval Status"] ?? ""}
                      />
                      <CustomerDetailField
                        icon={<Mail className="size-[22px]" strokeWidth={1.8} />}
                        label="Vendor Email"
                        onChange={(nextValue) => updateFieldValue("Vendor Email", nextValue)}
                        value={fieldValues["Vendor Email"] ?? ""}
                      />
                      <CustomerDetailField
                        icon={<Phone className="size-[22px]" strokeWidth={1.8} />}
                        label="Vendor Phone"
                        onChange={(nextValue) => updateFieldValue("Vendor Phone", nextValue)}
                        value={fieldValues["Vendor Phone"] ?? ""}
                      />
                      <CustomerDetailField
                        label="Billing Address"
                        multiline
                        onChange={(nextValue) => updateFieldValue("Billing Address", nextValue)}
                        spanClass="col-span-3"
                        value={fieldValues["Billing Address"] ?? ""}
                      />
                      <CustomerDetailField
                        label="Internal Notes"
                        multiline
                        onChange={(nextValue) => updateFieldValue("Internal Notes", nextValue)}
                        spanClass="col-span-3"
                        value={fieldValues["Internal Notes"] ?? ""}
                      />
                      <CustomerDetailField
                        label="Approval Notes"
                        multiline
                        onChange={(nextValue) => updateFieldValue("Approval Notes", nextValue)}
                        spanClass="col-span-3"
                        value={fieldValues["Approval Notes"] ?? ""}
                      />
                    </div>
                  </div>

                  <div className="mt-[30px] flex flex-col overflow-hidden border-t border-solid border-[#dce6ee] bg-[linear-gradient(180deg,#fbfdff_0%,#f6fbff_100%)] pt-[8px]">
                    <div className="flex h-[56px] shrink-0 items-center justify-between px-[20px]">
                      <p className="font-['Roboto:Bold',sans-serif] text-[16px] text-[#141414]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Invoice Context
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Approval, matching, and next actions
                      </p>
                    </div>

                    <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] gap-[18px] px-[20px] py-[18px]">
                      <div className="min-w-0">
                        <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Validation Timeline
                        </p>
                        <div className="mt-[12px] flex flex-col gap-[12px]">
                          {[
                            { title: "Invoice received from vendor", meta: "06 May 2026, 9:20 AM", tone: "bg-[#eef7ff] text-[#0f69ac]" },
                            { title: "PO match queued for review", meta: "06 May 2026, 10:15 AM", tone: "bg-[#efeaff] text-[#6551b1]" },
                            { title: "Cost split review requested", meta: "06 May 2026, 11:40 AM", tone: "bg-[#fff2df] text-[#9a6500]" },
                          ].map((item) => (
                            <div className="flex items-start gap-[12px]" key={`${item.title}-${item.meta}`}>
                              <div className="mt-[6px] flex shrink-0 flex-col items-center">
                                <div className="size-[10px] rounded-full bg-[#1f83ff]" />
                                <div className="mt-[4px] h-[40px] w-px bg-[#d9e6f2]" />
                              </div>
                              <div className="min-w-0 flex-1 rounded-[12px] border border-solid border-[#d9e2eb] bg-[#fbfdff] px-[12px] py-[10px]">
                                <div className="flex items-center justify-between gap-[12px]">
                                  <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {item.title}
                                  </p>
                                  <span className={`rounded-[999px] px-[9px] py-[4px] text-[11px] font-['Roboto:Bold',sans-serif] ${item.tone}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                                    Update
                                  </span>
                                </div>
                                <p className="mt-[6px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {item.meta}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="min-w-0">
                        <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Quick Actions
                        </p>
                        <div className="mt-[12px] flex flex-wrap gap-[10px]">
                          {["Create Payment Entry", "Notify Approver", "Open Vendor Card", "Download Copy"].map((action) => (
                            <button
                              className="rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da] transition-colors hover:bg-[#eef8ff]"
                              key={action}
                              type="button"
                            >
                              {action}
                            </button>
                          ))}
                        </div>

                        <div className="mt-[16px] grid grid-cols-2 gap-[10px]">
                          {[
                            { label: "PO Match", value: "2 of 3 lines" },
                            { label: "Approval Level", value: "Finance Lead" },
                            { label: "Payment Method", value: "ACH" },
                            { label: "Budget Status", value: "Within limit" },
                          ].map((item) => (
                            <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-[#fbfdff] px-[12px] py-[10px]" key={item.label}>
                              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {item.label}
                              </p>
                              <p className="mt-[5px] font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {item.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-[56px] flex">
                {isRightPanelOpen ? (
                  <div
                    className="shrink-0 border-l border-solid border-[#e6edf3] bg-[linear-gradient(180deg,#fcfeff_0%,#f7fbff_100%)]"
                    style={{ width: rightPanelWidth }}
                  >
                    <div className="flex h-full min-h-0 flex-col">
                      <div className="relative flex h-[56px] shrink-0 items-center justify-between border-b border-solid border-[#e6eef5] px-[18px]">
                        <button
                          className="flex min-w-0 items-center gap-[6px] rounded-[10px] px-[2px] py-[4px] text-left text-[#102c3f] transition-colors hover:text-[#0083da]"
                          onClick={() => setIsRightPanelMenuOpen((current) => !current)}
                          type="button"
                        >
                          <span className="truncate font-['Roboto:Bold',sans-serif] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {activeRightPanelLabel}
                          </span>
                          <ChevronDown
                            className={`size-[16px] shrink-0 transition-transform ${isRightPanelMenuOpen ? "rotate-180" : "rotate-0"}`}
                            strokeWidth={2}
                          />
                        </button>
                        <button
                          className="flex size-[28px] items-center justify-center rounded-[999px] text-[#141414] transition-colors hover:bg-[#eef4f8]"
                          onClick={() => {
                            setIsRightPanelMenuOpen(false);
                            setIsRightPanelOpen(false);
                          }}
                          type="button"
                        >
                          <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
                            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                          </svg>
                        </button>

                        {isRightPanelMenuOpen ? (
                          <div className="absolute left-[14px] top-[46px] z-10 min-w-[170px] overflow-hidden rounded-[12px] border border-solid border-[#dce6ee] bg-white shadow-[0_12px_28px_rgba(15,61,97,0.12)]">
                            {rightPanelOptions.map((option) => {
                              const isActive = option.id === activeRightPanel;

                              return (
                                <button
                                  className={`flex w-full items-center justify-between px-[14px] py-[10px] text-left transition-colors ${
                                    isActive ? "bg-[#eef8ff] text-[#005fa3]" : "text-[#102c3f] hover:bg-[#f7fbff]"
                                  }`}
                                  key={option.id}
                                  onClick={() => {
                                    setActiveRightPanel(option.id);
                                    setIsRightPanelMenuOpen(false);
                                  }}
                                  type="button"
                                >
                                  <span className="font-['Roboto:Regular',sans-serif] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {option.label}
                                  </span>
                                  {isActive ? <span className="size-[6px] rounded-full bg-[#0083da]" /> : null}
                                </button>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>

                      <div className="min-h-0 flex-1 overflow-auto px-[18px] py-[14px]">
                        {activeRightPanel === "vendor-insights" ? (
                          <>
                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Performance and payable context for {fieldValues["Vendor Name"] ?? "this vendor"} before you approve the bill.
                            </p>

                            <div className="mt-[14px] flex flex-col gap-[12px]">
                              <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[12px]">
                                <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {fieldValues["Vendor Name"] ?? ""}
                                </p>
                                <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {fieldValues["Vendor Contact"] ?? ""} • {fieldValues["Vendor Email"] ?? ""}
                                </p>
                                <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Preferred terms: {fieldValues["Payment Term"] ?? ""} • Currency: {fieldValues["Currency"] ?? ""}
                                </p>
                              </div>

                              <div className="flex flex-col gap-[10px]">
                                {vendorPerformanceStats.map((item) => (
                                  <div className="border-b border-solid border-[#c5d2dd] pb-[10px] last:border-b-0 last:pb-0" key={item.label}>
                                    <div className="flex items-center justify-between gap-[12px]">
                                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {item.label}
                                      </p>
                                      <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {item.value}
                                      </p>
                                    </div>
                                    <p className="mt-[5px] font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {item.meta}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : null}

                        {activeRightPanel === "invoice-history" ? (
                          <div className="flex flex-col gap-[12px]">
                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Recent purchase orders and bills from this vendor, including settlement status.
                            </p>
                            <div className="mt-[2px] flex flex-col gap-[10px]">
                              {vendorOrderHistory.map((order) => (
                                <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[10px]" key={order.order}>
                                  <div className="flex items-center justify-between gap-[12px]">
                                    <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {order.order}
                                    </p>
                                    <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#0083da]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {order.amount}
                                    </p>
                                  </div>
                                  <div className="mt-[5px] flex items-center justify-between gap-[12px]">
                                    <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {order.meta}
                                    </p>
                                    <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {order.status}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-[6px] border-t border-solid border-[#e6eef5] pt-[12px]">
                              <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Due Invoice Alerts
                              </p>
                              <div className="mt-[10px] flex flex-col gap-[10px]">
                                {dueInvoiceAlerts.map((invoice) => (
                                  <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[10px]" key={invoice.ref}>
                                    <div className="flex items-center justify-between gap-[12px]">
                                      <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {invoice.ref}
                                      </p>
                                      <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {invoice.amount}
                                      </p>
                                    </div>
                                    <p className="mt-[5px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#b04343]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {invoice.age}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {activeRightPanel === "approval-notes" ? (
                          <div className="flex flex-col gap-[12px]">
                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Short guidance for approvers before submitting and posting this purchase invoice.
                            </p>
                            {[
                              `PO is linked (${fieldValues["Purchase Order"] ?? ""}) and reference format matches the supplier's last accepted bill.`,
                              `Cost center allocated to ${fieldValues["Cost Center"] ?? ""}; confirm split with the platform team before release.`,
                              fieldValues["Approval Notes"] ?? "No internal approval notes are recorded for this invoice yet.",
                            ].map((note) => (
                              <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[10px]" key={note}>
                                <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {note}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}

                <button
                  aria-expanded={isRightPanelOpen}
                  className="group flex w-[20px] shrink-0 items-center justify-center border-l border-solid border-[#e6edf3] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] text-[#7f8e9b] transition-colors hover:border-[#bfe0f6] hover:bg-[linear-gradient(180deg,#f7fbff_0%,#e9f5ff_100%)] hover:text-[#0083da]"
                  onClick={() => setIsRightPanelOpen((current) => !current)}
                  title={isRightPanelOpen ? "Collapse insights panel" : "Expand insights panel"}
                  type="button"
                >
                  <span className="flex size-[18px] items-center justify-center rounded-[999px] transition-all group-hover:bg-white group-hover:shadow-[0_2px_8px_rgba(0,131,218,0.18)]">
                    {isRightPanelOpen ? <ChevronRight className="size-[14px]" strokeWidth={2} /> : <ChevronLeft className="size-[14px]" strokeWidth={2} />}
                  </span>
                </button>
              </div>

              <WindowActionPanel actions={windowActions} />
            </div>
          </div>

          <ProposalFooter currentPage={1} totalPages={1} totalRecords={42} />
        </>
      )}
    </div>
  );
}

function FinanceApInvoiceView({ onClose }: { onClose: () => void }) {
  const [viewMode, setViewMode] = useState<"dashboard" | "window">("dashboard");
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [activeRightPanel, setActiveRightPanel] = useState<"vendor-insights" | "invoice-history" | "approval-notes">("vendor-insights");
  const [isRightPanelMenuOpen, setIsRightPanelMenuOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({
    termsAndConditions: true,
  });
  const summaryCards = [
    { label: "Invoices in Draft", value: "18", meta: "Header created, lines pending review", accent: "border-[#cde9ff]", valueClass: "text-[#102c3f]" },
    { label: "Ready to Post", value: "$ 146K", meta: "Validated AP invoices for posting", accent: "border-[#cfead9]", valueClass: "text-[#0b6b45]" },
    { label: "Hold Payment", value: "07", meta: "Invoices blocked for release", accent: "border-[#f5cfcf]", valueClass: "text-[#b04343]" },
    { label: "Average Lines", value: "4.2", meta: "Invoice lines per AP document", accent: "border-[#f3dfb8]", valueClass: "text-[#9a5c00]" },
  ];
  const detailFields = [
    { label: "Organization", value: "VA Mobile", icon: <Building2 className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Target Doc Type", value: "AP Invoice", icon: <ReceiptText className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Description", value: "Network equipment and monthly support invoice", required: false, spanClass: "col-span-2" },
    { label: "Vendor Invoice Reference", value: "111", icon: <NotebookText className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Purchase Order", value: "PO-98231", icon: <NotebookText className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Date Invoiced", value: "16/06/2023", icon: <CalendarDays className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Account Date", value: "16/06/2023", icon: <CalendarDays className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Representative", value: "<1011396>", icon: <UserRound className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Vendor", value: "George", icon: <UserRound className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Location", value: "Mohali Punjab", icon: <Package2 className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Vendor Contact", value: "George Mathew", icon: <UserRound className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Payment Term", value: "Immediate", icon: <Ticket className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Payment Method", value: "Cash+Card", icon: <WalletCards className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Due Date", value: "30/06/2023", icon: <CalendarDays className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Price List", value: "Standard", icon: <NotebookText className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Currency Rate Type", value: "Spot", icon: <Percent className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Currency Rate Conversion", value: "0.00", icon: <Percent className="size-[22px]" strokeWidth={1.8} />, disabled: true },
  ];
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() => ({
    ...Object.fromEntries(detailFields.map((field) => [field.label, field.value])),
    "Vendor Email": "george@vamobile.in",
    "Vendor Phone": "+91 98150 24011",
  }));
  const [dropShipment, setDropShipment] = useState(false);
  const [holdPayment, setHoldPayment] = useState(true);
  const [invoiceLines, setInvoiceLines] = useState([
    { lineNo: "10", product: "Blower", charge: "", attribute: "BL", description: "Industrial blower for warehouse ventilation system", uom: "Each", quantity: "4", price: "100.00", tax: "18%", amount: "400.00", discount: "", notes: "" },
    { lineNo: "20", product: "", charge: "Installation Service", attribute: "IN", description: "On-site installation labor incl. testing & sign-off", uom: "Hour", quantity: "2", price: "65.00", tax: "18%", amount: "130.00", discount: "", notes: "" },
  ]);
  // Product catalog the search field autocompletes against.
  const productCatalog = [
    "Blower",
    "Compressor",
    "Installation",
    "Maintenance Kit",
    "Pipe Fitting",
    "Sensor Module",
    "Service Charge",
    "Wiring Harness",
  ];
  // Charge catalog used when the line represents a non-product charge.
  const chargeCatalog = [
    "Installation Service",
    "Freight Charge",
    "Setup Cost",
    "Maintenance Fee",
    "Service Surcharge",
    "Misc Fee",
  ];
  // Tax + UOM catalogs power the inline selects on Price→Tax and Quantity→UOM cells.
  // Tax is rendered as a percentage rate so the cell scans as a number across rows
  // (no localized labels like "Standard" / "Exempt" — those vary by jurisdiction).
  const taxCatalog = ["0%", "5%", "12%", "18%", "28%"];
  const uomCatalog = ["Each", "Hour", "Day", "Kg", "Box", "Liter", "Meter"];
  // Per-product / per-charge defaults — auto-applied to UOM and Price when the user
  // picks an item from the catalog. The user can still hand-edit those cells after.
  const productDefaults: Record<string, { uom: string; price: string }> = {
    Blower: { uom: "Each", price: "100.00" },
    Compressor: { uom: "Each", price: "250.00" },
    Installation: { uom: "Hour", price: "65.00" },
    "Maintenance Kit": { uom: "Box", price: "120.00" },
    "Pipe Fitting": { uom: "Each", price: "8.50" },
    "Sensor Module": { uom: "Each", price: "75.00" },
    "Service Charge": { uom: "Hour", price: "85.00" },
    "Wiring Harness": { uom: "Each", price: "45.00" },
  };
  const chargeDefaults: Record<string, { uom: string; price: string }> = {
    "Installation Service": { uom: "Hour", price: "65.00" },
    "Freight Charge": { uom: "Each", price: "150.00" },
    "Setup Cost": { uom: "Each", price: "200.00" },
    "Maintenance Fee": { uom: "Each", price: "300.00" },
    "Service Surcharge": { uom: "Each", price: "50.00" },
    "Misc Fee": { uom: "Each", price: "25.00" },
  };
  // Attributes available per product / per charge. In a real system these come from the master
  // record; here static mocks drive the picker that opens after a product/charge changes.
  const productAttributes: Record<string, string[]> = {
    Blower: ["BL", "BL-XL", "BL-M", "BL-HD"],
    Compressor: ["CP-S", "CP-M", "CP-L"],
    Installation: ["IN-S", "IN-M", "IN-L"],
    "Maintenance Kit": ["MK-A", "MK-B"],
    "Pipe Fitting": ["PF-1", "PF-2", "PF-3"],
    "Sensor Module": ["SM-A", "SM-B"],
    "Service Charge": ["SC-STD", "SC-PRIO"],
    "Wiring Harness": ["WH-S", "WH-L"],
  };
  const chargeAttributes: Record<string, string[]> = {
    "Installation Service": ["IN", "OUT", "EM"],
    "Freight Charge": ["FC-AIR", "FC-SEA", "FC-LAND"],
    "Setup Cost": ["SC-STD"],
    "Maintenance Fee": ["MF-STD", "MF-PREM"],
    "Service Surcharge": ["SS-STD"],
    "Misc Fee": ["MF"],
  };
  type EditableField = "product" | "charge" | "quantity" | "uom" | "description" | "price" | "tax" | "attribute" | "discount" | "notes";
  // Per-row "more options" popover — anchored to the trailing ⋮ icon. Holds optional
  // fields that don't earn a visible column (Discount + Notes for now).
  const [moreRowOpen, setMoreRowOpen] = useState<string | null>(null);
  const [editingCell, setEditingCell] = useState<{ lineNo: string; field: Exclude<EditableField, "attribute"> } | null>(null);
  // Controlled value for the product/charge autocomplete input. Re-initialized whenever the
  // user opens a different primary cell so the input pre-fills with the current value.
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (editingCell?.field === "product" || editingCell?.field === "charge") {
      const line = invoiceLines.find((l) => l.lineNo === editingCell.lineNo);
      setSearchValue((editingCell.field === "product" ? line?.product : line?.charge) ?? "");
    }
  }, [editingCell?.lineNo, editingCell?.field, invoiceLines]);
  const updateLineField = (lineNo: string, field: EditableField, value: string) => {
    setInvoiceLines((lines) => lines.map((l) => (l.lineNo === lineNo ? { ...l, [field]: value } : l)));
  };
  // Attribute picker — opens after a product/charge is changed so the user can pick a fresh
  // attribute for the new item (the previously selected attribute may not be valid anymore).
  const [attributePicker, setAttributePicker] = useState<{
    lineNo: string;
    primaryLabel: string;
    options: string[];
    selectedAttribute: string;
  } | null>(null);
  const commitPrimary = (lineNo: string, field: "product" | "charge", newValue: string) => {
    const line = invoiceLines.find((l) => l.lineNo === lineNo);
    const oldValue = line ? line[field] : "";
    setEditingCell(null);
    if (newValue === oldValue) {
      return;
    }
    // Look up auto-fill defaults for the new item. The new picked item replaces any
    // existing UOM / Price the user may have set — switching the item means it's a
    // different SKU with its own defaults. User can still edit either cell after.
    const defaults = (field === "product" ? productDefaults : chargeDefaults)[newValue];
    setInvoiceLines((lines) =>
      lines.map((l) =>
        l.lineNo === lineNo
          ? {
              ...l,
              [field]: newValue,
              ...(defaults ? { uom: defaults.uom, price: defaults.price } : {}),
            }
          : l,
      ),
    );
    const options = (field === "product" ? productAttributes : chargeAttributes)[newValue] ?? [];
    if (options.length === 0) {
      return;
    }
    const currentAttr = line?.attribute ?? "";
    setAttributePicker({
      lineNo,
      primaryLabel: newValue,
      options,
      selectedAttribute: options.includes(currentAttr) ? currentAttr : options[0],
    });
  };
  // Row selection — drives the Delete button's enabled state and the per-row checkbox.
  const [selectedLineNos, setSelectedLineNos] = useState<Set<string>>(new Set());
  // Unsaved row tracking — a row enters this set when added via the +Add button or
  // by tabbing past Tax on an existing row; it exits when the user clicks Save (which
  // drops empty rows and keeps the rest).
  const [unsavedLineNos, setUnsavedLineNos] = useState<Set<string>>(new Set());
  const hasUnsavedRows = unsavedLineNos.size > 0;
  const toggleLineSelection = (lineNo: string) => {
    setSelectedLineNos((current) => {
      const next = new Set(current);
      if (next.has(lineNo)) {
        next.delete(lineNo);
      } else {
        next.add(lineNo);
      }
      return next;
    });
  };
  const toggleAllLinesSelection = () => {
    if (invoiceLines.length === 0) {
      return;
    }
    if (selectedLineNos.size === invoiceLines.length) {
      setSelectedLineNos(new Set());
    } else {
      setSelectedLineNos(new Set(invoiceLines.map((l) => l.lineNo)));
    }
  };
  const handleAddLine = () => {
    setInvoiceLines((current) => {
      // Read the largest existing lineNo from the freshest state so successive Add /
      // tab-past-tax calls inside the same render frame don't all generate the same id.
      const maxNo = current.reduce((acc, line) => Math.max(acc, parseInt(line.lineNo, 10) || 0), 0);
      const nextNo = String(maxNo + 10).padStart(2, "0");
      const blank = {
        lineNo: nextNo,
        product: "",
        charge: "",
        attribute: "",
        description: "",
        uom: "",
        quantity: "",
        price: "",
        tax: "",
        amount: "",
        discount: "",
        notes: "",
      };
      setUnsavedLineNos((set) => {
        const next = new Set(set);
        next.add(nextNo);
        return next;
      });
      // Drop the new row into edit mode so the user can type immediately. The same
      // commitPrimary flow that fires after the user picks a product / charge then
      // opens the attribute picker — so the new line walks through the exact same
      // product → attribute hand-off as an existing line.
      setEditingCell({ lineNo: nextNo, field: "product" });
      setSearchValue("");
      return [blank, ...current];
    });
  };
  const handleDeleteSelected = () => {
    if (selectedLineNos.size === 0) {
      return;
    }
    setInvoiceLines((current) => current.filter((l) => !selectedLineNos.has(l.lineNo)));
    setSelectedLineNos(new Set());
    setUnsavedLineNos((current) => {
      const next = new Set(current);
      selectedLineNos.forEach((id) => next.delete(id));
      return next;
    });
  };
  const handleSaveRows = () => {
    // Persist all rows that carry data; drop unsaved rows that are still empty.
    // "Empty" = no product and no charge — the rest of the cells are derivative
    // (UOM and Price come from the product picker, the amount is computed) so
    // they don't qualify a row for keeping.
    setInvoiceLines((current) =>
      current.filter((l) => {
        if (!unsavedLineNos.has(l.lineNo)) {
          return true;
        }
        return l.product !== "" || l.charge !== "";
      }),
    );
    setUnsavedLineNos(new Set());
    setEditingCell(null);
  };
  // Numeric helpers — every invoice math number flows through these so the same
  // parsing/formatting rules apply to row Amount AND footer Subtotal/Tax/Total.
  const formatMoney = (n: number) => n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const parseMoney = (s: string) => {
    const n = parseFloat(String(s).replace(/[, ]/g, ""));
    return Number.isFinite(n) ? n : 0;
  };
  const parseTax = (s: string) => parseMoney(String(s).replace(/%/g, ""));
  // lineSubtotal applies the row's discount before tax — so discount tweaks in the
  // popover immediately reflect in both the row's visible Line Amount AND the footer
  // Subtotal / Tax / Total. Tax is computed on the post-discount base, matching
  // typical invoice math (tax never applies to the discount portion).
  const lineSubtotal = (line: { quantity: string; price: string; discount?: string }) => {
    const gross = parseMoney(line.quantity) * parseMoney(line.price);
    const disc = line.discount ? parseMoney(line.discount) : 0;
    return gross * Math.max(0, 1 - disc / 100);
  };
  const lineTaxAmount = (line: { quantity: string; price: string; tax: string; discount?: string }) => lineSubtotal(line) * (parseTax(line.tax) / 100);
  const lineAmount = (line: { quantity: string; price: string; tax: string; discount?: string }) => lineSubtotal(line) + lineTaxAmount(line);
  const invoiceSubtotal = invoiceLines.reduce((acc, l) => acc + lineSubtotal(l), 0);
  const invoiceTax = invoiceLines.reduce((acc, l) => acc + lineTaxAmount(l), 0);
  const invoiceTotal = invoiceSubtotal + invoiceTax;
  // Tab order within a row. Primary cell (product OR charge) is the only branched node;
  // every line lives on exactly one of the two so we collapse both into a "primary" step.
  type RowField = "product" | "charge" | "description" | "quantity" | "uom" | "price" | "tax";
  const advanceField = (lineNo: string, currentField: RowField, value: string, direction: 1 | -1 = 1) => {
    // Commit the value the user just typed/picked in `currentField`.
    if (currentField === "product" || currentField === "charge") {
      commitPrimary(lineNo, currentField, value);
    } else {
      updateLineField(lineNo, currentField, value);
    }
    // Resolve "what's next" — use the line's primary field for the first slot
    const line = invoiceLines.find((l) => l.lineNo === lineNo);
    const primary: "product" | "charge" = line && line.charge !== "" && line.product === "" ? "charge" : "product";
    const order: RowField[] = [primary, "description", "quantity", "uom", "price", "tax"];
    const idx = order.indexOf(currentField);
    const nextIdx = idx + direction;
    if (idx === -1 || nextIdx < 0) {
      setEditingCell(null);
      return;
    }
    if (nextIdx >= order.length) {
      // Tab past Tax (the last column) creates a new row and jumps the cursor into it,
      // so the user can keep adding lines without leaving the keyboard.
      handleAddLine();
      return;
    }
    setEditingCell({ lineNo, field: order[nextIdx] });
  };
  const openAttributePicker = (line: typeof invoiceLines[number]) => {
    const primaryField = line.product !== "" ? "product" : "charge";
    const primaryValue = line.product || line.charge;
    const options = (primaryField === "product" ? productAttributes : chargeAttributes)[primaryValue] ?? [];
    if (options.length === 0) {
      return;
    }
    setAttributePicker({
      lineNo: line.lineNo,
      primaryLabel: primaryValue,
      options,
      selectedAttribute: options.includes(line.attribute) ? line.attribute : options[0],
    });
  };
  // Single shared grid template — header + every body row use this constant so columns
  // line up across rows (Grid Data Widget > Column Sizing And Truncation).
  // Columns: Product or Charge (+ Attribute below) · Description · Quantity/UOM · Price · Tax · Line Amount
  const apInvoiceLineCols = "grid-cols-[28px_minmax(0,1.9fr)_minmax(0,2fr)_minmax(0,1fr)_90px_70px_100px_32px]";
  // Right-panel Invoice History grid — same shared-template rule.
  // Columns: Reference · Date · Amount · Status · Aging
  const vendorInvoiceGridCols = "grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]";
  const windowActions = [
    { id: "save", icon: <HardDrive className="size-[18px]" strokeWidth={1.8} /> },
    { id: "save-as", icon: <FilePlus2 className="size-[18px]" strokeWidth={1.8} /> },
    { id: "download", icon: <Download className="size-[18px]" strokeWidth={1.8} /> },
    { id: "share", icon: <ExternalLink className="size-[18px]" strokeWidth={1.8} /> },
    { id: "review", icon: <Eye className="size-[18px]" strokeWidth={1.8} /> },
    { id: "reset", icon: <RotateCcw className="size-[18px]" strokeWidth={1.8} /> },
    { id: "delete", icon: <Trash2 className="size-[18px]" strokeWidth={1.8} /> },
  ];
  const requiredLabels = detailFields.filter((field) => field.required).map((field) => field.label);
  const isReadyToSave = requiredLabels.every((label) => (fieldValues[label] ?? "").trim().length > 0);
  const hasLines = invoiceLines.length > 0;
  const isReadyToPost = isReadyToSave && hasLines;
  const headerPanelActions = [
    { label: "Create Lines", variant: "secondary" as const, disabled: false },
    { label: "Validate", variant: "secondary" as const, disabled: !hasLines },
    { label: "Post AP Invoice", variant: "secondary" as const, disabled: !isReadyToPost },
  ];
  const headerPanelPrimaryAction = { label: "Completed", variant: "primary" as const, disabled: !isReadyToSave };
  const updateFieldValue = (label: string, nextValue: string) => {
    setFieldValues((current) => ({
      ...current,
      [label]: nextValue,
    }));
  };
  const toggleGroup = (group: keyof typeof openGroups) => {
    setOpenGroups((current) => ({
      ...current,
      [group]: !current[group],
    }));
  };
  const fieldByLabel = new Map(detailFields.map((field) => [field.label, field] as const));
  const renderDetailField = (label: string) => {
    const field = fieldByLabel.get(label);

    if (!field) {
      return null;
    }

    return (
      <CustomerDetailField
        icon={field.icon}
        key={field.label}
        label={field.label}
        onChange={(nextValue) => updateFieldValue(field.label, nextValue)}
        required={field.required}
        disabled={"disabled" in field ? field.disabled ?? false : false}
        spanClass={"spanClass" in field ? field.spanClass ?? "" : ""}
        value={fieldValues[field.label] ?? ""}
      />
    );
  };
  const vendorInsightSections = [
    { label: "Vendor Status", value: holdPayment ? "On payment hold" : "Active for payment", meta: "Mapped supplier account is active in AP master" },
    { label: "Open Exposure", value: "$ 42.8K", meta: "Across 4 unpaid vendor documents" },
    { label: "Last Payment", value: "28 May 2026", meta: "ACH release cleared in 2 business days" },
    { label: "Duplicate Risk", value: "Low", meta: "Reference and amount do not match recent posted invoices" },
  ];
  const vendorContacts = [
    { name: "Anita Verma", role: "Finance Lead", email: "anita.verma@harbor.com", phone: "+1 415 555 0144" },
    { name: "Marcus Hill", role: "Accounts Receivable", email: "marcus.hill@harbor.com", phone: "+1 415 555 0211" },
    { name: "Priya Shah", role: "Account Manager", email: "priya.shah@harbor.com", phone: "+1 415 555 0388" },
    { name: "Brian Walker", role: "Compliance Officer", email: "brian.walker@harbor.com", phone: "+1 415 555 0412" },
  ];
  const vendorComplianceChecks = [
    { label: "W-9 on file (current FY)", met: true },
    { label: "Banking details verified", met: true },
    { label: "MSA in effect until 31 Dec 2026", met: true },
    { label: "SOC 2 Type II attestation", met: true },
    { label: "Insurance certificate current", met: false },
    { label: "Sanctions screening clear", met: true },
  ];
  const recentVendorInvoices = [
    { ref: "INV-2104", date: "12 May 2026", amount: "$ 18,400.00", status: "Posted", tone: "bg-[#eaf8ff] text-[#0f69ac]", aging: "Within terms" },
    { ref: "INV-2087", date: "04 May 2026", amount: "$ 9,640.00", status: "Paid", tone: "bg-[#e7f7ef] text-[#18734d]", aging: "Settled" },
    { ref: "INV-2061", date: "27 Apr 2026", amount: "$ 14,820.00", status: "Hold", tone: "bg-[#fbe6e6] text-[#b04343]", aging: "5 days overdue" },
    { ref: "INV-2034", date: "18 Apr 2026", amount: "$ 22,150.00", status: "Paid", tone: "bg-[#e7f7ef] text-[#18734d]", aging: "Settled" },
    { ref: "INV-1998", date: "08 Apr 2026", amount: "$ 11,300.00", status: "Paid", tone: "bg-[#e7f7ef] text-[#18734d]", aging: "Settled" },
    { ref: "INV-1962", date: "30 Mar 2026", amount: "$ 16,720.00", status: "Posted", tone: "bg-[#eaf8ff] text-[#0f69ac]", aging: "Within terms" },
  ];
  const invoiceHistoryStats = [
    { label: "Billed YTD", value: "$ 184.6K" },
    { label: "Avg Cycle Time", value: "8.4 days" },
    { label: "On-time Rate", value: "92%" },
  ];
  const monthlySpend = [
    { month: "Dec", pct: "40%" },
    { month: "Jan", pct: "55%" },
    { month: "Feb", pct: "62%" },
    { month: "Mar", pct: "48%" },
    { month: "Apr", pct: "80%" },
    { month: "May", pct: "70%" },
  ];
  const approvalRouting = [
    { role: "Submitter", name: "Anita Verma", status: "done" as const },
    { role: "Finance Lead", name: "Maya Chen", status: "done" as const },
    { role: "Controller", name: "Pending", status: "active" as const },
    { role: "Treasury", name: "Awaiting", status: "pending" as const },
  ];
  const approvalCriteria = [
    { label: "PO reference linked and verified against the open commitment", met: true },
    { label: "3-way match: invoice, PO, and receipt agree on quantity and amount", met: true },
    { label: "Line tax codes match the vendor's tax registration", met: true },
    { label: "Cost allocation aligned to active project budget", met: holdPayment ? false : true },
    { label: "Total within approver delegation of authority ($ 25K)", met: true },
    { label: "Hold flag cleared before posting", met: !holdPayment },
  ];
  const approverNotes = [
    { author: "Maya Chen • Finance Lead", time: "Today, 11:24 AM", text: "Confirmed bandwidth overage line with the platform team. Amount aligns with the contracted overage rate." },
    { author: "Anita Verma • Submitter", time: "Today, 10:08 AM", text: "Vendor reference format matches their last 6 invoices. Tax registration is current through Dec 2026." },
    { author: "Brian Walker • Compliance", time: "Yesterday, 4:50 PM", text: "Insurance certificate is up for renewal in 18 days. Flagged for follow-up but does not block this posting." },
  ];
  const rightPanelOptions = [
    { id: "vendor-insights" as const, label: "Vendor Insights" },
    { id: "invoice-history" as const, label: "Invoice History" },
    { id: "approval-notes" as const, label: "Approval Notes" },
  ];
  const activeRightPanelLabel = rightPanelOptions.find((option) => option.id === activeRightPanel)?.label ?? "Vendor Insights";
  // Right panel scales with container width but stays compact on small laptops so the
  // left workspace keeps room for the line grid + form fields.
  //   1280 px viewport (≈1208 px container) → 400 px (floor)
  //   1600 px → 480 px
  //   1920 px → 500 px (ceiling)
  const rightPanelWidth = "clamp(400px, 30cqw, 500px)";
  const rightPanelNavWidth = 20;
  const windowActionRailWidth = 56;
  const rightPanelContentGap = 8;
  const collapsedRightPanelWidth = rightPanelNavWidth + windowActionRailWidth + rightPanelContentGap;
  const rightPanelWorkspaceOffset = isRightPanelOpen
    ? `calc(${rightPanelWidth} + ${rightPanelNavWidth}px + ${windowActionRailWidth}px + ${rightPanelContentGap}px)`
    : `${collapsedRightPanelWidth}px`;

  return (
    <div className="flex h-full flex-col overflow-hidden bg-transparent">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between bg-transparent px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center gap-[18px] relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              AP Invoice
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
                          <line stroke="var(--stroke-0, #D9D9D9)" x2="17" y1="0.5" y2="0.5" />
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
              <div className={`absolute bottom-[-10px] h-0 w-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#1f83ff] transition-all ${viewMode === "dashboard" ? "left-[17px]" : "left-[63px]"}`} />
            </div>
          </div>
          <button className="content-stretch flex items-center justify-center size-[32px]" onClick={onClose} type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>

      {viewMode === "dashboard" ? (
        <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
          <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
            <NewRecordWidget
              onClick={() => setViewMode("window")}
              subtitle="Open the detail form and add invoice lines."
              title="New AP Invoice"
            />

            {summaryCards.map((card) => (
              <div
                className={`col-span-2 rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`}
                key={card.label}
                style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
              >
                <p className="font-['Roboto:Medium',sans-serif] font-medium text-[clamp(13px,calc(var(--dash-inline-size,100vw)*0.011375),16px)] leading-[1.3] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.label}
                </p>
                <p className={`mt-[0.25em] font-['Roboto:Regular',sans-serif] font-normal text-[1.75em] leading-[1.05] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.value}
                </p>
                <p className="mt-[0.25em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.meta}
                </p>
              </div>
            ))}

            <FinanceTableCard
              className="col-[1/span_6] row-span-2"
              columns={["Vendor", "Reference", "Org", "Status"]}
              headerVariant="rail"
              rows={[
                ["George Supplies", "111", "VA Mobile", "Needs lines"],
                ["Harbor Components", "198", "VA Mobile", "Ready to post"],
                ["Crescent Telecom", "241", "VA Services", "Hold payment"],
              ]}
              icon={<FileSpreadsheet className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="AP invoice headers and current processing status"
              title="AP Invoice Queue"
            />
            <FinanceListCard
              className="col-[7/span_3] row-span-2"
              items={[
                { label: "Pending product receipt match", value: "05", meta: "Invoice lines still missing warehouse confirmation" },
                { label: "Tax validation required", value: "03", meta: "Manual review before posting" },
                { label: "Supplier follow-up", value: "02", meta: "Awaiting revised references or attachments" },
              ]}
              icon={<Hourglass className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Items blocking AP invoice completion"
              title="Processing Watchlist"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="relative flex h-0 min-h-0 flex-1 flex-col bg-white">
            <div className="mr-[56px] bg-[linear-gradient(180deg,rgba(230,243,252,0.65)_0%,rgba(245,250,253,0.72)_100%)] content-stretch flex items-center justify-between overflow-clip px-[14px] py-[7px] relative shrink-0">
              <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                <ProposalActionButton>
                  <Home className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
                <ProposalActionButton>
                  <ArrowLeft className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
                <ProposalActionButton>
                  <RotateCcw className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
                <ProposalActionButton label="New Record">
                  <FilePlus2 className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
              </div>

              <div className="content-stretch flex items-center gap-[12px] relative shrink-0">
                <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[50px] w-[284px] shadow-[0_6px_14px_rgba(16,47,74,0.06)]">
                  <div className="bg-[#1f83ff] content-stretch flex items-center justify-center overflow-clip py-[9px] relative rounded-bl-[50px] rounded-tl-[50px] shrink-0 w-[46px]">
                    <svg className="size-[17px]" fill="none" viewBox="0 0 20 20">
                      <circle cx="9" cy="9" r="5" stroke="white" strokeWidth="1.8" />
                      <path d="M13 13L17 17" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px px-[11px] relative">
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#9f9f9f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Search AP invoices
                    </p>
                    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
                      <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                        <path d="M4 6L9 11L14 6" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                      </svg>
                      <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                        <circle cx="8" cy="8" r="3.5" stroke="#141414" strokeWidth="1.4" />
                        <path d="M10.7 10.7L14 14" stroke="#141414" strokeLinecap="round" strokeWidth="1.4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                  <path d="M3 4.5H15L11 9V14L7 12V9L3 4.5Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                </svg>
                <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                  <circle cx="9" cy="5" fill="#141414" r="1.4" />
                  <circle cx="9" cy="9" fill="#141414" r="1.4" />
                  <circle cx="9" cy="13" fill="#141414" r="1.4" />
                </svg>
              </div>
            </div>

            <div className="mr-[56px] border-b border-solid border-[#e6eef5] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,252,255,0.88)_100%)] px-[18px] py-[8px] backdrop-blur-[8px]">
              <div className="rounded-[14px] bg-[linear-gradient(180deg,rgba(251,253,255,0.96)_0%,rgba(245,250,255,0.90)_100%)] px-[18px] py-[10px] shadow-[0_8px_18px_rgba(15,61,97,0.035)]">
                <div className="flex flex-wrap items-center justify-between gap-[12px]">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-[14px] gap-y-[4px]">
                      <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {fieldValues["Organization"] ?? ""}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {fieldValues["Vendor"] ?? ""}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Ref {fieldValues["Vendor Invoice Reference"] ?? ""}
                      </p>
                    </div>
                    <p className="mt-[3px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {invoiceLines.length} lines • {fieldValues["Payment Method"] ?? ""} • Due {fieldValues["Due Date"] ?? ""}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-[10px]">
                    {headerPanelActions.map((action) => (
                      <button
                        className={`rounded-[999px] border border-solid px-[14px] py-[8px] text-[13px] transition-colors ${
                          action.disabled
                            ? "border-[#cfe0ed] bg-white text-[#9ab0c0] cursor-not-allowed"
                            : "border-[#0083da] bg-white text-[#0083da] hover:bg-[#eef8ff]"
                        }`}
                        disabled={action.disabled}
                        key={action.label}
                        type="button"
                      >
                        {action.label}
                      </button>
                    ))}
                    <button
                      className={`rounded-[999px] border border-solid px-[14px] py-[8px] text-[13px] transition-colors ${
                        headerPanelPrimaryAction.disabled
                          ? "border-[#b7d8f1] bg-[#dfeef9] text-white/85 cursor-not-allowed"
                          : "border-[#0083da] bg-[#0083da] text-white hover:bg-[#0073c0]"
                      }`}
                      disabled={headerPanelPrimaryAction.disabled}
                      type="button"
                    >
                      {headerPanelPrimaryAction.label}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-0 min-h-0 flex-1 overflow-hidden bg-white" style={{ containerType: "inline-size" }}>
              <div className="h-full overflow-auto" style={{ marginRight: rightPanelWorkspaceOffset }}>
                <div className="min-h-full">
                  <div className="px-[20px] py-[18px]">
                    <div className="flex flex-col gap-[24px]">
                      <div className="grid grid-cols-3 gap-x-[18px] gap-y-[18px]">
                        {renderDetailField("Organization")}
                        {renderDetailField("Target Doc Type")}
                        {renderDetailField("Vendor Invoice Reference")}
                        {renderDetailField("Description")}
                        {renderDetailField("Purchase Order")}
                        {renderDetailField("Vendor")}
                        {renderDetailField("Vendor Contact")}
                        {renderDetailField("Representative")}
                        {renderDetailField("Date Invoiced")}
                        {renderDetailField("Account Date")}
                        {renderDetailField("Location")}
                        <CustomerDetailField
                          icon={<Mail className="size-[22px]" strokeWidth={1.8} />}
                          label="Vendor Email"
                          onChange={(nextValue) => updateFieldValue("Vendor Email", nextValue)}
                          value={fieldValues["Vendor Email"] ?? ""}
                        />
                        <CustomerDetailField
                          icon={<Phone className="size-[22px]" strokeWidth={1.8} />}
                          label="Vendor Phone"
                          onChange={(nextValue) => updateFieldValue("Vendor Phone", nextValue)}
                          value={fieldValues["Vendor Phone"] ?? ""}
                        />
                      </div>

                      <FormFieldGroup
                        isOpen={openGroups.termsAndConditions}
                        onToggle={() => toggleGroup("termsAndConditions")}
                        title="Terms & Conditions"
                      >
                        <div className="grid grid-cols-3 gap-x-[18px] gap-y-[18px]">
                          {renderDetailField("Payment Term")}
                          {renderDetailField("Payment Method")}
                          {renderDetailField("Due Date")}
                          {renderDetailField("Price List")}
                          {renderDetailField("Currency Rate Type")}
                          {renderDetailField("Currency Rate Conversion")}
                          <div className="col-span-1 flex items-center justify-between px-[4px] pb-[14px] pt-[18px]">
                            <div className="flex items-center gap-[12px]">
                              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#444444]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Drop Shipment
                              </p>
                            </div>
                            <button
                              className={`relative flex h-[22px] w-[42px] items-center rounded-full transition-colors ${dropShipment ? "bg-[#0083da]" : "bg-[#d5dbe3]"}`}
                              onClick={() => setDropShipment((current) => !current)}
                              type="button"
                            >
                              <span className={`absolute size-[18px] rounded-full bg-white shadow-[0_2px_6px_rgba(15,61,97,0.18)] transition-all ${dropShipment ? "left-[22px]" : "left-[2px]"}`} />
                            </button>
                          </div>
                          <div className="col-span-1 flex items-center justify-between px-[4px] pb-[14px] pt-[18px]">
                            <div className="flex items-center gap-[12px]">
                              <div className="flex size-[34px] shrink-0 items-center justify-center self-center border border-solid border-[#f0f0f0] bg-white text-[#6a6a6a]">
                                <BadgeCheck className="size-[20px]" strokeWidth={1.8} />
                              </div>
                              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#444444]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Hold Payment
                              </p>
                            </div>
                            <button
                              className={`relative flex h-[22px] w-[42px] items-center rounded-full transition-colors ${holdPayment ? "bg-[#0083da]" : "bg-[#d5dbe3]"}`}
                              onClick={() => setHoldPayment((current) => !current)}
                              type="button"
                            >
                              <span className={`absolute size-[18px] rounded-full bg-white shadow-[0_2px_6px_rgba(15,61,97,0.18)] transition-all ${holdPayment ? "left-[22px]" : "left-[2px]"}`} />
                            </button>
                          </div>
                          <DetailFieldActionCell
                            activeColumns={3}
                            align="right"
                            buttons={["Apply Discount", "Copy Lines from other Invoice"]}
                            fullRow
                          />
                        </div>
                      </FormFieldGroup>
                    </div>
                  </div>

                  <div className="mt-[30px] border-t border-solid border-[#dce6ee] bg-white pt-[8px]">
                    <div className="flex min-h-[56px] flex-wrap items-center justify-between gap-[12px] px-[20px] py-[10px]">
                      <div className="min-w-0">
                        <p className="font-['Roboto:Bold',sans-serif] text-[16px] text-[#141414]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Invoice Lines & Summary
                        </p>
                        <p className="mt-[2px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#717182]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Lines, navigation, and posting totals
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-[10px]">
                        {hasUnsavedRows ? (
                          <button
                            className="flex items-center gap-[6px] rounded-[999px] border border-solid border-[#0083da] bg-[#0083da] px-[14px] py-[8px] text-[13px] text-white transition-colors hover:bg-[#0069ae]"
                            onClick={handleSaveRows}
                            type="button"
                          >
                            <HardDrive className="size-[14px]" strokeWidth={2} />
                            Save row{unsavedLineNos.size > 1 ? "s" : ""} ({unsavedLineNos.size})
                          </button>
                        ) : (
                          <button
                            className="flex items-center gap-[6px] rounded-[999px] border border-solid border-[#0083da] bg-white px-[14px] py-[8px] text-[13px] text-[#0083da] transition-colors hover:bg-[#eef7ff]"
                            onClick={handleAddLine}
                            type="button"
                          >
                            <Plus className="size-[14px]" strokeWidth={2} />
                            Add line
                          </button>
                        )}
                        <button
                          className={`flex items-center gap-[6px] rounded-[999px] border border-solid px-[14px] py-[8px] text-[13px] transition-colors ${
                            selectedLineNos.size > 0
                              ? "border-[#a33f3f] bg-white text-[#a33f3f] hover:bg-[#fbe6e6]"
                              : "cursor-not-allowed border-[#dbe6ee] bg-white text-[#9aa6b2]"
                          }`}
                          disabled={selectedLineNos.size === 0}
                          onClick={handleDeleteSelected}
                          type="button"
                        >
                          <Trash2 className="size-[14px]" strokeWidth={2} />
                          Delete line{selectedLineNos.size > 1 ? "s" : ""}
                          {selectedLineNos.size > 0 ? ` (${selectedLineNos.size})` : ""}
                        </button>
                      </div>
                    </div>

                    <div className="px-[20px] pb-[18px] pt-[8px]">
                      <div>
                        <div className={`grid ${apInvoiceLineCols} items-center gap-[12px] border-b border-solid border-[#c5d2dd] py-[10px]`}>
                          <div className="flex items-center justify-center">
                            <input
                              aria-label="Select all lines"
                              checked={invoiceLines.length > 0 && selectedLineNos.size === invoiceLines.length}
                              className="size-[16px] cursor-pointer accent-[#0083da]"
                              onChange={toggleAllLinesSelection}
                              type="checkbox"
                            />
                          </div>
                          {[
                            { label: "Product / Charge", align: "left" as const },
                            { label: "Description", align: "left" as const },
                            { label: "Quantity / UOM", align: "right" as const },
                            { label: "Price", align: "right" as const },
                            { label: "Tax", align: "left" as const },
                            { label: "Line Amount", align: "right" as const },
                          ].map((heading) => (
                            <p className={`truncate font-['Roboto:Bold',sans-serif] text-[13px] capitalize text-[#102c3f] ${heading.align === "right" ? "text-right" : ""}`} key={heading.label} style={{ fontVariationSettings: "'wdth' 100" }} title={heading.label}>
                              {heading.label}
                            </p>
                          ))}
                          <span aria-hidden="true" />
                        </div>
                        {invoiceLines.map((line) => {
                          // Charge wins only if it is the line's actual identity (product is empty).
                          // For a brand-new empty line (both empty) we want clicks to open the Product
                          // catalog by default — that's what users mean when they say "add a line."
                          const primaryField: "product" | "charge" = line.charge !== "" && line.product === "" ? "charge" : "product";
                          const primaryValue = line.product || line.charge;
                          const primaryCatalog = primaryField === "product" ? productCatalog : chargeCatalog;
                          const isEditingPrimary = editingCell?.lineNo === line.lineNo && (editingCell.field === "product" || editingCell.field === "charge");
                          const isSelected = selectedLineNos.has(line.lineNo);
                          return (
                          <div className={`grid ${apInvoiceLineCols} items-center gap-[12px] border-b border-solid border-[#e2eaf1] py-[12px] last:border-b-0 transition-colors ${isSelected ? "bg-[#eef7ff]" : ""}`} key={line.lineNo}>
                            <div className="flex items-center justify-center">
                              <input
                                aria-label={`Select line ${line.lineNo}`}
                                checked={isSelected}
                                className="size-[16px] cursor-pointer accent-[#0083da]"
                                onChange={() => toggleLineSelection(line.lineNo)}
                                onClick={(e) => e.stopPropagation()}
                                type="checkbox"
                              />
                            </div>
                            <div
                              className={`-mx-[3px] -my-[2px] flex min-h-[40px] flex-col justify-center min-w-0 cursor-text rounded-[6px] px-[3px] py-[2px] transition-colors ${
                                isEditingPrimary
                                  ? "bg-white outline outline-2 outline-[#0083da]"
                                  : "hover:bg-[#f1f8ff]"
                              }`}
                              onClick={() => isEditingPrimary ? null : setEditingCell({ lineNo: line.lineNo, field: primaryField })}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setEditingCell({ lineNo: line.lineNo, field: primaryField });
                                }
                              }}
                            >
                              {isEditingPrimary ? (
                                <div className="relative" onClick={(e) => e.stopPropagation()}>
                                  <input
                                    autoFocus
                                    className="block w-full bg-transparent p-0 font-['Roboto:Bold',sans-serif] text-[14px] 2xl:text-[16px] leading-[1.5] text-[#102c3f] outline-none placeholder:text-[#9aa6b2]"
                                    onBlur={(e) => {
                                      if (e.relatedTarget && (e.relatedTarget as HTMLElement).dataset?.productOption === "true") {
                                        return;
                                      }
                                      commitPrimary(line.lineNo, editingCell!.field as "product" | "charge", searchValue);
                                    }}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    onKeyDown={(e) => {
                                      e.stopPropagation();
                                      if (e.key === "Tab") {
                                        e.preventDefault();
                                        advanceField(line.lineNo, editingCell!.field as "product" | "charge", searchValue, e.shiftKey ? -1 : 1);
                                        return;
                                      }
                                      if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                                      if (e.key === "Escape") setEditingCell(null);
                                    }}
                                    placeholder={editingCell!.field === "product" ? "Search product…" : "Search charge…"}
                                    style={{ fontVariationSettings: "'wdth' 100" }}
                                    value={searchValue}
                                  />
                                  {(() => {
                                    const q = searchValue.trim().toLowerCase();
                                    const matches = primaryCatalog.filter((opt) => opt !== searchValue && (q === "" || opt.toLowerCase().includes(q)));
                                    if (matches.length === 0) {
                                      return null;
                                    }
                                    return (
                                      <div className="absolute left-0 right-0 top-full z-20 mt-[4px] overflow-auto rounded-[8px] border border-solid border-[#c5d2dd] bg-white shadow-[0_10px_24px_rgba(15,61,97,0.12)]" style={{ maxHeight: "200px" }}>
                                        {matches.map((opt) => (
                                          <button
                                            className="block w-full truncate px-[10px] py-[6px] text-left font-['Roboto:Regular',sans-serif] text-[13px] text-[#102c3f] hover:bg-[#f1f8ff] focus:bg-[#eef7ff] focus:outline-none"
                                            data-product-option="true"
                                            key={opt}
                                            onMouseDown={(e) => {
                                              e.preventDefault();
                                              commitPrimary(line.lineNo, editingCell!.field as "product" | "charge", opt);
                                            }}
                                            style={{ fontVariationSettings: "'wdth' 100" }}
                                            type="button"
                                            title={opt}
                                          >
                                            {opt}
                                          </button>
                                        ))}
                                      </div>
                                    );
                                  })()}
                                </div>
                              ) : (
                                <p className="truncate font-['Roboto:Bold',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={primaryValue}>
                                  {primaryValue}
                                </p>
                              )}
                              <p
                                className="mt-[2px] truncate cursor-pointer rounded-[4px] font-['Roboto:Regular',sans-serif] text-[12px] 2xl:text-[14px] text-[#748494] hover:bg-[#f1f8ff] hover:text-[#0083da]"
                                onClick={(e) => { e.stopPropagation(); openAttributePicker(line); }}
                                style={{ fontVariationSettings: "'wdth' 100" }}
                                title={`${line.attribute} (click to change attribute)`}
                              >
                                {line.attribute}
                              </p>
                            </div>
                            <div
                              className={`-mx-[3px] -my-[2px] flex min-h-[40px] flex-col justify-center min-w-0 cursor-text rounded-[6px] px-[3px] py-[2px] transition-colors ${
                                editingCell?.lineNo === line.lineNo && editingCell.field === "description"
                                  ? "bg-white outline outline-2 outline-[#0083da]"
                                  : "hover:bg-[#f1f8ff]"
                              }`}
                              onClick={() => editingCell?.lineNo === line.lineNo && editingCell.field === "description" ? null : setEditingCell({ lineNo: line.lineNo, field: "description" })}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setEditingCell({ lineNo: line.lineNo, field: "description" });
                                }
                              }}
                            >
                              {editingCell?.lineNo === line.lineNo && editingCell.field === "description" ? (
                                <input
                                  autoFocus
                                  className="block w-full bg-transparent p-0 font-['Roboto:Regular',sans-serif] text-[14px] 2xl:text-[16px] leading-[1.5] text-[#5f7283] outline-none"
                                  defaultValue={line.description}
                                  onBlur={(e) => {
                                    updateLineField(line.lineNo, "description", e.target.value);
                                    setEditingCell(null);
                                  }}
                                  onKeyDown={(e) => {
                                    e.stopPropagation();
                                    if (e.key === "Tab") {
                                      e.preventDefault();
                                      advanceField(line.lineNo, "description", (e.target as HTMLInputElement).value, e.shiftKey ? -1 : 1);
                                      return;
                                    }
                                    if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                                    if (e.key === "Escape") setEditingCell(null);
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                />
                              ) : (
                                <p className="truncate font-['Roboto:Regular',sans-serif] text-[14px] 2xl:text-[16px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }} title={line.description}>
                                  {line.description}
                                </p>
                              )}
                            </div>
                            <div
                              className={`-mx-[3px] -my-[2px] flex min-h-[40px] flex-col justify-center min-w-0 cursor-text rounded-[6px] px-[3px] py-[2px] text-right transition-colors ${
                                editingCell?.lineNo === line.lineNo && editingCell.field === "quantity"
                                  ? "bg-white outline outline-2 outline-[#0083da]"
                                  : "hover:bg-[#f1f8ff]"
                              }`}
                              onClick={() => editingCell?.lineNo === line.lineNo && editingCell.field === "quantity" ? null : setEditingCell({ lineNo: line.lineNo, field: "quantity" })}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setEditingCell({ lineNo: line.lineNo, field: "quantity" });
                                }
                              }}
                            >
                              {editingCell?.lineNo === line.lineNo && editingCell.field === "quantity" ? (
                                <input
                                  autoFocus
                                  className="block w-full bg-transparent p-0 text-right font-['Roboto:Bold',sans-serif] text-[14px] 2xl:text-[16px] leading-[1.5] text-[#102c3f] outline-none"
                                  defaultValue={line.quantity}
                                  inputMode="decimal"
                                  onBlur={(e) => {
                                    updateLineField(line.lineNo, "quantity", e.target.value);
                                    setEditingCell(null);
                                  }}
                                  onKeyDown={(e) => {
                                    e.stopPropagation();
                                    if (e.key === "Tab") {
                                      e.preventDefault();
                                      advanceField(line.lineNo, "quantity", (e.target as HTMLInputElement).value, e.shiftKey ? -1 : 1);
                                      return;
                                    }
                                    if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                                    if (e.key === "Escape") setEditingCell(null);
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                />
                              ) : (
                                <p className="truncate font-['Roboto:Bold',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={line.quantity}>
                                  {line.quantity}
                                </p>
                              )}
                              {editingCell?.lineNo === line.lineNo && editingCell.field === "uom" ? (
                                <select
                                  autoFocus
                                  className="mt-[2px] block w-full bg-white p-0 text-right font-['Roboto:Regular',sans-serif] text-[12px] 2xl:text-[14px] leading-[1.5] text-[#5f7283] outline outline-2 outline-[#0083da] rounded-[4px]"
                                  defaultValue={line.uom}
                                  onChange={(e) => {
                                    updateLineField(line.lineNo, "uom", e.target.value);
                                    setEditingCell(null);
                                  }}
                                  onBlur={() => setEditingCell(null)}
                                  onKeyDown={(e) => {
                                    e.stopPropagation();
                                    if (e.key === "Tab") {
                                      e.preventDefault();
                                      advanceField(line.lineNo, "uom", (e.target as HTMLSelectElement).value, e.shiftKey ? -1 : 1);
                                      return;
                                    }
                                    if (e.key === "Escape") setEditingCell(null);
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                >
                                  {(() => {
                                    const list = uomCatalog.includes(line.uom) ? uomCatalog : [line.uom, ...uomCatalog];
                                    return list.map((opt) => (
                                      <option key={opt} value={opt}>{opt}</option>
                                    ));
                                  })()}
                                </select>
                              ) : (
                                <p
                                  className="mt-[2px] truncate cursor-pointer rounded-[4px] font-['Roboto:Regular',sans-serif] text-[12px] 2xl:text-[14px] text-[#748494] hover:bg-[#f1f8ff] hover:text-[#0083da]"
                                  onClick={(e) => { e.stopPropagation(); setEditingCell({ lineNo: line.lineNo, field: "uom" }); }}
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                  title={`${line.uom} (click to change UOM)`}
                                >
                                  {line.uom}
                                </p>
                              )}
                            </div>
                            <div
                              className={`-mx-[3px] -my-[2px] flex min-h-[40px] flex-col justify-center min-w-0 cursor-text rounded-[6px] px-[3px] py-[2px] text-right transition-colors ${
                                editingCell?.lineNo === line.lineNo && editingCell.field === "price"
                                  ? "bg-white outline outline-2 outline-[#0083da]"
                                  : "hover:bg-[#f1f8ff]"
                              }`}
                              onClick={() => editingCell?.lineNo === line.lineNo && editingCell.field === "price" ? null : setEditingCell({ lineNo: line.lineNo, field: "price" })}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setEditingCell({ lineNo: line.lineNo, field: "price" });
                                }
                              }}
                            >
                              {editingCell?.lineNo === line.lineNo && editingCell.field === "price" ? (
                                <input
                                  autoFocus
                                  className="block w-full bg-transparent p-0 text-right font-['Roboto:Regular',sans-serif] text-[14px] 2xl:text-[16px] leading-[1.5] text-[#102c3f] outline-none"
                                  defaultValue={line.price}
                                  inputMode="decimal"
                                  onBlur={(e) => {
                                    updateLineField(line.lineNo, "price", e.target.value);
                                    setEditingCell(null);
                                  }}
                                  onKeyDown={(e) => {
                                    e.stopPropagation();
                                    if (e.key === "Tab") {
                                      e.preventDefault();
                                      advanceField(line.lineNo, "price", (e.target as HTMLInputElement).value, e.shiftKey ? -1 : 1);
                                      return;
                                    }
                                    if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                                    if (e.key === "Escape") setEditingCell(null);
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                />
                              ) : (
                                <p className="truncate text-right font-['Roboto:Regular',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={line.price}>
                                  {line.price}
                                </p>
                              )}
                            </div>
                            <div
                              className={`-mx-[3px] -my-[2px] flex min-h-[40px] flex-col justify-center min-w-0 cursor-pointer rounded-[6px] px-[3px] py-[2px] transition-colors ${
                                editingCell?.lineNo === line.lineNo && editingCell.field === "tax"
                                  ? "bg-white outline outline-2 outline-[#0083da]"
                                  : "hover:bg-[#f1f8ff]"
                              }`}
                              onClick={() => editingCell?.lineNo === line.lineNo && editingCell.field === "tax" ? null : setEditingCell({ lineNo: line.lineNo, field: "tax" })}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setEditingCell({ lineNo: line.lineNo, field: "tax" });
                                }
                              }}
                            >
                              {editingCell?.lineNo === line.lineNo && editingCell.field === "tax" ? (
                                <select
                                  autoFocus
                                  className="block w-full bg-transparent p-0 font-['Roboto:Regular',sans-serif] text-[14px] 2xl:text-[16px] leading-[1.5] text-[#5f7283] outline-none"
                                  defaultValue={line.tax}
                                  onChange={(e) => {
                                    updateLineField(line.lineNo, "tax", e.target.value);
                                    setEditingCell(null);
                                  }}
                                  onBlur={() => setEditingCell(null)}
                                  onKeyDown={(e) => {
                                    e.stopPropagation();
                                    if (e.key === "Tab") {
                                      e.preventDefault();
                                      advanceField(line.lineNo, "tax", (e.target as HTMLSelectElement).value, e.shiftKey ? -1 : 1);
                                      return;
                                    }
                                    if (e.key === "Escape") setEditingCell(null);
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                >
                                  {(() => {
                                    const list = taxCatalog.includes(line.tax) ? taxCatalog : [line.tax, ...taxCatalog];
                                    return list.map((opt) => (
                                      <option key={opt} value={opt}>{opt}</option>
                                    ));
                                  })()}
                                </select>
                              ) : (
                                <p className="truncate font-['Roboto:Regular',sans-serif] text-[14px] 2xl:text-[16px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }} title={line.tax}>
                                  {line.tax}
                                </p>
                              )}
                            </div>
                            {(() => {
                              const computed = lineAmount(line);
                              const display = computed > 0 ? formatMoney(computed) : "";
                              return (
                                <p className="truncate text-right font-['Roboto:Bold',sans-serif] text-[14px] 2xl:text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={display}>
                                  {display}
                                </p>
                              );
                            })()}
                            <div className="relative flex items-center justify-center">
                              <button
                                aria-haspopup="dialog"
                                aria-expanded={moreRowOpen === line.lineNo}
                                aria-label={`More fields for line ${line.lineNo}`}
                                className={`flex size-[24px] items-center justify-center rounded-[6px] transition-colors ${moreRowOpen === line.lineNo ? "bg-[#eef7ff] text-[#0083da]" : "text-[#748494] hover:bg-[#f1f8ff] hover:text-[#0083da]"}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setMoreRowOpen((current) => (current === line.lineNo ? null : line.lineNo));
                                }}
                                type="button"
                              >
                                <MoreVertical className="size-[16px]" strokeWidth={2} />
                              </button>
                              {moreRowOpen === line.lineNo ? (
                                <>
                                  <div className="fixed inset-0 z-30" onClick={() => setMoreRowOpen(null)} />
                                  <div
                                    className="absolute right-0 bottom-full z-40 mb-[6px] w-[260px] overflow-hidden rounded-[10px] border border-solid border-[#c5d2dd] bg-white shadow-[0_-18px_36px_rgba(15,61,97,0.18)]"
                                    onClick={(e) => e.stopPropagation()}
                                    role="dialog"
                                    aria-label={`Additional fields for line ${line.lineNo}`}
                                  >
                                    <div className="border-b border-solid border-[#e2eaf1] px-[12px] py-[8px]">
                                      <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        Additional fields
                                      </p>
                                    </div>
                                    <div className="flex flex-col gap-[10px] px-[12px] py-[10px]">
                                      <label className="flex flex-col gap-[4px]">
                                        <span className="font-['Roboto:Regular',sans-serif] text-[11px] uppercase tracking-[0.04em] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Discount (%)
                                        </span>
                                        <input
                                          autoFocus
                                          className="block w-full rounded-[6px] border border-solid border-[#c5d2dd] bg-white px-[8px] py-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#102c3f] outline-none focus:border-[#0083da] focus:outline focus:outline-2 focus:outline-[#0083da]"
                                          defaultValue={line.discount ?? ""}
                                          inputMode="decimal"
                                          onBlur={(e) => updateLineField(line.lineNo, "discount", e.target.value)}
                                          onKeyDown={(e) => {
                                            e.stopPropagation();
                                            if (e.key === "Escape") setMoreRowOpen(null);
                                          }}
                                          placeholder="0"
                                          style={{ fontVariationSettings: "'wdth' 100" }}
                                        />
                                      </label>
                                      <label className="flex flex-col gap-[4px]">
                                        <span className="font-['Roboto:Regular',sans-serif] text-[11px] uppercase tracking-[0.04em] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Notes
                                        </span>
                                        <textarea
                                          className="block w-full resize-y rounded-[6px] border border-solid border-[#c5d2dd] bg-white px-[8px] py-[4px] font-['Roboto:Regular',sans-serif] text-[13px] text-[#102c3f] outline-none focus:border-[#0083da] focus:outline focus:outline-2 focus:outline-[#0083da]"
                                          defaultValue={line.notes ?? ""}
                                          onBlur={(e) => updateLineField(line.lineNo, "notes", e.target.value)}
                                          onKeyDown={(e) => {
                                            e.stopPropagation();
                                            if (e.key === "Escape") setMoreRowOpen(null);
                                          }}
                                          placeholder="Optional note…"
                                          rows={3}
                                          style={{ fontVariationSettings: "'wdth' 100" }}
                                        />
                                      </label>
                                    </div>
                                    <div className="flex justify-end gap-[8px] border-t border-solid border-[#e2eaf1] px-[12px] py-[8px]">
                                      <button
                                        className="rounded-[999px] border border-solid border-[#0083da] bg-[#0083da] px-[14px] py-[6px] font-['Roboto:Bold',sans-serif] text-[12px] text-white transition-colors hover:bg-[#0069ae]"
                                        onClick={() => setMoreRowOpen(null)}
                                        style={{ fontVariationSettings: "'wdth' 100" }}
                                        type="button"
                                      >
                                        Done
                                      </button>
                                    </div>
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </div>
                          );
                        })}
                      </div>

                      <div className="mt-[18px] flex flex-wrap items-start justify-between gap-[24px]">
                        <div className="flex items-center gap-[10px]">
                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] uppercase tracking-[0.06em] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Posting Status
                          </p>
                          <span className={`rounded-[999px] px-[10px] py-[4px] font-['Roboto:Bold',sans-serif] text-[12px] ${holdPayment ? "bg-[#fff3d6] text-[#9a5c00]" : "bg-[#ddf4e8] text-[#0b6b45]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                            {holdPayment ? "On hold" : "Ready"}
                          </span>
                        </div>

                        <div className="min-w-[260px] max-w-[320px] flex-1">
                          <div className="flex items-center justify-between py-[6px]">
                            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Subtotal
                            </p>
                            <p className="font-['Roboto:Regular',sans-serif] text-[13px] tabular-nums text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {formatMoney(invoiceSubtotal)}
                            </p>
                          </div>
                          <div className="flex items-center justify-between border-b border-solid border-[#e2eaf1] py-[6px]">
                            <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Tax
                            </p>
                            <p className="font-['Roboto:Regular',sans-serif] text-[13px] tabular-nums text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {formatMoney(invoiceTax)}
                            </p>
                          </div>
                          <div className="flex items-center justify-between pt-[8px]">
                            <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Total
                            </p>
                            <p className="font-['Roboto:Bold',sans-serif] text-[16px] tabular-nums text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {formatMoney(invoiceTotal)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-[56px] flex">
                {isRightPanelOpen ? (
                  <div
                    className="shrink-0 border-l border-solid border-[#e6edf3] bg-[linear-gradient(180deg,#fcfeff_0%,#f7fbff_100%)]"
                    style={{ width: rightPanelWidth }}
                  >
                    <div className="flex h-full min-h-0 flex-col">
                      <div className="relative flex h-[56px] shrink-0 items-center justify-between border-b border-solid border-[#e6eef5] px-[18px]">
                        <button
                          className="flex min-w-0 items-center gap-[6px] rounded-[10px] px-[2px] py-[4px] text-left text-[#102c3f] transition-colors hover:text-[#0083da]"
                          onClick={() => setIsRightPanelMenuOpen((current) => !current)}
                          type="button"
                        >
                          <span className="truncate font-['Roboto:Bold',sans-serif] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {activeRightPanelLabel}
                          </span>
                          <ChevronDown
                            className={`size-[16px] shrink-0 transition-transform ${isRightPanelMenuOpen ? "rotate-180" : "rotate-0"}`}
                            strokeWidth={2}
                          />
                        </button>
                        <button
                          className="flex size-[28px] items-center justify-center rounded-[999px] text-[#141414] transition-colors hover:bg-[#eef4f8]"
                          onClick={() => {
                            setIsRightPanelMenuOpen(false);
                            setIsRightPanelOpen(false);
                          }}
                          type="button"
                        >
                          <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
                            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                          </svg>
                        </button>

                        {isRightPanelMenuOpen ? (
                          <div className="absolute left-[14px] top-[46px] z-10 min-w-[170px] overflow-hidden rounded-[12px] border border-solid border-[#dce6ee] bg-white shadow-[0_12px_28px_rgba(15,61,97,0.12)]">
                            {rightPanelOptions.map((option) => {
                              const isActive = option.id === activeRightPanel;

                              return (
                                <button
                                  className={`flex w-full items-center justify-between px-[14px] py-[10px] text-left transition-colors ${
                                    isActive ? "bg-[#eef8ff] text-[#005fa3]" : "text-[#102c3f] hover:bg-[#f7fbff]"
                                  }`}
                                  key={option.id}
                                  onClick={() => {
                                    setActiveRightPanel(option.id);
                                    setIsRightPanelMenuOpen(false);
                                  }}
                                  type="button"
                                >
                                  <span className="font-['Roboto:Regular',sans-serif] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {option.label}
                                  </span>
                                  {isActive ? <span className="size-[6px] rounded-full bg-[#0083da]" /> : null}
                                </button>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>

                      <div className="min-h-0 flex-1 overflow-auto px-[18px] py-[14px]">
                        {activeRightPanel === "vendor-insights" ? (
                          <div className="flex flex-col gap-[16px]">
                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Context for approval, posting, and payment risk before releasing this AP invoice.
                            </p>

                            <div className="rounded-[14px] border border-solid border-[#d9e2eb] bg-white px-[16px] py-[14px]">
                              <div className="flex items-start justify-between gap-[16px]">
                                <div className="min-w-0 flex-1">
                                  <p className="font-['Roboto:Bold',sans-serif] text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {fieldValues["Vendor"] ?? ""}
                                  </p>
                                  <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    Supplier ID: VND-2014 • Onboarded 14 Aug 2022
                                  </p>
                                  <p className="mt-[8px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {fieldValues["Vendor Contact"] ?? ""} • {fieldValues["Vendor Email"] ?? ""}
                                  </p>
                                  <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    Preferred method: {fieldValues["Payment Method"] ?? ""} • Currency: USD
                                  </p>
                                </div>
                                <span
                                  className={`shrink-0 rounded-[999px] px-[10px] py-[5px] text-[11px] font-['Roboto:Bold',sans-serif] ${holdPayment ? "bg-[#fbe6e6] text-[#b04343]" : "bg-[#e7f7ef] text-[#18734d]"}`}
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                >
                                  {holdPayment ? "On Hold" : "Active"}
                                </span>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-[10px]">
                              {vendorInsightSections.map((item) => (
                                <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[14px] py-[12px]" key={item.label}>
                                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {item.label}
                                  </p>
                                  <p className="mt-[6px] font-['Roboto:Bold',sans-serif] text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {item.value}
                                  </p>
                                  <p className="mt-[6px] font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {item.meta}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <div>
                              <p className="mb-[8px] font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Contact Directory
                              </p>
                              <div className="grid grid-cols-2 gap-[10px]">
                                {vendorContacts.map((contact) => (
                                  <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[10px]" key={contact.name}>
                                    <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {contact.name}
                                    </p>
                                    <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {contact.role}
                                    </p>
                                    <p className="mt-[5px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {contact.email}
                                    </p>
                                    <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {contact.phone}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="mb-[8px] font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Compliance & Contract
                              </p>
                              <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[14px] py-[12px]">
                                <div className="grid grid-cols-2 gap-x-[16px] gap-y-[10px]">
                                  {vendorComplianceChecks.map((check) => (
                                    <div className="flex items-start gap-[8px]" key={check.label}>
                                      <span className={`mt-[1px] flex size-[16px] shrink-0 items-center justify-center rounded-full ${check.met ? "bg-[#e7f7ef] text-[#18734d]" : "bg-[#fbe6e6] text-[#b04343]"}`}>
                                        {check.met ? (
                                          <svg className="size-[10px]" fill="none" viewBox="0 0 12 12">
                                            <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                                          </svg>
                                        ) : (
                                          <svg className="size-[10px]" fill="none" viewBox="0 0 12 12">
                                            <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                                          </svg>
                                        )}
                                      </span>
                                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {check.label}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {activeRightPanel === "invoice-history" ? (
                          <div className="flex flex-col gap-[16px]">
                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Recent AP documents from this vendor, including current settlement and exception status.
                            </p>

                            <div className="grid grid-cols-3 gap-[10px]">
                              {invoiceHistoryStats.map((stat) => (
                                <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[10px]" key={stat.label}>
                                  <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {stat.label}
                                  </p>
                                  <p className="mt-[5px] font-['Roboto:Bold',sans-serif] text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {stat.value}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <div>
                              <div className={`grid ${vendorInvoiceGridCols} gap-[10px] border-b border-solid border-[#c5d2dd] py-[8px]`}>
                                {[
                                  { label: "Reference", align: "left" as const },
                                  { label: "Date", align: "left" as const },
                                  { label: "Amount", align: "right" as const },
                                  { label: "Status", align: "left" as const },
                                  { label: "Aging", align: "left" as const },
                                ].map((heading) => (
                                  <p className={`truncate font-['Roboto:Bold',sans-serif] text-[12px] capitalize text-[#102c3f] ${heading.align === "right" ? "text-right" : ""}`} key={heading.label} style={{ fontVariationSettings: "'wdth' 100" }} title={heading.label}>
                                    {heading.label}
                                  </p>
                                ))}
                              </div>
                              {recentVendorInvoices.map((invoice) => (
                                <div className={`grid ${vendorInvoiceGridCols} items-center gap-[10px] border-b border-solid border-[#e2eaf1] py-[10px] last:border-b-0`} key={invoice.ref}>
                                  <p className="truncate font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }} title={invoice.ref}>
                                    {invoice.ref}
                                  </p>
                                  <p className="truncate font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }} title={invoice.date}>
                                    {invoice.date}
                                  </p>
                                  <p className="truncate text-right font-['Roboto:Bold',sans-serif] text-[13px] text-[#0083da]" style={{ fontVariationSettings: "'wdth' 100" }} title={invoice.amount}>
                                    {invoice.amount}
                                  </p>
                                  <span
                                    className={`justify-self-start truncate rounded-[999px] px-[8px] py-[3px] text-[11px] font-['Roboto:Bold',sans-serif] ${invoice.tone}`}
                                    style={{ fontVariationSettings: "'wdth' 100" }}
                                    title={invoice.status}
                                  >
                                    {invoice.status}
                                  </span>
                                  <p className="truncate font-['Roboto:Regular',sans-serif] text-[12px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }} title={invoice.aging}>
                                    {invoice.aging}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <div>
                              <div className="mb-[10px] flex items-center justify-between">
                                <p className="font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  6-Month Spend
                                </p>
                                <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Trend across recent posting periods
                                </p>
                              </div>
                              <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[14px] py-[14px]">
                                <div className="flex h-[96px] items-end gap-[10px]">
                                  {monthlySpend.map((bar) => (
                                    <div className="flex flex-1 flex-col items-center gap-[6px]" key={bar.month}>
                                      <div className="flex w-full flex-1 items-end">
                                        <div className="w-full rounded-t-[6px] bg-[#1f83ff]" style={{ height: bar.pct }} />
                                      </div>
                                      <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {bar.month}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {activeRightPanel === "approval-notes" ? (
                          <div className="flex flex-col gap-[16px]">
                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Short guidance for approvers before posting and payment release decisions are made.
                            </p>

                            <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[14px] py-[12px]">
                              <p className="mb-[10px] font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Approval Routing
                              </p>
                              <div className="flex flex-wrap items-center gap-[8px]">
                                {approvalRouting.map((step, index) => (
                                  <Fragment key={step.role}>
                                    <div
                                      className={`min-w-[120px] rounded-[10px] border border-solid px-[10px] py-[8px] ${
                                        step.status === "done"
                                          ? "border-[#cfead9] bg-[#e7f7ef]"
                                          : step.status === "active"
                                            ? "border-[#bfe4ff] bg-[#eaf8ff]"
                                            : "border-[#d9e2eb] bg-[#fbfdff]"
                                      }`}
                                    >
                                      <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {step.role}
                                      </p>
                                      <p className="mt-[2px] font-['Roboto:Regular',sans-serif] text-[11px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {step.name}
                                      </p>
                                    </div>
                                    {index < approvalRouting.length - 1 ? <ChevronRight className="size-[14px] text-[#9ab0c0]" strokeWidth={2} /> : null}
                                  </Fragment>
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-[12px]">
                              <div>
                                <p className="mb-[8px] font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Approval Criteria
                                </p>
                                <div className="flex flex-col gap-[8px] rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[12px]">
                                  {approvalCriteria.map((criterion) => (
                                    <div className="flex items-start gap-[8px]" key={criterion.label}>
                                      <span className={`mt-[1px] flex size-[16px] shrink-0 items-center justify-center rounded-full ${criterion.met ? "bg-[#e7f7ef] text-[#18734d]" : "bg-[#fbe6e6] text-[#b04343]"}`}>
                                        {criterion.met ? (
                                          <svg className="size-[10px]" fill="none" viewBox="0 0 12 12">
                                            <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                                          </svg>
                                        ) : (
                                          <svg className="size-[10px]" fill="none" viewBox="0 0 12 12">
                                            <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                                          </svg>
                                        )}
                                      </span>
                                      <p className="font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {criterion.label}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <p className="mb-[8px] font-['Roboto:Bold',sans-serif] text-[13px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Reviewer Notes
                                </p>
                                <div className="flex flex-col gap-[8px]">
                                  {approverNotes.map((note) => (
                                    <div className="rounded-[12px] border border-solid border-[#d9e2eb] bg-white px-[12px] py-[10px]" key={note.text}>
                                      <div className="flex items-center justify-between gap-[8px]">
                                        <p className="font-['Roboto:Bold',sans-serif] text-[12px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          {note.author}
                                        </p>
                                        <p className="font-['Roboto:Regular',sans-serif] text-[11px] text-[#9ab0c0]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          {note.time}
                                        </p>
                                      </div>
                                      <p className="mt-[6px] font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {note.text}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}

                <button
                  aria-expanded={isRightPanelOpen}
                  className="group flex w-[20px] shrink-0 items-center justify-center border-l border-solid border-[#e6edf3] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] text-[#7f8e9b] transition-colors hover:border-[#bfe0f6] hover:bg-[linear-gradient(180deg,#f7fbff_0%,#e9f5ff_100%)] hover:text-[#0083da]"
                  onClick={() => setIsRightPanelOpen((current) => !current)}
                  title={isRightPanelOpen ? "Collapse insights panel" : "Expand insights panel"}
                  type="button"
                >
                  <span className="flex size-[18px] items-center justify-center rounded-[999px] transition-all group-hover:bg-white group-hover:shadow-[0_2px_8px_rgba(0,131,218,0.18)]">
                    {isRightPanelOpen ? <ChevronRight className="size-[14px]" strokeWidth={2} /> : <ChevronLeft className="size-[14px]" strokeWidth={2} />}
                  </span>
                </button>
              </div>
            </div>

            <WindowActionPanel actions={windowActions} />
          </div>

          <ProposalFooter currentPage={1} totalPages={1} totalRecords={18} />
        </>
      )}

      {attributePicker ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,27,45,0.42)] px-[16px] backdrop-blur-[2px]"
          onClick={() => setAttributePicker(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Select attribute"
        >
          <div
            className="w-[min(420px,100%)] overflow-hidden rounded-[14px] bg-white shadow-[0_20px_50px_rgba(15,61,97,0.20)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-solid border-[#e2eaf1] px-[20px] py-[14px]">
              <p className="font-['Roboto:Bold',sans-serif] text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Select attribute
              </p>
              <p className="mt-[2px] truncate font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }} title={attributePicker.primaryLabel}>
                For {attributePicker.primaryLabel}
              </p>
            </div>

            <div className="px-[12px] py-[8px]">
              {attributePicker.options.map((opt) => {
                const isSelected = attributePicker.selectedAttribute === opt;
                return (
                  <button
                    className={`flex w-full items-center gap-[10px] rounded-[8px] px-[10px] py-[8px] text-left transition-colors ${isSelected ? "bg-[#eef7ff]" : "hover:bg-[#f7fbff]"}`}
                    key={opt}
                    onClick={() => setAttributePicker((current) => (current ? { ...current, selectedAttribute: opt } : current))}
                    type="button"
                  >
                    <span className={`flex size-[16px] shrink-0 items-center justify-center rounded-full border-2 border-solid ${isSelected ? "border-[#0083da]" : "border-[#c5d2dd]"}`}>
                      {isSelected ? <span className="size-[8px] rounded-full bg-[#0083da]" /> : null}
                    </span>
                    <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-[8px] border-t border-solid border-[#e2eaf1] px-[20px] py-[12px]">
              <button
                className="rounded-[999px] border border-solid border-[#0083da] bg-[#0083da] px-[18px] py-[8px] font-['Roboto:Bold',sans-serif] text-[13px] text-white transition-colors hover:bg-[#0069ae]"
                onClick={() => {
                  updateLineField(attributePicker.lineNo, "attribute", attributePicker.selectedAttribute);
                  const targetLineNo = attributePicker.lineNo;
                  setAttributePicker(null);
                  // Drop focus into Description so the user can keep typing the row.
                  setEditingCell({ lineNo: targetLineNo, field: "description" });
                }}
                style={{ fontVariationSettings: "'wdth' 100" }}
                type="button"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FinancePaymentEntryView({ onClose }: { onClose: () => void }) {
  const [viewMode, setViewMode] = useState<"dashboard" | "window">("dashboard");
  const summaryCards = [
    { label: "Paid This Month", value: "$ 612K", meta: "Released vendor and utility payments", accent: "border-[#cde9ff]", valueClass: "text-[#102c3f]" },
    { label: "Cleared", value: "$ 588K", meta: "Bank-confirmed settlements", accent: "border-[#cfead9]", valueClass: "text-[#0b6b45]" },
    { label: "Failed / Returned", value: "03", meta: "Needs retry or bank fix", accent: "border-[#f5cfcf]", valueClass: "text-[#b04343]" },
    { label: "Reconciliation Status", value: "91%", meta: "Bank-matched vs pending entries", accent: "border-[#ddd4ff]", valueClass: "text-[#5f4aa6]" },
  ];
  const detailFields = [
    { label: "Payment Type", value: "Vendor Payment", icon: <ReceiptText className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Payment Reference", value: "PAY-20418", icon: <NotebookText className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Posting Date", value: "11 May 2026", icon: <CalendarDays className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Value Date", value: "12 May 2026", icon: <CalendarDays className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Paid From Account", value: "HDFC Operating Account", icon: <HardDrive className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Beneficiary", value: "Vertex Cloud Ltd.", icon: <Building2 className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Payment Method", value: "ACH", icon: <WalletCards className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Currency", value: "USD", icon: <CircleDollarSign className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Amount", value: "$ 19,400.00", icon: <WalletCards className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Related Invoice", value: "PIN-1888", icon: <ReceiptText className="size-[22px]" strokeWidth={1.8} />, required: true },
    { label: "Approval Owner", value: "Anita Verma", icon: <UserRound className="size-[22px]" strokeWidth={1.8} /> },
    { label: "Payment Status", value: "Ready for release", icon: <BadgeCheck className="size-[22px]" strokeWidth={1.8} /> },
  ];
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() => ({
    ...Object.fromEntries(detailFields.map((field) => [field.label, field.value])),
    "Beneficiary Contact": "Kevin Hughes",
    "Beneficiary Email": "kevin.hughes@vertexcloud.com",
    "Reference Notes": "Monthly cloud infrastructure payment for invoice PIN-1888.",
    "Internal Notes": "Treasury to release after final cash-position confirmation in the afternoon run.",
    "Approval Notes": "Approved within threshold. Link payment advice after bank confirmation.",
  }));
  const windowActions = [
    { id: "new", icon: <FilePlus2 className="size-[18px]" strokeWidth={1.8} /> },
    { id: "save", icon: <HardDrive className="size-[18px]" strokeWidth={1.8} /> },
    { id: "download", icon: <Download className="size-[18px]" strokeWidth={1.8} /> },
    { id: "share", icon: <ExternalLink className="size-[18px]" strokeWidth={1.8} /> },
    { id: "review", icon: <Eye className="size-[18px]" strokeWidth={1.8} /> },
    { id: "reset", icon: <RotateCcw className="size-[18px]" strokeWidth={1.8} /> },
    { id: "delete", icon: <Trash2 className="size-[18px]" strokeWidth={1.8} /> },
  ];
  const requiredLabels = detailFields.filter((field) => field.required).map((field) => field.label);
  const isReadyToSave = requiredLabels.every((label) => (fieldValues[label] ?? "").trim().length > 0);
  const isReadyToRelease = isReadyToSave && ["Beneficiary Contact", "Beneficiary Email"].every((label) => (fieldValues[label] ?? "").trim().length > 0);
  const headerPanelActions = [
    { label: "Save Draft", variant: "primary" as const, disabled: !isReadyToSave },
    { label: "Submit Payment", variant: "secondary" as const, disabled: !isReadyToRelease },
    { label: "Attach Advice", variant: "secondary" as const, disabled: false },
    { label: "Link Invoice", variant: "secondary" as const, disabled: false },
  ];
  const updateFieldValue = (label: string, nextValue: string) => {
    setFieldValues((current) => ({
      ...current,
      [label]: nextValue,
    }));
  };
  const fieldByLabel = new Map(detailFields.map((field) => [field.label, field] as const));
  const renderDetailField = (label: string) => {
    const field = fieldByLabel.get(label);

    if (!field) {
      return null;
    }

    return (
      <CustomerDetailField
        icon={field.icon}
        key={field.label}
        label={field.label}
        onChange={(nextValue) => updateFieldValue(field.label, nextValue)}
        required={field.required}
        value={fieldValues[field.label] ?? ""}
      />
    );
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-transparent">
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <div className="border-[#1f83ff] border-b border-solid content-stretch flex h-[42px] items-center justify-between bg-transparent px-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center gap-[18px] relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Payment Entry
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
                          <line stroke="var(--stroke-0, #D9D9D9)" x2="17" y1="0.5" y2="0.5" />
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
              <div className={`absolute bottom-[-10px] h-0 w-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#1f83ff] transition-all ${viewMode === "dashboard" ? "left-[17px]" : "left-[63px]"}`} />
            </div>
          </div>
          <button className="content-stretch flex items-center justify-center size-[32px]" onClick={onClose} type="button">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M5 5L15 15M15 5L5 15" stroke="#141414" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>

      {viewMode === "dashboard" ? (
        <div className="flex-1 overflow-auto px-[12px] pt-[12px] pb-[12px]" style={{ containerType: "inline-size" }}>
          <div className="grid grid-cols-9 gap-[12px]" style={{ gridAutoRows: "calc((100cqw - 96px) / 9)" }}>
            <NewRecordWidget
              onClick={() => setViewMode("window")}
              subtitle="Open the payment entry detail window."
              title="New Payment"
            />

            {summaryCards.map((card) => (
              <div
                className={`col-span-2 rounded-[14px] border-2 border-white bg-gradient-to-b from-[rgba(255,255,255,0.82)] to-[rgba(255,255,255,0.58)] p-[0.875em] shadow-[0_10px_24px_rgba(15,61,97,0.06)] ${card.accent}`}
                key={card.label}
                style={{ fontSize: "clamp(16px, 1.2cqi, 20px)" }}
              >
                <p className="font-['Roboto:Medium',sans-serif] font-medium text-[clamp(13px,calc(var(--dash-inline-size,100vw)*0.011375),16px)] leading-[1.3] text-[#102C3F]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.label}
                </p>
                <p className={`mt-[0.25em] font-['Roboto:Regular',sans-serif] font-normal text-[1.75em] leading-[1.05] ${card.valueClass}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.value}
                </p>
                <p className="mt-[0.25em] font-['Roboto:Regular',sans-serif] text-[0.6875em] leading-[1.3] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {card.meta}
                </p>
              </div>
            ))}

            <FinanceTableCard
              className="col-[1/span_6] row-span-2"
              columns={["Payee", "Method", "Amount", "Posted"]}
              rows={[
                ["Urban Logistics", "Wire transfer", "$ 27K", "Today, 10:12 AM"],
                ["Vertex Cloud", "ACH", "$ 19K", "Today, 09:05 AM"],
                ["Delphi Services", "Manual release", "$ 38K", "Yesterday, 04:48 PM"],
              ]}
              icon={<Send className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Most recent outgoing payments"
              title="Recent Payments"
            />
            <FinanceListCard
              className="col-[7/span_3] row-span-2"
              items={[
                { label: "ACH", value: "48%", meta: "Primary low-cost payment rail" },
                { label: "Wire", value: "34%", meta: "High-value urgent settlements" },
                { label: "Manual", value: "18%", meta: "Fallback and special-case releases" },
              ]}
              icon={<WalletCards className="size-[18px] text-black" strokeWidth={1.9} />}
              subtitle="Payment methods mix for the current cycle"
              title="Payment Methods"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="relative flex h-0 min-h-0 flex-1 flex-col bg-white">
            <div className="mr-[56px] bg-[linear-gradient(180deg,rgba(230,243,252,0.65)_0%,rgba(245,250,253,0.72)_100%)] content-stretch flex items-center justify-between overflow-clip px-[14px] py-[7px] relative shrink-0">
              <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                <ProposalActionButton>
                  <Home className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
                <ProposalActionButton>
                  <ArrowLeft className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
                <ProposalActionButton>
                  <RotateCcw className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
                <ProposalActionButton label="New Record">
                  <FilePlus2 className="size-[16px] text-[#586575]" strokeWidth={1.8} />
                </ProposalActionButton>
              </div>

              <div className="content-stretch flex items-center gap-[12px] relative shrink-0">
                <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[50px] w-[284px] shadow-[0_6px_14px_rgba(16,47,74,0.06)]">
                  <div className="bg-[#1f83ff] content-stretch flex items-center justify-center overflow-clip py-[9px] relative rounded-bl-[50px] rounded-tl-[50px] shrink-0 w-[46px]">
                    <svg className="size-[17px]" fill="none" viewBox="0 0 20 20">
                      <circle cx="9" cy="9" r="5" stroke="white" strokeWidth="1.8" />
                      <path d="M13 13L17 17" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px px-[11px] relative">
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[#9f9f9f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Search payment entries
                    </p>
                    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
                      <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                        <path d="M4 6L9 11L14 6" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                      </svg>
                      <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                        <circle cx="8" cy="8" r="3.5" stroke="#141414" strokeWidth="1.4" />
                        <path d="M10.7 10.7L14 14" stroke="#141414" strokeLinecap="round" strokeWidth="1.4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                  <path d="M3 4.5H15L11 9V14L7 12V9L3 4.5Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                </svg>
                <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                  <circle cx="9" cy="5" fill="#141414" r="1.4" />
                  <circle cx="9" cy="9" fill="#141414" r="1.4" />
                  <circle cx="9" cy="13" fill="#141414" r="1.4" />
                </svg>
              </div>
            </div>

            <div className="mr-[56px] border-b border-solid border-[#e6eef5] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,252,255,0.88)_100%)] px-[18px] py-[8px] backdrop-blur-[8px]">
              <div className="rounded-[14px] bg-[linear-gradient(180deg,rgba(251,253,255,0.96)_0%,rgba(245,250,255,0.90)_100%)] px-[18px] py-[10px] shadow-[0_8px_18px_rgba(15,61,97,0.035)]">
                <div className="flex flex-wrap items-center justify-between gap-[12px]">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-[14px] gap-y-[4px]">
                      <p className="font-['Roboto:Bold',sans-serif] text-[14px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {fieldValues["Beneficiary"] ?? ""}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {fieldValues["Beneficiary Contact"] ?? ""}
                      </p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {fieldValues["Beneficiary Email"] ?? ""}
                      </p>
                    </div>
                    <p className="mt-[3px] font-['Roboto:Regular',sans-serif] text-[12px] text-[#748494]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {fieldValues["Payment Reference"] ?? ""} • {fieldValues["Amount"] ?? ""} • {fieldValues["Payment Method"] ?? ""}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-[10px]">
                    {headerPanelActions.map((action) => (
                      <button
                        className={`rounded-[999px] border border-solid px-[14px] py-[8px] text-[13px] transition-colors ${
                          action.variant === "primary"
                            ? action.disabled
                              ? "border-[#b7d8f1] bg-[#dfeef9] text-white/85 cursor-not-allowed"
                              : "border-[#0083da] bg-[#0083da] text-white hover:bg-[#0073c0]"
                            : action.disabled
                              ? "border-[#cfe0ed] bg-white text-[#9ab0c0] cursor-not-allowed"
                              : "border-[#0083da] bg-white text-[#0083da] hover:bg-[#eef8ff]"
                        }`}
                        disabled={action.disabled}
                        key={action.label}
                        type="button"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mr-[56px] h-0 min-h-0 flex-1 overflow-auto bg-white">
              <div className="px-[20px] py-[18px]">
                <div className="grid grid-cols-4 gap-x-[20px]">
                  <div className="col-span-2 col-start-2 grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
                    {renderDetailField("Payment Type")}
                    {renderDetailField("Payment Reference")}
                    {renderDetailField("Posting Date")}
                    {renderDetailField("Value Date")}
                    {renderDetailField("Paid From Account")}
                    {renderDetailField("Beneficiary")}
                    {renderDetailField("Payment Method")}
                    {renderDetailField("Currency")}
                    {renderDetailField("Amount")}
                    {renderDetailField("Related Invoice")}
                    {renderDetailField("Approval Owner")}
                    {renderDetailField("Payment Status")}
                    <CustomerDetailField
                      icon={<UserRound className="size-[22px]" strokeWidth={1.8} />}
                      label="Beneficiary Contact"
                      onChange={(nextValue) => updateFieldValue("Beneficiary Contact", nextValue)}
                      value={fieldValues["Beneficiary Contact"] ?? ""}
                    />
                    <CustomerDetailField
                      icon={<Mail className="size-[22px]" strokeWidth={1.8} />}
                      label="Beneficiary Email"
                      onChange={(nextValue) => updateFieldValue("Beneficiary Email", nextValue)}
                      value={fieldValues["Beneficiary Email"] ?? ""}
                    />
                    <CustomerDetailField
                      label="Reference Notes"
                      multiline
                      onChange={(nextValue) => updateFieldValue("Reference Notes", nextValue)}
                      spanClass="col-span-2"
                      value={fieldValues["Reference Notes"] ?? ""}
                    />
                    <CustomerDetailField
                      label="Internal Notes"
                      multiline
                      onChange={(nextValue) => updateFieldValue("Internal Notes", nextValue)}
                      spanClass="col-span-2"
                      value={fieldValues["Internal Notes"] ?? ""}
                    />
                    <CustomerDetailField
                      label="Approval Notes"
                      multiline
                      onChange={(nextValue) => updateFieldValue("Approval Notes", nextValue)}
                      spanClass="col-span-2"
                      value={fieldValues["Approval Notes"] ?? ""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <WindowActionPanel actions={windowActions} />
          </div>

          <ProposalFooter currentPage={1} totalPages={1} totalRecords={27} />
        </>
      )}
    </div>
  );
}

function FinancePaymentCockpitView({ onClose }: { onClose: () => void }) {
  return (
    <FinanceWindowShell onClose={onClose} title="Payment Cockpit">
      <FinanceMetricCard accent="border-[#f3dfb8]" label="Suggested This Week" meta="System-prioritized releases" value="$ 172K" valueClass="text-[#9a5c00]" />
      <FinanceMetricCard accent="border-[#cde9ff]" label="Available for Release" meta="Within approved cash thresholds" value="$ 248K" />
      <FinanceMetricCard accent="border-[#f5cfcf]" label="Needs Decision" meta="Conflicting due date vs cash priority" value="11" valueClass="text-[#b04343]" />
      <FinanceMetricCard accent="border-[#cfead9]" className="col-span-3" label="Best Release Window" meta="Based on due dates and projected inflows" value="Thu PM" valueClass="text-[#0b6b45]" />
      <FinanceTableCard
        className="col-[1/span_5] row-span-2"
        columns={["Vendor", "Due", "Priority", "Funding"]}
        rows={[
          ["Delphi Services", "09 May", "High", "Operating account"],
          ["Lumen Telecom", "11 May", "Medium", "Collections account"],
          ["Urban Logistics", "13 May", "High", "Operating account"],
        ]}
        icon={<CalendarClock className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Priority-ranked release suggestions"
        title="Release Recommendations"
      />
      <FinanceListCard
        className="col-[6/span_4] row-span-2"
        items={[
          { label: "Hold non-critical marketing bills", value: "$ 18K", meta: "Preserves cash for payroll and tax" },
          { label: "Split logistics vendor release", value: "$ 12K", meta: "Align with receivables timing" },
          { label: "Use HDFC collections account", value: "2 payments", meta: "Cleaner reconciliation path" },
        ]}
        icon={<BadgeCheck className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Suggested treasury actions before approval"
        title="Decision Support"
      />
    </FinanceWindowShell>
  );
}

function FinanceBankingView({ onClose }: { onClose: () => void }) {
  return (
    <FinanceWindowShell onClose={onClose} title="Banking">
      <FinanceMetricCard accent="border-[#cde9ff]" label="Total Cash" meta="Across connected bank accounts" value="$ 1.74M" />
      <FinanceMetricCard accent="border-[#cfead9]" label="Matched Today" meta="Transactions reconciled" value="124" valueClass="text-[#0b6b45]" />
      <FinanceMetricCard accent="border-[#f5cfcf]" label="Unmatched" meta="Needs review or mapping" value="17" valueClass="text-[#b04343]" />
      <FinanceMetricCard accent="border-[#ddd4ff]" className="col-span-3" label="Cash Position Change" meta="Compared with last week" value="+ $ 92K" valueClass="text-[#5f4aa6]" />
      <FinanceListCard
        className="col-[1/span_4] row-span-2"
        items={[
          { label: "Axis Bank", value: "$ 982K", meta: "Primary operating account" },
          { label: "HDFC Bank", value: "$ 488K", meta: "Collections and settlements" },
          { label: "SBI Bank", value: "$ 270K", meta: "Tax and statutory reserve" },
        ]}
        icon={<Building2 className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Account balances by bank"
        title="Bank Balance"
      />
      <FinanceTableCard
        className="col-[5/span_5] row-span-2"
        columns={["Narration", "Account", "Amount", "Status"]}
        rows={[
          ["Apex payment received", "HDFC", "$ 64K", "Matched"],
          ["Payroll release", "Axis", "$ 92K", "Pending match"],
          ["Vendor wire - logistics", "Axis", "$ 27K", "Matched"],
        ]}
        icon={<ReceiptText className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Recent bank-feed events and reconciliation state"
        title="Recent Bank Transactions"
      />
    </FinanceWindowShell>
  );
}

function FinanceCashbookView({ onClose }: { onClose: () => void }) {
  return (
    <FinanceWindowShell onClose={onClose} title="Cashbook">
      <FinanceMetricCard accent="border-[#cfead9]" label="Cash In Today" meta="Receipts posted to cashbooks" value="$ 12.4K" valueClass="text-[#0b6b45]" />
      <FinanceMetricCard accent="border-[#f5cfcf]" label="Cash Out Today" meta="Disbursements and reimbursements" value="$ 8.1K" valueClass="text-[#b04343]" />
      <FinanceMetricCard accent="border-[#cde9ff]" label="Net Today" meta="Opening vs current balance movement" value="+ $ 4.3K" />
      <FinanceMetricCard accent="border-[#f3dfb8]" className="col-span-3" label="Petty Cash Exposure" meta="Across active office cashbooks" value="$ 18.7K" valueClass="text-[#9a5c00]" />
      <FinanceListCard
        className="col-[1/span_4] row-span-2"
        items={[
          { label: "Cashbook Head Office", value: "$ 80K", meta: "Primary location cashbook" },
          { label: "Cashbook Register Branch", value: "$ 18.7K", meta: "Retail counter activity" },
          { label: "Tejoo Cashbook", value: "AED 18.7K", meta: "Regional operational cash" },
        ]}
        icon={<WalletCards className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Available balances by cashbook"
        title="Cash Balance"
      />
      <FinanceTableCard
        className="col-[5/span_5] row-span-2"
        columns={["Entry", "Book", "Amount", "Type"]}
        rows={[
          ["Courier reimbursement", "Head Office", "$ 420", "Cash out"],
          ["Walk-in customer deposit", "Register Branch", "$ 1.8K", "Cash in"],
          ["Office supplies top-up", "Tejoo", "AED 620", "Cash out"],
        ]}
        icon={<ReceiptText className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Latest posted cashbook movement"
        title="Today's Cashbook"
      />
    </FinanceWindowShell>
  );
}

function FinanceTaxationView({ onClose }: { onClose: () => void }) {
  return (
    <FinanceWindowShell onClose={onClose} title="Taxation">
      <FinanceMetricCard accent="border-[#cde9ff]" label="Tax Collected" meta="Output tax from customer billing" value="$ 210K" />
      <FinanceMetricCard accent="border-[#cfead9]" label="Tax Paid" meta="Input tax and credits booked" value="$ 126K" valueClass="text-[#0b6b45]" />
      <FinanceMetricCard accent="border-[#f3dfb8]" label="Net Owed" meta="Current estimated filing obligation" value="$ 84K" valueClass="text-[#9a5c00]" />
      <FinanceMetricCard accent="border-[#ddd4ff]" className="col-span-3" label="Next Filing Deadline" meta="Nearest statutory submission date" value="18 May" valueClass="text-[#5f4aa6]" />
      <FinanceTableCard
        className="col-[1/span_5] row-span-2"
        columns={["Region", "Collected", "Paid", "Net"]}
        rows={[
          ["India GST", "$ 118K", "$ 96K", "$ 22K payable"],
          ["EU VAT", "$ 64K", "$ 73K", "$ 9K reclaim"],
          ["UAE VAT", "$ 28K", "$ 24K", "$ 4K payable"],
        ]}
        icon={<Percent className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Tax position by jurisdiction"
        title="Tax Summary"
      />
      <FinanceListCard
        className="col-[6/span_4] row-span-2"
        items={[
          { label: "Pending vendor certificates", value: "5", meta: "Blocks final input credit validation" },
          { label: "Draft filing pack", value: "Ready", meta: "Awaiting final bank reconciliation" },
          { label: "Risk flag", value: "Medium", meta: "EU VAT reclaim still under review" },
        ]}
        icon={<BadgeCheck className="size-[18px] text-black" strokeWidth={1.9} />}
        subtitle="Key filing notes and blockers"
        title="Compliance Notes"
      />
    </FinanceWindowShell>
  );
}

function getMenuItemForView(view: AppView): MenuItemId | null {
  const viewMap: Partial<Record<AppView, MenuItemId>> = {
    salesProposal: "salesProposal",
    opportunities: "opportunities",
    customers: "customers",
    prospects: "prospects",
    tasks: "tasks",
    calendar: "calendar",
    inbox: "inbox",
    fin_sales: "fin_sales",
    fin_ap_invoice: "fin_ap_invoice",
    fin_purchase: "fin_purchase",
    fin_payment: "fin_payment",
    fin_cockpit: "fin_cockpit",
    fin_banking: "fin_banking",
    fin_cashbook: "fin_cashbook",
    fin_tax: "fin_tax",
  };

  return viewMap[view] ?? null;
}

function Frame59({
  moduleId,
  activeView,
  onNavigateView,
}: {
  moduleId: ModuleId;
  activeView: AppView;
  onNavigateView: (view: AppView) => void;
}) {
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItemId | null>(getMenuItemForView(activeView));
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
    setActiveMenuItem(getMenuItemForView(activeView));
  }, [activeView]);

  const handleNavigate = (view: AppView, item: MenuItemId) => {
    setActiveMenuItem(item);
    onNavigateView(view);
  };

  const menuItems = moduleId === "finance" ? FINANCE_MENU_ITEMS : CRM_MENU_ITEMS;

  return (
    <div className="h-full relative shrink-0 w-full">
      <div className="absolute bottom-0 left-[56px] overflow-auto right-0 top-[8px]" data-name="Canvas_WH">
        {moduleId === "finance" ? (
          activeView === "fin_sales" ? (
            <FinanceSalesInvoiceView onClose={() => onNavigateView("dashboard")} />
          ) : activeView === "fin_ap_invoice" ? (
            <FinanceApInvoiceView onClose={() => onNavigateView("dashboard")} />
          ) : activeView === "fin_purchase" ? (
            <FinancePurchaseInvoiceView onClose={() => onNavigateView("dashboard")} />
          ) : activeView === "fin_payment" ? (
            <FinancePaymentEntryView onClose={() => onNavigateView("dashboard")} />
          ) : activeView === "fin_cockpit" ? (
            <FinancePaymentCockpitView onClose={() => onNavigateView("dashboard")} />
          ) : activeView === "fin_banking" ? (
            <FinanceBankingView onClose={() => onNavigateView("dashboard")} />
          ) : activeView === "fin_cashbook" ? (
            <FinanceCashbookView onClose={() => onNavigateView("dashboard")} />
          ) : activeView === "fin_tax" ? (
            <FinanceTaxationView onClose={() => onNavigateView("dashboard")} />
          ) : (
            <FinanceModuleDashboard />
          )
        ) : activeView === "salesProposal" ? (
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
        ) : activeView === "inbox" ? (
          <InboxView onClose={() => onNavigateView("dashboard")} />
        ) : activeView === "customers" ? (
          <CustomersView onClose={() => onNavigateView("dashboard")} />
        ) : (
          <Frame2 />
        )}
      </div>
      <LeftMenu
        activeItem={activeMenuItem}
        isDashboardActive={activeView === "dashboard"}
        menuItems={menuItems}
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
  const [activeModuleId, setActiveModuleId] = useState<ModuleId | null>(null);
  const [activeModuleView, setActiveModuleView] = useState<AppView>("dashboard");
  const [isModuleChooserOpen, setIsModuleChooserOpen] = useState(false);
  const activeModuleName = activeModuleId ? MODULE_CHOOSER_OPTIONS.find((option) => option.id === activeModuleId)?.label ?? null : null;

  const openModuleDashboard = (moduleId: ModuleId) => {
    setActiveModuleId(moduleId);
    setActiveModuleView("dashboard");
    setScreenMode(moduleId);
    setIsModuleChooserOpen(false);
  };

  return (
    <div className="content-stretch flex flex-col items-start relative size-full min-h-0 overflow-hidden" data-name="Widget on Window Home" style={{ backgroundImage: "linear-gradient(129.795deg, rgb(199, 232, 255) 20.389%, rgb(255, 255, 196) 116.98%)" }}>
      <div className="content-stretch flex h-[42px] items-center justify-between px-[12px] relative shrink-0 w-full" data-name="Top Bar">
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <div className="relative">
            <button
              className="bg-gradient-to-b from-[rgba(255,255,255,0.7)] relative rounded-[8px] shrink-0 to-[rgba(255,255,255,0.49)]"
              data-name="Menu Button"
              onClick={() => setIsModuleChooserOpen((current) => !current)}
              type="button"
            >
              <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit]">
                <MaterialSymbolsMenu />
              </div>
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
            </button>
            {isModuleChooserOpen ? (
              <div className="absolute left-0 top-[44px] z-[220] w-[320px] rounded-[16px] border-2 border-white bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.88))] p-[12px] shadow-[0_18px_40px_rgba(15,61,97,0.14)] backdrop-blur-xl">
                <p className="px-[8px] pb-[10px] font-['Roboto:Bold',sans-serif] text-[16px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Open Module
                </p>
                <div className="flex flex-col gap-[8px]">
                  {MODULE_CHOOSER_OPTIONS.map((option) => {
                    const isActive = activeModuleId === option.id && screenMode !== "home";

                    return (
                      <button
                        className={`flex items-start gap-[12px] rounded-[12px] border px-[12px] py-[12px] text-left transition-all ${
                          isActive
                            ? "border-[#bfe4ff] bg-[linear-gradient(109deg,#eaf8ff_0%,#caedff_100%)]"
                            : "border-transparent bg-white/70 hover:border-[#d9ecff] hover:bg-white"
                        }`}
                        key={option.id}
                        onClick={() => openModuleDashboard(option.id)}
                        type="button"
                      >
                        <div className="mt-[2px] flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#eef7ff]">
                          {option.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="font-['Roboto:Bold',sans-serif] text-[15px] text-[#102c3f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {option.label}
                          </p>
                          <p className="mt-[4px] font-['Roboto:Regular',sans-serif] text-[12px] leading-[18px] text-[#5f7283]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {option.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
          <Frame73
            currentScreen={screenMode}
            moduleName={activeModuleName}
            onGoHome={() => {
              setIsModuleChooserOpen(false);
              setScreenMode("home");
            }}
            onGoModule={activeModuleId ? () => openModuleDashboard(activeModuleId) : undefined}
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
            moduleId={screenMode}
            activeView={activeModuleView}
            onNavigateView={setActiveModuleView}
          />
        )}
      </div>
      <div className="shrink-0 w-full">
        <div className="overflow-hidden">
          <Group19
            onGoHome={() => {
              setIsModuleChooserOpen(false);
              setScreenMode("home");
            }}
          />
        </div>
      </div>
    </div>
  );
}
