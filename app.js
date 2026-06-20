// SkinTeen App Logic & Data

// ==========================================
// 1. Data Definitions
// ==========================================

// Skin Concerns Data
const SKIN_CONCERNS = [
  { id: 'acne', name: '여드름', emoji: '🌋' },
  { id: 'redness', name: '붉은 기', emoji: '🥵' },
  { id: 'dryness', name: '건조함', emoji: '🌵' },
  { id: 'flakiness', name: '각질', emoji: '❄️' },
  { id: 'itchiness', name: '가려움', emoji: '🦟' },
  { id: 'sebum', name: '유분/기름', emoji: '🧈' },
  { id: 'freckles', name: '기미/잡티', emoji: '🌟' },
  { id: 'pores', name: '넓은 모공', emoji: '🕳️' },
  { id: 'pigmentation', name: '색소침착', emoji: '🎨' }
];

// Survey Questions
const SURVEY_QUESTIONS = [
  {
    key: 'dryness',
    question: '세안 후 15분 동안 아무것도 바르지 않았을 때, 내 피부 속당김은 어느 정도인가요?',
    options: [
      { text: '당김이 전혀 없고 편안하며, 오히려 유분이 올라와요.', score: 1 },
      { text: '당김은 거의 없고 피부가 부드러운 상태를 유지해요.', score: 2 },
      { text: '볼이나 입 주변이 조금 당기기 시작해요.', score: 3 },
      { text: '얼굴 전체가 팽팽하게 조이며 건조함이 확실히 느껴져요.', score: 4 },
      { text: '피부가 너무 당겨서 하얗게 일어나고 찢어질 것 같아요.', score: 5 }
    ]
  },
  {
    key: 'oiliness',
    question: '평소 오후 시간이 되었을 때 얼굴 T존(이마, 코)의 번들거림(유분)은 어느 정도인가요?',
    options: [
      { text: '개기름이나 번들거림이 거의 없이 보송해요.', score: 1 },
      { text: '코 주변에만 살짝 유분이 비치는 정도예요.', score: 2 },
      { text: '이마와 코가 확실하게 번들거리고 반짝여요.', score: 3 },
      { text: '기름종이나 파우더를 주기적으로 써야 할 정도로 많아요.', score: 4 },
      { text: '얼굴 전체에 유분이 가득하고 화장이 항상 금방 지워져요.', score: 5 }
    ]
  },
  {
    key: 'flaky',
    question: '환절기나 겨울철에 코, 뺨, 입가 주변의 하얀 각질은 얼마나 심한가요?',
    options: [
      { text: '각질이 일어난 적이 거의 없어요.', score: 1 },
      { text: '메이크업을 할 때 아주 미세하게 뜨는 정도예요.', score: 2 },
      { text: '건조한 시기에는 세안 직후 하얗게 보이기 시작해요.', score: 3 },
      { text: '눈에 띄게 허옇게 일어나서 스킨케어 흡수가 안 돼요.', score: 4 },
      { text: '각질이 갈라지고 따가울 정도로 피부 장벽이 약해져 있어요.', score: 5 }
    ]
  }
];

