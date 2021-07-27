# Topsters 

Inspired by the social media trend of sharing your favoirte albums/artists in collage form. 

I wanted to create a user-friendly music-based web application that stored collections of albums that I enjoyed and I think this project achieves that spectacularly. This project also includes some premade topsters of popular music establishments and critics that the user may find interesting. Further, I also plan on creating a version that integrates a spotify music player so the user can enjoy any particular collection of music without having to tediously look up each album individually in order to taste test it. 

![Topsters Demo](demo. gif) / ! [](demo. gif)


Technologies/Packages
  React
  Typescript
  Material UI
  react-sortable-hoc
  Transition Group
  
  # Features
  Create and arrange your own personal collection of favorite albums
  Save your topsters for future reference
  When viewed, all topsters showcase the full tracklist from any given album
  View past top albums by relevant music critics and institutions
  Bookmark topsters and rearrange the order for future listening (Demo)
  
  # Notes
  I realize the search is a bit on the slower side. I personally don't like the results to contain repeated images or images for singles, remixes, deluxe editions etc,. To that end, after the initial artist's disocgraphy fetch, the algorithm cross references each results and verifies that it's indeed an album and the the album's title isnt already present. This does a decent job of filtering some of the results with the caveat that the final results take a bit longer to retrieve. There will still be some errors however, since some singles or remixes are labeled as 'albums', and some albums with identical album covers will have completely and sometimes lengthy differences, string-wise. 
 
 This application is optimal on desktop. I tried my best to accomodate smaller screen resolutions, but the UI is certainly not the best, especially in the topster create page. 
