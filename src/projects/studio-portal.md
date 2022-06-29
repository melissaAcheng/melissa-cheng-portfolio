---
title: Studio Portal
stack: React, Node.js, Express.js, MongoDB
slug: studio-portal
date: 2022-05-15T00:00:00+00:00
github: https://github.com/melissaAcheng/StudioPortal
thumb: ../images/thumbs/studio-portal_1.png
---

<!-- Screenshot of the project -->

<!-- About the project, what it does -->

## About

As a music teacher, I wanted to create an app that would allow me to easily write and share weekly lesson notes with my students. Too often my students show up to lessons having forgotten their physical lesson notebook. I decided to go with the MERN stack for React's reusability of components and MongoDB's flexibility.

<!-- Any problems encountered -->

## Process and Learning

This was one of the first projects I brainstormed and designed on my own from scratch. Surprisingly, I found the planning process to be the most challenging and without a doubt, the most important step. It was also my first time working with one to many relationships in MongoDB. Compared to SQL, querying in MongoDB requires the developer to plan out and decide how the data will be called.

There are two ways to create a one to many relationship in MongoDB - either by embedding or referencing. With embedding, all data is stored in one collection (as called in MongoDB). This is often used for storing a user's address, since the information will most likely only ever be accessed in relation to the specific user. The second way of creating a relational database is through referencing. This is more similar to the one to many relationships in SQL where the tables are linked together through a foreign key. Since I needed to reference lesson notes via a student and a teacher, I decided to use this second structure of referencing.

My last issue with building the models was deciding on how many collections to make. I initially created three - student, teacher, and notes. However, as I began coding out the application, I found that the student and teacher models and queries were essentially the same. To avoid repeated code, I created one user collection and added a role field of teacher or student.

<!-- Next steps -->

## Looking Ahead

One of the main features I wanted to add was including a YouTube video in the lesson notes so the student could easily watch or listen without navigating to a new page. Currently the teacher can copy and paste the link into the notes and the video is embedded into page. However, in the future, I would like to add a search and add feature directly in the app.
