/*
 * 给场景添加详情图：把对应值改成相对图片路径，例如
 * "open-window": "assets/scenes/open-window.jpg"
 * 图片会显示在 scene.html 中，详情页的返回按钮会回到主页。
 */
const SCENE_TARGETS = {
  "open-window": "",
  "odor": "",
  "sleep": "assets/scenes/sleep.png",
  "shared-bed": "assets/scenes/shared-bed.png",
  "child-floor": "",
  "elderly": "",
  "pet-temperature": "",
  "pet-allergy": "assets/scenes/pet-allergy.png",
  "pet-odor": "",
  "smoking": "",
  "home-workout": "assets/scenes/home-workout.png",
  "night-return": "assets/scenes/night-return.png",
  "open-kitchen": "assets/scenes/open-kitchen.png",
  "dining-hotpot": "assets/scenes/dining-hotpot.png",
  "winter": "",
  "pollen": "",
  "rainy": "",
  "autumn-winter": "",
  "laundry": "assets/scenes/laundry.png",
  "basement": "",
  "away-home": "",
  "filter-cleaning": ""
};

/* 智能场景详情图也在这里配置，方式与空气场景相同。 */
const SMART_SCENE_TARGETS = {
  "point-control": "assets/smart-scenes/01_指哪控哪.png",
  "voice": "assets/smart-scenes/02_随口说也听懂.png",
  "one-sentence": "assets/smart-scenes/03_一句话直接办几件事.png",
  "edit-anytime": "assets/smart-scenes/04_随时能改口.png",
  "recognize-family": "assets/smart-scenes/05_随时认出全家人.png",
  "welcome-home": "assets/smart-scenes/06_到家前舒适环境已备好.png",
  "away-check": "assets/smart-scenes/07_离家一键查漏.png",
  "exercise-meal": "assets/smart-scenes/08_运动后智慧备餐.png",
  "chores": "assets/smart-scenes/09_统筹家务任务与时间.png",
  "reminder": "assets/smart-scenes/10_该接手时提醒.png",
  "adjust": "assets/smart-scenes/11_临时有事随时调整设备.png",
  "focus-space": "assets/smart-scenes/12_可专注的小天地.png",
  "cooking-enjoy": "assets/smart-scenes/13_做饭也享受.png",
  "music": "assets/smart-scenes/14_音乐随我走.png",
  "morning": "assets/smart-scenes/15_家里也能感受晨昏.png",
  "bed-temp": "assets/smart-scenes/16_一张床冷暖兼顾.png",
  "relax": "assets/smart-scenes/17_放松环境一键切换.png",
  "sleep-quiet": "assets/smart-scenes/18_睡后声光无扰.png",
  "night-light": "assets/smart-scenes/19_起夜柔光追随.png",
  "warm-after-bath": "assets/smart-scenes/20_洗后一路暖和.png",
  "elderly-care": "assets/smart-scenes/21_老人独处守护.png",
  "learning": "assets/smart-scenes/22_孩子学习陪伴.png",
  "grow": "assets/smart-scenes/23_孩子长大家跟着变.png",
  "pet-home": "assets/smart-scenes/24_宠物独自在家.png",
  "plant": "assets/smart-scenes/25_花草时刻被照料.png",
  "guest-welcome": "assets/smart-scenes/26_来客迎接送客复原.png",
  "guest-privacy": "assets/smart-scenes/27_来客隐私保护.png",
  "settings": "assets/smart-scenes/28_常用设置记住.png",
  "home-overview": "assets/smart-scenes/29_家里状态一眼看.png",
  "safety": "assets/smart-scenes/30_异常安全提醒.png",
  "leak": "assets/smart-scenes/31_漏水及时止损.png",
  "offline": "assets/smart-scenes/32_断网照常用.png",
  "privacy": "assets/smart-scenes/33_隐私自己定.png",
  "updates": "assets/smart-scenes/34_家电功能常更新.png",
  "local-response": "assets/smart-scenes/35_本地响应更及时.png",
  "power": "assets/smart-scenes/36_停电先保要紧的.png"
};