// Skin Types Info (Result Cards Info)
const SKIN_TYPES_INFO = {
  oily: {
    koName: '지성 피부',
    description: '유분기가 많고 피지 분비가 왕성해 모공 고민과 여드름이 자주 발생할 수 있는 지성 피부입니다. 과다 유분을 컨트롤하고, 가벼운 수분으로 유수분 밸런스를 맞춰주는 것이 중요해요!',
    ingredients: [
      { name: '티트리', tag: '피지 컨트롤 & 여드름 완화', emoji: '🌿' },
      { name: '병풀 추출물 (Cica)', tag: '민감해진 피부 긴급 진정', emoji: '🍀' },
      { name: '살리실산 (BHA)', tag: '모공 노폐물 및 각질 제거', emoji: '🧪' },
      { name: '녹차 추출물', tag: '산뜻한 수분 공급 & 산화 방지', emoji: '🍵' }
    ]
  },
  dry: {
    koName: '건성 피부',
    description: '수분과 유분이 모두 부족하여 세안 후 당김이 심하고, 각질이 쉽게 일어나며 푸석해 보일 수 있는 건성 피부입니다. 피부 장벽을 튼튼히 하고 보습막을 씌워 수분 증발을 막아야 해요!',
    ingredients: [
      { name: '세라마이드', tag: '피부 장벽 강화 & 수분 잠금', emoji: '🛡️' },
      { name: '히알루론산', tag: '촘촘한 속수분 집중 충전', emoji: '💧' },
      { name: '스쿠알란', tag: '피부 윤기막 형성 & 영양 공급', emoji: '🥥' },
      { name: '판테놀 (B5)', tag: '피부 진정 및 강력 보습 유지', emoji: '🧬' }
    ]
  },
  combination: {
    koName: '수부지 피부',
    description: '피부 표면은 유분으로 번들거리지만 피부 속은 수분이 부족해 팽팽하게 당기는 "수분 부족형 지성" 피부입니다. 끈적이지 않는 산뜻한 제형의 화장품으로 속건조를 잡아야 피지 분비도 줄어들어요!',
    ingredients: [
      { name: '자작나무 수액', tag: '속건조 해결 & 산뜻한 보습', emoji: '🌳' },
      { name: '어성초 추출물', tag: '유수분 밸런스 & 트러블 진정', emoji: '🍃' },
      { name: '판테놀', tag: '피부 장벽 케어 & 유수분 조절', emoji: '🧪' },
      { name: 'LHA / PHA', tag: '저자극 피지 및 수분 각질 제거', emoji: '✨' }
    ]
  }
};

