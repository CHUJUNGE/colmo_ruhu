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

const SCENES = [
  ["open-window", "想开窗透透气", 1.9, 10.1, 11.1, 25.6],
  ["odor", "屋里有浮灰、花粉或异味", 13.2, 10.1, 10.6, 25.6],
  ["sleep", "对睡眠环境要求高", 24.0, 10.1, 10.7, 25.6],
  ["shared-bed", "同床睡觉，各有冷暖", 35.0, 10.1, 10.6, 25.6],
  ["child-floor", "孩子爬坐在地上玩", 48.0, 10.1, 8.5, 25.6],
  ["elderly", "老人吹空调怕冷又怕风", 56.8, 10.1, 8.5, 25.6],
  ["pet-temperature", "宠物对温度需求不同", 65.7, 10.1, 8.3, 25.6],
  ["pet-allergy", "家庭成员对宠物毛发过敏", 74.4, 10.1, 8.3, 25.6],
  ["pet-odor", "宠物拉尿或猫砂味太大", 83.2, 10.1, 8.2, 25.6],
  ["smoking", "有家人习惯抽烟", 91.8, 10.1, 6.7, 25.6],
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

const VISITED_KEY = "colmo-air-visited-scenes";
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
