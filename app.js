// Genesis chapter 1 — 개역한글
const GENESIS_1 = [
  { num: 1,  text: "태초에 하나님이 천지를 창조하시니라" },
  { num: 2,  text: "땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 신은 수면에 운행하시니라" },
  { num: 3,  text: "하나님이 가라사대 빛이 있으라 하시매 빛이 있었고" },
  { num: 4,  text: "그 빛이 하나님의 보시기에 좋았더라 하나님이 빛과 어두움을 나누사" },
  { num: 5,  text: "빛을 낮이라 칭하시고 어두움을 밤이라 칭하시니라 저녁이 되며 아침이 되니 이는 첫째 날이니라" },
  { num: 6,  text: "하나님이 가라사대 물 가운데 궁창이 있어 물과 물로 나뉘게 하리라 하시고" },
  { num: 7,  text: "하나님이 궁창을 만드사 궁창 아래의 물과 궁창 위의 물로 나뉘게 하시매 그대로 되니라" },
  { num: 8,  text: "하나님이 궁창을 하늘이라 칭하시니라 저녁이 되며 아침이 되니 이는 둘째 날이니라" },
  { num: 9,  text: "하나님이 가라사대 천하의 물이 한 곳으로 모이고 뭍이 드러나라 하시매 그대로 되니라" },
  { num: 10, text: "하나님이 뭍을 땅이라 칭하시고 모인 물을 바다라 칭하시니라 하나님의 보시기에 좋았더라" },
  { num: 11, text: "하나님이 가라사대 땅은 풀과 씨 맺는 채소와 각기 종류대로 씨 가진 열매 맺는 과목을 내라 하시매 그대로 되어" },
  { num: 12, text: "땅이 풀과 각기 종류대로 씨 맺는 채소와 각기 종류대로 씨 가진 열매 맺는 나무를 내니 하나님의 보시기에 좋았더라" },
  { num: 13, text: "저녁이 되며 아침이 되니 이는 셋째 날이니라" },
  { num: 14, text: "하나님이 가라사대 하늘의 궁창에 광명이 있어 주야를 나뉘게 하고 또 그 광명으로 하여 징조와 사시와 일자와 연한이 이루라" },
  { num: 15, text: "또 그 광명이 하늘의 궁창에 있어 땅에 비취라 하시매 그대로 되니라" },
  { num: 16, text: "하나님이 두 큰 광명을 만드사 큰 광명으로 낮을 주관하게 하시고 작은 광명으로 밤을 주관하게 하시며 또 별들을 만드시고" },
  { num: 17, text: "하나님이 그것들을 하늘의 궁창에 두어 땅에 비취게 하시며" },
  { num: 18, text: "주야를 주관하게 하시고 빛과 어두움을 나뉘게 하시니라 하나님의 보시기에 좋았더라" },
  { num: 19, text: "저녁이 되며 아침이 되니 이는 넷째 날이니라" },
  { num: 20, text: "하나님이 가라사대 물들은 생물로 번성케 하라 땅 위 하늘의 궁창에는 새가 날으라 하시고" },
  { num: 21, text: "하나님이 큰 물고기와 물에서 번성하여 움직이는 모든 생물을 그 종류대로 날개 있는 모든 새를 그 종류대로 창조하시니 하나님의 보시기에 좋았더라" },
  { num: 22, text: "하나님이 그들에게 복을 주어 가라사대 생육하고 번성하여 여러 바다 물에 충만하라 새도 땅에 번성하라 하시니라" },
  { num: 23, text: "저녁이 되며 아침이 되니 이는 다섯째 날이니라" },
  { num: 24, text: "하나님이 가라사대 땅은 생물을 그 종류대로 내되 육축과 기는 것과 땅의 짐승을 종류대로 내라 하시매 그대로 되니라" },
  { num: 25, text: "하나님이 땅의 짐승을 그 종류대로 육축을 그 종류대로 땅에 기는 모든 것을 그 종류대로 만드시니 하나님의 보시기에 좋았더라" },
  { num: 26, text: "하나님이 가라사대 우리의 형상을 따라 우리의 모양대로 우리가 사람을 만들고 그로 바다의 고기와 공중의 새와 육축과 온 땅과 땅에 기는 모든 것을 다스리게 하자 하시고" },
  { num: 27, text: "하나님이 자기 형상 곧 하나님의 형상대로 사람을 창조하시되 남자와 여자를 창조하시고" },
  { num: 28, text: "하나님이 그들에게 복을 주시며 그들에게 이르시되 생육하고 번성하여 땅에 충만하라 땅을 정복하라 바다의 고기와 공중의 새와 땅에 움직이는 모든 생물을 다스리라 하시니라" },
  { num: 29, text: "하나님이 가라사대 내가 온 지면의 씨 맺는 모든 채소와 씨 가진 열매 맺는 모든 나무를 너희에게 주노니 너희 식물이 되리라" },
  { num: 30, text: "또 땅의 모든 짐승과 공중의 모든 새와 생명이 있어 땅에 기는 모든 것에게는 내가 모든 푸른 풀을 식물로 주노라 하시니 그대로 되니라" },
  { num: 31, text: "하나님이 그 지으신 모든 것을 보시니 보시기에 심히 좋았더라 저녁이 되며 아침이 되니 이는 여섯째 날이니라" },
];

