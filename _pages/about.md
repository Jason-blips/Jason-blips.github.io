---
permalink: /
title: "Zhuoran Fu (付卓然)"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## Home

Hello! I am **Zhuoran Fu (付卓然)**, you can call me Justin. I am pursuing my Bachelor's degree in Computer Science at the University of York, United Kingdom, specializing in Software & Systems Engineering. With a GPA of 92/100, I am passionate about software development, machine learning, and data science.

I have experience in full-stack web development, game development, and data science. My technical skills span multiple programming languages (Java, Python, C++, JavaScript) and frameworks (React, Vue, Node.js, Flask). I enjoy building practical applications and solving complex problems.

### Research Interests

My research interests include:
* Software Engineering and Systems Design
* Machine Learning and Data Science
* Web Development and Full-Stack Applications
* Game Development and Interactive Systems

## Achievements

* Finalist, Huawei 2024 UK Tech Arena Programming Competition (Track 1)
* Top 1000 globally, Kaggle Machine Learning Competition (5+ public competitions)
* Bronze Medal, Cambridge Chemistry Challenge (C3L6), 2023
* Gold Medal, Singapore Mathematical Olympiad (SMO), 2022
* Silver Medal, British Physics Olympiad (BPhO), 2021

## Contact

Feel free to reach out via email at zxn515@york.ac.uk or connect with me on [LinkedIn](https://linkedin.com/in/zhuoran-fu-932867352) and [GitHub](https://github.com/Jason-blips).

## Portfolio

Here are some of my key projects:

{% include base_path %}
{% for post in site.portfolio limit:3 %}
  <div style="margin-bottom: 20px;">
    <h3 style="margin-bottom: 5px;">
      <a href="{{ post.url | prepend: base_path }}" style="color: #4a90e2; text-decoration: none;">{{ post.title }}</a>
    </h3>
    {% if post.excerpt %}
      <p style="color: #666; margin-top: 5px;">{{ post.excerpt | markdownify | strip_html | truncatewords: 30 }}</p>
    {% endif %}
  </div>
{% endfor %}

<p><a href="{{ base_path }}/portfolio/" style="color: #4a90e2; text-decoration: none;">View all portfolio items →</a></p>

## CV

### Education
* **Bachelor of Science in Computer Science**, University of York, York, UK
  * Sep. 2024 – Jul. 2027
  * GPA: 92/100
  * Specialization: Engineering 1: Software & Systems Engineering

### Technical Skills
* **Programming Languages:** Java, Python, C++, JavaScript, SQL (MySQL)
* **Web & Backend:** React, Vue, Node.js, Flask, HTML/CSS
* **Tools & Platforms:** Git, Docker, IntelliJ, VS Code, PyCharm, Visual Studio
* **Data & ML:** pandas, NumPy, Matplotlib
* **Testing:** JUnit

<p><a href="{{ base_path }}/cv/" style="color: #4a90e2; text-decoration: none;">View full CV →</a></p>

## Timeline

{% include base_path %}
{% assign timeline_data = site.data.timeline %}
{% assign years = "2026,2025,2024,2023,2022,2021,2020" | split: "," %}

<div style="margin-top: 30px;">
  {% for year_str in years %}
    {% assign year = year_str | plus: 0 %}
    {% assign year_data = timeline_data[year_str] %}
    
    {% if year_data and year_data.size > 0 %}
      <h3 style="margin-top: 20px; margin-bottom: 10px; color: #333;">{{ year }}</h3>
      <ul style="margin-left: 20px; margin-bottom: 20px;">
        {% for entry in year_data %}
          <li style="margin-bottom: 8px;">
            {% if entry.url and entry.url != "" %}
              <a href="{{ entry.url }}" target="_blank" rel="noopener noreferrer" style="color: #4a90e2; text-decoration: none;">{{ entry.title }}</a>
            {% else %}
              {{ entry.title }}
            {% endif %}
            {% if entry.description and entry.description != "" %}
              <span style="color: #777; font-size: 0.9em;"> - {{ entry.description }}</span>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    {% endif %}
  {% endfor %}
</div>
