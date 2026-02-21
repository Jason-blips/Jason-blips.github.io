---
permalink: /
title: "Zhuoran Fu (付卓然)"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div id="home"></div>
## Home

**Zhuoran Fu (付卓然)**

I am a Computer Science undergraduate at the University of York, United Kingdom, with a specialization in Software & Systems Engineering. My academic journey is complemented by hands-on experience in full-stack development, game development, and data science.

I am proficient in multiple programming languages (Java, Python, C++, JavaScript) and modern frameworks (React, Vue, Node.js, Flask), enabling me to build scalable applications and tackle complex technical challenges. My work focuses on creating practical solutions that bridge theoretical knowledge with real-world applications.

## Research Interests

My research interests include:
* Software Engineering and Systems Design
* Machine Learning and Data Science
* Web Development and Full-Stack Applications
* Game Development and Interactive Systems

<div id="achievements"></div>
## Achievements

### Academic & Competition Achievements

* **Finalist**, Huawei 2024 UK Tech Arena Programming Competition (Track 1)
* **Top 1000 globally**, Kaggle Machine Learning Competition (5+ public competitions)
* **Bronze Medal**, Cambridge Chemistry Challenge (C3L6), 2023
* **Gold Medal**, Singapore Mathematical Olympiad (SMO), 2022
* **Silver Medal**, British Physics Olympiad (BPhO), 2021

### Skills & Certifications

_To be updated with additional certifications and achievements._

<div id="portfolio"></div>
## Portfolio

Here you can find a collection of my projects, work samples, and other portfolio items that showcase my skills and interests.

{% include base_path %}

{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}

<div id="contact"></div>
## Contact

<style>
.contact-container {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.contact-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid rgba(74, 144, 226, 0.15);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4a90e2, #5ba3f5, #4a90e2);
  background-size: 200% 100%;
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(74, 144, 226, 0.15);
  border-color: rgba(74, 144, 226, 0.3);
}

.contact-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #fff;
  background: linear-gradient(135deg, #4a90e2 0%, #5ba3f5 100%);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.25);
}

.contact-card h3 {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  letter-spacing: -0.3px;
}

.contact-info {
  color: #555;
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}

.contact-link {
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.contact-link:hover {
  color: #2c5aa0;
  transform: translateX(2px);
}

.contact-link i {
  font-size: 14px;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 15px;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background: #fff;
  border: 1.5px solid #e0e7ef;
  border-radius: 10px;
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
}

.social-button:hover {
  background: linear-gradient(135deg, #4a90e2 0%, #5ba3f5 100%);
  color: #fff;
  border-color: #4a90e2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.2);
}

.social-button i {
  font-size: 16px;
}

.contact-note {
  margin-top: 35px;
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 12px;
  border: 1px solid #e0e7ef;
  border-left: 4px solid #4a90e2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.contact-note p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

.contact-note strong {
  color: #2c3e50;
  font-weight: 600;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="contact-container">
  <div class="contact-card">
    <div class="contact-icon">
      <i class="fas fa-envelope"></i>
    </div>
    <h3>Email</h3>
    <p class="contact-info">
      <a href="mailto:zxn515@york.ac.uk" class="contact-link">
        zxn515@york.ac.uk
        <i class="fas fa-external-link-alt"></i>
      </a>
    </p>
  </div>

  <div class="contact-card">
    <div class="contact-icon">
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <h3>Location</h3>
    <p class="contact-info">
      University of York<br>
      York, United Kingdom
    </p>
  </div>

  <div class="contact-card">
    <div class="contact-icon">
      <i class="fas fa-share-alt"></i>
    </div>
    <h3>Connect</h3>
    <div class="social-grid">
      <a href="https://linkedin.com/in/zhuoran-fu-932867352" target="_blank" rel="noopener noreferrer" class="social-button">
        <i class="fab fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/Jason-blips" target="_blank" rel="noopener noreferrer" class="social-button">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
      </a>
      <a href="https://www.kaggle.com/zhuoranfu" target="_blank" rel="noopener noreferrer" class="social-button">
        <i class="fab fa-kaggle"></i>
        <span>Kaggle</span>
      </a>
    </div>
  </div>
</div>

<div class="contact-note">
  <p>
    <strong>Response Time:</strong> I typically respond to emails within 1-2 business days. For urgent matters, please mention it in the subject line.
  </p>
</div>