// Cosmetic Products Database
const PRODUCT_DATABASE = [
  // --- 지성용 제품 ---
  {
    id: 'oily_skincare_1',
    category: 'skincare',
    name: '리얼 티트리 시카 카밍 토너',
    brand: '스킨틴 랩',
    price: 9800,
    emoji: '🧪',
    skinTypes: ['oily'],
    tags: ['피지조절', '가벼운 워터타입'],
    description: '국내산 티트리 추출물이 85% 들어있어 청량감을 주며, 화난 여드름을 즉각 가라앉히는 산뜻한 토너.',
    url: 'https://www.coupang.com/np/search?q=리얼 티트리 시카 카밍 토너'
  },
  {
    id: 'oily_skincare_2',
    category: 'skincare',
    name: '병풀 시카 흔적 에센스',
    brand: '퓨어그린',
    price: 18900,
    emoji: '🧴',
    skinTypes: ['oily'],
    tags: ['트러블 진정', '잡티 케어'],
    description: '고농축 마데카소사이드 성분이 들어있어 붉은 트러블 자국을 빠르게 진정시키고 얼룩덜룩함을 개선합니다.',
    url: 'https://www.coupang.com/np/search?q=병풀 시카 흔적 에셼스'
  },
  {
    id: 'oily_cleansing_1',
    category: 'cleansing',
    name: '바하 클리어 트러블 폼클렌저',
    brand: '스킨틴 랩',
    price: 8500,
    emoji: '🧼',
    skinTypes: ['oily'],
    tags: ['여드름완화', '바하성분'],
    description: '식약처 여드름 완화 기능성 인증! 모공 속 꽉 찬 기름과 블랙헤드를 말끔하게 씻어주는 미산성 클렌저.',
    url: 'https://www.coupang.com/np/search?q=바하 클리어 %ED%8%B8러ㅂ 폼클렌저'
  },
  {
    id: 'oily_cleansing_2',
    category: 'cleansing',
    name: '어성초 생녹차 약산성 버블폼',
    brand: '그린네이처',
    price: 14000,
    emoji: '🫧',
    skinTypes: ['oily', 'combination'],
    tags: ['약산성', '자극 최소화'],
    description: '누르면 풍성한 거품이 바로 나오는 저자극 버블폼. 세안 후 미끌거림 없는 상쾌하고 깨끗한 마무리.',
    url: 'https://www.coupang.com/np/search?q=어성쳀 생녹차 약산성 벼폼'
  },

  // --- 건성용 제품 ---
  {
    id: 'dry_skincare_1',
    category: 'skincare',
    name: '히알루론산 10중 수분 앰플',
    brand: '워터글로우',
    price: 9900,
    emoji: '💧',
    skinTypes: ['dry'],
    tags: ['10중보습', '피부속물광'],
    description: '크기가 다른 10가지 히알루론산 분자가 피부 겉부터 속 깊은 곳까지 촉촉함을 차곡차곡 쌓아줍니다.',
    url: 'https://www.coupang.com/np/search?q=히알루론산 10중 수분 앸플'
  },
  {
    id: 'dry_skincare_2',
    category: 'skincare',
    name: '세라마이드 인텐스 고보습 크림',
    brand: '배리어큐어',
    price: 19500,
    emoji: '🧴',
    skinTypes: ['dry'],
    tags: ['장벽보호', '48시간 잠금'],
    description: '고순도 세라마이드가 건조함으로 갈라지고 튼 피부 장벽을 꼼꼼히 메워 튼튼하고 촉촉한 피부로 케어합니다.',
    url: 'https://www.coupang.com/np/search?q=셸라마이드 인텐스 고복 크림'
  },
  {
    id: 'dry_cleansing_1',
    category: 'cleansing',
    name: '아미노 카밍 모이스처 클렌징 폼',
    brand: '배리어큐어',
    price: 9000,
    emoji: '🧼',
    skinTypes: ['dry'],
    tags: ['당김없는세안', '아미노산'],
    description: '천연 보습 인자인 아미노산 계면활성제를 사용하여 세안 후 물기를 닦아도 당기지 않는 쫀쫀한 폼.',
    url: 'https://www.coupang.com/np/search?q=아미노 카밍 모이스처 클렌징 폼'
  },
  {
    id: 'dry_cleansing_2',
    category: 'cleansing',
    name: '촉촉 코코넛 밀크 딥 클렌저',
    brand: '밀크하우스',
    price: 16000,
    emoji: '🫧',
    skinTypes: ['dry', 'combination'],
    tags: ['우유보습', '순한세정'],
    description: '부드러운 에멀전 제형으로 각질을 부드럽게 재워주고, 모공 속 노폐물은 밀크 캡슐로 보습하며 제거합니다.',
    url: 'https://www.coupang.com/np/search?q=촉촉 코코넛 ㅁ크 딥 클렌저'
  },

  // --- 수부지용 제품 ---
  {
    id: 'comb_skincare_1',
    category: 'skincare',
    name: '자작나무 수분 젤 크림',
    brand: '워터글로우',
    price: 18000,
    emoji: '🧴',
    skinTypes: ['combination'],
    tags: ['끈적임제로', '급속수분충전'],
    description: '시원한 쿨링감의 수분 젤 텍스처로, 겉돌거나 유분 번들거림 없이 가벼운 수분막만 피부 속 깊이 전달합니다.',
    url: 'https://www.coupang.com/np/search?q=자작나무 수분 젤 크림'
  },
  {
    id: 'comb_skincare_2',
    category: 'skincare',
    name: '어성초 카밍 수분 진정 세럼',
    brand: '퓨어그린',
    price: 9500,
    emoji: '🧪',
    skinTypes: ['combination'],
    tags: ['유수분밸런스', '어성초진정'],
    description: '수분 부족으로 번들거리는 유분 피지는 가라앉히고 메마른 각질층에는 청량한 어성초 수분을 밀어 넣는 수부지 추천템.',
    url: 'https://www.coupang.com/np/search?q=어성쳀 카밍 수분 진정 셸러림'
  },
  {
    id: 'comb_cleansing_1',
    category: 'cleansing',
    name: '약산성 매직 히알루론산 젤 폼',
    brand: '워터글로우',
    price: 9900,
    emoji: '🧼',
    skinTypes: ['combination', 'dry'],
    tags: ['젤투폼', '미세먼지 세정'],
    description: '순한 젤 제형이 물과 닿으면 보들보들한 거품으로 변해 겉에 낀 피지는 녹이고 피부 속 수분은 지켜냅니다.',
    url: 'https://www.coupang.com/np/search?q=약산성 매직 히알루론산 젤 폼'
  },
  {
    id: 'comb_cleansing_2',
    category: 'cleansing',
    name: '어성초 딥 클리어 클렌징 바',
    brand: '그린네이처',
    price: 7500,
    emoji: '🧼',
    skinTypes: ['combination', 'oily'],
    tags: ['천연수제비누', '피지아웃'],
    description: '자연에서 유래한 유기농 어성초 가루를 가득 담아 예민한 사춘기 피부의 유수분 균형을 바로잡아주는 클렌징 바.',
    url: 'https://www.coupang.com/np/search?q=어성쳀 딥 클리어 클렌징 바'
  }
];