/* 后续将按“场景 ID: 说明文案”的格式继续补充。 */
const SMART_SCENE_DESCRIPTIONS = {
  "point-control": "指着设备说“把那个关了”，不用记设备名称。",
  "voice": "用“有点闷”“别这么亮”等日常说法表达需求，有歧义时先确认。",
  "one-sentence": "一次交代多个要求，分别执行并反馈结果。",
  "edit-anytime": "接着说“再低一点”“刚才那个取消”，能接上前面的要求。",
  "recognize-family": "认出回家的家人，按各自偏好准备环境。",
  "welcome-home": "根据预计到家时间，提前准备舒适环境，行程变化可调整。",
  "away-check": "出门前检查门窗、水电和仍在运行的设备。",
  "exercise-meal": "结合运动状态、饮食偏好与现有食材推荐餐食，再由人确认。",
  "chores": "说清几点要用，帮助安排各项家务的开始和完成时间。",
  "reminder": "到加料、转烘、取物等步骤时，提醒合适的人接手。",
  "adjust": "临时离开或计划改变后，调整尚未完成的任务。",
  "focus-space": "围绕办公或阅读位置，准备适合自己的光、风、温度和声音。",
  "cooking-enjoy": "做饭时既看得清、待得舒服，也有喜欢的音乐或陪伴。",
  "music": "换个房间，想听的内容按需接着播放。",
  "morning": "家中光线随日光与个人作息柔和变化。",
  "bed-temp": "同处一个空间，也能照顾不同家人的冷暖感受。",
  "relax": "一句话或一次操作，切换到自己喜欢的放松环境。",
  "sleep-quiet": "确认睡着后，按设置降低灯光、指示灯和设备声音的干扰。",
  "night-light": "半夜起身时沿途柔和照明，回来后再变暗。",
  "warm-after-bath": "洗澡、更衣到上床，减少途中忽冷忽热的感觉。",
  "elderly-care": "发现久未活动或疑似跌倒等异常时，提醒家人核实。",
  "learning": "准备适合学习的环境，按约定提醒休息。",
  "grow": "孩子成长后，按阶段更新作息、环境和可用权限。",
  "pet-home": "人在外时，维持宠物饮水与适宜环境，异常时有人接手。",
  "plant": "忙碌或外出时，按不同植物需要照顾浇水和环境。",
  "guest-welcome": "确认客人到访后，准备公共区域的待客环境。",
  "guest-privacy": "来客时收起不宜展示的私人画面和信息。",
  "settings": "从反复操作中发现习惯，询问是否以后照着做。",
  "home-overview": "集中查看温湿、水电、能耗及需要处理的情况。",
  "safety": "结合用水、设备运行和人在家情况，判断是否需要提醒。",
  "leak": "检测到漏水时按预先授权保护，再通知家人处理。",
  "offline": "公网中断后，支持范围内的常用控制和自动任务仍可用。",
  "privacy": "自己决定哪些感知能开启，哪些数据能记录、上传或删除。",
  "updates": "支持升级的设备可获得新功能和优化，重要变化可确认。",
  "local-response": "支持范围内的请求在家中处理，减少云端往返等待。",
  "power": "有家庭备电时，优先维持关键设备运行。"
};

