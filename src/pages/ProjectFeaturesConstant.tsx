import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import { HeroSection, FeatureSection } from "../components/AppStore";
import {
  // bookOutline,
  searchOutline,
  shieldCheckmarkOutline,
  addCircleOutline,
  lockClosedOutline,
  eyeOffOutline,
  // documentTextOutline,
  // warningOutline,
  // cardOutline,
  // phonePortraitOutline,
  analyticsOutline,
  eyeOutline,
  gameControllerOutline,
  ribbonOutline,
} from "ionicons/icons";


// Hero Section 数据
export const heroTitle = ["🧩拼图助手"];

export const heroDescription =
  "拼图辅助工具，通过对拼图图片进行智能识别和分析，快速定位目标，减轻找块压力，轻松完成拼图。";

// Discovery Section 数据
export const coreFunctionsFeatures = [
  {
    id: "puzzle-recognition",
    icon: searchOutline,
    iconColor: "stories",
    title: "智能识别拼图图像",
    subtitle:
      "基于图像识别算法，对图片进行本地分析，识别拼图区域与细节。",
    colSize: { xs: "12", md: "6", lg: "6" },
  },
  {
    id: "offline-safe",
    icon: ribbonOutline,
    iconColor: "unlock",
    title: "纯离线，开箱即用",
    subtitle: "",
    colSize: { xs: "12", md: "6", lg: "6" },
  },
  {
    id: "hightlight-matching",
    icon: eyeOutline,
    iconColor: "purchase",
    type: "image" as const,
    title: "高亮匹配区域",
    subtitle:
      "在可视化提示中，高亮显示与目标块匹配的区域，帮助您快速定位目标。",
    imageUrl: "images/ipad-use-001.gif",
    imageAlt: "高亮匹配区域",
    layout: "text-top" as const,
    colSize: { xs: "12", md: "6", lg: "6" },
  }
];


// 隐私
export const privacyFeatures = [
  {
    id: "local-security",
    icon: shieldCheckmarkOutline,
    iconColor: "security",
    title: "本地处理，安全可控",
    subtitle:
      "图片识别和分析均在您的设备本地完成，不会将图片或识别结果上传至任何服务器。",
    colSize: { xs: "12", md: "12", lg: "12" },
  }
];

// 游戏列表
export const appListFeatures = [
  {
    id: "discovery-stories",
    type: "image" as const,
    title: "拼图总览界面",
    subtitle: "直观展示当前拼图整体情况，方便您对比和观察拼图块所在的大致区域。",
    imageUrl: "images/iphone-home-empty.png",
    imageAlt: "常用游戏",
    layout: "text-top" as const,
    colSize: { xs: "12", md: "6", lg: "4" },
  },
  {
    id: "game-list-contextmenu",
    type: "image" as const,
    title: "步骤引导与操作入口",
    subtitle: "通过清晰的入口与提示，引导您完成拍照、选图、标记和匹配等关键步骤。",
    imageUrl: "images/iphone-load-ref.png",
    imageAlt: "编辑与扩展",
    layout: "text-bottom" as const,
    colSize: { xs: "12", md: "6", lg: "4" },
  },
  {
    id: "show-case",
    type: "image" as const,
    title: "示例效果展示",
    subtitle: "展示拼图块定位前后的对比效果，帮助您更快理解应用使用方式。",
    imageUrl: "images/iphone-result-preview.png",
    imageAlt: "使用导航",
    layout: "text-top" as const,
    colSize: { xs: "12", md: "12", lg: "4" },
  },
];

//  设置列表
export const settingFeatures = [
  {
    id: "setting-list",
    type: "image" as const,
    title: "设置与帮助",
    subtitle: "提供基础设置、使用说明和意见反馈入口，帮助您按需调整体验并联系开发者。",
    imageUrl: "images/iphone-setting.png",
    imageAlt: "设置页面",
    layout: "text-top" as const,
    colSize: { xs: "12", md: "6", lg: "6" },
  },
  {
    id: "small-window-settings",
    type: "image" as const,
    title: "识别参数与展示",
    subtitle: "根据个人习惯调整识别相关参数和展示样式，获得更适合自己的拼图辅助效果。",
    imageUrl: "images/iphone-setting-2.png",
    imageAlt: "自定义游戏规则",
    layout: "text-bottom" as const,
    colSize: { xs: "12", md: "6", lg: "6" },
  },
];