// ==========================================
// 2. Application State
// ==========================================
const state = {
  currentStep: 'intro', // intro -> userInfo -> survey -> result -> products
  age: 14,
  gender: null, // 'male' | 'female'
  selectedConcerns: [], // Array of IDs, max length 3
  surveyStep: 0, // 0, 1, 2
  surveyAnswers: {
    dryness: null, // 1-5
    oiliness: null, // 1-5
    flaky: null // 1-5
  },
  diagnosedSkinType: null, // 'oily' | 'dry' | 'combination'
  productTab: 'skincare', // 'skincare' | 'cleansing'
  priceFilter: 'all' // 'all' | '10k' | '20k'
};

// ==========================================
// 3. Diagnosis Matching Algorithm
// ==========================================
function runDiagnosisAlgorithm(dryness, oiliness, flaky) {
  // dryness (1-5), oiliness (1-5), flaky (1-5)
  console.log(`[Diagnostic Log] Dryness: ${dryness}, Oiliness: ${oiliness}, Flaky: ${flaky}`);
  
  // 1. High Oiliness and High Dryness -> Dehydrated Oily (수부지)
  if (oiliness >= 3 && dryness >= 3) {
    return 'combination';
  }
  
  // 2. High Dryness and Low/Moderate Oiliness -> Dry (건성)
  if (dryness >= 3 && oiliness < 3) {
    return 'dry';
  }
  
  // 3. High Oiliness and Low/Moderate Dryness -> Oily (지성)
  if (oiliness >= 3 && dryness < 3) {
    return 'oily';
  }
  
  // 4. Fallbacks for Mild/Neutral Scores (Dryness < 3 and Oiliness < 3)
  if (oiliness > dryness) {
    return 'oily';
  } else if (dryness > oiliness) {
    return 'dry';
  } else {
    // dry = oiliness
    // if flaky score is 3 or above, tend to dry (건성), otherwise 수부지 (combination)
    return flaky >= 3 ? 'dry' : 'combination';
  }
}

