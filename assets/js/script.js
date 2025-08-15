// Basit mobil menü ve animasyon kontrolleri
document.addEventListener('DOMContentLoaded', () => {
  // Mobil menü kontrolü
  const menuButton = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');

  if (menuButton && navbar) {
    menuButton.addEventListener('click', () => {
      navbar.classList.toggle('open');
    });
    // Menü linkine tıklandığında menüyü kapat
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbar.classList.contains('open')) {
          navbar.classList.remove('open');
        }
      });
    });
  }

  // Bölüm animasyonları için IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.2
  };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // Dil seçici için aktif sınıf değiştirici ve metin çeviri sistemi
  const langButtons = document.querySelectorAll('.language-selector .lang');
  // Çeviri anahtarları ve metinleri
  const translations = {
    tr: {
      tagline: 'Girişimci, inovatif ve insan odaklı',
      heroTitle: 'Merhaba, ben Cem Aksoy',
      heroSubtitle: 'İnsan odaklı yaklaşımıyla yenilikçi projeler geliştiren genç bir yazılım mühendisi adayıyım. Teknolojiyi insanlarla buluştururken sürdürülebilirliği ve yaratıcılığı merkeze koyarım.',
      btnAbout: 'Beni Tanıyın',
      navAbout: 'Hakkımda',
      navProjects: 'Projeler',
      navExperience: 'Deneyimler',
      navSkills: 'Beceriler',
      navValues: 'Değerler',
      navVision: 'Vizyon',
      navBlog: 'Blog',
      navGallery: 'Galeri',
      navContact: 'İletişim',
      aboutHeading: 'Hakkımda',
      aboutPara1: 'Ben Cem Aksoy. Bahçeşehir Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Hayatımın merkezinde her zaman teknolojiye olan merakım, insanlarla kurduğum güçlü bağlar ve yeni fikirleri gerçeğe dönüştürme isteğim oldu.',
      aboutHeading2: 'Küçüklükten Gelen Merak',
      aboutPara2: 'Teknolojiyle ilişkim çocuk yaşlarda başladı. 8 yaşımda bilgisayar dünyasına adım attım. 10 yaşımda, sadece bir HDMI kablosunu PS3’e bağlamak gibi basit bir merak, beni cihazların nasıl çalıştığını anlamaya yönlendirdi. 12 yaşımda kendi IP yapılanmamı ve yerel ağımı kurmaya başladım. O günden beri teknoloji benim için sadece bir araç değil, dünyayı keşfetme ve üretme şeklim oldu.',
      projectsHeading: 'Projeler',
      project1Title: 'WeShape & reSort',
      project1Desc: '2024’te Prof. Melih Elidüzgün ile geliştirdiğimiz sürdürülebilirlik odaklı iş fikrimiz ve bu fikirden doğan akıllı ayrıştırma sistemi reSort, Katalist ve CIFE iş birliğiyle gerçekleşen 4 aylık girişimcilik programında destek aldı.',
      project2Title: 'IAESTE BAU',
      project2Desc: 'Yönetim kurulu üyesi olarak şube kuruluş sürecinde görev aldım, sponsorluklar sağladım ve uluslararası değişim programlarını destekleyen etkinlikler düzenledim.',
      experienceHeading: 'Deneyimler',
      exp1Title: 'Innovation & Management Intern – Türkon Line (2024–Günümüz)',
      exp1Desc: 'İnovasyon projelerine katkı sağlıyor, Power Apps ve Power Automate çözümleri geliştiriyor, Visio ile süreç akışları tasarlıyorum. ISO 56001 standartlarına uygun süreç iyileştirme projeleri yürütüyor ve dijital dönüşümün insan odaklı yanını öğreniyorum.',
      exp2Title: 'Beşiktaş JK – VIP Operasyon (2019–2022)',
      exp2Desc: '3 yıl boyunca VIP operasyon ve araç koordinasyonu yaparak, yüksek tempolu organizasyon yönetimi ve prestijli protokol süreçlerinde deneyim kazandım.',
      expKidooTitle: 'Kidoo – IT ve İş Analisti',
      expKidooDesc: '200.000 $ yatırım almış bir start‑up’ta IT ve Business Analyst olarak görev aldım. Python, Tableau, SQL ve JIRA gibi araçlarla hem teknik hem iş analizi becerilerimi geliştirdim.',
      skillsHeading: 'Becerilerim',
      skillsCat1: 'Teknoloji & Araçlar',
      skillsCat2: 'Analiz & Yönetim',
      skillsCat3: 'İletişim & Liderlik',
      valuesHeading: 'Beni Tanımlayan Özellikler',
      value1Title: 'Meraklı',
      value1Desc: 'Küçüklüğümden beri teknolojiyi kurcalayan, “Nasıl çalışıyor?” sorusunu sormadan duramayan bir yapım var.',
      value2Title: 'İnsan Odaklı',
      value2Desc: 'Teknoloji ne kadar önemli olursa olsun, asıl gücün insan ilişkilerinden geldiğine inanırım.',
      value3Title: 'Uyumlu ve Hızlı Öğrenen',
      value3Desc: 'Sektör, proje ya da teknoloji fark etmeksizin, yeni ortamlara hızlı adapte olurum.',
      value4Title: 'Üreten ve Paylaşan',
      value4Desc: 'Ürettiğim fikirleri hayata geçirip, başkalarıyla paylaşmaktan keyif alırım.',
      visionHeading: 'Vizyonum',
      visionDesc: 'Benim hedefim, teknoloji ve iş dünyası arasındaki köprüyü kurmak. Sadece teknik bir geliştirici değil, aynı zamanda projelerin stratejik boyutunu anlayan, insanları bir araya getirebilen ve yenilikçi çözümler üretebilen biri olmak istiyorum. Gelecekte, kendi girişimimi kurarak hem teknolojiyi hem de iş geliştirme becerilerimi birleştirmek, global ölçekte sosyal ve çevresel etki yaratmak istiyorum.',
      blogHeading: 'Blog',
      blog1Title: 'Yeni Bir Başlangıç',
      blog1Desc: 'Kişisel web sitemi nasıl tasarladığımı ve bu süreçte neler öğrendiğimi anlattığım ilk blog yazımı yakında burada bulabilirsiniz.',
      blog2Title: 'Teknoloji ve Sürdürülebilirlik',
      blog2Desc: 'Sürdürülebilirlik ve teknolojinin kesişiminde neler yapılabileceğine dair fikirlerimi ve deneyimlerimi paylaşacağım.',
      blog3Title: 'Power Apps ile Çözüm Geliştirme',
      blog3Desc: 'Power Apps ve Power Automate kullanarak geliştirdiğim çözümlerden örnekler ve ipuçları.',
      galleryHeading: 'Galeri',
      contactHeading: 'İletişim',
      contactDesc: 'Benimle iletişime geçmek veya daha fazla bilgi almak için aşağıdaki kanalları kullanabilirsiniz.',
      contactGithub: 'GitHub',
      contactLinkedIn: 'LinkedIn',
      footerText: '© 2025 Cem Aksoy. Tüm hakları saklıdır.'
    },
    en: {
      tagline: 'Entrepreneurial, innovative & human‑centric',
      heroTitle: 'Hi, I’m Cem Aksoy',
      heroSubtitle: 'I’m a young software engineering student developing innovative projects with a human‑centric approach. I focus on sustainability and creativity while bringing technology to people.',
      btnAbout: 'Learn More',
      navAbout: 'About',
      navProjects: 'Projects',
      navExperience: 'Experience',
      navSkills: 'Skills',
      navValues: 'Values',
      navVision: 'Vision',
      navBlog: 'Blog',
      navGallery: 'Gallery',
      navContact: 'Contact',
      aboutHeading: 'About',
      aboutPara1: 'I’m Cem Aksoy, a third‑year software engineering student at Bahçeşehir University. My life revolves around my curiosity for technology, strong ties with people, and a drive to bring new ideas to life.',
      aboutHeading2: 'Curiosity from Childhood',
      aboutPara2: 'My relationship with technology started at a young age. I ventured into the computer world at age 8. At 10, a simple curiosity, like connecting an HDMI cable to a PS3, led me to understand how devices work. At 12, I began setting up my own IP structure and local network. Since then, technology has been more than just a tool—it’s how I explore and create.',
      projectsHeading: 'Projects',
      project1Title: 'WeShape & reSort',
      project1Desc: 'In 2024 we developed our sustainability‑focused business idea and the smart sorting system reSort with Prof. Melih Elidüzgün; this idea received support in the four‑month Katalist & CIFE entrepreneurship program.',
      project2Title: 'IAESTE BAU',
      project2Desc: 'As a board member, I contributed to establishing the branch, secured sponsorships, and organized events supporting international exchange programs.',
      experienceHeading: 'Experience',
      exp1Title: 'Innovation & Management Intern – Türkon Line (2024–Present)',
      exp1Desc: 'I contribute to innovation projects, build solutions with Power Apps and Power Automate, design process flows with Visio, run process improvement projects in line with ISO 56001 standards and learn the human‑centric side of digital transformation.',
      exp2Title: 'Beşiktaş JK – VIP Operations (2019–2022)',
      exp2Desc: 'For three years, I coordinated VIP operations and vehicle services, gaining experience in high‑paced event management and prestigious protocol processes.',
      expKidooTitle: 'Kidoo – IT & Business Analyst',
      expKidooDesc: 'I worked as an IT and Business Analyst at a start‑up that raised $200K. Using tools like Python, Tableau, SQL, and JIRA, I improved both my technical and business analysis skills.',
      skillsHeading: 'My Skills',
      skillsCat1: 'Technology & Tools',
      skillsCat2: 'Analysis & Management',
      skillsCat3: 'Communication & Leadership',
      valuesHeading: 'What Defines Me',
      value1Title: 'Curious',
      value1Desc: 'Since my childhood, I’ve been tinkering with technology, never stopping at asking, “How does it work?”',
      value2Title: 'Human‑Centric',
      value2Desc: 'No matter how important technology is, I believe real power comes from human connections.',
      value3Title: 'Adaptable & Fast Learner',
      value3Desc: 'Regardless of industry, project or technology, I adapt quickly to new environments.',
      value4Title: 'Creator & Sharer',
      value4Desc: 'I enjoy bringing my ideas to life and sharing them with others.',
      visionHeading: 'My Vision',
      visionDesc: 'My goal is to bridge the gap between technology and business. I aim not only to be a technical developer but also to understand the strategic side of projects, bring people together and create innovative solutions. In the future, I plan to combine technology and business development skills to start my own venture and create global social and environmental impact.',
      blogHeading: 'Blog',
      blog1Title: 'A New Beginning',
      blog1Desc: 'You will soon find my first blog post here, where I will share how I designed my personal website and what I learned in the process.',
      blog2Title: 'Technology & Sustainability',
      blog2Desc: 'I will share my ideas and experiences on what can be done at the intersection of sustainability and technology.',
      blog3Title: 'Solution Development with Power Apps',
      blog3Desc: 'Examples and tips from the solutions I developed using Power Apps and Power Automate.',
      galleryHeading: 'Gallery',
      contactHeading: 'Contact',
      contactDesc: 'To get in touch with me or learn more, you can use the channels below.',
      contactGithub: 'GitHub',
      contactLinkedIn: 'LinkedIn',
      footerText: '© 2025 Cem Aksoy. All rights reserved.'
    }
  };

  /**
   * Seçili dile göre sayfadaki metinleri günceller.
   * @param {string} lang 'tr' veya 'en'
   */
  function setLanguage(lang) {
    document.documentElement.lang = lang;
    const translatable = document.querySelectorAll('[data-i18n]');
    translatable.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = translations[lang][key];
      if (text) {
        el.textContent = text;
      }
    });
  }

  if (langButtons.length > 0) {
    // Varsayılan dil: Türkçe
    let currentLang = 'tr';
    setLanguage(currentLang);
    // Aktif sınıf ayarla
    langButtons.forEach(btn => {
      if (btn.classList.contains(currentLang)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    // Dinleyicileri ekle
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        langButtons.forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.classList.contains('en') ? 'en' : 'tr';
        setLanguage(currentLang);
      });
    });
  }
});