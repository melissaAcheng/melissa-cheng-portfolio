---
title: Playlistify
stack: React, Node.js, Express.js, MongoDB
slug: playlistify
date: 2022-05-22T00:00:00+00:00
github: https://github.com/timsjoo/Music-Playlists
thumb: ../images/thumbs/playlistify_1.png
---

<!-- Screenshot of the project -->

<!-- About the project, what it does -->

### About

I designed and coded this project as a team of 4. We gain famiilarilty using GitHub, creating pull and merge requests, to work on the project remotely. We decided on building an application that allows the user to create and save multiple playlists using the Spotify API to pull in tracks.

<!-- Any problems encountered -->

### Process and Learning

One issue I worked on was the ability to add the same song multiple times, but only delete one instance of it from the playlist. To solve the problem, I took the index of deleted song and created a "new" playlist, using the filter function in Javascript to include all songs except for the deleted song. Then using state, I set the new filtered list as the current playlist, which was then rerendered in the component.

<!-- Next steps -->

### Looking Ahead

There are definitely many more features we would like to add in the future, such as displaying the song's tabs/lead sheet when clicked on in the playlist.