// ==========================================
// 4. DOM Elements and View Controller
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('app-header');
  const btnHeaderBack = document.getElementById('btn-header-back');
  const headerTitle = document.getElementById('header-title');
  const main = document.querySelector('main');
  
  // Views
  const viewIntro = document.getElementById('view-intro');
  const viewUserInfo = document.getElementById('view-user-info');
  const viewSurvey = document.getElementById('view-survey');
  const viewResult = document.getElementById('view-result');
  const viewProducts = document.getElementById('view-products');
  
  // View Map
  const views = {
    intro: viewIntro,
    userInfo: viewUserInfo,
    survey: viewSurvey,
    result: viewResult,
    products: viewProducts
  };
  
  // Header configuration based on step
  function updateHeader() {
    if (state.currentStep === 'intro') {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
      
      // Update Title
      if (state.currentStep === 'userInfo') {
        headerTitle.textContent = '프로필 입력 (1/4)';
      } else if (state.currentStep === 'survey') {
        headerTitle.textContent = `피부 분석 설문 (2/4)`;
      } else if (state.currentStep === 'result') {
        headerTitle.textContent = '진단 결과 (3/4)';
      } else if (state.currentStep === 'products') {
        headerTitle.textContent = '맞춤 솔루션 (4/4)';
      }
    }
  }

  // Show View Helper
  function navigateTo(stepName) {
    state.currentStep = stepName;
    
    // Hide all views, show active
    Object.keys(views).forEach(key => {
      if (key === stepName) {
        views[key].classList.add('active');
      } else {
        views[key].classList.remove('active');
      }
    });
    
    // Scroll content container to top
    main.scrollTop = 0;
    
    updateHeader();
    
    // Initialize view details
    if (stepName === 'userInfo') {
      initUserInfoView();
    } else if (stepName === 'survey') {
      initSurveyView();
    } else if (stepName === 'result') {
      initResultView();
    } else if (stepName === 'products') {
      initProductsView();
    }
  }
  
  // Back navigation handler
  btnHeaderBack.addEventListener('click', () => {
    if (state.currentStep === 'userInfo') {
      navigateTo('intro');
    } else if (state.currentStep === 'survey') {
      if (state.surveyStep > 0) {
        state.surveyStep--;
        initSurveyView();
      } else {
        navigateTo('userInfo');
      }
    } else if (state.currentStep === 'result') {
      // Go back to the last question of survey
      state.surveyStep = SURVEY_QUESTIONS.length - 1;
      navigateTo('survey');
    } else if (state.currentStep === 'products') {
      navigateTo('result');
    }
  });

  // ==========================================
  // VIEW 1: INTRO VIEW
  // ==========================================
  const btnStart = document.getElementById('btn-start');
  btnStart.addEventListener('click', () => {
    navigateTo('userInfo');
  });

  // ==========================================
  // VIEW 2: USER INFO VIEW
  // ==========================================
  let userInfoInitialized = false;
  
  function initUserInfoView() {
    if (userInfoInitialized) return;
    
    const ageSlider = document.getElementById('age-slider');
    const ageBadge = document.getElementById('age-badge');
    const genderMale = document.getElementById('gender-male');
    const genderFemale = document.getElementById('gender-female');
    const concernsGrid = document.getElementById('concerns-grid');
    const concernCountSpan = document.getElementById('concern-count');
    const btnToSurvey = document.getElementById('btn-to-survey');
    
    // Age Slider
    ageSlider.addEventListener('input', (e) => {
      state.age = parseInt(e.target.value);
      ageBadge.textContent = `만 ${state.age}세`;
    });
    
    // Gender Selectors
    genderMale.addEventListener('click', () => {
      state.gender = 'male';
      genderMale.classList.add('active');
      genderFemale.classList.remove('active');
      validateUserInfoForm();
    });
    
    genderFemale.addEventListener('click', () => {
      state.gender = 'female';
      genderFemale.classList.add('active');
      genderMale.classList.remove('active');
      validateUserInfoForm();
    });
    
    // Render Skin Concerns
    concernsGrid.innerHTML = '';
    SKIN_CONCERNS.forEach(concern => {
      const card = document.createElement('div');
      card.className = 'concern-card';
      card.dataset.id = concern.id;
      
      card.innerHTML = `
        <div class="concern-emoji">${concern.emoji}</div>
        <div class="concern-name">${concern.name}</div>
      `;
      
      card.addEventListener('click', () => {
        const concernId = concern.id;
        const index = state.selectedConcerns.indexOf(concernId);
        
        if (index > -1) {
          // Already selected, remove
          state.selectedConcerns.splice(index, 1);
          card.classList.remove('active');
        } else {
          // Not selected, check limit
          if (state.selectedConcerns.length < 3) {
            state.selectedConcerns.push(concernId);
            card.classList.add('active');
          } else {
            // Shake effect or feedback
            card.style.animation = 'none';
            setTimeout(() => {
              card.style.animation = 'fadeIn 0.2s';
            }, 10);
            alert('피부 고민은 최대 3개까지만 선택이 가능해요!');
          }
        }
        
        // Update Counter
        concernCountSpan.textContent = state.selectedConcerns.length;
        
        // Update Disabled States on unselected items if count is 3
        const cards = concernsGrid.querySelectorAll('.concern-card');
        cards.forEach(c => {
          const cId = c.dataset.id;
          if (state.selectedConcerns.length >= 3 && !state.selectedConcerns.includes(cId)) {
            c.classList.add('disabled');
          } else {
            c.classList.remove('disabled');
          }
        });
        
        validateUserInfoForm();
      });
      
      concernsGrid.appendChild(card);
    });
    
    // Form Validator
    function validateUserInfoForm() {
      // Validate: gender selected, and at least 1 concern selected
      const isValid = state.gender !== null && state.selectedConcerns.length > 0;
      btnToSurvey.disabled = !isValid;
    }
    
    btnToSurvey.addEventListener('click', () => {
      navigateTo('survey');
    });
    
    userInfoInitialized = true;
  }

  // ==========================================
  // VIEW 3: SURVEY VIEW
  // ==========================================
  function initSurveyView() {
    const qData = SURVEY_QUESTIONS[state.surveyStep];
    
    // Update Header Counter
    headerTitle.textContent = `피부 분석 설문 (${state.surveyStep + 1}/${SURVEY_QUESTIONS.length})`;
    
    // Update Progress Bar
    const progressPercent = ((state.surveyStep + 1) / SURVEY_QUESTIONS.length) * 100;
    document.getElementById('survey-progress-fill').style.width = `${progressPercent}%`;
    document.getElementById('survey-step-num').textContent = state.surveyStep + 1;
    
    // Render Question & Options
    const questionContainer = document.getElementById('survey-question-container');
    questionContainer.innerHTML = `
      <div class="question-header">${qData.question}</div>
      <div class="survey-options">
        ${qData.options.map((option, idx) => {
          const isSelected = state.surveyAnswers[qData.key] === option.score;
          return `
            <div class="survey-option-btn ${isSelected ? 'active' : ''}" data-score="${option.score}">
              <span class="option-text">${option.text}</span>
              <span class="option-score">${option.score}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
    
    // Option Click Handlers
    const optionBtns = questionContainer.querySelectorAll('.survey-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all
        optionBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        btn.classList.add('active');
        
        const score = parseInt(btn.dataset.score);
        state.surveyAnswers[qData.key] = score;
        
        // Auto advance to next question after short delay (350ms)
        setTimeout(() => {
          if (state.surveyStep < SURVEY_QUESTIONS.length - 1) {
            state.surveyStep++;
            initSurveyView();
          } else {
            // Finished last question, execute algorithm and view results
            state.diagnosedSkinType = runDiagnosisAlgorithm(
              state.surveyAnswers.dryness,
              state.surveyAnswers.oiliness,
              state.surveyAnswers.flaky
            );
            navigateTo('result');
          }
        }, 350);
      });
    });
  }

  // ==========================================
  // VIEW 4: RESULT VIEW
  // ==========================================
  function initResultView() {
    const typeKey = state.diagnosedSkinType;
    const typeInfo = SKIN_TYPES_INFO[typeKey];
    
    // Update Header
    headerTitle.textContent = '진단 결과';
    
    // Render Skin Type Details
    const resultCard = document.getElementById('result-card-content');
    resultCard.innerHTML = `
      <span class="result-badge">10대 맞춤 진단 결과</span>
      <h3 class="result-skintype-title">${typeInfo.koName}</h3>
      <p class="result-description">${typeInfo.description}</p>
      
      <div class="result-divider"></div>
      
      <div class="ingredients-section">
        <div class="ingredients-title">💡 추천 핵심 유효 성분</div>
        <div class="ingredients-grid">
          ${typeInfo.ingredients.map(ing => `
            <div class="ingredient-card">
              <div class="ingredient-icon-box">${ing.emoji}</div>
              <div class="ingredient-info">
                <span class="ingredient-name">${ing.name}</span>
                <span class="ingredient-tag">${ing.tag}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    // Render User Mini Summary Box
    const userSummaryBox = document.getElementById('user-summary-box');
    const genderKo = state.gender === 'male' ? '남성' : '여성';
    
    // Get concern labels
    const concernLabels = state.selectedConcerns.map(id => {
      const concern = SKIN_CONCERNS.find(c => c.id === id);
      return concern ? concern.name : '';
    }).join(', ');
    
    userSummaryBox.innerHTML = `
      <div class="summary-item">
        <span class="summary-label">나이 / 성별</span>
        <span class="summary-value">만 ${state.age}세 · ${genderKo}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">평소 피부 고민</span>
        <span class="summary-value">${concernLabels}</span>
      </div>
    `;
    
    // Next Button (Cosmetics List)
    const btnToProducts = document.getElementById('btn-to-products');
    btnToProducts.onclick = () => {
      navigateTo('products');
    };
  }

  // ==========================================
  // VIEW 5: PRODUCTS VIEW
  // ==========================================
  let productsInitialized = false;
  
  function initProductsView() {
    renderProducts();
    
    if (productsInitialized) return;
    
    const tabSkincare = document.getElementById('tab-skincare');
    const tabCleansing = document.getElementById('tab-cleansing');
    const filterAll = document.getElementById('filter-all');
    const filter10k = document.getElementById('filter-10k');
    const filter20k = document.getElementById('filter-20k');
    
    // Tab switching
    tabSkincare.addEventListener('click', () => {
      state.productTab = 'skincare';
      tabSkincare.classList.add('active');
      tabCleansing.classList.remove('active');
      renderProducts();
    });
    
    tabCleansing.addEventListener('click', () => {
      state.productTab = 'cleansing';
      tabCleansing.classList.add('active');
      tabSkincare.classList.remove('active');
      renderProducts();
    });
    
    // Filter switching
    const filters = [
      { btn: filterAll, value: 'all' },
      { btn: filter10k, value: '10k' },
      { btn: filter20k, value: '20k' }
    ];
    
    filters.forEach(f => {
      f.btn.addEventListener('click', () => {
        state.priceFilter = f.value;
        filters.forEach(item => item.btn.classList.remove('active'));
        f.btn.classList.add('active');
        renderProducts();
      });
    });
    
    // Reset Flow Button
    const btnReset = document.getElementById('btn-reset');
    btnReset.addEventListener('click', () => {
      // Clear answers/selections
      state.selectedConcerns = [];
      state.gender = null;
      state.age = 14;
      state.surveyStep = 0;
      state.surveyAnswers = { dryness: null, oiliness: null, flaky: null };
      state.diagnosedSkinType = null;
      state.productTab = 'skincare';
      state.priceFilter = 'all';
      
      // Clean classes of gender selectors
      document.getElementById('gender-male').classList.remove('active');
      document.getElementById('gender-female').classList.remove('active');
      document.getElementById('age-slider').value = 14;
      document.getElementById('age-badge').textContent = '만 14세';
      
      // Navigate to onboarding
      navigateTo('intro');
    });
    
    productsInitialized = true;
  }
  
  function renderProducts() {
    const listContainer = document.getElementById('product-list-container');
    listContainer.innerHTML = '';
    
    // 1. Filter products by current Skin Type
    let filtered = PRODUCT_DATABASE.filter(p => p.skinTypes.includes(state.diagnosedSkinType));
    
    // 2. Filter by Category Tab (skincare / cleansing)
    filtered = filtered.filter(p => p.category === state.productTab);
    
    // 3. Filter by Price Point
    if (state.priceFilter === '10k') {
      filtered = filtered.filter(p => p.price <= 10000);
    } else if (state.priceFilter === '20k') {
      filtered = filtered.filter(p => p.price <= 20000);
    }
    
    // 4. Render Layout
    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="no-products">
          <span class="emoji">🔍</span>
          <span>선택한 가격대의 추천 제품이 없습니다.</span>
        </div>
      `;
      return;
    }
    
    filtered.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      
      // Format price with comma
      const priceFormatted = prod.price.toLocaleString() + '원';
      
      card.innerHTML = `
        <div class="product-img-box">${prod.emoji}</div>
        <div class="product-info-box">
          <div class="product-brand">${prod.brand}</div>
          <div class="product-name">${prod.name}</div>
          <div class="product-tags">
            ${prod.tags.map(tag => `<span class="product-tag">#${tag}</span>`).join('')}
          </div>
          <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 5px; line-height: 1.2;">
            ${prod.description}
          </p>
          <div class="product-price-box">
            <span class="product-price">${priceFormatted}</span>
            <a href="${prod.url}" target="_blank" class="btn-buy" style="text-decoration: none; text-align: center; display: inline-block;">구매</a>
          </div>
        </div>
      `;
      listContainer.appendChild(card);
    });
  }

  // Initial Onboarding Step
  navigateTo('intro');
});