const SCENES = [
  ["open-window", "想开窗透透气", 1.9, 10.1, 11.1, 25.6],
  ["odor", "屋里有浮灰、花粉或异味", 13.2, 10.1, 10.6, 25.6],
  ["sleep", "对睡眠环境要求高", 24.0, 10.1, 10.7, 25.6],
  ["shared-bed", "同床睡觉，各有冷暖", 35.0, 10.1, 10.6, 25.6],
  ["child-floor", "孩子爬坐在地上玩", 48.0, 10.1, 8.5, 25.6],
  ["elderly", "老人吹空调怕冷又怕风", 56.8, 10.1, 8.5, 25.6],
  ["pet-temperature", "宠物对温度需求不同", 64.7, 10.1, 8.3, 25.6],
  ["pet-allergy", "家庭成员对宠物毛发过敏", 73.0, 10.1, 8.3, 25.6],
  ["pet-odor", "宠物拉尿或猫砂味太大", 81.5, 10.1, 8.2, 25.6],
  ["smoking", "有家人习惯抽烟", 90.0, 10.1, 6.7, 25.6],
  ["home-workout", "在家里做运动或锻炼", 1.9, 46.4, 12.0, 22.7],
  ["night-return", "晚上运动完回家", 14.3, 46.4, 11.7, 22.7],
  ["open-kitchen", "在开放式厨房做饭", 26.2, 46.4, 11.7, 22.7],
  ["dining-hotpot", "客餐厅围桌吃火锅", 38.3, 46.4, 10.8, 22.7],
  ["winter", "冬天头热脚冷", 51.0, 46.4, 12.3, 22.7],
  ["pollen", "花粉季开窗或关窗", 63.5, 46.4, 11.6, 22.7],
  ["rainy", "梅雨天屋里物品返潮", 75.4, 46.4, 11.6, 22.7],
  ["autumn-winter", "秋冬待在屋里太干", 87.2, 46.4, 10.7, 22.7],
  ["laundry", "洗衣房又热又潮", 1.9, 79.9, 22.8, 17.5],
  ["basement", "地下室或阳光房的温湿度", 25.7, 79.9, 22.8, 17.5],
  ["away-home", "好久没住，回家住几天", 51.1, 79.9, 23.0, 17.5],
  ["filter-cleaning", "空调、新风或净化器滤网清洗", 74.8, 79.9, 23.3, 17.5]
];

const VISITED_KEY = "colmo-air-visited-scenes-v2";
const getVisited = () => new Set(JSON.parse(localStorage.getItem(VISITED_KEY) || "[]"));
const setVisited = (visited) => localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]));

function initHome() {
  const container = document.querySelector("#scene-hotspots");
  if (!container) return;
  const visited = getVisited();
  SCENES.forEach(([id, label, left, top, width, height]) => {
    const card = document.createElement("button");
    card.className = `scene-card${visited.has(id) ? " is-visited" : ""}`;
    card.type = "button";
    card.dataset.scene = id;
    card.setAttribute("aria-label", label);
    card.title = label;
    card.style.cssText = `left:${left}%;top:${top}%;width:${width}%;height:${height}%;`;
    card.addEventListener("click", () => {
      visited.add(id);
      setVisited(visited);
      card.classList.add("is-visited");
      if (SCENE_TARGETS[id]) window.location.href = `scene.html?scene=${encodeURIComponent(id)}`;
    });
    container.appendChild(card);
  });
}

function initDetail() {
  const title = document.querySelector("#scene-title");
  if (!title) return;
  const id = new URLSearchParams(window.location.search).get("scene");
  const scene = SCENES.find(([sceneId]) => sceneId === id);
  if (!scene) return;
  const [, label] = scene;
  title.textContent = label;
  const target = SCENE_TARGETS[id];
  if (!target) {
    window.location.replace("index.html");
    return;
  }
  const image = document.querySelector("#scene-image");
  image.src = target;
  image.alt = `${label}场景详情图`;
  image.hidden = false;
}

initHome();
initDetail();

