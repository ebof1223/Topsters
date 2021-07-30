# Topsters 

https://ebof1223.github.io/topsters/

Inspired by the social media trend of sharing your favoirte albums/artists in collage form. 

A music-based web application that fetches cover art via the ‘Last.fm’ API that is subsequently stored in an interactive 3 x 3 album art collage or ‘topster’ of the user’s favorite albums and artists, which are saved for future reference. Additionally, includes a static recommended feed loaded with premade topsters from various music instituions, critics, and forums that can be bookmarked and rearranged based on the user’s listening priorities. When viewed individually, each topster displays an enumerated track listing of each album, along with additional meta data on the artist/album.


![Screen Recording 2021-07-28 at 1 23 30 PM](https://user-images.githubusercontent.com/66833914/127378471-500b7e22-4e99-4f0f-ac64-909f0bd97c5a.gif)



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
  * Feed that displays recommended topsters (static), created topsters, and bookmarks.
  
  # Notes
  
  1. Search Speed

  The idea was to mitigate the occurences of repeating images from re-releases or singles/remix projects. Accordingly after the initial artist's discography is fetched, the algorithm cross references each result and verifies it's of album status and confirms that each listing has more than 1 track (which would be the case in most albums). This does an adequate job of filtering but inherently comes with longer query times. However, there are many edge cases the algorithm will miss. For example, a record with a single track, such as The Microphones in 2020, would get filtered out. Some singles have more than 1 track attached to them such as Baby by Justin Bieber and the remix versionb ft. Ludacris. Another edge case would be albums with identical covers but lengthy differences in their titles, stringwise. A great example would be all the re-released versions (super deluxe editions, ultimate deluxe editions) of many commercially successful records such as Nirvana's 'Nevermind' or The Beatles' 'Abbey Road'. I initially thought to use string similarities using something like Levenshtein distance but concluded that any similarity quotient I'd use would be completley arbitary, not to metion it would generate many false positives such as Led Zeppelin I - IV, or Man on the Moon I-III. A expected, this process will be particularly lengthy for artists with huge discographies e.g Bob Dylan, Buckethead.
  
 2. Search Results
 
  You may notice that no results are found for some artists, or a particular album isn't showing up. The culprit may be the search algorithm, but in my experience, it's often the case that there are misentries present i.e misspelled titles, absent cover art, etc,. An unfortunate example would be King Crimson, which returns no results. Upon further investigation, it turns out none of the, at least first 50 results, contain any cover art. Another possibility depends on the artists. The get request is limited to 99 results and doesn't paginate. I did this because of the likelihood that an artists catalog can usually fit within 50 slots, on top of my already pressing concerns for query times. However there are outliers, again, such as Bob Dylan and Buckethead. I did have the option of increaing the result array to up to 99 without pagination but that led to me discovering many duplicate titles, which comprises their unique keys. I made attempts to futher specify each key, but there were no other properties to an artist's inter/intra discography, other than album name and mbid. It turns out mbids are wildly unreliable since some entries have empty string values or the property is all together missing.
 

 3. Optimization

  This application is optimal on desktop. I did my best to accomodate smaller screen resolutions while staying true to the original design, but it ultimately lead to a cramped UI, especially in the topster create page. This led me to withdrawing from the mobile experience all together. The application is still responsive (excluding media landscape mode) but it's vestigial to say the least. This is hopefully to encourage users to try the application on desktop for the full experience. 
