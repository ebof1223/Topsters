# Topsters 

Inspired by the social media trend of sharing your favoirte albums/artists in collage form. 

I wanted to create a user-friendly music-based web application that stored collections of albums that I enjoyed and I think this project achieves that spectacularly. This project also includes some pre-made topsters of popular music establishments and critics that may be of some interest. 

![Screen Shot 2021-07-27 at 5 47 13 PM](https://user-images.githubusercontent.com/66833914/127237305-ba243164-b4ed-4349-80b4-9b701033a6d4.jpg)



![Screen Recording 2021-07-26 at 8 29 30 PM](https://user-images.githubusercontent.com/66833914/127236649-bdae2fe9-b745-4915-84c9-bdd268f12cd1.gif)


  React |
  Typescript |
  Material UI |
  react-sortable-hoc |
  Transition Group |
  Last.FM API
  
  # Features
  * Create and arrange your own personal collection of favorite albums.
  * Save your topsters for future reference.
  * Topsters showcase full tracklisting of any given album.
  * View past top albums by relevant music critics and institutions.
  * Bookmark topsters and rearrange their order, setting a priority to a topsters for future listening.
  * Verification systems, such as a character limit on topsters titles, duplicate titles, and snack bar errors when adding duplicate albums.
  
  # Notes
  1. Search Speed

  The idea was to mitigate the occurences of repeating images from re-releaeses or singles/remix projects. To that end, after the initial artist's discography is fetched, the algorithm cross references each result and verifies it's album status and confirms that each listing has more than 1 track (which would be the case in most singles). This does a decent job of filtering some of the results with the caveat that the final results take a bit longer to retrieve. However, its not perfect. For example, The Microphones in 2020 record is a single ~45 minute track which would get filtered out. Some singles have more than 1 track attatched to them, such as Baby by Justin Bieber and the remix ft. Ludacris. Another edge case would be albums with identical album covers but lengthy differences in their titles, stringwise. A great example would be all the re-released versions (super deluxe editions, ultimate deluxe editions) of many commercially successful records such as Nirvana's 'Nevermind' or The Beatles' 'Abbey Road'. I initially thought to use string similarities using something like Levenshtein distance but concluded that any similarity quotient I'd use would be completley arbitary, not to metion it would generate many false positives such as Led Zeppelin I - IV, or Man on the Moon I-III. A expected, this process will be particularly lengthy for artists with huge discographies e.g Bob Dylan, Buckethead.
  
 2. Search Results
 
  You may notice that no results are found for some artists, or a particular album isn't showing up. The culprit may be the search algorithm, but in my experience, it's more often the case that there are misentries present, i.e misspelled titles, no cover art images attatched, etc,. An unfortunate example would be King Crimson: upon further investigation, it turns out none of the 50+ initial album results have any images. Another possibility depends on the artists. The get request I use is limited to 99 search results and doesn't paginate. I did this because of the likelihood of an artists entire catalog can be fit within 99 search results and I didn't want the search process to be even longer than it already is. However there are outliers. To borrow from the previous note, Bob Dylan and Buckethead.
 
 3. Optimization

  This application is optimal on desktop. I did my best to accomodate smaller screen resolutions while staying true to the original design, but it ultimately lead to a cramped UI, especially in the topster create page. 