const SMART_SCENES = [
  ["point-control", "指哪控哪", 1.2, 8.1, 15.8, 12.5], ["voice", "随口说也听懂", 17.3, 8.1, 15.2, 12.5],
  ["one-sentence", "一句话直接办几件事", 1.2, 21.3, 15.8, 12.5], ["edit-anytime", "随时能改口", 17.3, 21.3, 15.2, 12.5],
  ["recognize-family", "随时认出全家人", 34.4, 7.8, 15.5, 18.0], ["welcome-home", "到家前舒适环境已备好", 50.3, 7.8, 15.5, 18.0], ["away-check", "离家一键查漏", 34.4, 26.5, 31.4, 8.3],
  ["focus-space", "可专注的小天地", 67.5, 7.8, 15.4, 10.8], ["cooking-enjoy", "做饭也享受", 83.4, 7.8, 15.4, 10.8], ["music", "音乐随我走", 67.5, 19.3, 15.4, 10.8], ["morning", "家里也能感受晨昏", 83.4, 19.3, 15.4, 10.8], ["bed-temp", "一张床冷暖兼顾", 67.5, 30.7, 31.4, 6.3],
  ["exercise-meal", "运动后智慧备餐", 1.2, 42.5, 15.8, 10.9], ["chores", "统筹家务任务与时间", 17.3, 42.5, 15.2, 10.9], ["reminder", "该接手时提醒", 1.2, 54.0, 15.8, 10.9], ["adjust", "临时有事随时调整设备", 17.3, 54.0, 15.2, 10.9],
  ["relax", "放松环境一键切换", 34.4, 42.5, 15.5, 9.5], ["sleep-quiet", "睡后声光无扰", 50.3, 42.5, 15.5, 9.5], ["night-light", "起夜柔光追随", 34.4, 52.7, 15.5, 9.5], ["warm-after-bath", "洗后一路暖和", 50.3, 52.7, 15.5, 9.5],
  ["guest-welcome", "来客迎接与送客复原", 67.5, 46.7, 15.4, 14.5], ["guest-privacy", "来客隐私保护", 83.4, 46.7, 15.4, 14.5],
  ["settings", "常用设置记住", 1.5, 69.6, 15.3, 12.4], ["home-overview", "家里状态一眼看", 17.2, 69.6, 15.3, 12.4], ["safety", "异常安全提醒", 1.5, 83.1, 15.3, 12.4], ["leak", "漏水及时止损", 17.2, 83.1, 15.3, 12.4],
  ["elderly-care", "老人独处守护", 34.5, 69.6, 15.3, 8.0], ["learning", "孩子学习陪伴", 50.2, 69.6, 15.3, 8.0], ["grow", "孩子长大家跟着变", 34.5, 78.2, 15.3, 8.0], ["pet-home", "宠物独自在家", 50.2, 78.2, 15.3, 8.0], ["plant", "花草时刻被照料", 34.5, 87.0, 31.0, 6.0],
  ["offline", "断网照常用", 67.6, 69.6, 10.0, 12.4], ["privacy", "隐私自己定", 77.9, 69.6, 10.0, 12.4], ["updates", "家电功能常更新", 88.2, 69.6, 10.0, 12.4], ["local-response", "本地响应更及时", 67.6, 83.1, 15.1, 10.0], ["power", "停电先保要紧的", 83.3, 83.1, 15.1, 10.0]
];

function initSmartHome() {
  const container = document.querySelector("#smart-scene-hotspots");
  if (!container) return;
  const visited = new Set(JSON.parse(localStorage.getItem("colmo-smart-visited-scenes-v2") || "[]"));
  SMART_SCENES.forEach(([id, label, left, top, width, height]) => {
    const card = document.createElement("button");
    card.className = `scene-card${visited.has(id) ? " is-visited" : ""}`;
    card.type = "button";
    card.setAttribute("aria-label", label);
    card.title = label;
    const description = SMART_SCENE_DESCRIPTIONS[id];
    if (description) {
      const tooltip = document.createElement("span");
      tooltip.className = "scene-tooltip";
      tooltip.textContent = description;
      card.appendChild(tooltip);
    }
    card.style.cssText = `left:${left}%;top:${top}%;width:${width}%;height:${height}%;`;
    card.addEventListener("click", () => {
      visited.add(id);
      localStorage.setItem("colmo-smart-visited-scenes-v2", JSON.stringify([...visited]));
      card.classList.add("is-visited");
      if (SMART_SCENE_TARGETS[id]) window.location.href = `smart-scene.html?scene=${encodeURIComponent(id)}`;
    });
    container.appendChild(card);
  });
}

function initSmartDetail() {
  const title = document.querySelector("#smart-scene-title");
  if (!title) return;
  const id = new URLSearchParams(window.location.search).get("scene");
  const scene = SMART_SCENES.find(([sceneId]) => sceneId === id);
  if (!scene || !SMART_SCENE_TARGETS[id]) { window.location.replace("smart.html"); return; }
  title.textContent = scene[1];
  const image = document.querySelector("#smart-scene-image");
  image.src = SMART_SCENE_TARGETS[id];
  image.alt = `${scene[1]}场景详情图`;
  image.hidden = false;
}

initSmartHome();
initSmartDetail();