// -- Parsing ----------------------------------------------------------------

function parseRef(raw) {
  const s = raw.trim().replace(/\s/g, "");
  // 창1  /  창1:3  /  창1:2-5
  const m = s.match(/^창(\d+)(?::(\d+)(?:-(\d+))?)?$/);
  if (!m) return null;
  return {
    chapter:    parseInt(m[1]),
    startVerse: m[2] ? parseInt(m[2]) : null,
    endVerse:   m[3] ? parseInt(m[3]) : null,
  };
}

function selectVerses(ref) {
  if (ref.chapter !== 1) return null;
  if (ref.startVerse === null) return GENESIS_1.slice();
  if (ref.endVerse === null)   return GENESIS_1.filter(v => v.num === ref.startVerse);
  return GENESIS_1.filter(v => v.num >= ref.startVerse && v.num <= ref.endVerse);
}

function chunkBy(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

// -- Preview ----------------------------------------------------------------

function renderPreview(chunks) {
  const canvas = document.getElementById("slidePreview");
  const countEl = document.getElementById("slideCount");

  if (!chunks || chunks.length === 0) {
    canvas.innerHTML = '<p class="placeholder-text">구절을 입력하면 첫 슬라이드 미리보기가 표시됩니다</p>';
    countEl.textContent = "";
    return;
  }

  countEl.textContent = `총 ${chunks.length}슬라이드`;

  const first = chunks[0];
  const label = chunkLabel(first);
  let html = `<div class="preview-title">${label}</div>`;
  html += '<div class="preview-verses">';
  for (const v of first) {
    html += `
      <div class="preview-verse">
        <span class="verse-num">[${v.num}]</span><span class="verse-text">${v.text}</span>
      </div>`;
  }
  html += "</div>";
  if (chunks.length > 1) {
    html += `<span class="more-slides">+${chunks.length - 1}슬라이드 더</span>`;
  }
  canvas.innerHTML = html;
}

// -- PPT generation ---------------------------------------------------------

// Font size per verse count in a chunk — keeps text readable from far
// Font size fixed at 54pt regardless of verse count
function fontSize() {
  return { num: 34, text: 54 };
}

// Label for each slide's verse range, e.g. "창세기 1:2-3"
function chunkLabel(chunk) {
  const first = chunk[0].num;
  const last  = chunk[chunk.length - 1].num;
  return first === last ? `창세기 1:${first}` : `창세기 1:${first}-${last}`;
}

function buildFileName(ref) {
  let name = "창세기_1장";
  if (ref.startVerse !== null) {
    name += ref.endVerse !== null
      ? `_${ref.startVerse}-${ref.endVerse}절`
      : `_${ref.startVerse}절`;
  }
  return name;
}

async function buildPPT(chunks, ref) {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE"; // 13.33" × 7.5" (16:9)

  const MARGIN  = 1.0;
  const W       = 13.33 - MARGIN * 2;
  // Title strip: 0.25" from top, 0.55" tall → main text starts at y=1.0
  const TITLE_Y = 0.28;
  const TEXT_Y  = 1.05;
  const TEXT_H  = 7.5 - TEXT_Y - 0.7; // 0.7" bottom margin

  for (const chunk of chunks) {
    const slide = pptx.addSlide();
    slide.background = { color: "000000" };

    const fs = fontSize();

    // ── Top-left heading: e.g. "창세기 1:2-3" ──────────────────────────────
    slide.addText(chunkLabel(chunk), {
      x: MARGIN,
      y: TITLE_Y,
      w: W,
      h: 0.55,
      fontFace: "HY견고딕",
      fontSize: 22,
      color: "555555",
      valign: "top",
    });

    // ── Verse body ───────────────────────────────────────────────────────────
    const textRuns = [];
    chunk.forEach((verse, idx) => {
      // Verse number — gray
      textRuns.push({
        text: `[${verse.num}]  `,
        options: { fontSize: fs.num, color: "666666", bold: false, fontFace: "HY견고딕" },
      });
      // Verse text — white, 54pt fixed
      textRuns.push({
        text: verse.text,
        options: { fontSize: fs.text, color: "FFFFFF", fontFace: "HY견고딕", breakLine: true },
      });
      // Spacer between verses
      if (idx < chunk.length - 1) {
        textRuns.push({
          text: " ",
          options: { fontSize: 26, breakLine: true },
        });
      }
    });

    slide.addText(textRuns, {
      x: MARGIN,
      y: TEXT_Y,
      w: W,
      h: TEXT_H,
      fontFace: "HY견고딕",
      valign: "middle",
      lineSpacingMultiple: 1.35,
    });
  }

  await pptx.writeFile({ fileName: `${buildFileName(ref)}.pptx` });
}

// -- UI wiring --------------------------------------------------------------

function setStatus(msg, type) {
  const el = document.getElementById("status");
  el.textContent = msg;
  el.className = "status " + type;
}

function clearStatus() {
  const el = document.getElementById("status");
  el.className = "status hidden";
  el.textContent = "";
}

async function generate() {
  const raw = document.getElementById("verseInput").value;
  const btn = document.getElementById("generateBtn");

  clearStatus();

  if (!raw.trim()) {
    setStatus("구절을 입력해주세요 (예: 창1:1)", "error");
    return;
  }

  const ref = parseRef(raw);
  if (!ref) {
    setStatus("형식이 올바르지 않습니다 — 예: 창1:1  /  창1:2-3  /  창1", "error");
    return;
  }
  if (ref.chapter !== 1) {
    setStatus("현재 창세기 1장만 지원합니다", "error");
    return;
  }

  const verses = selectVerses(ref);
  if (!verses || verses.length === 0) {
    setStatus("해당 구절이 없습니다 (창세기 1장은 1–31절)", "error");
    return;
  }

  const chunks = chunkBy(verses, 3);
  renderPreview(chunks);

  btn.disabled = true;
  setStatus("PPT 생성 중…", "loading");

  try {
    await buildPPT(chunks, ref);
    setStatus(`완료! ${chunks.length}슬라이드 PPT가 다운로드됩니다`, "success");
  } catch (err) {
    setStatus("오류: " + err.message, "error");
    console.error(err);
  } finally {
    btn.disabled = false;
  }
}

// Live preview as user types
document.getElementById("verseInput").addEventListener("input", e => {
  const ref = parseRef(e.target.value);
  if (!ref || ref.chapter !== 1) return;
  const verses = selectVerses(ref);
  if (verses && verses.length > 0) {
    renderPreview(chunkBy(verses, 3));
    clearStatus();
  }
});

// Enter key
document.getElementById("verseInput").addEventListener("keydown", e => {
  if (e.key === "Enter") generate();
});

// Generate button
document.getElementById("generateBtn").addEventListener("click", generate);

// Example chips
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const ref = chip.dataset.ref;
    document.getElementById("verseInput").value = ref;
    const parsed = parseRef(ref);
    if (parsed) {
      const verses = selectVerses(parsed);
      if (verses) renderPreview(chunkBy(verses, 3));
    }
  });
});
