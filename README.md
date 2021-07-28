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
  * Verification, such as a character limit on titles, snackbar errors such as duplicate albums and album over-capacity.
  
  # Notes
  
  1. Search Speed

  The idea was to mitigate the occurences of repeating images from re-releaeses or singles/remix projects. To that end, after the initial artist's discography is fetched, the algorithm cross references each result and verifies it's of album status and confirms that each listing has more than 1 track (which would be the case in most albums). This does an adequate job of filtering but inherently comes with longer query times. However, there are many edge cases the algorithm will miss. For example, a record with a single track, such as The Microphones in 2020, would get filtered out. Some singles have more than 1 track attached to them such as Baby by Justin Bieber and the remix versionb ft. Ludacris. Another edge case would be albums with identical covers but lengthy differences in their titles, stringwise. A great example would be all the re-released versions (super deluxe editions, ultimate deluxe editions) of many commercially successful records such as Nirvana's 'Nevermind' or The Beatles' 'Abbey Road'. I initially thought to use string similarities using something like Levenshtein distance but concluded that any similarity quotient I'd use would be completley arbitary, not to metion it would generate many false positives such as Led Zeppelin I - IV, or Man on the Moon I-III. A expected, this process will be particularly lengthy for artists with huge discographies e.g Bob Dylan, Buckethead.
  
 2. Search Results
 
  You may notice that no results are found for some artists, or a particular album isn't showing up. The culprit may be the search algorithm, but in my experience, it's often the case that there are misentries present i.e misspelled titles, absent cover art, etc,. An unfortunate example would be King Crimson, which returns no results. Upon further investigation, it turns out none of the, at least first 99 results, contain any cover art. Another possibility depends on the artists. The get request is limited to 99 results and doesn't paginate. I did this because of the likelihood that an artists catalog can usually fit within 99 slots, on top of my already pressing concerns for query times. However there are outliers, again, such as Bob Dylan and Buckethead.
 
 4. Other Issues
  
  There is at least one instance where the query returns duplicate key errors - this is the case with Bob Dylan. It turns out that this is at least one instance where there exists two albums in his catalog that have been filed with equivalent titles. I only experienced this with this particular artist as of late, but it is possible, even likely, this may occur with other artist. On my end, I was unable to find any additional meta data to further specify each key - mbids are the only consistent data inter/intra discographies, and even those are wildly unreliable since there are many albums where the entry is blank, or the key is missing all together. 

 6. Optimization

  This application is optimal on desktop. I did my best to accomodate smaller screen resolutions while staying true to the original design, but it ultimately lead to a cramped UI, especially in the topster create page. 
