"use client";

import styles from "@/styles/landing.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState("02:15:22");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(
        String(hours).padStart(2, "0") +
          ":" +
          String(minutes).padStart(2, "0") +
          ":" +
          String(seconds).padStart(2, "0")
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      {/* Header / Hero Section */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerTop}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>天</div>
              <div className={styles.logoText}>
                <h1>TianWaa</h1>
                <p>星天娃</p>
              </div>
            </div>
            <div className={styles.experienceBadge}>
              <strong>18年</strong> 专注中文教育 | 18 Tahun Fokus Pendidikan Mandarin
            </div>
          </div>

          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h2>
                3个月 
                <span>自信说中文</span>
              </h2>
              <p className={styles.heroSubtitle}>Bicara Mandarin Percaya Diri dalam 3 Bulan</p>
              <div className={styles.targetAudience}>适合人群：5岁起 - 成人</div>
              <br />
              <button className={styles.ctaButton} onClick={() => alert("Terima kasih! Tim kami akan menghubungi Anda untuk jadwal demo gratis.")}>
                <span className={styles.icon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8C3 5.239 5.239 3 8 3H16C18.761 3 21 5.239 21 8V16C21 18.761 18.761 21 16 21H8C5.239 21 3 18.761 3 16V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 9C6.448 9 6 9.448 6 10V14C6 14.552 6.448 15 7 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 9C17.552 9 18 9.448 18 10V14C18 14.552 17.552 15 17 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 18C10.105 18 11 18.895 11 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 18C13.895 18 13 18.895 13 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 20H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>
                  预约免费试听
                  <br />
                  <small>Daftar Demo Gratis Sekarang!</small>
                </span>
              </button>
            </div>
            <div className={styles.heroImage}>
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=500&fit=crop" alt="Student learning" />
            </div>
          </div>
        </div>
      </header>

      {/* Urgency Bar */}
      <section className={styles.urgencyBar}>
        <div className={styles.container}>
          <div className={styles.urgencyGrid}>
            <div className={`${styles.urgencyItem} ${styles.hot}`}>
              <span className={styles.badge}>限时预约</span>
              <div className={`${styles.urgencyIcon} ${styles.clock}`}>⏱️</div>
              <div className={styles.urgencyContent}>
                <h4>免费试听倒计时</h4>
                <div className={styles.number}>{countdown}</div>
                <div style={{ fontSize: "12px", color: "#888", marginTop: "5px" }}>时　分　秒</div>
              </div>
            </div>

            <div className={styles.urgencyItem}>
              <span className={`${styles.badge} ${styles.green}`}>名额紧张</span>
              <div className={`${styles.urgencyIcon} ${styles.people}`}>👥</div>
              <div className={styles.urgencyContent}>
                <h4>今日剩余名额</h4>
                <div>
                  <span className={`${styles.number} ${styles.green}`}>12</span>
                  <span className={styles.unit}>名</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
                <div className={styles.progressText}>仅剩12%</div>
              </div>
            </div>

            <div className={`${styles.urgencyItem} ${styles.hot}`}>
              <span className={`${styles.badge} ${styles.orange}`}>火热报名</span>
              <div className={`${styles.urgencyIcon} ${styles.fire}`}>🔥</div>
              <div className={styles.urgencyContent}>
                <h4>今日报名人数</h4>
                <div>
                  <span className={`${styles.number} ${styles.orange}`}>38+</span>
                </div>
                <div style={{ fontSize: "12px", color: "#888", marginTop: "5px" }}>名同学已报名</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Native Teachers */}
      <section className={styles.whyNative}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h3>为什么选择母语老师？ | Mengapa Guru Penutur Asli Lebih Baik?</h3>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={`${styles.comparisonCard} ${styles.native}`}>
              <div className={styles.cardContent}>
                <h4>母语老师的优势</h4>
                {[
                  "发音标准（无口音） | Pengucapan standar (tanpa aksen)",
                  "表达自然（真实交流） | Ekspresi alami (komunikasi nyata)",
                  "孩子更敢开口 | Anak lebih berani berbicara",
                  "培养地道中文思维 | Membentuk Pola Pikir Mandarin yang Asli",
                ].map((item, i) => (
                  <div key={i} className={styles.comparisonItem}>
                    <span className={styles.check}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className={styles.cardImage}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop" alt="Native teacher" />
              </div>
            </div>

            <div className={styles.vsBadge}>VS</div>

            <div className={`${styles.comparisonCard} ${styles.local}`}>
              <div className={styles.cardContent}>
                <h4>印尼中文老师（持证）常见问题</h4>
                {[
                  "发音不够标准 | Pengucapan kurang standar",
                  "偏重书本，缺乏表达 | Terlalu fokus buku, kurang ekspresi",
                  "学习不敢说 | Takut berbicara saat belajar",
                  "表达不自然 | Ekspresi tidak alami",
                ].map((item, i) => (
                  <div key={i} className={styles.comparisonItem}>
                    <span className={styles.cross}>✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className={styles.cardImage}>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop" alt="Local teacher" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course System */}
      <section className={styles.courses}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h3>课程体系 | Program Kursus Terstruktur</h3>
          </div>

          <div className={styles.coursesGrid}>
            {[
              { 
                title: "少儿中文 (YCT)", 
                subtitle: "Mandarin Anak (YCT)", 
                features: ["听说读写全面提升", "拼音·词汇·句型", "趣味互动课堂"], 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                )
              },
              { 
                title: "HSK留学课程", 
                subtitle: "Kursus Persiapan HSK", 
                features: ["系统备考", "真题训练", "留学规划"], 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.178 6.347m2.178-6.347l2.178 6.347m0 0l2.178 6.347m2.178-6.347l2.178 6.347M12 21.75l2.178-6.347M12 21.75l-2.178-6.347m0 0l2.178-6.347m2.178 6.347l2.178-6.347m0 0l2.178-6.347m2.178 6.347l-2.178 6.347" />
                  </svg>
                )
              },
              { 
                title: "成人商务中文", 
                subtitle: "Mandarin Bisnis", 
                features: ["职场沟通", "商务表达", "实用口语"], 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.92a2.25 2.25 0 01-2.25-2.25v-4.07a2.25 2.25 0 01.92-1.758l3.097-2.065a2.25 2.25 0 012.18-.068l.47.282a2.25 2.25 0 002.18.068l3.097-2.065a2.25 2.25 0 012.18-.068l.47.282a2.25 2.25 0 002.18.068l3.097-2.065a2.25 2.25 0 01.92 1.758v4.07z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V3.75m0 9V3.75m0 9H15m-3 0H9" />
                  </svg>
                )
              },
              { 
                title: "快速中文课程", 
                subtitle: "Kursus Mandarin Cepat", 
                features: ["日常交流·旅游出行", "快速入门", "即学即用"], 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )
              },
            ].map((course, idx) => (
              <div key={idx} className={styles.courseCard}>
                <div className={styles.courseHeader}>
                  <div className={styles.courseIcon}>{course.icon}</div>
                  <h4>{course.title}</h4>
                  <p className={styles.subtitle}>{course.subtitle}</p>
                </div>
                <div className={styles.courseContent}>
                  <ul className={styles.courseFeatures}>
                    {course.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <a href="#" className={styles.courseButton}>Pilih Program</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types */}
      <section className={styles.classTypes}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h3>灵活班型选择 | Pilihan Kelas Fleksibel</h3>
          </div>

          <div className={styles.classGrid}>
            {[
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ), 
                title: "1对1 私教课", 
                en: "Privat 1:1", 
                desc: "个性化教学，快速提升 | Pembelajaran personal, peningkatan cepat" 
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.512 2.72a3 3 0 01-4.682-2.72M12 18.72v-2.172c0-.969.565-1.85 1.401-2.223a5.202 5.202 0 014.186 0c.836.373 1.401 1.254 1.401 2.223v2.172M12 18.72a9.094 9.094 0 01-3.741-.479m5.864 4.928a9.092 9.092 0 01-5.864 0M12 18.72a9.094 9.094 0 01-3.741-.479M12 18.72a9.094 9.094 0 013.741-.479m-4.828-4.492a2.25 2.25 0 01-1.423-.882 2.25 2.25 0 01-.882-1.423m10.562 2.305a2.25 2.25 0 00.882-1.423 2.25 2.25 0 00-1.423-.882M12 12.75a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                ), 
                title: "1对2 小组课", 
                en: "Privat 1:2", 
                desc: "高性价比，互动更多 | Harga terjangkau, interaksi lebih banyak" 
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.512 2.72a3 3 0 01-4.682-2.72M12 18.72v-2.172c0-.969.565-1.85 1.401-2.223a5.202 5.202 0 014.186 0c.836.373 1.401 1.254 1.401 2.223v2.172M12 18.72a9.094 9.094 0 01-3.741-.479m5.864 4.928a9.092 9.092 0 01-5.864 0M12 18.72a9.094 9.094 0 01-3.741-.479M12 18.72a9.094 9.094 0 013.741-.479m-4.828-4.492a2.25 2.25 0 01-1.423-.882 2.25 2.25 0 01-.882-1.423m10.562 2.305a2.25 2.25 0 00.882-1.423 2.25 2.25 0 00-1.423-.882M12 12.75a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                ), 
                title: "小班课（3-6人）", 
                en: "Kelas Kecil (3-6 orang)", 
                desc: "互动性强，开口更多 | Interaksi kuat, lebih banyak bicara" 
              },
            ].map((cls, idx) => (
              <div key={idx} className={styles.classCard}>
                <div className={styles.classIcon}>{cls.icon}</div>
                <h4>{cls.title}</h4>
                <p className={styles.en}>{cls.en}</p>
                <p>{cls.desc}</p>
                <button className={styles.classButton}>Lihat Detail</button>
              </div>
            ))}
          </div>

          <div className={styles.techBar}>技术评分级·定制学习路径 | Kelas sesuai level · Rencana belajar personal</div>
        </div>
      </section>

      {/* Campus */}
      <section className={styles.campus}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h3>雅加达实体校区 | Kampus Jakarta</h3>
          </div>

          <div className={styles.campusGrid}>
            {[
              { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop", icon: "✓", label: "温馨舒适的学习环境 | Lingkungan Nyaman & Terang" },
              { img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=200&fit=crop", icon: "👤", label: "专业教学空间 | Fasilitas Profesional" },
              { img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=200&fit=crop", icon: "⚡", label: "小班互动氛围 | Suasana Kelas Interaktif" },
              { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop", icon: "🛡️", label: "安全放心 | Aman & Terpercaya" },
            ].map((campus, idx) => (
              <div key={idx} className={styles.campusItem}>
                <img src={campus.img} alt="Campus" />
                <div className={styles.campusInfo}>
                  <div className={styles.campusIcon}>{campus.icon}</div>
                  <p>{campus.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h3>学员证言 | Testimoni Siswa</h3>
          </div>

          <div className={styles.testimonialsGrid}>
            {[
              { img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=80&h=80&fit=crop", name: "Ethan, 10岁", level: "YCT Level 2", text: "在天娃学习后，我敢开口说中文了，老师很棒，课堂很有趣! | Setelah belajar di TianWaa, saya berani bicara Mandarin. Gurunya hebat dan kelasnya seru!" },
              { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop", name: "Alicia, 9岁", level: "YCT Level 3", text: "我的中文进步很大，现在可以和爸妈、朋友聊天了! | Mandarin ku meningkat pesat, sekarang bisa ngobrol dengan guru dan teman!" },
              { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", name: "Kevin, 16岁", level: "HSK 3级", text: "HSK课程帮助我顺利通过考试，拿到了理想的分数! | Kursus HSK membantuku lulus ujian dengan nilai yang memuaskan!" },
            ].map((testimonial, idx) => (
              <div key={idx} className={styles.testimonialCard}>
                <img src={testimonial.img} alt={testimonial.name} />
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <p className={styles.testimonialAuthor}>— {testimonial.name}</p>
                <p style={{ fontSize: "12px", color: "#888" }}>{testimonial.level}</p>
                <div className={styles.stars}>★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Reviews */}
      <section className={styles.parentReviews}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h3>家长反馈 | Ulasan Orang Tua</h3>
          </div>

          <div className={styles.parentGrid}>
            {[
              { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=70&h=70&fit=crop", name: "Ibu Linda", role: "妈妈 dari Ethan", text: "老师很专业，对孩子很有耐心，孩子现在每天都主动学中文。| Guru profesional dan sabar. Anak saya sekarang belajar Mandarin setiap hari." },
              { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=70&h=70&fit=crop", name: "Bapak Andi", role: "爸爸 dari Alicia", text: "课程体系非常系统，环境也很好，我们很放心把孩子交给天娃。| Kurikulumnya sistematis, lingkungannya bagus, kami sangat percaya dengan TianWaa." },
              { img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=70&h=70&fit=crop", name: "Ibu Mei", role: "妈妈 dari Kevin", text: "孩子在这里不仅学会了中文，更重要的是变得更自信了。| Anak saya tidak hanya belajar Mandarin, tapi juga menjadi lebih percaya diri." },
            ].map((parent, idx) => (
              <div key={idx} className={styles.parentCard}>
                <img src={parent.img} alt={parent.name} />
                <p className={styles.parentText}>{parent.text}</p>
                <p className={styles.parentName}>
                  — {parent.name}
                  <br />
                  {parent.role}
                </p>
                <div className={styles.stars}>★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {[
              { icon: "🏫", number: "18年", label: "教育经验 | Tahun Pengalaman" },
              { icon: "👨‍🏫", number: "300+", label: "母语教师 | Guru Penutur Asli" },
              { icon: "👥", number: "40+", label: "专业教学团队 | Tim Pengajar Profesional" },
              { icon: "💬", number: "数千名", label: "学员的信赖选择 | Ulasan Positif Siswa" },
            ].map((item, idx) => (
              <div key={idx} className={styles.footerItem}>
                <div className={styles.footerIcon}>{item.icon}</div>
                <div className={styles.footerNumber}>{item.number}</div>
                <div className={styles.footerLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
